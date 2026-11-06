# Remaining integrations: booking, affiliates, reviews and visitor tracking

Reviewed on 2026-11-06 against official documentation and public vendor scripts.
These are evidence-based review outcomes, not tested WordPress compatibility
or a complete browser/network audit of every account configuration. Runtime
category, legal basis, Consent Mode, placeholder and matching fields stay
unchanged in this batch. WordPress entries remain detection hints.

Seven service entries receive supported location/storage corrections and one
version increment; eight optional English guidance entries are added. Other
entries keep their prior checked dates. Every entry has a remaining scope,
evidence or inventory question, recorded below. Empty cookie/storage lists
must not be presented as proof of absence. No translations were generated.

## Evidence and proposed follow-ups

### awin

The [attribution cookie list](https://privacy.awin.com/) confirms the three advertiser-prefixed cookies, AWSESS, the variable view-through window, and xd_hash session storage. It gives an upper bound of one year for plugin cookies, whereas the entry's adv_awc is specifically 30 days. This is not sufficient to overwrite a plugin-specific default. Resolve that distinction against the current WooCommerce implementation and its configured attribution window. Provider and processing-country fields remain empty pending the applicable advertiser contract; the group's general website notice does not identify every contracting entity. Added guidance on the [consent signal's defaults, exceptions and plugin scope](https://help.awin.com/developers/docs/implementing-awin-consent).

### booking-com

The [published affiliate SDK](https://wasabi.bstatic.com/sdk/3.6.1/sdk.bundle.js) remains available and supports the narrow affiliate embedding scope. The [privacy notice](https://www.booking.com/content/privacy.html) describes international transfers, but does not provide an affiliate-widget-specific cookie inventory or a precise processing-location list. Leave the empty storage and country fields unresolved; obtain the affiliate product's current data-flow documentation and inspect the iframe as well as its loader. Do not copy booking-account cookies into the affiliate widget solely because both use Booking.com. No additional guidance.

### bookingkit

The [privacy statement](https://bookingkit.com/privacy-statement/) names bookingkit GmbH, describes transfers outside the EU in section 8 and lists processors including US providers. Filled the empty dataCountry with EU and other countries, including USA; this is not a statement that every processor handles every booking. The [current widget bundle](https://v3.widget.bookingkit.com/bookingkitWidgetElements.js) contains storage and cookie machinery, but a bundle includes optional modules: it does not establish that every identifier is used in every installation. BkOpSession's one-day duration and the legacy storage inventory still need a widget-version-specific check. Added support-controlled optional-tracking guidance from the [cookie-settings article](https://help.bookingkit.com/en/articles/5649665-bookingkit-and-cookie-settings).

### eventfrog

The [embed loader](https://embed.eventfrog.ch/js/relaunch/embed/embed.js) remains available; it reads EVENTFROG-LOG-ACTIVATED as a diagnostic switch. A read does not prove the service writes that key, so it was not added to storage. The [privacy notice](https://eventfrog.ch/de/datenschutzerklaerung.html) and [integration guide](https://eventfrog.ch/en/help/organizer/sell/embed/iframe.html) remain the relevant sources. The loader alone cannot reconfirm the tracking cookies' six-month duration or all checkout storage; inspect its child frame and the consent-dependent checkout flow before changing those facts. No new runtime facts or guidance.

### eversports

The [processor list](https://www.eversportsmanager.com/data-processors) distinguishes company country from data country: AWS hosting is Germany, while multiple other products process in the US and elsewhere. Expanded the Germany-only dataCountry accordingly. The [retirement notice](https://helpcenter.eversportsmanager.com/-old-widget-is-being-discontinued-what-you-need-to-do) documents the May 31, 2026 cutoff and redirects from legacy booking links; added practical migration guidance. Keep legacy matching because installed old code remains detectable. The main privacy page returned 403 in the direct fetch; et-legacy's one-month duration and the new widgets' full storage inventory remain unresolved pending a successful current technical-notes/embedded-frame review.

### firstpromoter

The [linked legal notice](https://www.iubenda.com/privacy-policy/45807771/legal) identifies Igil Webs SRL. The [fpr.js implementation](https://cdn.firstpromoter.com/fpr.js) uses 86,400 minutes (60 days) as the referral default and 1,440 minutes (one day) for details, with a server-provided cookie_life override. This supports the existing default qualifier rather than a universal duration. The fallback and additional event-cookie names are not established by this loader; inspect the proxy integration and other distributed script before removing or changing them. Country coverage also needs processing-specific evidence beyond the website's vendor list. No new guidance.

### found-ee

The [pixel implementation](https://found.ee/dmp/pixel.js) contradicts any interpretation of the empty cookie list as no cookies: it writes uid with a requested 1,051,200-minute expiry (730 days), cookieAcceptance for 43,200 minutes (30 days), and configured modal frequency cookies. It also reads foundeeDNT and Global Privacy Control. Proposed additions require care: uid and cookieAcceptance are generic names, and modal identifiers require a narrow matching design. Record these as a catalog gap rather than silently adding a broad cleanup rule. The [privacy route](https://console.found.ee/super/usersgdpr) returned an application shell, so provider and processing locations remain unresolved. Obtain the rendered legal notice and review generic-name collision risks before the correction. No guidance added.

### fraud-blocker

The [current tracker](https://monitor.fraudblocker.com/fbt.js) includes browser fingerprinting and persistence-related code; a cookieless label would not mean no browser access or data exchange. The [privacy notice](https://fraudblocker.com/privacy) identifies Fraud Blocker LLC but contains an incomplete international-transfer statement using “none”. The US business address is not sufficient proof of US-only processing. Retain the location pending a corrected vendor notice or processor list, and verify fbt_session_id in the active tracking path. Do not import the vendor's blanket compliance language. No runtime edits or new guidance.

### getyourguide

The [partner analytics script](https://widget.getyourguide.com/dist/pa.umd.production.min.js) still contains gyg_visitor_id and browser-storage access. The main [privacy URL](https://www.getyourguide.com/c/privacy-policy/) returned 403 in the direct fetch. The existing EU/US remote-maintenance statement cannot be freshly confirmed from that response. Keep it flagged for a readable current notice and recheck the widget iframe separately; a loader's storage does not exhaust the booking flow. No correction based on a failed fetch and no filler guidance.

### kliken

The [current DPA](https://www.kliken.com/dpa.html), effective March 11, 2026 for existing customers, identifies Sitewit Corp and explicitly permits processing in the US and other jurisdictions where subprocessors operate. Expanded USA-only dataCountry. The [analytics script](https://analytics.sitewit.com/v3/1/sw.js) supports the listed identifiers and the 1,000/90-day cookie fallback values; it can use browser storage instead, and the noms option changes the persistence path. It also contains a site-specific _swa_su identifier and an ls-canary storage probe. Those additional names and optional configuration paths need collision/scope review before broadening the inventory. No separate guidance.

### klook

The [affiliate frontend](https://cdn.klook.com/s/dist_web/klook-affiliate-front/static/web/assets/index.41d9fef7.js) and [policy route](https://www.klook.com/policy/) were investigated. The policy route exposed only an application shell, and the policy API was not accessible through web retrieval. This is insufficient evidence to fill dataCountry or claim no cookies/storage from the empty lists. Obtain the rendered affiliate terms/privacy statement and inspect the actual widget, not only the affiliate dashboard bundle. Existing provider and detection hints retained; no guidance.

### leadfeeder

The [current processing-roles article](https://help.leadfeeder.com/en/articles/13922333-web-visitors-tracking-script-data-processing-roles) confirms the one- and two-year cookie values and calls the test cookie immediately expiring; the catalog says one second. Resolve that small timing discrepancy against the live writer before changing a concrete duration. The [privacy notice](https://www.leadfeeder.com/privacy/privacy-notice/) refers to the Leadfeeder group and international transfers; the [FAQ](https://help.leadfeeder.com/en/articles/13922307-frequently-asked-questions-about-the-web-visitors-tracking-script) separately describes worldwide CDN delivery. The existing Dealfront Group GmbH / Ireland fields need reconciliation with the current customer DPA and product hosting terms, not a guessed replacement entity. Added [cookie-control scope guidance](https://help.leadfeeder.com/en/articles/13922292-configuring-the-web-visitors-tracking-script-with-your-consent-management-platform-cmp).

### momoyoga

The [schedule loader](https://cdn.momo.yoga/plugins/schedule-integration/schedule.js) and [privacy notice](https://www.momoyoga.com/en/privacy) were inspected. A Dutch company address does not establish the empty processing-country field. The lightweight schedule integration is not evidence that booking, account and payment destinations use no storage. Keep the location and end-to-end storage coverage unresolved until product-specific hosting information and the linked booking flow are checked. Existing WordPress entry stays a detection hint. No guidance beyond the already described scheduling purpose.

### opentable

The [reservation loader](https://www.opentable.com/widget/reservation/loader?rid=1&type=standard&theme=standard&iframe=true&domain=com&lang=en-US&newtab=false&ot_source=Restaurant%20website) was inspected, but ot_widget_dtp_values was not present in that loader. Its absence there is not proof of removal: the frame and subsequent bundles must be inspected. The [privacy page](https://www.opentable.com/c/legal/privacy-policy/) could not be retrieved in the direct fetch. Keep the session cookie and provider/US location statements flagged for confirmation from the current regional notice and complete widget flow. No automatic replacement with a US entity based on the .com hostname.

### outbrain

The [current user notice](https://www.outbrain.com/privacy/) confirms Outbrain UK Limited as UK/European controller and identifies Teads Holding Co. as the renamed parent. The [cookie table](https://www.outbrain.com/privacy/cookies/) still gives 90 days for obuid and auid and seven days for dicbo_id. Keep the permanent Outbrain ID and legacy matching; the rebrand does not invalidate existing technology. The table also lists opout (five years) and ref-{} (one minute), which are absent here. Assess their installed scope and a sufficiently narrow ref pattern before adding them. The location statement names the three existing countries but also worldwide cloud processing, so the catalog's list is not exhaustive. These gaps prevent a fully verified outcome; no speculative changes or guidance.

### phorest

The [booking setup guide](https://support.phorest.com/hc/en-us/articles/360016246960-How-do-I-set-up-Online-Booking-on-my-website) confirms OBWidget and the distributed [booking loader](https://booking-widget.phorestcdn.com/obwidget.bundle.js). Added guidance about mobile navigation and the direct-link alternative. The [privacy notice](https://www.phorest.com/privacy/) distinguishes controller and processor roles but its Dublin contact address does not independently establish EU-only processing of every booking. Retain that field as unresolved until current hosting/processor terms are available; empty cookie/storage arrays are not an absence claim for the child booking application.

### planity

The [privacy route](https://www.planity.com/politique-de-confidentialite) exposes its policy through an external document rather than readable page text. The [white-label documentation](https://planity.gitbook.io/white-label) and catalog sources identify the integration separately from the booking platform. EU-only processing and the empty persistence inventory still require the effective hosted policy document plus an active widget inspection. Do not infer region from the French entity or import dashboard cookies into the white-label widget. No runtime edits or guidance.

### provenexpert

The [privacy policy](https://www.provenexpert.com/en-us/privacy-policy/) names Expert Systems AG and expressly reserves transfers outside the EU/EEA. Filled the country field with EU and possible outside-EU/EEA transfers, without inventing destination countries. The [seal script](https://s.provenexpert.net/seals/proseal-v2.js) confirms PE_PRO_SEAL_CACHE. The website policy covers several products; per-seal requests, iframe cookies and optional tracking still need a configured runtime inspection. No new guidance merely repeating the existing review-display purpose.

### salesviewer

The [product data-protection page](https://www.salesviewer.com/en/platform/data-protection/) states European data centers and cookieless tracking. It does not by itself justify narrowing the entire product to Germany; the [website privacy notice](https://www.salesviewer.com/en/privacy-policy/) also describes tools on SalesViewer's own site, which must not be attributed to customer installs. Proposed correction is to broaden the Germany claim if the customer hosting terms confirm only Europe. Leave it unresolved until those terms are checked. Do not reproduce certification badges or worldwide-compliance claims. No guidance based on those legal marketing claims.

### senja

The [privacy policy](https://senja.io/legal/privacy-policy) confirms Senja Proof Ltd and describes service-provider processing. The [platform loader](https://static.senja.io/dist/platform.js) alone did not expose sj_v_id; that does not disprove the identifier in the actual widget bundle/configuration. UK/US scope and the identifier remain subject to a widget-specific verification. Added a useful [image-export alternative](https://support.senja.io/how-to-share-or-embed-my-widget-in1cl), including its manual-update limitation, without claiming that a hosted link or image removes all website data exchange.

### stay22

The [privacy notice](https://www.stay22.com/privacy) supports the existing Canada plus US/Europe provider qualification. The [LetMeAllez script](https://scripts.stay22.com/letmeallez.js) contains sid22, hip22 and scrollPort22, but does not alone confirm session22 or visitor_id_id22 in the map integration. Keep their existing values unresolved pending the separate map frame and [cookie information](https://www.stay22.com/cookies). Do not delete map-specific identifiers because they are absent from the affiliate-link loader. No guidance added without a sufficiently verified additional setup decision.

### taboola

The [October 7, 2026 cookie policy](https://policies.taboola.com/cookie-policy/) confirms all five existing cookie lifetimes in its service tables. Added the explicitly named local-storage keys _taboolaStorageDetection (a transient capability probe) and tbl_rtus_id. Release review deferred global:last-external-referrer because its generic name needs attribution/collision review before consumers use it to identify or clear storage. Two additional names containing spaces are not representable by the current storage grammar; do not silently normalize them into different keys. That inventory gap remains unresolved pending evidence of actual key spelling and a separately reviewed schema/consumer change. The [privacy policy](https://policies.taboola.com/privacy-policy/) distinguishes Israel/US storage from processing flows also involving the EU, UK, Singapore and Japan; updated dataCountry to preserve that distinction. No new guidance duplicating these facts.

### tradetracker

The [privacy policy](https://tradetracker.com/privacy-policy/) confirms TradeTracker International B.V. and servers in Ireland, but explicitly says partners may transfer personal data outside the EU. Expanded dataCountry with that qualification. The existing tracking cookies span multiple redirect and conversion implementations; a policy-level retention period cannot validate each cookie TTL. Those configured values remain unresolved until compared against the [implementation downloads](https://sc.tradetracker.net/implementation/overview) and a current deployment. No matching or WordPress changes; no filler guidance.

### trusted-shops

The [consent integration guide](https://help.etrusted.com/hc/en-gb/articles/23970835518354-How-do-I-integrate-the-Trustbadge-into-my-Consent-Manager) explicitly distinguishes automatic order transmission from a customer-initiated Trustcard transfer. Added a caveat about that distinction and the vendor-side enabling step. The [widget loader](https://integrations.etrusted.com/applications/widget.js/v2) is not the complete Trustbadge implementation: the 400-day token lifetimes and wildcard storage still need confirmation in the generated badge and [cookie guideline](https://help.etrusted.com/hc/en-gb/articles/28996215262226-Data-protection-guideline-Information-about-cookies). Preserve existing facts as unresolved rather than treating the vendor's legal opinion as a guarantee.

### trustindex

The [August 31, 2026 privacy policy](https://www.trustindex.io/privacy-policy/) confirms Trustindex Ltd and discusses international transfers. The [distributed loader](https://cdn.trustindex.io/loader.js) still contains ti-cdn-url and ti-widget-closed- persistence paths. The policy does not pin all embedded-widget processing to just EU/US, and storage use varies by widget. Verify the current DPA/subprocessors and widget configuration before replacing the existing location summary. Retain plugin detection hints without compatibility claims; no new guidance.

### trustpilot

The [reviewer privacy notice](https://corporate.trustpilot.com/legal/for-reviewers/privacy-policy-end-user/jun-2026) explains processing roles, while the [processor list](https://corporate.trustpilot.com/legal/for-businesses/subprocessors/may-2026) includes entities in the UK and Australia as well as the EU and US. This conflicts with reading the existing EU/US summary as exhaustive, but provider office locations are not sufficient to assert that each TrustBox is processed in all listed places. Obtain the applicable TrustBox data-flow terms before broadening it. The FAQ returned a loading/error shell and the direct bootstrap retrieval encountered compressed content, so trustBoxSettings and child-frame persistence remain unresolved. No guidance invented from those failures.

### trustpilot-invitations

Reviewed separately from the display widget: the [reviewer privacy notice](https://corporate.trustpilot.com/legal/for-reviewers/privacy-policy-end-user/jun-2026) describes the business's invitation processing, and the [processor list](https://corporate.trustpilot.com/legal/for-businesses/subprocessors/may-2026) raises the same EU/US-only coverage question as TrustBox. The fixed January 2038 TP.uuid expiry and tpinvid must be reconfirmed in the current invitation script, not inferred from the display-widget FAQ or a generic review-cookie table. Leave this entry unresolved and retain the separate invitation ID/category/matching. No guidance or automatic merge with trustpilot.

### vega

The [current embed.js](https://app.vega.company/embed.js) contains all listed persistence-name families, including legacy pa/lc names and newer vpid/vpdt/__vega names. This supports keeping legacy hints rather than deleting them after a product rename. The [privacy notice](https://vega.company/en/datenschutz.html) gives PATHADVICE International GmbH's address but does not establish a complete chat/AI processing geography. Leave dataCountry empty; obtain the product DPA and provider list. The pa_bsid duration still needs a full writer-path check rather than inferring expiry from the cookie utility's capability. No new guidance.

### visitortracking

The [tracker source](https://app.visitortracking.com/assets/js/tracer.js) confirms all five listed keys and additionally writes inactiveTime and lastActiveTime. Proposed additions are recorded here for collision review because those names are generic. The [product FAQ](https://visitortracking.com/) supports company identification but also describes wider analytics; the short existing purpose is not a complete feature list. The [privacy notice](https://visitortracking.com/privacy-policy/) discusses international transfers without clearly naming a contracting legal entity or processing countries. Do not turn its investor/backer into the provider or invent a country. Provider/country gaps and storage completeness remain unresolved; no guidance added.

### wlw

The [Visable privacy notice](https://www.visable.com/en_int/data-privacy) covers Visable's own website and several third-party tools. Its AWS/US discussion cannot safely be assigned wholesale to the customer-installed Website Leads script. The [Website Leads privacy-integration page](https://hilfe.wlw.de/en/anbieter/adapt-privacy-statement) was inaccessible through web retrieval. Obtain that product-specific statement and inspect the current opt-out writer before filling dataCountry or reconfirming the ten-year VISABLELEADS_DONT_TRACK value. Existing purpose, provider and narrow hostname retained as unresolved; no guidance.

### xing

The [October 1, 2026 privacy policy](https://privacy.xing.com/en/privacy-policy/printable-version) confirms XING SE & Co. KG and possible processing outside the EU through third-party providers. Filled dataCountry with that qualified scope, without naming unverified destinations. The [share documentation](https://dev.xing.com/plugins/share_button/docs) and [loader](https://www.xing-share.com/plugins/share.js) support the existing share-specific paths. Added guidance to load the library once for multiple buttons. The empty persistence inventory still requires checking the authenticated sharing popup; do not confuse it with no data exchange or import the separate login plugin's behavior.
