# Media hosting and assets review — 2026-11-06

Twelve IDs reviewed: ten corrected, two unresolved. Three services gain one
English guidance note each. All runtime corrections concern processing-location
summaries. Matching, cookies, storage, categories, legal bases, Consent Mode,
placeholders and WordPress hints remain unchanged. No translations change.

This review distinguishes account/platform policies from individual embed
behavior. Empty inventories do not establish absence of storage. Platform
cookie tables cannot establish that every cookie occurs on a static image
request. A provider's headquarters is not a storage-region guarantee.

## bunny-stream

Outcome: **corrected**, version 1 → 2.

Replace the Slovenia implication with worldwide CDN delivery and configurable
storage. The current [data and privacy guide](https://bunny.net/docs/stream/data-and-privacy)
describes worldwide performance endpoints; the [Stream CLI guide](https://bunny.net/blog/manage-bunny-stream-from-the-terminal-with-the-bunny-net-cli/)
describes the default DE library and additional replication regions. Neither
supports assuming Slovenian storage because the provider is Slovenian.

Guidance explains the documented rememberPosition and rememberSettings controls,
including the distinction from network delivery/telemetry. Existing player and
legacy Plyr storage patterns remain; a vendor description of cookie-free
playback does not make an integration with optional advertising storage-free.
The pinned player source remains evidence for its version, not all deployments.
The current WordPress trunk main-file URL returned 404: retain the existing
hint and tagged source until the released package layout is inspected. No
compatibility guarantee or speculative rename.

## cloudpano

Outcome: **corrected**, version 1 → 2.

The existing [published privacy notice](https://docs.google.com/document/u/1/d/e/2PACX-1vQsA_vntjttu1c8A0k3vZ4VQEtm6gMGuCuqhtcPvMa2xDzWB8q1yUtM4HRAyQnNaAR2AgOi6oiM2L3t/pub)
expressly permits processing in the US and other countries where CloudPano
operates. Extend USA accordingly. The notice and published terms did not
resolve the legal entity sufficiently to fill the empty provider field.
The existing tour/share-script paths and cp_lang inventory remain. Verify
current tour-specific analytics configuration and storage in a public tour
before importing generic PostHog identifiers. No new guidance.

## kuula

Outcome: **corrected**, version 1 → 2.

The [legal content backing Kuula's policy pages](https://kuula.co/content/legal.html)
describes US processing and other countries where Kuula or its providers
operate. Extend USA accordingly. Its current terms are effective September 7,
2026. Public/private sharing and general cookies are described, but the notice
does not establish the lifetime or complete behavior of kuulaembed. Keep the
existing viewer, MLS and static embed paths; verify persistence against the
current viewer and a specified tour visibility setting. No guidance added
without a more specific, useful setup claim.

## matterport

Outcome: **corrected**, version 1 → 2.

Section 5 of [CoStar's privacy notice](https://www.costar.com/about/privacy-notice)
includes US processing and other countries, including the UK, Australia,
New Zealand, Switzerland, India and the Philippines. Extend USA rather than
implying an exclusive US region. The notice covers Matterport; the existing
CoStar provider is retained. The [SDK guide](https://matterport.github.io/developer-docs/embed-sdk/quickstart/)
and existing showcase sources support embed/SDK scope, not all storage in all
configurations. Resolve sc_anonymous_id and gpu_memory_heartbeat behavior with
a current viewer/session trace before changing them. No guidance added.

## mux

Outcome: **corrected**, version 1 → 2.

The [privacy policy](https://www.mux.com/privacy) permits international processing.
The [Mux Data privacy guide](https://www.mux.com/docs/guides/ensure-data-privacy-compliance.md)
describes optional German ingestion followed by US aggregation/reporting with
truncated IP addresses. Replace USA-only with US/other countries and optional
German ingestion; this is not EU-only hosting or a certification finding.
The current [core SDK](https://src.litix.io/core/4/mux.js) sets muxData with a
365-day expiry, supporting the existing one-year entry.

Guidance uses the [player reference](https://raw.githubusercontent.com/muxinc/elements/refs/heads/main/packages/mux-player/REFERENCE.md)
to distinguish disable-cookies, disable-tracking and preference persistence.
Unresolved: the empty storage list is not exhaustive for every player; verify
exact preference keys in the deployed version before adding them. Custom
streaming/data domains cannot be inferred from generic host matches.

## sketchfab

Outcome: **corrected**, version 1 → 2.

The current [privacy policy](https://sketchfab.com/privacy) identifies KitBash SF
Operations LLC and describes worldwide operations including the US. Extend
USA accordingly. The policy does not verify the existing sb_csrftoken one-year
lifetime on an embedded viewer; retain it pending scoped response evidence.
Viewer/model and playlist matches remain, with no inference that they all set
the same cookie. No useful additional guidance established.

## issuu

Outcome: **unresolved**, version 1 unchanged.

The [privacy notice](https://issuu.com/legal/privacy) identifies Bending Spoons
S.p.A. and allows transfers outside the EEA. The [DPA](https://issuu.com/legal/dpa)
and [cookie notice](https://issuu.com/legal/cookies) do not establish that the
existing Italy/US summary exhausts embed processing or that all current Pico
identifiers retain their listed lifetimes. Do not substitute the controller's
Italian address for a verified hosting location. Resolve with the current
processor list and a specific e.issuu.com embed trace. Retain the existing
cookie, local/session storage names and embed matching. No new guidance.

## yumpu

Outcome: **corrected**, version 1 → 2.

The [privacy policy](https://www.yumpu.com/en/info/privacy_policy) says information
usually goes to Irish servers but can also be processed outside the EEA.
Extend Ireland accordingly. The [integration guide](https://helpcenter.yumpu.com/en/articles/1139675-third-party-integration)
describes the WordPress PDF workflow; the author's [main file](https://plugins.svn.wordpress.org/yumpu-epaper-publishing/trunk/yumpu.php)
identifies version 3.0.10. This confirms a detection hint, not CookieHold
compatibility. The generic cookie notice does not establish empty persistence
for every magazine/player. Trace a public magazine with its actual integration
settings before adding names or lifetimes. No guidance added.

## unsplash

Outcome: **unresolved**, version 1 unchanged.

The [privacy policy](https://unsplash.com/privacy) confirms Unsplash Inc. and
personal-data collection but does not resolve a specific image-CDN processing
country for this catalog. Leave dataCountry empty. Do not import the main
website's cookie inventory into image delivery or assume a WordPress importer
always hotlinks its output.

The [official API hotlinking guide](https://help.unsplash.com/en/articles/2511271-guideline-hotlinking-images)
supports useful guidance about returned image URLs and discussing alternative
hosting with the API team. Its scope is API use; it is not a claim that all
manually downloaded images must remain on Unsplash infrastructure. Exact CDN
response/storage behavior and regional processing remain to be verified.

## wikimedia-commons

Outcome: **corrected**, version 1 → 2.

The [Foundation privacy policy](https://foundation.wikimedia.org/wiki/Policy:Privacy_policy)
allows processing in the US and other countries. Extend USA accordingly.
The [cookie statement](https://foundation.wikimedia.org/wiki/Policy:Cookie_statement)
supports WMF-Uniq at 365 days and WMF-Last-Access at 30 days. It did not resolve
NetworkProbeLimit's scope on static media responses; do not import all wiki
application cookies into image delivery. Retain the existing one-hour entry
pending a scoped response/current implementation check. Reuse and attribution
vary by file and are not represented by the catalog's consent category. No
new guidance needed for this review's unresolved implementation details.

## wix-media

Outcome: **corrected**, version 1 → 2.

The [Trust Center](https://www.wix.com/trust-center/faq) names US and Irish data
centers and processing through companies/providers worldwide. Replace the
Israel/USA-only summary with US, Ireland and other countries. Wix's
[site preparation guide](https://support.wix.com/en/article/preparing-your-wix-site-for-the-gdpr)
also names additional possible locations; these are not an exhaustive,
media-only residency guarantee. Retain Wix.com Ltd. as provider.

Unresolved: wixstatic.com is shared infrastructure and does not by itself
establish tracking, cookies, or a particular Wix feature. Inspect image/file
responses separately from full Wix sites before adding persistence patterns
or changing the broad detection hint. No new guidance.

## google-trends

Outcome: **corrected**, version 1 → 2.

The [Google privacy policy](https://policies.google.com/privacy) describes global
processing. Replace USA-only with worldwide; this does not assess DPF status.
Google's [cookie documentation](https://policies.google.com/technologies/cookies?hl=en)
confirms NID expires six months after last use. The [Trends sharing guide](https://support.google.com/trends/answer/4365538?hl=en)
confirms chart embedding and notes not all charts support it. Existing
Trends-specific script/host/inline patterns remain. Verify HttpOnly and actual
NID occurrence on a current public chart rather than treating a general
Google cookie description as a response trace. No filler guidance added.
