# Social and media embeds review — 2026-11-06

Fourteen permanent IDs reviewed: nine corrected and five unresolved. Seven
services gain guidance, with nine notes about visibility, player settings,
source-content changes and regional-workspace limitations.

## Scope and consumer impact

Reviewed provider, purpose, privacy notices, processing regions, cookies,
storage, URL/inline detection, Consent Mode and WordPress hints. All IDs,
matching rules, cookies, storage patterns, categories, legal bases,
placeholders, Consent Mode flags and WordPress hints are unchanged. The
runtime corrections are processing-location summaries and joint controller
names for TikTok and Pinterest (the latter confirmed in the advertising review). No translated text changed. DPF parenthetical removal is
not a finding that certification ended.

The author-distributed main files identify Facebook Feed 4.15.1, WP Social
Ninja 4.4.0, Instagram Feed 6.15.1, Spotlight 1.8.1, Twitter Feed 2.11.1 and
TikTok Feed 1.9.1 at the catalog's existing plugin paths. Their filenames
remain detection hints. Reading these files does not test CookieHold
compatibility or establish that a plugin always loads the native vendor
embed; some plugins render cached content instead.

Several policies discuss both platform/account use and third-party embeds.
Do not import an entire platform cookie table into every embed. Empty arrays
are incomplete inventories, not promises of no storage or data exchange.
No third-party cookie database was used to establish corrections.

## facebook-embed

Outcome: **unresolved**, version 3 unchanged.

The [privacy notice](https://www.facebook.com/privacy/policy/) returned a
login/temporary-block page, and the official
[embedded-post guide](https://developers.facebook.com/docs/plugins/embedded-posts/)
returned 429. No attempt was made to bypass those responses. The author
[Facebook Feed entry file](https://plugins.svn.wordpress.org/custom-facebook-feed/trunk/custom-facebook-feed.php)
and [WP Social Ninja file](https://plugins.svn.wordpress.org/wp-social-reviews/trunk/wp-social-reviews.php)
confirm existing plugin identities only.

Unresolved: reread an accessible current Meta notice to verify the complete
processing footprint and provider, then inspect public post/video/page-box
variants for persistence. USA-only is not newly verified. Broad `fbcdn.net`
matching may cover media from more than one Meta feature; do not narrow it
without reviewing existing consumer expectations and cross-service precedence.
Keep localized SDK literals alongside the wildcard for older clients. No
new guidance from inaccessible documentation.

## instagram-embed

Outcome: **unresolved**, version 2 unchanged.

The [privacy notice](https://privacycenter.instagram.com/policy) and
[official oEmbed documentation](https://developers.facebook.com/docs/instagram-platform/oembed/)
were unavailable to this review. The current
[embed script](https://www.instagram.com/embed.js) was retrievable, and the
existing author-distributed plugin main files identify Instagram Feed,
Spotlight and WP Social Ninja. Those facts do not confirm the privacy
notice's current entity/locations or establish end-to-end plugin behavior.

Unresolved: verify public-content eligibility, author embed controls,
account-dependent cookies and processing locations from accessible current
vendor documentation. Inspect post, Reel and retained legacy TV variants
before changing broad path-prefix or CDN rules. Preserve the source data
and checked date; do not infer that a failed fetch means the service closed
or that an empty cookie list means no data collection. No new guidance.

## x-embed

Outcome: **corrected**, version 2 → 3, with unresolved findings.

The January 2026 [privacy policy](https://x.com/en/privacy), section 6.2,
describes international data centers, affiliates and providers. Correct
USA-only to USA and other countries; the European controller remains
X Internet Unlimited Company. [X for Websites](https://help.x.com/en/x-for-websites-ads-info-and-privacy)
explicitly describes receiving page URL, IP, browser and cookie information
from embeds. Its browsing-history retention statement is not a cookie
lifetime.

The [cookie table](https://help.x.com/en/rules-and-policies/x-cookies) lists
the existing names and says lifetimes are capped at 13 months in some areas,
but does not supply a default two-year lifetime for each listed cookie.
Unresolved: reconcile regional embed response headers with the catalog's
two-year values. The [widget script](https://platform.twitter.com/widgets.js)
confirms existing delivery hosts and parses `dnt`, but parsing a parameter
alone is insufficient proof of its current data-use effects. No privacy-mode
claim or speculative lifetime replacement is added.

## pinterest-embed

Outcome: **corrected**, version 2 → 3, with unresolved findings.

The [privacy policy](https://policy.pinterest.com/en/privacy-policy) describes
US and other-country transfers for data controlled by Pinterest Europe
Limited. Correct USA-only. This review uses the policy effective April 30,
2025, not the linked preview that takes effect on November 12, 2026.

The [current widget script](https://assets.pinterest.com/js/pinit_main.js)
supports the existing widget/log delivery paths. The
[cookie policy](https://policy.pinterest.com/en/cookies) and separate advertising
tag documentation must not be conflated with a scoped embedded-Pin inventory.
Unresolved: establish which identifiers are actually set in each Save-button,
board/profile and embedded-Pin variant, with and without a Pinterest session,
before adding names or lifetimes. No rule change or guidance that merely
repeats how to copy widget code.

## linkedin-embed

Outcome: **corrected**, version 1 → 2, with unresolved findings.

The [privacy policy](https://www.linkedin.com/legal/privacy-policy) explicitly
covers processing inside and outside the USA and retains the Irish
controller for designated European countries. Correct USA-only.

The [cookie table](https://www.linkedin.com/legal/l/cookie-table), including
its third-party-site section, supports the four existing names, purposes
and lifetimes. It says individual services use a subset; do not assign all
Insight Tag cookies to post embeds or profile badges. The `li_gc` entry
records guest choices, so its presence is not evidence of a tracking-only
cookie that can safely be erased in every context.

Unresolved: obtain current signed-in/out post, badge and platform-plugin
inventories before asserting completeness or adding shared authentication
cookies. Review cross-origin removal limitations separately from metadata.
Keep the existing three delivery patterns and no native Google Consent Mode
claim. No new guidance.

## reddit-embed

Outcome: **corrected**, version 1 → 2, with unresolved findings.

The [privacy policy](https://www.reddit.com/policies/privacy-policy),
International Data Transfers, describes US servers plus transfers to
other-country affiliates/providers. Correct USA-only. Retain the existing
European provider entry; its exact controller/representative role should be
reconciled with the applicable regional terms before generalizing it.

The [embed guide](https://support.reddithelp.com/hc/en-us/articles/360043033532-How-do-I-embed-a-Reddit-post-or-comment-in-an-article-or-other-publication)
supports the post/comment purpose and explains notices after source content
changes. Guidance captures that publishing caveat. The current
[widget script](https://embed.reddit.com/widgets.js) supports the embed host.
Unresolved: the embeds-terms URL was unavailable, and the loader alone does
not establish frame cookies/storage. Recheck the current terms and frame
responses before filling those arrays. Retain legacy URLs for installed
embeds; no inference of retirement from the fetch failure.

## tiktok-embed

Outcome: **corrected**, version 3 → 4, with unresolved findings.

The current [EEA privacy policy](https://www.tiktok.com/legal/page/eea/privacy-policy/en)
names TikTok Technology Limited and TikTok Information Technologies UK
Limited as joint controllers. Add the second entity. It lists US, Malaysian
and Singaporean storage but also remote access by corporate-group entities
elsewhere; qualify the location field accordingly.

The old cookie-policy URL redirects to the
[current cookies policy](https://www.tiktok.com/legal/page/global/tiktok-website-cookies-policy/en).
It gives `ttwid` one year under functionality/security and a maximum of
13 months under analytics. Unresolved: determine the applicable embed path,
purpose and response expiry before replacing the existing one-year value.

October 2026 [Embed Videos documentation](https://developers.tiktok.com/docs/en/embed-videos)
announces migration to the [Embed Player](https://developers.tiktok.com/docs/en/embed-player).
The existing `tiktok.com/player` match already covers it, so preserve all
legacy matches. Guidance explains the migration recommendation and the
related-video setting's limit. Player controls are not consent controls.

## discord-widget

Outcome: **corrected**, version 1 → 2, with unresolved findings.

The [privacy policy](https://discord.com/privacy) confirms Discord Netherlands
BV for EEA users and describes US and other-country storage/processing.
Correct USA-only. The [cookie policy](https://discord.com/terms/cookie-policy)
describes platform cookie functions without a complete widget-specific
inventory and lifetimes.

The [Guild API reference](https://docs.discord.com/developers/resources/guild)
documents the widget's invitation channel, accessible voice/stage channels,
online-member data and null/no-invite option. Guidance covers the invitation
choice. The API anonymizes particular ID/avatar fields; that is not a claim
that the entire widget is anonymous or contains no member information.
Unresolved: inspect actual enabled-widget responses and embedded assets to
establish persistence. Keep current and legacy widget paths; no extra
cookies or native Google Consent Mode flag.

## flickr

Outcome: **corrected**, version 1 → 2, with unresolved findings.

The [privacy policy](https://www.flickr.com/help/privacy) explicitly allows
processing on US or other-country servers and identifies Flickr, Inc.
Correct USA-only. The [cookie notice](https://www.flickr.com/help/cookies)
describes regional choices but does not provide a scoped embed inventory.

The current [client loader](https://embedr.flickr.com/assets/client-code.js)
and its follow-on loader still point to the catalog's `widgets.flickr.com`
asset path. Guidance distinguishes public-photo embeds from non-public
Guest Pass sharing using the [sharing guide](https://www.flickrhelp.com/hc/en-us/articles/4404078014356-Share-your-Flickr-content)
and [troubleshooting guide](https://www.flickrhelp.com/hc/en-us/articles/4404069932436-Troubleshoot-sharing-or-embedding-issues).
Unresolved: verify the fully rendered widget's cookies/storage and the
current regional preference behavior before expanding cleanup. Do not treat
the broad image CDN match as proof that all Flickr image uses run a widget.

## giphy

Outcome: **corrected**, version 2 → 3, with unresolved findings.

The [current published privacy policy](https://support.giphy.com/hc/en-us/articles/360032872931-GIPHY-Privacy-Policy)
identifies Giphy, Inc., US hosting and possible processing in other countries.
Correct USA-only. Its terms cover data received through third-party tools
and services; embedded GIF delivery is not a no-data-exchange exception.
The published policy is dated June 11, 2024; no later policy was substituted
from an unofficial source.

Unresolved: the broad service match includes static media as well as embeds.
Establish a current embed-specific cookie/storage inventory before adding
identifiers from GIPHY account or marketing pages. No claim that every GIF
request has identical behavior, and no speculative narrowing of a match
existing consumers may rely on. No new guidance.

## imgur

Outcome: **unresolved**, version 1 unchanged.

The [privacy notice](https://imgurinc.com/privacy) identifies Imgur, Inc.
and describes request logging, but does not establish a complete processing
location. A California contact address is not evidence of exclusive US
storage. Keep the empty location field.

The current [embed controller](https://s.imgur.com/min/embed-controller.js)
builds its frame request with the parent page URL in `ref`, including the
query string. The `analytics=false` branch still includes that value.
Guidance records this concrete limitation without claiming the switch
eliminates cookies or all analytics. Unresolved: inspect the actual frame's
analytics behavior, cookies and storage to establish a complete inventory.
The broad `imgur.com` pattern also matches image delivery; no narrowing or
new generic storage key is justified by this loader alone.

## strava

Outcome: **unresolved**, version 1 unchanged.

The [2026 privacy policy](https://www.strava.com/legal/privacy) supports the
Irish EEA provider and US transfers. It does not establish an exhaustive
processor/support footprint. The [cookie policy](https://www.strava.com/legal/cookie_policy)
links a dynamic Cookie Table control rather than exposing named lifetimes
in the fetched document. Unresolved: verify `_strava4_session` and current
embed storage against that table and actual signed-in/out responses before
changing the catalog's session lifetime. No use was made of the third-party
forum source to establish a new fact.

Guidance uses the updated [sharing guide](https://support.strava.com/en-us/articles/15402053-sharing-your-activities-and-routes-with-a-strava-embed)
for visibility differences and replacement of unsupported legacy activity
embeds. Keep legacy detection patterns: detecting installed old code is
still useful even when the vendor no longer renders it.

## ted

Outcome: **unresolved**, version 1 unchanged.

The [privacy policy](https://www.ted.com/about/our-organization/our-policies-terms/privacy-policy)
confirms use of Mixpanel among several vendors but does not establish a
complete processing-country list. Preserve the empty location field.
TED's current [oEmbed response](https://www.ted.com/services/v1/oembed.json?url=https://www.ted.com/talks/ken_robinson_do_schools_kill_creativity)
returns the existing `embed.ted.com` player URL and confirms the talk-embed
purpose. The fetched player itself did not expose its normal rendered data.

Unresolved: revalidate the existing exact Mixpanel storage key from a current
permitted player response before removing it or broadening its prefix. A
privacy-policy mention of Mixpanel does not prove that key or all player
storage. Keep the legacy embed host. The vendor's usage policy has
context-specific restrictions; no blanket right-to-republish or compliance
claim is added, and no guidance is invented from an unavailable player.

## loom

Outcome: **corrected**, version 1 → 2, with unresolved findings.

The [regional-hosting guide](https://support.atlassian.com/loom/docs/understand-loom-data-residency/)
describes German and US regional workspaces with global account/authentication
and limited telemetry processing. The [privacy policy](https://www.atlassian.com/legal/privacy-policy)
also describes global transfers. Replace the USA/Australia-only summary
with workspace-dependent US/Germany plus other countries.

Guidance explains new-workspace provisioning limits and distinguishes
[share-link visibility controls](https://support.atlassian.com/loom/docs/embed-your-video-into-a-webpage/)
from access permissions. The regional guide includes stale estimated dates
for some secondary features; no claim about those features' current rollout
is inferred. Unresolved: establish an embed-specific cookie/storage inventory
for legacy and regional workspaces, including restricted-video sign-in.
Keep the existing provider convention and delivery patterns; do not equate
regional content storage with exclusive in-region processing of every datum.

## Follow-up evidence

The [advertising review](2026-11-06-advertising-tags.md#pinterest-tag) confirms
Pinterest's joint controllers and adds Pinterest, Inc. to pinterest-embed
within the same revision. Its [Reddit review](2026-11-06-advertising-tags.md#reddit-pixel)
confirms Reddit Netherlands B.V. is the EEA/Swiss controller under the current
notice, resolving that specific role question without changing the embed
entry's existing provider. Other unresolved embed findings remain.
