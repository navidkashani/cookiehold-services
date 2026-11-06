# Email and marketing review — 2026-11-06

Twelve permanent IDs reviewed: nine corrected and three unresolved. Five
optional English guidance entries cover decisions beyond the short purpose
and cookie descriptions.

## Scope and consumer impact

Reviewed provider, purpose, privacy notice, processing locations, persistence,
matching, Consent Mode and WordPress hints. All IDs, URL/inline matches,
categories, legal bases, placeholders, Consent Mode flags and WordPress hints
are unchanged. Regional summaries include processing beyond storage; they
are not residency guarantees. Removing a DPF parenthetical does not assert
that a vendor lost certification. No translations were generated.

Kit gains one exact, service-specific cookie name. Consumers that use the
cookie inventory for cleanup can now remove its companion subscriber cookie,
which can end subscriber recognition for member content. This does not delete
the subscriber's account. Other cookie changes only correct lifetime text;
no broader cleanup patterns or shared preference keys are added.

Author-distributed WordPress entry files were read through the existing
`folder/main-file.php` hints: ActiveCampaign 3.1.0; Brevo 3.3.6 and its
WooCommerce integration 4.0.63; CleverReach 1.5.26, 2.3.5 and WooCommerce
3.4.13; LeadConnector 4.0.7; Kit 3.5.0 and WooCommerce 2.2.4; Klaviyo 3.9.0;
Mailchimp for WooCommerce 6.3 and MC4WP 4.15.0; MailerLite 1.7.27; Mailjet
6.2.4; and Pipedrive 1.1.1. These are file-identity checks, not executed
compatibility tests. GetResponse's trunk file returned 404, but its existing
[tagged 1.9.0 file](https://plugins.svn.wordpress.org/getresponse-official/tags/1.9.0/getresponse-for-wp.php)
confirms the retained legacy hint. A failed current fetch does not prove that
installed copies stopped working.

## activecampaign

Outcome: **corrected**, version 2 → 3, with unresolved findings.

The current [hosting guide](https://help.activecampaign.com/hc/en-us/articles/12883541905436-ActiveCampaign-data-hosting-locations)
and [regional policy](https://www.activecampaign.com/legal/mrdc-policy)
cover US, EU and Australian accounts, with exceptions and integrations beyond
the chosen region. Correct USA-only to account-dependent regions and other
countries. The [privacy notice](https://www.activecampaign.com/legal/privacy-policy)
continues to identify ActiveCampaign, LLC.

The [current tracker](https://diffuser-cdn.app-us1.com/diffuser/diffuser.js)
sets `prism_<account>` for 2,592,000,000 milliseconds, confirming 30 days.
The [WooCommerce 3.1.0 script](https://plugins.svn.wordpress.org/activecampaign-for-woocommerce/tags/3.1.0/public/js/site_tracking.js)
confirms the same duration for `ac_enable_tracking`. These direct sources
replace reliance on an unrelated example cookie for lifetime verification.
Guidance explains the vendor's [Track by Default control](https://help.activecampaign.com/hc/en-us/articles/360000872064-Site-tracking-and-the-GDPR).

Unresolved: the tracker also uses a five-second temporary email-link cookie.
Establish its current scope, regional delivery URLs and interaction with
optional personalization before adding cleanup or matching rules. The
WooCommerce hint does not prove that every tracking installation follows
the custom-code guidance or that CookieHold invokes the vendor API.

## brevo

Outcome: **unresolved**, version 1 unchanged.

The [tracker FAQ](https://help.brevo.com/hc/en-us/articles/209465705-FAQs-What-is-the-Brevo-tracker-and-how-to-install-it)
describes first/third-party tracking and `visitor_id`, so the empty cookie
array must not be interpreted as no tracking. The [SDK loader](https://cdn.brevo.com/js/sdk-loader.js)
loads an account-keyed `sibautomation.com/sa.js`; fetching the unconfigured
script returned 400. No invented account key or cookie duration was used.
The [signup guide](https://help.brevo.com/hc/en-us/articles/208771869-Create-a-sign-up-form-in-Brevo)
confirms forms and optional reCAPTCHA/Turnstile; those controls do not establish
that the site's other Brevo tracking is disabled.

Unresolved: obtain a current configured tracker/chat inventory and reconcile
lifetimes with the FAQ. The [security page](https://www.brevo.com/features/data-security/)
describes EU hosting, but does not establish the complete support/processing
footprint. The current terms wrapper did not expose its embedded agreement
in this fetch. Recheck that agreement and processor annex before narrowing
or expanding the existing EU/USA/India summary. No additional guidance.

## cleverreach

Outcome: **corrected**, version 1 → 2, with unresolved findings.

The [data-processing template](https://eu2.cleverreach.com/assets/dpa/5.2_en_example.pdf),
annex 2, lists AWS processing in Ireland and Germany alongside German email
dispatch providers. The current [vendor explanation](https://www.cleverreach.com/en/gdpr-compliant-newsletter-tool/)
also describes Germany and the EU. Correct Germany-only to Germany/Ireland.
The template is version 5.2, July 2024; verify the agreement applicable to the
account before treating its list as exhaustive. Its transfer provisions are
not a basis for an unconditional no-transfer promise.

The [form guide](https://support.cleverreach.com/hc/en-us/articles/18275420066962-Integrate-forms-on-website)
supports the signup-form purpose. Unresolved: establish persistence for the
actual embedded form, including custom-subdomain variants. The marketing
website's privacy-page cookie inventory is not a signup-widget inventory.
Keep empty cookie/storage lists without claiming that forms are cookie-free.
No extra guidance.

## encharge

Outcome: **unresolved**, version 1 unchanged.

The [compliance portal](https://gdpr.encharge.io/) names PXCH Holding I, LLC
and Irish AWS hosting. It also allows explicitly connected partners; that
hosting statement alone is not proof that every enabled integration stays
in Ireland. Reconcile the current agreement and integrations before changing
the location summary.

The [current tracking script](https://resources-app.encharge.io/encharge-tracking.min.js)
confirms a 365-day default for `encheventsnippet`. It also uses the generic
local-storage keys `uuid`, `optout` and `disableCookieConsent`. The latter
keys affect tracking preferences. Do not add them to blanket cleanup:
removing an opt-out could reverse the visitor's choice, and `uuid` could
belong to another script on the same origin. Establish scoped cleanup
behavior and configured form persistence before expanding the inventory.
Existing hosts and marker are retained; no new guidance or translation.

## getresponse

Outcome: **unresolved**, version 1 unchanged.

The [export and residency guide](https://www.getresponse.com/help/how-to-export-your-data-from-getresponse.html)
confirms US processing with Canadian backups for SMB/MAX US accounts and
Polish processing for MAX EU. The [privacy notice](https://www.getresponse.com/legal/privacy)
identifies GetResponse S.A. and describes additional transfers for certain
features, but mixes controller activities with service processing. Keep
those roles distinct rather than replacing the location field from that
passage alone.

Unresolved: reconcile the account's processor agreement, optional features
and actual Web Connect/form scripts to establish a full processing footprint
and cookie inventory. The documented legacy plugin identity remains useful
for detection despite the unavailable trunk file. Empty persistence lists
are not a no-cookie claim. No new guidance that only repeats the hosting
field or general embed instructions.

## gohighlevel

Outcome: **corrected**, version 1 → 2, with unresolved findings.

The [subprocessor list](https://www.gohighlevel.com/subprocessors) expressly
lists HighLevel India for services/support and US infrastructure. Correct
USA-only to USA/India; this uses processing locations rather than inferring
storage from a company's postal address.

The [external tracker](https://link.msgsndr.com/js/external-tracking.js)
confirms the one-day `lc_session_*` cookie and a sessionStorage fallback.
The [session script](https://api.leadconnectorhq.com/js/user_session.js)
confirms the existing `v2_contact_session_*` storage family. It has differing
expiry paths, so no single new cookie lifetime is inferred from its name.

Unresolved: the scripts also use generic `_ud`, fingerprint and history keys.
Determine their scope and interactions with configured form/chat/calendar
features before expanding cleanup. The service's broad hosts and multiple
features do not establish universal behavior or native Google Consent Mode.
No new guidance.

## kit

Outcome: **corrected**, version 1 → 2, with unresolved findings.

The [privacy notice](https://kit.com/privacy) explicitly describes US and
other-country processing. Correct USA-only. The author-distributed
[subscriber class](https://plugins.svn.wordpress.org/convertkit/trunk/includes/class-convertkit-subscriber.php)
sets `ck_subscriber_id`, `wordpress_ck_subscriber_id` and the signature
cookie for 365 days. Add the missing exact companion name, reusing the
existing subscriber-purpose text. The [frontend script](https://plugins.svn.wordpress.org/convertkit/trunk/resources/frontend/js/dist/frontend.min.js)
confirms the session-only popup limit; the [form SDK](https://f.convertkit.com/ckjs/ck.5.js)
confirms the three existing local-storage patterns.

Guidance explains [advanced email-link identification](https://help.kit.com/en/articles/9375532-global-advanced-tracking),
including the difference between campaign tags and subscriber/hash matching.
Unresolved: the short existing purpose covers signup forms but omits optional
subscriber recognition and page tagging. A broader purpose needs editorial
and translation review. No new translated purpose is invented, and plugin
identity is not a tested compatibility claim.

## klaviyo

Outcome: **corrected**, version 2 → 3, with unresolved findings.

The [privacy FAQ](https://www.klaviyo.com/legal/privacy-faqs) separates US
storage from overseas staff access. The [processor list](https://trust.klaviyo.com/)
adds support and optional-feature processing elsewhere. Correct USA-only to
US plus other countries for those activities.

The [cookie guide](https://help.klaviyo.com/hc/en-us/articles/360034666712)
confirms the configured two-year `__kla_id` duration, subject to browser
limits. Guidance covers optional re-identification and the separate scope
of message preference pages. Unresolved: the guide identifies an additional
server-set identity cookie without its lifetime. Establish that before
adding it. Its opt-out cookie must not be removed indiscriminately. Broad
`klaviyo.com` matching also covers forms; splitting forms from tracking
would need an explicit consumer/detection design, not a speculative rule
change in this audit.

## mailchimp

Outcome: **corrected**, version 3 → 4, with unresolved findings.

The [DPA](https://mailchimp.com/legal/data-processing-addendum/), section 6.1,
covers US and other-country processing. Correct the USA-only summary.
For WooCommerce 6.3, [getCookieDuration](https://plugins.svn.wordpress.org/mailchimp-for-woocommerce/tags/6.3/includes/class-mailchimp-woocommerce-service.php)
uses 2,419,200 seconds (28 days) despite its `thirty_days` label. Correct
`mailchimp_user_email` from 30 to 28 days. The [PHP cookie helper](https://plugins.svn.wordpress.org/mailchimp-for-woocommerce/tags/6.3/bootstrap.php)
allows filters to override options; this is the default, not an unchangeable
expiry for every installation.

The [frontend script](https://plugins.svn.wordpress.org/mailchimp-for-woocommerce/tags/6.3/public/js/mailchimp-woocommerce-public.js)
sets both `mailchimp.cart.*_email` cookies without an expiry, using defaults
that specify path/security but no lifetime. Correct both to Session. Despite
the helper's `storage` name, these are document cookies, not localStorage.
Guidance explains the [guest-cart tradeoff](https://github.com/mailchimp/mc-woocommerce/wiki/Enable-or-Disable-Cookie-Filter)
when the vendor's cookie filter is disabled.

Unresolved: reconcile additional landing-page, previous-email and HttpOnly
cart-token cookies across installed plugin versions before expanding cleanup.
These WooCommerce facts are not an exhaustive inventory of connected-site
scripts or MC4WP. Keep their detection hints distinct from compatibility.

## mailerlite

Outcome: **corrected**, version 1 → 2, with unresolved findings.

The current [legal FAQ](https://www.mailerlite.com/legal) distinguishes Irish
and US customer contracts: subscribers of customers outside EEA/UK/Switzerland
are also transferred to the USA. Correct the EU-only field while preserving
the EU-facing provider convention. The [DPA](https://www.mailerlite.com/legal/data-processing-agreement)
confirms German Classic and Dutch current-platform data centers.

The [current universal script](https://assets.mailerlite.com/js/universal.js)
confirms the seven-day session identifier and form-configured popup duration.
It requests exactly 9,999 days for the submitted-form cookie, so replace the
rounded 27 years with that value. This is a requested expiry, not a promise
that browsers retain cookies that long.

Unresolved: the [help page](https://www.mailerlite.com/help/which-cookies-are-used-by-mailerlite-forms)
and [Classic script](https://static.mailerlite.com/js/universal.js) also contain
colon-delimited legacy cookie names, including a 30-day popup marker. The
existing cookie-name schema cannot represent those names. Do not mislabel
them as storage keys or silently widen the runtime contract; resolve that
schema/client limitation separately. `ml_guid` remains correctly listed as
localStorage. No guidance duplicating the cookie or location fields.

## mailjet

Outcome: **corrected**, version 1 → 2, with unresolved findings.

The [Sinch processor list](https://sinch.com/legal/data-protection-agreement-sub-processors/)
specifically lists Mailjet's German/Belgian Google data centers, French
operations, US support and Zendesk support in USA/EU/APAC. Correct the
incomplete Germany/Belgium/USA summary to EU plus US/Asia-Pacific support.
The list qualifies support processing as customer-initiated; this is not a
claim that every signup is replicated across every support location.

The current [inline](https://app.mailjet.com/pas-nc-embedded-v1.js) and
[popup](https://app.mailjet.com/pas-nc-pop-in-v1.js) loaders support the existing
form matches. Unresolved: loaders alone do not expose every configured
iframe/CAPTCHA persistence path. Obtain a current form-specific inventory
before adding cookies or asserting no storage. Keep the legacy widget
addresses and plugin identity; no new guidance.

## pipedrive

Outcome: **corrected**, version 1 → 2, with unresolved findings.

The [processor list](https://www.pipedrive.com/en/subprocessors) separates
account hosting regions from affiliates, support and optional features.
Correct the hosting-only summary to account-dependent regions plus other
countries. Do not equate each processor's entity country with its data center.

Guidance uses the September 2026 [lead-generation cookie guide](https://support.pipedrive.com/en/article/leadbooster-cookies)
to distinguish Chatbot/Web Forms from Web Visitors consent controls.
Unresolved: that guide lists `__cf_bm` at one hour while the linked
[Cloudflare documentation](https://developers.cloudflare.com/fundamentals/reference/policies-compliances/cloudflare-cookies/)
says 30 minutes of inactivity. Resolve this with scoped responses/vendor
clarification before adding a shared cookie with a guessed lifetime. Optional
reCAPTCHA and Dealfront identifiers are not automatically assigned to every
Pipedrive form. Retain the existing matching and empty arrays without a
cookie-free claim.
