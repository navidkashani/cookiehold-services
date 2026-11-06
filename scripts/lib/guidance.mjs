import Ajv2020 from 'ajv/dist/2020.js';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { format } from './rules.mjs';

const ROOT = resolve(import.meta.dirname, '../..');
const ajv = new Ajv2020({ allErrors: true, strict: true });
const validate = ajv.compile(JSON.parse(readFileSync(resolve(ROOT, 'schema/guidance.json'), 'utf8')));

// JSON.parse normally discards duplicate object keys. Reject them before
// formatting or building so a source or note cannot silently disappear.
export function parseGuidance(text) {
  const data = JSON.parse(text);
  const tokens = text.match(/"(?:\\.|[^"\\])*"|[{}\[\]:]/g) ?? [];
  const stack = [];
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token === '{') stack.push(new Set());
    else if (token === '[') stack.push(null);
    else if (token === '}' || token === ']') stack.pop();
    else if (token.startsWith('"') && tokens[i + 1] === ':') {
      const key = JSON.parse(token);
      if (stack.at(-1).has(key)) throw new Error(`duplicate JSON key "${key}".`);
      stack.at(-1).add(key);
    }
  }
  return data;
}

/** Optional guidance/<id>.json files, joined to existing service ids. */
export function checkGuidance(files, services, today = new Date().toISOString().slice(0, 10)) {
  const problems = [];
  const ids = new Set();
  for (const [id, { text, data }] of files) {
    const where = `guidance/${id}.json`;
    const fail = (message) => problems.push(`${where}: ${message}`);
    try {
      parseGuidance(text);
    } catch (error) {
      fail(String(error));
      continue;
    }
    if (!validate(data)) {
      for (const e of validate.errors) fail(`${e.instancePath || '/'} ${e.message}`);
      continue;
    }
    if (text !== format(data)) fail('not formatted. Run npm run format.');
    if (data.id !== id) fail(`the id is "${data.id}", but the file is named "${id}".`);
    if (!services.has(data.id)) fail(`"${data.id}" is not a service.`);
    if (ids.has(data.id)) fail(`duplicate service id "${data.id}".`);
    ids.add(data.id);
    const noteIds = new Set();
    const texts = new Set();
    for (const note of data.notes) {
      if (noteIds.has(note.id)) fail(`duplicate note id "${note.id}".`);
      noteIds.add(note.id);
      const normalized = note.text.trim().replace(/\s+/g, ' ').toLowerCase();
      if (texts.has(normalized)) fail(`duplicate note text in "${note.id}".`);
      texts.add(normalized);
      if (!normalized || note.text !== note.text.trim()) fail(`${note.id}: text must be non-empty and trimmed.`);
      if (/https?:\/\/|[\[\]`*]|__|^#{1,6}\s/.test(note.text)) fail(`${note.id}: use plain text without markup or web links.`);
      const timestamp = Date.parse(`${note.checked}T00:00:00Z`);
      if (!Number.isFinite(timestamp) || new Date(timestamp).toISOString().slice(0, 10) !== note.checked) fail(`${note.id}: checked must be a real calendar date.`);
      if (note.checked > today) fail(`${note.id}: checked cannot be in the future.`);
      const sources = new Set();
      for (const source of note.sources) {
        try {
          const url = new URL(source);
          if (url.protocol !== 'https:' || !url.hostname.includes('.') || url.username || url.password) throw new Error();
          if (sources.has(url.href)) fail(`${note.id}: duplicate source URL.`);
          sources.add(url.href);
        } catch {
          fail(`${note.id}: invalid HTTPS source URL "${source}".`);
        }
      }
    }
  }
  return problems;
}
