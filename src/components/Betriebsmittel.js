require("use-strict");
const { Components } = require("./components.js");

/** SECTION Betriebsmittel */
class Betriebsmittel extends Components {
  constructor() {
    super();
  }
}

/** SECTION Abschlüsee */
class Abschluesse extends Betriebsmittel {
  constructor() {
    super();
  }
}
/** !SECTION  */
/** SECTION  Baugruppen */
class Baugruppen extends Betriebsmittel {
  constructor() {
    super();
  }
}
/** !SECTION  */
/** SECTION Zweipole */
class Zweipole extends Baugruppen {
  constructor() {
    super();
  }
}
/** !SECTION  */
/** SECTION Passiver Zweipol */
class PassiverZweipol extends Zweipole {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION Elektrische Maschinen */
class ElektrischeMaschinen extends Betriebsmittel {
  constructor() {
    super();
  }
}
/** SECTION Starr */
class Starr extends ElektrischeMaschinen {
  constructor() {
    super();
  }
}
/** SECTION  Ruhende Elektrische Maschinen*/
class RuhendeElektrischeMaschinen extends Starr {
  constructor() {
    super();
  }
}
/** SECTION Transformatoren */
class Transformatoren extends RuhendeElektrischeMaschinen {
  constructor() {
    super();
  }
}
/** SECTION Transformator  */
class Transformator extends Transformatoren {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** SECTION Transaktor */
class Transaktor extends Transformatoren {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** !SECTION  */
/** SECTION Messwandler */
class Messwandler extends Transformator {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** SECTION Stromwandler */
class Stromwandler extends Messwandler {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION Spannungswandler */
class Spannungswandler extends Messwandler {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** !SECTION Messwandler */
/** SECTION  Manteltransformator */
class Manteltransformator extends Transformator {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION Kerntransformator */
class Kerntransformator extends Transformator {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** SECTION Transformator mit Mittenabgriff */
class TransformatorMitMittenabgriff extends Kerntransformator {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION Ringkerntransformator */
class Ringkerntransformator extends Kerntransformator {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION Einphasentransformator */
class Einphasentransformator extends Kerntransformator {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION Dreiphasentransformator */
class Dreiphasentransformator extends Kerntransformator {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION  AudioTransformator */
class AudioTransformator extends Kerntransformator {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** !SECTION  */
/** SECTION Impulstransformator */
class Impulstransformator extends Transformator {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION HF Transformator */
class HFTransformator extends Transformator {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** !SECTION  */
/** !SECTION  */
/** !SECTION  */
/** SECTION Beweglich */
class Beweglich extends ElektrischeMaschinen {
  constructor() {
    super();
  }
}
/** SECTION  Rotierende */
class Rotierende extends Beweglich {
  constructor() {
    super();
  }
}
/** SECTION Umformer */
class Umformer extends Rotierende {
  constructor() {
    super();
  }
}
/** !SECTION  */
/** SECTION Synchronmaschinen */
class Synchronmaschinen extends Rotierende {
  constructor() {
    super();
  }
}
/** !SECTION  */
/** SECTION Motoren */
class Motoren extends Rotierende {
  constructor() {
    super();
  }
}
/** !SECTION  */
/** SECTION Kommutator Maschinen */
class KommutatorMaschinen extends Rotierende {
  constructor() {
    super();
  }
}
/** SECTION GleichstromMaschinen */
class GleichstromMaschinen extends KommutatorMaschinen {
  constructor() {
    super();
  }
}
/** !SECTION  */
/** SECTION EinphasenKommutatorMaschinen */
class EinphasenKommutatorMaschinen extends KommutatorMaschinen {
  constructor() {
    super();
  }
}
/** !SECTION  */
/** SECTION DreiphasenKommutatorMaschinen */
class DreiphasenKommutatorMaschinen extends KommutatorMaschinen {
  constructor() {
    super();
  }
}
/** !SECTION  */
/** !SECTION  */
/** SECTION Generatoren */
class Generatoren extends Rotierende {
  constructor() {
    super();
  }
}
/** !SECTION  */
/** SECTION Asynchronmaschinen */
class Asynchronmaschinen extends Rotierende {
  constructor() {
    super();
  }
}
/** !SECTION  */
/** !SECTION  */
/** !SECTION  */
/** !SECTION  */
/** SECTION Filter */
class Filter extends Betriebsmittel {
  constructor() {
    super();
  }
}
/** !SECTION  */
/** SECTION GeraeteMitElektrischenAntrieb */
class GeraeteMitElektrischenAntrieb extends Betriebsmittel {
  constructor() {
    super();
  }
}
/** !SECTION  */
/** SECTION Halbleiter */
class Halbleiter extends Betriebsmittel {
  constructor() {
    super();
  }
}
/** !SECTION  */
/** SECTION Induktivitaet */
class Induktivitaet extends Betriebsmittel {
  constructor() {
    super();
  }
}
/** !SECTION  */
/** SECTION Spule */
class Spule extends Induktivitaet {
  constructor() {
    super();
  }
}
/** SECTION Spulenkoerper */
class Spulenkoerper extends Spule {
  constructor() {
    super();
  }
}
/** !SECTION  */
/** SECTION Variometer */
class Variometer extends Spule {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION SpuleOhneKern */
class SpuleOhneKern extends Spule {
  constructor() {
    super();
  }
}
/** SECTION Zylinderspule */
class Zylinderspule extends SpuleOhneKern {
  constructor() {
    super();
  }
}
/** !SECTION  */
/** SECTION Ringspule */
class Ringspule extends SpuleOhneKern {
  constructor() {
    super();
  }
}
/** !SECTION  */
/** SECTION MehrlagigeSpule */
class MehrlagigeSpule extends SpuleOhneKern {
  constructor() {
    super();
  }
}
/** !SECTION  */
/** SECTION EinlagigeSpule */
class EinlagigeSpule extends SpuleOhneKern {
  constructor() {
    super();
  }
}
/** !SECTION  */
/** SECTION  AbgeschirmteSpule*/
class AbgeschirmteSpule extends SpuleOhneKern {
  constructor() {
    super();
  }
}
/** !SECTION  */
/** !SECTION  */
/** SECTION SpuleMitKern */
class SpuleMitKern extends Spule {
  constructor() {
    super();
  }
}

/** SECTION Magnetspule  */
class Magnetspule extends SpuleMitKern {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** !SECTION  */
/** SECTION MagnetischeBauelementeDigitalerEinrichtungen */
class MagnetischeBauelementeDigitalerEinrichtungen extends Induktivitaet {
  constructor() {
    super();
  }
}
/** !SECTION  */
/** !SECTION  */
/** SECTION Klemmvorrichtungen */
class Klemmvorrichtungen extends Betriebsmittel {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}

/** SECTION Klemme */
class Klemme extends Klemmvorrichtungen {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION Klemmleiste */
class Klemmleiste extends Klemme {
  constructor() {
    super();
  }
}
/** !SECTION  */
/** !SECTION  */
/** SECTION Kondensatoren */
class Kondensatoren extends Betriebsmittel {
  constructor() {
    super();
  }
}
/** !SECTION  */
/** SECTION Leiter */
class Leiter extends Betriebsmittel {
  constructor() {
    super();
  }
}
/** !SECTION  */
/** SECTION Melder */
class Melder extends Betriebsmittel {
  constructor() {
    super();
  }
}
/** !SECTION  */
/** SECTION Messgeraete */
class Messgeraete extends Betriebsmittel {
  constructor() {
    super();
  }
}

/** SECTION Zeitmesser */
class Zeitmesser extends Messgeraete {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION Strommesser */
class Strommesser extends Messgeraete {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION Spannungsmesser */
class Spannungsmesser extends Messgeraete {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION Phasenwinkelmesser */
class Phasenwinkelmesser extends Messgeraete {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION MagnetischeGroessemesser */
class MagnetischeGroessemesser extends Messgeraete {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION Leistungsmesser */
class Leistungsmesser extends Messgeraete {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION Impedanzmesser */
class Impedanzmesser extends Messgeraete {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION Frequenzmesser */
class Frequenzmesser extends Messgeraete {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION Energiemesser */
class Energiemesser extends Messgeraete {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** !SECTION  */
/** SECTION Prüfgeräte */
class Pruefgeraete extends Betriebsmittel {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION Regler */
class Regler extends Betriebsmittel {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION Relais */
class Relais extends Betriebsmittel {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION Schalter */
class Schalter extends Betriebsmittel {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION Schütze */
class Schuetze extends Betriebsmittel {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION Schutzeinrichtungen */
class Schutzeinrichtungen extends Betriebsmittel {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION Sensoren */
class Sensoren extends Betriebsmittel {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION Steckvorrichtungen */
class Steckvorrichtungen extends Betriebsmittel {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}

/** SECTION Stecker */
class Stecker extends Steckvorrichtungen {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION Steckerleiste */
class Steckerleiste extends Steckvorrichtungen {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** !SECTION  */
/** SECTION Übertragungswege */
class Uebertragungswege extends Betriebsmittel {
  constructor() {
    super();
  }
}

/** SECTION Antennen */
class Antenne extends Uebertragungswege {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION Drähte */
class Draehte extends Uebertragungswege {
  constructor() {
    super();
  }
}

/** SECTION Draht  */
class Draht extends Draehte {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}

/** SECTION Wickeldraht */
class Wickeldraht extends Draht {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION Runddraht */
class Runddraht extends Draht {
  constructor() {
    super();
  }
}

/** SECTION Isoliert */

class Isoliert extends Runddraht {
  constructor() {
    super();
  }
}
/** !SECTION  */
/** SECTION Blank */
class Blank extends Runddraht {
  constructor() {
    super();
  }
}

/** SECTION Legierungsdraht */
class Legierungsdraht extends Blank {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION Kupferdraht */
class Kupferdraht extends Blank {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION Aluminiumdraht */
class Aluminiumdraht extends Blank {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** !SECTION  */
/** !SECTION  */
/** !SECTION  */
/** !SECTION  */
/** SECTION Kabel */
class Kabel extends Uebertragungswege {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}

/** SECTION Starkstromkabel */
class Starkstromkabel extends Kabel {
  constructor(Parameter) {
    super(Parameter);
  }
}
/** !SECTION  */
/** SECTION Hochfrequenzkabel */
class Hochfrequenzkabel extends Kabel {
  constructor(Parameter) {
    super(Parameter);
  }
}
/** !SECTION  */
/** SECTION Fernmeldekabel */
class Fernmeldekabel extends Kabel {
  constructor() {
    super();
  }
}
/** !SECTION  */
/** !SECTION  */
/** SECTION Leitung */
class Leitung extends Uebertragungswege {
  constructor() {
    super();
    // TODO: Nicht Kennzeichnung sondern Kabelname
    this.Bezeichnung = require(path.resolve(
      "src/json/Uebertragungswege/Leitungen/Bezeichnung.json"
    ));
  }
}

/** SECTION Isolierteleitung */
class Isolierteleitung extends Leitung {
  constructor() {
    super();
  }
}

/** SECTION Starkstromleitung */
class Starkstromleitung extends Isolierteleitung {
  constructor() {
    super();
  }
}

/** SECTION OrtsveraenderlicheLegung */
class OrtsveraenderlicheLegung extends Starkstromleitung {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}

/** SECTION Konfektioniert */
class Konfektioniert extends Starkstromleitung {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION FesteLegung */
class FesteLegung extends Starkstromleitung {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION BesondererZweck */
class BesondererZweck extends Starkstromleitung {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** !SECTION  */
/** !SECTION  */
/** SECTION Fernmeldeleitung */
class Fernmeldeleitung extends Isolierteleitung {
  constructor() {
    super();
  }
}
/** !SECTION  */
/** SECTION Litzeleitung */
class Litzeleitung extends Fernmeldeleitung {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION Lahnlitzeleitung */
class Lahnlitzeleitung extends Fernmeldeleitung {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION Eindrahtleitung */
class Eindrahtleitung extends Fernmeldeleitung {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** !SECTION  */
/** SECTION Blankeleitung */
class Blankeleitung extends Leitung {
  constructor() {
    super();
    this.visBlankeleitung = {};
  }
}

/** SECTION Stromschiene */
class Stromschiene extends Blankeleitung {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION Schleifenleitung */
class Schleifenleitung extends Blankeleitung {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION Schiene */
class Schiene extends Blankeleitung {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION Sammelschiene */
class Sammelschiene extends Blankeleitung {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION OffenGelegteLeing */
class OffenGelegteLeing extends Blankeleitung {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION Hochfrequenzleitung */
class Hochfrequenzleitung extends Blankeleitung {
  constructor(Parameter) {
    super();
  }
}
/** !SECTION  */
/** SECTION Freileitung */
class Freileitung extends Blankeleitung {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION Fahrleitung */
class Fahrleitung extends Blankeleitung {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION  Erdungssammelleitung */
class Erdungssammelleitung extends Blankeleitung {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION Erder */
class Erder extends Blankeleitung {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** !SECTION  */
/** !SECTION  */
/** !SECTION  */
/** SECTION  Umsetzer */
class Umsetzer extends Betriebsmittel {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** SECTION Verschiedenes */
class Verschiedenes extends Betriebsmittel {
  constructor() {
    super();
  }
}
/** !SECTION  */
/** SECTION Verstärker */
class Verstaerker extends Betriebsmittel {
  constructor() {
    super();
  }
}
/** !SECTION  */
/** SECTION Wähler */
class Waehler extends Betriebsmittel {
  constructor() {
    super();
  }
}
/** !SECTION  */
/** SECTION Widerstände */
class Widerstaende extends Betriebsmittel {
  constructor() {
    super();
    this.Rmap = new Map();
  }

  //TODO: Rmap Operationen schreiben
}

/** SECTION Widerstand  */
class Widerstand extends Widerstaende {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }

  add(name, Parameter) {
    this.Rmap.set(name, Parameter);
  }
}
/** !SECTION  */
/** SECTION ParameterabhaengigeHalbleiterwiderstaende */
class ParameterabhaengigeHalbleiterwiderstaende extends Widerstaende {
  constructor() {
    super();
  }
}

/** SECTION NichtelektrischeParameter */
class NichtelektrischeParameter extends ParameterabhaengigeHalbleiterwiderstaende {
  constructor() {
    super();
  }
}

/** SECTION Temperatur */
class Temperatur extends NichtelektrischeParameter {
  constructor() {
    super();
  }
}

/** SECTION Thermistor */
class Thermistor extends Temperatur {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** SECTION Kaltleiter */
class Kaltleiter extends Thermistor {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** SECTION KeramischeKaltleiter */
class KeramischerKaltleiter extends Kaltleiter {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** !SECTION  */
/** !SECTION  */
/** !SECTION  */
/** SECTION  Strahlung */
class Strahlung extends NichtelektrischeParameter {
  constructor() {
    super();
  }
}

/** SECTION Fotowiderstand */
class Fotowiderstand extends Strahlung {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}

/** !SECTION  */
/** !SECTION  */
/** SECTION MagnetischesFeld */
class MagnetischesFeld extends NichtelektrischeParameter {
  constructor() {
    super();
  }
}

/** SECTION Feldplatte */
class Feldplatte extends MagnetischesFeld {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}
/** !SECTION  */
/** !SECTION  */
/** SECTION Druck */
class Druck extends NichtelektrischeParameter {
  constructor() {
    super();
  }
}
/** !SECTION  */
/** !SECTION  */
/** SECTION ElektrischeParameter */
class ElektrischeParameter extends ParameterabhaengigeHalbleiterwiderstaende {
  constructor() {
    super();
  }
}

/** SECTION Spannung */
class Spannung extends ElektrischeParameter {
  constructor() {
    super();
  }
}

/** SECTION  Varistor*/
class Varistor extends Spannung {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
  }
}

/** !SECTION  */
/** !SECTION  */
/** !SECTION  */
/** !SECTION  */
/** !SECTION  */
/** !SECTION Betriebsmittel */

exports.Varistor = Varistor;
exports.Spannung = Spannung;
exports.ElektrischeParameter = ElektrischeParameter;
exports.Druck = Druck;
exports.Feldplatte = Feldplatte;
exports.MagnetischesFeld = MagnetischesFeld;
exports.Fotowiderstand = Fotowiderstand;
exports.Strahlung = Strahlung;
exports.KeramischerKaltleiter = KeramischerKaltleiter;
exports.Kaltleiter = Kaltleiter;
exports.Thermistor = Thermistor;
exports.Temperatur = Temperatur;
exports.NichtelektrischeParameter = NichtelektrischeParameter;
exports.ParameterabhaengigeHalbleiterwiderstaende = ParameterabhaengigeHalbleiterwiderstaende;
exports.Widerstand = Widerstand;
exports.Widerstaende = Widerstaende;
exports.Verschiedenes = Verschiedenes;
exports.Erder = Erder;
exports.Erdungssammelleitung = Erdungssammelleitung;
exports.Fahrleitung = Fahrleitung;
exports.Freileitung = Freileitung;
exports.Hochfrequenzleitung = Hochfrequenzleitung;
exports.OffenGelegteLeing = OffenGelegteLeing;
exports.Sammelschiene = Sammelschiene;
exports.Schiene = Schiene;
exports.Schleifenleitung = Schleifenleitung;
exports.Stromschiene = Stromschiene;
exports.Blankeleitung = Blankeleitung;
exports.Eindrahtleitung = Eindrahtleitung;
exports.Lahnlitzeleitung = Lahnlitzeleitung;
exports.Litzeleitung = Litzeleitung;
exports.Fernmeldeleitung = Fernmeldeleitung;
exports.BesondererZweck = BesondererZweck;
exports.FesteLegung = FesteLegung;
exports.Konfektioniert = Konfektioniert;
exports.OrtsveraenderlicheLegung = OrtsveraenderlicheLegung;
exports.Starkstromleitung = Starkstromleitung;
exports.Isolierteleitung = Isolierteleitung;
exports.Leitung = Leitung;
exports.Fernmeldekabel = Fernmeldekabel;
exports.Hochfrequenzkabel = Hochfrequenzkabel;
exports.Starkstromkabel = Starkstromkabel;
exports.Kabel = Kabel;
exports.Aluminiumdraht = Aluminiumdraht;
exports.Kupferdraht = Kupferdraht;
exports.Legierungsdraht = Legierungsdraht;
exports.Blank = Blank;
exports.Isoliert = Isoliert;
exports.Runddraht = Runddraht;
exports.Wickeldraht = Wickeldraht;
exports.Draht = Draht;
exports.Draehte = Draehte;
exports.Antenne = Antenne;
exports.Uebertragungswege = Uebertragungswege;
exports.Steckvorrichtungen = Steckvorrichtungen;
exports.Stecker = Stecker;
exports.Steckerleiste = Steckerleiste;
exports.Energiemesser = Energiemesser;
exports.Frequenzmesser = Frequenzmesser;
exports.Impedanzmesser = Impedanzmesser;
exports.Leistungsmesser = Leistungsmesser;
exports.MagnetischeGroessemesser = MagnetischeGroessemesser;
exports.Phasenwinkelmesser = Phasenwinkelmesser;
exports.Spannungsmesser = Spannungsmesser;
exports.Strommesser = Strommesser;
exports.Zeitmesser = Zeitmesser;
exports.Messgeraete = Messgeraete;
exports.Klemme = Klemme;
exports.Klemmleiste = Klemmleiste;
exports.Klemmvorrichtungen = Klemmvorrichtungen;
exports.MagnetischeBauelementeDigitalerEinrichtungen = MagnetischeBauelementeDigitalerEinrichtungen;
exports.Magnetspule = Magnetspule;
exports.SpuleMitKern = SpuleMitKern;
exports.AbgeschirmteSpule = AbgeschirmteSpule;
exports.EinlagigeSpule = EinlagigeSpule;
exports.MehrlagigeSpule = MehrlagigeSpule;
exports.Ringspule = Ringspule;
exports.Spulenkoerper = Spulenkoerper;
exports.Zylinderspule = Zylinderspule;
exports.SpuleOhneKern = SpuleOhneKern;
exports.Variometer = Variometer;
exports.Spule = Spule;
exports.Spulenkoerper = Spulenkoerper;
exports.Induktivitaet = Induktivitaet;
exports.Rotierende = Rotierende;
exports.Beweglich = Beweglich;
exports.HFTransformator = HFTransformator;
exports.Impulstransformator = Impulstransformator;
exports.AudioTransformator = AudioTransformator;
exports.Dreiphasentransformator = Dreiphasentransformator;
exports.Einphasentransformator = Einphasentransformator;
exports.Ringkerntransformator = Ringkerntransformator;
exports.TransformatorMitMittenabgriff = TransformatorMitMittenabgriff;
exports.Kerntransformator = Kerntransformator;
exports.Manteltransformator = Manteltransformator;
exports.Spannungswandler = Spannungswandler;
exports.Stromwandler = Stromwandler;
exports.Messwandler = Messwandler;
exports.Transaktor = Transaktor;
exports.Transformator = Transformator;
exports.Transformatoren = Transformatoren;
exports.RuhendeElektrischeMaschinen = RuhendeElektrischeMaschinen;
exports.Starr = Starr;
exports.ElektrischeMaschinen = ElektrischeMaschinen;
exports.Umformer = Umformer;
exports.Synchronmaschinen = Synchronmaschinen;
exports.Motoren = Motoren;
exports.KommutatorMaschinen = KommutatorMaschinen;
exports.GleichstromMaschinen = GleichstromMaschinen;
exports.EinphasenKommutatorMaschinen = EinphasenKommutatorMaschinen;
exports.DreiphasenKommutatorMaschinen = DreiphasenKommutatorMaschinen;
exports.Generatoren = Generatoren;
exports.Asynchronmaschinen = Asynchronmaschinen;
exports.PassiverZweipol = PassiverZweipol;
exports.Zweipole = Zweipole;
exports.Baugruppen = Baugruppen;
exports.Betriebsmittel = Betriebsmittel;
