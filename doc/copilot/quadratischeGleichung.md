Um quadratische Gleichungen vollständig zu behandeln, ist es wichtig, die **Diskriminante** zu analysieren. Sie entscheidet, ob die Lösungen **reell**, **doppelt**, oder **komplex** sind.

---

## 🧮 Allgemeine Form und Diskriminante

Für die Gleichung:
\[
x^2 + px + q = 0
\]
nutzt man die p-q-Formel:
\[
x_{1,2} = -\frac{p}{2} \pm \sqrt{\left(\frac{p}{2}\right)^2 - q}
\]

Die Diskriminante ist:
\[
D = \left(\frac{p}{2}\right)^2 - q
\]

---

## 🔍 Fallunterscheidung

| Fall | Bedingung | Lösungstyp | Beispiel |
|------|-----------|------------|----------|
| **Zwei reelle Lösungen** | \( D > 0 \) | Zwei verschiedene reelle Zahlen | \( x^2 + 2x - 3 = 0 \) |
| **Eine doppelte reelle Lösung** | \( D = 0 \) | Eine reelle Zahl (doppelte Nullstelle) | \( x^2 + 2x + 1 = 0 \) |
| **Zwei komplexe Lösungen** | \( D < 0 \) | Konjugiert komplexe Zahlen | \( x^2 + 2x + 3 = 0 \) |

---

## 🧑‍💻 Node.js-Implementierung mit `math.js`

```js
const { create, all } = require('mathjs');
const math = create(all);

function solveQuadratic(p, q) {
  const halfP = p / 2;
  const D = math.subtract(math.pow(halfP, 2), q);
  const sqrtD = math.sqrt(D); // automatisch komplex bei D < 0
  const x1 = math.subtract(-halfP, sqrtD);
  const x2 = math.add(-halfP, sqrtD);

  if (math.equal(D, 0)) {
    return { type: 'Doppelte reelle Lösung', x: x1 };
  } else if (math.larger(D, 0)) {
    return { type: 'Zwei reelle Lösungen', x1, x2 };
  } else {
    return { type: 'Zwei komplexe Lösungen', x1, x2 };
  }
}

// Beispiel
console.log(solveQuadratic(2, 3)); // D < 0 → komplex
console.log(solveQuadratic(2, 1)); // D = 0 → doppelt
console.log(solveQuadratic(2, -3)); // D > 0 → reell
```

---

Wenn du magst, kann ich dir auch eine Markdown-Tabelle mit den Lösungen generieren oder ein CLI-Tool bauen, das automatisch erkennt, ob komplexe Zahlen nötig sind. Sag einfach Bescheid!
