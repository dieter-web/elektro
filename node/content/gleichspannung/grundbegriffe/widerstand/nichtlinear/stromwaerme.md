Wird die Nichtlinearität eines Widerstands von der Temperatur bestimmt, so liegt die Ursache in der Wärmebewegung 
der Atome oder Moleküle, wobei zwei Gruppen zu unterscheiden sind: 
Bei der ersten Gruppe nimmt mit der zunehmenden Bewegung der Atome der Widerstand zu, da die Leitungselektronen 
mit den Atomen um so öfter zusammenstoßen. Die Temperatur des Leiters hängt zunächst von seiner Umgebung ab. 
Bei Stromfluß erhöht die Leitertemperatur, weil die Elektronen Energie an die Atome abgeben und 
die Wärmebewegung vergrößern. Die Widerstandserhöhung ist bei den einzelnen Leiterwerkstoffen verschieden groß.
der zweiten Gruppe tritt bei einer Temperaturerhöhung eine Widerstandsverringerung ein. 
Es kommt zwar auch eine Vergrößerung der Wärmebewegung zustande, aber es überwiegt die Erscheinung, 
daß in diesen Stoffen mit zunehmender Temperatur mehr bewegliche Ladungsträger frei werden, 
die sich der gerichteten Bewegung anschließen und somit bei konstanter Spannung den Strom vergrößern. Nach R = Uab / I
bedeutet das eine Widerstandsverringerung.

## Nicht­linearität “ganz normaler” ohm­scher Wider­stände  
### … wenn der Strom sich selbst aufheizt  

Ein idealer Widerstand hätte die Kenn­linie  

$$
U = R_0 \, I
$$

(gerade Linie durch den Ursprung).  
In Wirklichkeit erzeugt jeder Strom _Joule­wärme_  

$$
P = I^{2}\,R
$$

und jeder Widerstand hat eine end­liche Wärme­abgabe­fähigkeit.  
Sobald die Verlustwärme nicht sofort weg­kann, steigt die Chip- oder Draht­temperatur um  

$$
\Delta T = P \; \vartheta_{\text{th}}
$$

mit der **thermischen Wider­stand** \( \vartheta_{\text{th}}\,[\text{K}/\text{W}]\) des Bauteils zu seiner Umge­bung.  

Gleichzeitig ändert sich der ohm­sche Wert über den (linearen) Temperatur­koeffizienten  

$$
R(T) = R_0 \bigl(1+\alpha\,\Delta T\bigr)
$$

– für Metalle positiv, für NTC-Keramiken negativ.  

Koppeln wir beides, erhalten wir eine selbst­konsistente Gleichung:

$$
R = R_0\Bigl[1 + \alpha\,\bigl(I^2R\vartheta_{\text{th}}\bigr)\Bigr]
$$

Aufgelöst nach \(R\):

$$
R = \frac{R_0}{1 - \alpha\,R_0\,I^{2}\vartheta_{\text{th}}}
$$

und damit die _nicht­lineare_ Kenn­linie

$$
U(I)= I\,\frac{R_0}{1 - \alpha\,R_0\,I^{2}\vartheta_{\text{th}}}.
$$

Bei kleinen Strömen kann man den Nenner entwickeln:

$$
U \;\approx\; I R_0 
          \;+\; I^{3}\,\bigl(\alpha R_0^{2}\vartheta_{\text{th}}\bigr)
          \;+\; \mathcal O(I^{5}),
$$

d. h. zur linearen Beziehung kommt ein **kubischer** Anteil – der Klassiker für sanfte Symme­trie­bruch-Nicht­lineari­täten.

---

## Vier praxis­relevante Facetten

| Facette | Auswirkung / Beispiel |
|---------|-----------------------|
| 1 ) **Positive α (Metall, SiC, Wolfram-Glühdraht)** | Widerstand steigt → Kenn­linie wird _konkav_: bei wachsendem Strom klettert die Spannung überproportional. Glüh­lampen brauchen z. B. beim Einschalten den 10-fachen Kalt­strom. |
| 2 ) **Negative α (NTC-Thermistor)** | Widerstand sinkt → _konvexe_ Kenn­linie, selbst­begrenzender Effekt nach Ein­schalt­spitze (Sanft­anlauf in Schaltnetzteilen). |
| 3 ) **Expliziter Varistor (SiC-VDR, ZnO-MOV)** | Körner-Grenz­schichten + starkes Selbst­heizen erzeugen Lawinen- steile ∝U^α-Kurve ; α kann 3–60 sein. |
| 4 ) **Puls­betrieb & Zeit­konstante** | Thermische Kapazität \(C_{\text{th}}\) (J/K) führt zu \( \displaystyle C_{\text{th}}\frac{d\Delta T}{dt}= I^2 R -\frac{\Delta T}{\vartheta_{\text{th}}}\).  ➜ Nicht­linearität hängt von Impulsdauer ab (Memory-Effekt, Hysterese). |

---

## Größenordnungen  

| Bauform | \(R_0\) | \(\alpha\) | \(\vartheta_{\text{th}}\) (≈) | Ab wann spürbar? |
|---------|---------|------------|------------------------------|------------------|
| 0 Ω05 SMD-Shunt | 1 mΩ | 380 ppm/K | 150 K/W | ΔR 1 % bei ≈ 40 A |
| Kohle­schicht 1 kΩ | 1e3 Ω | 0 … –2000 ppm/K | 100 K/W | 10 mA → ΔT ≈ 10 K ΔR –2 % |
| Draht­widerstand 10 Ω, 3 W | 10 Ω | +3500 ppm/K | 20 K/W | 0.5 A (2.5 W) → ΔR +1.7 % |
| NTC 10 k @25 °C | 1e4 Ω | –4 %/K (≙ –40 000 ppm/K) | 250 K/W | Selbst­erhitzung ab µA-Bereich |

---

## Mess- und Modellier-Tipps  

1. **Vierdraht-Messung**: Minimiert die parasitäre Leitungs­wärme, macht die Kenn­linie messbarer.  
2. **SPICE**:  
   ```spice
   R1 1 2 {R0*(1 + Alpha*(TEMP-20))}
   Rth 2 0  Theta      ; thermischer Widerstand
   Cth 2 0  C         ; thermische Kapazität
   ETEMP  TEMP 0 VALUE = { I(R1)^2 * R1 * Theta }   ; Wärmequelle
   ```  
   (Behavioral Sources verknüpfen Elektro- und Thermo-Domäne).  
3. **Datenblatt**: Viele Präzisions­widerstände geben „ΔR vs. Power“-Kurven an (Power Coefficient of Resistance, PCR in ppm/W).  
   Beziehung: \( \text{PCR} = \alpha / \vartheta_{\text{th}}\).  
4. **Abschätzung**: wird \(I\) so groß, dass \( \alpha R_0 I^2 \vartheta_{\text{th}} \gtrsim 0.01 \), muss Nicht­linearität berücksichtigt werden.  

---

## Anwendung und Vermeidung  

| Ziel | Vorgehen |
|------|----------|
| **Präzisions­messung** |  ≪ 1 mW pro Widerstand, SMD-Netz­werke auf Cu-Fläche (kleine \( \vartheta_{\text{th}} \)). |
| **Strom­begrenzung, Soft-Start** | gezielt NTC inline setzen; Kenn­linie liefert benötigte Nicht­linearität. |
| **Hochenergie-Überspannungs­schutz** | SiC-Scheiben­varistor: nutzt extreme Selbst­erhitzung und α≈5, hält kJ-Impulse stand. |
| **Temperatur­sensor** | Selbstheizen lieber vermeiden (Messfehler) oder bewusst als Heißleiter nutzen (Gas-Durch­fluss­erkennung). |

---

### Quintessenz  
Selbst­erhitzung koppelt Elektrik und Thermik und macht _jeden_ Widerstand nicht­linear.  
Welche Seite überwiegt – präziser Ohm oder bewusster Strom-/Überspannungs-Begrenzer – entscheidet sich durch:  
• Temperatur­koeffizient **α**, • thermischen Widerstand **θ**, • Betriebs­strom **I** und • Zeit­konstante **Cθ**.

---

**Quelle:***
Grundlagen der Elektrotechnik Band 1, Autorenkollektiv 9.,durchgesehene Auflage, S. 27-28
Mikrosoft copilot
---


