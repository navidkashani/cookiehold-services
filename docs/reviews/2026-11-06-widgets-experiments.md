# Widgets and experiments review — 2026-11-06

Fourteen IDs reviewed: seven corrected, six unresolved and one verified
unchanged. Four services gain five English guidance notes.

All IDs, script matching, WordPress hints, Consent Mode, categories, legal
bases and placeholders remain unchanged. Optimizely gains a vendor-specific
storage prefix; this may expand recognized/cleared storage, not script
blocking. VWO wildcard-cookie lifetimes are corrected without narrowing the
existing patterns. Other corrections concern processing-location summaries.
No translations or inferred compatibility/compliance claims are added.

The author's WordPress main files at existing hint paths identify accessiBe
2.13, UserWay 2.6.6, OptinMonster 2.17.1, ConvertBox 1.1.2, Popup Maker 1.25.0,
OneSignal 3.9.4, Elfsight Blocks 1.2.1, Elfsight Elementor 1.2.0, AddToAny
1.8.18, Disqus 3.1.6 and Jetpack 16.4. These are source-identity checks, not
installed-plugin compatibility tests. Host matches do not imply every optional
feature is enabled, and empty persistence lists are not exhaustive guarantees.

## ab-tasty

Outcome: **unresolved**, version 2 unchanged.

The current [cookie documentation](https://docs.abtasty.com/client-side/tag/tag-cookies)
and [consent/storage guide](https://docs.abtasty.com/account/performance-and-security/consent-policy---cookies-storage-and-privacy)
support ABTasty's 13 months, ABTastySession's inactivity window and separate
browser storage. The [tag changelog](https://tagchangelog.abtasty.com/) records
Wingify migration work in October/November 2026; the Wingify privacy link is
therefore not simply dismissed as an unrelated vendor.

However, the [Wingify privacy policy](https://wingify.com/privacy-policy/)
distinguishes account/website information from customer end-user processing.
It does not alone establish the AB Tasty account's contractual entity and
visitor-data region during migration. Leave provider/country empty; obtain
current account terms and regional processing documentation. Keep legacy
AB Tasty IDs and detection, rather than retiring them because of a merger.
No speculative migration guidance or wholesale VWO storage import.

## optimizely

Outcome: **corrected**, version 2 → 3.

The [privacy notice](https://www.optimizely.com/legal/privacy-notice/)
allows international processing including the US. Extend USA accordingly.
The [snippet storage guide](https://docs.optimizely.com/web-experimentation/docs/cookies-and-localstorage-in-snippets)
confirms all four listed cookie durations. It documents numerous
optimizely_data-prefixed local-storage keys containing visitor/project
segments; add optimizely_data* to the existing empty storage list. This
retains the schema's existing trailing-wildcard syntax rather than requiring
consumers to interpret embedded separators or new pattern types.

Unresolved: origin-specific/custom snippet storage and customer contract
regions require deployment-specific checks. The guide advises integrations
to use supported APIs instead of treating internal keys as a stable API.
No new guidance beyond those already represented service facts.

## vwo

Outcome: **corrected**, version 2 → 3.

The [Wingify privacy policy](https://wingify.com/privacy-policy/) allows US
and international processing; extend the incomplete USA-only summary. This
does not assert that all visitor data uses the account-data region: resolve
an account's precise hosting configuration separately.

The [cookie table](https://help.wingify.com/hc/en-us/articles/58793798517785-Cookies-Stored-by-Wingify)
supports the listed UUID/session/account-retention values. But the existing
_vis_opt_exp_* and _wingify_exp_* patterns cover more than 100-day assignment
cookies: combi_choose variants are temporary until campaign changes apply.
Set both wildcard lifetimes to “Varies by cookie”; preserve the patterns for
consumer compatibility. The corresponding generic purposes are incomplete
for goal/temporary variants; split descriptions only with a translation and
matching-impact review. The [storage table](https://help.wingify.com/hc/en-us/articles/58762181710361-Wingify-Local-Storage-Keys)
supports legacy/new prefix families; migration and enabled products determine
which occur. No legal conclusion from the vendor's “strictly necessary” label.

## accessibe

Outcome: **corrected**, version 1 → 2.

The [privacy notice](https://accessibe.com/privacy-notice) names the existing
US/EU/UK/Australia locations and allows additional sites. Extend the summary
with other countries. The [widget data guide](https://support.accessibe.com/hc/en-us/articles/37847421167506-Does-accessWidget-use-cookies-or-collect-personal-data)
says cookies are not used, but also describes real-time IP/URL processing and
browser storage for preferences. Do not rephrase that as no data exchange.

Existing persistence keys remain pending a current configured-widget trace;
the guide's broad wording does not establish the exact lifetime of each.
The WordPress package may contain administration-side dependencies that are
not evidence of visitor tracking. No new accessibility or legal guarantee.

## userway

Outcome: **corrected**, version 1 → 2.

The [June 2026 privacy statement](https://userway.org/privacy/) covers Level
Access/UserWay and processing in the US, Canada, Mexico, Israel, EU, UK and
other jurisdictions. Extend USA accordingly; retain UserWay Inc., which the
published page still identifies. Product-specific terms may further qualify
processing and should be checked for an account.

Guidance uses the [fixed-version guide](https://help.userway.org/en/articles/10219337-load-a-fixed-version-of-the-userway-javascript-via-the-userway-cdn)
to explain quarterly maintenance of a pinned widget version. No automatic
accessibility certification is implied. Exact uw-* persistence and reset
behavior in the chosen version still need a configured-widget trace; preserve
existing patterns and plugin identity.

## optinmonster

Outcome: **unresolved**, version 1 unchanged.

The [cookie/storage list](https://optinmonster.com/gdpr/cookies/) supports the
existing names and published durations, including _omappvp at 11 years,
_omappvs at 20 minutes inactivity and _omra at one year. Browser limits may
shorten requested persistence. The [privacy notice](https://optinmonster.com/privacy/)
and [DPA](https://optinmonster.com/gdpr/dpa/) did not resolve a complete
service-processing geography; leave the field empty.

The [consent-tool guide](https://optinmonster.com/docs/how-to-use-optinmonster-with-cookie-consent-tools/)
requires configuration and testing and warns that the embed may also need
configuration. It is not proof that categorizing cookies alone gates network
requests or that a CookieHold integration is tested. Do not copy its blanket
compliance language or script-order workaround into reusable guidance.
Account settings and enabled campaigns need an end-to-end check; no filler
note or runtime change.

## convertbox

Outcome: **unresolved**, version 1 unchanged.

The [terms](https://convertbox.com/terms-conditions/) identify ThriveCart LLC,
and the [privacy policy](https://convertbox.com/privacy-policy/) says its
servers are in the US. These support the existing provider/location; do not
expand the region from generic international-transfer boilerplate alone.
The author's WordPress main file confirms its embed workflow and filename.
The current notice does not establish the complete storage behavior of
__storejs_convertbox_* and cbox_last_user_check, nor that every campaign sets
no cookies. Inspect a configured campaign and current embed-core script
before adding/removing persistence or claiming a universal region guarantee.
No new guidance established.

## popup-maker

Outcome: **verified unchanged**, version 1.

The [cookie settings guide](https://wppopupmaker.com/docs/controlling-popups/cookie-settings/)
and [plugin main file](https://plugins.svn.wordpress.org/popup-maker/trunk/popup-maker.php)
support this first-party popup-state entry: automatic pum- names, configurable
expiry/session behavior and local WordPress plugin detection. No external
host is required by the catalog entry. “Stays on this website” describes this
popup-state feature, not optional third-party media/forms placed inside popups.

Guidance explains open versus close versus form-submission cookie events,
which changes when repeat display stops. Existing date/version remain;
this ledger records today's review. Legal basis/category remain catalog
choices, not a finding about the owner's obligations or every plugin add-on.

## onesignal

Outcome: **corrected**, version 1 → 2.

Section 11 of the [privacy policy](https://onesignal.com/privacy_policy) says
data is hosted/stored in Europe and accessed from the US and other countries.
Update the summary to retain that distinction and include other access
locations. No DPF-status finding is implied.

The [personal-data guide](https://documentation.onesignal.com/docs/en/handling-personal-data)
supports guidance distinguishing SDK data-consent gating from subscription
permission and the need to opt out before revoking consent to stop existing
push delivery. Actual WordPress setup must expose/use these methods; the
plugin hint does not prove that it does. The existing web-storage list is
not a complete model of service-worker, subscription or IndexedDB state.
Resolve those separately rather than inventing ordinary local-storage keys.

## elfsight

Outcome: **unresolved**, version 1 unchanged.

The [widget privacy guide](https://help.elfsight.com/article/418-elfsight-and-gdpr)
confirms elfsight_viewed_recently, 15 seconds and HttpOnly. The
[privacy policy](https://elfsight.com/privacy-policy/) does not establish a
specific processing region; retain the empty country field. Do not use a
controller address or a legal-jurisdiction clause as a hosting location.

Two guidance notes cover the support-requested account cookie switch and
inherited site fonts, with social-platform and Maps exceptions. These are
vendor settings, not a CookieHold demonstration. The actual widget's optional
social content and storage still need configuration-specific testing. Vendor
legal/compliance assertions are not repeated.

## addtoany

Outcome: **unresolved**, version 1 unchanged.

The [privacy notice](https://www.addtoany.com/privacy) describes IP/referrer/
request logging and optional preferred-service cookies on AddToAny's domain.
The current [share preferences](https://www.addtoany.com/share/preferences)
and [feed preferences](https://www.addtoany.com/subscribe/preferences) pages
are accessible, but their retrieved text does not independently verify the
listed 27-year lifetimes. Do not convert that approximation into a precise
number without inspecting the current writer/response.

Provider and processing country remain empty pending an explicit legal
entity and processing statement. Plugin identity is confirmed; keep existing
handles/matches without inferring which share targets load on every visit.
No “no tracking” or “no data exchange” guidance from a preference-only claim.

## disqus

Outcome: **unresolved**, version 2 unchanged.

The [privacy notice](https://help.disqus.com/en/articles/1717103-disqus-privacy-policy)
supports US/India/Philippines technical-support processing and describes
sharing with affiliated Zeta Global and other partners. That does not resolve
which exact legal entity belongs in the empty provider field or prove that
those support locations exhaust service processing. Retain those fields
pending applicable terms and regional documentation.

Empty cookie/storage arrays are not supported as a no-persistence claim.
Inspect the current embedded discussion and sign-in/advertising choices
alongside the official cookie notice before adding specific names/lifetimes.
The WordPress plugin's comment-sync feature does not make the third-party
embed first-party-only. No new guidance from incomplete configuration evidence.

## jetpack-comments

Outcome: **corrected**, version 1 → 2.

The [Automattic notice](https://automattic.com/privacy/) describes international
processing; extend USA accordingly. Keep the EU provider and narrow comment
frame path. The [Comments guide](https://jetpack.com/support/comments/)
confirms the separate comment form/social-sign-in feature. Jetpack's main
plugin file identifies the suite, not whether this module is active.

The empty persistence inventory needs comment-frame/sign-in-specific review;
do not import every WordPress.com account cookie. This catalog does not
represent all Jetpack modules or all form data exchanged with Automattic.
No new guidance duplicating the existing purpose.

## instatus

Outcome: **corrected**, version 1 → 2.

The [privacy policy](https://instatus.com/policies/privacy) says US primary
storage, remote staff in several countries and processing by international
subprocessors. Extend USA accordingly. The [widget guide](https://instatus.com/help/status-page/widgets)
supports embedded status/outage features. Keep the existing status-specific
paths and dismissal key; do not broaden matching to all pages hosted on
instatus.com. Verify current dismissal behavior and custom-domain delivery
against a configured widget before changing persistence/detection. No new
note beyond existing purpose and storage information.
