# Security and infrastructure review: 2026-11-06

Fifteen records reviewed: twelve corrected, two verified unchanged and one
unresolved without runtime edits. Four services gain six English guidance
notes. No translations were generated or changed.

## Scope and compatibility

Permanent IDs, matching, cookie names and durations, storage patterns,
WordPress hints, purposes, categories, legal bases, Consent Mode flags and
placeholders remain unchanged. Security purposes and essential categories
are not site-specific legal conclusions. These changes correct metadata;
none claims that CookieHold implements the vendor's configuration controls.

CDN geography describes the documented delivery network, not an exclusive
location for account data or a measured route for every visitor. Empty cookie
and storage arrays are inventories, not a promise of no storage. Serving a
library is distinct from the behavior of the library or application that runs
after it loads. Framework labels are not refreshed without registry evidence;
replacing a narrow location with a broader description does not assert that
an existing certification was withdrawn.

## wordfence

Outcome: **corrected**, version 1 → 2, with unresolved findings.

The [privacy policy](https://www.wordfence.com/privacy-policy/) covers the
plugin and permits processing in the USA and other countries. Replace the
USA-only location with `USA and other countries`; retain Defiant, Inc.
The [GDPR help page](https://www.wordfence.com/help/general-data-protection-regulation/)
confirms the four listed cookie families and the remembered-device purpose.

Published Wordfence 9.0.2 source was read without executing it.
[Login-alert code](https://plugins.svn.wordpress.org/wordfence/trunk/lib/wordfenceClass.php)
and [country-blocking code](https://plugins.svn.wordpress.org/wordfence/trunk/models/block/wfBlock.php)
set their cookies for 365 days with HttpOnly. The
[login-security controller](https://plugins.svn.wordpress.org/wordfence/trunk/modules/login-security/classes/controller/users.php)
sets the remembered-device cookie with HttpOnly; documentation gives 30 days.
The existing cookie-only detection model and plugin entry remain appropriate.

Unresolved: the public help page does not independently establish the listed
12-hour firewall-authentication lifetime. Trace the WAF cookie-name builder
and expiration code before changing that value. Inspect any feature-specific
browser persistence separately; no broad Wordfence storage match is invented.
No additional guidance needed.

## cleantalk

Outcome: **corrected**, version 1 → 2, with unresolved findings.

[Storage-location help](https://cleantalk.org/help/storage-location) documents
USA/EU defaults and a selectable EU-only storage option. Use
`USA and EU; EU-only storage option`. This is a storage setting, not a blanket
promise about every access or transfer. The [privacy policy](https://cleantalk.org/privacy)
supports CleanTalk Inc. and the anti-spam processing purpose.

The [cookie table](https://cleantalk.org/help/cookies-description) supports
the 21 listed identifiers and their session/month durations.
[Set cookies](https://cleantalk.org/help/set-cookies-option) distinguishes
browser local storage, database-backed alternatives and automatic mode.
Guidance explains that switching cookies Off still uses browser storage.
The vendor's description of MD5 as encryption is not repeated.

Plugin 6.91's [bundle resolver](https://plugins.svn.wordpress.org/cleantalk-spam-protect/trunk/lib/Cleantalk/ApbctWP/ApbctJsBundleResolver.php)
constructs the existing protection/gathering bundle variants; its
[bot-detector service](https://plugins.svn.wordpress.org/cleantalk-spam-protect/trunk/lib/Cleantalk/ApbctWP/BotDetectorService.php)
loads the matched remote wrapper. Keep the existing hints.

Unresolved: reconcile the remotely versioned bot detector, alternative mode
and all persistence keys before treating the storage list as exhaustive.
Verify EU-only behavior in the intended account/configuration rather than
inferring it from installation of the WordPress plugin.

## google-recaptcha

Outcome: **corrected**, version 3 → 4, with unresolved findings.

The [current FAQ](https://docs.cloud.google.com/recaptcha/docs/faq) documents
the April 2026 processor change and continued support for existing reCAPTCHA
keys/APIs within Fraud Defense. Keep the permanent ID and recognizable API
name; an umbrella brand is not a reason to break stored service references.
Guidance covers alternate-domain setup and reviewing older disclosures.

Replace the general Google policy link with the
[Cloud Data Processing Addendum](https://cloud.google.com/terms/data-processing-addendum),
the document Google now identifies for customer-data processing. This is the
applicable privacy-terms link, not a claim that Google's general controller
policy governs visitor submissions. Section 10 permits processing wherever
Google/subprocessors maintain facilities, subject to service commitments;
replace the USA-only location with `Worldwide`.

The [Cloud entity table](https://cloud.google.com/terms/google-entity) varies
the contracting entity by customer country. Replace Google Ireland Limited
with `Google Cloud EMEA Limited or regional Google Cloud entity (depends on customer country)`.
This summarizes the European default and exceptions, not every historical
contract. [Service-specific terms](https://cloud.google.com/terms/service-terms)
restrict use of submitted information to service/security purposes.

Unresolved: the current FAQ confirms the risk-analysis cookie but does not
establish its six-month lifetime; it also uses inconsistent casing in two
sections. Retain the existing exact name pending browser/source evidence.
Reconcile legacy contracts and product variants before making more specific
entity claims. The classic FAQ still has older disclosure wording; the newer
Cloud FAQ is the source for the new guidance. No legal-basis change follows
automatically from the processor change.

The three existing script handles are present in
[Contact Form 7](https://plugins.svn.wordpress.org/contact-form-7/trunk/modules/recaptcha/recaptcha.php),
[BestWebSoft](https://plugins.svn.wordpress.org/google-captcha/trunk/google-captcha.php)
and [Ultimate Member](https://plugins.svn.wordpress.org/um-recaptcha/trunk/includes/core/class-enqueue.php)
source. Plugin presence alone does not establish key configuration or consent
behavior.

## cloudflare-turnstile

Outcome: **corrected**, version 2 → 3, with unresolved findings.

Use the [Turnstile Privacy Addendum](https://www.cloudflare.com/turnstile-privacy-policy/)
as the privacy URL. It supplements the
[main policy](https://www.cloudflare.com/privacypolicy/), whose international
processing section supports `USA, EEA and other countries`, replacing the
USA-only description. The security-only purpose remains; “no tracking
cookies” is not the same assertion as “no cookies.”

[Server validation](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/)
supports the guidance about mandatory Siteverify, single-use tokens and
five-minute expiry. [Pre-clearance configuration](https://developers.cloudflare.com/turnstile/additional-configuration/hostname-management/pre-clearance/)
documents an optional clearance cookie and zone/hostname prerequisites.

Unresolved: the empty cookie inventory omits optional `cf_clearance`. Do not
silently add a shared Cloudflare security cookie to service-level clearing:
establish attribution, configured challenge lifetime and consumer security
effects first. The new caveat makes this limitation visible without inventing
a universal lifetime or claiming CookieHold controls pre-clearance.

## hcaptcha

Outcome: **corrected**, version 2 → 3, with unresolved findings.

The [privacy policy](https://www.hcaptcha.com/privacy) identifies Intuition
Machines, Inc. and international processing. Broaden the location to
`USA and other countries`. The policy's cookie table supports the existing
30-day accessibility durations, but also labels these rows “Session”; retain
the duration column rather than inventing a reconciliation.

The [developer guide](https://docs.hcaptcha.com/) confirms the host and
server-side token validation. Its security instructions are vendor behavior,
not a tested WordPress integration. No additional note needed in this batch.

Unresolved: integrator contracts govern processor activity separately from
the controller policy. Obtain the applicable contract/deployment details for
stronger residency claims. Reconcile the cookie table's type/duration conflict
against current responses, including accessibility mode; do not assume the
empty storage list is exhaustive.

## cdnjs

Outcome: **corrected**, version 1 → 2; no unresolved correction identified.

The [about page](https://cdnjs.com/about) identifies Cloudflare's operation
and global delivery network. Replace USA-only with
`Worldwide (Cloudflare network)`. The listed library-delivery host and purpose
remain appropriate. [Cloudflare's policy](https://www.cloudflare.com/privacypolicy/)
remains the provider privacy link. No WordPress-specific integration or
browser-storage guarantee is inferred. No filler guidance.

## jsdelivr

Outcome: **verified-unchanged**, version 1 and checked date retained.

The official [privacy text](https://raw.githubusercontent.com/jsdelivr/jsdelivr/master/Privacy%20Policy.md)
identifies Volentio JSD Limited, international processing and no cookies or
similar technologies for the CDN service. Its
[subprocessor list](https://raw.githubusercontent.com/jsdelivr/jsdelivr/master/Sub-Processors.md)
names the delivery providers, including Bunny for legacy BootstrapCDN.
These support the provider, location and empty storage inventories for the
delivery service, independently of any loaded library's behavior.

The [project documentation](https://github.com/jsdelivr/jsdelivr) supports
the primary endpoint. A maintainer's response in
[issue 18656](https://github.com/jsdelivr/jsdelivr/issues/18656)
confirms the four alternate endpoints are official testing endpoints. Keep
them as detection patterns; their inclusion is not a recommendation to use
them for production. No runtime correction or extra guidance needed.

## bootstrapcdn

Outcome: **verified-unchanged**, version 1 and checked date retained.

The [about page](https://www.bootstrapcdn.com/about/) describes the global
service and its jsDelivr infrastructure. The
[jsDelivr privacy policy](https://raw.githubusercontent.com/jsdelivr/jsdelivr/master/Privacy%20Policy.md)
and [subprocessors](https://raw.githubusercontent.com/jsdelivr/jsdelivr/master/Sub-Processors.md)
support the current provider/international scope, including legacy delivery.
Bootstrap's versioned source confirms
[netdna](https://raw.githubusercontent.com/twbs/bootstrap/v3.0.0/_config.yml),
[maxcdn](https://raw.githubusercontent.com/twbs/bootstrap/v3.3.7/_config.yml)
and [stackpath](https://raw.githubusercontent.com/twbs/bootstrap/v4.1.3/_config.yml)
hostnames. Historical templates still justify recognition; do not replace
them with the already separately cataloged jsDelivr host. No additional note.

## jquery-cdn

Outcome: **corrected**, version 1 → 2; no unresolved correction identified.

[jQuery releases](https://releases.jquery.com/) confirms code.jquery.com.
The [project's infrastructure documentation](https://raw.githubusercontent.com/jquery/infrastructure-puppet/staging/doc/cdn.md)
identifies Fastly delivery and a DigitalOcean origin. The
[OpenJS privacy policy](https://openjsf.org/privacy) covers project services
and international transfers; use `USA and other countries` instead of USA
alone. Keep OpenJS Foundation as provider, rather than substituting a CDN
subprocessor. No cookie, storage or integration additions are warranted by
these delivery documents. No extra guidance.

## google-hosted-libraries

Outcome: **corrected**, version 1 → 2, with unresolved findings.

The [service documentation](https://developers.google.com/speed/libraries)
describes a globally available distribution network and the existing host.
Use `Worldwide` instead of a USA-only location. The
[service privacy terms](https://developers.google.com/speed/libraries/terms)
refer to [Google's privacy policy](https://policies.google.com/privacy), so
retain that link and the existing provider for this service.

Unresolved: the service terms permit security/abuse-prevention cookies but
do not give exact identifiers or lifetimes. Do not describe the empty arrays
as proof of cookie-free operation or copy cookies from Google's unrelated
services. Obtain response evidence for the relevant delivery configuration
before adding identifiers. No guidance beyond these inventory findings.

## unpkg

Outcome: **corrected**, version 1 → 2, with unresolved findings.

[Network documentation](https://unpkg.com/network) identifies worldwide
Cloudflare delivery and origins across multiple continents. Fill the empty
location with `Worldwide (Cloudflare network)`. The
[about page](https://unpkg.com/about) and [service home](https://unpkg.com/)
support the host and library-delivery purpose.

Unresolved: these pages do not establish a service-specific privacy policy or
legal recipient. Keep those fields empty rather than equating a maintainer
or infrastructure provider with the responsible entity. Do not copy analytics
cookies from UNPKG's own website into the file-delivery inventory. Obtain a
vendor statement for those missing details; no filler guidance.

## wordpress-org

Outcome: **unresolved**, version 1 and checked date retained.

The [WordPress core source](https://core.svn.wordpress.org/trunk/wp-includes/formatting.php)
still constructs s.w.org emoji image URLs, confirming the narrow service
purpose and host. The [project privacy policy](https://wordpress.org/about/privacy/)
does not resolve the static-delivery legal entity and processing geography.
Keep those fields empty rather than infer a country from the project name.

Unresolved: request a service-specific operator/location statement. Cookies
used on wordpress.org itself and storage used by local WordPress emoji
feature detection are not automatically attributable to remote image
delivery. No cookie/storage addition or guidance is supported by this review.

## wordpress-com-cdn

Outcome: **corrected**, version 1 → 2, with unresolved findings.

Change the privacy link to Automattic's
[visitor notice](https://automattic.com/privacy-notice/). Its
[general policy](https://automattic.com/privacy/) explicitly separates
processing on behalf of visitors to customers' sites.
[Site Accelerator documentation](https://jetpack.com/support/site-accelerator/)
describes worldwide delivery without a region-selection option; replace
USA-only with `Worldwide`. It also supports the image-host patterns and the
new cache-refresh/removal guidance. Current
[asset-delivery source](https://plugins.svn.wordpress.org/jetpack/trunk/modules/photon-cdn.php)
confirms c0.wp.com. Keep the Jetpack and Boost plugin hints.

Unresolved: reconcile logged-in visitor behavior and optional Jetpack
features against [Jetpack's cookie documentation](https://jetpack.com/support/cookies/)
before treating the empty storage inventories as exhaustive. Do not move
Stats cookies into this CDN entry or claim a tested banner integration.

## wpmudev-cdn

Outcome: **corrected**, version 1 → 2; no unresolved correction identified.

The [CDN documentation](https://wpmudev.com/docs/getting-started/content-delivery-network-cdn/)
lists delivery locations across continents and confirms the assetcdn and
Hummingbird endpoints. Replace USA-only with `Worldwide`.
The [privacy policy](https://wpmudev.com/privacy-policy/) identifies Incsub LLC.
Smush and Hummingbird entries remain detection hints: CDN use depends on
the plan and enabled features, not just installing the plugin.

The published [Smush resizing source](https://plugins.svn.wordpress.org/wp-smushit/trunk/_src/js/frontend/lazy-load/auto-resizing.js)
explicitly retains smushcdn.com for legacy CDN/cache URLs, supporting the
older match alongside assetcdn.net. No generic storage matches or extra
guidance are introduced.

## shortpixel-cdn

Outcome: **corrected**, version 1 → 2, with unresolved findings.

The [privacy policy](https://shortpixel.com/privacy) identifies ID SCOUT SRL
and describes Germany/Romania storage. The newer
[subprocessor list](https://shortpixel.com/sub-processor-list) additionally
lists Finland hosting and worldwide Bunny delivery. Broaden the location to
`EU (Germany, Finland and Romania); global CDN`; do not silently choose one
document's incomplete country list.

[Custom-domain instructions](https://shortpixel.com/knowledge-base/article/how-to-serve-the-images-from-a-custom-domain/)
and [SPIO delivery documentation](https://shortpixel.com/knowledge-base/article/deliver-webp-avif-images-using-the-shortpixel-cdn-in-spio/)
support both existing hosts and plugin hints. The
[cookie policy](https://shortpixel.com/cookie-policy) concerns ShortPixel's
own website, not every customer image request; its marketing cookies are not
added to this service.

Unresolved: the vendor should reconcile the policy and subprocessor location
descriptions and clarify each processing activity. Custom domains/other CDNs
fall outside these remote host matches; test representative configurations
before broadening detection. Do not assign optional AI processing to every
CDN image solely because AI providers appear in the organization-wide list.
No extra guidance needed.

## WordPress evidence

Published plugin headers were inspected on the review date. These are entry
file/version observations, not tested compatibility guarantees.

| Entry file | Reported version |
|---|---|
| [wordfence/wordfence.php](https://plugins.svn.wordpress.org/wordfence/trunk/wordfence.php) | 9.0.2 |
| [cleantalk-spam-protect/cleantalk.php](https://plugins.svn.wordpress.org/cleantalk-spam-protect/trunk/cleantalk.php) | 6.91 |
| [contact-form-7/wp-contact-form-7.php](https://plugins.svn.wordpress.org/contact-form-7/trunk/wp-contact-form-7.php) | 6.2.4.1 |
| [advanced-google-recaptcha/advanced-google-recaptcha.php](https://plugins.svn.wordpress.org/advanced-google-recaptcha/trunk/advanced-google-recaptcha.php) | 5.42 |
| [google-captcha/google-captcha.php](https://plugins.svn.wordpress.org/google-captcha/trunk/google-captcha.php) | 2.0 |
| [wpcf7-recaptcha/wpcf7-recaptcha.php](https://plugins.svn.wordpress.org/wpcf7-recaptcha/trunk/wpcf7-recaptcha.php) | 1.5.0 |
| [contact-form-7-simple-recaptcha/contact-form-7-simple-recaptcha.php](https://plugins.svn.wordpress.org/contact-form-7-simple-recaptcha/trunk/contact-form-7-simple-recaptcha.php) | 0.2.0 |
| [advanced-nocaptcha-recaptcha/advanced-nocaptcha-recaptcha.php](https://plugins.svn.wordpress.org/advanced-nocaptcha-recaptcha/trunk/advanced-nocaptcha-recaptcha.php) | 7.6.2 |
| [invisible-recaptcha/invisible-recaptcha.php](https://plugins.svn.wordpress.org/invisible-recaptcha/trunk/invisible-recaptcha.php) | 1.3.4 |
| [login-recaptcha/login-nocaptcha.php](https://plugins.svn.wordpress.org/login-recaptcha/trunk/login-nocaptcha.php) | 1.8.1 |
| [recaptcha-woo/recaptcha-woo.php](https://plugins.svn.wordpress.org/recaptcha-woo/trunk/recaptcha-woo.php) | 1.4.7 |
| [um-recaptcha/um-recaptcha.php](https://plugins.svn.wordpress.org/um-recaptcha/trunk/um-recaptcha.php) | 2.3.8 |
| [simple-cloudflare-turnstile/simple-cloudflare-turnstile.php](https://plugins.svn.wordpress.org/simple-cloudflare-turnstile/trunk/simple-cloudflare-turnstile.php) | 1.44.5 |
| [enable-turnstile-cloudflare-for-gravity-forms/ss88-gravity-forms-turnstile.php](https://plugins.svn.wordpress.org/enable-turnstile-cloudflare-for-gravity-forms/trunk/ss88-gravity-forms-turnstile.php) | 1.8 |
| [wppool-turnstile-captcha-spam-filter/easy-cloudflare-turnstile.php](https://plugins.svn.wordpress.org/wppool-turnstile-captcha-spam-filter/trunk/easy-cloudflare-turnstile.php) | 2.3.12 |
| [hcaptcha-for-forms-and-more/hcaptcha.php](https://plugins.svn.wordpress.org/hcaptcha-for-forms-and-more/trunk/hcaptcha.php) | 5.5.0 |
| [jetpack/jetpack.php](https://plugins.svn.wordpress.org/jetpack/trunk/jetpack.php) | 16.4 |
| [jetpack-boost/jetpack-boost.php](https://plugins.svn.wordpress.org/jetpack-boost/trunk/jetpack-boost.php) | 4.8.1 |
| [wp-smushit/wp-smush.php](https://plugins.svn.wordpress.org/wp-smushit/trunk/wp-smush.php) | 4.3.6 |
| [hummingbird-performance/wp-hummingbird.php](https://plugins.svn.wordpress.org/hummingbird-performance/trunk/wp-hummingbird.php) | 4.0.0 |
| [shortpixel-adaptive-images/short-pixel-ai.php](https://plugins.svn.wordpress.org/shortpixel-adaptive-images/trunk/short-pixel-ai.php) | 3.11.6 |
| [shortpixel-image-optimiser/wp-shortpixel.php](https://plugins.svn.wordpress.org/shortpixel-image-optimiser/trunk/wp-shortpixel.php) | 6.6.1 |

## Validation

Formatting, schema/content validation, all 32 tests, build and whitespace
checks pass. The ledger matches all 210 permanent IDs: 59 reviewed and 151
pending. Reviewed versions and report anchors match source records.
Unchanged records retain their original checked dates.

Guidance contains 37 notes for 28 services. Its separate artifact remains
outside the plugin manifest, whose file inventory is unchanged. Release
configuration and publishing workflow are unchanged. No release was published.
