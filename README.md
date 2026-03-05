Hier ist ein **vollständig ausgearbeitetes, professionelles README.md**, das exakt zu deiner Projektstruktur passt und sofort einsatzbereit ist.
Ich habe es so geschrieben, dass es sowohl technisch versierte Nutzer als auch Lernende abholt und die Architektur klar erklärt.

---

# elektro
Interaktive Lern‑ und Experimentierplattform für Elektrotechnik
Node.js‑Server • Haskell‑Backend • D3‑Visualisierungen • Markdown‑Content

---

## Überblick
**elektro** ist eine modular aufgebaute Plattform zur Darstellung, Berechnung und Visualisierung elektrotechnischer Inhalte.
Sie kombiniert:

- einen Express‑basierten Node.js‑Server
- ein Haskell‑Backend für mathematische und elektrische Kernfunktionen
- interaktive D3‑Diagramme und SVG‑Grafiken
- Markdown‑basierte Inhalte und Beispiele
- strukturierte JSON‑Daten zu Bauteilen, Werkstoffen und Kennzeichnungen

Das Projekt eignet sich sowohl für Lernende als auch für Entwickler, die elektrotechnische Inhalte dynamisch darstellen oder erweitern möchten.

---

## Features

- Interaktive Beispiele zu Gleich‑ und Wechselspannung
- Markdown‑basierte Kapitel, Formeln und Aufgaben
- D3‑basierte Diagramme und SVG‑Visualisierungen
- JSON‑Datenbasis für Bauteile, Leiterwerkstoffe und Kennzeichnungen
- Express‑Server mit EJS‑Views und modularer Routenstruktur
- Haskell‑Module für mathematische Kernlogik und Netzwerkanalyse
- Erweiterbares Plugin‑System für neue Visualisierungen und Inhalte

---

## Projektstruktur

| Ordner | Beschreibung |
|--------|--------------|
| `src/` | Kernlogik (Node‑Module, Haskell‑Integration, Plugins, Math‑Funktionen) |
| `content/` | Fachliche Inhalte: Markdown‑Kapitel, Formeln, Beispiele, interaktive Module |
| `data/` | JSON‑Daten zu Bauteilen, Werkstoffen, Kennzeichnungen |
| `views/` | EJS‑Templates für Seiten, Layouts und Partials |
| `routes/` | Express‑Routing und Seitenregistrierung |
| `public/` | Statische Assets: CSS, Bilder, SVG, KiCad‑Material |
| `bin/` | Start‑ und Hilfsskripte |
| `copilot/` | Arbeitsmaterial, generierte Inhalte, Notizen |
| `build/`, `dist-newstyle/` | Build‑Artefakte (nicht versionieren) |

---

## Installation

### Voraussetzungen

- Node.js (empfohlen: aktuelle LTS‑Version)
- npm oder pnpm
- GHC + Stack (für Haskell‑Module)

### Repository klonen

```bash
git clone <repo-url>
cd elektro
```

### Node‑Abhängigkeiten installieren

```bash
npm install
```

### Haskell‑Module bauen

```bash
stack build
```

---

## Anwendung starten

```bash
npm start
```

Der Server startet anschließend auf dem konfigurierten Port (Standard: 3000).
Die Inhalte werden dynamisch aus Markdown, JSON‑Daten und Haskell‑Berechnungen erzeugt.

---

## Architektur

Die Architektur von **elektro** ist modular aufgebaut und trennt klar zwischen Präsentation, Logik, Daten und mathematischer Verarbeitung.  
Das System kombiniert einen Express‑basierten Node.js‑Server, Markdown‑Content, JSON‑Daten und ein Haskell‑Backend für elektrotechnische Berechnungen.  
Die folgenden Diagramme geben einen vollständigen Überblick über Aufbau, Datenfluss und Interaktion der Komponenten.

---

## 1. Komponenten‑Architektur

Das Komponenten‑Diagramm zeigt die logische Struktur des Systems:  
Server‑Module, Content‑Layer, Datenbasis und Haskell‑Backend.

```plantuml
@startuml
title Komponenten-Diagramm – elektro

skinparam componentStyle rectangle

package "Client" {
  [Browser UI] as UI
  [D3/SVG Renderer] as D3
}

package "Node.js Server" {
  [server.mjs] as Server
  [Express Router] as Router
  [EJS View Engine] as EJS
  [Plugin-System] as Plugins
  [JS Core Logic\n(src/mathjs, src/module)] as JSCore
}

package "Content Layer" {
  [Markdown Inhalte] as MD
  [Interaktive JS-Module] as MDJS
  [Formeln/HTML] as HTML
}

package "Datenbasis" {
  [JSON-Daten] as JSON
}

package "Haskell Backend" {
  [elektro-ghc] as HCore
}

UI --> D3
UI --> Server : HTTP Requests

Server --> Router
Router --> EJS
Router --> MD
Router --> MDJS
Router --> HTML

Server --> JSCore
Server --> Plugins
Server --> JSON
Server --> HCore : Berechnungen

@enduml
```

---

## 2. Datenfluss

Das Datenflussdiagramm zeigt, wie Markdown‑Content, JSON‑Daten und Haskell‑Berechnungen zusammengeführt werden, bevor sie im Browser dargestellt werden.

```plantuml
@startuml
title Datenflussdiagramm – elektro

skinparam arrowColor #333

actor User

rectangle "Browser" as B {
  [UI]
  [D3/SVG]
}

rectangle "Node.js Server" as S {
  [Routing]
  [JS Core Logic]
  [EJS Renderer]
}

rectangle "Content Layer" as C {
  [Markdown Parser]
  [Interaktive Module]
}

rectangle "Datenbasis" as D {
  [JSON-Daten]
}

rectangle "Haskell Backend" as H {
  [elektro-ghc]
}

User --> B : Interaktion
B --> S : HTTP Request

S --> C : Markdown / Content laden
C --> S : Gerenderter Content

S --> D : JSON lesen
D --> S : Daten (Bauteile, Werkstoffe)

S --> H : Berechnungsanfrage
H --> S : Ergebnisse

S --> B : HTML + JS + SVG Response

@enduml
```

---

## 3. Deployment

Das Deployment‑Diagramm zeigt, auf welchen Systemen die Komponenten laufen:  
Browser, Node‑Server, Haskell‑Runtime und Dateisystem.

```plantuml
@startuml
title Deployment-Diagramm – elektro

node "Client-Rechner" {
  artifact "Webbrowser" as Browser
}

node "Server" {
  node "Node.js Runtime" {
    component "Express Server\n(server.mjs)" as Express
    component "Routing\n(routes/*.mjs)" as Routing
    component "EJS Renderer\n(views/*.ejs)" as EJS
    component "JS Core Logic\n(src/mathjs, src/module)" as JSCore
    component "Plugin-System\n(src/plugins)" as Plugins
  }

  node "Haskell Runtime" {
    component "elektro-ghc\n(Stack Build)" as Haskell
  }

  node "Dateisystem" {
    artifact "Markdown Content\n(content/*.md)" as MD
    artifact "Interaktive Module\n(content/*.mjs)" as MDJS
    artifact "JSON-Daten\n(data/*.json)" as JSON
    artifact "Statische Assets\n(public/*)" as Public
  }
}

Browser --> Express : HTTP Requests
Express --> Routing
Routing --> EJS
Routing --> JSCore
Routing --> Plugins
Routing --> MD
Routing --> MDJS
Routing --> JSON
Routing --> Haskell : Berechnungen

Express --> Browser : HTML + JS + SVG

@enduml
```

---

## 4. Klassendiagramm

Das Klassendiagramm zeigt die wichtigsten Module und ihre Beziehungen.

```plantuml
@startuml
title Klassendiagramm – elektro

skinparam classAttributeIconSize 0

class Server {
  +start()
  +configure()
}

class Router {
  +registerRoutes()
  +handleRequest()
}

class ContentParser {
  +loadMarkdown(file)
  +renderToHTML()
}

class JSONLoader {
  +load(file)
  +getBauteile()
  +getWerkstoffe()
}

class HaskellAdapter {
  +berechneNetzwerk(data)
  +berechneImpedanz(data)
}

class D3Renderer {
  +renderDiagram(data)
}

class Plugin {
  +init()
  +execute()
}

Server --> Router
Router --> ContentParser
Router --> JSONLoader
Router --> HaskellAdapter
Router --> Plugin
Router --> D3Renderer

@enduml
```

---

## 5. Sequenzdiagramm – Interaktives Beispiel

Dieses Diagramm zeigt den Ablauf eines interaktiven Beispiels (z. B. D3‑Diagramm + Berechnung).

```plantuml
@startuml
title Sequenzdiagramm – Interaktives Beispiel

actor User
participant "Browser\n(JS + D3)" as B
participant "Node.js Server" as S
participant "Routing" as R
participant "ContentParser" as C
participant "JSONLoader" as J
participant "HaskellAdapter" as H
participant "D3 Renderer" as D3

User -> B : Klick auf interaktives Beispiel
B -> S : GET /beispiel?id=123

S -> R : Route auswählen
R -> C : Markdown + Beispielmodul laden
C --> R : HTML + JS

R -> J : JSON-Daten laden
J --> R : Bauteile/Werkstoffe

alt Beispiel benötigt Berechnung
    R -> H : Anfrage (z.B. Knotenpotential)
    H --> R : Ergebnis
end

R -> D3 : Diagrammdaten erzeugen
D3 --> R : SVG/JS

R --> S : Fertige Seite
S --> B : HTML + JS + SVG
B --> User : Interaktive Darstellung

@enduml
```

---

## 6. Sequenzdiagramm – Markdown‑Rendering

```plantuml
@startuml
title Sequenzdiagramm – Markdown-Rendering

actor User
participant "Browser" as B
participant "Node.js Server" as S
participant "Routing\n(routes/*.mjs)" as R
participant "ContentParser\n(Markdown → HTML)" as C
participant "EJS Renderer\n(views/*.ejs)" as V

User -> B : Öffnet Seite
B -> S : GET /kapitel/elektro

S -> R : Route auswählen
R -> C : Markdown-Datei laden\n(content/elektro.md)
C -> C : Markdown parsen\n→ HTML erzeugen
C --> R : HTML-Fragment

R -> V : EJS-Template rendern\n(HTML + Layout + JS)
V --> S : Fertige HTML-Seite

S --> B : HTTP Response
B --> User : Darstellung der gerenderten Seite

@enduml
```

---

## 7. Sequenzdiagramm – Routing‑Registrierung

```plantuml
@startuml
title Sequenzdiagramm – Routing-Registrierung

participant "server.mjs" as S
participant "Route Loader\n(routes/main.mjs)" as RL
participant "registerRoute.mjs" as RR
participant "Route Module\n(routes/*.mjs)" as RM
participant "Express App" as E

S -> RL : initRoutes(app)
RL -> RL : Routenverzeichnis scannen
RL -> RM : Route-Modul importieren
RM --> RL : Route-Konfiguration

RL -> RR : registerRoute(app, config)
RR -> E : app.get/post(...)\nRoute registrieren
E --> RR : Bestätigung

loop für alle Routen
  RL -> RM : Nächstes Modul laden
  RM --> RL : Konfiguration zurück
  RL -> RR : Registrierung
end

RL --> S : Routing vollständig initialisiert

@enduml
```

---

Wenn du möchtest, kann ich dir als nächsten Schritt:

- ein **komplettes PDF‑Architekturkapitel** (als Markdown‑Block) erzeugen,  
- oder die Diagramme **automatisch in dein README einbetten**,  
- oder ein **Diagramm für dein Haskell‑Modul‑Design** erstellen.

Sag einfach, wohin wir als Nächstes gehen sollen.

### Node.js‑Schicht
- Express‑Server (`server.mjs`)
- Routing über `routes/`
- Rendering mit EJS‑Templates (`views/`)
- D3‑ und SVG‑Visualisierungen
- Plugin‑System für Erweiterungen

### Haskell‑Schicht
- Berechnung elektrischer Größen
- Netzwerkanalyse (z. B. Knotenpotentialverfahren)
- Integration über Stack‑Build und modulare Schnittstellen

### Content‑Schicht
- Markdown‑Kapitel (`content/elektro.md` etc.)
- interaktive Beispiele (`content/elektro_interactive.mjs`)
- Formelsammlungen und HTML‑Ergänzungen

### Daten‑Schicht
- JSON‑Daten zu Bauteilen, Werkstoffen, Kennzeichnungen
- Grundlage für Tabellen, Formeln und Visualisierungen

---

## Erweiterbarkeit

elektro ist modular aufgebaut und lässt sich leicht erweitern:

- neue Markdown‑Kapitel in `content/`
- neue Diagramme in `src/svgD3Grafik/`
- neue mathematische Funktionen in `src/mathjs/` oder Haskell‑Modulen
- neue JSON‑Daten in `data/`
- neue Seiten über `routes/registerRoute.mjs`

---

## Roadmap

- Erweiterung der Kapitel zu Netzwerken und komplexen Wechselstromrechnungen
- Ausbau der interaktiven Simulationen
- API‑Layer zwischen Node und Haskell
- Automatische Diagramm‑Generierung aus Markdown
- Exportfunktionen für Aufgaben und Lösungen

---

## Lizenz

Noch nicht festgelegt.
Empfehlung: MIT‑Lizenz für maximale Offenheit.

---

