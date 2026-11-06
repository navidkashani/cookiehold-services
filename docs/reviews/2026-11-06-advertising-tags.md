# Advertising tags review — 2026-11-06

Fifteen IDs reviewed: thirteen corrected and two unresolved. Five services gain
one guidance note each. A follow-up also adds Pinterest, Inc. alongside the
European joint controller in the previously reviewed pinterest-embed entry,
within the same service revision/change set.

## Consumer impact and scope

IDs, URL/inline detection, WordPress hints, Consent Mode flags, categories,
legal bases and placeholders are unchanged. Microsoft UET and Snap gain
specific storage keys; UET and Pinterest gain documented cookies. These can
expand the identifiers consumers recognize or clear for those services, but
not script detection. No generic storage key or cross-service host is added.
Lifetimes and processing locations are metadata corrections. No translations
are generated. DPF parenthetical removal is not a finding about certification.

Author-distributed WordPress main files were read for Site Kit 1.191.0,
Google for WooCommerce 3.10.0, Kliken 1.5.5, Ad Inserter 2.8.20,
PixelYourSite 11.4.5, Meta Pixel 5.2.2, Facebook for WooCommerce 3.7.8 and
Pinterest for WooCommerce 1.6.2 at the catalog's existing paths. These are
filename/identity checks, not tested CookieHold compatibility. Existing
script handles remain pending installed-plugin verification.

## google-ads

Outcome: **corrected**, version 4 → 5.

The [privacy notice](https://policies.google.com/privacy) describes global
processing; replace USA-only with worldwide. The [ad-cookie table](https://business.safety.google/adscookies/)
supports the existing 90 days for _gcl_aw and _gcl_au, but IDE is 13 months
in the EEA/UK and 24 elsewhere. Change IDE's compact lifetime to
“13–24 months (by region)”. Do not mistake cookie lifetime for conversion
attribution windows. HttpOnly remains unverified on a current scoped response.
Existing broad advertising hosts overlap product families in practice; no
speculative reallocation between this entry and AdSense. No new guidance.

## google-adsense

Outcome: **corrected**, version 2 → 3.

Replace USA-only with worldwide using the [Google notice](https://policies.google.com/privacy).
The [ad-cookie table](https://business.safety.google/adscookies/) confirms
__gads and __gpi at 13 months. The inventory is not exhaustive for all buyers
and serving modes; empty storage does not mean no storage.

Guidance distinguishes [non-personalized ads](https://support.google.com/adsense/answer/9007336?hl=en)
from [limited ads](https://support.google.com/adsense/answer/14210870?hl=en).
Both can involve persistence, with fraud-related storage documented for
programmatic limited ads. The note gives the account switch without making
legal claims or claiming CookieHold certification/TCF integration. Runtime
Consent Mode flags remain existing consumer metadata, not a replacement for
Google's publisher requirements. Verify mode-specific storage in a real
publisher configuration before expanding identifiers.

## meta-pixel

Outcome: **unresolved**, version 3 unchanged.

The [Meta privacy notice](https://www.facebook.com/privacy/policy/) returned an
unavailable/login response. Earlier Meta documentation fetches in the social
embed review were also blocked. The official WordPress plugin source remains
accessible, confirming identities and the existence of both browser-pixel and
server-side integration paths, not their behavior on a configured site.

The _fbp/_fbc/fr lifetimes, provider and full processing footprint therefore
remain unreverified here. Revisit the official cookie/business-tools notices
and trace a configured pixel with and without an ad-click parameter. Do not
infer that browser blocking also disables server-side Conversions API delivery.
No runtime correction or new guidance from insufficient evidence.

## linkedin-insight

Outcome: **corrected**, version 3 → 4.

The [privacy notice](https://www.linkedin.com/legal/privacy-policy) describes
processing inside and outside the US; extend USA accordingly. The
[cookie table](https://www.linkedin.com/legal/l/cookie-table) supports the
listed lifetimes for li_fat_id, bcookie, UserMatchHistory,
AnalyticsSyncHistory, lms_analytics, lms_ads and li_sugr.

Unresolved wording: li_fat_id is described as a member indirect identifier
for conversion tracking, retargeting and analytics; the existing “Stores the
ad click” is narrower. Proposed purpose: “Links visits to a LinkedIn member.”
Review the corresponding translations before replacing that description.
A table of possible cookies does not verify occurrence in every installation.
No new guidance needed; keep Insight-specific matches.

## microsoft-advertising

Outcome: **corrected**, version 2 → 3.

The [privacy statement](https://www.microsoft.com/en-us/privacy/privacystatement)
describes US and international processing. Extend USA accordingly. The current
[UET script](https://bat.bing.com/bat.js) passes sessionExpirationTime=86400 and
visitorExpirationTime=33696000 seconds to its cookie writer: correct _uetsid
from 30 minutes to one day and _uetvid from 16 days to 390 days. The
[parameter table](https://learn.microsoft.com/en-us/advertising/msa-help/hlp_ba_conc_uet_parameters_table)
and script support adding _uetmsclkid at 90 days. The same script backs up all
three identifiers in local storage with corresponding _exp entries; add these
six exact keys. MUID's existing one-year lifetime remains unresolved by the
notice; obtain a scoped server response before changing it.

Guidance uses Microsoft's [consent FAQ](https://learn.microsoft.com/en-us/advertising/msa-help/hlp_ba_conc_uet_consentfaq)
to distinguish its two signal integrations and basic/advanced behavior. The
catalog's Google-specific false flags are not contradicted by Microsoft's
separate consent interface and are unchanged. No claim that a CookieHold
installation sends these signals or satisfies a vendor certification.

## pinterest-tag

Outcome: **corrected**, version 2 → 3.

The currently effective [privacy notice](https://policy.pinterest.com/en/privacy-policy)
names Pinterest Europe Ltd. and Pinterest, Inc. as joint controllers and
allows US/international processing. Update provider and location, and apply
the same provider correction to pinterest-embed. The announced November 12,
2026 policy is future-dated and is not the evidence used here.

The [tag-cookie guide](https://help.pinterest.com/en/business/article/pinterest-tag-parameters-and-cookies)
supports the existing one-year cookies and adding _pin_aem for hashed customer
information in automatic enhanced match. Guidance explains the optional form
field collection. Actual use depends on region and advertiser configuration;
the cookie is not asserted to occur on every site. The listed cookies are
not an exhaustive inventory of logged-in or in-app contexts. No match changes.

## tiktok-pixel

Outcome: **corrected**, version 2 → 3.

The [EEA notice](https://www.tiktok.com/legal/page/eea/privacy-policy/en) identifies
TikTok Technology Limited and TikTok Information Technologies UK Limited as
joint controllers. Add the UK entity and remote access from other countries
to the existing US/Malaysia/Singapore location summary.

The [pixel-cookie guide](https://ads.tiktok.com/help/article/using-cookies-with-tiktok-pixel)
confirms 13 months for _ttp, ttcsid variants and ttclid. Guidance explains that
disabling new first-party cookies does not stop existing cookies operating
until expiry or remove third-party cookie functionality. Pangle-related
reading is region/configuration dependent; do not indiscriminately assign
all Pangle storage to this entry. Browser tracing is still needed for a
particular integration and any storage beyond the documented cookies.

## snap-pixel

Outcome: **corrected**, version 2 → 3.

The [regional notice](https://values.snap.com/privacy/privacy-policy/eea-uk-privacy-notice)
confirms Snap Inc. is controller and Snap B.V. is its representative, not a
replacement controller. The [main notice](https://values.snap.com/privacy/privacy-policy)
allows US/international processing; extend USA accordingly.

The current [pixel script](https://sc-static.net/scevent.min.js) writes the
_scid family through a common expiry function: 13 calendar months capped at
395 days. Correct _scid from one year and express both listed lifetimes as
“Up to 13 months”. Its storage dispatch distinguishes cookies (C), local
storage (L), session storage (S) and _r variants. Add u_sclid, u_sclid_r,
u_scsid, _scsrid and _scsrid_r to storage. These describe implementation
possibilities, not a guarantee that all are written on every visit.
Unresolved: configuration-specific additional cookies and matching behavior
need an event trace; do not turn this into a full Snapchat-site cookie list.
No new guidance.

## reddit-pixel

Outcome: **corrected**, version 2 → 3.

The [July 2026 privacy notice](https://www.reddit.com/policies/privacy-policy)
names Reddit Netherlands B.V. as EEA/Swiss controller and US/international
processing. Fill the EU-oriented provider field and extend USA. This also
clarifies the controller-versus-representative question noted in the earlier
reddit-embed review; its existing provider already matches.

The notice does not verify _rdt_uuid's three-month lifetime. The attempted
public pixel-source fetch did not yield usable implementation evidence.
Keep the existing lifetime and paths pending a current official tag guide
or scoped response/script trace. No speculative cookies or new guidance.

## x-pixel

Outcome: **corrected**, version 1 → 2.

Section 6.2 of [X's privacy notice](https://x.com/en/privacy) describes
international infrastructure and transfers. Extend USA accordingly; the
European provider remains X Internet Unlimited Company. The accessible
notice does not establish the exact two-year lifetimes for muc_ads,
guest_id_ads and personalization_id; an attempted current tag-source fetch
did not resolve those values. Verify them through X's cookie documentation
and scoped browser/server responses. Keep existing pixel paths and twq
variants, with no new guidance based on guessed controls.

## quora-pixel

Outcome: **corrected**, version 2 → 3.

Fill the empty privacy URL with https://www.quora.com/about/privacy, which
Quora's [official help page](https://help.quora.com/hc/en-us/articles/360000839683-What-opt-out-choices-do-I-have)
links as its privacy policy. The [pixel setup guide](https://business.quora.com/marketing-advertising-resources/quora-pixel-conversion-tracking-setup)
confirms conversion measurement and the distinction between base and event
setup. Direct privacy-page retrieval was blocked; this URL correction does
not claim its full contents were verified. Keep provider/country and
persistence empty pending an accessible current pixel notice. Do not derive
a pixel processing region from the job-applicant policy. No new guidance.

## amazon-ads

Outcome: **unresolved**, version 1 unchanged.

The [advertising privacy page](https://advertising.amazon.com/legal/privacy-notice)
is a country selector. The German notice linked there returned 503. This
alone does not resolve the catalog's provider, USA-only summary or ad-id
190-day/ad-privacy five-year lifetimes. A generic Amazon account notice should
not be treated as a complete Amazon Ads cookie table. Revisit the appropriate
regional advertising notice and amazon-adsystem response evidence before
changing these fields. Retain broad host scope and no new guidance.

## criteo

Outcome: **corrected**, version 2 → 3.

The [ad-technology privacy notice](https://www.criteo.com/privacy/), effective
July 17, 2026, describes international recipients including the US. Fill the
empty country field with US and other countries. The notice describes Criteo
and advertiser/publisher roles but does not resolve the exact legal entity
for this entry; keep provider empty pending the applicable agreement/legal
notice. Its 13-month data-retention statement is not an exact cookie expiry:
do not manufacture uid or opt-out lifetimes from it. Empty cookies/storage
remain an incomplete inventory requiring a current OneTag trace. No guidance
or match changes.

## the-trade-desk

Outcome: **corrected**, version 1 → 2.

The [platform privacy notice](https://www.thetradedesk.com/legal/privacy)
confirms The UK Trade Desk Ltd. for EEA/UK/Swiss processing and transfers to
the US or other countries. Extend USA. It explicitly supports TDID at one
year, refreshed through encounters with the platform. It does not establish
TDCPM's current one-year lifetime; retain that field pending scoped evidence.
Existing Universal Pixel/conversion-event patterns remain distinct from any
site's optional identity integrations. No new guidance.

## openai-ads

Outcome: **corrected**, version 1 → 2.

The [European privacy notice](https://openai.com/policies/eu-privacy-policy/)
allows US and international processing. Extend USA accordingly. The
[current Ad Tools DPA](https://openai.com/policies/ad-tools-dpa/) confirms
OpenAI Ireland Limited processes EEA/Swiss data; add the canonical URL beside
the older redirecting conversion-DPA source. Controller/processor roles vary
by restricted-processing configuration and do not establish a site's legal
basis.

The [Measurement Pixel guide](https://developers.openai.com/ads/measurement-pixel)
confirms __oppref at 30 days and __obref at 365 days. Current
[SDK 0.1.100](https://bzrcdn.openai.com/sdk/oaiq.min.js) confirms
__oaiq_consent at 720 hours and the oaiq_consent local-storage key. Existing
names/lifetimes remain. Guidance explains consent initialization order and
non-replay of blocked events, without promising that a CookieHold install
issues the command. Automatic advanced matching and account-specific
settings still require deployment verification; a browser pixel inventory
does not cover server-side Conversions API delivery.
