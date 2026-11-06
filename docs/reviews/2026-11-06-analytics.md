# Analytics review: 2026-11-06

Ten services reviewed against vendor policies, documentation and delivered
scripts. Five receive supported corrections; five retain unresolved findings
without runtime edits. These are documentation and source-code findings,
not tests of a deployed WordPress site.

## Shared scope and impact

Purposes, provider names, privacy URLs, categories, legal bases, Consent Mode
flags, placeholders and WordPress hints remain unchanged. None of these
products becomes a Google tag merely by integrating with Google. Category
and legal-basis values remain catalog policy, not legal advice for a site.
Location findings distinguish visitor analytics from the vendor's customer
account, billing and marketing data where its documentation permits.

No host, inline, cookie-name or storage-key matches change. Matomo has one
cookie lifetime correction; it does not alter which cookies match. Cookie
durations are documented defaults, subject to configuration and browser
limits. Empty lists are not a guarantee of no browser storage.

Four services receive new English guidance. No translations were generated
or changed. The independent guidance artifact stays outside the runtime
manifest. No release configuration changes or publishing.

## plausible

Outcome: **corrected**, version 1 → 2, with unresolved findings.

[Privacy policy](https://plausible.io/privacy) confirms Plausible Insights OÜ
and distinguishes visitor analytics from customer account data. Visitor
infrastructure now includes Hetzner, Bunny and UpCloud. Replace the narrow
`EU (Germany)` with `EU`, consistent with the
[visitor data policy](https://plausible.io/data-policy), which also supports
the cookieless purpose and lack of persistent browser tracking identifiers.
Add the data policy to sources.

[WordPress documentation](https://plausible.io/docs/wordpress-integration)
supports the plugin hint and an optional proxy using generated local paths.
Add this source and the plugin's published entry file. Guidance explains why
logged-in administrator test visits may be excluded. The standard remote
host is retained; a local proxy is a coverage gap, not justification to match
every WordPress upload or REST URL.

Unresolved: establish safe proxy detection using actual generated code and
plugin-version fixtures before adding patterns. The existing broad host can
also cover non-tracking Plausible URLs; narrowing it requires compatibility
review for current and older script paths.

## fathom

Outcome: **unresolved**, version 2 unchanged.

[Privacy policy](https://usefathom.com/legal/privacy), updated October 2, 2026,
confirms Conva Ventures Inc. [Data isolation](https://usefathom.com/features/data-isolation)
supports the existing EU/USA scope: EU visitor requests are anonymized in
the EU, with anonymized analytics stored in the USA. This is the vendor's
description, not an independent anonymity or compliance certification.
[Installation](https://usefathom.com/docs/script/embed) confirms the script
host, while the [product description](https://usefathom.com/features/how-fathom-analytics-works)
supports the cookieless purpose.

Unresolved: [visit exclusion](https://usefathom.com/docs/script/exclude-visits)
uses local storage. The delivered [script](https://cdn.usefathom.com/script.js)
reads, writes and removes `blockFathomTracking`; no direct cookie accesses
were found in that retrieved script. This contradicts interpreting the empty
storage list as exhaustive. Do not add an exclusion preference to automatic
clearing without checking whether that would re-enable tracking. Proposed
follow-up: distinguish privacy preferences from removable tracking storage
in consumer behavior, then decide how to represent this identifier. The
empty list is retained with this explicit limitation. No filler guidance.

## matomo

Outcome: **corrected**, version 1 → 2, with unresolved findings.

The [cookie inventory](https://matomo.org/faq/general/faq_146/) supports the
principal cookie defaults, optional heatmap/cross-domain cookies and
`MatomoAbTesting` storage. Its temporary test-cookie description does not
support presenting that cookie as normally lasting a visit. Change
`_pk_testcookie*` from `Session` to `Deleted after check`.

The [tracker source](https://raw.githubusercontent.com/matomo-org/matomo/5.x-dev/js/piwik.js)
confirms deletion after the check. It creates the ordinary test cookie with
session expiry; the domain-check variant has a ten-second fallback and is
deleted after a successful check. The same source supports the optional
custom-variable session duration, configurable standard cookie timeouts and
30-year consent-cookie defaults. This change describes normal removal, not
a promise about interrupted script execution.

[Consent API documentation](https://developer.matomo.org/guides/tracking-consent)
supports guidance distinguishing suppression of tracking requests from
suppression of cookies only. Self-hosted provider, location and privacy URL
remain empty because they depend on the operator. The `_paq.push(` hint is
present in the vendor examples; minified or differently spaced code may need
other detection.

Unresolved: storage and cookie inventories vary with enabled extensions.
The generic hint also appears in hosted deployments and related trackers;
test attribution/precedence before modifying detection. No new cookie names
or broader matches are added.

## matomo-cloud

Outcome: **corrected**, version 2 → 3, with unresolved findings.

[Cloud policy](https://matomo.org/matomo-cloud-privacy-policy/) confirms
InnoCraft Limited. The [subprocessor list](https://matomo.org/matomo-cloud-dpa/subprocessors/),
updated October 27, 2026, includes Frankfurt storage, Dublin backups,
Netherlands infrastructure management, an optional regional CDN and optional
Ask Matomo processing. The latter currently uses global cross-region
inference. Replace the Germany/Ireland-only location with
`EU (Germany, Ireland, Netherlands); optional CDN and AI worldwide` and
canonicalize the source URL. Guidance explains the optional AI processing
decision. This is not a claim that all features send every visitor record
worldwide.

The [cookie inventory](https://matomo.org/faq/general/faq_146/) supports the
three existing default cookie descriptions and lifetimes. Additional Matomo
features may add storage; the empty list is not exhaustive.

Unresolved: test attribution alongside the generic Matomo entry and verify
custom-domain/CDN coverage against generated Cloud code before altering
patterns. Keep current hosts and inline hint for compatibility.

## matomo-tag-manager

Outcome: **unresolved**, version 1 unchanged.

[Embedding documentation](https://developer.matomo.org/guides/tagmanager/embedding)
contains both existing inline patterns and explains how published containers
load. Operator-specific provider, privacy URL and location appropriately
remain empty. The WordPress plugin entry file exists (see below).

[Debugging documentation](https://developer.matomo.org/guides/tagmanager/debugging)
explicitly describes a preview-mode cookie, so an empty cookie list must not
be presented as proof that Tag Manager never stores anything. The page does
not establish the exact cookie name and lifetime. Inspect the shipped
preview code and its origin before proposing a scoped identifier. Also
review storage of each loaded tag separately; the container's category is
not an automatic legal basis for all of its contents. No extra guidance is
needed from this batch.

## piwik-pro

Outcome: **unresolved**, version 1 unchanged.

[Privacy policy](https://piwik.pro/privacy-policy/) supports the existing
provider and selectable hosting countries, including France in its product
hosting section. The [data-center article](https://piwik.pro/blog/global-data-centers-gdpr/)
alone does not list France, illustrating why omission in a short article is
not evidence for removing a country. Customer/partner contracting roles can
differ; the catalog name is not a statement about every deployment.

The [visitor cookie table](https://help.piwik.pro/support/privacy/cookies-created-for-visitors-by-piwik-pro/)
supports all twelve listed names and ordinary durations. Some settings use
shorter anonymous-visitor cookies or no visitor cookies, and some entries
belong to legacy Consent Manager. Its deprecated local-storage section
documents `ppms_webstorage` for versions before 18.6.0. The empty storage list
therefore does not cover every supported historical installation.

[CSP documentation](https://developers.piwik.pro/docs/content-security-policy-csp)
supports the container/tracking domains and documents custom domain setup.
Unresolved: test legacy storage attribution and the broad `ppms.php` inline
hint before adding identifiers or narrowing matches. Check version scope
and consumer clearing behavior for stored consent information. No speculative
changes or new guidance.

## cloudflare-web-analytics

Outcome: **corrected**, version 1 → 2, with unresolved findings.

[Privacy policy](https://www.cloudflare.com/privacypolicy/), section 7,
describes primary USA/EEA storage and worldwide transfer/access. Replace
`USA (EU-US Data Privacy Framework)` with `USA, EEA and other countries`.
This describes the vendor's published processing scope, not a measured
location for each beacon. Removing the framework label does not claim that
certification was lost.

The [product page](https://www.cloudflare.com/web-analytics/) states that
usage collection does not use cookies or local storage; add it to sources.
[Collection documentation](https://developers.cloudflare.com/web-analytics/data-metrics/data-origin-and-collection/)
confirms the script under the existing host match and describes a different
collection URL for proxied sites.

Unresolved: a site's own `/cdn-cgi/rum` endpoint is outside the current remote
host pattern. Do not claim arbitrary site paths globally; evaluate detection
using the injected beacon and the site's configuration. No CookieHold
automatic-injection or compatibility behavior is inferred. No guidance added.

## microanalytics

Outcome: **unresolved**, version 1 unchanged.

[About](https://app.microanalytics.io/pages/about) supports analytics hosting
in France. The [privacy page](https://app.microanalytics.io/pages/privacy)
mixes privacy-focused descriptions with generic website-cookie wording and
does not identify a legal entity; leave the provider empty.

The delivered [script](https://microanalytics.io/js/script.js) is the matched
asset and writes `firstReferrer` and `visitorId` to session storage. Thus an
empty storage list is not proof of no client-side state. No direct cookie
access was found in this retrieved script, but the privacy-page contradiction
remains unresolved. No unqualified guidance about data-free operation.

Proposed follow-up: obtain an operator-confirmed legal identity and product
privacy statement. Test namespacing and collision handling before adding
generic storage identifiers; blindly matching `visitorId` could target other
site software. No new plugin hint is inferred from a WordPress search page.

## rybbit

Outcome: **corrected**, version 1 → 2, with unresolved findings.

[Company information](https://rybbit.com/company) confirms Tomato.gg LLC.
[Subprocessors](https://rybbit.com/subprocessors) distinguish EU analytics
storage from Cloudflare's global edge handling and optional AI processors.
Expand the location to `EU (Germany and Finland), USA and global edge network`
so the edge-network scope is not silently omitted. Self-hosted installations
have different operator-controlled infrastructure.

[Script documentation](https://rybbit.com/docs/script) confirms the existing
host/path and describes custom hosting/proxying. [User identification](https://rybbit.com/docs/identify-users)
explicitly persists an ID in local storage and can attach recent anonymous
events to a known user. Guidance explains identification and logout limits.

Unresolved: the [privacy policy](https://rybbit.com/privacy) says no local
storage/personal data, which conflicts with the identification feature's own
documentation. Do not remove the existing keys or promise anonymous behavior
for all configurations. The deployed script returned HTTP 403 in this
review; revalidate exact key spellings and replay/feature-flag scope from
the delivered asset or the matching release's source. The generic privacy
claims do not establish those details.

## etracker

Outcome: **unresolved**, version 1 unchanged.

[Imprint](https://www.etracker.com/en/imprint/) supports JustRelate Deutschland
GmbH; [data-protection information](https://www.etracker.com/en/data-protection-by-etracker/)
describes German infrastructure and optional tracking features. Neither is
used to assign a blanket legal conclusion to site owners.

The [current cookie table](https://help.etracker.com/en/article/cookies-used/)
lists 480 days for allowed cookies, 480 days/50 years for opt-in/opt-out, and
720 configurable days for visitor recognition. It supports the listed
storage identifiers and the one-day scroll-depth cookie, and also names a
consent-services identifier absent from this record.

However, the delivered [tracker](https://code.etracker.com/code/e.js) still
passes 180 days when setting `et_allow_cookies` and `et_oi_v2`, with a
`cookieLifetime` default of 24. This conflicts with replacing the existing
durations from the help table alone. Keep the values and record the conflict.
Resolve which version/configuration uses each lifetime before correction;
the cookie table's use of regulatory “cookie-free” terminology also does not
mean no technical storage. Review consent-preference clearing before adding
new preference keys. Existing matches remain unchanged.

## WordPress hint evidence

The following author-published entry files were retrieved and their plugin
headers inspected. They verify the file hints, not CookieHold compatibility
or successful tracking on any site. Existing handle arrays remain empty.

| Service | Published entry file | Reported version |
|---|---|---|
| Plausible | [plausible-analytics.php](https://plugins.svn.wordpress.org/plausible-analytics/trunk/plausible-analytics.php) | 2.6.4 |
| Fathom | [fathom-analytics.php](https://plugins.svn.wordpress.org/fathom-analytics/trunk/fathom-analytics.php) | 3.3.1 |
| Matomo and its Tag Manager | [matomo.php](https://plugins.svn.wordpress.org/matomo/trunk/matomo.php) | 5.13.1 |
| Connect Matomo | [wp-piwik.php](https://plugins.svn.wordpress.org/wp-piwik/trunk/wp-piwik.php) | 1.1.12 |
| Piwik PRO | [plugin.php](https://plugins.svn.wordpress.org/piwik-pro/trunk/plugin.php) | 1.5.4 |
| etracker | [etracker.php](https://plugins.svn.wordpress.org/etracker/trunk/etracker.php) | 2.7.7 |

## Validation

Formatting, content/schema validation, all 32 tests and the build pass.
The ledger covers all 210 service ids: 24 reviewed and 186 pending. Versions
and report anchors match the source records. Comparison with the base commit
confirms that matching patterns, cookie names, storage keys and policy fields
are unchanged; the only cookie metadata change is the documented Matomo
test-cookie lifetime. The runtime manifest file inventory and release
configuration are unchanged.

The guidance build test now compares the service-id sets in sorted order.
Filename sorting places `matomo-cloud.json` before `matomo.json`, while id
sorting places `matomo` first; neither affects joins. The separate repeated
build assertion continues to verify deterministic output.
