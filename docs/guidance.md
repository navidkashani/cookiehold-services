# Service guidance

Guidance adds optional, practical vendor setup information to service pages.
English source files live in `guidance/<service-id>.json` and validate against
[`schema/guidance.json`](../schema/guidance.json). A missing file is normal.
Do not add a note just to fill space.

The filename and `id` refer to the permanent id in `services/`. Each file has
its own integer `version`, starting at 1, independent of the runtime service's
version. Its `notes` array contains:

| Field | Meaning |
|---|---|
| `id` | Stable topic id within the service. Keep it when revising that topic. |
| `kind` | `setup` for a practical action, `caveat` for a limitation or decision. |
| `text` | Short plain English text, at most 700 characters. No markup or links. |
| `sources` | One or more HTTPS URLs to official vendor pages supporting this note. |
| `checked` | Date this specific note was verified, in `YYYY-MM-DD` form. |

Array order is reading order, not a website layout instruction. Notes have no
component names, badges, styling, marketing copy or CookieHold demonstrations.
Those belong in the website project. These notes describe vendor behavior,
not a promise about how CookieHold or another WordPress plugin behaves.

## Reuse the service record

Join guidance to `services.json` by service id. Keep names, purposes, cookies,
lifetimes, storage, matching addresses, provider, privacy URL, data country,
placeholder, Consent Mode flags and WordPress detection hints in `services/`.
Use that record's `sources` and `checked` for those facts. A note's `sources`
and `checked` support only the additional guidance, not the whole record.
Refer to a domain or setting in a note only when needed to explain an action;
do not reproduce address or cookie lists.

WordPress plugin entries are detection hints, not tested compatibility
guarantees. Categories and `legalBasis` are catalog metadata, not a legal
determination for an individual site. Never turn them into a blanket
compliance claim. A verification date records a documentation review, not a
validation badge or a test of a site's implementation.

## Add and verify a note

1. Read the existing service first. Add only useful information beyond its
   purpose and cookie descriptions. Use the vendor's current documentation,
   not search snippets alone or third-party cookie databases.
2. Open every source. Check scope: product version, hosted versus embedded
   service, default versus optional behavior, and what a setting does not
   change. Paraphrase briefly and attach the supporting URLs to that note.
   Distinguish a vendor recommendation from a requirement. Do not infer
   legal requirements, lifetimes, locations or CookieHold behavior.
3. Create `guidance/<id>.json` using an existing entry as a model. Set each
   note's `checked` to the actual verification date. Keep note ids distinct.
   A file may contain only setup notes or only caveats; neither is mandatory.
4. For an update, raise the guidance file's `version` by one and recheck every
   changed note against its sources. Update only those notes' dates; a build
   or spelling-only edit is not a new factual verification. Guidance-only
   changes do not raise the runtime service version or its checked date.
5. Remove unsupported notes instead of padding them with guesses. If none
   remain, remove the optional guidance file. Never remove or rename the
   permanent service entry. Retired or replaced service ids stay distinct;
   do not silently move guidance to a replacement.
6. Record conflicting catalog facts separately, with the field, evidence and
   proposed correction, as in [the initial review](guidance-fact-review.md).
   Runtime corrections need their own review, service version increment and
   checked date under the contribution rules.
7. Run `npm run format`, `npm run check`, `npm test` and `npm run build`.
   Review the diff and sources before merging. The checks verify shape,
   references, required sources, URL syntax, real non-future dates, duplicate
   entries and plain text. They cannot prove that a vendor page supports a
   sentence; that remains a review responsibility.

Revisit sources when vendors announce relevant changes and before deliberately
refreshing guidance in the website. If a source disappears, find an official
replacement and reverify the note, or remove it. Never refresh dates in bulk.

## Languages

This first version ships English only (`locale: "en"`). No translations are
generated and no guidance is inserted into the plugin's `translations/` files.
Those files keep their existing purpose/cookie schema and WordPress locale
names. Their `machine` flag convention remains unchanged.

Adding translated guidance is a separate format/schema extension: use the
existing WordPress locale naming and terminology conventions, key text by
service and note ids, and keep names, cookie names and source URLs unchanged.
Require review by a speaker of that language before offering it as reviewed
guidance. Do not label English fallback as translated content. Until that
extension exists, display English explicitly or omit guidance on other locales.

## Build and release boundary

`npm run build` emits two additional files:

| File | Contents |
|---|---|
| `dist/guidance/index.json` | Independent guidance format, repository release version/date, file paths relative to this manifest, byte sizes and SHA-256 hashes. |
| `dist/guidance/en.json` | `{ format, version, date, locale, services: { "<id>": { version, notes } } }`. The outer version is the release; each entry's version is its guidance revision. |

Guidance format 1 is independent of runtime catalog format 1. Increase
`GUIDANCE_FORMAT` for a breaking guidance contract change and coordinate that
change with website readers. Never change the runtime format for guidance.

The plugin's `dist/index.json` does **not** list either guidance file. No new
field or URL is added to `services.json`, `release.json` or the runtime index.
This also protects plugin clients that download every file in that index.

The existing release command rebuilds all of `dist/`; the tag workflow checks
that the entire directory matches a fresh build and publishes the Git tag for
jsDelivr. No extra release attachment, plugin metadata or automatic download
is needed. Commit generated guidance with the normal release preparation.
Do not publish or move an old tag to add it. A local build uses the current
`release.json`, so its version/date alone does not mean it is published.
Guidance is introduced in 1.7.0; 1.6.0 does not contain it. Pin 1.7.0 only
after that release has been published.

## Website import

1. Choose an exact release containing guidance (1.7.0 or later) and pin it in the
   website's dependency configuration. Fetch at website build time, never in
   a visitor's browser. Do not use `@1`, `@main` or a latest-release lookup.
2. Fetch `dist/index.json` and `dist/guidance/index.json` from that same pin.
   Check their supported formats and matching release versions. Use the
   runtime manifest to verify `services.json` and the guidance manifest to
   verify `guidance/en.json` before parsing their contents.
3. Join by permanent service id, preserving the original record. Render note
   text as escaped text, with its sources and checked date as appropriate.
   The website owns layout, marketing text and CookieHold-specific examples.
4. If an id has no guidance, render the ordinary service page and omit the
   guidance section. Do not generate text, infer a negative finding, or mark
   it unverified. Missing guidance is different from a failed or corrupt
   download: fail that build and retain the last successful deployment.
5. When upgrading the pin, review the guidance and catalog diffs, including
   note removals. Validate hashes, formats and ids again. For a pin predating
   this feature, explicitly disable the guidance import rather than ignoring
   all fetch failures.

For example, this Node build step reads the version from the website's pinned
configuration (shown here as an environment variable). Set it only to a
released version that contains guidance:

```js
import { createHash } from 'node:crypto';

const version = process.env.COOKIEHOLD_SERVICES_RELEASE;
if (!/^[1-9]\d*\.\d+\.\d+$/.test(version ?? '')) throw new Error('Set an exact release');
const base = `https://cdn.jsdelivr.net/gh/veronalabs/cookiehold-services@${version}/dist/`;
async function bytes(path) {
  const response = await fetch(new URL(path, base));
  if (!response.ok) throw new Error(`Download failed: ${path} (${response.status})`);
  return Buffer.from(await response.arrayBuffer());
}
function envelope(data) {
  if (data.format !== 1 || data.version !== version) throw new Error('Unsupported format or wrong release');
  return data;
}
async function verified(manifest, path, prefix = '') {
  const entries = manifest.files.filter((file) => file.path === path);
  if (entries.length !== 1) throw new Error(`Missing or duplicate manifest entry: ${path}`);
  const entry = entries[0];
  const content = await bytes(prefix + path);
  if (content.length !== entry.size || createHash('sha256').update(content).digest('hex') !== entry.sha256) {
    throw new Error(`Integrity check failed: ${path}`);
  }
  return envelope(JSON.parse(content.toString('utf8')));
}
const runtimeIndex = envelope(JSON.parse((await bytes('index.json')).toString('utf8')));
const guidanceIndex = envelope(JSON.parse((await bytes('guidance/index.json')).toString('utf8')));
const catalog = await verified(runtimeIndex, 'services.json');
const guidance = await verified(guidanceIndex, 'en.json', 'guidance/');
if (guidance.locale !== 'en') throw new Error('Unexpected language');
const ids = new Set(catalog.services.map((service) => service.id));
for (const id of Object.keys(guidance.services)) {
  if (!ids.has(id)) throw new Error(`Unknown guidance service: ${id}`);
}
const pages = catalog.services.map((service) => ({
  service,
  notes: guidance.services[service.id]?.notes ?? [],
}));
```

Hashes check consistency with the pinned manifest, not vendor endorsement or
legal compliance. The website should retain its pin and downloaded inputs
with the build so it can reproduce a deployment.
