# 03 — Képként beágyazott tartalmak → HTML terv

A barnahus.hu fő bajossága: több aloldal **teljes érdemi tartalma egyetlen álló infografika-PNG**.
Ezeket képből olvastuk ki (a `/tmp` alá vágott, felnagyított szeletekből, vizuálisan ellenőrizve),
és valódi, reszponzív, hozzáférhető HTML-szerkezetté tervezzük át.

**Jelölés:** `[ELLENŐRIZENDŐ]` = a képből nem 100%-ban biztosan kiolvasható rész, emberi
ellenőrzést igényel. **Tartalmat nem találunk ki**; ahol bizonytalan, ott jelöljük.

---

## A) Melyik kép mi legyen?

| Forrás infografika | Oldal | Döntés |
|---|---|---|
| `egyben_izlandi-modell-3.png` | az-izlandi-modell | **HTML-re alakítjuk** → `blog/kepbol-html-minta.html` (zászlóshajó-demó) |
| `egyben_barnahus-szombathely-2.png` | szolgáltatások | **HTML-re alakítjuk** (terv lent; mintaként az `ez-a-barnahus.html`-be teaser + külön oldal a következő körben) |
| `2.verzió.png` (2020/05) | magyar megvalósítás | **HTML-idővonalra alakítandó** (lent vázolva); a mintacsomagban dokumentált terv, teljes oldal a következő kör |
| `2.verzió.png` (2021/02) | rólunk | **HTML-re alakítjuk** → `rolunk.html` |
| `Hungary-….jpg` | rólunk – támogatók | **Marad kép** (kézzel rajzolt, nevesített portrék — nem szöveg). Jó `alt` + nevek listája szövegként mellé. |
| `Give-Away-Facebook-Post*.jpg` | támogatás | Kép helyett **HTML CTA** (1% adó + adószám); a kép maradhat illusztrációként. |

**Emberi ellenőrzésre:** a `tamogatoi-illusztracio.jpg` portré-nevei (kézírásos), és minden
`[ELLENŐRIZENDŐ]` tétel.

---

## B) „Az izlandi modell" — kiolvasott tartalom és komponensterv
**Cél: `blog/kepbol-html-minta.html`**

### Kiolvasott szöveg (forrás: izlandi-modell infografika)
1. **Bevezető:** „Az első Barnahus Izlandon jött létre 1998-ban, alapul véve az amerikai
   Children's Advocacy Center megközelítését."
2. **PROMISE Barnahus Network:** „Azóta, az Európai Barnahus Mozgalomnak is köszönhetően,
   megsokszorozódott a Barnahus-szolgálatok száma Európában. A nemzetközi PROMISE Barnahus
   Network tömöríti azokat az intézményeket és szakembereket, akik fáradhatatlanul dolgoznak azon,
   hogy országukban egyre több Barnahus-szolgálat létesüljön!"
3. **„A gyermekekkel szemben elkövetett szexuális zaklatás, szexuális erőszak sajátosságai"** (lista):
   - a gyermek áldozat rendkívül sebezhető, kiszolgáltatott, megfélemlített helyzetben van;
   - a szexuális abúzus „csendes" bűncselekmény, az elkövető titoktartást követel az áldozattól;
   - az áldozattá vált gyerekek 14 év alatt, de a 14–18 év között is komoly nehézséget jelent az
     esetről való beszámolás, bárkinek is beszélnek róla;
   - nagyon gyakran a fentiek miatt bizonyíték- és bizonyítottsághiányos a bűntény; más konkrét
     bizonyíték, szemtanú — a bántalmazott gyerek vallomása kivételével — ritkán fordul elő,
     leggyakrabban a gyerek beszámolója jelenti az egyetlen közvetlen bizonyítékot;
   - orvosi bizonyítékok az esetek 10 százalékában érhetők el, mivel ehhez speciális eszközök is
     kellenek, ráadásul ezek az esetek kevesebb mint 5 százalékában bizonyulnak perdöntőnek.
4. **„A gyermek áldozat vagy szemtanú beszámolója szükséges ahhoz, hogy"** — 4 pillér:
   - **BIZTONSÁG** — a gyermek biztonsága helyezhető legyen [ELLENŐRIZENDŐ: valószínűleg
     „helyreállítható" v. „biztosítható" értelemben], ne legyen az elkövetővel összezárva;
   - **SEGÍTSÉG** — a gyermek megfelelő segítséget kapjon, amely segíti a pszichikai és fizikai
     felépülését;
   - **ÍTÉLET** — a bűntényt felderítsék nyomozással, vádemelést tegyenek és ítélet hozzanak [sic,
     a képen így];
   - **EREDMÉNY** — a bírósági ítéletnek köszönhetően az elkövető ne abuzálhassa újra a gyermeket.
5. **„Miért ártalmas az áldozatnak, ha többször kérdezik ki, vallatják?"** (lista):
   - Az újra és újra ismételt és szervezetlen interjúk különböző helyeken ártalmas hatással lehetnek
     a gyermek áldozatokra: retraumatizálják őket, az áldozat újra és újra átéli az erőszak okozta
     komplex traumát; mindez súlyosan sérti a gyermek mindenek felett álló érdekének figyelembe
     vételére vonatkozó szabályt.
   - Az újra és újra ismételt, szervezetlen interjúk torzíthatják a gyermek beszámolóját. A rávezető,
     félrevezető, zárt kérdések és a gyermek felnőtt általi befolyásolhatósága miatt sem
     eredményeznek élményszerű elmondást.
   - A rendelőintézet orvosi vizsgálója, a gyámhatósági ügyintéző irodája, de még a rendőrség
     gyermekbarát kihallgatószobája sem feltétlenül alkalmas a meghallgatásra, hiszen ezek a
     hivatalos helyek gyakran nem gyermekbarát, nem funkcionális létesítmények. Ez a környezet
     önmagában már magas szintű stresszt vált ki az áldozatból, befolyásolja a vele történtek
     elmondását.
6. **Kiemelt üzenet:** „A BARNAHUS-SZOLGÁLAT GYERMEKBARÁT ÉS BIZTONSÁGOS KÖRNYEZETET KÍNÁL A
   GYERMEKEK SZÁMÁRA, ÉS EGY HELYSZÍNEN SORAKOZTATJA FEL AZ ELJÁRÁSBAN RÉSZT VEVŐ ÖSSZES
   SZOLGÁLTATÓT."
7. **„AZ IZLANDI BARNAHUS-MODELL LEGFONTOSABB KRITÉRIUMAI"** (#1–#5):
   - **#1** A gyermek kihallgatása bizonyítékon alapuló, nemzetközi (NICHD) protokoll alapján
     történik meg.
   - **#2** A gyermek vallomásának bizonyító erejét megfelelő intézkedésekkel biztosítják, a
     „szabályszerű eljárás" elvének megfelelően. **Cél:** megakadályozni, hogy a gyermeknek a
     bírósági eljárás során meg kelljen ismételnie a vallomását.
   - **#3** Az igazságügyi nyomozás céljából elvégzett egészségügyi értékelés, valamint a gyermek
     fizikai jólétét és felépülését biztosító körülmények rendelkezésre állnak.
   - **#4** A gyermek traumájára adott pszichológiai segítségnyújtás, valamint a rövid távú terápiás
     szolgáltatások hozzáférhetők.
   - **#5** Az áldozat és testvérei számára szükséges védelem felmérése megtörténik; és az
     utánkövetés biztosítva van.

### Komponensekre bontás (Barnahus designrendszer osztályok)
| Tartalmi blokk | Komponens | Osztály |
|---|---|---|
| 1–2. bevezető + PROMISE | lead bekezdés + jelölt info-blokk | `bh-prose`, `bh-note` |
| 3. „sajátosságai" | címsor + kapcsos lista | `bh-prose ul`, kiemelt cím `bh-callout` |
| 4. 4 pillér | **4 oszlopos pillér-rács** | `bh-pillars`, `bh-pillars__item` |
| 5. „miért ártalmas" | címsor + lista | `bh-callout` + `bh-prose ul` |
| 6. kiemelt üzenet | **idézet-/üzenetblokk** | `bh-quote` (ház-motívummal) |
| 7. #1–#5 kritériumok | **számozott lépéslista** | `bh-process`, `bh-process__item` (`data-step`) |

---

## C) „A Barnahus Szombathely szolgáltatásai" — kiolvasott tartalom
**Cél: teaser az `ez-a-barnahus.html`-ben; teljes oldal a következő körben.**

- **Fejléc:** „Barnahus Szombathely — A Vas Megyei Területi Gyermekvédelmi Szakszolgálat egy
  speciális, Szombathelyen működő szolgáltatása. Fenntartó: a Szociális és Gyermekvédelmi
  Főigazgatóság Vas Megyei Kirendeltsége." [ELLENŐRIZENDŐ: aktuális szervezeti név]
- **„A Barnahus komplex szolgáltatás elemei" (#1–#6):**
  1. Az igazságügyi pszichológus szakértői vizsgálat előkészítő ülése a gyermeket ismerő
     jelzőrendszeri tagok közreműködésével.
  2. Gyermekmeghallgatás speciális interjútechnikával.
  3. Gyermekorvosi és gyermeknőgyógyászati vizsgálat.
  4. Ha törvényszéki interjún minősül a gyermek meghallgatása, akkor azonnali traumafókuszú vagy
     kognitív terápiában részesül.
  5. Elégedettségi és utánkövetéses vizsgálat.
  6. Tudományos kutatás.
- **Ház-grafika üzenetei:** A Barnahus-szolgáltatás minden eleme bizonyítékalapú · Minden szükséges
  szolgáltatást egy helyen, egy épületben kínálunk · Konzultációt és tanácsadást nyújtunk a nem
  bántalmazó szülőnek/gondviselőnek · …a gyermekvédelmi szakszolgálatoknak.
- **„A Barnahus Szombathely jelenlegi működése"** — folyamatleírás vonalas ikonokkal (boríték,
  könyvek, fejek, kamera): feljelentés → szakértő kirendelése → iratanyag tanulmányozása →
  előkészítő ülés → gyermekkihallgatás a Barnahusban → szakértő a monitoring-szobában real-time
  figyel → szünetben egyeztetés, hogy minél kevésbé legyen traumatikus → szükség esetén max.
  4 alkalmas traumafókuszú terápia (max. 50 km-en belül) → INDICO kép-/hangrögzítés a szakértői
  vélemény mellékleteként.
- **„Ki kérhet igazságügyi pszichológus szakértői vizsgálatot a Barnahus-szolgálattól?"**
  → Család- és Gyermekjóléti Szolgálat · Gyámhivatal · Rendőrség.
- **„Mit javaslunk a szülőnek…?"**
  - Ha bizonytalan / tanácsra van szüksége → **telefonos konzultáció: +36 30 725 3133,
    +36 30 724 0402**.
  - Ha bizonyos a bántalmazásban → **azonnali feljelentés a lakóhely szerinti rendőrségen**.

Komponensek: `bh-process` (#1–#6 + a folyamat), `bh-pillars`/`bh-card` (ki kérhet),
`bh-note`/`bh-callout` (telefonos teendők).

---

## D) „A magyar megvalósítás" — idővonal (kiolvasott eleje)
**Cél: HTML-idővonal `bh-timeline` komponenssel; teljes oldal a következő körben.**

A PNG ~10 000 px magas, függőleges idővonal dátumozott mérföldkövekkel. Kiolvasott eleje:
- **2013** — Dr. Lazáry Györgyné egy szakmai konferencián hall először a Barnahusról, és a
  szombathelyi alapellátás vezetőjével, Kulcsár Lászlónéval elhatározzák, hogy városukban
  létrehoznak egy Barnahus-szolgáltatást.
- **2014** — Dr. Lazáry Györgyné felmérést végez a Vas megyei védőnők (101 fő) jelzőrendszeri
  tevékenységéről; az eredmény szerint a védőnők 99%-a nem veszi észre a szexuális abúzus jeleit.
- **2014. június** — Ötoldalú találkozó a Vas megyei TEGYESZ-ben (ügyészek, rendőr, gyámhivatali
  ügyintéző, szociális munkás, gyámok).
- **2014. július** — Dr. Lazáry Györgyné szakmai látogatást tesz a reykjavíki Barnahus-szolgálatban;
  elindul az izlandi szakmai együttműködés.
- **…** [A teljes idővonal további dátumai (2015–napjaink) ELLENŐRIZENDŐK — a teljes oldal a
  következő körben készül, a teljes kép szeletenkénti újraolvasásával.]

Komponens: `bh-timeline`, `bh-timeline__item` (`<time>` + tartalom), váltakozó oldal.

---

## E) „Rólunk / Barnahus Egyesület" — kiolvasott tartalom
**Cél: `rolunk.html`**

- **Idézetek (kiemelt):**
  - „A Barnahusban hiszünk a gyermeknek!" — **Bragi Guðbrandsson**, az izlandi Gyermekvédelmi
    Kormányhivatal egykori főigazgatója.
  - „A gyerekek még azt hiszik [ELLENŐRIZENDŐ pontos megfogalmazás], amit látnak, a felnőttek
    viszont gyakran azt látják, amit gondolnak." — **Dr. Lazáry Györgyné** igazságügyi pszichológus
    szakértő, a Barnahus Nemzeti Tudásközpont vezetője.
- **Bemutatkozó:** „A Barnahus stáb tagjai Szombathelyen élnek és dolgoznak, többen évtizedek óta a
  gyermekvédelmi alapellátásban és szakellátásban. Ez utóbbiban az elmúlt években megdöbbenve
  tapasztaljuk, hogy egyre több olyan gyermek kerül kiemelésre a családból, akit a szexuális
  bántalmazás valamilyen formája ért nagyon súlyosan vagy folytatólagosan." [A bekezdés folytatása
  több konkrét, megrázó esetleírást tartalmaz — **ELLENŐRIZENDŐ**, mert a kép e része nehezen
  olvasható; élesítés előtt eredetiből pótlandó.]
- **Kintsugi-történet:** „2013-ban, amikor először hallottunk a Barnahusról, elhatároztuk, hogy
  megcsináljuk. A japán keramikusok nagy gonddal készítik kintsugi kerámiáikat: ha égetés közben egy
  megreped, széttörik, nem dobják szemétre, hanem arannyal összeragasztják. 2015-ben ezt a vázát
  választottuk Barnahus-munkánk szimbólumává. Meglepve láttuk 2016 januárjában Zágrábban, hogy az
  ottani Barnahus stáb munkájának is ez a szimbóluma. … bár összeragasztják az összetört lélek
  darabjait, az már soha nem lesz olyan ép, mint a bántalmazás előtt volt."
- **KÜLDETÉSÜNK:** „A Barnahus-modell komplex szolgáltatást nyújt az abúzus gyermekáldozatainak a
  gyermekbarát igazságszolgáltatás és a gyermekvédelem együttes munkájával. Mindig hiszünk a
  gyermekeknek, és mindig képviseljük a mindenek felett álló érdeküket. Minden esetben komplex
  szolgáltatást nyújtunk az abúzus gyermekáldozatainak úgy, hogy egyszerre több szaktudományt
  kapcsolunk össze, és serkentjük a szervezetek közötti együttműködést."
- **ÉRTÉKEINK (#1–#5):** (TRUST, ADVOCACY, CARE, MULTIDISCIPLINARITY, INTERAGENCY)
  1. mindig hiszünk a gyermeknek;
  2. a gyermek mindenek felett álló érdekét képviseljük;
  3. komplex szolgáltatást nyújtunk az abúzus gyermekáldozatainak;
  4. összekapcsolunk egyszerre több szaktudományt;
  5. serkentjük a szervezetek közötti együttműködést.
- **JÖVŐKÉPÜNK:**
  - A **Barnahus Hungary** célja, hogy minden bántalmazott gyermek számára hozzáférhetővé váljon a
    minden megyében elérhető Barnahus-szolgáltatás.
  - A **Barnahus Szombathely** célja, hogy minden Vas megyei áldozattá vált gyermek megkapja a
    Barnahus-szolgáltatást; hogy a Barnahus Nemzeti Tudásközpontban fejlesszük a professzionális
    kapacitást és hatékonyságot; és hogy a bírók bekapcsolódjanak a gyermekbarát igazságszolgáltatás
    és a gyermekvédelem együttes munkájába.

Komponensek: `bh-quote` (idézetek), `bh-prose` (bemutatkozó, kintsugi), `bh-process` (értékek
#1–#5), `bh-pillars`/`bh-card` (jövőkép Hungary/Szombathely), `bh-figure` (támogatói illusztráció).

---

## F) Mi marad kép, mi igényel emberi ellenőrzést?
- **Marad kép:** „A Barnahus Hungary támogatói" kézzel rajzolt illusztráció (portrék) — szövegesíteni
  csak a megrendelő által hitelesített névsorral szabad.
- **Emberi ellenőrzés kell:** minden `[ELLENŐRIZENDŐ]` tétel; a magyar idővonal 2015 utáni dátumai;
  a rólunk-bemutatkozó nehezen olvasható bekezdése; a szervezeti/fenntartói nevek aktualitása;
  a telefonszámok/e-mail/adószám élő ellenőrzése.
