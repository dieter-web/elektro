#### Querschichtung

In einem Leiter, der aus zwei Teilstücken unterschiedlicher Leitfähigkeit besteht, soll sich ein homogenes
elektrisches Strömungsfeld ausbilden. Die Grenze zwischen den Stoffen verläuft quer zur Strömungsrichtung.
Es ist die Frage zu klären, wie sich Stromdichte und Feldstärke in den beiden Feldbereichen verhalten
(praktisches Beispiel: die Schichten in einem Si-Flächengleichrichter).
Da die Stromstärke in beiden Bereichen gleich groß ist, gilt dies auch für die Stromdichten.
Das Strömungsfeld wird durch die Querschichtung nicht verändert. Die Feldstärke ändert sich beim Übergang
in einen anderen Stoff.

Du gehst genau den nächsten sauberen Schritt: jetzt **Querschichtung** → zwei Materialien **parallel** im Querschnitt, längs in Stromrichtung.

Ich formuliere es so, dass du es direkt als 1D‑Modell in deine Skripte gießen kannst.

---

### Geometrie und Setup

Wir haben einen Leiter der Länge \(L\), Querschnitt in y‑Richtung geschichtet:

\[
\text{Stromrichtung: } x \\
\text{Querschnitt: } A = A_A + A_B
\]

- **Material A:** Querschnittsfläche \(A_A\), Leitfähigkeit \(\sigma_A\), Widerstand \(R_A\)  
- **Material B:** Querschnittsfläche \(A_B\), Leitfähigkeit \(\sigma_B\), Widerstand \(R_B\)  

Im Längsschnitt:

```
Stromrichtung x →
---------------------------------
|              |                |
|  Material A  |  Material B    |
|   Fläche A_A |   Fläche A_B   |
---------------------------------
```

Die beiden Zweige liegen **parallel zwischen denselben Potentialen**.

---

### Elektrisches Feld und Spannung

Da beide Materialien parallel liegen und an die **gleichen Endpunkte** angeschlossen sind, gilt:

- **gleiche Spannung** über beide Materialien:
  
  \[
  U_A = U_B = U
  \]

- damit auch **gleiches Längsfeld** (wenn Länge \(L\) gleich ist):

  \[
  E_A = E_B = E = \frac{U}{L}
  \]

Das ist ein schöner Kontrast zur Längsschichtung: dort ist \(J\) gleich und \(E\) springt, hier ist \(E\) gleich und \(J\) springt.

---

### Stromdichte in den beiden Materialien

Ohm/Drude lokal:

\[
\vec{J} = \sigma \vec{E}
\]

Da \(E\) in beiden Teilen gleich ist:

\[
J_A = \sigma_A E, \qquad J_B = \sigma_B E
\]

Also:

\[
\frac{J_A}{J_B} = \frac{\sigma_A}{\sigma_B}
\]

Der **bessere Leiter** (größere \(\sigma\)) trägt die größere **Stromdichte**.

---

### Ströme in den Zweigen

Ströme:

\[
I_A = J_A A_A = \sigma_A E A_A
\]
\[
I_B = J_B A_B = \sigma_B E A_B
\]

Gesamtstrom:

\[
I = I_A + I_B = E (\sigma_A A_A + \sigma_B A_B)
\]

Stromaufteilung:

\[
\frac{I_A}{I_B} = \frac{\sigma_A A_A}{\sigma_B A_B}
\]

Also: Strom teilt sich proportional zu **\(\sigma \cdot A\)**.

---

### Parallele Widerstände / effektive Leitfähigkeit

Einzelwiderstände (je Material über Länge \(L\)):

\[
R_A = \rho_A \frac{L}{A_A} = \frac{L}{\sigma_A A_A}, \qquad
R_B = \rho_B \frac{L}{A_B} = \frac{L}{\sigma_B A_B}
\]

Parallel:

\[
\frac{1}{R_\text{ges}} = \frac{1}{R_A} + \frac{1}{R_B}
= \frac{\sigma_A A_A}{L} + \frac{\sigma_B A_B}{L}
\]

Damit:

\[
R_\text{ges} = \frac{L}{\sigma_A A_A + \sigma_B A_B}
\]

Wenn du den gesamten Querschnitt \(A = A_A + A_B\) als **effektiven homogenen Leiter** mit Leitfähigkeit \(\sigma_\text{eff}\) beschreiben willst:

\[
R_\text{ges} = \rho_\text{eff} \frac{L}{A} = \frac{L}{\sigma_\text{eff} A}
\]

Vergleich mit oben:

\[
\frac{1}{\sigma_\text{eff} A}
= \frac{1}{\sigma_A A_A + \sigma_B A_B}
\]

also

\[
\sigma_\text{eff} = \frac{\sigma_A A_A + \sigma_B A_B}{A}
\]

Das ist ein **flächengewichtetes Mittel** der Leitfähigkeiten – im Gegensatz zum **harmonischen Mittel** bei Längsschichtung.

---

### Feldlinienbild

- **E-Feldlinien**: in beiden Materialien parallel, gleiche Richtung, gleiche Stärke \(E\).  
- **Stromlinien**: dichter im Bereich des besser leitenden Materials, da dort \(J\) größer ist.  
- An der **Grenzfläche** ist:
  - die **tangentiale Komponente von \(E\)** stetig,
  - die **normale Komponente von \(J\)** kann springen, weil \(\sigma\) springt.

Damit kannst du in einer 2D‑Skizze schön zeigen: gleiche Feldlinien, aber **unzureichende Leitfähigkeit → weniger Stromlinien**.

---

### Verbindung zu Kontaktwiderständen / Schichtstrukturen

Der Fall ist direkt relevant, wenn du z. B.:

- **Kontaktzone mit „Flecken“ verschiedenen Materials** im Querschnitt anschaust,  
- **Kompositleiter** (z. B. Kupfer + Stahl) parallel führst,  
- oder numerisch eine **2D‑Diskretisierung** mit Zellen unterschiedlicher \(\sigma\) im Querschnitt aufbaust.

---

Wenn du willst, können wir als nächsten Schritt:

- ein kleines Perl‑Skript machen, das für gegebene \(\sigma_A, \sigma_B, A_A, A_B, L, U\)  
  **\(E\), \(J_A\), \(J_B\), \(I_A\), \(I_B\), \(\sigma_\text{eff}\)** ausgibt,  
- oder sogar ein **2D‑Gittermodell** definieren, das deine spätere Laplace‑Lösung vorbereitet.

#### Längsschichtung
In einem sehr lang gestreckten homogenen elektrischen Strömungsfeld soll parallel zu den Feldlinien die Grenze zweier Stoffe
mit verschiedenen Leitfähigkeiten verlaufen. Über beide Schichten liegt die gleiche Spannung. Deshalb ist in beiden Materialien
die elektrische Feldstärke gleich groß.
Bei Längsschichtung wir das Felstärkenfeld nicht verändert. Die Feldstärke ist in beiden Schichten gleich.

Gern, Dieter — das ist ein schönes, klassisches Problem der Elektrodynamik: **ein elektrisches Feld in einem Leiter**, der **aus zwei längs geschichteten Materialien** besteht. Genau dein Terrain: Kontaktwiderstände, Stromverteilung, Feldlinien.

Ich gebe dir eine kompakte, aber präzise physikalische Darstellung, die du direkt in deine Modelle übersetzen kannst.

---

# ⚡ Elektrisches Feld in einem Leiter mit Längsschichtung zweier Stoffe

Wir betrachten einen langen Leiter, der aus zwei Materialien **A** und **B** besteht, die **in Stromrichtung hintereinander** angeordnet sind:

```
|---- Material A ----|---- Material B ----|
```

Querschnitt konstant, Stromfluss in x‑Richtung.

---

## 🧲 1. Grundannahmen
- stationärer Gleichstrom  
- isotrope Materialien  
- keine seitlichen Strompfade  
- Querschnitt \(A\) konstant  
- spezifische Leitfähigkeiten:  
  \(\sigma_A\), \(\sigma_B\)  
- spezifische Widerstände:  
  \(\rho_A = 1/\sigma_A\), \(\rho_B = 1/\sigma_B\)

---

# 📐 2. Elektrisches Feld in jedem Abschnitt

Im stationären Fall gilt im Leiter:

\[
\vec{J} = \sigma \vec{E}
\]

und

\[
I = J \cdot A = \text{konstant}
\]

Daraus folgt:

\[
E_A = \frac{I}{\sigma_A A}, \qquad
E_B = \frac{I}{\sigma_B A}
\]

**Das elektrische Feld ist in jedem Material konstant**, aber **unterschiedlich groß**, wenn die Leitfähigkeiten verschieden sind.

---

# 🔁 3. Sprung des elektrischen Feldes an der Grenzfläche

Da der Strom kontinuierlich ist, aber die Leitfähigkeit springt, springt auch das Feld:

\[
\frac{E_A}{E_B} = \frac{\sigma_B}{\sigma_A}
\]

Ein schlechter Leiter (kleine σ) hat ein **größeres Feld**, ein guter Leiter ein **kleineres Feld**.

---

# 🔌 4. Gesamtspannung

Für Längen \(L_A\) und \(L_B\):

\[
U = E_A L_A + E_B L_B
\]

oder als Widerstände:

\[
U = I (R_A + R_B)
\]

mit

\[
R_A = \rho_A \frac{L_A}{A}, \qquad
R_B = \rho_B \frac{L_B}{A}
\]

---

# 🧲 5. Feldlinienbild (qualitativ)

Da der Querschnitt konstant ist, bleiben die Feldlinien **parallel**.  
An der Grenzfläche ändert sich nur die **Dichte der Feldlinien**:

- in Material A: wenige Linien → kleines Feld  
- in Material B: viele Linien → großes Feld  

Das ist exakt die grafische Umsetzung von \(E = J/\sigma\).

---

# 🧪 6. Spezialfall: extrem unterschiedliche Leitfähigkeiten

### a) \(\sigma_A \gg \sigma_B\)  
Material A fast ideal leitend → \(E_A \approx 0\)  
Fast die gesamte Spannung fällt über B ab.

### b) \(\sigma_B \gg \sigma_A\)  
Umgekehrt: Spannung fällt über A ab.

---

# 🔧 7. Relevanz für deine Modelle (Holm, Kontaktwiderstand)

Dieses einfache 1D‑Modell ist die Grundlage für:

- **Kontaktwiderstände mit Schichtsystemen**  
- **Stromverdrängung in heterogenen Leitern**  
- **Temperaturabhängige Leitfähigkeitsprofile**  
- **Mehrschichtige Kontaktflächen (z. B. Oxid + Metall)**  

Wenn du willst, kann ich dir das sofort in **Perl** als Modellskript formulieren — inklusive Plot‑Ausgabe für \(E(x)\), \(J\), \(U\), und Materialsprung.

---

Wenn du magst, kann ich als nächsten Schritt **ein vollständiges Perl‑Modell für die Längsschichtung zweier Leiter** erstellen, inklusive Feldprofil und Spannungsabfall.

#### Allgemeiner Fall
Bei konkreten technischen Gebilden ist fast immer eine Kombination beider Grenzschichten zu beobachten, die Schräggrenzschicht.
Bei inhomogenen Feldbildern ergeben sich weitere Komplikationen bei der Felddarstellung.

##### Schrägschichtung

#### Laplace-Welt
Die „**echte Laplace‑Welt**“ ist meine kurze, etwas saloppe Bezeichnung für den Punkt, an dem man nicht mehr mit vereinfachten 1D‑Modellen (Längs‑, Quer‑, Schrägschichtung) arbeitet, sondern die **vollständige Leitungs‑ bzw. Potentialgleichung** löst:

\[
\nabla \cdot \big( \sigma(\vec r)\, \nabla \varphi(\vec r) \big) = 0
\]

Das ist die **Laplace‑ bzw. Poisson‑Gleichung** für stationäre Ströme in inhomogenen Leitern.

Sobald du diese Gleichung löst, bist du in der „echten“ Laplace‑Welt.

---

# 🌍 Was bedeutet „echte Laplace‑Welt“ konkret?

## 1. **Volle 2D‑ oder 3D‑Geometrie**
Nicht mehr nur „Schicht A links, Schicht B rechts“, sondern:

- beliebige Formen  
- schräge Grenzflächen  
- gekrümmte Grenzflächen  
- Inseln, Einschlüsse, Poren  
- Kontaktflächen mit realistischen Topografien  

Die Gleichung funktioniert für jede Geometrie.

---

## 2. **Beliebige räumliche Leitfähigkeitsverteilung**
\(\sigma(\vec r)\) kann:

- stückweise konstant sein (Schichten, Einschlüsse)  
- kontinuierlich variieren (Temperaturgradienten, Dotierungsprofile)  
- anisotrop sein (Tensoren)  
- rotationsschief sein (z. B. schräg geschichtete Komposite)

Damit kannst du reale Materialien abbilden, nicht nur idealisierte.

---

## 3. **Feldlinien und Stromlinien entstehen automatisch**
Du musst nicht mehr überlegen:

- „Springt E oder springt J?“  
- „Welche Komponente ist stetig?“  
- „Wie teilt sich der Strom auf?“

Die Lösung \(\varphi(x,y)\) liefert:

\[
\vec E = -\nabla \varphi, \qquad
\vec J = \sigma \vec E
\]

Und daraus ergeben sich Feldlinien, Stromlinien, Stromverteilung, Hotspots usw. automatisch.

---

## 4. **Grenzbedingungen sind realistisch**
Du kannst:

- Dirichlet (Spannung vorgegeben)  
- Neumann (Stromfluss vorgegeben)  
- gemischte Bedingungen  
- isolierte Ränder  
- reale Kontaktflächen  

kombinieren.

Damit modellierst du echte Messaufbauten.

---

## 5. **Effektive Leitfähigkeiten ergeben sich aus der Lösung**
Statt Formeln wie:

- Längsschichtung → harmonisches Mittel  
- Querschichtung → arithmetisches Mittel  
- Schrägschichtung → Tensor

bekommst du:

\[
\sigma_\text{eff} = \frac{I}{U} \frac{L}{A}
\]

aus dem Gesamtstrom der numerischen Lösung.

Das ist exakt, unabhängig von Geometrie und Winkel.

---

# 🔧 Warum das für dich relevant ist

Du arbeitest bereits an:

- Kontaktwiderständen  
- Feldlinien  
- Schichtsystemen  
- schrägen Grenzflächen  
- realistischen Materialkombinationen  

Die Laplace‑Gleichung ist **die** Grundlage für all diese Probleme.

Deine bisherigen Modelle (Längs‑, Quer‑, Schrägschichtung) sind **Spezialfälle**, die man analytisch lösen kann.  
Die „echte Laplace‑Welt“ ist der **allgemeine Fall**, den man numerisch löst.

---

# 🎯 Kurz gesagt

**Die „echte Laplace‑Welt“ ist die Welt, in der du die vollständige Potentialgleichung löst und damit reale Geometrien, reale Materialverteilungen und echte Strom‑ und Feldverteilungen bekommst.**

---

Wenn du möchtest, kann ich dir zeigen, wie man ein **kleines 2D‑Laplace‑Modell** aufsetzt, das schräg geschichtete Materialien simuliert – perfekt als nächster Schritt nach deinen analytischen Modellen.


##### Technische Anwendung
