# Nichtlinearität eines Widerstandes, ausgelöst durch  
• Licht (Photoleit-/Foto­widerstand)  
• Druck / mechanische Spannung (Piezoresistiver Effekt)  
• Magnetfeld (Magneto­resistiver Effekt)

Jeder Effekt bewirkt, dass die elektrische Leitfähigkeit σ – und damit der Widerstand R – eine Funktion einer **externen Feldgröße** wird. Unter kleinen Anregungen lässt sich das oft linearisieren, aber schon mittlere Reize führen zu stark gekrümmten Kennlinien.

---

## 1 | Licht → Photowiderstände & Photoleiter

| Merkmal | Werte / Fakten |
|---------|----------------|
| Gängige Materialien | CdS, CdSe, InGaAs, a-Si:H, organische Halbleiter |
| Grundprinzip | Photonen > Bandlücke → Elektron-Loch-Paare → σ ↑ → R ↓ |
| Typische Kennlinie | \(R(\Phi) = R_0 \,\Phi^{-\gamma}\)  mit 0,6 ≤ γ ≤ 1,0 |
| Dynamik | 10 MΩ (dunkel) → < 1 kΩ (1000 lx) |
| Zeitkonstante | CdS: 1–50 ms; a-Si:H < 1 µs |
| Spektralbereich | CdS: max ≈ 520 nm; CdSe: ≈ 700 nm; InGaAs: 0,9–1,7 µm |
| Anwendungen | Straßenlampen, Belichtungsmesser, Rauchmelder, kostengünstige Lichtsensoren |

**Bemerkung**  
Die Kennlinie ist bei CdS-LDR auf Log-Log-Skala annähernd Gerade – ideal für Widerstands-Teilerschaltungen mit ADC-Eingang.

---

## 2 | Druck / mechanische Spannung → Piezoresistive Widerstände

### 2.1 Metallischer Dehnmessstreifen (DMS)

$$
\frac{\Delta R}{R} = G_F \,\varepsilon, \qquad G_F \approx 2
$$

– lineares Verhalten bis ≈ ±2 % Dehnung, schwach nichtlinear bei größeren Lasten.

### 2.2 Halbleiter-DMS (Si-Piezoresistor)

| Parameter | Si <100> p-dotiert |
|-----------|--------------------|
| Gauge-Faktor G_F | +100 … +180 |
| Nichtlinearität | ΔR/R ∝ ε + β ε² (β ≈ 20) |
| Temperaturabh. | stark; i. d. R. Wheatstone-Brücke + Temp-Comp. |

### 2.3 Druckempfindliche Polymere / FSR

Perkolationsnetz aus leitfähigen Partikeln – unter Druck verkürzt sich Tunnelabstand → „quasi-exponentieller“ Abfall von R:

$$
R(p) \approx R_0\,e^{-p/p_0}
$$

| Bauform | Messbereich | ΔR-Spanne |
|---------|-------------|-----------|
| FSR-Folien | 0,1 N – 10 kN | 10 MΩ → 100 Ω |
| Carbon-Foam Cell | 0 – 1 MPa | 1 kΩ → 30 Ω |

---

## 3 | Magnetischer Einfluss → Magnetoresistive Effekte

| Effekt | ΔR/R (B = 1 T) | Mechanismus | Bauteil-Beispiel |
|--------|----------------|-------------|------------------|
| **Klassische (quadratische) MR** | ~10⁻³ | Lorentz-Ablenkung der Elektronen; ρ ∝ B² | Alu-Shunt in Kryo-Messung |
| **Anisotrope MR (AMR)** | 2–4 % | Spin-abhängige Streuung relativ zur Magnetisierung | AMR-Sensor (z. B. HMC1001) |
| **Riesen-MR (GMR)** | 10–20 % | Antiparallel / parallel Ausrichtung ferromag. Schichten | Lesekopf HDD, Drehzahlsensor |
| **Tunneling-MR (TMR)** | 50–600 % | Spin-abh. Tunnelwahrscheinlichkeit durch MgO-Barriere | eCompass, Automotive-Speed |
| **Kolossale MR (CMR)** | > 100 000 % (bei 10 T) | Phasenübergang manganat. Oxide | Grundlagenforschung |

Allgemein wird die **Magnetoresistanz** in Prozent angegeben:

$$
\text{MR}\,[\%] = \frac{R(B)-R(0)}{R(0)} \times 100
$$

Typische Kennlinie (AMR):

```
ΔR/R
 4% |        ______
 2% |  _____/      
 0% |_/____________  B
```

---

## 4 | Kurzüberblick – Empf. Mess- / Design-Tipps

| Effekt | Mess-Topologie | Relevante Störgrößen | Signal-Konditionierung |
|-------|----------------|----------------------|------------------------|
| Photo | Spannungsteiler an ADC | Dunkelstrom, Temp | Log-Amp, RC-Filter, Dunkelabgleich |
| Piezoresistiv | Wheatstone-Brücke | Temp-Drift, Kriechen | Instrumenten-Amp + Konstantstrom |
| Magnetoresistiv | Voll- oder Halbbrücke | Offset (remanent B) | Spule zur Offset-Nullung, Chopper-Amp |

---

## 5 | Grobe Größenordnungen im Vergleich

| Einflussgröße | ΔR/R bei typischer Anregung | Kommentar |
|---------------|-----------------------------|-----------|
| 1000 lx auf CdS-LDR | –99,9 % | Helle Sonne |
| 100 µε mechanische Dehnung, Metall-DMS | +0,02 % | Stahlträger |
| 10 µε auf Si-Piezoresistor | +1 % | MEMS-Drucksensor |
| 50 kPa auf Polymer-FSR | –90 % | Tastsensor |
| 1 mT auf GMR-Element | +1 % | Positionssensor |

---

## 6 | Take-Aways

1. **Licht → Photoleitung**  
   Mehr freie Ladungsträger → Widerstand fällt häufig mit Potenzgesetz.
2. **Druck/Dehnung → Piezoresistenz**  
   Gitter-Verzerrung ändert Bandstruktur oder Geometrie → ΔR/R ∝ ε, Halbleiter extrem empfindlich.
3. **Magnetfeld → Magnetoresistenz**  
   Spinabhängige Streuprozesse oder Lorentz-Ablenkung → ΔR/R oft ∝ B² (klass.), bis hunderte % (TMR).

Alle drei Mechanismen sind **gewollte Nichtlinearitäten**, die als Sensorprinzip genutzt werden – oder als Störquelle (VCR, Mikrofonie) vermieden werden müssen, wenn man „wirklich ohmsche“ Widerstände braucht.