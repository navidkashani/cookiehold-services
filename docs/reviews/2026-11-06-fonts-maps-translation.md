# Fonts, maps and translation review: 2026-11-06

Twelve records reviewed: ten corrected and two unresolved without runtime
edits. Six services gain English guidance. No translations were changed.

## Scope and compatibility

All IDs, purposes, matching rules, cookies, storage keys, WordPress hints,
categories, legal bases, Consent Mode flags and placeholders are preserved.
The corrections concern documented geography, a product-specific privacy link
and supporting sources. These are not site-specific legal determinations.
An empty storage inventory is not a no-data-exchange guarantee. A font served
without cookies can still transmit request information, and self-hosting does
not necessarily remove a font licence's reporting requirement.

## google-fonts

Outcome: **corrected**, version 1 → 2; no unresolved correction identified.

The old developer FAQ redirects to the [current FAQ](https://fonts.google.com/faq).
The web text reader returned an empty page; the rendered official page was
read in the browser. It confirms the two service hosts, no API cookies and
request metadata received by Google. It also documents local font hosting,
with maintenance/optimization tradeoffs. The new guidance explains that
option without claiming automatic legal compliance.

[Google's policy](https://policies.google.com/privacy) describes servers
worldwide; replace the USA-only location with `Worldwide`. Add the canonical
FAQ to sources. The existing provider and privacy URL remain. Do not add
Google account cookies to this unauthenticated font API's inventory.

## adobe-fonts

Outcome: **corrected**, version 1 → 2; no unresolved correction identified.

Use the [Fonts privacy notice](https://www.adobe.com/privacy/policies/adobe-fonts.html)
as the privacy URL. It supplements the general policy, distinguishes Adobe's
own website from font delivery, and states that delivery does not set/use
cookies. It describes font/project reporting and receipt, but not storage,
of the visitor's IP address.

[Web-font licensing documentation](https://helpx.adobe.com/fonts/web/font-licensing/webfont-licensing.html)
describes global CDN delivery. The [general policy](https://www.adobe.com/privacy/policy.html)
names the USA/India and other operating countries. Replace USA-only with
`Worldwide CDN; USA, India and other countries for processing`.
The new note explains Adobe's hosted licence and the separate licence needed
for self-hosting; it is scoped to Adobe Fonts, not every font from a foundry.

[Embed-code](https://helpx.adobe.com/fonts/web/web-design-and-development/embed-codes.html)
and [CSP documentation](https://helpx.adobe.com/fonts/web/web-design-and-development/content-security-policy.html)
support the existing Typekit host/initialization hints. Both WordPress entry
files exist; their presence does not establish a valid project/subscription.

## bunny-fonts

Outcome: **corrected**, version 1 → 2, with unresolved findings.

The [about page](https://fonts.bunny.net/about) identifies BunnyWay d.o.o.
and global CDN delivery. Its [FAQ](https://fonts.bunny.net/faq) describes
no visitor-data logging and periodically updated fonts. The
[privacy policy](https://bunny.net/privacy/) gives the company's Slovenian
address; an address alone does not establish that font processing takes
place there. The [published plugin readme](https://plugins.svn.wordpress.org/bunnycdn/tags/3.1.1/readme.txt)
describes EU font hosting. Use `EU hosting; delivery through a global CDN`,
removing the unconfirmed Slovenia-specific processing claim.

Unresolved: obtain a font-service-specific origin/edge processing statement
before naming individual processing countries. Do not repeat the vendor's
blanket compliance language. The trunk entry URL returned 404, but the
existing 3.1.1 tag contains the plugin entry and Fonts feature; retain the
hint. A missing trunk fetch is not proof that the plugin or service closed.
No extra guidance needed.

## font-awesome

Outcome: **corrected**, version 1 → 2, with unresolved findings.

The [privacy policy](https://fontawesome.com/privacy) was read in the browser
after the text fetch failed. It identifies Fonticons, Inc. and distinguishes
USA central storage from CDN servers that store use data worldwide. Change
the location to `USA; CDN servers worldwide`.

The official [cookie information](https://raw.githubusercontent.com/FortAwesome/Security-Docs-and-Attestation/main/Font_Awesome_Cookie_Info.md)
is largely about fontawesome.com and its embedded third-party services.
Do not copy its analytics/payment cookies into icon delivery. The official
WordPress entry file exists and remains a hint.

Unresolved: reconcile the different kit/CDN generations and their persistence
against delivered bundles before calling the empty lists exhaustive. The
existing self-hosting documentation URL returned 404 in this review; this
does not justify removing historical delivery hosts or inventing replacement
endpoints. Retain recognition pending version-specific fixtures. No new note.

## myfonts

Outcome: **unresolved**, version 1 and checked date retained.

The [web-font tracking policy](https://www.monotype.com/legal/privacy-policy/web-font-tracking-privacy-policy)
supports Monotype Imaging Holdings Inc., page-view reporting and no cookies
for that reporting. It distinguishes transfer of IP addresses to its service
provider from retention of font-project reporting data.

[Hosting/reporting documentation](https://support.monotype.com/en/articles/7859123-hosting-web-fonts-and-reporting)
confirms that a self-hosting kit can include a tracking stylesheet. Guidance
therefore warns against assuming that local font files remove every remote
request. The guidance does not impose one subscription's reporting mechanism
on every independently purchased MyFonts licence.

Unresolved: the policy gives a US corporate address, not a complete processing
location statement for the reporting provider. Obtain vendor geography before
changing the existing USA value. Reconcile legacy hello.myfonts.net and newer
cdn.fonts.net kits against vendor-issued examples; third-party sample sites
in the existing sources are not treated as official vendor proof. No detection
change is made from the general hosting page alone.

## google-maps

Outcome: **corrected**, version 2 → 3, with unresolved findings.

[Google's policy](https://policies.google.com/privacy) supports `Worldwide`
in place of the USA-only location. The [Embed API guide](https://developers.google.com/maps/documentation/embed/get-started)
confirms the embedded-map purpose and Google-hosted embed path.
The [cookie explanation](https://policies.google.com/technologies/cookies)
supports NID's preference role and six-month duration from last use.

Unresolved: the policy does not establish NID's HttpOnly flag or guarantee that
every map variant sets it. Keep the existing cookie entry pending response
evidence rather than attributing every Google cookie to Maps. Consumer
embeds and Maps Platform contracts can involve different entities; reconcile
the [Cloud entity table](https://cloud.google.com/terms/google-entity) with
the specific integration before replacing Google Ireland Limited globally.
The two plugin entry files exist. Recheck the legacy canvas handles across
current WP Go Maps bundles before changing their dependency behavior. No
generic setup note adds enough beyond existing map information here.

## mapbox

Outcome: **corrected**, version 1 → 2, with unresolved findings.

The [privacy policy's infrastructure FAQ](https://www.mapbox.com/legal/privacy)
states that source data is in a US AWS region, with delivery caches elsewhere
and access by staff in their working countries. Use
`USA; CDN delivery and staff access in other countries`. A US source region
is not an exclusively US processing guarantee.

The [GL JS example](https://docs.mapbox.com/mapbox-gl-js/example/simple-map/)
supports the map host and initialization hints. Current
[telemetry source](https://raw.githubusercontent.com/mapbox/mapbox-gl-js/main/src/util/mapbox.ts)
builds local-storage names under `mapbox.eventData`, including UUID and
timestamp suffixes; the existing trailing wildcard already covers these.
No duplicate keys are added. [Token management](https://docs.mapbox.com/accounts/guides/tokens/)
supports guidance about a dedicated public token and URL restrictions.

Unresolved: account and SDK options differ; evaluate custom API URLs, workers
and bundled initialization with fixtures before broadening detection. No
claim is made that these matches cover every Mapbox-derived map or that
CookieHold configures tokens/telemetry.

## openstreetmap

Outcome: **corrected**, version 3 → 4, with unresolved findings.

The [privacy policy](https://osmfoundation.org/wiki/Privacy_Policy) explicitly
separates UK/Netherlands storage, EU backups and worldwide tile caches.
Use `UK and EU (Netherlands); global tile cache network`. Retain the Foundation
as provider and the existing privacy URL. The
[tile policy](https://operations.osmfoundation.org/policies/tiles/) confirms
the standard tile endpoint and supports guidance about attribution, caching
and prohibited bulk/offline downloads.

Unresolved: the project policy describes cookies for its broader websites
but does not give an embed-specific identifier table. Do not copy login
cookies into anonymous tile delivery. The four plugin entries exist, but
Leaflet-based software can use other tile providers: installation is not proof
of an OpenStreetMap Foundation connection. Keep provider selection and custom
tile-server configurations outside any compatibility claim.

## komoot

Outcome: **corrected**, version 1 → 2, with unresolved findings.

The [privacy policy](https://www.komoot.com/privacy) identifies komoot GmbH
and explicitly permits processing/transfers outside the EEA. Change EU-only
to `EEA and other countries`. The [embed generator](https://www.komoot.com/b2b/embed)
confirms tour embeds on the existing komoot.com host.

Unresolved: the policy inventories cookies and SDKs for the wider website/app,
not a reconciled browser-cookie table for each embedded layout. Obtain embed
response/storage evidence before adding names or durations. The broad host
patterns also cover non-map resources; narrowing them requires legacy/current
embed fixtures. No blanket cookieless or compatibility claim, and no new note.

## google-translate

Outcome: **corrected**, version 1 → 2, with unresolved findings.

[Google's policy](https://policies.google.com/privacy) supports `Worldwide`
instead of USA-only. The currently delivered
[loader](https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit)
still references the existing delivery hosts. Its
[current main bundle](https://translate.googleapis.com/_/translate_http/_/js/k=translate_http.tr.ru.lI9wywkUXlg.O/am=AAAAAw/d=1/ed=1/rs=AN8SPfrQdr5jfiJAcltaijF2t321PCuQAg/m=el_main)
reads/writes both listed cookies. The normal setter omits an expiry while its
deletion path expires immediately, supporting the existing session durations.
The Google Website Translator plugin entry exists.

Unresolved: the [2020 Google announcement](https://developers.google.com/search/blog/2020/05/google-translates-website-translator)
is historical availability guidance. GTranslate's current documentation
reports an October 2026 end of support for the old widget, while Google's
script still responds. A fetched script does not prove ongoing support, and
another vendor's announcement does not alone justify marking the Google
service retired. Obtain Google's current lifecycle notice and distinguish
the old widget from the translation API used by other integrations. No
retirement, replacement ID or blanket availability advice is invented.

## gtranslate

Outcome: **unresolved**, version 1 and checked date retained.

The [privacy policy](https://gtranslate.io/privacy-policy) confirms GTranslate
Inc. and USA/EU systems but is framed around its website/software scope.
The [current plugin documentation](https://wordpress.org/plugins/gtranslate/)
separates widget delivery, browser-to-Google translation and paid proxy
configurations. The new guidance explains these data flows.

The [plugin's base script](https://plugins.svn.wordpress.org/gtranslate/trunk/js/base.js)
reads `__GT_TRANSLATE_LANGS` and reads/writes `gt_autoswitch`, confirming the
existing storage hints. Both WordPress entry files exist. Google request
hosts are already cataloged under google-translate; do not duplicate them or
infer a new dependency mechanism in this data repository.

Unresolved: the remote widget bundles returned 403 to this reader; the plugin
source does not establish the complete persistence inventory of every
remotely loaded bundle. Reconcile the 5.x widget, older releases and proxy
mode, including processing geography, before declaring all facts verified.
The old Google-widget lifecycle claim needs direct Google evidence as above.

## gravatar

Outcome: **corrected**, version 3 → 4, with unresolved findings.

Gravatar's [data-privacy FAQ](https://support.gravatar.com/privacy-and-security/data-privacy/)
explicitly points to [Automattic's general policy](https://automattic.com/privacy/),
so retain that privacy URL rather than mechanically replacing it with the
visitor notice used for some other Automattic services. The policy identifies
the European entity and international access; change the USA-only location to
`USA and other countries`.

The FAQ supports the avatar/email-hash purpose, while the
[privacy pledge](https://support.gravatar.com/privacy-pledge/) distinguishes
minimal operational logging from tracking claims. The published
[hovercard module](https://plugins.svn.wordpress.org/gravatar-enhanced/trunk/classes/hovercards/class-hovercards.php)
and [comment module](https://plugins.svn.wordpress.org/gravatar-enhanced/trunk/classes/comments/class-comments.php)
confirm both existing handles.

Unresolved: examine image-only, hovercard and optional proxy modes separately
before treating the empty persistence inventory as exhaustive. A public email
hash is not evidence of anonymous use. The plugin's optional modules do not
establish tested CookieHold compatibility. No extra guidance needed.

## WordPress evidence

Entry files were read; reported versions below are source observations, not
installation or compatibility tests. Bunny's existing tagged source was used
after the trunk entry returned 404.

| Entry file | Reported version |
|---|---|
| [custom-typekit-fonts/custom-typekit-fonts.php](https://plugins.svn.wordpress.org/custom-typekit-fonts/trunk/custom-typekit-fonts.php) | 2.1.2 |
| [typekit-fonts-for-wordpress/typekit.php](https://plugins.svn.wordpress.org/typekit-fonts-for-wordpress/trunk/typekit.php) | 1.10.1 |
| [bunnycdn/bunnycdn.php](https://plugins.svn.wordpress.org/bunnycdn/tags/3.1.1/bunnycdn.php) | 3.1.1 |
| [font-awesome/index.php](https://plugins.svn.wordpress.org/font-awesome/trunk/index.php) | 5.2.1 |
| [agile-store-locator/agile-store-locator.php](https://plugins.svn.wordpress.org/agile-store-locator/trunk/agile-store-locator.php) | Entry file confirmed |
| [wp-store-locator/wp-store-locator.php](https://plugins.svn.wordpress.org/wp-store-locator/trunk/wp-store-locator.php) | 3.1.1 |
| [leaflet-map/leaflet-map.php](https://plugins.svn.wordpress.org/leaflet-map/trunk/leaflet-map.php) | 3.4.7 |
| [leaflet-maps-marker/leaflet-maps-marker.php](https://plugins.svn.wordpress.org/leaflet-maps-marker/trunk/leaflet-maps-marker.php) | 3.12.10 |
| [acf-openstreetmap-field/index.php](https://plugins.svn.wordpress.org/acf-openstreetmap-field/trunk/index.php) | 1.6.1 |
| [google-website-translator/google-website-translator.php](https://plugins.svn.wordpress.org/google-website-translator/trunk/google-website-translator.php) | 1.4.15 |
| [gtranslate/gtranslate.php](https://plugins.svn.wordpress.org/gtranslate/trunk/gtranslate.php) | 5.0.2 |
| [google-language-translator/google-language-translator.php](https://plugins.svn.wordpress.org/google-language-translator/trunk/google-language-translator.php) | 7.0.2 |
| [gravatar-enhanced/gravatar-enhanced.php](https://plugins.svn.wordpress.org/gravatar-enhanced/trunk/gravatar-enhanced.php) | 0.15.0 |

## Validation

Formatting, schema/content validation, all 32 tests, build and whitespace
checks pass. The ledger matches all 210 permanent IDs: 71 reviewed and 139
pending. Reviewed versions, report anchors and dates match source records;
unchanged records retain their previous checked dates.

Guidance contains 43 notes for 34 services. Its separate artifact remains
outside the plugin manifest, whose file inventory is unchanged. Release
configuration and publishing workflow are unchanged. No release was published.
