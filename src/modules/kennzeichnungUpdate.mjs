// import { group, index } from 'd3-array'

function formularKennzeichnung (route) {
  // action = route
  // Wenn schon vorhanden, nicht noch einmal erzeugen !!
  // if (!document.getElementById('kennzeichnung')) {
  // let d = document.createElement('div')
  let kenn = document.createElement('div')

  // if (document.Kennzeichnung.Kennzeichnung.checked) {
    kenn.innerHTML = `
      <div class="container text-left">
        <div class="row>
        <div class="bg-secondary">
          <form method="POST" id="kennzeichnung">
          <div class="input-group input-group-sm">
          <span class="input-group-text">Anlage</span>
          <input type="text" aria-label="1" id="Anlage1" class="form-control" maxlength="2" value="00" size="10">
          <input type="text" aria-label="2" id="Anlage2" class="form-control" maxlength="2" value="00">
          <input type="text" aria-label="3" id="Anlage3" class="form-control" maxlength="2" value="00">
          <input type="text" aria-label="4" id="Anlage4" class="form-control" maxlength="2" value="00">
          <input type="text" aria-label="5" id="Anlage5" class="form-control" maxlength="2" value="00">
        </div>
        <div class="input-group input-group-sm">
          <span class="input-group-text">Aufstellungsort</span>
            <input type="text" aria-label="1" id="Aufstellungsort1" class="form-control" maxlength="2" value="00">
          <input type="text" aria-label="2" id="Aufstellungsort2" class="form-control" maxlength="2" value="00">
          <input type="text" aria-label="3" id="Aufstellungsort3" class="form-control" maxlength="2" value="00">
          <input type="text" aria-label="4" id="Aufstellungsort4" class="form-control" maxlength="2" value="00">
          <input type="text" aria-label="5" id="Aufstellungsort5" class="form-control" maxlength="2" value="00">
        </div>
        <div class="input-group input-group-sm">
          <span class="input-group-text">Einbauort</span>
          <input type="text" aria-label="1" id="Einbauort1" class="form-control" maxlength="2" value="00">
          <input type="text" aria-label="2" id="Einbauort2" class="form-control" maxlength="2" value="00">
          <input type="text" aria-label="3" id="Einbauort3" class="form-control" maxlength="2" value="00">
          <input type="text" aria-label="4" id="Einbauort4" class="form-control" maxlength="2" value="00">
        </div>
        <div class="input-group input-group-sm">
          <label class="input-group-text" for="Art">Art</label>
          <select class="form-select" id="Art">
            <option selected>?</option>
            <option value="V">Halbleiter</option>
            <option value="R">Widerstand</option>
            <option value="Y">Geräte mit Elektrischen Antrieb</option>
            <option value="A">Baugruppen</option>
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
          <input type="text" aria-label="2" class="form-control" id="zaehlnummer" maxlength="4" value="0000">
        </div>
        <div class="input-group input-group-sm">
          <label class="input-group-text" for="Funktion">Funktion</label>
          <select class="form-select" id="Funktion">
            <option selected>?</option>
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
            <option selected>?</option>
            <option value="A">Klemmleiste</option>
            <option value="B">Stecker</option>
            <option value="C">Draht</option>
          </select>
          <span class="input-group-text">Anzahl</span>
              <input type="text" aria-label="2" class="form-control" id="Anzahl" maxlength="4" value="0000">
        </div>
        <div>
          <input class="btn btn-info" type="submit" value="übernehmen"></button>
        </div>
        </div>
      </form>
      </div>
      </div>
      </div>
      `
    document.body.appendChild(kenn)
  // } else {
  //   let tmp = document.getElementById('kennzeichnung')
  //   tmp.innerHTML = ''
  //   document.body.replaceChild(kenn, tmp)
  // }

  // Werte auslesen über button-click
  const button = document.querySelector('input[type="submit"]')

  button.addEventListener('click', event => {
    let Kennzeichnung = {
      Anlage: ` = ${Anlage1.value}${Anlage2.value}${Anlage3.value}-${Anlage4.value}${Anlage5.value}`,
      Ort: ` + ${Aufstellungsort1.value}${Aufstellungsort2.value}${Aufstellungsort3.value}${Aufstellungsort4.value}${Aufstellungsort5.value}-${Einbauort1.value}${Einbauort2.value}${Einbauort3.value}${Einbauort4.value}`,
      Art: ` - ${Art.value}`,
      Zählnummer: `${zaehlnummer.value}`,
      Funktion: `${Funktion.value}`,
      Anschlussart: ` : ${AnschlussArt.value}`,
      Anzahl: `${Anzahl.value}`
    }

    const d1 = document.querySelector('div[id="ke"]')

    d1.innerHTML = `${Kennzeichnung.Anlage}${Kennzeichnung.Ort}${Kennzeichnung.Art}${Kennzeichnung.Zählnummer}${Kennzeichnung.Funktion}${Kennzeichnung.Anschlussart}${Kennzeichnung.Anzahl}
      `
    // Weitere Verarbeitung ausschalten
    event.preventDefault()
  })
}
export { formularKennzeichnung }
