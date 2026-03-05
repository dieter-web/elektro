Direkte Antwort: Die Gesamtspannung beträgt 54 V.

## Erklärung

1. Widerstandsverhältnisse  
   R₁ : R₂ : R₃ = 2 : 4 : 6  
   Das heißt, wenn man einen „Einheitswiderstand“ R₀ nimmt, gilt R₁ = 2R₀, R₂ = 4R₀, R₃ = 6R₀.  

2. Strom in der Reihenschaltung  
   In Reihe fließt überall derselbe Strom I.  
   Da U₂ = I·R₂, folgt  
   I = U₂ / R₂ = 18 V / (4R₀) = 4,5 V/R₀.  

3. Summe der Widerstände  
   R₁ + R₂ + R₃ = 2R₀ + 4R₀ + 6R₀ = 12R₀.  

4. Gesamtspannung  
   U_ges = I · (R₁ + R₂ + R₃)  
   U_ges = (4,5 V/R₀) · 12R₀ = 54 V.  

---

Möchtest du noch mehr über Spannungsteilerprinzipien, alternative Reihenschaltungs-Aufgaben oder die Herleitung allgemeiner Formeln erfahren? Ich kann dir Beispiele zur Symbolik in math.js liefern oder eine grafische Visualisierung des Spannungsteilers skizzieren.

# Gesamtspannung berechnen

Die Gesamtspannung in der Reihenschaltung beträgt 54 V.

---

## Erklärung

Die Widerstände verhalten sich wie 2:4:6, also insgesamt 12 Teile.  
Die Spannung an R2 (4 Teile) ist 18 V, also entspricht das $\tfrac{4}{12}$ der Gesamtspannung.  
Umgekehrt ist die Gesamtspannung $U_\text{ges} = 18\,\text{V} \times \frac{12}{4} = 54\,\text{V}$.

---

## Beispiel in Node.js mit math.js

```javascript
// Installiere math.js via: npm install mathjs
const { fraction, multiply, divide } = require('mathjs');

// Gegebene Spannung an R2
const U_R2 = 18;              // Volt

// Verhältnis von R2 zu Gesamtsumme
const ratioR2 = fraction(4, 12);

// Gesamtspannung berechnen: U_ges = U_R2 / (4/12)
const U_ges = divide(U_R2, ratioR2);

console.log(`Die Gesamtspannung beträgt ${U_ges.toString()} V`);
// Ausgabe: Die Gesamtspannung beträgt 54 V
```

---

## Ausblick und weiterführende Ideen

- Stromstärke berechnen: $I = U_\text{ges} / (R_1 + R_2 + R_3)$ und anschließend Einzespannungen an R1 und R3 bestimmen.  
- Leistung an jedem Widerstand ermitteln: $P = U \times I$.  
- Interaktive Web-UI bauen, um beliebige Verhältniswerte einzugeben und Spannungsteilung dynamisch zu visualisieren (z.B. mit D3.js oder Pixi.js).  
- Parallelschaltung als Erweiterung: Vergleich von Gesamtspannung und Gesamtwiderstand in komplexeren Netzwerken.  
- Automatisierung mit math.js-Units: Widerstandswerte in Ohm mit Einheitenhandling und Umrechnung.

# Funktion math.fraction(4, 12)

Die Funktion `math.fraction(a, b)` aus der Bibliothek math.js erzeugt ein rationales Zahlenobjekt (Typ `Fraction`) mit den Angaben „Zähler = a“ und „Nenner = b“.  

Bei Aufruf von  
```js
const frac = math.fraction(4, 12);
```  
wird intern der größte gemeinsame Teiler (GGT) von 4 und 12 ermittelt und der Bruch automatisch auf seine kleinstmögliche Form gekürzt. Das Ergebnis ist also ein Bruchobjekt, das den Wert 1/3 repräsentiert.

---

## Signatur und Parameter

- `math.fraction(numerator, denominator)`  
  - `numerator` (Number | BigNumber | String)  
  - `denominator` (Number | BigNumber | String)

Wird nur ein Parameter übergeben, gilt der Nenner als 1. Strings wie `"3/4"` werden ebenfalls korrekt geparst.

---

## Rückgabeobjekt

Das Ergebnis ist eine Instanz von `Fraction` mit folgenden Haupteigenschaften:

- `frac.n` → gekürzter Zähler (Number)  
- `frac.d` → gekürzter Nenner (Number)  
- `frac.s` → Vorzeichen (1 oder -1)

Zusätzlich bietet das Objekt Methoden:

- `frac.toString()` → gibt `"1/3"` zurück  
- `frac.valueOf()`  → liefert den JavaScript-Number-Wert `0.3333333333333333`  
- `frac.clone()`    → erstellt eine Kopie des Bruchs  

---

## Beispielcode

```javascript
const math = require('mathjs');

// Bruch erzeugen und kürzen
const frac = math.fraction(4, 12);

console.log(frac);            // Fraction { s: 1, n: 1, d: 3 }
console.log(frac.n, frac.d);  // 1 3
console.log(frac.toString()); // '1/3'
console.log(+frac);           // 0.3333333333333333
```

---

## Einsatzmöglichkeiten und weiterführende Ideen

- **Genauigkeit bewahren:** In numerisch sensiblen Anwendungen erlaubt `Fraction` exakte Bruchrechnungen ohne Rundungsfehler.  
- **Bruchoperationen:** `math.add(frac, math.fraction(1,6))`, `math.multiply(frac, 2)` usw.  
- **Umwandlung in Dezimal:** `math.number(frac)` oder einfach `+frac`.  
- **Kombination mit Einheiten:** `math.fraction(3,4).mul(math.unit('1 m'))` garantiert präzise Maßeinheitenumsätze.  
- **Interaktive Visualisierung:** Dynamische Bruchteildiagramme mit D3.js oder Pixi.js, die automatisch auf geänderte Zähler/Nenner reagieren.  
- **Symbolische Manipulation:** Mit `math.simplify` lassen sich Brüche in komplexeren Ausdrücken ebenfalls erkennen und kürzen.

