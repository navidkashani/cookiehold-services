# Recording and product analytics review: 2026-11-06

Ten records receive supported corrections. Each retains explicitly unresolved
findings below; a new checked date is not a certification of every deployment.
Five receive English guidance. No translations were generated.

## Shared scope and impact

Permanent IDs, host/inline matching, WordPress hints, purposes, providers,
privacy URLs, categories, legal bases, Consent Mode flags and placeholders
are unchanged. The last four fields remain catalog decisions; vendor privacy
claims do not establish a site's legal obligations or CookieHold behavior.
Clarity's consent integration does not make it a Google tag under this schema.

New storage matches are exact vendor-documented names, except PostHog's
existing project-token cookie prefix reused for storage. No added identifier
overlaps another service's storage patterns. Clearing these identifiers may
reset analytics identity, tab continuity, attribution or cached recording
assets. This is an intended expansion of the inventory, not evidence that a
consumer clears them correctly. No new consent/opt-out preferences are added;
existing preference entries need a consumer-level review before removal.

Cookie durations are documented defaults and may vary with configuration or
browser limits. Only Smartlook's mixed-duration description and Clarity's
session-cookie duration change; Fullstory gains two exact cookie names.
Source lists retain earlier provenance without treating those older links as
new evidence. Removing a framework label from a changed location field does
not claim that a vendor lost certification.

## hotjar

Outcome: **corrected**, version 2 → 3, with unresolved findings.

[Security FAQs](https://help.hotjar.com/hc/en-us/articles/36820023091089-Security-FAQs)
support Irish hosting. [Privacy FAQs](https://help.hotjar.com/hc/en-us/articles/36820004397713-Privacy-FAQs)
support the provider and first-party tracking description. The
[tracking-code inventory](https://help.hotjar.com/hc/en-us/articles/36819973371409-Cookies-Set-by-the-Hotjar-Tracking-Code)
supports the seven existing cookie durations and `_hjUserAttributes` storage.
Add `hjViewportId` and `hjActiveViewportIds`, used for viewport continuity in
session/local storage. Add the inventory and published WordPress entry file
to sources. No additional guidance is needed.

Unresolved: Irish hosting is not proof that every support or optional feature
processes data only there. Reconcile Hotjar's legacy scope with Contentsquare's
group-wide subprocessors before making a broader location statement. The
current broad hosts can include ordinary vendor pages, and the shared
Contentsquare/Hotjar identifiers need attribution tests for combined installs.

## posthog

Outcome: **corrected**, version 2 → 3, with unresolved findings.

[Persistence documentation](https://posthog.com/docs/libraries/js/persistence)
describes default local-storage-plus-cookie persistence and the 365-day
cookie. [SDK source](https://raw.githubusercontent.com/PostHog/posthog-js/main/packages/browser/src/posthog-persistence.ts)
constructs the storage name from the project token. Add `ph_phc_*` to storage,
using the same token scope already represented in cookies. Guidance explains
that shared analytics identity does not automatically share consent choices.

The [privacy policy](https://posthog.com/privacy) identifies PostHog Inc.;
[storage documentation](https://posthog.com/docs/privacy/data-storage) supports
Frankfurt EU hosting. Unresolved: custom persistence names, self-hosting,
reverse proxies and nonstandard token formats are outside these matches.
Keep the existing location field pending a complete regional/subprocessor
and framework-registry review; EU hosting alone does not establish processing
scope. Consent preferences use a separate backend and are not added to clearing
patterns. Validate attribution against actual configurations before broadening.

## smartlook

Outcome: **corrected**, version 2 → 3, with unresolved findings.

[Cookies and Smartlook](https://help.smartlook.com/docs/cookies-smartlook)
supports the existing storage names and visitor/session cookie, but also
documents a temporary domain probe covered by `SL_C_*`. Change that family's
duration to `Up to 13 months` and its purpose to mention the domain
check. This preserves the match while avoiding a single inaccurate lifetime.
Remove the seven stale machine-translated cookie purposes, leaving their
service purposes and machine flags intact. The optional cookie translations
can be restored when a speaker reviews the expanded English description.

The [initialization reference](https://web.developer.smartlook.com/reference/smartlookinit)
supports EU/US region selection and guidance explaining that disabling
cookies still uses local storage. The [policy](https://help.smartlook.com/docs/privacy-policy)
supports the existing provider. Unresolved: region selection is not a full
subprocessor inventory. The documented relay proxy can use a site-controlled
host outside current matches; obtain representative relay fixtures before
extending detection. No WordPress compatibility is inferred.

## mouseflow

Outcome: **corrected**, version 2 → 3, with unresolved findings.

The [privacy overview](https://mouseflow.com/legal/privacy/) documents EU and
US account regions, correcting the previous EU-only field to
`EU or USA (account region)`. Its [subprocessor list](https://mouseflow.com/legal/subprocessors/)
adds regional context. The [cookie policy](https://help.mouseflow.com/en/articles/4282966-what-is-your-cookie-policy)
supports the session cookie, 90-day returning-visitor cookie and absence of
other client storage in the described tracker. The
[privacy policy](https://mouseflow.com/legal/privacy-policy/) identifies
Mouseflow ApS. Add regional and WordPress-file evidence to sources.

Unresolved: `mf_*` also matches the separately listed `mf_user`; verify
consumer specificity/precedence before narrowing it. The generic vendor host
can match non-tracking resources. Recheck regional restrictions for optional
features against the account's actual agreement. No new guidance needed.

## heap

Outcome: **corrected**, version 2 → 3, with unresolved findings.

The Product Analytics section of the
[subprocessor list](https://contentsquare.com/privacy-center/subprocessors/)
documents EU/US hosting and group support elsewhere. Replace USA-only with
`EU or USA (selected region); other countries for support`.
[Web SDK installation](https://developers.heap.io/docs/web) supports current
`heap-api.com` endpoints, including EU endpoints, and migration from legacy
cookies. Existing host roots already cover these endpoints.

Unresolved: the old cookie help page could not be retrieved. Preserve `_hp2_*`
metadata pending version-specific evidence; absence from current documentation
does not prove removal. Current Contentsquare documentation also describes
`_hp5_*` and local-storage modes, so the empty storage list is not exhaustive.
Confirm ownership and version scope across Heap and Contentsquare before
adding shared identifiers. Confirm the EU contracting entity for legacy Heap
accounts before changing `Heap Inc.` or proposing a successor ID. No filler
guidance or speculative retirement.

## lucky-orange

Outcome: **corrected**, version 2 → 3, with unresolved findings.

[Subprocessors](https://www.luckyorange.com/legal/subprocessors) document US
infrastructure and Cloudflare processing near end users. Expand the location
to `USA and global edge network`. The
[browser inventory](https://developers.luckyorange.com/libraries/browser/cookies-storage)
supports the three `lo-` cookies, their two-year durations and all three
listed storage keys. The [policy](https://www.luckyorange.com/legal/privacy-policy)
identifies Lucky Orange LLC but separates its own website from processor
services; it is not the sole evidence for visitor processing locations.

Unresolved: the five older underscore-prefixed cookie descriptions/lifetimes
are not established by the current inventory. Obtain a legacy SDK version or
vendor statement before updating them. `lo-opt-out` is a privacy preference:
review consumer clearing semantics before changing its representation.
Existing remote matches do not establish proxy coverage. No guidance added.

## crazy-egg

Outcome: **corrected**, version 2 → 3, with unresolved findings.

The [cookie policy](https://www.crazyegg.com/cookies) separates tracking-script
storage from the vendor's own application and third-party integrations.
It supports all five existing cookie names and durations. Add exact storage
keys `_ce.av`, `ce_local_asset_cache` and `ce_csp_transport_check` for
attribution, recording assets and security-setting compatibility. Do not
import the vendor application's login cookies or other vendors' cookies.

Section 11 of the [privacy policy](https://www.crazyegg.com/privacy) includes
client-site data in international processing. Expand the location to
`USA and other countries`; this is published scope, not a measured route.

Unresolved: the inventory contains additional legacy/optional keys. Confirm
deployment scope before completing that inventory, especially generic names
such as `powerup` and privacy preferences. The current host does not prove
coverage of every delivered asset or proxy. No extra guidance needed.

## fullstory

Outcome: **corrected**, version 2 → 3, with unresolved findings.

[Cookie documentation](https://help.fullstory.com/hc/en-us/articles/360020829513-Why-Fullstory-uses-First-Party-Cookies)
supports adding `fs_uid` (one year), `fs_lua` (30 minutes) and session-storage
key `_fs_tab_id`. Application login/security cookies are not customer-site
capture cookies and are excluded. The documented consent cookie `fs_cid`
is left out pending review of preference-clearing behavior.

[Data residency](https://help.fullstory.com/hc/en-us/articles/8901113940375-Fullstory-Data-Residency)
documents account-selected US/EU storage and international-transfer terms.
Correct USA-only to `USA or EU (account region); international transfers`.
The [privacy policy](https://www.fullstory.com/legal/privacy-policy/) supports
the provider. Guidance from the
[element-consent reference](https://help.fullstory.com/hc/en-us/articles/360020623254-Capture-elements-with-consent)
explains the API's limited scope.

Unresolved: separately installed Guides and Surveys has its own storage;
decide its service attribution before adding those identifiers. Test existing
legacy inline hints against current generated snippets and custom delivery.
The newly populated lists remain deliberately non-exhaustive.

## microsoft-clarity

Outcome: **corrected**, version 2 → 3, with unresolved findings.

Microsoft's [constants](https://raw.githubusercontent.com/microsoft/clarity/master/packages/clarity-js/types/data.d.ts),
[metadata code](https://raw.githubusercontent.com/microsoft/clarity/master/packages/clarity-js/src/data/metadata.ts)
and [cookie setter](https://raw.githubusercontent.com/microsoft/clarity/master/packages/clarity-js/src/data/cookie.ts)
establish a one-day `_clsk` expiry and session-storage key `_cltk`. Correct
the former from `Session` and add the latter. The same code supports the
one-year `_clck` default.

The [FAQ](https://learn.microsoft.com/en-us/clarity/faq) supports the EU
provider and Azure hosting. The [privacy statement](https://www.microsoft.com/en-us/privacy/privacystatement),
storage section, permits US and other-country processing. Reflect that scope
as `USA and other countries`; it does not identify a particular project's
data center. [Cookieless reporting](https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-without-cookie-consent)
supports guidance about continuing collection and fragmented sessions.

Unresolved: the [cookie table](https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-cookies)
supports the remaining names/purposes but does not verify their lifetimes or
the existing `CLID` HttpOnly flag. Inspect actual response headers and vendor
version documentation before changing these. Source defaults alone do not
test CookieHold's integration or prove every deployed Clarity version matches.

## contentsquare

Outcome: **corrected**, version 1 → 2, with unresolved findings.

The [subprocessor list](https://contentsquare.com/privacy-center/subprocessors/)
adds feature-dependent EU/UK/US processing and international support beyond
the previously described storage regions. Use
`EU, UK and USA (varies by feature); other countries for support`.

The [cookie inventory](https://docs.contentsquare.com/en/web/cookies/) supports
the existing ordinary durations and explains the cookieless storage mode
used in guidance. Existing cookies and storage remain unchanged.

Unresolved: `_cs_*` is broader than the documented identifiers and includes
privacy preferences. The vendor explicitly disclaims numbered `_cs_` cookies;
that warning is not proof that similarly named storage belongs to it either.
Test safe narrowing and preference preservation in consumers before replacing
the wildcard. Combined Hotjar/Heap features also require attribution fixtures.
The group list supports Content Square SAS, but contract-specific roles still
depend on the customer. No search-result-based WordPress hint is added.

## WordPress hint evidence

Author-published entry files were retrieved and their headers inspected.
These establish detection hints only; no site compatibility testing occurred.

| Service | Published entry file | Reported version |
|---|---|---|
| Hotjar | [hotjar.php](https://plugins.svn.wordpress.org/hotjar/trunk/hotjar.php) | 1.0.16 |
| Mouseflow | [mouseflow-for-wordpress.php](https://plugins.svn.wordpress.org/mouseflow-for-wordpress/trunk/mouseflow-for-wordpress.php) | 5.1.3 |
| Lucky Orange | [lucky_wordpress.php](https://plugins.svn.wordpress.org/lucky-orange/trunk/lucky_wordpress.php) | 2.1.1 |
| Crazy Egg | [crazyegg-heatmap-tracking.php](https://plugins.svn.wordpress.org/crazyegg-heatmap-tracking/trunk/crazyegg-heatmap-tracking.php) | 2.12 |
| Microsoft Clarity | [clarity.php](https://plugins.svn.wordpress.org/microsoft-clarity/trunk/clarity.php) | 0.10.37 |

## Validation

Formatting, schema/content validation, all 32 tests, build and whitespace
checks pass. Ledger IDs match all 210 source records: 34 reviewed and 176
pending. Completed review versions and report anchors match their sources.
The eight added storage patterns have no cross-service storage collision.
Permanent IDs, host/inline patterns and policy fields match the base commit.
Guidance covers 19 services with 26 notes and remains outside the runtime
manifest's unchanged file inventory. Release configuration is unchanged.
These are development artifacts, not a published release.
