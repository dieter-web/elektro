# Netzlisten-Parser-Modul in Node.js

Im Folgenden findest du ein einfaches Muster­modul, das eine SPICE-ähnliche Netzliste einliest und in ein JavaScript-Objekt umwandelt. Du kannst es als Ausgangspunkt nehmen und bei Bedarf um weitere Element­typen und Features erweitern.

---

## 1. Modulstruktur

- **parseNetlist(text)**: Zerlegt den gesamten Text in Zeilen und wertet jede Zeile aus.  
- **parseLine(line)**: Erkennt Bauteil­typ, Knoten und Wert über reguläre Ausdrücke.  
- **Element-Objekte**: Einheitliches Format mit `type`, `name`, `nodes` und `value`.

---

## 2. Beispielcode (netlist-parser.js)

```javascript
// netlist-parser.js
'use strict';

/**
 * Liest eine SPICE-ähnliche Netzliste ein und gibt ein Array von Elementen zurück.
 * @param {string} text Mehrzeiliger Netzlisten-String
 * @returns {Array} Elemente mit { type, name, nodes: [], value }
 */
function parseNetlist(text) {
  const lines = text
    .split(/\r?\n/)
    .map(l => l.trim())
    .filter(l => l && !l.startsWith('*')); // Leere Zeilen und Kommentare

  return lines.map(parseLine);
}

/**
 * Parst eine einzelne Zeile der Netzliste.
 * Unterstützt: R, V, I (Widerstand, Spannungsquelle, Stromquelle)
 * @param {string} line Netzlisten-Zeile
 * @returns {Object} Parsed element
 */
function parseLine(line) {
  // Bauteil-Typ = erster Buchstabe
  const typeChar = line[0].toUpperCase();
  const tokens   = line.split(/\s+/);

  // Allgemeines Pattern: Name Knoten1 Knoten2 Wert
  const [name, n1, n2, val] = tokens;

  switch (typeChar) {
    case 'R':
      return { type: 'resistor', name, nodes: [n1, n2], value: parseFloat(val) };
    case 'V':
      return { type: 'voltageSource', name, nodes: [n1, n2], value: parseFloat(val) };
    case 'I':
      return { type: 'currentSource',  name, nodes: [n1, n2], value: parseFloat(val) };
    default:
      throw new Error(`Unsupported element type "${typeChar}" in line: ${line}`);
  }
}

module.exports = { parseNetlist };
```

---

## 3. Nutzung im Node.js-Projekt

1. **Installation**  
   Lege die Datei `netlist-parser.js` in deinem Projektordner ab.

2. **Einbinden & Anwenden**

   ```javascript
   const fs = require('fs');
   const { parseNetlist } = require('./netlist-parser');

   // Netzliste aus Datei einlesen
   const netlistText = fs.readFileSync('beispiel.cir', 'utf8');

   // Parsen
   const elements = parseNetlist(netlistText);

   console.log(elements);
   /* Beispielausgabe:
   [
     { type: 'resistor', name: 'R1', nodes: ['1', '0'], value: 100 },
     { type: 'voltageSource', name: 'V1', nodes: ['1', '0'], value: 5 },
     { type: 'resistor', name: 'R2', nodes: ['1', '2'], value: 200 },
     { type: 'currentSource', name: 'I1', nodes: ['2', '0'], value: 0.01 }
   ]
   */
   ```

---

## 4. Erweiterungsmöglichkeiten

- Unterstützung weiterer Bauteil­typen: Kondensatoren (C), Induktivitäten (L)  
- Parsing von Initial-Conditions und Steuer­quellen (B-Elemente)  
- Erkennen von Netznamen und Parameter­definitionen (`.param`)  
- Einbettung in eine MNA-Pipeline zur automatischen Matrix­erzeugung  
- Validierung der Netzliste und Fehlermeldungen  

---

Mit diesem Modul legst du die Basis für ein eigenes SPICE-ähnliches Tool in Node.js. Möchtest du wissen, wie man daraus automatisch eine Leitwertmatrix erstellt oder wie du gesteuerte Quellen integrierst?