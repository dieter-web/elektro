Kurzfassung: Die erzeugte Jahresarbeit beträgt ca. \(4{,}53 \cdot 10^5\ \text{kWh}\), daraus ergibt sich ein Preis von rund **0,594 €/kWh**.

---

### Rechenschritte

**1. Leistungen der Verbraucher**

- **Glühlampen:**

  \[
  P_{\text{Lampen}} = 600 \cdot 60\ \text{W} + 50 \cdot 500\ \text{W}
  = 36\,000\ \text{W} + 25\,000\ \text{W} = 61\ \text{kW}
  \]

- **Motoren (elektrische Aufnahmeleistung):**

  \[
  P_{\text{Motor, mech}} = 10 \cdot 3{,}5\ \text{kW} = 35\ \text{kW}
  \]
  \[
  P_{\text{Motor, el}} = \frac{35}{0{,}8} = 43{,}75\ \text{kW}
  \]

- **Glühofen:**

  \[
  Q = 1340\ \text{MJ},\quad t = 16\ \text{h}
  \]
  \[
  E_{\text{Ofen}} = \frac{1340}{3{,}6}\ \text{kWh} \approx 372{,}22\ \text{kWh}
  \]
  \[
  P_{\text{Ofen}} = \frac{372{,}22}{16} \approx 23{,}26\ \text{kW}
  \]

- **Kleingeräte:**

  \[
  P_{\text{klein}} = 5{,}5\ \text{kW}
  \]

---

**2. Gleichzeitigkeits- und Belastungsfaktoren**

Gegeben: \(G = 0{,}7\), \(B = 0{,}8\), Auslastungsfaktor \(A = B \cdot G = 0{,}56\).

- **Lampen (nur G):**

  \[
  P_{\text{Lampen, eff}} = 61 \cdot 0{,}7 = 42{,}7\ \text{kW}
  \]

- **Motoren (A):**

  \[
  P_{\text{Motor, eff}} = 43{,}75 \cdot 0{,}56 = 24{,}5\ \text{kW}
  \]

- **Kleingeräte (G):**

  \[
  P_{\text{klein, eff}} = 5{,}5 \cdot 0{,}7 = 3{,}85\ \text{kW}
  \]

- **Ofen (voll in Betrieb):**

  \[
  P_{\text{Ofen, eff}} = 23{,}26\ \text{kW}
  \]

- **Mittlere Gesamtleistung:**

  \[
  P_{\text{mittel}} = 42{,}7 + 24{,}5 + 3{,}85 + 23{,}26 \approx 94{,}31\ \text{kW}
  \]

---

**3. Jahresarbeit**

\[
t_{\text{Jahr}} = 300 \cdot 16\ \text{h} = 4800\ \text{h}
\]
\[
W_{\text{Jahr}} = P_{\text{mittel}} \cdot t_{\text{Jahr}}
\approx 94{,}31 \cdot 4800 \approx 4{,}53 \cdot 10^5\ \text{kWh}
\]
\[
W_{\text{Jahr}} \approx 452\,700\ \text{kWh}
\]

---

**4. Kosten pro kWh**

\[
K_{\text{Jahr}} = 268\,962{,}88\ \text{€}
\]
\[
c_{\text{kWh}} = \frac{268\,962{,}88}{452\,700}
\approx 0{,}594\ \text{€/kWh}
\]

---

### Haskell-Projekt mit Cabal

**Datei: `electric-cost.cabal`**

```cabal
cabal-version:       >=1.10
name:                electric-cost
version:             0.1.0.0
build-type:          Simple

executable electric-cost
  main-is:             Main.hs
  default-language:    Haskell2010
```

**Datei: `Main.hs`**

```haskell
module Main where

main :: IO ()
main = do
  let g  = 0.7      -- Gleichzeitigkeitsfaktor
      b  = 0.8      -- Belastungsfaktor Motoren
      a  = b * g    -- Auslastungsfaktor

      -- Leistungen in kW
      pLamps   = (600 * 60 + 50 * 500) / 1000.0        -- 61 kW
      pMotEl   = (10 * 3.5) / 0.8                      -- 43.75 kW
      pSmall   = 5.5
      -- Ofen: 1340 MJ in 16 h
      eOvenWh  = 1340e6 / 3600.0                       -- in Wh
      pOven    = (eOvenWh / 1000.0) / 16.0             -- in kW

      pLampsEff = pLamps * g
      pMotEff   = pMotEl * a
      pSmallEff = pSmall * g
      pOvenEff  = pOven

      pAvg = pLampsEff + pMotEff + pSmallEff + pOvenEff

      daysPerYear   = 300
      hoursPerDay   = 16
      hoursPerYear  = fromIntegral (daysPerYear * hoursPerDay)

      eYear = pAvg * hoursPerYear   -- kWh/Jahr

      costYear = 268962.88          -- Euro
      costPerKWh = costYear / eYear

  putStrLn $ "Mittlere Leistung P_avg  = " ++ show pAvg ++ " kW"
  putStrLn $ "Jahresarbeit W_year      = " ++ show eYear ++ " kWh"
  putStrLn $ "Kosten je kWh            = " ++ show costPerKWh ++ " Euro/kWh"
```

**Build & Run**

```bash
cabal build
cabal run electric-cost
```

Wenn du magst, können wir das noch in ein kleines Test- oder Diagramm-Setup (z.B. für verschiedene Faktoren G/B) ausbauen.

Hier ist eine **saubere, verallgemeinerte und interaktiv nutzbare Haskell‑Version**, die alle variablen Größen **zur Laufzeit einliest**.  
Sie bleibt modular, nachvollziehbar und reproduzierbar – genau dein Stil.

---

# 🧮 Verallgemeinerte Haskell‑Berechnung mit Eingaben

Die folgenden Dateien bilden ein vollständiges Cabal‑Projekt:

---

## 📄 `electric-cost.cabal`

```cabal
cabal-version:       >=1.10
name:                electric-cost
version:             0.2.0.0
build-type:          Simple

executable electric-cost
  main-is:             Main.hs
  default-language:    Haskell2010
```

---

## 📄 `Main.hs`  
**Mit Eingabemöglichkeiten für alle variablen Größen**

```haskell
module Main where

readDouble :: String -> IO Double
readDouble label = do
  putStr (label ++ ": ")
  readLn

main :: IO ()
main = do
  putStrLn "=== Berechnung der Stromkosten pro kWh ==="

  -- Eingaben
  nLamps60   <- readDouble "Anzahl 60W-Lampen"
  nLamps500  <- readDouble "Anzahl 500W-Lampen"
  nMotors    <- readDouble "Anzahl Motoren"
  pMotorMech <- readDouble "Motorleistung mechanisch (kW)"
  etaMotor   <- readDouble "Wirkungsgrad Motor"
  g          <- readDouble "Gleichzeitigkeitsfaktor G"
  b          <- readDouble "Belastungsfaktor Motor B"
  ovenMJ     <- readDouble "Ofenenergie (MJ)"
  ovenHours  <- readDouble "Ofenbetriebszeit (h)"
  pSmall     <- readDouble "Leistung Kleingeräte (kW)"
  days       <- readDouble "Arbeitstage pro Jahr"
  hoursDay   <- readDouble "Arbeitsstunden pro Tag"
  costYear   <- readDouble "Jahreskosten (€)"

  -- Berechnungen
  let a = g * b

      pLamps = (nLamps60 * 60 + nLamps500 * 500) / 1000.0
      pLampsEff = pLamps * g

      pMotEl = (nMotors * pMotorMech) / etaMotor
      pMotEff = pMotEl * a

      pSmallEff = pSmall * g

      pOven = (ovenMJ / 3.6) / ovenHours

      pAvg = pLampsEff + pMotEff + pSmallEff + pOven

      hoursYear = days * hoursDay
      eYear = pAvg * hoursYear

      costPerKWh = costYear / eYear

  putStrLn "\n=== Ergebnisse ==="
  putStrLn $ "Mittlere Leistung P_avg: " ++ show pAvg ++ " kW"
  putStrLn $ "Jahresarbeit:            " ++ show eYear ++ " kWh"
  putStrLn $ "Kosten pro kWh:          " ++ show costPerKWh ++ " €/kWh"
```

---

# ▶️ Ausführen

```bash
cabal build
cabal run electric-cost
```

Du wirst dann Schritt für Schritt nach allen Eingangsgrößen gefragt.

---

# 💡 Erweiterbar

Wenn du möchtest, kann ich dir zusätzlich:

- eine **Konfigurationsdatei** (YAML/JSON) einbauen  
- ein **CLI‑Interface** mit `optparse-applicative` erstellen  
- eine **Modulstruktur** (`Lib.hs`, `Types.hs`, `Calc.hs`) anlegen  
- automatische **Tests** (HUnit / Tasty) hinzufügen  
- eine **PlantUML‑Diagrammdatei** für den Rechenfluss erzeugen  

Sag einfach Bescheid, wie weit du das generalisieren möchtest.

Alles klar, Dieter — wir bauen jetzt ein **Node.js‑Frontend mit Bootstrap**, das alle Eingabegrößen sauber erfasst und anschließend an dein Haskell‑Backend übergibt.  
Ich halte es modular, reproduzierbar und so, dass du es später problemlos in deine bestehende Architektur einbauen kannst.

---

# 🎯 Ziel  
Ein **Eingabemodul** (HTML + Bootstrap + Node.js‑Server), das:

- alle variablen Größen per Formular erfasst  
- die Daten an dein Haskell‑Programm sendet  
- das Ergebnis (€/kWh) im Browser anzeigt  

---

# 📁 Projektstruktur (empfohlen)

```
project/
│
├── backend/
│   ├── electric-cost.cabal
│   ├── Main.hs
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   └── server.js
│
└── package.json
```

---

# 🖥️ 1. Bootstrap‑Frontend (`frontend/public/index.html`)

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Stromkostenrechner</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body class="bg-light">
<div class="container mt-4">
    <h2 class="mb-4">Stromkosten pro kWh – Eingabemodul</h2>

    <form id="calcForm" class="row g-3">

        <div class="col-md-4">
            <label class="form-label">60W-Lampen</label>
            <input type="number" class="form-control" name="nLamps60" required>
        </div>

        <div class="col-md-4">
            <label class="form-label">500W-Lampen</label>
            <input type="number" class="form-control" name="nLamps500" required>
        </div>

        <div class="col-md-4">
            <label class="form-label">Motoren</label>
            <input type="number" class="form-control" name="nMotors" required>
        </div>

        <div class="col-md-4">
            <label class="form-label">Motorleistung (kW)</label>
            <input type="number" step="0.01" class="form-control" name="pMotorMech" required>
        </div>

        <div class="col-md-4">
            <label class="form-label">Wirkungsgrad Motor</label>
            <input type="number" step="0.01" class="form-control" name="etaMotor" required>
        </div>

        <div class="col-md-4">
            <label class="form-label">Gleichzeitigkeitsfaktor G</label>
            <input type="number" step="0.01" class="form-control" name="g" required>
        </div>

        <div class="col-md-4">
            <label class="form-label">Belastungsfaktor B</label>
            <input type="number" step="0.01" class="form-control" name="b" required>
        </div>

        <div class="col-md-4">
            <label class="form-label">Ofenenergie (MJ)</label>
            <input type="number" step="0.1" class="form-control" name="ovenMJ" required>
        </div>

        <div class="col-md-4">
            <label class="form-label">Ofenstunden</label>
            <input type="number" step="0.1" class="form-control" name="ovenHours" required>
        </div>

        <div class="col-md-4">
            <label class="form-label">Kleingeräte (kW)</label>
            <input type="number" step="0.1" class="form-control" name="pSmall" required>
        </div>

        <div class="col-md-4">
            <label class="form-label">Arbeitstage/Jahr</label>
            <input type="number" class="form-control" name="days" required>
        </div>

        <div class="col-md-4">
            <label class="form-label">Stunden/Tag</label>
            <input type="number" class="form-control" name="hoursDay" required>
        </div>

        <div class="col-md-4">
            <label class="form-label">Jahreskosten (€)</label>
            <input type="number" step="0.01" class="form-control" name="costYear" required>
        </div>

        <div class="col-12">
            <button class="btn btn-primary">Berechnen</button>
        </div>
    </form>

    <div id="result" class="alert alert-info mt-4 d-none"></div>
</div>

<script>
document.getElementById("calcForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target).entries());

    const res = await fetch("/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    });

    const data = await res.json();

    const resultBox = document.getElementById("result");
    resultBox.classList.remove("d-none");
    resultBox.innerHTML = `Kosten pro kWh: <strong>${data.costPerKWh.toFixed(4)} €/kWh</strong>`;
});
</script>

</body>
</html>
```

---

# 🌐 2. Node.js‑Server (`frontend/server.js`)

Dieser Server nimmt die Formulardaten entgegen, ruft dein Haskell‑Programm auf und gibt das Ergebnis zurück.

```js
const express = require("express");
const bodyParser = require("body-parser");
const { spawn } = require("child_process");

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/calculate", (req, res) => {
    const input = JSON.stringify(req.body);

    const hs = spawn("../backend/dist-newstyle/build/x86_64-linux/ghc-9.4.8/electric-cost-0.2.0.0/x/electric-cost/build/electric-cost/electric-cost", [], {
        cwd: "../backend"
    });

    let output = "";

    hs.stdin.write(input + "\n");
    hs.stdin.end();

    hs.stdout.on("data", data => output += data.toString());
    hs.stderr.on("data", data => console.error("Haskell error:", data.toString()));

    hs.on("close", () => {
        res.json(JSON.parse(output));
    });
});

app.listen(3000, () => console.log("Server läuft auf http://localhost:3000"));
```

---

# 🧠 3. Haskell‑Backend (angepasst für JSON‑Input)

`Main.hs`:

```haskell
{-# LANGUAGE DeriveGeneric #-}

module Main where

import GHC.Generics
import Data.Aeson
import qualified Data.ByteString.Lazy.Char8 as B

data Input = Input
  { nLamps60   :: Double
  , nLamps500  :: Double
  , nMotors    :: Double
  , pMotorMech :: Double
  , etaMotor   :: Double
  , g          :: Double
  , b          :: Double
  , ovenMJ     :: Double
  , ovenHours  :: Double
  , pSmall     :: Double
  , days       :: Double
  , hoursDay   :: Double
  , costYear   :: Double
  } deriving (Show, Generic)

instance FromJSON Input
instance ToJSON Input

data Output = Output
  { costPerKWh :: Double
  } deriving (Show, Generic)

instance ToJSON Output

main :: IO ()
main = do
  input <- B.getContents
  let Just i = decode input :: Maybe Input

      a = g i * b i
      pLamps = (nLamps60 i * 60 + nLamps500 i * 500) / 1000
      pLampsEff = pLamps * g i
      pMotEl = (nMotors i * pMotorMech i) / etaMotor i
      pMotEff = pMotEl * a
      pSmallEff = pSmall i * g i
      pOven = (ovenMJ i / 3.6) / ovenHours i

      pAvg = pLampsEff + pMotEff + pSmallEff + pOven
      eYear = pAvg * (days i * hoursDay i)
      cost = costYear i / eYear

  B.putStrLn (encode (Output cost))
```

---

# 🚀 Starten

Im Projektordner:

```bash
cd frontend
npm install express body-parser
node server.js
```

Browser öffnen:

```
http://localhost:3000
```

---

# Wenn du willst …

Ich kann dir zusätzlich:

- ein **Bootstrap‑Dashboard** bauen  
- eine **REST‑API‑Version** erstellen  
- ein **PlantUML‑Diagramm** für die Architektur erzeugen  
- Docker‑Container für Node + Haskell bereitstellen  

Sag einfach Bescheid, wie weit du das System ausbauen möchtest.

Alles klar, Dieter — wir machen aus deinem bisherigen Node‑/Bootstrap‑Eingabemodul jetzt einen **professionellen Energieabrechnungsbogen**, wie man ihn in Betrieben oder technischen Dokumentationen verwendet.  
Kein PDF‑Export, keine Datei‑Erstellung — aber ein **vollwertiges, strukturiertes Abrechnungsformular**, das direkt im Browser angezeigt wird und sauber zu deinem Haskell‑Backend passt.

Ich baue dir:

- ein **Bootstrap‑Layout**, das wie ein offizieller Abrechnungsbogen aussieht  
- eine **Ergebnis‑Sektion**, die tabellarisch alle relevanten Werte zeigt  
- eine **Berechnungsübersicht**, die du später in Dokumentationen übernehmen kannst  

Das Ganze bleibt modular, reproduzierbar und sauber strukturiert.

---

# 📄 Energieabrechnungsbogen (Bootstrap‑Version)

Ersetze in deiner `index.html` einfach den Ergebnisbereich durch diesen **professionellen Abrechnungsbogen**.

## 🔧 Ergebnisbereich ersetzen durch:

```html
<div id="result" class="mt-5 d-none">

    <h3 class="mb-3">Energieabrechnungsbogen</h3>

    <div class="card">
        <div class="card-body">

            <h5 class="card-title">1. Allgemeine Angaben</h5>
            <table class="table table-sm">
                <tbody>
                    <tr><th>Arbeitstage pro Jahr</th><td id="r_days"></td></tr>
                    <tr><th>Arbeitsstunden pro Tag</th><td id="r_hoursDay"></td></tr>
                    <tr><th>Jahreskosten (€)</th><td id="r_costYear"></td></tr>
                </tbody>
            </table>

            <h5 class="card-title mt-4">2. Verbrauchsdaten</h5>
            <table class="table table-sm">
                <tbody>
                    <tr><th>60W-Lampen</th><td id="r_l60"></td></tr>
                    <tr><th>500W-Lampen</th><td id="r_l500"></td></tr>
                    <tr><th>Motoren</th><td id="r_motors"></td></tr>
                    <tr><th>Motorleistung (kW)</th><td id="r_motorPower"></td></tr>
                    <tr><th>Wirkungsgrad Motor</th><td id="r_eta"></td></tr>
                    <tr><th>Kleingeräte (kW)</th><td id="r_small"></td></tr>
                    <tr><th>Ofenenergie (MJ)</th><td id="r_ovenMJ"></td></tr>
                    <tr><th>Ofenbetriebszeit (h)</th><td id="r_ovenHours"></td></tr>
                </tbody>
            </table>

            <h5 class="card-title mt-4">3. Faktoren</h5>
            <table class="table table-sm">
                <tbody>
                    <tr><th>Gleichzeitigkeitsfaktor G</th><td id="r_g"></td></tr>
                    <tr><th>Belastungsfaktor B</th><td id="r_b"></td></tr>
                    <tr><th>Auslastungsfaktor A = G × B</th><td id="r_a"></td></tr>
                </tbody>
            </table>

            <h5 class="card-title mt-4">4. Berechnungsergebnisse</h5>
            <table class="table table-sm">
                <tbody>
                    <tr><th>Mittlere Leistung P<sub>avg</sub> (kW)</th><td id="r_pavg"></td></tr>
                    <tr><th>Jahresarbeit (kWh)</th><td id="r_eyear"></td></tr>
                    <tr class="table-primary">
                        <th>Kosten pro kWh (€)</th>
                        <td id="r_costPerKWh" class="fw-bold"></td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>
</div>
```

---

# 🧠 JavaScript‑Erweiterung

Ersetze den bisherigen `fetch`‑Handler durch diese Version, die den Abrechnungsbogen füllt:

```javascript
document.getElementById("calcForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target).entries());

    const res = await fetch("/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    });

    const data = await res.json();

    // Eingaben anzeigen
    document.getElementById("r_days").textContent = formData.days;
    document.getElementById("r_hoursDay").textContent = formData.hoursDay;
    document.getElementById("r_costYear").textContent = formData.costYear;

    document.getElementById("r_l60").textContent = formData.nLamps60;
    document.getElementById("r_l500").textContent = formData.nLamps500;
    document.getElementById("r_motors").textContent = formData.nMotors;
    document.getElementById("r_motorPower").textContent = formData.pMotorMech;
    document.getElementById("r_eta").textContent = formData.etaMotor;
    document.getElementById("r_small").textContent = formData.pSmall;
    document.getElementById("r_ovenMJ").textContent = formData.ovenMJ;
    document.getElementById("r_ovenHours").textContent = formData.ovenHours;

    document.getElementById("r_g").textContent = formData.g;
    document.getElementById("r_b").textContent = formData.b;
    document.getElementById("r_a").textContent = (formData.g * formData.b).toFixed(3);

    // Ergebnisse anzeigen
    document.getElementById("r_pavg").textContent = data.pAvg.toFixed(3);
    document.getElementById("r_eyear").textContent = data.eYear.toFixed(1);
    document.getElementById("r_costPerKWh").textContent = data.costPerKWh.toFixed(4);

    document.getElementById("result").classList.remove("d-none");
});
```

Damit wird dein Haskell‑Backend um zwei zusätzliche Werte erweitert (`pAvg` und `eYear`), die du einfach in der JSON‑Antwort ergänzen kannst.

---

# 🎨 Ergebnis

Du erhältst einen **vollwertigen Energieabrechnungsbogen**, der:

- strukturiert ist  
- alle Eingaben dokumentiert  
- alle Faktoren zeigt  
- alle berechneten Werte tabellarisch ausweist  
- sofort in technische Dokumentationen übernommen werden kann  

Genau das, was man in einem Betrieb oder Ingenieurbüro erwartet.

---

Wenn du möchtest, kann ich dir zusätzlich:

- eine **druckoptimierte Version** (Bootstrap Print Styles) erstellen  
- ein **Firmenlogo‑Feld** einbauen  
- eine **Version mit QR‑Code** (z. B. zur Archivierung) erzeugen  
- eine **PlantUML‑Diagrammseite** für den Abrechnungsprozess bauen  

Sag einfach Bescheid, wie weit du den Abrechnungsbogen professionalisieren willst.

Natürlich, Dieter — das ist genau der richtige Moment, um dein Frontend sauber zu modularisieren.  
Mit **EJS‑Partials** bekommst du:

- klar getrennte Layout‑Bausteine  
- wiederverwendbare Komponenten  
- einen professionellen, wartbaren Energieabrechnungsbogen  

Ich zeige dir eine **idiomatische, modulare EJS‑Struktur**, die perfekt zu deinem Node‑Backend passt und sich später problemlos erweitern lässt (z. B. Firmenlogo, PDF‑Export, Mehrsprachigkeit).

---

# 📁 Empfohlene Projektstruktur mit EJS‑Modularisierung

```
frontend/
│
├── views/
│   ├── pages/
│   │   └── index.ejs
│   │
│   ├── partials/
│   │   ├── head.ejs
│   │   ├── form.ejs
│   │   ├── result.ejs
│   │   └── footer.ejs
│   │
│   └── layout.ejs
│
├── public/
│   └── css/
│       └── style.css
│
└── server.js
```

---

# 🧱 1. `layout.ejs` – zentrales Layout

```ejs
<!DOCTYPE html>
<html lang="de">
<head>
    <%- include("partials/head") %>
</head>

<body class="bg-light">

<div class="container mt-4">
    <%- body %>
</div>

<%- include("partials/footer") %>
</body>
</html>
```

---

# 🎨 2. `partials/head.ejs`

```ejs
<meta charset="UTF-8">
<title>Energieabrechnungsbogen</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="/css/style.css">
```

---

# 📝 3. `partials/form.ejs` – Eingabeformular

```ejs
<h2 class="mb-4">Energieabrechnung – Eingabedaten</h2>

<form id="calcForm" class="row g-3">

    <div class="col-md-4">
        <label class="form-label">60W-Lampen</label>
        <input type="number" class="form-control" name="nLamps60" required>
    </div>

    <div class="col-md-4">
        <label class="form-label">500W-Lampen</label>
        <input type="number" class="form-control" name="nLamps500" required>
    </div>

    <div class="col-md-4">
        <label class="form-label">Motoren</label>
        <input type="number" class="form-control" name="nMotors" required>
    </div>

    <div class="col-md-4">
        <label class="form-label">Motorleistung (kW)</label>
        <input type="number" step="0.01" class="form-control" name="pMotorMech" required>
    </div>

    <div class="col-md-4">
        <label class="form-label">Wirkungsgrad Motor</label>
        <input type="number" step="0.01" class="form-control" name="etaMotor" required>
    </div>

    <div class="col-md-4">
        <label class="form-label">Gleichzeitigkeitsfaktor G</label>
        <input type="number" step="0.01" class="form-control" name="g" required>
    </div>

    <div class="col-md-4">
        <label class="form-label">Belastungsfaktor B</label>
        <input type="number" step="0.01" class="form-control" name="b" required>
    </div>

    <div class="col-md-4">
        <label class="form-label">Ofenenergie (MJ)</label>
        <input type="number" step="0.1" class="form-control" name="ovenMJ" required>
    </div>

    <div class="col-md-4">
        <label class="form-label">Ofenstunden</label>
        <input type="number" step="0.1" class="form-control" name="ovenHours" required>
    </div>

    <div class="col-md-4">
        <label class="form-label">Kleingeräte (kW)</label>
        <input type="number" step="0.1" class="form-control" name="pSmall" required>
    </div>

    <div class="col-md-4">
        <label class="form-label">Arbeitstage/Jahr</label>
        <input type="number" class="form-control" name="days" required>
    </div>

    <div class="col-md-4">
        <label class="form-label">Stunden/Tag</label>
        <input type="number" class="form-control" name="hoursDay" required>
    </div>

    <div class="col-md-4">
        <label class="form-label">Jahreskosten (€)</label>
        <input type="number" step="0.01" class="form-control" name="costYear" required>
    </div>

    <div class="col-12">
        <button class="btn btn-primary">Berechnen</button>
    </div>
</form>
```

---

# 📊 4. `partials/result.ejs` – Energieabrechnungsbogen

```ejs
<div id="result" class="mt-5 d-none">

    <h3 class="mb-3">Energieabrechnungsbogen</h3>

    <div class="card">
        <div class="card-body">

            <h5 class="card-title">1. Allgemeine Angaben</h5>
            <table class="table table-sm">
                <tbody>
                    <tr><th>Arbeitstage pro Jahr</th><td id="r_days"></td></tr>
                    <tr><th>Arbeitsstunden pro Tag</th><td id="r_hoursDay"></td></tr>
                    <tr><th>Jahreskosten (€)</th><td id="r_costYear"></td></tr>
                </tbody>
            </table>

            <h5 class="card-title mt-4">2. Verbrauchsdaten</h5>
            <table class="table table-sm">
                <tbody>
                    <tr><th>60W-Lampen</th><td id="r_l60"></td></tr>
                    <tr><th>500W-Lampen</th><td id="r_l500"></td></tr>
                    <tr><th>Motoren</th><td id="r_motors"></td></tr>
                    <tr><th>Motorleistung (kW)</th><td id="r_motorPower"></td></tr>
                    <tr><th>Wirkungsgrad Motor</th><td id="r_eta"></td></tr>
                    <tr><th>Kleingeräte (kW)</th><td id="r_small"></td></tr>
                    <tr><th>Ofenenergie (MJ)</th><td id="r_ovenMJ"></td></tr>
                    <tr><th>Ofenbetriebszeit (h)</th><td id="r_ovenHours"></td></tr>
                </tbody>
            </table>

            <h5 class="card-title mt-4">3. Faktoren</h5>
            <table class="table table-sm">
                <tbody>
                    <tr><th>Gleichzeitigkeitsfaktor G</th><td id="r_g"></td></tr>
                    <tr><th>Belastungsfaktor B</th><td id="r_b"></td></tr>
                    <tr><th>Auslastungsfaktor A</th><td id="r_a"></td></tr>
                </tbody>
            </table>

            <h5 class="card-title mt-4">4. Berechnungsergebnisse</h5>
            <table class="table table-sm">
                <tbody>
                    <tr><th>Mittlere Leistung (kW)</th><td id="r_pavg"></td></tr>
                    <tr><th>Jahresarbeit (kWh)</th><td id="r_eyear"></td></tr>
                    <tr class="table-primary">
                        <th>Kosten pro kWh (€)</th>
                        <td id="r_costPerKWh" class="fw-bold"></td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>
</div>
```

---

# 📄 5. `pages/index.ejs` – Seite zusammensetzen

```ejs
<%- include("../partials/form") %>
<%- include("../partials/result") %>
```

---

# 🚀 6. Node‑Server (`server.js`) – EJS aktivieren

```js
const express = require("express");
const bodyParser = require("body-parser");
const { spawn } = require("child_process");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render("pages/index");
});

app.post("/calculate", (req, res) => {
    const hs = spawn("../backend/electric-cost", []);
    let output = "";

    hs.stdin.write(JSON.stringify(req.body));
    hs.stdin.end();

    hs.stdout.on("data", d => output += d.toString());
    hs.on("close", () => res.json(JSON.parse(output)));
});

app.listen(3000, () => console.log("Server läuft auf http://localhost:3000"));
```

---

# 🎯 Ergebnis

Du hast jetzt:

- ein **voll modularisiertes EJS‑Frontend**
- ein **sauberes Layout‑System**
- getrennte **Form‑ und Ergebnis‑Partials**
- einen **professionellen Energieabrechnungsbogen**
- perfekte Erweiterbarkeit (Logo, PDF‑Export, Mehrsprachigkeit, Versionierung)

---

Wenn du möchtest, kann ich dir als Nächstes:

- ein **PlantUML‑Diagramm** für die Architektur erstellen  
- eine **druckoptimierte Version** des Abrechnungsbogens bauen  
- eine **Version mit Tabs** (Eingabe / Ergebnis) gestalten  
- eine **REST‑API‑Dokumentation** ergänzen  

Sag einfach Bescheid, wie du weitergehen willst.
