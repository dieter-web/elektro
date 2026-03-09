Das ist ein klassischer Fall eines Spannungsteilers mit einem Potentiometer, Dieter — und du hast die Verhältnisse schon sauber vorgegeben:  
Der Gesamtwiderstand $ R $ wird durch den Schleifer in zwei Teilwiderstände aufgeteilt:  
- $ R_1 : R_2 = 1.5 : 3.5 $  
- Gesamtspannung $ U = 60\,\text{V} $  
- Gesucht: Spannung $ U_2 $ am Mittelabgriff (also über $ R_2 $)

---

### 🧮 Berechnung mit Spannungsteilerformel

Die Spannung am unteren Teil $ R_2 $ ergibt sich aus:

$$
U_2 = U \cdot \frac{R_2}{R_1 + R_2}
$$

Setze die Werte ein:

- $ R_1 = 1.5 $
- $ R_2 = 3.5 $
- $ U = 60\,\text{V} $

Dann:

$$
U_2 = 60\,\text{V} \cdot \frac{3.5}{1.5 + 3.5} = 60\,\text{V} \cdot \frac{3.5}{5.0} = 60\,\text{V} \cdot 0.7 = 42\,\text{V}
$$

---

### ✅ Ergebnis

**Die Spannung am Schleifer beträgt $ U_2 = 42\,\text{V} $.**

---

Wenn du magst, kann ich dir das auch als math.js-Ausdruck oder Markdown-Formel ausgeben — oder sogar als interaktives Potentiometer-Modul mit SVG-Slider und Echtzeitberechnung. Sag einfach, wie du das weiterverwenden willst.

Alles klar, Dieter — hier ist ein vollständiges Node.js-Skript, das mit `math.js` die Spannung $ U_2 $ berechnet, wenn ein Potentiometer im Verhältnis $ R_1 : R_2 = 1.5 : 3.5 $ aufgeteilt wird und die Gesamtspannung $ U = 60\,\text{V} $ beträgt.

---

### 📦 1. Vorbereitung

Falls noch nicht geschehen:

```bash
npm install mathjs
```

---

### 🧪 2. Node.js-Skript zur Berechnung

```js
// potentiometer-divider.js
const math = require('mathjs');

// Gegebene Werte
const U = math.unit(60, 'V');     // Gesamtspannung
const R1 = math.bignumber(1.5);   // Verhältniswert R1
const R2 = math.bignumber(3.5);   // Verhältniswert R2

// Spannungsteilung: U2 = U * R2 / (R1 + R2)
const U2 = math.multiply(U, math.divide(R2, math.add(R1, R2)));

// Ausgabe
console.log(`🔋 Gesamtspannung: ${U.toString()}`);
console.log(`📐 Verhältnis R1:R2 = ${R1}:${R2}`);
console.log(`⚡ Teilspannung U2: ${U2.toString()}`);
```

---

### ✅ Ergebnis

Wenn du das Skript ausführst, bekommst du:

```
🔋 Gesamtspannung: 60 V
📐 Verhältnis R1:R2 = 1.5:3.5
⚡ Teilspannung U2: 42 V
```

---

### 🧠 Erweiterungsideen

- Übergib die Werte als CLI-Argumente (`process.argv`)
- Baue eine Markdown-Ausgabe mit `$U_2 = U \cdot \frac{R_2}{R_1 + R_2}$`
- Ergänze symbolische Umformung mit `math.simplify()` für Dokumentation
- Visualisiere den Schleifer als SVG oder D3.js-Modul

Wenn du willst, helfe ich dir, das in deine Dokumentationspipeline oder Web-UI zu integrieren — z. B. als interaktives Potentiometer-Modul mit Echtzeitberechnung.