# 02 — Technikai és tartalmi audit (barnahus.hu statikus tükör)

Forrás: `/home/user/AGENT/BARNAHUS_MIRROR/` (csak olvasva). Platform: **WordPress + Divi Theme 4.27.4**.

---

## 1. Oldaltérkép

### Valódi, tartalmi oldalak (refaktor szempontjából relevánsak)
| Útvonal | Típus | Tartalom forrása |
|---|---|---|
| `site/index.html` | Főoldal | Hero (logó + „Az áldozattá vált gyerekekért"), támogatás-CTA, rajzfilm-beágyazás (YouTube), nav-kártyák |
| `site/ez-a-barnahus/` | Hub-oldal | 3 kártya: izlandi modell / szombathelyi szolgáltatások / magyar megvalósítás |
| `site/ez-a-barnahus/az-izlandi-modell/` | **Képes tartalom** | A teljes tartalom egyetlen álló **infografika-PNG** |
| `site/ez-a-barnahus/a-barnahus-szombathely-szolgaltatasai/` | **Képes tartalom** | Teljes tartalom **infografika-PNG** (telefonszámokkal!) |
| `site/ez-a-barnahus/a-magyar-megvalositas/` | **Képes tartalom** | Teljes tartalom **idővonal-infografika-PNG** (~10 000 px magas) |
| `site/rolunk/` | **Képes tartalom** | Egyesület bemutatása **infografika-PNG**-ként + támogatói **illusztráció** |
| `site/tamogass/` | Statikus oldal | 1% adó-felhívás (adószám), kéz-fotó, give-away kép |
| `site/kapcsolat/` | Kontakt | E-mail, telefon (valódi szöveg) |
| `site/dokumentumtar/` | Üres/placeholder | Nincs érdemi tartalom a tükörben |
| `site/blog/a-pedofilia-ellen-mit-tehetunk/` | Bejegyzés | **Valódi, gazdag HTML-szöveg** (Dr. Lazáryné, 2020) |
| `site/blog/vegre-a-gyerekek-kerultek-a-torvenyhozas-fokuszaba/` | Bejegyzés | **Valódi HTML-szöveg** (2013/2020) |
| `site/egyeb/barnahus-szombathelyen/` | Galéria-poszt | Sok fotó (`olympus-digital-camera-*` attachmentek) |
| `site/category/blog/`, `category/egyeb/`, `category/uncategorized/` | Listaoldalak | Bejegyzések gyűjtője |

### Divi/téma demó-tartalom (NEM valódi, kihagyandó)
A `site/uncategorized/*` (audio-post-format, gallery-post-format, video-post-type, quote-post-format,
link-post-format, aside-post, image-format-post) és a `site/egyeb/youtube-video`, `vimeo-video`
mappák a **Divi sablon mintabejegyzései**. Tartalmuk irreleváns (pl. egy katonát ábrázoló
`post-8` demófotó). A refaktorban **nem visszük tovább** őket.

## 2. Tartalomtípusok
- **Statikus oldal:** főoldal, támogatás, kapcsolat.
- **Hub-oldal:** „Ez a Barnahus" (3 továbbvezető kártya).
- **Bloglista + egyedi bejegyzés:** 2 valódi bejegyzés.
- **Képként beágyazott infografika:** izlandi modell, szombathelyi szolgáltatások, magyar
  megvalósítás (idővonal), rólunk/egyesület. → **Ez a kulcsprobléma**, részletek a `03_…`-ban.
- **Képként beágyazott illusztráció:** „A Barnahus Hungary támogatói" (kézzel rajzolt, nevesített
  portrék) — ez **marad kép** (lásd `03_…`).
- **Kapcsolati / intézményi info:** valódi e-mail, telefonszámok, adószám.
- **Letölthető dokumentum:** a `dokumentumtar` a tükörben üres — emberi ellenőrzés kell, mi
  tartozik ide élesben.

## 3. Technikai állapot
- **Divi-osztályok:** tömeges `et_pb_*` használat (a főoldalon `et_pb_column*` 163×, `et_pb_row*`
  78×, `et_pb_button` 65×, `et_pb_section` 27×). A teljes elrendezés Divi szekció/sor/oszlop/modul
  szerkezet — ez szerencsére **jól leképezhető Divi 5-re** (lásd `06_…`).
- **Inline CSS:** a főoldalon **6 `<style>` blokk** (Divi által generált, kritikus CSS + modul-CSS),
  ez teszi az átlagos HTML-t ~90 KB-ossá (52 oldal, össz. ~4,6 MB HTML). `style=""` attribútum a
  főoldalon nincs — minden a `<style>` blokkokban van.
- **CSS:** 43 fájl, össz. **~2,4 MB** (Divi core + dynamic + modul CSS-ek).
- **JS:** 3 fájl, össz. **~1,0 MB** (jQuery + Divi scripts + dashjs/owl maradékok).
- **Külső → lokalizált assetek:** a tükör sok külső hostot mentett le (`fonts.googleapis.com`,
  `netdna.bootstrapcdn.com` [FontAwesome], `maps.googleapis.com`, `www.youtube.com`, `444.hu`,
  `drive.google.com`, `cdn.dashjs.org`, `daneden.me` [animate.css], `get.adobe.com` stb.).
- **Beágyazások:** főoldali **YouTube rajzfilm** (`embed/ao7FATsNMFM`), valamint **Google Maps**
  JS — mindkettő külső függőség, a refaktorban elhalasztott/lecserélendő.
- **Fontok:** Open Sans (300–800) + Fauna One (Google Fontsból lementve).
- **SEO/meta:** Divi/WP alap meta + Open Graph részben jelen; a képes oldalakon **a tartalom nem
  szöveg**, ezért gyakorlatilag indexelhetetlen — komoly SEO-veszteség.
- **Linkek:** belső linkek abszolút `https://barnahus.hu/...` formában; a tükörben relatívan
  feloldva. A refaktorban **relatív útvonal** kötelező.

## 4. Média (leltár, kiválasztás)
A tükör releváns saját képei a `local_media/barnahus.hu/wp-content/uploads/` és `site/wp-content/uploads/`
alatt. Kiválasztott, **valódi helyszíni** anyagok (átmásolva a refaktorba):

| Refaktor fájl | Eredeti | Mit ábrázol |
|---|---|---|
| `logo/barnahus-logo.png` | `2024/07/cropped-00Hungary-270x270.png` | Lila ház-logó, 3 alak, szivárvány „BARNAHUS" |
| `photos/folyoso-varo.jpg` | `2016/11/1` | **Szombathelyi folyosó/váró**, sárga gyerekszékek, logós ajtó — hero-jelölt |
| `photos/alapitok-molino.jpg` | `2015/09/PB160386` | Dr. Lazáryné + Bragi Guðbrandsson a „SZOMBATHELY – az áldozattá vált gyermekekért" molinó előtt |
| `photos/europai-mozgalom-molino.jpg` | `2020/05/1220241` | „EURÓPAI BARNAHUS MOZGALOM – SZOMBATHELY" molinó, ceruzák |
| `photos/homokterapia.jpg` | `2020/07/1010885` | Homokjáték-terápia eszközei (fa figurák, ágyak) |
| `photos/vizsgalo-szoba.jpg` | `2016/11/10` | Orvosi vizsgálószoba, kézbábbal |
| `photos/monitoring-pult.jpg` | `2016/11/5` | INDICO rögzítő/monitoring-pult |
| `photos/kamera-szoba.jpg` | `2016/11/11` | Meghallgató szoba kamerával |
| `photos/maci-folyoso.jpg` | `2011/07/SLIDE1` | Filmszerű kép: maci a folyosón (atmoszféra) |
| `photos/tamogatoi-illusztracio.jpg` | `2021/02/Hungary` | „A Barnahus Hungary támogatói" kézzel rajzolt portré-illusztráció |
| `photos/kez-a-kezben.jpg` | `2013/02/hands-purple-child-holding` | Felnőtt és gyermek kéz (támogatás) |

Az **infografika-PNG-k** referenciaként a `assets/img/infographics-source/`-ban (768 px széles
verziók), hogy a HTML-re alakítás visszaellenőrizhető legyen.

## 5. Vizuális minták (mintavételezve a képekből)
- **Fő szín: lila** — a logó háza és az infografikák kerete (≈ `#7a3b9b`), sötétebb mélylila a
  hangsúlyokhoz (≈ `#4d2463`), világos lila wash háttér (≈ `#ece4f3`).
- **Kiegészítő: okker/mustársárga** (≈ `#e7b008`) — keretek, pöttyök, kiemelt dobozok.
- **Sok fehér + meleg krém** levegő.
- **Visszatérő motívumok:** egymásra csúszó **keretes „papírlapok"** (lila kontúr + sárga réteg),
  **ferde sraffozott** négyzetek/körök, **számozott listák** (`#1`–`#6`), **vonalas ikonok**
  (boríték, könyv, fejek, kamera), **ház-sziluett** mint pozitív üzenethordozó.
- A logó betűi **szivárványszínűek** — ezt csak a logóban hagyjuk meg, az UI-ban nem terjesztjük ki.

## 6. Problémalista
1. **A fő tartalom képként van** (4 nagy infografika) → indexelhetetlen, nem reszponzív, nem
   hozzáférhető, mobilon olvashatatlanul kicsi. **Legfontosabb javítandó.**
2. **Hatalmas Divi-bloat** (oldalanként ~90 KB HTML, 2,4 MB CSS, 1 MB JS).
3. **Régi brand-szín** (világoskék `#2ea3f2`) nem tükrözi a tényleges lila identitást.
4. **Külső függőségek** (YouTube, Google Maps, FontAwesome, animate.css) — adatvédelmi és
   sebességteher.
5. **SEO/hozzáférhetőség:** képbe zárt szöveg, hiányos/auto-generált `alt`-ok.
6. **Demó-tartalom** szennyezi az oldalstruktúrát (Divi mintabejegyzések).
7. **`dokumentumtar` üres** a tükörben — tartalmi hiány, emberi pótlás kell.

## 7. Újrahasznosítható értékek
- **Erős, hiteles fotóanyag** a tényleges helyszínről (váró, vizsgáló, monitoring, alapítók).
- **Markáns, szakmai szöveg** a blogbejegyzésekben és az infografikákban (kiváló alapanyag).
- **Tiszta, megkülönböztető brand** (lila ház + okker), határozott vizuális motívumokkal.
- **Konkrét, értékes adatok:** telefonszámok (+36 30 725 3133, +36 30 724 0402,
  +36 30 204 5247), e-mail (barnahus.szombathely@vas.ogysz.hu), adószám (19314150-1-18),
  mérföldkövek (2013–).
- A Divi szekció/sor/oszlop **szerkezet** maga jó kiindulás a Divi 5 újraépítéshez.

## 8. Kockázatok
- **OCR-bizonytalanság:** az infografikák hosszú szövegét képből olvastuk ki; egyes szavak
  (pl. szervezeti pontos név, néhány adat) **emberi ellenőrzést** igényelnek — `[ELLENŐRIZENDŐ]`
  jelöléssel (lásd `03_…`, `07_…`).
- **Érzékeny téma:** a blogposztok konkrét (Kaleta-) ügyet említenek; jogi/etikai szempontból a
  megrendelőnek jóvá kell hagynia a megtartásukat.
- **Szervezeti változás:** a fenntartó/szervezeti nevek időközben változhattak (OGYSZ/SZGYF).
- **Telefonszámok/adatok elavulása:** élesítés előtt ellenőrizni kell.

## 9. Javasolt mintaoldalak (a megbízás szerint, indoklással)
1. `index.html` — főoldal (a teljes vizuális rendszer kirakatja).
2. `ez-a-barnahus.html` — hub-oldal (3 továbbvezető blokk + a modell rövid bemutatása).
3. `rolunk.html` — egyesület (küldetés, értékek, jövőkép, kintsugi-történet, alapítók) — **képből
   HTML** átalakítás demója intézményi tartalomra.
4. `blog.html` — bloglista (2 valódi bejegyzés).
5. `blog/minta-bejegyzes.html` — eredetileg is normál HTML bejegyzés.
6. `blog/kepbol-html-minta.html` — **az izlandi-modell infografika → valódi HTML cikk** (a megbízás
   kiemelt feladatának zászlóshajó-demója).
