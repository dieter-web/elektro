### Vereinfachte Struktur (Programmatisch)

- **Idee:** Die wiederholte Basisroute `/gleichspannung/grundbegriffe/` auslagern und die Einträge aus einer kurzen Liste von Slugs erzeugen.
- **Vorteil:** Kürzerer, wartungsfreundlicher Code; einfache Reihenfolge- oder Übersetzungsänderungen.

```js
const base = "/gleichspannung/grundbegriffe";
const topics = [
  { slug: "strom", label: "Strom" },
  { slug: "spannung", label: "Spannung" },
  { slug: "widerstand", label: "Widerstand" },
  { slug: "energie", label: "Energie" },
  { slug: "leistung", label: "Leistung" },
  { slug: "feld", label: "Feld" }
];

const navItems = [
  {
    title: "Themen",
    items: topics.map(t => ({ href: `${base}/${t.slug}`, text: t.label }))
  }
];
```

---

### Noch kompaktere Variante (nur Slugs)

- **Wenn Labels 1:1 aus Slugs entstehen dürfen:** nur Slugs speichern und Label durch Capitalize generieren.

```js
const base = "/gleichspannung/grundbegriffe";
const slugs = ["strom","spannung","widerstand","energie","leistung","feld"];

const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);

const navItems = [{ title: "Themen", items: slugs.map(s => ({ href: `${base}/${s}`, text: capitalize(s) })) }];
```

---

### Alternative: Flache Navigation oder Gruppen

- **Flach:** Wenn nur eine Ebene nötig, entferne das äußere Array und nutze direkt `items`.
- **Gruppiert:** Falls später Untergruppen nötig sind, definiere mehrere Titel-Objekte (z. B. "Grundbegriffe", "Erweiterungen").

---

### Empfehlung
Verwende die programmatische Version mit `topics` — klar lesbar, leicht erweiterbar und ideal für Internationalisierung oder dynamisches Routing.

### Vereinfachte Datenstruktur für children.navItems

Du kannst die wiederholten hrefs programmatisch erzeugen, sodass die Struktur kompakt bleibt und leicht erweiterbar ist. Idee: Basisroute und eine Liste von Slugs/Labels zentral definieren und dann in place mappen.

```js
const baseRoot = "/gleichspannung/grundbegriffe";
const topics = [
  { slug: "strom", label: "Strom" },
  { slug: "spannung", label: "Spannung" },
  { slug: "widerstand", label: "Widerstand" },
  { slug: "energie", label: "Energie" },
  { slug: "leistung", label: "Leistung" },
  { slug: "feld", label: "Feld" }
];

const child = {
  path: "grundbegriffe",
  navTitle: "Grundbegriffe",
  navRoot: "/gleichspannung",
  navItems: [
    {
      title: "Themen",
      items: topics.map(t => ({ href: `${baseRoot}/${t.slug}`, text: t.label }))
    }
  ],
  layout: "layout/main.ejs",
  content: {
    markdown: "gleichspannung/grundbegriffe/grundbegriffe.md"
  },
  jsonFile: "",
  children: [ /* ... */ ]
};
```

---

### Noch kompakter: nur Slugs (wenn Label aus Slug abgeleitet werden darf)

```js
const baseRoot = "/gleichspannung/grundbegriffe";
const slugs = ["strom","spannung","widerstand","energie","leistung","feld"];
const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);

const child = {
  /* ...gleich wie oben... */
  navItems: [
    {
      title: "Themen",
      items: slugs.map(s => ({ href: `${baseRoot}/${s}`, text: capitalize(s) }))
    }
  ],
  /* ... */
};
```

---

### Vorteile und Hinweise
- Wartungsfreundlich: Neue Themen nur in einer Liste ergänzen.
- Reihenfolge bleibt erhalten, wenn du ein Array nutzt; bei Hash/Objekten solltest du zusätzlich eine Order-Liste pflegen.
- Für Internationalisierung: statt fester Labels Schlüssel verwenden und durch i18n-Resolver ersetzen.