Die Messbereichserweiterung eines Strommessers (Amperemeter) erfolgt typischerweise durch den Einsatz eines **Shunt-Widerstands** (Nebenschlusswiderstand), der parallel zum Messgerät geschaltet wird. Ziel ist es, größere Ströme zu messen, als das Amperemeter direkt vertragen würde, ohne es zu beschädigen.

---

### ⚙️ Herleitung der mathematischen Beziehung

**Gegeben:**
- Innenwiderstand des Strommessers: $ R_A $
- Maximaler Strom, den das Strommessgerät direkt messen kann: $ I_A $
- Gesamtstrom, der gemessen werden soll: $ I $
- Shunt-Widerstand: $ R_S $

**Ziel:**
- Bestimme $ R_S $, sodass das Amperemeter nur $ I_A $ misst, während der Reststrom durch den Shunt fließt.

---

### 🔍 Stromverteilung

Da der Shunt parallel zum Amperemeter liegt, gilt:

$$
I = I_A + I_S
$$

Dabei ist $ I_S $ der Strom durch den Shunt.

Da beide Widerstände parallel liegen, haben sie dieselbe Spannung $ U $:

$$
U = I_A \cdot R_A = I_S \cdot R_S
$$

Daraus folgt:

$$
I_S = \frac{I_A \cdot R_A}{R_S}
$$

Setze in die Stromsumme ein:

$$
I = I_A + \frac{I_A \cdot R_A}{R_S}
$$

Fasse zusammen:

$$
I = I_A \left(1 + \frac{R_A}{R_S}\right)
$$

---

### 📐 Gesuchte Beziehung

Umgestellt nach $ R_S $:

$$
R_S = \frac{R_A}{\left(\frac{I}{I_A} - 1\right)}
$$

---

### 📌 Beispiel

Wenn ein Amperemeter mit $ R_A = 1\,\Omega $ maximal $ I_A = 1\,A $ messen kann, und du möchtest $ I = 5\,A $ messen:

$$
R_S = \frac{1}{(5/1 - 1)} = \frac{1}{4} = 0{,}25\,\Omega
$$

---

Möchtest du auch die Herleitung für die Messbereichserweiterung eines Spannungsmessers (Voltmeter)?