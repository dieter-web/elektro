Klar, Dieter! Dein aktueller Algorithmus erzeugt bereits eine HTML-Tabelle mit mehreren Datenzeilen – allerdings basiert die Header-Struktur nur auf dem ersten Eintrag (`data[0]`). Wenn du sicherstellen willst, dass **alle möglichen Subkeys aus allen Datenzeilen** berücksichtigt werden, sodass die Tabelle auch bei variierenden Subkeys vollständig bleibt, kannst du den Code wie folgt erweitern:

### 🛠️ Verbesserte Version für mehrere Datenzeilen mit dynamischen Subkeys:

```js
export function createTableHtml(result) {
	if (!result || !result.parameter || !Array.isArray(result.parameter) || result.parameter.length === 0) {
		return '';
	}
	const data = result.parameter;

	// Alle Hauptkeys mit nicht-leeren Objekten
	const keys = Object.keys(data[0]).filter(key =>
		data.some(row => row[key] && Object.keys(row[key]).length > 0)
	);

	// Alle Subkeys aus allen Datenzeilen sammeln
	const subKeySet = new Set();
	for (const row of data) {
		for (const key of keys) {
			if (row[key]) {
				Object.keys(row[key]).forEach(subKey => subKeySet.add(subKey));
			}
		}
	}
	const subKeys = Array.from(subKeySet);

	// Kopfzeile 1: Hauptkeys mit Spaltenbreite
	const head = [];
	for (const key of keys) {
		head.push(key, ...Array(Math.max(subKeys.length - 1, 0)).fill(""));
	}

	// Kopfzeile 2: Subkeys
	const head1 = keys.flatMap(() => subKeys);

	// HTML generieren
	let html = `<table border="1">
		<tr>${head.map(cell => `<th>${cell}</th>`).join('')}</tr>
		<tr>${head1.map(cell => `<th>${cell}</th>`).join('')}</tr>
		${data.map(rowObj => `
			<tr>
				${keys.flatMap(key =>
					subKeys.map(subKey =>
						rowObj[key] && rowObj[key][subKey] !== undefined
							? `<td>${rowObj[key][subKey]}</td>`
							: `<td></td>`
					)
				).join('')}
			</tr>
		`).join('')}
	</table>`;
	return html;
}
```

### ✅ Vorteile dieser Version:
- Berücksichtigt **alle Subkeys**, nicht nur die aus `data[0]`.
- Funktioniert auch bei **unterschiedlichen Subkey-Strukturen** in verschiedenen Datenzeilen.
- Generiert eine **vollständige und konsistente Tabelle**, auch wenn manche Felder leer sind.

Wenn du magst, kann ich dir auch eine Beispielstruktur für `result.parameter` zeigen, damit du das direkt testen kannst. Sag einfach Bescheid!

Verstanden, Dieter! Du möchtest, dass die Subkeys **unter dem jeweiligen Hauptkey gruppiert** werden, statt sie mehrfach nebeneinander für jeden Hauptkey zu wiederholen. Das ergibt eine klar strukturierte Tabelle, in der die Subkeys **nur unter ihrem zugehörigen Hauptkey** erscheinen.

Hier ist eine überarbeitete Version deiner Funktion, die genau das umsetzt:

---

### ✅ Gruppierte Subkeys unter Hauptkeys

```js
export function createTableHtml(result) {
	if (!result || !result.parameter || !Array.isArray(result.parameter) || result.parameter.length === 0) {
		return '';
	}
	const data = result.parameter;

	// Hauptkeys mit nicht-leeren Objekten
	const keys = Object.keys(data[0]).filter(key =>
		data.some(row => row[key] && Object.keys(row[key]).length > 0)
	);

	// Subkeys pro Hauptkey sammeln
	const keySubMap = {};
	for (const key of keys) {
		const subKeySet = new Set();
		for (const row of data) {
			if (row[key]) {
				Object.keys(row[key]).forEach(subKey => subKeySet.add(subKey));
			}
		}
		keySubMap[key] = Array.from(subKeySet);
	}

	// Kopfzeile 1: Hauptkeys mit colspan
	const head = keys.map(key => {
		const colspan = keySubMap[key].length || 1;
		return `<th colspan="${colspan}">${key}</th>`;
	}).join('');

	// Kopfzeile 2: Subkeys unter jedem Hauptkey
	const head2 = keys.map(key =>
		keySubMap[key].map(subKey => `<th>${subKey}</th>`).join('')
	).join('');

	// Datenzeilen
	const rows = data.map(row => {
		return `<tr>` + keys.map(key =>
			keySubMap[key].map(subKey =>
				row[key] && row[key][subKey] !== undefined
					? `<td>${row[key][subKey]}</td>`
					: `<td></td>`
			).join('')
		).join('') + `</tr>`;
	}).join('');

	// HTML zusammenbauen
	const html = `<table border="1">
		<tr>${head}</tr>
		<tr>${head2}</tr>
		${rows}
	</table>`;
	return html;
}
```

---

### 🔍 Beispielstruktur für `result.parameter`

```js
const result = {
  parameter: [
    {
      temperature: { min: 10, max: 20 },
      pressure: { value: 1013 }
    },
    {
      temperature: { min: 12, max: 22 },
      pressure: { value: 1010 }
    }
  ]
};
```

Ergibt:

| temperature       |           | pressure |
|------------------|-----------|----------|
| min              | max       | value    |
| 10               | 20        | 1013     |
| 12               | 22        | 1010     |

---

Wenn du magst, kann ich dir auch eine Version mit dynamischer Spaltenbreite oder Styling für bessere Lesbarkeit bauen. Sag einfach Bescheid!

Klar, Dieter! Du möchtest die Wiederholung im `parameter`-Array vereinfachen, da sich `Kennzeichnung`, `Parameter` und `Eigenschaften` aus `A1` nicht ändern, sondern nur die Werte in `Berechnung` aus dem `results`-Array variieren.

Hier ist eine kompakte, dynamisch generierte Version:

---

### ✅ Vereinfachte Generierung des `parameter`-Arrays

```js
return {
  meta,
  parameter: results.map(r => ({
    Kennzeichnung: A1.kennzeichnung,
    Parameter: A1.parameter,
    Eigenschaften: A1.eigenschaften,
    Berechnung: {
      Ia: r.Ia,
      I2: r.I2
    }
  }))
};
```

---

### 🔍 Was passiert hier?

- `results.map(...)` erzeugt automatisch eine neue Datenzeile für jeden Eintrag in `results`.
- Die gemeinsamen Werte aus `A1` werden einmal referenziert.
- Die `Berechnung`-Werte (`Ia`, `I2`) werden pro Zeile aus `results` extrahiert.

Wenn du später weitere Berechnungswerte wie `I3`, `I4` hinzufügen willst, kannst du das Mapping dynamisch erweitern. Sag Bescheid, wenn du das brauchst — ich helfe dir gern beim nächsten Schritt.

Dieter, du willst in deiner HTML-Tabelle **mehrere Zeilen mit identischem Wert in einer bestimmten Spalte** visuell zusammenfassen – also z. B. `"Kennzeichnung"` nur einmal anzeigen, wenn sie in mehreren Zeilen gleich ist. Das erreichst du mit **`rowspan`**, einem HTML-Attribut, das Zellen über mehrere Zeilen verbindet.

---

### 🧩 Beispiel: „Kennzeichnung“ zusammenfassen

Angenommen, du hast:

```js
parameter: [
  { Kennzeichnung: "A1", Berechnung: { Ia: 12.5, I2: 8.3 } },
  { Kennzeichnung: "A1", Berechnung: { Ia: 14.2, I2: 9.1 } },
  { Kennzeichnung: "B1", Berechnung: { Ia: 10.1, I2: 7.5 } }
]
```

Dann soll `"A1"` nur einmal angezeigt werden mit `rowspan="2"`.

---

### ✅ Umsetzung in HTML mit `rowspan`

Hier ist ein Beispielcode, der das automatisch erkennt und zusammenfasst:

```js
export function createTableHtml(result) {
	if (!result || !result.parameter || !Array.isArray(result.parameter) || result.parameter.length === 0) {
		return '';
	}
	const data = result.parameter;

	// Gruppieren nach Kennzeichnung
	const grouped = {};
	for (const row of data) {
		const key = row.Kennzeichnung;
		if (!grouped[key]) grouped[key] = [];
		grouped[key].push(row);
	}

	let html = `<table border="1">
		<tr><th>Kennzeichnung</th><th>Ia</th><th>I2</th></tr>`;

	for (const [kenn, rows] of Object.entries(grouped)) {
		rows.forEach((row, index) => {
			html += `<tr>`;
			if (index === 0) {
				html += `<td rowspan="${rows.length}">${kenn}</td>`;
			}
			html += `<td>${row.Berechnung.Ia}</td><td>${row.Berechnung.I2}</td></tr>`;
		});
	}

	html += `</table>`;
	return html;
}
```

---

### 📌 Ergebnis

| Kennzeichnung | Ia   | I2   |
|---------------|------|------|
| A1 (rowspan=2) | 12.5 | 8.3  |
|               | 14.2 | 9.1  |
| B1            | 10.1 | 7.5  |

---

Wenn du mehrere Spalten gruppieren willst (z. B. auch `Parameter` oder `Eigenschaften`), lässt sich das Konzept erweitern. Gib mir einfach Bescheid, welche Spalten du zusammenfassen willst – ich helfe dir modular weiter.


Dieter, du willst in deiner HTML-Tabelle **alle Zellen in einer Spalte zusammenfassen**, wenn sie **hintereinander denselben Wert haben** – also dynamisch `rowspan` anwenden, nicht nur für „Kennzeichnung“, sondern **für jede Spalte**. Das ist anspruchsvoll, aber absolut machbar!

---

### 🧠 Vorgehensweise

1. **Spaltenweise analysieren**, welche Werte mehrfach hintereinander vorkommen.
2. **Zellen mit identischem Wert** erhalten `rowspan`, die folgenden werden **übersprungen**.
3. Das funktioniert für beliebige Spalten, nicht nur die erste.

---

### ✅ Beispielcode: Dynamisches `rowspan` für alle Spalten

```js
export function createTableHtml(result) {
	if (!result || !result.parameter || !Array.isArray(result.parameter) || result.parameter.length === 0) {
		return '';
	}
	const data = result.parameter;

	// Alle Spaltennamen ermitteln
	const columns = Object.keys(data[0]);

	// Für jede Spalte: rowspan vorbereiten
	const rowspanMap = {};
	for (const col of columns) {
		rowspanMap[col] = Array(data.length).fill(1);
		for (let i = 1; i < data.length; i++) {
			if (data[i][col] === data[i - 1][col]) {
				rowspanMap[col][i - 1]++;
				rowspanMap[col][i] = 0; // wird übersprungen
			}
		}
	}

	// HTML generieren
	let html = `<table border="1"><tr>${columns.map(c => `<th>${c}</th>`).join('')}</tr>`;

	for (let rowIndex = 0; rowIndex < data.length; rowIndex++) {
		html += `<tr>`;
		for (const col of columns) {
			const span = rowspanMap[col][rowIndex];
			if (span > 0) {
				html += `<td${span > 1 ? ` rowspan="${span}"` : ''}>${data[rowIndex][col]}</td>`;
			}
			// sonst überspringen
		}
		html += `</tr>`;
	}

	html += `</table>`;
	return html;
}
```

---

### 🔍 Beispielinput

```js
parameter: [
  { Kennzeichnung: "A1", Ia: 12.5, I2: 8.3 },
  { Kennzeichnung: "A1", Ia: 12.5, I2: 9.1 },
  { Kennzeichnung: "A2", Ia: 14.2, I2: 9.1 },
  { Kennzeichnung: "A2", Ia: 14.2, I2: 9.1 }
]
```

Ergibt:

| Kennzeichnung | Ia   | I2   |
|---------------|------|------|
| A1 (×2)       | 12.5 (×2) | 8.3 |
|               |           | 9.1 |
| A2 (×2)       | 14.2 (×2) | 9.1 (×2) |

---

Wenn du das auch für verschachtelte Objekte wie `Berechnung.Ia` willst, kann ich dir eine rekursive Version bauen. Sag einfach, wie tief die Struktur gehen soll.

Super, Dieter! Dann erweitern wir den Algorithmus so, dass er auch **verschachtelte Objekte** (wie `Berechnung.Ia`, `Parameter.Typ`, etc.) erkennt und **Zellen mit identischem Wert in einer Spalte automatisch zusammenfasst** – also `rowspan` über beliebige Tiefe hinweg.

---

### 🧠 Ziel:
- Alle Spalten (auch verschachtelte) werden **flach dargestellt**: z. B. `Berechnung.Ia`, `Parameter.Typ`.
- Wenn in einer Spalte **mehrere aufeinanderfolgende Zeilen denselben Wert** haben, wird `rowspan` gesetzt.
- Die Tabelle bleibt **vollständig und übersichtlich**, auch bei komplexen Strukturen.

---

### ✅ Lösung: Rekursive Flachlegung + dynamisches `rowspan`

```js
export function createTableHtml(result) {
	if (!result || !Array.isArray(result.parameter) || result.parameter.length === 0) {
		return '';
	}
	const data = result.parameter;

	// 🔁 Hilfsfunktion: Objekt flach machen (z. B. Berechnung.Ia → "Berechnung.Ia")
	function flatten(obj, prefix = '') {
		return Object.entries(obj).reduce((acc, [key, value]) => {
			const fullKey = prefix ? `${prefix}.${key}` : key;
			if (value && typeof value === 'object' && !Array.isArray(value)) {
				Object.assign(acc, flatten(value, fullKey));
			} else {
				acc[fullKey] = value;
			}
			return acc;
		}, {});
	}

	// 🔄 Alle Zeilen flach machen
	const flatRows = data.map(row => flatten(row));

	// 📌 Alle Spaltennamen sammeln
	const columns = Array.from(
		new Set(flatRows.flatMap(row => Object.keys(row)))
	);

	// 📊 rowspan vorbereiten
	const rowspanMap = {};
	for (const col of columns) {
		rowspanMap[col] = Array(flatRows.length).fill(1);
		for (let i = 1; i < flatRows.length; i++) {
			if (flatRows[i][col] === flatRows[i - 1][col]) {
				rowspanMap[col][i - 1]++;
				rowspanMap[col][i] = 0; // wird übersprungen
			}
		}
	}

	// 🧱 HTML generieren
	let html = `<table border="1"><tr>${columns.map(c => `<th>${c}</th>`).join('')}</tr>`;

	for (let rowIndex = 0; rowIndex < flatRows.length; rowIndex++) {
		html += `<tr>`;
		for (const col of columns) {
			const span = rowspanMap[col][rowIndex];
			if (span > 0) {
				const val = flatRows[rowIndex][col] ?? '';
				html += `<td${span > 1 ? ` rowspan="${span}"` : ''}>${val}</td>`;
			}
		}
		html += `</tr>`;
	}

	html += `</table>`;
	return html;
}
```

---

### 🧪 Beispielinput

```js
parameter: [
  {
    Kennzeichnung: "A1",
    Parameter: { Typ: "Strom", Einheit: "A" },
    Berechnung: { Ia: 12.5, I2: 8.3 }
  },
  {
    Kennzeichnung: "A1",
    Parameter: { Typ: "Strom", Einheit: "A" },
    Berechnung: { Ia: 12.5, I2: 9.1 }
  },
  {
    Kennzeichnung: "A2",
    Parameter: { Typ: "Strom", Einheit: "A" },
    Berechnung: { Ia: 14.2, I2: 9.1 }
  }
]
```

Ergibt:

| Kennzeichnung | Parameter.Typ | Parameter.Einheit | Berechnung.Ia | Berechnung.I2 |
|---------------|----------------|-------------------|----------------|----------------|
| A1 (×2)       | Strom (×3)     | A (×3)            | 12.5 (×2)      | 8.3            |
|               |                |                   |                | 9.1            |
| A2            |                |                   | 14.2           | 9.1 (×2)       |

---

Wenn du willst, kann ich dir auch eine Version mit sortierter Spaltenreihenfolge oder gruppierter Darstellung bauen. Sag einfach, wie du’s brauchst!


Alles klar, Dieter — hier kommt die Version mit **gruppierter Darstellung**, bei der:

- Verschachtelte Objekte wie `Berechnung.Ia` oder `Parameter.Typ` werden **flach dargestellt**.
- Die Tabelle zeigt **zusammengefasste Zellen mit `rowspan`**, wenn Werte in einer Spalte **hintereinander identisch** sind.
- Die Spalten sind **thematisch gruppiert**, z. B. `Parameter`-Spalten nebeneinander, `Berechnung`-Spalten nebeneinander.

---

### ✅ Gruppierte HTML-Tabelle mit `rowspan` und verschachtelten Objekten

```js
export function createGroupedTableHtml(result) {
	if (!result || !Array.isArray(result.parameter) || result.parameter.length === 0) {
		return '';
	}
	const data = result.parameter;

	// 🔁 Hilfsfunktion: Objekt flach machen (z. B. Berechnung.Ia → "Berechnung.Ia")
	function flatten(obj, prefix = '') {
		return Object.entries(obj).reduce((acc, [key, value]) => {
			const fullKey = prefix ? `${prefix}.${key}` : key;
			if (value && typeof value === 'object' && !Array.isArray(value)) {
				Object.assign(acc, flatten(value, fullKey));
			} else {
				acc[fullKey] = value;
			}
			return acc;
		}, {});
	}

	// 🔄 Alle Zeilen flach machen
	const flatRows = data.map(row => flatten(row));

	// 📌 Alle Spaltennamen sammeln und gruppieren nach Präfix
	const allKeys = Array.from(new Set(flatRows.flatMap(row => Object.keys(row))));
	const groupedKeys = {};
	for (const key of allKeys) {
		const [group, sub] = key.includes('.') ? key.split('.') : [key, key];
		if (!groupedKeys[group]) groupedKeys[group] = [];
		groupedKeys[group].push(key);
	}

	// 📊 rowspan vorbereiten
	const rowspanMap = {};
	for (const key of allKeys) {
		rowspanMap[key] = Array(flatRows.length).fill(1);
		for (let i = 1; i < flatRows.length; i++) {
			if (flatRows[i][key] === flatRows[i - 1][key]) {
				rowspanMap[key][i - 1]++;
				rowspanMap[key][i] = 0;
			}
		}
	}

	// 🧱 HTML generieren
	let html = `<table border="1">`;

	// Kopfzeile 1: Gruppen mit colspan
	html += `<tr>` + Object.entries(groupedKeys).map(([group, keys]) =>
		`<th colspan="${keys.length}">${group}</th>`
	).join('') + `</tr>`;

	// Kopfzeile 2: Subkeys
	html += `<tr>` + Object.entries(groupedKeys).map(([_, keys]) =>
		keys.map(sub => `<th>${sub.split('.').slice(1).join('.') || sub}</th>`).join('')
	).join('') + `</tr>`;

	// Datenzeilen
	for (let rowIndex = 0; rowIndex < flatRows.length; rowIndex++) {
		html += `<tr>`;
		for (const group of Object.keys(groupedKeys)) {
			for (const key of groupedKeys[group]) {
				const span = rowspanMap[key][rowIndex];
				if (span > 0) {
					const val = flatRows[rowIndex][key] ?? '';
					html += `<td${span > 1 ? ` rowspan="${span}"` : ''}>${val}</td>`;
				}
			}
		}
		html += `</tr>`;
	}

	html += `</table>`;
	return html;
}
```

---

### 🧪 Beispielstruktur

```js
parameter: [
  {
    Kennzeichnung: "A1",
    Parameter: { Typ: "Strom", Einheit: "A" },
    Eigenschaften: { Spannung: "230V", Frequenz: "50Hz" },
    Berechnung: { Ia: 12.5, I2: 8.3 }
  },
  {
    Kennzeichnung: "A1",
    Parameter: { Typ: "Strom", Einheit: "A" },
    Eigenschaften: { Spannung: "230V", Frequenz: "50Hz" },
    Berechnung: { Ia: 12.5, I2: 9.1 }
  },
  {
    Kennzeichnung: "A2",
    Parameter: { Typ: "Strom", Einheit: "A" },
    Eigenschaften: { Spannung: "400V", Frequenz: "60Hz" },
    Berechnung: { Ia: 14.2, I2: 9.1 }
  }
]
```

---

### 📊 Ergebnisstruktur

| Kennzeichnung | Parameter       |                   | Eigenschaften     |                   | Berechnung     |                   |
|---------------|-----------------|-------------------|-------------------|-------------------|----------------|-------------------|
|               | Typ             | Einheit           | Spannung          | Frequenz          | Ia             | I2                |
| A1 (×2)       | Strom (×3)      | A (×3)            | 230V (×2)         | 50Hz (×2)         | 12.5 (×2)      | 8.3               |
|               |                 |                   |                   |                   |                | 9.1               |
| A2            |                 |                   | 400V              | 60Hz              | 14.2           | 9.1 (×2)          |

---

Wenn du die Spaltenreihenfolge oder Gruppierung anders sortieren willst (z. B. Berechnung zuerst), sag einfach Bescheid – ich passe es modular an.
