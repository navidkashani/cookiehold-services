import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import test from 'node:test';
import { build, GUIDANCE_FORMAT } from './build.mjs';
import { checkGuidance, parseGuidance } from './lib/guidance.mjs';
import { format } from './lib/rules.mjs';

const ROOT = resolve(import.meta.dirname, '..');
const example = () => ({
  $schema: 'https://cdn.jsdelivr.net/gh/veronalabs/cookiehold-services@1/schema/guidance.json',
  id: 'example', version: 1,
  notes: [{ id: 'setup-option', kind: 'setup', text: 'Review the optional measurement setting.', sources: ['https://vendor.example/docs'], checked: '2026-11-06' }],
});
const file = (data) => ({ text: format(data), data });
const services = new Map([['example', {}]]);
const check = (data) => checkGuidance(new Map([['example', file(data)]]), services, '2026-11-06');
const fails = (data, message) => assert.ok(check(data).some((problem) => problem.includes(message)), check(data).join('\n'));

test('guidance is optional; valid sourced notes pass', () => {
  assert.deepEqual(checkGuidance(new Map(), services), []);
  assert.deepEqual(check(example()), []);
});

test('guidance ids must match files and real services and cannot repeat', () => {
  const data = example();
  data.id = 'missing';
  fails(data, 'file is named');
  fails(data, 'not a service');
  const duplicate = new Map([['example', file(example())], ['other', file(example())]]);
  assert.ok(checkGuidance(duplicate, services, '2026-11-06').some((p) => p.includes('duplicate service id')));
});

test('notes require sources, dates, ids, kinds and text; runtime fields are rejected', () => {
  for (const key of ['id', 'kind', 'text', 'sources', 'checked']) {
    const data = example();
    delete data.notes[0][key];
    fails(data, 'required');
  }
  for (const change of [{ provider: 'Vendor' }, { notes: [] }, { version: 0 }]) {
    assert.notDeepEqual(check({ ...example(), ...change }), []);
  }
  const data = example();
  data.notes[0].kind = 'badge';
  fails(data, 'allowed values');
});

test('sources must be non-empty, valid HTTPS URLs without credentials or duplicates', () => {
  for (const sources of [[], ['http://vendor.example'], ['https://'], ['https://user:secret@vendor.example'], ['https://vendor.example', 'https://vendor.example'], ['https://vendor.example', 'https://vendor.example/']]) {
    const data = example();
    data.notes[0].sources = sources;
    assert.notDeepEqual(check(data), [], JSON.stringify(sources));
  }
});

test('verification dates must be real, correctly formatted and not in the future', () => {
  for (const checked of ['2026-02-29', '2026-04-31', '2026-13-01', '2026-1-01', '2026-11-07', 'not a date']) {
    const data = example();
    data.notes[0].checked = checked;
    assert.notDeepEqual(check(data), [], checked);
  }
  const data = example();
  data.notes[0].checked = '2024-02-29';
  assert.deepEqual(check(data), []);
});

test('duplicate note ids and equivalent text are rejected even when metadata differs', () => {
  const data = example();
  data.notes.push({ ...data.notes[0], text: 'Another useful note.' });
  fails(data, 'duplicate note id');
  data.notes[1] = { ...data.notes[0], id: 'another-note', kind: 'caveat', text: data.notes[0].text.toUpperCase() };
  fails(data, 'duplicate note text');
});

test('notes are bounded plain text in the canonical layout', () => {
  for (const text of ['', ' ', ' Untrimmed.', '<b>Text</b>', '**Bold**', '[Link](https://vendor.example)', 'See https://vendor.example', 'Two\nlines.', 'x'.repeat(701)]) {
    const data = example();
    data.notes[0].text = text;
    assert.notDeepEqual(check(data), [], text);
  }
  const data = example();
  const files = new Map([['example', { data, text: JSON.stringify(data) }]]);
  assert.ok(checkGuidance(files, services, '2026-11-06').some((p) => p.includes('not formatted')));
});

test('duplicate JSON keys cannot be silently removed by formatting or building', () => {
  for (const text of ['{"id":"a","id":"b"}', '{"notes":[{"sources":[],"sources":["x"]}]}', '{"id":"a","\\u0069d":"b"}']) {
    assert.throws(() => parseGuidance(text), /duplicate JSON key/);
  }
  const text = '{"notes":[{"id":"a","text":"{\\\"id\\\":1}"},{"id":"b"}]}';
  assert.deepEqual(parseGuidance(text), JSON.parse(text));
  assert.throws(() => parseGuidance('{'), SyntaxError);
  assert.notDeepEqual(check(null), []);
});

test('build isolates guidance, preserves joins and emits reproducible hashes and versions', () => {
  const out = build();
  assert.deepEqual(out, build());
  const runtimeIndex = JSON.parse(out['index.json']);
  assert.deepEqual(runtimeIndex.files.map((f) => f.path), Object.keys(out).filter((p) => p !== 'index.json' && !p.startsWith('guidance/')));
  const catalog = JSON.parse(out['services.json']);
  assert.ok(catalog.services.every((s) => !('notes' in s) && !('guidance' in s)));
  const manifest = JSON.parse(out['guidance/index.json']);
  const bundle = JSON.parse(out['guidance/en.json']);
  assert.equal(manifest.format, GUIDANCE_FORMAT);
  assert.equal(bundle.format, GUIDANCE_FORMAT);
  assert.equal(bundle.locale, 'en');
  assert.equal(bundle.version, runtimeIndex.version);
  assert.equal(manifest.version, runtimeIndex.version);
  assert.equal(bundle.date, runtimeIndex.date);
  assert.equal(manifest.date, runtimeIndex.date);
  assert.deepEqual(manifest.files.map((f) => f.path), ['en.json']);
  for (const entry of manifest.files) {
    const text = out[`guidance/${entry.path}`];
    assert.equal(entry.size, Buffer.byteLength(text));
    assert.equal(entry.sha256, createHash('sha256').update(text).digest('hex'));
  }
  const guidanceIds = readdirSync(resolve(ROOT, 'guidance')).filter((name) => name.endsWith('.json')).map((name) => name.slice(0, -5)).sort();
  assert.deepEqual(Object.keys(bundle.services).sort(), guidanceIds);
  for (const [id, entry] of Object.entries(bundle.services)) {
    assert.ok(catalog.services.some((s) => s.id === id));
    const { $schema, id: sourceId, ...source } = JSON.parse(readFileSync(resolve(ROOT, 'guidance', `${id}.json`), 'utf8'));
    assert.equal(sourceId, id);
    assert.deepEqual(entry, source);
  }
  const withoutGuidance = catalog.services.find((service) => !guidanceIds.includes(service.id));
  assert.ok(withoutGuidance, 'fixture includes services without optional guidance');
  assert.equal(bundle.services[withoutGuidance.id], undefined);
});
