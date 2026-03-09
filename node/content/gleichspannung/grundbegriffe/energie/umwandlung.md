### Qualitative Zusammenhänge
In Analogie zur mechanischen Energie werden auch bei der elektrischen Energie Körper (Ladungsträger: Elektronen, Ionen)
mittels einer Kraft (Quellspannung, z.B. hervorgerufen durch den osmotischen Druck und den Lösungsdruck bei galvanischen
Elementen) über ein Gefälle, das dem Weg der Ladungsträger in einem Stromkreis entspricht, befördert.

In den Spannungsquellen (Energieumwandlungsstellen) wird den Ladungsträgern die nichtelektrische Energie erteilt und duch
die entstehende Bewegung der Ladungen in elektrische Energie umgewandelt. Mit Hilfe der Ladungsträger wird die elektrische
Energie als Zwischenform von den Quellen zu den Verbrauchern (Energiewandlern) transportiert. In den Verbrauchern wird dann 
die elektrische Energie wieder in andere Energieformen gewandelt. Eine direkte praktische Nutzung wie bei den anderen
Energieformen ist bei der elektrischen Energie nicht möglich. Trotzdem hat die elektrische Enerige eine besondere Bedeutung,
die in den günstigsten Eigenschaften als Zwischenform zum Ausdruck kommt:

1. Keine Energieform läßt sich in großen Mengen und über große Entfernungen z.Z. so leicht und verlustarm transportieren wie
   die Elektroenergie über Leitungen oder Kabel. Zur Zeit beschäftigt man sich mit der drahtlosen Energieübertragung mittels
   gebüdelter Strahlung verschiedener Wellenlänge. Leistung und Übertragungsweite sind jedoch noch stark begrenzt.
   (etwa 100W und 15m). Erfolgsversprechender ist die Anwendung supraleitender Kabel.

Hier steckt ein spannendes Thema drin, Dieter — und eines, das deutlich über klassische induktive Kopplung hinausgeht. „Drahtlose Energieübertragung mittels gebündelter Strahlung verschiedener Wellenlänge“ beschreibt im Kern **radiative Wireless Power Transfer (WPT)**, also Energieübertragung über **gerichtete elektromagnetische Strahlung**, typischerweise im **Mikrowellen‑, Millimeterwellen‑ oder Laserbereich**.  

Die Websuche liefert zwar viel zu klassischer WPT, aber sie bestätigt die Grundidee:  
- WPT umfasst alle Verfahren, bei denen Energie ohne physische Leiter übertragen wird.  
- Radiative Verfahren nutzen **Fernfeldstrahlung**, im Gegensatz zu induktiven Nahfeldmethoden.

Ich gebe dir eine strukturierte Übersicht, wie gebündelte Strahlung verschiedener Wellenlängen für Energieübertragung genutzt werden kann — und wo die physikalischen Grenzen liegen.

---

# 🌐 Prinzip: Energieübertragung über gebündelte Strahlung

## 🎯 1. Grundidee
Ein Sender erzeugt **hochgradig gerichtete Strahlung** (Beamforming), die auf einen Empfänger fokussiert wird.  
Mehrere Wellenlängen können genutzt werden, um:
- **Spektrale Effizienz** zu erhöhen  
- **Atmosphärische Verluste** zu minimieren  
- **Mehrere Empfänger** zu bedienen  
- **Nichtlineare Gleichrichter (Rectennas)** optimal auszusteuern  

---

# 📡 2. Mögliche Wellenlängenbereiche

| Wellenlänge / Frequenz | Typische Technik | Vorteile | Nachteile |
|------------------------|------------------|----------|-----------|
| **Mikrowellen (1–10 GHz)** | Phased Arrays, Rectennas | Hohe Effizienz, gut fokussierbar | Große Antennen, regulatorische Limits |
| **mmWave (30–300 GHz)** | kompakte Arrays | Kleine Antennen, enge Bündel | Starke atmosphärische Dämpfung |
| **IR / Laser** | Laser-Power-Beaming | Extrem fokussierbar, hohe Leistungsdichte | Sicherheitsrisiken, Wetterabhängigkeit |
| **Breitband-Mix** | Multi-Wavelength-Beaming | Optimierung über Spektrum | Komplexe Empfänger |

---

# ⚙️ 3. Warum mehrere Wellenlängen?

### ✔ **1. Adaptive Leistungsübertragung**
Atmosphäre dämpft je nach Frequenz unterschiedlich.  
→ Kombination verschiedener Wellenlängen stabilisiert die Übertragung.

### ✔ **2. Nichtlineare Gleichrichter nutzen Spektralmischung**
Rectennas haben oft ein **nichtlineares I‑V‑Verhalten**, das bei Mehrfrequenzanregung höhere Gleichspannungen erzeugen kann.

### ✔ **3. Parallele Energiekanäle**
Mehrere Wellenlängen = mehrere unabhängige Energiepfade.

### ✔ **4. Beamforming über Frequenzen**
Breitbandige Arrays können Strahlen formen, die sich im Raum überlagern.

---

# 🧪 4. Physikalische Grenzen

## 🔸 Strahlungsleistung
Regulatorisch stark limitiert (z. B. ICNIRP‑Grenzwerte).  
Laser-Power-Beaming ist technisch möglich, aber sicherheitskritisch.

## 🔸 Atmosphärische Absorption
- Wasserlinien bei 24 GHz, 60 GHz, 183 GHz  
- Nebel/Staub absorbiert IR/Laser

## 🔸 Effizienz
Fernfeld-WPT ist **grundsätzlich weniger effizient** als Nahfeld-WPT.  
Aktuelle Forschung versucht, Strahlungsverluste zu kompensieren.

---

# 🔧 5. Praktische Anwendungen

### ✔ Drohnen-Ladung per Laser  
### ✔ Energieversorgung von Satelliten / Solarkraftwerken im Orbit  
### ✔ Sensor-Netzwerke (RF‑Powering)  
### ✔ Mikrowellen-Power-Beaming über Kilometer  

---

# 🧭 6. Einordnung für deine Arbeit
Da du viel mit Feldtheorie, Modellierung und numerischen Methoden arbeitest, ist dieses Thema ein ideales Spielfeld für:

- **Mehrfrequenz‑Maxwell-Simulationen**  
- **Nichtlineare Rectenna-Modelle**  
- **Beamforming-Optimierung**  
- **Vergleich von Nahfeld- vs. Fernfeld‑Regimen**  
- **Spreading Resistance vs. Radiative Losses** (schöne Parallele zu deinen Kontaktmodellen)

---

Wenn du willst, kann ich dir als nächsten Schritt eine **physikalisch saubere Modellstruktur** aufbauen — z. B. ein Mehrfrequenz‑Modell für gerichtete Energieübertragung, inklusive Feldgleichungen, Leistungsfluss und Empfängercharakteristik.

Alles klar, Dieter — dann lass uns die Ergebnisse der Websuche sauber einordnen und direkt auf deine Idee der **drahtlosen Energieübertragung mittels gebündelter Strahlung verschiedener Wellenlängen** anwenden.

Die Suchergebnisse bestätigen drei zentrale Punkte:

---

# 🔍 Was die Websuche zeigt

### 📡 1. Fernfeld‑WPT basiert auf gerichteter Strahlung  
Die Literatur beschreibt klar, dass **Mikrowellen‑ oder Laserstrahlung** für drahtlose Energieübertragung über größere Distanzen genutzt wird.  
Beispiel: IEEE‑Arbeit über fokussierte Mikrowellen für Langstrecken‑WPT.

### 🪞 2. Metasurfaces & Beamforming sind Schlüsseltechnologien  
Moderne Ansätze nutzen **Metasurfaces**, um Strahlung extrem präzise zu formen und zu bündeln — auch über mehrere Frequenzen hinweg.  
Das Springer‑Kapitel betont explizit, dass **Mikrowellen und Laser** die beiden dominanten radiativen WPT‑Methoden sind.

### ⚙️ 3. Strahlungsverluste sind ein Kernproblem  
PhysRevApplied zeigt, dass Strahlungsverluste im Fernfeld die Effizienz begrenzen — und dass neue Konzepte versuchen, diese Verluste zu kompensieren.

### 🌐 4. Langstrecken‑WPT ist real und wird aktiv erforscht  
MDPI beschreibt WPT für bewegliche IoT‑Geräte über große Distanzen, also genau das Szenario, in dem gebündelte Strahlung relevant wird.

### 📘 5. Wikipedia bestätigt die Grundkategorien  
WPT wird in Nahfeld (induktiv, resonant) und Fernfeld (Mikrowellen, Laser) eingeteilt.

---

# 🎯 Was das für deine Idee bedeutet

Dein Konzept — **gebündelte Strahlung verschiedener Wellenlängen** — passt perfekt in die moderne Forschung zu:

- **Multi‑Band‑Beamforming**  
- **Metasurface‑gesteuerten Strahlprofilen**  
- **Nichtlinearen Rectennas, die Mehrfrequenzanregung effizienter nutzen**  
- **Atmosphärenkompensation durch spektrale Diversität**

Die Literatur bestätigt also:  
👉 **Mehrere Wellenlängen gleichzeitig zu nutzen ist physikalisch sinnvoll und technisch realistisch.**

---

# 🧠 Warum Mehrwellenlängen‑Beaming besonders spannend ist

## ✔ Höhere Effizienz durch nichtlineare Gleichrichtung  
Rectennas reagieren nichtlinear — Mehrfrequenzanregung kann höhere DC‑Leistung erzeugen.

## ✔ Robustheit gegen atmosphärische Dämpfung  
Ein Mix aus z. B. 5 GHz, 60 GHz und IR kann wetterbedingte Verluste ausgleichen.

## ✔ Parallele Energiekanäle  
Mehrere Wellenlängen = mehrere unabhängige Leistungsströme.

## ✔ Komplexe Strahlprofile  
Metasurfaces erlauben es, **verschiedene Frequenzen unterschiedlich zu fokussieren**.

---

# 🧭 Nächster Schritt

Wenn du möchtest, kann ich dir ein **kompaktes physikalisches Modell** aufbauen, das beschreibt:

- Maxwell‑Ansatz für Mehrfrequenz‑Beams  
- Leistungsfluss (Poynting‑Vektor) für mehrere Wellenlängen  
- Kopplung an eine nichtlineare Rectenna  
- Effizienzabschätzung im Fernfeld  
- Einfluss von Atmosphäre und Divergenz

Sag einfach Bescheid — ich kann das Modell direkt für dich strukturieren.

**Kurzantwort:** Ich baue dir ein kompaktes, physikalisch konsistentes Mehrfrequenz‑Modell für gerichtetes WPT: **Maxwell‑Feldgleichungen im Frequenzbereich**, **Link‑Budget mit atmosphärischer Dämpfung**, und **nichtlineares Rectenna‑Modell** zur DC‑Leistungsvorhersage. Das Modell ist parametrisiert nach Frequenz, Abstand, Antennenapertur und Rectenna‑Nichtlinearität und eignet sich für Simulation und Optimierung.

---

### Modellübersicht (Ziel und Annahmen)
- **Ziel:** Vorhersage der empfangenen DC‑Leistung \(P_{DC}\) bei gleichzeitiger Bestrahlung mit mehreren diskreten Frequenzen \(\{\omega_i\}\).  
- **Annahmen:** lineare Ausbreitung pro Frequenz, Superposition der Felder, stationärer Zustand, Empfänger als geöffnete Apertur mit angeschlossener nichtlinearer Rectenna. Industrielle Anwendungen und Tests orientieren sich an ähnlichen Annahmen.

---

### Feldmodell (Sender → Raum)
Für jede Frequenz \(\omega\) gelten die zeit‑harmonischen Maxwell‑Gleichungen:
\[
\nabla\times \mathbf{E}(\omega) = -j\omega\mu\,\mathbf{H}(\omega),\qquad
\nabla\times \mathbf{H}(\omega) = j\omega\varepsilon\,\mathbf{E}(\omega)+\mathbf{J}(\omega).
\]
Der lokale Leistungsfluss wird durch den komplexen Poynting‑Vektor beschrieben:
\[
\mathbf{S}(\omega)=\tfrac{1}{2}\Re\{\mathbf{E}(\omega)\times\mathbf{H}^*(\omega)\}.
\]
Für gerichtete Arrays kann das Feld durch Phasensteuerung (Beamforming) modelliert werden; Metasurfaces erlauben zusätzliche Formgebung über Frequenzen hinweg.

---

### Link‑Budget (Mehrfrequenz‑Friis mit Dämpfung)
Für jede Frequenz \(\omega_i\) gilt eine erweiterte Friis‑Formel mit atmosphärischer Dämpfung \(\alpha(\omega)\):
\[
P_r(\omega_i)=P_t(\omega_i)\,G_t(\omega_i)\,G_r(\omega_i)\left(\frac{\lambda_i}{4\pi R}\right)^2 e^{-\alpha(\omega_i)R}.
\]
Gesamtfeld am Empfänger ist Summe der komplexen Feldanteile; **Spektrale Diversität** reduziert wetterbedingte Ausfälle.

---

### Rectenna‑Modell (Nichtlinearität, Mehrfrequenzwirkung)
Die Rectenna (Antenne + Gleichrichter) liefert DC‑Leistung durch nichtlineare Gleichrichtung. Für kleine Signale lässt sich die DC‑Komponente approximativ als quadratische Funktion der Feldamplituden schreiben:
\[
P_{DC}\propto \sum_i a_i |E(\omega_i)|^2 + \sum_{i\neq j} b_{ij}\,|E(\omega_i)E(\omega_j)|\cos\phi_{ij},
\]
wobei Kreuzterme (\(b_{ij}\)) durch nichtlineare Mischprodukte entstehen und **Mehrfrequenzanregung** die DC‑Ausbeute erhöhen kann.

---

### Effizienz, Einschränkungen, Parametervergleich

| **Kriterium** | **Mikrowelle (GHz)** | **mmWave (tens–100s GHz)** | **Laser/IR** |
|---|---:|---:|---:|
| **Aperturgröße** | groß | klein | sehr klein |
| **Atmosphärische Dämpfung** | gering–moderat | hoch | sehr hoch (Wetter) |
| **Fokussierbarkeit** | gut | sehr gut | exzellent |
| **Rectenna‑Komplexität** | moderat | höher | opto‑elektrisch nötig |
> Sources: .

**Wichtig:** Fernfeld‑WPT ist regulatorisch und sicherheitstechnisch limitiert; Nahfeld bleibt effizienter für kurze Distanzen.

---

### Nächste Schritte (konkret)
Ich kann dir jetzt **(A)** ein MATLAB/Python‑Pseudocode‑Gerüst liefern, das die obigen Gleichungen numerisch auswertet, oder **(B)** ein parametriertes Simulationssetup (Frequenzen, Apertur, Abstand, Diode‑Kennlinie) erstellen.  

**Sag mir kurz:** welche Frequenzbänder und Reichweiten du priorisieren willst (z. B. 5 GHz / 60 GHz / Laser; 10 m / 1 km), dann generiere ich das passende Modell und Beispielrechnungen.

**Kurzantwort:** Ich erstelle ein kompaktes, parametriertes Mehrfrequenz‑Link‑ und Rectenna‑Modell für **5 GHz** über **1 km** und liefere ein Beispiel‑Link‑Budget mit Effizienzabschätzung; die Rechnung zeigt, dass **Fernfeld‑WPT bei 1 km sehr strenge Antennen‑ und Leistungsanforderungen** hat und regulatorische/sicherheitsrelevante Grenzen entscheidend sind.  

---

### Modell‑Bausteine (kurz)
- **Feldgleichungen:** zeit‑harmonische Maxwell‑Gleichungen pro Frequenz; Leistungsfluss durch den Poynting‑Vektor.  
- **Link‑Budget (erweitert):** Friis mit Aperturgewinnen und atmosphärischer Dämpfung \( \alpha(f) \):  
  \[
  P_r(f)=P_t(f)G_t(f)G_r(f)\left(\frac{\lambda}{4\pi R}\right)^2 e^{-\alpha(f)R}.
  \]
  Link‑Budget‑Methodik und Modellierungsschritte sind Standardpraxis für Funkstrecken.  
- **Rectenna‑Modell (kompakt):** DC‑Komponente approximiert durch quadratische und Kreuzterme:
  \[
  P_{DC}\propto\sum_i a_i|E_i|^2+\sum_{i\neq j} b_{ij}|E_iE_j|\cos\phi_{ij},
  \]
  wobei \(a_i,b_{ij}\) die nichtlinearen Kennwerte der Diode/Antenne repräsentieren.  

---

### Beispielrechnung: 5 GHz, R = 1 km (numerisch)
- **Wellenlänge:** \(\lambda = c/f = 0{,}06\ \text{m}\).  
- **Freiraumdämpfung (FSPL):** \(\mathrm{FSPL_{dB}}=20\log_{10}\!\left(\frac{4\pi R}{\lambda}\right)=106{,}4\ \text{dB}\).  
- **Annahme Beispielparameter:** \(P_t=100\ \text{W}=50\ \text{dBm}\), \(G_t=30\ \text{dBi}\), \(G_r=20\ \text{dBi}\).  
- **Empfangsleistung:** \(P_r\approx 50+30+20-106{,}4 = -6{,}4\ \text{dBm}\) \(\approx 0{,}23\ \text{mW}\) (ohne nennenswerte atmosphärische Dämpfung bei 5 GHz über 1 km).  
- **DC‑Leistung (grobe Abschätzung):** Bei \(P_r\sim0{,}23\ \text{mW}\) sind realistische Rectenna‑Wirkungsgrade **niedrig**; selbst optimistisch \( \eta\approx30\%\) ergibt \(P_{DC}\approx0{,}07\ \text{mW}\). Diese Größenordnung macht klar: **hohe Tx‑Leistung, sehr große Aperturen oder kürzere Distanzen** sind nötig, um nützliche DC‑Leistung zu liefern.

---

### Wichtige Erkenntnisse und Risiken
- **Wichtig:** FSPL bei 5 GHz über 1 km ist ~**106 dB**; das zwingt zu sehr hohen Antennengewinnen oder Sendeleistung, um brauchbare Leistung zu erhalten.  
- **Atmosphäre/Rain:** Bei 5 GHz ist atmosphärische Dämpfung gering, aber Regen/Fading müssen modelliert werden (ITU‑Modelle).  
- **Regulatorik & Sicherheit:** Dauerstrahlung hoher Leistung ist oft limitiert; Laser/IR‑Beaming hat zusätzliche Sicherheitsprobleme.  
- **Praktisch:** Nahfeld‑Lösungen bleiben für hohe Effizienz besser; Fernfeld‑WPT ist möglich, aber teuer und komplex.

---

### Vergleichstabelle (Entscheidungsrelevante Kriterien)

| **Kriterium** | **5 GHz (Beispiel)** | **Schlüsselwirkung** |
|---|---:|---|
| **FSPL @1 km** | **106.4 dB** | sehr hoher Pfadverlust |
| **Aperturbedarf** | groß (30+ dBi) | nötig für Fokus |
| **Atmosphärisch** | gering | Regen/Fading modellieren |
| **Empfangsleistung (Beispiel)** | ~0.23 mW | sehr klein ohne große Antennen |
| **Regulatorik/Sicherheit** | restriktiv | Sendeleistung limitiert |

> Sources: .

---

Wenn du willst, **nimm mir drei kurze Angaben** (gewünschte \(P_t\) in dBm, \(G_t\) und \(G_r\) in dBi) — dann berechne ich sofort ein präzises Link‑Budget, Rectenna‑Kennlinien‑Einbindung und eine Sensitivitätsanalyse für Reichweite, Wetter und Antennengröße.

### Kompaktes Ergebnis zuerst
Ich habe die Parameter selbst festgelegt und dir **zwei Artefakte** vorbereitet:  
1. **Node.js‑Skript (math.js)** zur numerischen Berechnung des Link‑Budgets und der Rectenna‑Abschätzung.  
2. **D3.js‑HTML** zur interaktiven Visualisierung (Empfangsleistung über Distanz und Sensitivitätsanalyse).  

**Kurzbefund (mit gewählten Parametern):** Bei **5 GHz** und **1 km** Entfernung, \(P_t=100\ \text{W}\) (50 dBm), \(G_t=30\ \text{dBi}\), \(G_r=20\ \text{dBi}\) ergibt sich eine Empfangsleistung von etwa **−6.4 dBm** (≈ **0.23 mW**). Realistische DC‑Leistung nach Gleichrichtung liegt im Bereich **0.01–0.1 mW** je nach Rectenna‑Wirkungsgrad.

---

### Annahmen und Formeln
- **Frequenz:** \(f=5\ \text{GHz}\) → \(\lambda=\dfrac{c}{f}=0{,}06\ \text{m}\).  
- **Freiraumdämpfung (FSPL)** in dB:
\[
\mathrm{FSPL_{dB}}=20\log_{10}\!\left(\frac{4\pi R}{\lambda}\right).
\]
- **Friis mit atmosphärischer Dämpfung** (hier vernachlässigbar bei 5 GHz über 1 km):
\[
P_r(dBm)=P_t(dBm)+G_t(dBi)+G_r(dBi)-\mathrm{FSPL_{dB}}-\text{Losses(dB)}.
\]
- **Rectenna DC‑Leistung** (vereinfachte Abschätzung):
\[
P_{DC}=\eta\cdot P_r,
\]
wobei \(\eta\) ein angenommener Wirkungsgrad (z. B. 10–30%) ist. Für Mehrfrequenz‑Effekte müssten Kreuzterme der nichtlinearen Kennlinie berücksichtigt werden.

---

### Node.js Script mit math.js
Speichere das folgende Skript als **wpt_calc.js** und installiere vorher `mathjs` mit `npm install mathjs`. Das Skript erzeugt JSON‑Daten für D3.

```javascript
// wpt_calc.js
const fs = require('fs');
const math = require('mathjs');

// Parameter (frei gewählt)
const f = 5e9; // Hz
const c = 299792458; // m/s
const lambda = c / f;
const Pt_w = 100; // W
const Pt_dbm = 10 * Math.log10(Pt_w * 1000); // dBm
const Gt_dbi = 30; // dBi
const Gr_dbi = 20; // dBi
const distances = math.range(10, 2000, 10).toArray(); // m

function fspl_db(R, lambda) {
  return 20 * Math.log10((4 * Math.PI * R) / lambda);
}

// Optional: einfache atmosphärische Dämpfung (dB/km) bei 5 GHz ~ 0.01 dB/km (vernachlässigbar)
function atm_atten_db(R_km) {
  return 0.01 * R_km;
}

const results = distances.map(R => {
  const R_km = R / 1000;
  const fspl = fspl_db(R, lambda);
  const atm = atm_atten_db(R_km);
  const Pr_dbm = Pt_dbm + Gt_dbi + Gr_dbi - fspl - atm;
  const Pr_mw = Math.pow(10, Pr_dbm / 10); // mW
  // Annahme Rectenna Wirkungsgrad
  const eta_low = 0.1;
  const eta_high = 0.3;
  const Pdc_low_mw = Pr_mw * eta_low;
  const Pdc_high_mw = Pr_mw * eta_high;
  return {
    R_m: R,
    FSPL_dB: +fspl.toFixed(2),
    ATM_dB: +atm.toFixed(4),
    Pr_dBm: +Pr_dbm.toFixed(2),
    Pr_mW: +Pr_mw.toExponential(3),
    Pdc_low_mW: +Pdc_low_mw.toExponential(3),
    Pdc_high_mW: +Pdc_high_mw.toExponential(3)
  };
});

// Write JSON for D3 visualization
fs.writeFileSync('wpt_data.json', JSON.stringify({
  meta: {
    f_Hz: f,
    lambda_m: lambda,
    Pt_W: Pt_w,
    Pt_dBm: +Pt_dbm.toFixed(2),
    Gt_dBi: Gt_dbi,
    Gr_dBi: Gr_dbi
  },
  data: results
}, null, 2));

console.log('Berechnung abgeschlossen. Beispielwert bei 1000 m:');
const r1000 = results.find(r => r.R_m === 1000);
console.log(r1000);
```

**Was das Skript macht**
- Berechnet FSPL über Distanzen 10–1990 m in 10‑m‑Schritten.  
- Schätzt Empfangsleistung \(P_r\) in dBm und mW.  
- Schätzt DC‑Leistung für \(\eta=10\%\) und \(\eta=30\%\).  
- Schreibt `wpt_data.json` für die Visualisierung.

---

### D3.js Visualisierung (HTML)
Speichere als **wpt_viz.html** und öffne die Datei im Browser. Die Visualisierung lädt `wpt_data.json` (vom Node‑Skript erzeugt) und zeigt **Pr (dBm)** und **Pdc (mW)** über Distanz.

```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>WPT Visualization</title>
  <script src="https://d3js.org/d3.v7.min.js"></script>
  <style>
    body { font-family: Arial, sans-serif; }
    .chart { margin: 20px; }
    .axis path, .axis line { stroke: #888; }
  </style>
</head>
<body>
  <h3>Empfangsleistung und DC Leistung vs Distanz</h3>
  <div id="chart" class="chart"></div>

  <script>
  // Load data file generated by Node script
  d3.json('wpt_data.json').then(json => {
    const data = json.data.map(d => ({
      R: d.R_m,
      Pr_dBm: +d.Pr_dBm,
      Pdc_low_mW: +(+d.Pdc_low_mW),
      Pdc_high_mW: +(+d.Pdc_high_mW)
    }));

    const width = 900, height = 420, margin = {top:40,right:80,bottom:50,left:70};
    const svg = d3.select('#chart').append('svg')
      .attr('width', width).attr('height', height);

    const x = d3.scaleLinear().domain(d3.extent(data, d=>d.R)).range([margin.left, width - margin.right]);
    const yLeft = d3.scaleLinear().domain([d3.min(data, d=>d.Pr_dBm)-5, d3.max(data, d=>d.Pr_dBm)+5]).range([height - margin.bottom, margin.top]);
    const yRight = d3.scaleLog().domain([1e-6, d3.max(data, d=>d.Pdc_high_mW)]).range([height - margin.bottom, margin.top]);

    // Axes
    svg.append('g').attr('transform', `translate(0,${height - margin.bottom})`).call(d3.axisBottom(x));
    svg.append('g').attr('transform', `translate(${margin.left},0)`).call(d3.axisLeft(yLeft));
    svg.append('g').attr('transform', `translate(${width - margin.right},0)`).call(d3.axisRight(yRight).ticks(6, ".1e"));

    // Lines
    const linePr = d3.line().x(d=>x(d.R)).y(d=>yLeft(d.Pr_dBm));
    svg.append('path').datum(data).attr('d', linePr).attr('stroke','#1f77b4').attr('fill','none').attr('stroke-width',2);

    const linePdcLow = d3.line().x(d=>x(d.R)).y(d=>yRight(d.Pdc_low_mW));
    svg.append('path').datum(data).attr('d', linePdcLow).attr('stroke','#ff7f0e').attr('fill','none').attr('stroke-width',2).style('stroke-dasharray','6,3');

    const linePdcHigh = d3.line().x(d=>x(d.R)).y(d=>yRight(d.Pdc_high_mW));
    svg.append('path').datum(data).attr('d', linePdcHigh).attr('stroke','#2ca02c').attr('fill','none').attr('stroke-width',2).style('stroke-dasharray','2,2');

    // Labels
    svg.append('text').attr('x', margin.left).attr('y', margin.top-10).text(`f = ${json.meta.f_Hz/1e9} GHz, Pt = ${json.meta.Pt_W} W, Gt=${json.meta.Gt_dBi} dBi, Gr=${json.meta.Gr_dBi} dBi`);
    svg.append('text').attr('transform', `translate(${width/2},${height-10})`).style('text-anchor','middle').text('Distanz R [m]');
    svg.append('text').attr('transform', `translate(15,${height/2}) rotate(-90)`).style('text-anchor','middle').text('Pr [dBm]');
    svg.append('text').attr('transform', `translate(${width-15},${height/2}) rotate(-90)`).style('text-anchor','middle').text('Pdc [mW] (log)');

    // Legend
    const legend = svg.append('g').attr('transform', `translate(${width - margin.right + 10}, ${margin.top})`);
    legend.append('rect').attr('width', 120).attr('height', 70).attr('fill','#fff').attr('stroke','#ccc');
    legend.append('line').attr('x1',10).attr('y1',18).attr('x2',30).attr('y2',18).attr('stroke','#1f77b4').attr('stroke-width',2);
    legend.append('text').attr('x',36).attr('y',22).text('Pr (dBm)');
    legend.append('line').attr('x1',10).attr('y1',36).attr('x2',30).attr('y2',36).attr('stroke','#ff7f0e').attr('stroke-width',2).style('stroke-dasharray','6,3');
    legend.append('text').attr('x',36).attr('y',40).text('Pdc low η=10%');
    legend.append('line').attr('x1',10).attr('y1',54).attr('x2',30).attr('y2',54).attr('stroke','#2ca02c').attr('stroke-width',2).style('stroke-dasharray','2,2');
    legend.append('text').attr('x',36).attr('y',58).text('Pdc high η=30%');
  }).catch(err => {
    d3.select('#chart').append('p').text('Fehler beim Laden der Daten. Stelle sicher, dass wpt_data.json im selben Verzeichnis liegt.');
    console.error(err);
  });
  </script>
</body>
</html>
```

---

### Beispielausgabe (konkrete Zahlen bei 1 km)
- **Wellenlänge:** \(\lambda=0{,}06\ \text{m}\).  
- **FSPL:** \(\mathrm{FSPL_{dB}} \approx 106.4\ \text{dB}\).  
- **Empfangsleistung:** \(P_r \approx -6.4\ \text{dBm} \approx 0.23\ \text{mW}\).  
- **DC‑Leistung (angenommen \(\eta=10\%\)–30\%):** \(P_{DC}\approx 0.023\ \text{mW} \) bis \(0.069\ \text{mW}\).

---

### Hinweise zur Ausführung
1. `npm install mathjs`  
2. `node wpt_calc.js` → erzeugt `wpt_data.json` und gibt Beispielwert für 1000 m aus.  
3. Öffne `wpt_viz.html` im Browser (lokales Dateiladen von JSON funktioniert in manchen Browsern nicht wegen CORS; bei Problemen lokalen Webserver starten, z. B. `npx http-server`).

---

Wenn du willst, **erzeuge ich alternativ sofort ein Python‑Skript**, das die gleichen Rechnungen ausführt und die Visualisierung als SVG/PNG rendert, damit du die Grafik direkt bekommst.

2. Der Wirkungsgrad der Umwandlung ist außerordentlich gut. So gelingt es z.B., Elektroenergie fast völlig in Wärme umzuwandeln, bei
   Motoren mit zunehmender Größe Wirkungsgrade bis 97% zu erziehlen bzw. bei elektrochemischen Reaktionen, wenn die ohmischen
   Widerstände klein sind, Wirkungsgrade nahe 100% zu erreichen

3. Der günstige Wirkungsgrad der Umwandlung in Elektroenergie und umgekehrt erlaubt eine wirtschaftliche Energiespeicherung.
   Das ist für Gleichstrom durch die elektrochemischen Vorgänge in Akkumulatoren möglich, aber auch für andere Stromarten
   durch Pumpspeicherwerke, bei denen in der Speicherphase Wasser mittels Elektroenergie von einem unteren Speicherbecken in ein 
   oberes gepumpt wird und dann zu Spitzenbelastungszeiten als Reserve wie bei einem Wasserkaraftwerk die im Wasser gespeicherte
   Energie zurückgewonnen wird.

   Die direkte Speicherung elektrischer Energie im magnetischen Feld ist nunmehr durch die Entwicklung supraleitender 
   Energiespeicherspulen möglich geworden. Der in der kurzgeschlossenen Luftspule fließende Gleichstrom wird nicht geschwächt,
   da der Widerstand des Supraleitermaterials Null ist. Die magnetische Feldenergie kann hierdurch beliebig lange gespeichert
   bleiben. Die kontinuierliche Wiederverwendung der Enerige erfolgt über eine gesteuerten speziellen Gleichstrommotor, der mit
   einem Generator gekoppelt ist. Sollen die Kosten denen von Pumpspeicherwerken entsprechen, muß eine Energie von mindestend
   1 GW*h gespeichert werden. Vorerst (bezogen auf 1975) ist es jedoch nur gelungen, Speicherspulen für 230kW*h zu konstruieren,
   so daß man, abgesehen von noch anderen Problemen, etwa 5000(!) Großmagnete mit den dazugehörigen Kühl- und Wandleraggregaten
   benötigen würde.

**Kurzantwort:** Supraleitende magnetische Energiespeicher (SMES) speichern elektrische Energie **direkt** als magnetische Feldenergie in einer supraleitenden Spule; die Energie ist \(\displaystyle E=\tfrac{1}{2}LI^{2}\) und bleibt praktisch verlustfrei, solange die Spule gekühlt und supraleitend bleibt.

### Überblick
#### Was ist ein SMES
Ein **SMES** besteht aus einer supraleitenden Spule, einem Leistungselektronik‑Wandler (Lade/Entlade‑Umrichter) und einer Kryokühlung; die Spule wird mit Gleichstrom geladen, erzeugt ein Magnetfeld und speichert so Energie ohne ohmsche Verluste im Leiter selbst. SMES-Systeme reagieren sehr schnell (ms‑Bereich) und haben hohe Wirkungsgrade für Kurzzeitzyklen.

---

### Vergleich: SMES vs. andere Speichertechnologien

| **Kriterium** | **SMES** | **Lithium‑Ionen Batterie** | **Pumpspeicher** |
|---|---:|---:|---:|
| **Energiedichte** | niedrig | hoch | mittel |
| **Leistungsdichte** | sehr hoch | hoch | mittel |
| **Reaktionszeit** | < 1 ms | Sekunden | Minuten |
| **Zyklenfestigkeit** | praktisch unbegrenzt | begrenzt | sehr hoch |
| **Betriebstemperatur** | Tieftemperatur (Kryo) | Umgebungstemperatur | Umgebungstemperatur |

> Sources: .

---

### Technische Grundlagen (wichtig)
- **Energieformel:** \(\displaystyle E=\tfrac{1}{2}LI^{2}\) — Energie \(E\) hängt von Induktivität \(L\) und Strom \(I\) ab; höhere Ströme und größere Induktivitäten erhöhen die gespeicherte Energie.  
- **Verluste:** Im Supraleiter selbst sind ohmsche Verluste vernachlässigbar; reale Verluste entstehen durch Kryokühlung, Leistungselektronik und magnetische Kopplungen; typische Systemverluste über Lade/Entlade‑Zyklen liegen im Bereich **2–10 %** je nach Systemauslegung.  
- **Bauformen:** Kleine SMES für Netzstabilisierung bis hin zu experimentellen Großanlagen; Materialwahl (Niedrigtemperatur‑ vs. Hochtemperatur‑Supraleiter) beeinflusst Kühlaufwand und Kosten.

---

### Anwendungen, Vorteile und Grenzen
- **Vorteile:** *Extrem schnelle Reaktionszeit*, hohe Leistungsdichte, lange Lebensdauer ohne Kapazitätsverlust, präzise Netzregelung (Frequenz‑ und Spannungshaltung).  
- **Nachteile:** **Hohe Kosten pro gespeicherter Energieeinheit**, komplexe Kryotechnik, begrenzte Energiemenge pro Volumen (niedrige Energiedichte) — daher wirtschaftlich vor allem für Kurzzeitanwendungen (Spitzenleistung, Netzstabilisierung).  
- **Risiken/Limitierungen:** Sicherheitsanforderungen bei starken Magnetfeldern, Quench‑Risiko (Verlust der Supraleitung) und Abhängigkeit von zuverlässiger Kühlung; wirtschaftliche Skalierung für Langzeitspeicherung ist derzeit ungeklärt.

---

### Entscheidungsleitfaden (Kurz)
- **Brauchen Sie sehr schnelle Leistung/Netzstabilität?** SMES ist geeignet.  
- **Brauchen Sie große Energiemengen über Stunden?** Batterien oder Pumpspeicher sind meist wirtschaftlicher.  
- **Budget/Komplexität:** SMES erfordert höhere Anfangsinvestitionen und Kryotechnik.

**Ich kann eine kurze Abschätzung für eine gewünschte Leistung/Entladezeit rechnen** (z. B. 1 MW für 10 s) und daraus benötigte \(L\) und \(I\) ableiten — antworte mit „Rechnung: 1 MW/10 s“, dann mache ich die Berechnung.

### Ziel und Annahme
Sie möchten die **Rechnung** für die direkte Speicherung von **1 GWh** elektrischer Energie in einer supraleitenden Spule (SMES). Ich interpretiere **1 GWh = 1 Gigawattstunde** = \(1\cdot10^{9}\,\text{Wh}\).  

---

### Umrechnung in Joule
\[
1\ \text{Wh} = 3600\ \text{J}\quad\Rightarrow\quad
E = 1\ \text{GWh} = 10^{9}\cdot 3600\ \text{J} = 3{,}6\cdot10^{12}\ \text{J}.
\]

---

### Grundformel für SMES
Die in einer Induktivität gespeicherte Energie lautet
\[
\boxed{E=\tfrac{1}{2}L I^{2}}
\]
mit Induktivität \(L\) in Henry und Strom \(I\) in Ampere.

Umgestellt nach \(L\):
\[
L=\frac{2E}{I^{2}}.
\]

---

### Beispielrechnungen (typische Strom‑Skalen)
Ich zeige drei Beispiel‑Paarungen \((I,L)\), die dieselbe Energie \(E=3{,}6\cdot10^{12}\,\text{J}\) liefern.

- **Fall A: \(I=10\ \text{kA}=1{,}0\cdot10^{4}\ \text{A}\)**  
  \[
  L=\frac{2\cdot 3{,}6\cdot10^{12}}{(1{,}0\cdot10^{4})^{2}}
  =\frac{7{,}2\cdot10^{12}}{1{,}0\cdot10^{8}}
  =7{,}2\cdot10^{4}\ \text{H} = 72{,}000\ \text{H}.
  \]

- **Fall B: \(I=100\ \text{kA}=1{,}0\cdot10^{5}\ \text{A}\)**  
  \[
  L=\frac{7{,}2\cdot10^{12}}{(1{,}0\cdot10^{5})^{2}}
  =\frac{7{,}2\cdot10^{12}}{1{,}0\cdot10^{10}}
  =7{,}2\cdot10^{2}\ \text{H} = 720\ \text{H}.
  \]

- **Fall C: \(I=1{,}0\ \text{MA}=1{,}0\cdot10^{6}\ \text{A}\)**  
  \[
  L=\frac{7{,}2\cdot10^{12}}{(1{,}0\cdot10^{6})^{2}}
  =\frac{7{,}2\cdot10^{12}}{1{,}0\cdot10^{12}}
  =7{,}2\ \text{H}.
  \]

**Einschub:** sehr hohe Ströme (100 kA … MA‑Bereich) sind technisch möglich bei supraleitenden Leitern, aber mit enormen mechanischen Kräften, Kühlbedarf und speziellen Stromschienen/Verbindern verbunden.

---

### Volumenabschätzung über magnetische Energiedichte
Die magnetische Energiedichte ist \(\displaystyle u=\frac{B^{2}}{2\mu_{0}}\). Für typische starke Magnetfelder \(B\) (z. B. 5–10 T) ergibt sich:

- Für \(B=5\ \text{T}\): \(u\approx 9{,}95\cdot10^{6}\ \text{J/m}^{3}\).  
  Volumen \(V=E/u \approx 3{,}6\cdot10^{12}/9{,}95\cdot10^{6}\approx 3{,}6\cdot10^{5}\ \text{m}^{3}\).

- Für \(B=10\ \text{T}\): \(u\approx 3{,}98\cdot10^{7}\ \text{J/m}^{3}\).  
  Volumen \(V\approx 3{,}6\cdot10^{12}/3{,}98\cdot10^{7}\approx 9{,}0\cdot10^{4}\ \text{m}^{3}\).

Das heißt: selbst bei sehr hohen Feldstärken wären die benötigten Volumina extrem groß (zehntausende bis hunderttausende Kubikmeter) — praktisch unhandlich und teuer.

---

### Praktische Bewertung und Fazit
- **Skalierbarkeit:** Eine SMES mit **1 GWh** ist technisch möglich **rein rechnerisch**, aber **praktisch extrem unvernünftig**: entweder sehr große Induktivitäten (bei moderaten Strömen) oder extrem hohe Ströme und damit enorme mechanische Beanspruchungen und Kühlanforderungen.  
- **Kernprobleme:** Kryotechnik, Quench‑Risiko, strukturelle Kräfte, Materialkosten und Sicherheitsanforderungen machen eine wirtschaftliche Realisierung für 1 GWh derzeit unrealistisch. SMES eignen sich wirtschaftlich für **Kurzzeitspeicherung** (Sekunden bis Minuten) mit sehr hoher Leistungsdichte, nicht für stundenlange Großspeicher im GWh‑Bereich.  
- **Alternativen:** Für 1 GWh sind Pumpspeicher, große Batteriespeicher (Li‑Ion, Flow‑Batterien) oder andere stationäre Technologien deutlich praktikabler und kosteneffizienter.

---

Wenn Sie möchten, kann ich **eine genauere Auslegung** rechnen, z. B.:
- gewünschte **Spannung**/Strombegrenzung (max. \(I\)), oder  
- Ziel‑Feldstärke \(B\) und Coil‑Geometrie, oder  
- Rechnung für **1 MWh** statt 1 GWh.

Antworten Sie mit einer kurzen Vorgabe (z. B. „Rechne für 100 kA“), dann mache ich die detaillierte Auslegung.

**Kurzantwort:** Für **\(E=1\ \text{GWh}=3{,}6\cdot10^{12}\ \text{J}\)** und **\(I=100\ \text{kA}\)** ergibt sich eine benötigte Induktivität von **\(L=720\ \text{H}\)**; praktisch führt das zu sehr großen Baumaßen, starken mechanischen Kräften und hohen Kryokosten, sodass eine 1 GWh‑SMES wirtschaftlich kaum sinnvoll ist.

### Rechenweg und Ergebnisse
#### Umrechnung und Formel
\[
E=1\ \text{GWh}=10^{9}\,\text{Wh}=3{,}6\cdot10^{12}\ \text{J}.
\]
Gespeicherte Energie einer Spule:
\[
\boxed{E=\tfrac{1}{2}LI^{2}}
\]
Damit umgestellt nach \(L\):
\[
L=\frac{2E}{I^{2}}.
\]
Diese Grundgleichung ist die Basis für SMES‑Auslegungen.

---

### Rechnung für \(I=100\ \text{kA}=1{,}0\cdot10^{5}\ \text{A}\)
\[
L=\frac{2\cdot 3{,}6\cdot10^{12}}{(1{,}0\cdot10^{5})^{2}}
=\frac{7{,}2\cdot10^{12}}{1{,}0\cdot10^{10}}
=7{,}2\cdot10^{2}\ \text{H}=720\ \text{H}.
\]

**Interpretation:** Eine Induktivität von **720 H** bei 100 kA ist extrem groß für eine praktische Spule; sie erfordert viele Windungen oder eine sehr spezielle Geometrie und massive mechanische Struktur.

---

### Abschätzung des Volumens über magnetische Energiedichte
Magnetische Energiedichte \(u=\dfrac{B^{2}}{2\mu_{0}}\) zeigt, dass bei realistischen Feldstärken sehr große Volumina nötig sind. Beispielabschätzungen:

- **Bei \(B=10\ \text{T}\)**: \(u\approx 3{,}98\cdot10^{7}\ \text{J/m}^{3}\) → \(V\approx 9{,}0\cdot10^{4}\ \text{m}^{3}\).  
- **Bei \(B=5\ \text{T}\)**: \(u\approx 9{,}95\cdot10^{6}\ \text{J/m}^{3}\) → \(V\approx 3{,}6\cdot10^{5}\ \text{m}^{3}\).

Das bedeutet **zehntausende bis hunderttausende Kubikmeter** Magnetraum für 1 GWh — praktisch unhandlich und teuer.

---

### Vergleichstabelle (Kernkennzahlen)

| **Größe** | **Wert** |
|---|---:|
| **Energie** | 1 GWh = \(3{,}6\cdot10^{12}\) J |
| **Strom** | \(I=100\ \text{kA}\) |
| **Benötigtes L** | \(720\ \text{H}\) |
| **Volumen (bei 10 T)** | \(\approx 9{,}0\cdot10^{4}\ \text{m}^{3}\) |
| **Praktische Eignung** | ungeeignet für wirtschaftliche Langzeitspeicherung |

> Sources: .

---

### Praktische Bewertung (wichtig)
- **Kurzfristige Eignung:** SMES sind ideal für *Kurzzeit‑Leistungsbereitstellung* und Netzstabilisierung wegen sehr schneller Reaktion.  
- **Langzeitspeicherung:** **Nicht wirtschaftlich** für 1 GWh wegen enormer Größe, Kryokosten, Quench‑Risiko und mechanischer Beanspruchung.  
- **Wichtige Zahlen:** **\(L=720\ \text{H}\)** und Volumina im \(10^{4}\!-\!10^{5}\ \text{m}^{3}\)‑Bereich sind entscheidend.

Wenn Sie möchten, **kann ich ausgehend von \(L=720\ \text{H}\) eine Coil‑Geometrie (Radial‑Abmessungen, Windungszahl) abschätzen** — antworten Sie mit „Geometrie“, dann rechne ich die Abmessungen und mechanischen Spannungen durch.

Die direkte Speicherung elektrischer Energie im elektrischen Feld eines Kondensators ist bei guter Isolation zwischen den Elektroden
möglich. Der Speichervorgang könnte ähnlich wie imvorangegangenen Beispiel mittels eines gesteuerten Maschinensatzes erfolgen.
Es entfallen die kryotechnischen Anlagen, jedoch ist die mit dem realisierbaren Bauelementen erreichbare Energiedichte im
elektrischen Feld zu gering, so daß für eine großtechnische Nutzung das Pumpspeicherwerk noch für lange Zeit die wirtschaftlichste
Lösung der Energiespeicherung bleiben wird.

**Kurzantwort:** Ein Kondensator speichert elektrische Energie *direkt im elektrischen Feld* zwischen seinen Platten; die gespeicherte Energie beträgt **\(W=\tfrac{1}{2}CV^2\)** bzw. alternativ **\(W=\tfrac{Q^2}{2C}=\tfrac{1}{2}QV\)**.

### Was genau wird gespeichert
Beim Laden eines Kondensators wird Arbeit gegen das elektrische Feld verrichtet; diese Arbeit bleibt als **elektrische Feldenergie** zwischen den Elektroden erhalten. Die **Energiedichte** (Energie pro Volumen) im Feld lässt sich schreiben als **\(u=\tfrac{1}{2}\varepsilon E^2\)**, wobei \(\varepsilon\) die Permittivität des Dielektrikums und \(E\) die Feldstärke ist.

### Wichtige Formeln (kompakt)
- **Gesamtenergie:** \(\displaystyle W=\tfrac{1}{2}CV^2\).  
- **In Ladung ausgedrückt:** \(\displaystyle W=\tfrac{Q^2}{2C}\).  
- **Energiedichte im Feld:** \(\displaystyle u=\tfrac{1}{2}\varepsilon E^2\).

### Typische Anwendungen und Größenordnung
Kondensatoren liefern **sehr schnelle** Energieabgaben (z. B. Blitzlicht, Entstör- und Pulsanwendungen) und werden auch zur kurzzeitigen Energiespeicherung in Geräten wie Defibrillatoren eingesetzt. Die tatsächlich gespeicherte Energie ist für gegebene Baugrößen meist **deutlich geringer** als die von Batterien gleicher Masse; deshalb werden Kondensatoren dort eingesetzt, wo **hohe Leistung in kurzer Zeit** wichtiger ist als hohe Energiedichte.

### Vor- und Nachteile (Kurzüberblick)
- **Vorteile:** sehr schnelle Lade-/Entladefähigkeit; hohe Zyklenfestigkeit; einfache Physik; geringe Verluste bei guten Dielektrika.  
- **Nachteile:** geringe Energiedichte im Vergleich zu elektrochemischen Speichern; **Dielektrische Durchschlagsgrenze** begrenzt maximale Spannung; Leckströme und Alterung reduzieren nutzbare Energie über lange Zeit.

### Risiken, Grenzen und praktische Hinweise
- **Durchschlag:** Erhöht man \(V\) zu stark, kommt es zum Durchschlag des Dielektrikums; das begrenzt die maximal speicherbare Energie pro Volumen.  
- **Temperatur und Alterung:** Die Kapazität und Isolationswiderstand ändern sich mit Temperatur und Alter, was zu Energieverlusten führen kann.  
- **Sicherheit:** Beim Entladen können hohe Ströme auftreten; Schutzbeschaltungen (Widerstände, Strombegrenzung) sind oft nötig.  
- **Design-Trade-off:** Höhere Kapazität bei gegebener Spannung erfordert größere Fläche oder dünneres Dielektrikum; dünnere Dielektrika erhöhen aber das Durchschlagrisiko.

---

**Entscheidungspunkte / Fragen zur Konkretisierung**
- **Wofür** soll die Speicherung dienen (Pulsleistung vs. Langzeitspeicherung)?  
- **Welche Spannungen** und **welche Energie** (Joule) werden benötigt?  
- **Platz- und Kostenbegrenzungen**?  
Mit diesen Angaben kann ich **konkret berechnen**, welche Kapazität und Bauform nötig sind und wie groß die erwartete Energie ist.

**Follow‑up (einfach antworten):** Nennen Sie **C** und **V** oder gewünschte Energie in Joule — ich berechne die gespeicherte Energie und zeige praktische Bauteilgrößen.

4. Für die Informationselektrik ergeben sich durch die leichte Umwandlungsmöglichkeit elektrischer Energie in elektromagnetische 
Strahlungsenergie und zurück bei der Informationsübertragung unschätzbare Vorteile. Durch gesteuerte Energieschwankungen läßt sich
jede beliebige Information verschlüsseln, nahezu unbegrenzt weit übertragen und schließlich wiedergeweinnen.

Durch diese Beispiel sei noch einmal unterstrichen, daß alle Naturvorgänge und technische Vorgänge - also auch die Erzeugung,
die Verarbeitung und die Übertragung von Informationen - an Energieänderungen bebunden sind.
