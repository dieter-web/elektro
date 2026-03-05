# Direktes Node.js-Beispiel zur MNA mit Spannungsquelle

Hier ein vollständiges Node.js-Skript, das die Modifizierte Knotenanalyse (MNA) für eine kleine Schaltung löst:

- Knoten 1: Widerstand $R_1=2\,\Omega$ zu Masse, Stromquelle $I_1=1\,\mathrm{A}$ nach außen  
- Knoten 1 ↔ Knoten 2: Widerstand $R_2=4\,\Omega$  
- Knoten 2: ideale Spannungsquelle $V_s=5\,\mathrm{V}$ gegen Masse  

```javascript
// mna-example.js
const math = require('mathjs');

// Netzdefinition
const R1 = 2;      // Ohm
const R2 = 4;      // Ohm
const I1 = 1;      // A
const Vs = 5;      // V

// Anzahl freier Knoten (ohne Masse) und Spannungsquellen
const n = 2;       // Knoten 1 und 2
const m = 1;       // eine ideale Spannungsquelle

// Leitwertmatrix G (n×n)
const G = math.matrix([
  [1/R1 + 1/R2,    -1/R2    ],
  [   -1/R2   ,    1/R2     ],
]);

// Kopplungsmatrix B (n×m)
const B = math.matrix([
  [0],   // Spannungsquelle nur an Knoten 2
  [1],
]);

// Transponierte Kopplung C (m×n)
const C = math.transpose(B);

// Nullmatrix D (m×m)
const D = math.zeros(m, m);

// Zusammenbau der MNA-Matrix A ((n+m)×(n+m))
const top    = math.concat(G, B, 1);
const bottom = math.concat(C, D, 1);
const A      = math.concat(top, bottom, 0);

// Rechtsseitenvektoren I (n×1) und E (m×1)
const I = math.matrix([[I1], [0]]); // Kein Strom an Knoten 2 außer durch Spannungsquelle
const E = math.matrix([[Vs]]);

// Gesamt-RHS b ((n+m)×1)
const b = math.concat(I, E, 0);

// Lösen von A · x = b
const x = math.lusolve(A, b);

// Ergebnisse extrahieren
const V1       = x.get([0, 0]);
const V2       = x.get([1, 0]);
const I_source = x.get([2, 0]);

console.log(`Knotenpotenzial V1 = ${V1.toFixed(3)} V`);
console.log(`Knotenpotenzial V2 = ${V2.toFixed(3)} V`);
console.log(`Quellenstrom I_Vs = ${I_source.toFixed(3)} A`);
```

So führst du es aus:

1. Installiere mathjs:  
   ```bash
   npm install mathjs
   ```

2. Starte das Skript:  
   ```bash
   node mna-example.js
   ```

---

# Erklärung des Codes

- Wir setzen  
  $$
    G = \begin{pmatrix}
      G_{11} & G_{12} \\[3pt]
      G_{21} & G_{22}
    \end{pmatrix},
    \quad
    B = \begin{pmatrix}0\\1\end{pmatrix}
  $$
  aus den Leitwerten $1/R_1$ und $1/R_2$.  

- Die erweiterte MNA-Matrix  
  $$
    A = \begin{pmatrix}
      G & B \\[3pt]
      C & D
    \end{pmatrix}
  $$
  kombiniert KCL für Knoten und KVL für Spannungsquelle in einem linearen System.  

- Mit `math.lusolve` wird das Gleichungssystem effizient gelöst.  

---

# Nächste Schritte und weiterführende Ideen

- Automatisches Parsen einer SPICE-ähnlichen Netzliste in Node.js  
- Einbindung gesteuerter Quellen (VCVS, CCCS etc.) durch Erweiterung der B- und C-Matrizen  
- Übergang in den Frequenzbereich: komplexe Impedanzen $Z(\omega)$  
- Web-Interface mit React oder D3.js zur interaktiven Schaltungserstellung  
- Nutzung von WebAssembly für besonders große Gleichungssysteme  

Wie möchtest du das Beispiel weiter vertiefen? Möchtest du etwa ein Netzlisten-Parser-Modul in Node.js sehen oder eine grafische Oberfläche dazu?