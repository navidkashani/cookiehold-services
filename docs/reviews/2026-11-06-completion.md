# Catalog review completion

The documentation review started on 2026-11-06 has an outcome for all 210
permanent service IDs. The [ledger](ledger.json) links each ID to its evidence,
resulting service version and outstanding questions. This completes the review
pass, not verification of every fact or an end-to-end integration test.

| Outcome | Services |
|---|---:|
| Supported corrections applied | 140 |
| Unresolved, runtime entry unchanged | 66 |
| Verified unchanged within the reported review scope | 4 |
| Pending review | 0 |

There are unresolved findings on **201 entries**, including 135 corrected
entries. A correction resolves the particular supported finding; it does not
certify all other fields. Use `hasUnresolvedFindings` and the linked report to
find the remaining work. The ledger is repository review documentation and
is not shipped as a website validation badge.

## Delivered guidance

There are 98 English notes across 86 services. Each optional
`guidance/<service-id>.json` file has its own revision and contains stable note
IDs, a setup/caveat kind, plain text, official source URLs and a verification
date. Runtime facts remain in the service catalog. Services without a useful
additional note have no guidance file.

The initial four examples cover:

- YouTube's privacy-enhanced embed option and its limits, supported by the
  [embed guide](https://support.google.com/youtube/answer/171780?hl=en) and
  [developer policies](https://developers.google.com/youtube/terms/developer-policies).
- Google Analytics Enhanced measurement settings and basic versus advanced
  Consent Mode, supported by the [measurement guide](https://support.google.com/analytics/answer/9216061?hl=en)
  and [Consent Mode overview](https://developers.google.com/tag-platform/security/concepts/consent-mode).
- Tag Manager consent initialization and per-tag consent checks, supported by
  [Google's tag consent documentation](https://support.google.com/tagmanager/answer/10718549?hl=en).
- Stripe.js fraud-detection coverage and the limits of disabling advanced
  collection, supported by [Stripe's fraud-detection documentation](https://docs.stripe.com/disputes/prevention/advanced-fraud-detection).

The other notes follow the same evidence standard. They describe vendor
behavior; none claim tested CookieHold behavior or automatic legal compliance.
No new translations were generated. Existing translation edits remove the
unsupported unconditional Tag Manager consent sentence, as explained in the
[pilot report](2026-11-06-pilot.md), and remove stale Smartlook cookie text so
consumers can fall back to the corrected English description, as explained in
the [recording report](2026-11-06-recording.md#smartlook).

## Consumer and release checks

The runtime schema, format number, permanent ID inventory, category, legal
basis, Consent Mode, placeholder and WordPress hints are unchanged. Every
changed service has exactly one version increment for this change set and a
2026-11-06 checked date; unchanged services retain their earlier dates.

The only matching change is the documented PayPal SDK v6 core path addition
in the [commerce report](2026-11-06-commerce.md#paypal). Legacy matches remain.
WordPress hints are not compatibility guarantees.

The runtime manifest retains exactly the same file-path inventory. Guidance
has its own `dist/guidance/index.json` manifest and `dist/guidance/en.json`
bundle, excluded from the plugin manifest and runtime service objects. The
English bundle is 52,582 bytes in this build. Its manifest carries its size,
SHA-256, independent format and repository release version.

The initial audit left release metadata unchanged and did not publish a
release. The subsequent authorized release preparation updates `release.json`
and the generated artifacts to 1.7.0. The release script and tag workflow stay
unchanged; the existing 1.6.0 tag is not overwritten. Publication is performed
through the normal merged-PR and tag workflow.

For website integration, follow [the import guide](../guidance.md#website-import):
pin an exact published release containing guidance (1.7.0 or later), fetch both manifests during
the website build, verify versions/formats/hashes, and join by permanent ID.
Omit the guidance section for missing IDs. Fail on a broken or corrupt
download rather than silently treating it as missing guidance. The website
owns rendering, marketing content and CookieHold demonstrations.

## Validation

- `npm run format`, `npm run check`, `npm test` and `npm run build` pass.
- All 32 tests pass, including nine guidance tests covering IDs, required
  evidence, real non-future dates, duplicate entries/JSON keys, plain text,
  reproducible output and isolation from the runtime manifest.
- Ledger/service inventory, every report anchor, resulting versions and
  review dates were checked together against the working tree.
- The consumer/release invariants above were compared with HEAD.
- `git diff --check` passes.

## Outstanding factual work

The batch reports distinguish confirmed facts, applied corrections and proposed
follow-ups. Common remaining limitations are account-specific hosting and
subprocessors, current versus legacy cookie variants, optional tracking
settings, generic storage-name collisions, and child-frame/server-side
behavior that cannot be established by reading an outer loader.

Some vendors return inaccessible policy pages or application shells; those
entries are unresolved, not verified unchanged. Concrete examples include
Found.ee's missing cookie inventory, Leadfeeder's current entity/hosting scope,
Taboola storage names containing spaces that the current schema cannot express,
and regional or invitation-specific Trustpilot processing. Resolve these with
the indicated official terms, product-specific implementation evidence or
controlled browser tests. Do not refresh checked dates or erase uncertain
facts merely to make the ledger appear fully verified.
