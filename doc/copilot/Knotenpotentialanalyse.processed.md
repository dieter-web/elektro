Ja, absolut – das ist sogar ein sehr eleganter Weg, um komplexe elektrische Netzwerke mathematisch zu analysieren. Du sprichst hier von zwei fundamentalen Konzepten aus der Netzwerktheorie:

---

### 🔧 Widerstandsmatrix vs. Leitwertmatrix

| Matrixtyp         | Beschreibung                                                                 |
|-------------------|------------------------------------------------------------------------------|
| **Widerstandsmatrix (R)** | Enthält die Widerstände zwischen Knoten. Wird selten direkt verwendet, da nicht additiv. |
| **Leitwertmatrix (G)**     | Enthält die Leitwerte (1/R). Wird in der Knotenpotentialanalyse (KPA) verwendet. Additiv! |

---

### 🧠 Warum die **Leitwertmatrix** bevorzugt wird

- **Additivität**: Wenn du mehrere Zweige zwischen denselben Knoten hast, kannst du die Leitwerte einfach addieren.
- **Numerische Stabilität**: Leitwertmatrizen sind oft besser konditioniert für numerische Verfahren.
- **Knotenpotentialanalyse (KPA)**: Die Methode basiert direkt auf der Leitwertmatrix.

---

### 🧮 Beispiel: Zwei Widerstände parallel

Angenommen, du hast zwei Widerstände $ R_1 = 100\,\Omega $ und $ R_2 = 200\,\Omega $ zwischen Knoten A und B.

**Leitwerte:**
- $ G_1 = \frac{1}{R_1} = 0{,}01\,\text{S} $
- $ G_2 = \frac{1}{R_2} = 0{,}005\,\text{S} $

**Gesamtleitwert zwischen A und B:**
- $ G_{AB} = G_1 + G_2 = 0{,}015\,\text{S} $

---

### 🧩 Matrixstruktur bei Knotenpotentialanalyse

Für ein Netzwerk mit $ n $ Knoten ergibt sich eine $ n \times n $ Leitwertmatrix $ G $, wobei:

- Diagonalelemente: Summe aller Leitwerte, die **in den Knoten hineinführen**
- Nebendiagonalelemente: **Negative** Summe der Leitwerte zwischen zwei Knoten

Beispiel für 3 Knoten:

```text
G = | G11  -G12  -G13 |
    | -G21  G22  -G23 |
    | -G31 -G32   G33 |
```

---

### 🧠 Fazit

✅ **Ja**, du kannst Schaltungen über die Leitwertmatrix modellieren und addieren – das ist sogar der Standard in der Netzwerkanalyse. Die Widerstandsmatrix ist weniger gebräuchlich, da Widerstände nicht direkt additiv sind bei parallelen Zweigen.

Wenn du magst, kann ich dir ein konkretes Beispiel mit D3.js zeigen, wie man eine Leitwertmatrix aus einer SVG-Schaltung ableitet – oder sogar ein kleines Tool bauen, das aus einer grafischen Schaltung automatisch die Matrix erzeugt. Wäre das spannend für dich?

# Knotenpotentialanalyse (Nodal Analysis) im Überblick

**Kurzantwort:**  
Bei der Knotenpotentialanalyse ermittelst du die Spannungen aller Knoten gegenüber einem gewählten Referenzpunkt (Masse), indem du für jeden Knoten die Summe der abfließenden Ströme (KCL) aufstellst, sie in eine Leitwertmatrix und einen Quellenvektor überführst und schließlich das lineare Gleichungssystem  
$$
\mathbf{G} \,\mathbf{V} = \mathbf{I}
$$  
löst.

---

## 1. Vorgehen in fünf Schritten

1. Bezugsknoten (Masse) festlegen.  
2. Alle übrigen Knoten nummerieren (V₁, V₂, …).  
3. Für jeden Knoten KCL aufstellen:  
   – Summe der Leitwerte $G_{ij}$ zu Nachbarknoten multipliziert mit Spannungsdifferenzen  
   – = eingespeister Strom $I_i$.  
4. Leitwertmatrix $\mathbf{G}$ und Stromvektor $\mathbf{I}$ zusammenfassen.  
5. Lineares Gleichungssystem lösen: $\mathbf{V} = \mathbf{G}^{-1} \mathbf{I}$.

---

## 2. Konkretes Beispiel

Schaltung mit zwei Knoten (außer Masse) und zwei Stromquellen:

```
     I₁ = 1 A
       ↓
  ┌───┴───────┐
  │ Node 1    │
  │    R₃=4Ω  │
 R₁=2Ω        R₃
  │    ⟳      │
  └───┬───────┘
       │
      Masse
```

Erweitert um Node 2:

```
    I₁=1 A           I₂=2 A
      ↓               ↓
  ┌───┴───┐       ┌───┴───┐
  │  N1   │───────│  N2   │
  │ R₁=2Ω │  R₂=4Ω│ R₃=3Ω │
  └───┬───┘       └───┬───┘
      │               │
     Masse           Masse
```

Elementwerte:

| Element | Wert    | Leitwert $G = 1/R$ |
|---------|---------|-----------------------|
| R₁      | 2 Ω     | 0,5 S                |
| R₂      | 4 Ω     | 0,25 S               |
| R₃      | 3 Ω     | 0,333… S             |
| I₁      | 1 A     | –                     |
| I₂      | 2 A     | –                     |

---

### 2.1 Aufstellen der KCL-Gleichungen

Für Node 1 (N1):  
$$
G_1\,V_1 \;+\; G_2\,(V_1 - V_2) \;=\; I_1
$$

Für Node 2 (N2):  
$$
G_3\,V_2 \;+\; G_2\,(V_2 - V_1) \;=\; I_2
$$

---

### 2.2 Leitwertmatrix und Quellenvektor

$$
\mathbf{G}
=
\begin{pmatrix}
G_1 + G_2  &  -G_2      \\
-\,G_2     &  G_2 + G_3 
\end{pmatrix}
=
\begin{pmatrix}
0{,}5 + 0{,}25  &  -0{,}25     \\
-0{,}25        &  0{,}25 + 0{,}3333
\end{pmatrix}
=
\begin{pmatrix}
0{,}75      &  -0{,}25    \\
-0{,}25     &  0{,}5833
\end{pmatrix}
$$

$$
\mathbf{I}
=
\begin{pmatrix}
I_1 \\[6pt] I_2
\end{pmatrix}
=
\begin{pmatrix}
1 \\[3pt] 2
\end{pmatrix}
$$

Gleichungssystem:
$$
\begin{pmatrix}
0{,}75 & -0{,}25 \\
-0{,}25 & 0{,}5833
\end{pmatrix}
\begin{pmatrix}
V_1 \\[3pt] V_2
\end{pmatrix}
=
\begin{pmatrix}
1 \\[3pt] 2
\end{pmatrix}
$$

---

### 2.3 Lösung

Determinante $D = 0{,}75\cdot0{,}5833 - ( -0{,}25)^2 = 0{,}375$.  
Inverse:
$$
\mathbf{G}^{-1} = \frac{1}{D}
\begin{pmatrix}
0{,}5833 & 0{,}25    \\
0{,}25   & 0{,}75
\end{pmatrix}
=
\begin{pmatrix}
1{,}5556 & 0{,}6667 \\
0{,}6667 & 2{,}0000
\end{pmatrix}
$$

Spannungen:
$$
\begin{pmatrix}
V_1 \\[3pt] V_2
\end{pmatrix}
=
\mathbf{G}^{-1}\,\mathbf{I}
=
\begin{pmatrix}
1{,}5556\cdot1 + 0{,}6667\cdot2 \\[6pt]
0{,}6667\cdot1 + 2{,}0000\cdot2
\end{pmatrix}
=
\begin{pmatrix}
2{,}889\text{ V} \\[6pt]
4{,}667\text{ V}
\end{pmatrix}
$$

---

## 3. Weiterführende Aspekte

- Umgang mit Spannungsquellen: Superknotenmethode oder Modifizierte Knotenpotentialanalyse (MNA).  
- Automatische Matrix-Generierung aus einer grafischen D3.js-Schaltung.  
- Erweiterung auf Frequenzbereich (komplexe Leitwerte $Y = G + jB$).  
- Integration eines kleinen Web-Tools, das anhand eingegebener Werte die Matrix aufbaut und löst.

Möchtest du sehen, wie man die Knotenpotentialanalyse mit D3.js interaktiv in eine Web-Ansicht integriert oder direkt aus einer skizzierten Schaltung automatisch die Matrix aufbaut?

# Schritt-für-Schritt-Knotenpotentialanalyse

Gerne erkläre ich die Knotenpotentialanalyse anhand der Beispielschaltung in klaren Einzelschritten.

---

## 1. Schaltung und Bezugsknoten

In unserer Schaltung gibt es zwei Knoten außerhalb der Masse sowie eine gemeinsame Referenz (Masse).  
Node 1 erhält eine Stromquelle $I_1 = 1\ \mathrm{A}$ und ist über $R_1 = 2\ \Omega$ mit Masse verbunden.  
Node 2 bekommt die Stromquelle $I_2 = 2\ \mathrm{A}$ und ist über $R_3 = 3\ \Omega$ mit Masse verbunden.  
Zwischen Node 1 und Node 2 liegt der Widerstand $R_2 = 4\ \Omega$.  

---

## 2. Knoten benennen und Potenziale festlegen

Wir wählen Masse als Referenz mit $V_{\text{Masse}} = 0\ \mathrm{V}$.  
Den übrigen Knoten ordnen wir die Spannungen $V_1$ (für Node 1) und $V_2$ (für Node 2) zu.  

---

## 3. Leitwerte berechnen

Für jeden Widerstand berechnen wir den Leitwert $G = 1/R$:

- $G_1 = 1/2\ \text{S} = 0{,}5\ \text{S}$  
- $G_2 = 1/4\ \text{S} = 0{,}25\ \text{S}$  
- $G_3 = 1/3\ \text{S} \approx 0{,}3333\ \text{S}$  

---

## 4. KCL-Gleichungen aufstellen

An Node 1 gilt nach Kirchhoffs Stromgesetz (Summe abfließender Ströme = eingespeister Strom):
$$
G_1\,V_1 \;+\; G_2\,(V_1 - V_2) \;=\; I_1
$$

An Node 2 lautet die Gleichung:
$$
G_3\,V_2 \;+\; G_2\,(V_2 - V_1) \;=\; I_2
$$

---

## 5. Leitwertmatrix und Quellenvektor

Wir fassen die Koeffizienten in Matrixform zusammen:
$$
\mathbf{G}
=
\begin{pmatrix}
G_1 + G_2  &  -G_2      \\
-\,G_2     &  G_2 + G_3 
\end{pmatrix}
=
\begin{pmatrix}
0{,}75      &  -0{,}25    \\
-0{,}25     &  0{,}5833
\end{pmatrix}
\quad
\mathbf{I}
=
\begin{pmatrix}
I_1 \\[3pt] I_2
\end{pmatrix}
=
\begin{pmatrix}
1 \\[3pt] 2
\end{pmatrix}
$$

Das Gleichungssystem lautet damit:
$$
\mathbf{G}\,\mathbf{V} = \mathbf{I}
\quad\text{mit}\quad
\mathbf{V} = \begin{pmatrix} V_1 \\ V_2 \end{pmatrix}
$$

---

## 6. Gleichungssystem lösen

Zunächst die Determinante:
$$
D = 0{,}75 \cdot 0{,}5833 - (-0{,}25)^2 = 0{,}375
$$

Die Inverse der Matrix ergibt sich zu
$$
\mathbf{G}^{-1}
= \frac{1}{D}
\begin{pmatrix}
0{,}5833 & 0{,}25    \\
0{,}25   & 0{,}75
\end{pmatrix}
=
\begin{pmatrix}
1{,}5556 & 0{,}6667 \\
0{,}6667 & 2{,}0000
\end{pmatrix}
$$

Schließlich berechnen wir
$$
\begin{pmatrix}
V_1 \\ V_2
\end{pmatrix}
=
\mathbf{G}^{-1}\,\mathbf{I}
=
\begin{pmatrix}
2{,}889\ \mathrm{V} \\[3pt]
4{,}667\ \mathrm{V}
\end{pmatrix}
$$

---

## 7. Interpretation der Ergebnisse

Der Knoten 1 liegt bei $V_1 \approx 2{,}89\ \mathrm{V}$ gegenüber Masse.  
Der Knoten 2 beträgt $V_2 \approx 4{,}67\ \mathrm{V}$.  
Alle Ströme und Spannungen im Netz können nun aus diesen Potenzialen abgeleitet werden.  

---

Zusätzlich könntest du Konzepte wie Spannungsquellen in die Analyse aufnehmen (MNA), die Methode in den Frequenzbereich erweitern (komplexe Leitwerte) oder eine interaktive Web-Anwendung bauen, die automatisch aus einer D3.js-Skizze die Leitwertmatrix generiert.

# Einbinden von Spannungsquellen in die Knotenpotentialanalyse

Um Spannungsquellen einzubeziehen, nutzt man Superknoten und ergänzt die KCL um Spannungs­be­schrän­kungs­gleichungen. So lässt sich jede ideale Spannungsquelle lückenlos integrieren.

---

## 1. Spannungsquelle am Bezugsknoten

Wenn eine ideale Spannungsquelle direkt zwischen einem beliebigen Knoten und der Masse liegt, setzt man:

- Für eine Quelle $V_s$ zwischen Knoten $k$ und Masse:  
  $$
    V_k = V_s
  $$

- Keine weitere KCL am Knoten schreiben, da seine Spannung fix vorgegeben ist.

---

## 2. Spannungsquelle zwischen zwei Frei­knoten: Superknoten

Bei einer Spannungsquelle $V_s$ zwischen zwei Nicht-Referenzknoten $i$ und $j$ gehen wir so vor:

1. **Superknoten bilden**  
   Fasse Knoten $i$ und $j$ samt dazwischenliegender Quelle zu einem Superknoten zusammen.  

2. **KCL für den Superknoten**  
   Schreibe die Summe aller Ströme, die aus **beiden** Teilknoten abfließen, gleich Null:
   $$
     \sum_{\ell} G_{\ell,i}\,(V_i - V_\ell)
     \;+\;
     \sum_{m} G_{m,j}\,(V_j - V_m)
     \;=\; 0
   $$
   wobei $\ell$, $m$ alle benachbarten Knoten außerhalb des Superknotens sind.

3. **Spannungs­beschränkungs­gleichung hinzufügen**  
   $$
     V_i - V_j = V_s
   $$
   (Vorzeichen je nach Orientierung der Quelle.)

---

## 3. Beispiel

Angenommen, zwischen Node 1 und Node 2 liegt eine 5 V-Quelle, zusätzlich zu den vorher betrachteten Widerständen und Stromquellen:

1. **Superknoten**: Umfasst Node 1 und Node 2.  
2. **KCL**:
   $$
     G_1V_1 + G_2(V_1 - V_3)
     + G_3(V_2 - V_4)
     = I_1 + I_2
   $$
   (Beispielhaft – je nach restlichem Netz bilden sich einzelne Terme.)
3. **Spannungsbedingung**:
   $$
     V_1 - V_2 = 5\ \mathrm{V}
   $$

Danach löst du das erweiterte Gleichungssystem aus KCL und Spannungsbedingung.

---

## 4. Systematisch mit MNA

Für umfangreiche Netze empfiehlt sich die *Modifizierte Knotenanalyse* (MNA):

- Baue die Leitwertmatrix wie gewohnt auf,  
- Erweitere sie um zusätzliche Zeilen/Spalten für jede ideale Spannungsquelle,  
- Trage in der Quellenmatrix die entsprechenden „1“ und „-1“ in den Spannungs­gleichungs­zeilen ein.

Dabei erhältst du ein lineares Gleichungssystem  
$$
\begin{pmatrix}
\mathbf{G} & \mathbf{B} \\
\mathbf{C} & \mathbf{0}
\end{pmatrix}
\begin{pmatrix}
\mathbf{V} \\[3pt]
\mathbf{I}_V
\end{pmatrix}
=
\begin{pmatrix}
\mathbf{I} \\[3pt]
\mathbf{E}
\end{pmatrix}
$$
– mit $\mathbf{E}$ als Spannungsquellen­vektor und $\mathbf{I}_V$ als gesuchten Quellen­strömen.

---

## Ausblick und weiterführende Themen

- Spannungs­quellen mit Innen­widerstand (Quelle plus Serien­widerstand)  
- Einbindung gesteuerter Quellen (VCCS, CCCS, VCVS, CCVS)  
- Frequenz­bereich: komplexe Leitwerte und Impedanzen  
- Numerische Verfahren: automatische Netzliste → MNA-Code in Python oder SPICE  
- Nicht­lineare Quellen: Newton-Raphson-Verfahren zur Lösung  

Möchtest du ein konkretes MNA-Beispiel in Python sehen oder eine Netzliste für SPICE erstellen?

## Node.js-Skript zur Lösung mit der Knotenleitwertmatrix

Im folgenden Beispiel verwenden wir das npm-Paket **mathjs**, um die Knotenleitwertmatrix zu invertieren und die Knotenspannungen sowie Zweigströme zu berechnen.

---

### 1. Vorbereitung

- Installiere mathjs im Projektordner:  
  ```bash
  npm install mathjs
  ```

- Lege eine Datei `knotenanalyse.js` an.

---

### 2. Skript `knotenanalyse.js`

```javascript
// Import mathjs
const math = require('mathjs');

// Leitwerte in Siemens
const G1 = 1 / 2;    // R1 = 2 Ω
const G2 = 1 / 4;    // R2 = 4 Ω
const G3 = 1 / 4;    // R3 = 4 Ω

// Knotenleitwertmatrix G und Stromvektor I
const G = [
  [G1 + G3,    -G3    ],
  [   -G3  , G2 + G3  ]
];
const I = [1, 0];      // I1 = 1 A an Knoten 1, keine Quelle am Knoten 2

// Knotenspannungen V = G⁻¹ * I
const V = math.multiply(math.inv(G), I);

// Zweigströme berechnen
const I_R1 = G1 * V[0];
const I_R3 = G3 * (V[0] - V[1]);
const I_R2 = G2 * V[1];

// Ausgabe
console.log(`Knotenspannungen:
  V1 = ${V[0].toFixed(2)} V
  V2 = ${V[1].toFixed(2)} V

Zweigströme:
  I_R1 (K1→0) = ${I_R1.toFixed(2)} A
  I_R3 (K1→K2) = ${I_R3.toFixed(2)} A
  I_R2 (K2→0) = ${I_R2.toFixed(2)} A
`);
```

---

### 3. Ausführen und Ergebnis

```bash
node knotenanalyse.js
```

Erwartete Ausgabe:

  V1 = 1.60 V  
  V2 = 0.80 V  

  I_R1 = 0.80 A  
  I_R3 = 0.20 A  
  I_R2 = 0.20 A  

---

Möchtest du stattdessen eine reine Handrechnung mit dem klassischen Knotenspannungsverfahren oder eine Implementierung in einem anderen Umfeld (z. B. Python) sehen?