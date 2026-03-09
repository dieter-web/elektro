Solche spannungsabhängigen Widerstände heißen Varistoren. 
Diese sind meist plattenförmig gestaltet und bestehen aus Siliziumkarbid. 
Ihr Widerstand ist bei niedrigen Spannungen relativ groß und bei höheren Spannungen wesentlich kleiner.

**Siliziumkarbid (SiC)** ist eine extrem harte, chemische Verbindung aus Silizium + Kohlenstoff.  

Eigenschaften  
• Formel: SiC  
• Dichte: ≈ 3,2 g cm⁻³  
• Schmelzpunkt > 2300 °C  
• Sehr hohe Härte (nahe Diamant), große Wärmeleitfähigkeit (120–270 W m⁻¹ K⁻¹) und weite Bandlücke (≈ 3,2 eV) – ideale Basis für Hoch­leistungs-Halbleiter.

Vorkommen & Herstellung  
Natürlich tritt SiC als seltenes Mineral „Moissanit“ auf; technisch wird es seit 1893 im Acheson-Ofen aus Quarzsand + Koks bei 2000–2500 °C gewonnen. Für Halbleiter-Wafer nutzt man heute Sublimation im Lely-Prozess oder chemische Gasphasenabscheidung (CVD), um hochreine Einkristalle zu züchten.

Anwendungen  
1. Schleif- und Poliermittel, keramische Gleitringe, Fahrzeugbremsen (klassische Nutzung wegen der enormen Härte).  
2. Struktur- und Hochtemperaturkeramik (Ofenauskleidungen, Lager).  
3. Leistungselektronik: SiC-Schottky-Dioden, MOSFETs und komplette Strommodule für Elektrofahrzeuge, Schnelllader, Photovoltaik-Wechselrichter, 5G-Basisstationen.  
   • Bis zu 50 % weniger Schaltverluste und 3- bis 10-fach höhere Schaltfrequenzen gegenüber reinem Silizium erlauben kleinere, effizientere Systeme; Reichweitengewinne von 10-15 % bei E-Autos sind realistisch.

Dank dieser Kombination aus Temperatur-, Spannungs- und Stromfestigkeit gilt Siliziumkarbid heute als Schlüsselmaterial für nächste Generationen hochkompakter, energieeffizienter Elektronik.

## Siliziumkarbid-Varistor (SiC-VDR)  
Spannungsabhängiger Widerstand und robuster Überspannungsschutz

| Merkmal | SiC-Varistor |
|---------|--------------|
| Grundmaterial | gesinterte Siliziumkarbid-Körner |
| Kennlinien-Exponent α | ≈ 3 – 7 (flacher als ZnO-MOV) |
| Ansprechspannung | 150 V … kV-Bereich durch Dicke skalierbar |
| Energiebelastbarkeit | sehr hoch (bis > 10 kJ, Blitzstrom tauglich) |
| Dauerstrom | deutlich höher als bei Zinkoxid-MOV |
| Temperaturbereich | ‑55 … +175 °C |
| Haupt­einsatzfelder | Industrienetze, Bahntechnik, Zündanlagen, Funkenlöschung, Hochspannungs-Ableiter |

SiC-Varistoren bestehen aus vielen leitfähigen SiC-Kristallen, zwischen denen Sperrschicht-Übergänge („Mikrodioden“) entstehen. Wird die externe Spannung erhöht, brechen immer mehr Sperrschichten auf → der Gesamtwiderstand sinkt steil nichtlinear. Unterhalb der Schwellspannung liegt der Widerstand im MΩ-Bereich, oberhalb im Ω- bis mΩ-Bereich .

### Funktionsgleichung (Durchbruch­bereich)

$$
I = I_\text{V}\!\left(\frac{U}{U_\text{V}}\right)^{\alpha}
\qquad\Longleftrightarrow\qquad
U = U_\text{V}\!\left(\frac{I}{I_\text{V}}\right)^{1/\alpha}
$$

* \(U_\text{V}\): Varistor- oder Schwellspannung bei definiertem Prüfstrom  
* \(\alpha\): Kennlinien­exponent (SiC ≈ 3–7; ZnO ≈ 30–60)

### Vergleich SiC vs. ZnO-MOV

| | SiC | ZnO-MOV |
|---|---|---|
| Steilheit (α) | flacher → größere Spannungsrestwerte | sehr steil → bessere Clamp-Spannung |
| Energie- und Stromfestigkeit | höher (Keramik dichter, bessere Wärmeleitung) | niedriger |
| Leckstrom | höher | niedriger |
| Alterung | praktisch keine Drift | driftet nach starken Pulsen |
| Baugröße | dicker, meist Scheiben 5 – 50 mm | dünnere Chips/Scheiben |

### Typische Anwendungen

1. **Hochleistungs-Überspannungsableiter**  
   • Mittel- bis Hochspannungsnetze (10–110 kV)  
   • Traktions- und Bahntechnik (25 kV AC / 3 kV DC)  
   • Blitzschutz in Antennen- und Funkeinrichtungen  
2. **Zünd- und Funkenlöschschaltungen**  
   • Magnetzündungen, IGBT-Snubber, Motorklemmen  
3. **Schaltnetzteile & Antriebe**  
   • Ableitung von Einschaltspitzen auf DC-Bus, Motor-Abgang  
4. **Impulsformung / Dämpfung**  
   • in Fernsehzündtrafos, Plasma-Starter, Stoßstromgeneratoren  

### Dimensionierungs­schritte

1. **Schwellspannung \(U_\text{V}\)** wählen  
   $$
   U_\text{V} \ge 1.4\,U_\text{max(rms)}
   $$
   für Wechselnetze (40 – 100 % Headroom je nach Norm).

2. **Energiebelastung** \(W = \tfrac12 C U^2\) oder Blitzparameter (8/20 µs, 10/350 µs) berechnen; SiC-Varistor mit  
   $$
   W_\text{surge} \ge W_\text{max,app}
   $$

3. **Impulsstrom** \(I_\text{p}\) < \(I_\text{surge,max}\).

4. **Restspannung** überprüfen:  
   \(U_\text{clamp} = U_\text{V}\,(I/I_\text{V})^{1/\alpha}\)  
   Muss unter der zulässigen Überspannungs­grenze der Last bleiben.

### Beispielrechnung

Gegeben: 400 V-AC Industrie-Netz, gewünscht Schutz vor 5 kA (8/20 µs) Blitz­strom.  
• Nenn-Scheitel: \(U_\mathrm{max}=565 V\).  
• Gewählt: SiC-Varistor 750 V.  
  – Prüfstrom 1 mA → \(U_\text{V}=750 V\).  
  – α = 5.  
  – Strom 5 kA →  
    \(U_\text{clamp}=750\,(5000/1)^{1/5}=750\cdot(5000)^{0.2}\approx750\cdot5.0\approx3.75 kV\).  
  – Zulässig für angeschlossene Isolationsklasse 4 kV.  
  – Pulsenergie ≈ \(W = \int U I dt \approx ½ U_\text{clamp} I t = 0.5·3.75 kV·5 kA·20 µs ≈ 187 J\).  
  → Varistor muss min. 200 J @ 8/20 µs verkraften (SiC-Scheiben 32 mm erfüllen das).

### Schaltungshinweise

```ascii
        L1
   o----#####----+---------o Last
  Netz-         ( )       
  Phase          |  SiC
                 |  Varistor
   o-------------+---------o N
        N
```

• **Parallel­betrieb**: stets direkt an den Klemmen, kurze Leitung → geringste Induktivität.  
• **Thermosicherung** empfiehlt sich, da Varistor im worst case thermisch durchgehen kann.  
• **Serien-Drossel** erhöht Blitzfestigkeit durch Strombegrenzung.

### Gehäuseformen

| Bauform | Datenblatt-Spannung | Impulsenergie |
|---------|--------------------|---------------|
| Scheibe Ø 5 mm | < 150 V | < 1 J |
| Scheibe Ø 32 mm | 220 – 1 kV | > 200 J |
| Stabbauform | Zünd­geber | kW-Impulsspitzen |
| Hochspannungs-Stacks | 10 – 110 kV | kJ-Bereich |

---

### Fazit  
Siliziumkarbid-Varistoren sind **spannungsabhängige Widerstände** für grobe bis sehr hohe Energiebelastungen. Sie reagieren langsamer und mit höherem Restspannungswert als Zinkoxid-MOV, liefern dafür aber enorme Strom- und Dauerleistung sowie exzellente Temperatur- und Alterungs­festigkeit – ideal für harte Industrie-, Bahn- und Blitzschutzaufgaben .

---

: Elektronik-Kompendium.de: „VDR – Varistor“, Abschnitt Material & Kennlinie (SiC-Varistor) (Zugriff 2025-06-12)   
: Wikipedia „Varistor“, Abschnitte Aufbau und Kennlinie; Vergleich SiC vs. ZnO (Zugriff 2025-06-12)   
: Rainer’s Elektronikpage, „Varistor Funktion“, Typenübersicht (SiC-VDR) (Zugriff 2025-06-12) 

## Nichtlinearität von (scheinbar) „ohmschen“ Widerständen – diesmal durch das elektrische Feld selbst  
*(nicht durch Selbst­erwärmung, darüber haben wir schon gesprochen)*  

---

### 1 | Grundidee  
Ohmsches Gesetz (macroskopisch)  
$$
\mathbf{J}= \sigma\,\mathbf{E}\;\; \Longrightarrow\;\; I = \sigma \,\frac A L \, U
$$  

Die Leitfähigkeit σ wird im Schulbuch als konstant angenommen.  
Tatsächlich hängt σ in vielen Festkörpern – besonders bei hohen Feldstärken – **selbst vom Feld**. Damit gilt  

$$
\sigma = \sigma\bigl(|\mathbf E|\bigr)\quad\Longrightarrow\quad
R(U)=\frac{L}{\sigma(|E|)A}\, .
$$

Damit wird die U-I-Kennlinie gekrümmt, obwohl sich das Bauteil kaum aufheizt.

---

### 2 | Drei wichtige Mikro-Mechanismen

| Mechanismus | Kurzbeschreibung | Typisches Bauteil / Material |
|-------------|------------------|------------------------------|
| **(a) Korngrenzen-Dioden** | Leitfähige Körner (z. B. ZnO, SiC) sind durch dünne, verarmte Sperrschichten getrennt. Unter kleiner Spannung dominiert Sperr­schicht-Widerstand; oberhalb einer Feldstärke bricht die Barriere (Avalanche/Tunnel) → steiler Stromanstieg. | Metalloxid-Varistor (MOV), SiC-VDR |
| **(b) Feld-induzierte Ladungsträgerdichte** | In schwach dotierten Halbleitern kann das Feld Band­biegung erzeugen. Mehr Träger → größere σ. | Hochwertige Silizium-Widerstände im integrierten Präzisions-D/A (VCR-Effekt) |
| **(c) Ladungsträger-Geschwindigkeits­begrenzung / Space-Charge-Limited Current** | Bei starken Feldern sättigt die Drift­geschwindigkeit (v_sat) bzw. es bildet sich eine Raumladungswolke → *I ∝ Uᵖ* mit p > 1 oder p < 1 je nach Zustand. | Dünne Polymer- oder Oxidschichten, Bauelemente im pA-Bereich (Photozellen, µ-Amp-Isolatoren) |

---

### 3 | Kennzahl: **VCR – Voltage Coefficient of Resistance**  

$$
\frac{\Delta R}{R} \;=\; \text{VCR}\;\,U
\qquad (\text{linear angenähert für kleine }U)
$$

| Technologie | VCR (typisch) | Relevanz |
|-------------|---------------|----------|
| Metall-Folien (Z-Foil) | < 0.05 ppm/V | praktisch ideal |
| Dünne NiCr-Filme | 0.1 … 1 ppm/V | nur bei Präzisions-Audio/ADC kritisch |
| Kohle­schicht | 10 … 200 ppm/V | messbare Klirr­verzerrung |
| SiC-Varistor | 10 ⁶ ppm/V (α ≈ 5) | gewollt – Überspannungs­ableiter |

*Audio-Beispiel:* 10 Vpp über 100 kΩ Kohle → ΔR/R ≈ 0.1 % → Klirr ≈ –60 dB.

---

### 4 | Gleichungen für Varistor-artig steile Kennlinien  

Empirisch  
$$
I = k\,U^{\alpha},\quad\alpha = 2\ldots60
$$  

Differentieller Widerstand  
$$
r_d = \frac{\mathrm dU}{\mathrm dI} = \frac 1{\alpha}\frac{U}{I}
$$

Damit lässt sich die Restspannung eines Varistors im Blitzstrom leicht schätzen (siehe vorige Antwort).

---

### 5 | Praktische Beispiele & Gegenmaßnahmen

| Anwendung | Nutzen / Problem | Designer-Trick |
|-----------|------------------|----------------|
| **MOV-Ableiter** | Gewollte Nichtlinearität – > kA-Impulse abklemmen | Mehrere Scheiben stapeln, Thermo-Fuse anschalten |
| **Präzisions-HV-Teiler (kV-Messung)** | U-abhängiger R verfälscht Teilungsverhältnis | Kaskade vieler kleiner Metallfilm-Widerstände → geringe Feldstärke pro Segment |
| **Audio-Poti aus Kohle** | Feld-Nichtlinearität erzeugt THD, gerade bei geringen Strömen unsichtbar | Leitplastik- oder Cermet-Poti mit VCR < 1 ppm/V |
| **IGBT-Gate-Widerstand** | Hohe dv/dt + SiC-VDR-Scheibe parallel → RC-Snubber spart Platz | gewünscht |
| **Sensor-Bridge on-chip** | Unter 100 mV arbeitet alles linear; >1 V droht Drift | Mess-IC speist Brücken oft mit 2.5 V max |

---

### 6 | Blick in die Zukunft  
Mit GaN- und SiC-Leistungsteilen steigt die Klemmen­spannung > 650 V – die integrierten Gate-Resistoren und Shunt-Mess-Widerstände werden wieder verstärkt VCR-Einflüsse zeigen. Layout-Entwickler zerlegen daher Hoch-Ω-Widerstände in viele „serielle Finger“ über die Fläche, um das E-Feld zu senken.

---

## Quintessenz  
Auch ohne nennenswerte Selbst­erwärmung kann **das elektrische Feld selbst** den ohmschen Wert verbiegen.  
– Im Alltag meist winzige *Voltage-Coefficient-of-Resistance*-Effekte (ppm/V).  
– In Varistor-Keramiken und dünnen Halbleiterschichten entstehen jedoch **gewaltig nicht­lineare Kennlinien** – genau das Prinzip moderner Überspannungs­schutz- und Spezial­widerstände.

---

**Quelle:***
Grundlagen der Elektrotechnik Band 1, Autorenkollektiv 9.,durchgesehene Auflage, S. 32
Mikrosoft Copilot

---


