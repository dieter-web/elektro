 elektrische Strom ist stets von einem Magnetfeld begleitet, das ihn konzentrisch umgibt. Mit Hilfe einer Magnetnadel läßt sich das Magnetfeld eines stromdurchflossenen Leiters anschaulich nachweisen. Bringt man die leicht drehbare Nadel dicht unter dem Leiter an, dann stellt sie sich, sobald ein Strom durch den Leiter fließt, aus einer beliegigen Lage heraus quer zur Richtung des Stromverlaufs. Fließt ein Strom durch eine Spule aus vielen Windungen isolierten Leitungsdrahts, so summieren sich die Magnetfelder der einzelnen Windungen. Im Inneren der Spule entsteht ein starkes Magnetfeld.<br>
 Magnetfelder sich je nach Richtung gegenseitig anziehen oder abstoßen, treten diese Wirkungen auch zwischen parallelen stromdurchflossenen Leitern auf. Sie sind abhängig von der Richtung des Stroms.

## Magnetische Wirkung – wenn Strom zu „unsichtbaren Kraft­linien“ wird

> Sobald Ladungen fließen, entsteht **immer** ein Magnetfeld.  
> Dieser simple Fakt verbindet Elektrik, Magnetismus, Mechanik – und fast jede moderne Maschine.

---

### 1 | Was passiert physikalisch?

| Situation | Magnetfeld-Formel (vereinfachte Praxis) | Bild im Kopf |
|-----------|-----------------------------------------|--------------|
| **Gerader Leiter** (unendliche Länge) | \( B(r)=\dfrac{\mu_0 I}{2\pi r} \) | konzentrische Kreise um den Draht |
| **Kreisförmige Leiterschleife** (Radius R) | \( B_\text{Achse}(0)=\dfrac{\mu_0 I}{2R} \) | „Donut-Torus“, Achse ist Nord/Süd |
| **Lange Spule (Solenoid)** | \( B = \mu_0 n I \)  (n = Windungen pro Meter) | innen nahezu homogen, außen schwach |
| **Toroid-Spule** | \( B = \dfrac{\mu_0 N I}{2\pi r} \) | Feld bleibt komplett im Ringkern |

Rechter-Hand-Regel: Daumen = Stromrichtung, gekrümmte Finger = B-Linien.

---

### 2 | Kräfte, die daraus folgen

1. **Lorentz-Kraft auf bewegte Ladung**  
   \( \mathbf{F}= q\,(\mathbf{v} \times \mathbf{B}) \)

2. **Kraft auf Leiterstück in Fremdfeld**  
   \( \mathbf{F}= I\,(\mathbf{L}\times\mathbf{B}) \)

3. **Anziehende / abstoßende Spulen**  
   Gegengleicher Strom → Abstoßung, gleicher Strom → Anziehung. Grundlage für Relais & Magnetschienen.

4. **Drehmoment im Motor**  
   Rechteckspule im Feld erfährt \( M = N I A B \sin\theta \) → Rotor rotiert.

---

### 3 | Praktische Alltags-Hardware

| Bauteil / Gerät | Strom → Magnetfeld | Magnetfeld → Nutzen |
|-----------------|--------------------|---------------------|
| **Relais / Schütz** | Spule 5 – 230 V, 10–500 mA | zieht Eisen­anker an, schaltet Kontakte |
| **Transformator** | Primär-Wechselstrom | wechselndes B im Eisen überträgt Energie auf Sekundär |
| **Gleichstrom-Motor** | Ankerstrom | Drehmoment treibt Welle an |
| **Lautsprecher** | Schwingspule (Audio-AC) | Membran schwingt → Schall |
| **Induktionskochfeld** | Hochfrequenz-Strom (20–40 kHz) | Wirbelströme heizen Topfboden |
| **MRI (Kernspin)** | 100–400 A in Supraleiter | 1,5–7 T Dauermagnetfeld für Bildgebung |
| **Hall-Sensor** | Bias-Strom im IC | magnetische Flussdichte → Hall-Spannung misst Position / Strom |

---

### 4 | Warum ist das „magnetisch“ wichtig?

1. **Energie­wandlung**  
   Elektrisch ↔ mechanisch (Motor/Generator) & elektrisch ↔ thermisch (Induktion).

2. **Signal­verarbeitung**  
   Spulen + trafos filtern, koppeln, speichern Energie in Schalt­reglern.

3. **Berührungsloses Messen**  
   Stromsensoren, Rotationsgeber, RFID, drahtloses Laden basieren auf Magnet­kupplung.

4. **Physik-Grenzgänger**  
   Supraleiter leiten ohne Widerstand, erlauben Megaampere-Ströme → Felder > 10 T.

---

### 5 | Mini-Demo daheim

```ascii
AA-Batterie
+  _____        5 cm Kupferdraht          Nadelkompass
| |_____|====@===========================[→N ]
-                                       (dreht)
```

1 .     Batterie + Draht → Strom fließt.  
2 .     Kompassnadel in Drahtnähe schlägt aus → sichtbarer Beweis der B-Linien.

---

### 6 | Grenzen & Stolpersteine

• **Erwärmung** – hohe Ströme ⇒ Kupferspule heizt, Wicklungslack altert.  
• **Sättigung** – Eisenkern kann nur ~1,5 T; jenseits verliert er µ.  
• **Wirbelströme** – in Eisen oder Leiterschleifen unerwünscht → Laminierung, Ferrit.  
• **EMV** – schnell geschaltete Ströme (SMPS, Motor-PWM) strahlen, brauchen Filter & richtiges Layout.

---

### 7 | Warum das für dich spannend ist

Ob du einen BLE-Motor für deinen E-Longboard steuerst, ein Schaltnetzteil layoutest oder nur verstehst, warum drahtloses Laden funktioniert – die magnetische Wirkung des Stroms ist immer der unsichtbare Held im Hintergrund.
                
---

**Quelle:***
Grundlagen der Elektrotechnik Band 1, Autorenkollektiv 9.,durchgesehene Auflage, S. 16

Microsoft copilot

---


