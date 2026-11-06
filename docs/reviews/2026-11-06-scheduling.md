# Scheduling and Zoho review — 2026-11-06

Eleven permanent IDs reviewed: nine corrected and two unresolved. This
batch also covers Zoho Campaigns and Marketing Automation so the remaining
Zoho entries use consistent, evidenced entity and support-access wording.

## Scope and consumer impact

Provider, purpose, privacy URL, locations, persistence, matching, Consent
Mode and WordPress hints were reviewed. All IDs, cookies, storage patterns,
addresses, inline markers, categories, legal bases, placeholders, Consent
Mode flags and WordPress hints are unchanged. Location changes are factual
summaries, not data-residency guarantees or legal assessments. Replaced DPF
parentheticals are not findings of certification loss. No translations.

The author-distributed WordPress entry files identify
[Cal.com 3.0.0](https://plugins.svn.wordpress.org/cal-com/trunk/cal.com.php),
[Zoho Campaigns 2.1.8](https://plugins.svn.wordpress.org/zoho-campaigns/trunk/index.php)
and [Marketing Automation 1.3.8](https://plugins.svn.wordpress.org/zoho-marketinghub/trunk/zmh.php).
Their existing filenames remain detection hints, not tested compatibility.
Sources from unrelated customer repositories were not used to establish
new vendor facts or broaden detection.

## acuity-scheduling

Outcome: **corrected**, version 1 → 2, with unresolved findings.

Acuity's [privacy guide](https://help.acuityscheduling.com/hc/en-us/articles/16726357347981-Data-privacy-and-Acuity-Scheduling)
explicitly points to Squarespace's policies. The
[hosting guide](https://support.squarespace.com/hc/en-us/articles/115012540827-Where-does-Squarespace-store-my-data)
describes US storage and geographically distributed CDN delivery; the
[privacy policy](https://www.squarespace.com/privacy) also describes transfers
to other countries and supports the existing Irish provider for non-US
customers. Correct USA-only to US/other-country processing and worldwide
CDN delivery.

The [cookie table](https://support.squarespace.com/hc/en-us/articles/360001264507-The-cookies-Squarespace-uses)
confirms the three client-cookie durations and `ACUITY_CART` local storage.
Its login-cookie entries still give a fixed January 2025 expiry; do not
turn those stale dates into invented lifetimes. Generic `PHPSESSID`, `TZ`
and shared reCAPTCHA keys are not added to this service's cleanup list.
Reconcile the current scheduler's scoped inventory before expanding it.
Guidance explains [URL-prefilled fields](https://developers.acuityscheduling.com/docs/embedding),
including the fact that internal-use fields can be supplied this way.

## bookeo

Outcome: **unresolved**, version 1 unchanged.

The [privacy notice](https://www.bookeo.com/privacy/) confirms Bookeo Pty Ltd
and booking-data processing. The [regional explanation](https://www.bookeo.com/gdpr/)
supports EU account storage for the listed European customer regions;
[hosting documentation](https://www.bookeo.com/hosting-security/) supports
the broader North America/Europe infrastructure. Keep the current wording.

Unresolved: the vendor provides its processor list on request rather than
on the reviewed public page. Hosting alone does not establish the locations
of support, payments or enabled integrations. The catalog's example widget
returned a script containing an IP-access refusal, not a normal configured
booking flow. No attempt was made to bypass it. Obtain a current permitted
widget sample and processor list to establish exact persistence and any
location correction. No cookie-free claim or new guidance.

## cal-com

Outcome: **corrected**, version 1 → 2, with unresolved findings.

The November 1, 2026 [privacy policy](https://cal.com/privacy) identifies
Cal.com, Inc., US processing and other-country subprocessors. The
[European hosting page](https://cal.com/europe) describes EU-hosted
organizations, including organizations routed through a cal.com subdomain.
Correct USA-only to account-dependent US/EU hosting and feature-dependent
other countries. Existing cal.com and cal.eu matches are both retained.

Unresolved: reconcile the European page's broad EU-only language with the
account's current processor list and optional integrations before claiming
all processing stays in the EU. The policy separates marketing-site cookies
from product behavior; “no third-party cookies” is not proof of no
first-party persistence. Obtain a booking-specific inventory before adding
cookie names. No new guidance that merely repeats the location field.

## calendly

Outcome: **corrected**, version 1 → 2, with unresolved findings.

The [DPA](https://calendly.com/legal/data-processing-addendum), section 2.3,
expressly describes US and other-jurisdiction processing. Correct the
USA-only location and add that processor-scoped evidence. The
[privacy notice](https://calendly.com/legal/privacy-notice) confirms Calendly,
LLC but primarily addresses its controller role. Keep that distinction.

The [embed banner guide](https://calendly.com/help/calendly-cookie-management-and-banner)
confirms that hiding the banner does not disable cookies and shows the
existing calendly.com embed asset. Guidance explains this limitation
without adopting the guide's blanket compliance language or treating its
cookie category as a universal requirement.

Unresolved: the [cookie overview](https://calendly.com/help/cookies-and-your-calendly-experience)
describes behavior and payment/account exceptions, not an exact inventory
with lifetimes. Verify the selected booking and payment flow before adding
names; empty arrays must not be described as cookie-free.

## google-calendar

Outcome: **corrected**, version 1 → 2, with unresolved findings.

The [privacy policy](https://policies.google.com/privacy) describes worldwide
processing. Replace USA-only with `Worldwide`, consistently with other
reviewed Google services. Google's [cookie explanation](https://policies.google.com/technologies/cookies)
supports NID's six-month lifetime and preference use; it does not establish
that every calendar visit sets NID or that it is an exhaustive calendar
cookie list. No cookie or HttpOnly flag change is made without scoped
response evidence.

The [calendar embed guide](https://support.google.com/calendar/answer/41207)
and [appointment sharing guide](https://support.google.com/calendar/answer/10733297)
support both existing purposes. Guidance distinguishes calendar sharing
permissions from the publicly visible booking page and profile details.
Unresolved: reconcile logged-in, signed-out and appointment variants before
expanding persistence. Keep existing URL paths and API hints; no inference
that a Google product automatically supports tag Consent Mode.

## microsoft-bookings

Outcome: **corrected**, version 1 → 2, with unresolved findings.

The [Bookings FAQ](https://learn.microsoft.com/en-us/microsoft-365/bookings/bookings-faq)
places booking data in Exchange shared mailboxes. The
[Exchange residency documentation](https://learn.microsoft.com/en-us/microsoft-365/enterprise/m365-dr-service-exo)
lists many account regions beyond the EU and USA, while the
[EU Data Boundary explanation](https://learn.microsoft.com/en-us/privacy/eudb/eu-data-boundary-learn)
documents limited outbound-transfer exceptions. Replace the binary EU/USA
location with account-dependent Microsoft 365 regions and those exceptions.

Guidance explains [organization-only access versus search indexing](https://learn.microsoft.com/en-us/microsoft-365/bookings/customize-booking-page).
The latter is not authentication. Unresolved: establish cookie/storage
identifiers for public shared-booking pages separately from administrator
sign-in and other Microsoft products. Review the applicable tenant contract
for regional entity details before generalizing the Irish provider to
non-European customers. Retain existing address and provider conventions.

## tidycal

Outcome: **corrected**, version 1 → 2, with unresolved findings.

The [privacy policy](https://tidycal.com/privacy-policy), section 12(v),
describes US operations and processing in other countries. Correct the
USA-only field. The policy confirms Sumo Group Inc. The
[embedding guide](https://help.tidycal.com/article/141-embeding-tidycal-on-your-site)
confirms the Bunny CDN script and the retained older tidycal.com script.
It distinguishes booking-frame events from tags on the parent website;
that integration is not evidence of native Consent Mode support.

Unresolved: the public [DPA](https://tidycal.com/dpa) names Sumo Group on both
sides of the template; do not treat it as a validated customer agreement.
Obtain the applicable agreement/processor inventory and a booking-specific
cookie table before asserting exclusive locations or adding lifetimes.
The controller-oriented advertising passages do not justify assigning all
marketing cookies to every booking embed. No extra guidance.

## youcanbookme

Outcome: **unresolved**, version 1 unchanged.

The [privacy notice](https://youcanbook.me/privacy) confirms AI Software
(Capacity) UK Ltd and US AWS hosting. Its cookie table combines website,
application, account and marketing functions. Do not import all of it into
the booking embed, or add generic infrastructure/authentication cookies
without scope. A complete support/integration processing footprint remains
to be established from the current processor agreement and list.

The [embed guide](https://support.youcanbook.me/hc/en-us/articles/17297710335767-Embed-Your-Booking-Page-in-a-Website)
confirms the existing host and height marker. Guidance records its important
exception: enabling tracking integrations changes the embed's banner
behavior. The normal banner-free embed still uses functional cookies.
Unresolved: request exact booking-cookie names and lifetimes, and reconcile
them with payment-enabled variants before changing the empty arrays. No
blanket exemption or CookieHold compatibility promise.

## zoho-bookings

Outcome: **corrected**, version 1 → 2, with unresolved findings.

Apply the [European entity table](https://www.zoho.com/legal/zoho-contracting-entities.html)
and [privacy FAQ](https://www.zoho.com/privacy/privacy-faq.html) findings from
the forms batch: B.V. or GmbH according to customer country, account regions
and Indian support access plus optional transfers. The
[regional API table](https://www.zoho.com/bookings/help/api/v1/oauthauthentication.html)
also confirms that account regions are not limited to EU/USA. API hosts are
not automatically new embed matches.

The [Bookings 2.0 sharing guide](https://help.zoho.com/portal/en/kb/bookings-2-0/booking-pages/booking-pages-and-links/articles/ways-to-share-booking-link)
supports the booking purpose and inline/button/link variants. Unresolved:
reconcile Bookings 1.0 and 2.0 persistence against their generated widget
code; the public guide does not provide a complete cookie table. No new
guidance merely restating how to copy embed code.

## zoho-campaigns

Outcome: **corrected**, version 1 → 2, with unresolved findings.

Apply the same qualified [provider](https://www.zoho.com/legal/zoho-contracting-entities.html)
and [support-access](https://www.zoho.com/privacy/privacy-faq.html) corrections
as the other Zoho entries. The [cookie policy](https://www.zoho.com/campaigns/cookie-policy.html)
confirms the five existing names and lifetimes. It also lists generic
session/load-balancing names and account-UI cookies; do not assign them
globally to signup forms.

Guidance explains the concrete feature losses in the
[No JavaScript form option](https://help.zoho.com/portal/en/kb/campaigns/user-guide/signup-forms/creating-a-signup-form/articles/how-to-publish-signup-form).
Unresolved: inspect actual configured popup, script and iframe variants for
any additional storage. The plugin also has ecommerce features; its file
identity does not guarantee that every feature is covered by this service's
signup-form purpose or CookieHold's detection.

## zoho-marketing-automation

Outcome: **corrected**, version 1 → 2, with unresolved findings.

Apply the same [provider](https://www.zoho.com/legal/zoho-contracting-entities.html)
and [support-access](https://www.zoho.com/privacy/privacy-faq.html) corrections.
The [cookie policy](https://www.zoho.com/marketingautomation/cookie-policy.html)
supports the existing tracking/consent names, prefixes and durations,
including the long-lived session identifier; do not substitute a guessed
browser-session lifetime. Shared PageSense identifiers can occur in these
features, so preserve existing matching and cleanup scope.

Guidance distinguishes the notice-only and opt-out choices in the
[banner settings](https://help.zoho.com/portal/en/kb/marketing-automation-2-0/user-guide/settings/consent-and-privacy/articles/configure-cookies-and-privacy-policy-banner).
Unresolved: the documentation describes decisions taking effect on a later
visit. Establish actual first-load and withdrawal behavior before claiming
prior blocking. Review cleanup of stored consent choices before adding more
preference keys. Account UI routing cookies are not automatically visitor
tracking cookies; reconcile a configured current tracker before adding them.
