# Service review ledger

[ledger.json](ledger.json) inventories every permanent service id for the
review started on 2026-11-06. It is review documentation, excluded from all
build artifacts. The catalog and guidance remain the sources consumed by
applications.

The [completed review summary](2026-11-06-completion.md) records coverage,
validation and unresolved limitations for all 210 services.

## Outcomes

- `pending`: not yet researched. Never count this as a review.
- `verified-unchanged`: the reviewed facts have supporting evidence and no
  correction was needed. This does not certify a site's implementation.
- `corrected`: supported changes were made. Read the linked report for scope;
  `hasUnresolvedFindings` can still be true.
- `unresolved`: research was attempted, but evidence was insufficient or
  conflicting. The report identifies the fields and what would resolve them.

Completed reviews include the review date, resulting service version and a
report link. Keep unresolved findings explicit rather than presenting a
partially checked service as fully verified. Do not mark a failed URL fetch
as proof that the service closed or a fact became false.

## Review method

Work in batches, inspecting each service before following its sources. Use
official vendor documentation and, for detection hints, the plugin author's
source distributed through WordPress or the author's repository. Check
current effective dates; an announced future policy is not current evidence.

Cover purpose, provider, privacy URL, processing locations, cookie names and
lifetimes, storage, matching patterns, Consent Mode and WordPress hints. Review
category, legal basis and placeholder as catalog decisions; vendor documents
alone do not establish a site owner's legal basis or CookieHold behavior.
An empty cookie/storage list means no identifiers are listed, not proof of
no storage or no data exchange.

Each batch report records:

1. The facts confirmed and the primary pages supporting them.
2. Exact corrections, including any shortened existing translations.
3. Detection and consumer compatibility impact.
4. Remaining uncertainty and a concrete path to resolve it.
5. Whether optional guidance adds anything useful beyond existing fields.

Raise each changed service's version once per reviewed change set and set its
`checked` date under the contribution rules. Leave unchanged entries' dates
alone; the ledger records the new review date. Do not generate translations,
remove permanent ids, broaden shared cookie/address matches speculatively,
or turn policy categories into legal conclusions.

After each batch, run formatting, validation, tests and the build. Inspect
the source and generated diffs. Preserve the runtime format and keep guidance
out of the plugin manifest. Do not change `release.json`, create tags or
publish a release during this review. Development builds still carry the
existing release version and are not published copies of that release.

## Reports

- [Pilot: YouTube, Analytics, Tag Manager and Stripe](2026-11-06-pilot.md).
- [Media: video, music and podcast embeds](2026-11-06-media.md).
- [Analytics: hosting, optional settings and storage](2026-11-06-analytics.md).
- [Recording and product analytics: storage and collection controls](2026-11-06-recording.md).
- [Analytics regions and integrations: residency and visitor tracking](2026-11-06-analytics-regions.md).

- [Security and infrastructure: challenge settings, privacy terms and CDN scope](2026-11-06-security-infrastructure.md).

- [Fonts, maps and translation: hosting choices and service data flows](2026-11-06-fonts-maps-translation.md).

- [Commerce: checkout persistence, optional tracking and current notices](2026-11-06-commerce.md).

- [Chat and support: session controls, storage and processing regions](2026-11-06-chat.md).

- [Forms and embedded chat: consent settings, referral data and regional hosting](2026-11-06-forms.md).

- [Scheduling and Zoho: booking visibility, banner behavior and account regions](2026-11-06-scheduling.md).

- [Email and marketing: tracking controls, persistence and processing regions](2026-11-06-email-marketing.md).

- [Social and media embeds: visibility, player settings and persistence gaps](2026-11-06-social-embeds.md).

- [Media hosting and assets: player persistence, API hosting and processing regions](2026-11-06-media-hosting.md).

- [Advertising tags: cookie lifetimes, persistence and consent controls](2026-11-06-advertising-tags.md).

- [Widgets and experiments: persistence, subscriptions and configuration](2026-11-06-widgets-experiments.md).

- [Remaining integrations: bookings, affiliates, reviews and tracking](2026-11-06-remaining-integrations.md).

The audit is complete only when every ledger id has a documented outcome,
the ledger matches the service inventory, and validation, tests and the build
pass. Unresolved findings must remain visible in the final report.
