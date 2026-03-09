### Elektrischer Widerstand eines geraden Kreiskegelstumpfs

Für einen geraden Kreiskegelstumpf mit Höhe \(h\), unteren Radius \(r_1\) und oberen Radius \(r_2\), aus homogenem Material mit spezifischem Widerstand \(\rho\), ergibt die Integration über die variierende Querschnittsfläche den Widerstand:
\[
R \;=\; \frac{\rho\, h}{\pi\, r_1\, r_2}.
\]

---

### Herleitung

- **Geometrie:** Der Radius entlang der Achse variiert linear:

  \[
  r(z) \;=\; r_1 + \frac{r_2 - r_1}{h}\, z,
  \quad z \in [0,h].
  \]

- **Differenzieller Widerstand:** Mit \(A(z)=\pi r(z)^2\) gilt

  \[
  dR \;=\; \frac{\rho}{A(z)}\, dz \;=\; \frac{\rho}{\pi\, r(z)^2}\, dz.
  \]

- **Integration:**

  \[
  R \;=\; \int_0^h \frac{\rho}{\pi\, r(z)^2}\, dz
  \;=\; \frac{\rho}{\pi} \int_0^h \frac{dz}{\bigl(r_1 + \frac{r_2 - r_1}{h}\, z\bigr)^2}
  \;=\; \frac{\rho\, h}{\pi\, r_1\, r_2}.
  \]

Diese Aufgabenstellung ist ein klassischer Übungstyp in Elektrotechnik/Physik; die obige Form folgt direkt aus der axialen Stromführung und der linearen Radialfunktion des Kegelstumpfs.

---

### Plausibilitätschecks und Grenzfälle

- **Zylinder als Spezialfall:** Setzt man \(r_1=r_2=r\), erhält man
  \[
  R \;=\; \frac{\rho\, h}{\pi r^2},
  \]
  was der Standardformel \(R=\rho\, l/A\) mit \(l=h\) und \(A=\pi r^2\) entspricht.

- **Spitzkegel-Grenzfall:** Für \(r_2 \to 0\) divergiert \(R \to \infty\), was erwartet ist, da der Querschnitt zur Spitze entfällt (kein leitender Querschnitt).

- **Symmetrie:** Die Formel ist symmetrisch in \(r_1\) und \(r_2\); die Reihenfolge der Anschlüsse spielt für den ohmschen Wert keine Rolle.

---

### Praktische Hinweise

- **Temperaturabhängigkeit:** Falls relevant, kann man nachträglich die temperaturabhängige Korrektur über \(R(T)=R_0\,[1+\alpha\,(T-T_0)]\) anwenden, mit \(\alpha\) des Materials.

- **Kontaktphysik vs. Durchgangswiderstand:** Die obige Formel beschreibt den Volumen- bzw. Durchgangswiderstand des Körpers. Zusätzliche Kontaktwiderstände an den Stirnflächen (z. B. nach Holm/Greenwood) sind separat zu berücksichtigen, wenn reale Kontakte eine endliche Übergangsfläche und Rauheit besitzen.

Wenn du magst, setze ich dir das als kleines Haskell‑Modul oder Bash/Node‑Snippet auf, damit du \(R\) aus \(\rho, h, r_1, r_2\) reproduzierbar berechnest und Grenzfälle prüfst.

Perfekt 👍 — dann fasse ich es für dich noch einmal klar zusammen:

Der Widerstand \(R\) eines geraden Kreiskegelstumpfs mit Höhe \(h\), unterem Radius \(r_1\), oberem Radius \(r_2\) und spezifischem Widerstand \(\rho\) ergibt sich zu

\[
R = \frac{\rho \cdot h}{\pi \cdot r_1 \cdot r_2}.
\]

- **Herleitung:** Integration über die Länge mit dem variierenden Querschnitt \(A(z) = \pi r(z)^2\).
- **Kontrolle:** Für \(r_1 = r_2\) reduziert sich die Formel auf den bekannten Zylinderwiderstand \(R = \rho h / (\pi r^2)\).
- **Grenzfall:** Wenn einer der Radien gegen null geht, wird der Widerstand unendlich groß.

Damit hast du eine kompakte Formel, die du direkt in deine Berechnungen oder Skripte einbauen kannst.

👉 Soll ich dir ein kleines Beispielskript in Haskell oder Node.js schreiben, das diese Formel berechnet und Grenzfälle prüft?

Alles klar Dieter 🤓 — hier bekommst du beide Varianten, einmal in **Haskell** und einmal in **Node.js**. Beide Skripte berechnen den Widerstand eines geraden Kreiskegelstumpfs aus den Parametern \(\rho, h, r_1, r_2\) und prüfen Grenzfälle.

---

## 🔹 Haskell-Version

```haskell
-- Widerstand eines Kreiskegelstumpfs
-- R = (ρ * h) / (π * r1 * r2)

module FrustumResistance where

resistance :: Double -> Double -> Double -> Double -> Double
resistance rho h r1 r2
  | r1 <= 0 || r2 <= 0 = error "Radien müssen > 0 sein"
  | h  <= 0            = error "Höhe muss > 0 sein"
  | otherwise          = rho * h / (pi * r1 * r2)

-- Beispiel:
-- resistance 1.7e-8 0.05 0.01 0.02
-- Kupfer (ρ≈1.7e-8 Ωm), Höhe 5 cm, Radien 1 cm und 2 cm
```

---

## 🔹 Node.js-Version

```javascript
// Widerstand eines Kreiskegelstumpfs
// R = (ρ * h) / (π * r1 * r2)

function resistance(rho, h, r1, r2) {
  if (r1 <= 0 || r2 <= 0) throw new Error("Radien müssen > 0 sein");
  if (h <= 0) throw new Error("Höhe muss > 0 sein");
  return (rho * h) / (Math.PI * r1 * r2);
}

// Beispiel:
const rho = 1.7e-8;   // spezifischer Widerstand von Kupfer [Ωm]
const h   = 0.05;     // Höhe 5 cm
const r1  = 0.01;     // 1 cm
const r2  = 0.02;     // 2 cm

console.log("Widerstand:", resistance(rho, h, r1, r2), "Ohm");
```

---

### ✨ Hinweise
- Beide Varianten prüfen Eingaben auf sinnvolle Werte.
- Du kannst die Funktionen leicht erweitern, z. B. mit Temperaturkorrektur \(R(T) = R_0 [1 + \alpha (T-T_0)]\).
- Für Grenzfälle wie \(r_2 \to 0\) bekommst du eine Division durch Null → unendlicher Widerstand.

---

Möchtest du, dass ich dir zusätzlich ein kleines **Diagramm in D3.js** baue, das den Widerstand in Abhängigkeit von \(r_2\) visualisiert? Das würde deine Frontend-Toolchain schön ergänzen.

**Kurzantwort:** Ein D3.js‑Diagramm kann den Zusammenhang \(R(r_2) = \frac{\rho h}{\pi r_1 r_2}\) sehr anschaulich darstellen. Dabei fällt der Widerstand hyperbolisch mit wachsendem oberen Radius \(r_2\).

---

### Idee für die Visualisierung

- **Achsen:**
  - *x‑Achse*: oberer Radius \(r_2\) (von 0,005 m bis 0,05 m).
  - *y‑Achse*: Widerstand \(R\) in Ohm.
- **Parameterwerte:**
  - \(\rho = 1.7 \times 10^{-8}\,\Omega\cdot m\) (Kupfer).
  - \(h = 0.05\,m\).
  - \(r_1 = 0.01\,m\).
- **Kurvenform:** Hyperbel, da \(R \propto 1/r_2\).
- **Darstellung:** Linie mit Tooltip, der bei Mouseover den aktuellen \(r_2\) und \(R\) anzeigt.

---

### Beispielcode in D3.js

```html
<!DOCTYPE html>
<meta charset="utf-8">
<body>
<svg width="600" height="400"></svg>
<script src="https://d3js.org/d3.v7.min.js"></script>
<script>
const rho = 1.7e-8;
const h   = 0.05;
const r1  = 0.01;

// Datenpunkte erzeugen
const data = d3.range(50).map(i => {
  const r2 = 0.005 + i * (0.05 - 0.005) / 49;
  const R  = (rho * h) / (Math.PI * r1 * r2);
  return {r2, R};
});

const svg = d3.select("svg"),
      margin = {top:20,right:30,bottom:40,left:60},
      width  = +svg.attr("width") - margin.left - margin.right,
      height = +svg.attr("height") - margin.top - margin.bottom;

const g = svg.append("g").attr("transform",`translate(${margin.left},${margin.top})`);

const x = d3.scaleLinear().domain([0.005,0.05]).range([0,width]);
const y = d3.scaleLinear().domain([0,d3.max(data,d=>d.R)]).range([height,0]);

g.append("g").attr("transform",`translate(0,${height})`).call(d3.axisBottom(x));
g.append("g").call(d3.axisLeft(y));

const line = d3.line().x(d=>x(d.r2)).y(d=>y(d.R));
g.append("path").datum(data).attr("fill","none").attr("stroke","steelblue").attr("stroke-width",2).attr("d",line);

// Tooltip
const tooltip = d3.select("body").append("div")
  .style("position","absolute").style("background","#eee")
  .style("padding","4px").style("border","1px solid #999")
  .style("display","none");

g.selectAll("circle").data(data).enter().append("circle")
  .attr("cx",d=>x(d.r2)).attr("cy",d=>y(d.R)).attr("r",3).attr("fill","red")
  .on("mouseover",(event,d)=>{
    tooltip.style("display","block")
           .html(`r₂=${d.r2.toFixed(3)} m<br>R=${d.R.toExponential(3)} Ω`);
  })
  .on("mousemove",(event)=>{
    tooltip.style("left",(event.pageX+10)+"px").style("top",(event.pageY-20)+"px");
  })
  .on("mouseout",()=>tooltip.style("display","none"));
</script>
```

---

### Erklärung

- Die Funktion `resistance(r2)` wird direkt aus der Formel berechnet.
- Mit `d3.range(50)` werden 50 Punkte zwischen 0,005 m und 0,05 m erzeugt.
- Die Linie zeigt den kontinuierlichen Verlauf, die roten Punkte dienen als Interaktionspunkte für Tooltips.
- Das Diagramm macht sofort sichtbar: **je größer der obere Radius \(r_2\), desto kleiner der Widerstand.**

---

👉 Wenn du magst, kann ich dir auch eine Variante bauen, die zusätzlich die Abhängigkeit von der Höhe \(h\) zeigt, z. B. als Heatmap oder als zweites Diagramm.

Verstanden, Dieter 👍 — das Diagramm selbst kann ich dir hier nicht direkt als eingebettete Grafik anzeigen. Was ich dir aber geben kann, ist der komplette **D3.js‑Code**, den du lokal im Browser ausführen kannst. Damit siehst du die Kurve sofort.

---

## So gehst du vor

1. Erstelle eine neue Datei, z. B. `frustum_resistance.html`.
2. Kopiere den folgenden Code hinein.
3. Öffne die Datei im Browser (Firefox, Chrome, Edge).
4. Du bekommst ein interaktives Diagramm mit Tooltip.

---

## Vollständiger HTML/D3‑Code

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <title>Widerstand vs. r₂</title>
  <script src="https://d3js.org/d3.v7.min.js"></script>
</head>
<body>
<svg width="600" height="400"></svg>
<script>
const rho = 1.7e-8;   // spezifischer Widerstand Kupfer [Ωm]
const h   = 0.05;     // Höhe 5 cm
const r1  = 0.01;     // unterer Radius 1 cm

// Datenpunkte erzeugen
const data = d3.range(50).map(i => {
  const r2 = 0.005 + i * (0.05 - 0.005) / 49;
  const R  = (rho * h) / (Math.PI * r1 * r2);
  return {r2, R};
});

const svg = d3.select("svg"),
      margin = {top:20,right:30,bottom:40,left:60},
      width  = +svg.attr("width") - margin.left - margin.right,
      height = +svg.attr("height") - margin.top - margin.bottom;

const g = svg.append("g").attr("transform",`translate(${margin.left},${margin.top})`);

const x = d3.scaleLinear().domain([0.005,0.05]).range([0,width]);
const y = d3.scaleLinear().domain([0,d3.max(data,d=>d.R)]).range([height,0]);

g.append("g").attr("transform",`translate(0,${height})`).call(d3.axisBottom(x));
g.append("g").call(d3.axisLeft(y));

const line = d3.line().x(d=>x(d.r2)).y(d=>y(d.R));
g.append("path").datum(data).attr("fill","none").attr("stroke","steelblue").attr("stroke-width",2).attr("d",line);

// Tooltip
const tooltip = d3.select("body").append("div")
  .style("position","absolute").style("background","#eee")
  .style("padding","4px").style("border","1px solid #999")
  .style("display","none");

g.selectAll("circle").data(data).enter().append("circle")
  .attr("cx",d=>x(d.r2)).attr("cy",d=>y(d.R)).attr("r",3).attr("fill","red")
  .on("mouseover",(event,d)=>{
    tooltip.style("display","block")
           .html(`r₂=${d.r2.toFixed(3)} m<br>R=${d.R.toExponential(3)} Ω`);
  })
  .on("mousemove",(event)=>{
    tooltip.style("left",(event.pageX+10)+"px").style("top",(event.pageY-20)+"px");
  })
  .on("mouseout",()=>tooltip.style("display","none"));
</script>
</body>
</html>
```

---

Damit kannst du das Diagramm direkt sehen.
👉 Willst du, dass ich dir zusätzlich eine **Heatmap über \(h\) und \(r_2\)** baue, sodass du beide Parameter gleichzeitig im Blick hast?