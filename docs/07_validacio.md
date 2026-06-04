# 07 — Validáció

A környezet által engedett ellenőrzések. Helyi szerver: `python3 -m http.server 8088` a
`barnahus_refaktor/` gyökeréből. Böngészős ellenőrzés: headless Google Chrome (screenshot +
reszponzív méretek).

---

## 1. Mit ellenőriztem és mi az eredmény

| Ellenőrzés | Eredmény |
|---|---|
| **Belső linkek + asset-útvonalak** (7 HTML, minden `href`/`src`) | ✅ Nincs hiányzó cél. Minden hivatkozott fájl létezik. |
| **Külső / CDN hivatkozás** a HTML-ben és CSS-ben | ✅ Nincs. Se CDN, se hotlink, se googleapis/bootstrapcdn/fontawesome. |
| **Abszolút helyi útvonal / `file://`** | ✅ Nincs. Minden relatív (`assets/…`, `../assets/…`). |
| **HTTP elérés** (szerverrel) | ✅ `index.html`, `blog/kepbol-html-minta.html`, CSS → HTTP 200. |
| **Heading-hierarchia** | ✅ Oldalanként pontosan **1 db `<h1>`**; alatta h2/h3 logikus sorrend. |
| **Azonos oldali horgonyok** (`#kapcsolat`, `#tamogatas`, `#szolgaltatasok`, `#main`) | ✅ Minden horgonyhoz létezik `id`. |
| **Reszponzív (390 px mobil)** | ✅ Nincs vízszintes görgetés; fejléc hamburgerre vált, hero/kártyák/pillérek egymás alá rendeződnek. |
| **Reszponzív (1280 px desktop)** | ✅ Aszimmetrikus hero, 3-oszlopos hub, 4-oszlopos pillérek, papírlap-keret rendben. |
| **Képek betöltése** | ✅ A 10 fotó + logó + SVG-motívum betölt; méretek `width/height`-tel megadva (nincs layout-ugrás). |
| **Kapcsolat – hosszú e-mail** | ✅ Javítva (`overflow-wrap: anywhere`) — az e-mail a kereten belül tördelődik, nem lóg ki (kapcsolat-blokk és lábléc is). |
| **Fókusz / billentyűzet** | ✅ `:focus-visible` látható; `bh-skip` ugró-link működik; mobilmenü Esc-re zár. |
| **`prefers-reduced-motion`** | ✅ Animációk/átmenetek kikapcsolnak. |
| **Nyomtatás** | ✅ Alap nyomtatási stílus (fejléc/lábléc/CTA elrejtve, linkek URL-je kiírva). |

## 2. Készített képernyőképek (referencia, a /tmp-ben)
`shot_index_desktop`, `idx_m` (mobil), `shot_kepbol_desktop`, `shot_rolunk_desktop`,
`shot_ezabarnahus_desktop`, `shot_blog_desktop`, `crop_kapcsolat` (e-mail-javítás igazolása).
> Megjegyzés: ezek munkapéldányok a `/tmp`-ben; a repó ezeket nem tartalmazza.

## 3. Mi működik
- Mind a 6 (valójában 7, +1 extra bejegyzés) mintaoldal teljes, önálló HTML-dokumentum.
- Közös, komponensalapú CSS (5 fájl), egyetlen `bh-` névtér, tokenvezérelt.
- A képbe zárt tartalom **valódi, reszponzív, hozzáférhető HTML** (izlandi modell + rólunk).
- Lila vezérszín + okker akcentus + krém levegő — nem a régi Divi világoskék, nem „AI-slop".
- Hordozható: relatív útvonalak, nincs külső függőség; bárhol megnyitható.

## 4. Mi nem működik / korlát
- **Rendszerfont-stack:** a megjelenés platformfüggő (Windows/Mac/Linux eltérő sans/serif). Élesben
  ajánlott self-hosted Open Sans + meleg serif (`assets/fonts/`, `@font-face`). Nem hiba, csak
  döntés.
- **YouTube-rajzfilm / Google Maps:** a mintában nincs beágyazva (adatvédelmi okból, külső függőség).
  Élesben „click-to-load" facade javasolt.
- **Automatikus HTML-validátor (W3C):** offline nem futott; a struktúra kézi ellenőrzéssel
  szabványos (DOCTYPE, lang, charset, viewport, szemantikus elemek, alt-ok, egyetlen h1).
- **Lighthouse:** ebben a környezetben nem futtatható; a statikus, függőségmentes felépítés alapján
  várhatóan magas teljesítmény/hozzáférhetőség.

## 5. Bizonytalanságok (emberi ellenőrzés)
- Minden `[ELLENŐRIZENDŐ]` / `.bh-review-flag` tétel: a `rolunk` bemutatkozó nehezen olvasható
  bekezdése, az izlandi pillér „Biztonság" pontos szóhasználata, a szervezeti/fenntartói név, a
  támogatói illusztráció névsora.
- Telefonszámok (+36 30 725 3133 / 724 0402 / 204 5247), e-mail, adószám (19314150-1-18)
  aktualitása élesítés előtt ellenőrzendő.
- A blogposztok érzékeny, konkrét ügyre utaló részeinek jogi/etikai jóváhagyása.

## 6. Javasolt további feladatok
1. Hiányzó `[ELLENŐRIZENDŐ]` tartalmak pótlása az eredetiből (emberrel).
2. „Szombathelyi szolgáltatások" és „magyar megvalósítás (idővonal)" teljes oldal.
3. `kapcsolat`, `tamogass`, `dokumentumtar` oldalak.
4. Self-hosted fontok + WebP/AVIF képkonverzió + `srcset`.
5. Döntés a gyors-kilépés gombról és a tartalmi figyelmeztetésekről.
6. Tényleges Divi 5 felépítés a `06_…` jegyzet alapján; W3C + Lighthouse audit élesben.
