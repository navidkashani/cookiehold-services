# Catalog facts identified during the guidance review

Reviewed 2026-11-06. The initial guidance work identified the findings below.
The subsequent [catalog pilot review](reviews/2026-11-06-pilot.md) applies the
Tag Manager purpose correction and adds primary Analytics evidence while
retaining its legacy detection. Remaining limitations are tracked there.
The new guidance is not evidence that CookieHold integrations were tested.

## Google Tag Manager: unconditional consent claim

Before the pilot, `services/google-tag-manager.json` said in `purpose`:
“each tag it loads waits for its own consent.” This is too broad as a statement
about the vendor. Google's [tag consent settings documentation](https://support.google.com/tagmanager/answer/10718549?hl=en)
explains that the default additional-check setting adds no checks, and that
built-in checks can adjust execution behavior. Google's
[Consent Mode overview](https://developers.google.com/tag-platform/security/concepts/consent-mode)
also documents cookieless measurements with denied consent in advanced mode.

Applied correction: shorten `purpose` to “Loads the site's other tags.” Keep
the configuration caveat in guidance, where its scope and evidence are clear.
The pilot removed the corresponding second sentences from existing
translations and raised the service version. If the old sentence was
intended to promise CookieHold behavior, establish that separately in the
website project using implementation evidence.

This evidence does not establish a replacement category or legal basis. Do
not infer either from whether the container itself sets cookies.

## Google Analytics: current versus legacy scope

`services/google-analytics.json` combines GA4 identifiers with legacy
`analytics.js`/`UA-` matches and `_gid`/`_gat*` cookie entries. Google's current
[GA4 cookie table](https://support.google.com/analytics/answer/11397207?hl=en)
lists `_ga` and `_ga_<container-id>` as GA4 cookies and explicitly distinguishes
Universal Analytics. Its former analytics.js cookie guide now redirects to
the [Universal Analytics retirement notice](https://developers.google.com/analytics/legacy/universal-analytics).

This is a scope ambiguity, not proof that every legacy detection rule should
be removed. The pilot added the current GA4 cookie documentation and Google's
official cookie CSV, which still lists the legacy names and their lifetimes.
Retain and distinguish legacy cookie metadata before presenting this record
as a GA4-only list. Preserve
the permanent id and assess detection compatibility before changing matches.
The current schema has no per-cookie product-version field; guidance should
not become a duplicate cookie table to work around that limitation.

Google also describes expiration settings as configurable defaults and notes
browser limits. Treat the current lifetimes as defaults when presenting them;
do not invent a single replacement lifetime for every installation. Reverify
any eventual runtime edits and increment the service version at that time.
