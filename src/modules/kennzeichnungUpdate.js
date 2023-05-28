function update () {
  const d = document.createElement('div')
  if (document.Kennzeichnung.Kennzeichnung.checked) {
    d.innerHTML = `
        <form action="/formulare/kennzeichnung" method="POST">
  <div class="input-group input-group-sm">
    <span class="input-group-text">Anlage</span>
    <input type="text" aria-label="1" class="form-control" maxlength="2" value="00">
    <input type="text" aria-label="1" class="form-control" maxlength="2" value="00">
    <input type="text" aria-label="1" class="form-control" maxlength="2" value="00">
    <input type="text" aria-label="1" class="form-control" maxlength="2" value="00">
    <input type="text" aria-label="1" class="form-control" maxlength="2" value="00">
  </div>
  <div class="input-group input-group-sm">
    <span class="input-group-text">Aufstellungsort</span>
    <input type="text" aria-label="2" class="form-control" maxlength="2" value="00">
    <input type="text" aria-label="2" class="form-control" maxlength="2" value="00">
    <input type="text" aria-label="2" class="form-control" maxlength="2" value="00">
    <input type="text" aria-label="2" class="form-control" maxlength="2" value="00">
    <input type="text" aria-label="2" class="form-control" maxlength="2" value="00">
  </div>
  <div class="input-group input-group-sm">
    <span class="input-group-text">Einbauort</span>
    <input type="text" aria-label="2" class="form-control" maxlength="2" value="00">
    <input type="text" aria-label="2" class="form-control" maxlength="2" value="00">
    <input type="text" aria-label="2" class="form-control" maxlength="2" value="00">
    <input type="text" aria-label="2" class="form-control" maxlength="2" value="00">
  </div>
  <div class="input-group input-group-sm">
    <label class="input-group-text" for="Art">Art</label>
    <select class="form-select" id="Art">
      <option selected>Choose...</option>
      <option value="V">Halbleiter</option>
      <option value="R">Widerstand</option>
      <option value="Y">Geräte mit Elektrischen Antrieb</option>
      <option value="A">Baugruppe</option>
      <option value="X">Steckvorrichtung</option>
      <option value="E">Verschiedenes</option>
      <option value="B">Umsetzer</option>
      <option value="N">Verstärker</option>
      <option value="N">Regler</option>
      <option value="W">Übertragungswege</option>
      <option value="Z">Abschlüsse</option>
      <option value="Z">Filter</option>
      <option value="Q">Schalter für Starkstrom</option>
      <option value="S">Hilfsschalter</option>
      <option value="S">Wähler</option>
      <option value="K">Schütze</option>
      <option value="K">Relais</option>
      <option value="F">Schutzeinrichtung</option>
      <option value="P">Messgerät</option>
      <option value="P">Prüfgerät</option>
      <option value="H">Sichtmelder</option>
      <option value="H">Hörmelder</option>
      <option value="C">Kondensatoren</option>
      <option value="L">Induktivitäten</option>
      <option value="M">Motor</option>
      <option value="G">Generator</option>
      <option value="G">Transformator</option>
      <option value="U">Umformer</option>
    </select>
  </div>
  <div class="input-group input-group-sm">
    <span class="input-group-text">Zählnummer</span>
    <input type="text" aria-label="2" class="form-control" maxlength="4" value="0000">
  </div>
  <div class="input-group input-group-sm">
    <label class="input-group-text" for="Funktion">Funktion</label>
    <select class="form-select" id="Funktion">
      <option selected>Choose...</option>
      <option value="A">Hilfsfunktion</option>
      <option value="A">Aus</option>
      <option value="B">Bewegungsrichtung</option>
      <option value="C">Zählen</option>
      <option value="D">Differenzieren</option>
      <option value="E">Ein</option>
      <option value="G">Prüfen</option>
      <option value="H">Melden</option>
      <option value="I">Integrieren</option>
      <option value="K">Testbetrieb</option>
      <option value="L">Leiterkennzeichnung</option>
      <option value="M">Hauptfunktion</option>
      <option value="M">Messen</option>
      <option value="P">Proportional</option>
      <option value="Q">Zustand</option>
      <option value="R">Rückstellen</option>
      <option value="R">Löschen</option>
      <option value="S">Aufzeichnen</option>
      <option value="S">Speichern</option>
      <option value="T">Messen der Zeit</option>
      <option value="T">Verzögern</option>
      <option value="V">Beschleunigen</option>
      <option value="V">Bremsen</option>
      <option value="W">Addieren</option>
      <option value="X">Multiplizieren</option>
      <option value="Y">Analog</option>
      <option value="Z">Digital</option>
    </select>
  </div>
  <div class="input-group input-group-sm">
    <span class="input-group-text">Anschluss</span>
    <label class="input-group-text" for="AnschlussArt">Art</label>
    <select class="form-select" id="AnschlussArt">
      <option selected>Choose...</option>
      <option value="A">Klemmleiste</option>
      <option value="A">Stecker</option>
      <option value="B">Draht</option>
    </select>
    <span class="input-group-text">Anzahl</span>
    <input type="text" aria-label="2" class="form-control" maxlength="4" value="0000">
  </div>

  <div>
    <button class="btn btn-info" type="submit">Übernehmen</button>
  </div>
  </div>
</form>`
    document.body.appendChild(d)
  } else {
    d.innerHTML = ''
    document.body.replaceChild(d)
  }
}

export { update }
