### Gegebene Werte

- **Gesamtwiderstand**: $R_\text{ges} = 2{,}8\ \text{M}\Omega$  
- **Verhältnis**: $R_1 = 1{,}4\,R_2$

---

### Rechnung

Für Parallelschaltung gilt
$$
\frac{1}{R_\text{ges}}=\frac{1}{R_1}+\frac{1}{R_2}.
$$
Setze $R_1=1{,}4\,R_2$ ein:
$$
\frac{1}{R_\text{ges}}=\frac{1}{1{,}4\,R_2}+\frac{1}{R_2}=\frac{1+1{,}4}{1{,}4}\cdot\frac{1}{R_2}=\frac{2{,}4}{1{,}4}\cdot\frac{1}{R_2}=\frac{12}{7}\cdot\frac{1}{R_2}.
$$
Daraus folgt
$$
R_2=\frac{12}{7}\,R_\text{ges}.
$$
Einsetzen von $R_\text{ges}=2{,}8\ \text{M}\Omega$:
$$
R_2=\frac{12}{7}\cdot2{,}8\ \text{M}\Omega=4{,}8\ \text{M}\Omega.
$$
$$
R_1=1{,}4\cdot R_2=1{,}4\cdot4{,}8\ \text{M}\Omega=6{,}72\ \text{M}\Omega.
$$

---

### Ergebnis

- **R1 = 6,72 MΩ**  
- **R2 = 4,80 MΩ**

### Codebeispiel mit mathjs und Units

```js
import { create, all } from 'mathjs'
const math = create(all)

// Gegeben
const Rges = math.unit('2.8 MΩ')   // Gesamtwiderstand
const k = 1.4                       // R1 = k * R2

// Herleitung: 1/Rges = 1/(k R2) + 1/R2 = (1 + k) / (k R2)
// => R2 = (1 + k) / k * Rges
const factor = (1 + k) / k
const R2 = math.multiply(factor, Rges)   // mathjs multipliziert Unit korrekt
const R1 = math.multiply(k, R2)

// Ausgabe in passenden Einheiten
console.log('R1 =', R1.to('MΩ').format({notation: 'fixed', precision: 3}))
console.log('R2 =', R2.to('MΩ').format({notation: 'fixed', precision: 3}))
```

Kurzbeschreibung
- math.unit('2.8 MΩ') erzeugt eine Unit in Megaohm.  
- math.multiply mit einem reinen Skalar multipliziert die Unit korrekt.  
- .to('MΩ') wandelt das Ergebnis in Megaohm zur lesbaren Ausgabe.  
- Du kannst precision oder andere format-Optionen anpassen.

Fehler- und Typchecks (optional)
```js
if (math.equal(Rges.toNumber('ohm'), 0)) throw new Error('Gesamtwiderstand darf nicht 0 sein')
if (k <= 0) throw new Error('Verhältnis k muss > 0 sein')
```

Das liefert bei den angegebenen Werten:
- R1 ≈ 6.720 MΩ  
- R2 ≈ 4.800 MΩ