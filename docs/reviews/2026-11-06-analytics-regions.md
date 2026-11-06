# Analytics regions and integrations review: 2026-11-06

Ten records reviewed: six corrected, one verified unchanged, and three with
unresolved findings retained without runtime edits. Five services gain English
guidance. No translations were generated or changed in this batch.

## Scope and compatibility

Permanent IDs, host/inline matching, cookie names, WordPress hints, service
purposes, categories, legal bases, Consent Mode flags and placeholders remain
unchanged. These catalog policy fields are not site-specific legal findings.
Location descriptions summarize documented service options, not observed
traffic routes or promises that every feature stays in one region.

Segment gains three exact local-storage identifiers already listed as its
cookie names. Clearing them can reset user/group identity and prevent an
expired cookie from recovering the old ID from local storage. The additions
do not match another service's storage patterns. No broad storage wildcard,
opt-out preference or generic retry-queue name is added. SDK behavior below
is vendor behavior, not a tested CookieHold integration.

## amplitude

Outcome: **corrected**, version 2 → 3, with unresolved findings.

[Security and privacy](https://amplitude.com/security-and-privacy) documents
US/EU regional infrastructure. Replace USA-only with
`USA or EU (Germany), according to project region`. The
[privacy notice](https://amplitude.com/privacy) identifies Amplitude, Inc.
but distinguishes its controller role from customer analytics processing.

[Cookie and consent documentation](https://amplitude.com/docs/sdks/analytics/browser/cookies-and-consent-management)
supports the two cookie families and unsent-event storage. `AMP_*` also
matches short-lived probes, so qualify its duration as
`Up to 1 year`. Keep the ordinary marketing-cookie duration.
Guidance addresses initialization and storage settings.

Unresolved: the broad `AMP_*` family overlaps `AMP_MKTG_*` and includes
opt-out state. Check consumer precedence and preference preservation before
narrowing it or adding more storage patterns. The
[current SDK setup](https://amplitude.com/docs/sdks/analytics/browser/browser-sdk-2/get-started)
documents initialization and regional configuration; legacy SDKs and custom
proxies need version-specific detection fixtures. No new host claim or
WordPress hint is inferred.

## mixpanel

Outcome: **corrected**, version 1 → 2, with unresolved findings.

The [residency program](https://mixpanel.com/legal/eu-data-residency/) supports
US, EU and India hosting. The [current subprocessors](https://mixpanel.com/legal/subprocessor-list/)
also identify US AI processing and support in other countries. Replace the
US-only location with `USA, EU or India (selected region); other countries for support and AI`.
The [privacy statement](https://mixpanel.com/legal/privacy-policy/) supports
Mixpanel, Inc.

[JavaScript documentation](https://docs.mixpanel.com/docs/tracking-methods/sdks/javascript)
supports the one-year cookie default and configurable persistence. The
[persistence source](https://raw.githubusercontent.com/mixpanel/mixpanel-js/master/src/mixpanel-persistence.js)
uses `mp_` plus the token or custom persistence name in either cookies or
local storage. The empty storage list is therefore not exhaustive.

Unresolved: adding the very broad `mp_*` to storage would affect arbitrary
custom names. Establish a narrower pattern or consumer attribution before
expanding it. Review optional replay/queue storage separately. Existing
remote hosts and initialization hints remain; these do not cover every proxy
or bundled SDK. No extra guidance needed from these findings.

## segment

Outcome: **corrected**, version 3 → 4, with unresolved findings.

[Regional Segment](https://www.twilio.com/docs/segment/guides/regional-segment/)
documents US/EU workspaces and warns that destinations do not necessarily
share their residency. Correct the location to
`USA or EU (workspace region); destinations may process elsewhere`.

[Analytics.js](https://www.twilio.com/docs/segment/connections/sources/catalog/libraries/website/javascript/)
supports the three cookies, ordinary one-year duration, traits storage and
existing CDN/API patterns. [Client persistence](https://www.twilio.com/docs/segment/connections/sources/catalog/libraries/website/javascript/cookie-validity-update)
explicitly lists local-storage copies of `ajs_anonymous_id`, `ajs_user_id`
and `ajs_group_id`; add those exact identifiers. Guidance covers the separate
behavior and locations of enabled destinations.

Unresolved: retry storage is described with generic names; inspect actual
namespaced keys before adding matches. Custom proxies and namespace changes
need representative fixtures. The [Twilio notice](https://www.twilio.com/en-us/legal/privacy)
distinguishes controller and processor roles. Keep Twilio Inc. pending a
contract-specific EU entity review rather than deriving the receiver from
the selected server region. No blanket claim about destination consent.

## adobe-analytics

Outcome: **corrected**, version 2 → 3, with unresolved findings.

The [Analytics privacy overview](https://experienceleague.adobe.com/en/docs/analytics/technotes/privacy/privacy-overview)
names US, UK and Singapore processing centers.
[Regional collection](https://experienceleague.adobe.com/en/docs/core-services/interface/data-collection/rdc)
describes global edge collection, forwarding and customer-domain collection.
Correct the location to
`USA, UK or Singapore for processing; regional collection worldwide`.
The [privacy policy](https://www.adobe.com/privacy/policy.html) supports the
existing Irish entity for the relevant region.

The [Analytics cookie table](https://experienceleague.adobe.com/en/docs/core-services/interface/data-collection/cookies/analytics)
supports the listed AppMeasurement cookies but distinguishes Web SDK's
two-year `s_ecid` setting from the ordinary 13-month value. Use
`13 months; Web SDK 2 years`; browser limits can shorten either.
[ID cookies](https://experienceleague.adobe.com/en/docs/id-service/using/intro/cookies)
and [cookieLifetime](https://experienceleague.adobe.com/en/docs/id-service/using/id-service-api/configurations/cookielifetime)
support the AMCV/AMCVS roles and defaults.

Unresolved: `adobedc.net` is shared across Adobe products, while customer
CNAME collection is outside these remote matches. Changing attribution or
adding all first-party hosts would be unsafe without consumer tests. Web SDK
and optional plug-ins can introduce other storage; the empty list is not
exhaustive. No speculative shared-cookie or host expansion.

## yandex-metrica

Outcome: **unresolved**, version 3 unchanged.

The [DPA](https://yandex.com/legal/metrica_agreement/en/) confirms Air Smart
Advertising Solutions FZ-LLC for the stated EEA/UK/Swiss scope. It does not
provide a complete physical processing-country list; keep the location empty
rather than infer it from a company address, governing law or hostname.

The [cookie/storage table](https://yandex.com/support/metrica/en/general/cookie-usage)
supports the existing identifier families, purposes and durations, with
`_ym_d` in the one-year group. It also lists additional tag-specific keys
whose variable segment is inside the key, and generic `zz` storage. Do not
replace these with a global `_ym*` or generic `zz` match simply because the
schema permits only a trailing wildcard.

[Initialization](https://yandex.com/support/metrica/en/code/counter-initialize)
supports the script host and bounce-tracking hint. Unresolved: obtain a
complete subprocessor/location statement and test detection across optional
Session Replay, Tag Manager and alternate delivery configurations. Existing
patterns and dates remain unchanged. No guidance needed beyond current facts.

## zoho-pagesense

Outcome: **corrected**, version 1 → 2, with unresolved findings.

The [contracting-entity table](https://www.zoho.com/legal/zoho-contracting-entities.html)
lists Zoho Corporation GmbH for Germany/Austria/Switzerland/Liechtenstein
and Zoho Corporation B.V. for the wider listed EEA group. Correct the provider
to `Zoho Corporation B.V. or Zoho Corporation GmbH (depends on customer country)`.
This describes the relevant European choices; other customer regions differ.
The [privacy policy](https://www.zoho.com/privacy.html) distinguishes account
data from service data and staff access. [Datacenter information](https://www.zoho.com/know-your-datacenter.html)
supports regional account hosting. The later forms-batch review checked
the [privacy FAQ](https://www.zoho.com/privacy/privacy-faq.html), which explicitly
describes technical-support access from India to EU-hosted data and optional
transfers. Broaden the location text to include those operations within
this same version-2 change set.

The [cookie table](https://www.zoho.com/pagesense/cookie-policy.html) supports
most listed experiment, recording, poll and preference durations. However,
it spells the visitor cookie `zabUserID`; the currently delivered
[script](https://cdn.pagesense.io/js/bizsugar/5328e7d4cd45428c9b8c129ca0ae4c13.js)
uses `zabUserId`, confirming the existing case. Keep that spelling. The script
also contains `zpsCookieMeta`, storage and the matched delivery host.

Unresolved: the script and policy are not a fully reconciled inventory.
Recheck preview-cookie and expiry-metadata behavior across regional SDK
variants; one customer's delivered script is not every configuration.
Several keys preserve preferences; review clearing semantics
before changing them. No new guidance or translation.

## usermaven

Outcome: **unresolved**, version 1 unchanged.

The [privacy policy](https://usermaven.com/privacy) supports Usermaven Inc.
and the existing international scope. The delivered
[library](https://t.usermaven.com/lib.js) constructs `__eventn_id_` plus the
key and passes `365 * 10` days to its cookie setter, supporting the configured
ten-year default, not a guarantee that browsers retain it that long. It also
persists data under `usermaven_` keys. Existing matches are supported by the
[installation guide](https://usermaven.com/docs/articles/installing-usermaven-da0db9af).

Unresolved: the [cookieless description](https://usermaven.com/docs/articles/cookieless-tracking-9b9159be)
makes broad anonymity/no-identifiable-data statements, while
[identity resolution](https://usermaven.com/docs/articles/identity-resolution-b95b51ff)
explicitly links cookieless activity to identified users. The delivered
library also initializes local persistence independently of strict mode
unless event persistence is disabled. Guidance explains the identification
limit without repeating the vendor's blanket anonymity/compliance language.
Custom tracking hosts and cookie names need configuration-specific detection.

## metricool

Outcome: **verified-unchanged**, version 1 unchanged; checked date retained.

The [privacy policy](https://metricool.com/privacy-policy/) identifies
Metricool Software S.L., describes EU hosting and explicitly says the website
tracker does not use cookies, local storage, session storage or persistent
visitor identifiers. Its separate custom-domain/White Label provision concerns
access to Metricool's application, not evidence to assign all website-tracker
traffic to that feature's infrastructure.

The retrieved [379-byte tracker](https://tracker.metricool.com/resources/be.js)
matches `beTracker.t(` and the configured host. It sends page/referrer and
viewport details through an image request; it contains no cookie or web-storage
access. [Cookie documentation](https://help.metricool.com/use-of-cookies-in-metricool-v5dg7)
also separates website analytics from Metricool's own site cookies. Its legal
claims are not used to change the catalog category or legal basis. The
published plugin entry confirms the existing hint. This verifies the listed
facts for the retrieved tracker, not a site's complete setup. No filler note.

## jetpack-stats

Outcome: **corrected**, version 2 → 3, with unresolved findings.

Change `privacyUrl` to the [visitor privacy notice](https://automattic.com/privacy-notice/).
Automattic's [general privacy policy](https://automattic.com/privacy/) expressly
excludes processing performed for visitors to customers' sites and links to
this notice. Retain the general policy in sources for company context.

[Stats documentation](https://jetpack.com/support/jetpack-stats/) supports the
purpose and the new Jetpack 16.4/WP Consent API guidance, including AMP and
Web Stories exceptions. The [published tracking code](https://plugins.svn.wordpress.org/jetpack/trunk/jetpack_vendor/automattic/jetpack-stats/src/class-tracking-pixel.php)
confirms the existing hosts/inline hint and the conditional consent gate.
This is not a test of any particular cookie banner.

Unresolved: [Jetpack cookies](https://jetpack.com/support/cookies/) separates
the admin-only Stats preference from cookies of other Jetpack features.
Do not attribute all Jetpack cookies to visitor Stats. Reconcile the wider
Automattic cookie policy, logged-in visitors and current telemetry before
calling the empty lists exhaustive. Obtain processor-specific geography and
framework-registry evidence before refreshing the existing USA/framework
claim; the general controller policy is insufficient for that conclusion.

## vg-wort

Outcome: **unresolved**, version 1 unchanged.

The [imprint](https://vgwort.de/impressum) supports the provider.
The official [METIS guide, version 5.1](https://vgwort.de/media/pages/service/dokumente/merkblaetter-und-formulare/5721d6ddd0-1771937772/metis_beschreibung_urheber_5_1.pdf)
was downloaded and text-extracted after the web reader failed. Pages 24/27
support the counter host and path; subdomains are already covered. Page 33
supports guidance about eligible-text counter placement.

The [participation conditions](https://tom.vgwort.de/portal/showParticipationCondition)
describe a session cookie. The empty cookie array therefore must not be
presented as a cookieless guarantee. This document gives a human-readable
cookie description rather than a verified exact browser identifier.

Unresolved: obtain the current measurement implementation or response-header
evidence for the exact cookie name, scope and duration. Confirm processing
locations separately: counting visits from Germany and naming a German
operator do not prove exclusive German hosting. Do not turn the vendor's
legal interpretation into an automatic consent exemption. Both plugin entry
files exist and are hints only.

## WordPress evidence

Published plugin headers were inspected; this is not compatibility testing.

| Service | Entry file | Reported version |
|---|---|---|
| Zoho PageSense | [index.php](https://plugins.svn.wordpress.org/zoho-pagesense/trunk/index.php) | 1.0.5 |
| Usermaven | [usermaven.php](https://plugins.svn.wordpress.org/usermaven/trunk/usermaven.php) | 1.2.8 |
| Metricool | [metricool.php](https://plugins.svn.wordpress.org/metricool/trunk/metricool.php) | 2.2.0 |
| Jetpack | [jetpack.php](https://plugins.svn.wordpress.org/jetpack/trunk/jetpack.php) | 16.4 |
| VGW Metis | [vgw-metis.php](https://plugins.svn.wordpress.org/vgw-metis/trunk/vgw-metis.php) | 2.0.1 |
| Worthy | [wp-worthy.php](https://plugins.svn.wordpress.org/wp-worthy/trunk/wp-worthy.php) | 1.7.5-698baaf |

## Validation

Formatting, schema/content validation, all 32 tests, build and whitespace
checks pass. The ledger matches all 210 permanent IDs: 44 reviewed and 166
pending. Reviewed versions and report anchors match the source records;
unchanged records retain their old checked dates. Segment's three added
storage keys have no cross-service storage-pattern collision.

Guidance now contains 31 notes for 24 services. Its independent artifact
remains outside the plugin manifest's unchanged file inventory. Release
configuration and publishing workflow are unchanged. No release was published.
