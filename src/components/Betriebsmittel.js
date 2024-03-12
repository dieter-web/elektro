require("use-strict");
const { Components } = require("./components.js");

/** SECTION Betriebsmittel */
class Betriebsmittel extends Components {
  constructor() {
    super();
  }
}

/** SECTION Abschlüsse */
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
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
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
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** SECTION Transaktor */
class Transaktor extends Transformatoren {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** !SECTION  */
/** !SECTION  */
/** SECTION Messwandler */
class Messwandler extends Transformator {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** SECTION Stromwandler */
class Stromwandler extends Messwandler {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** !SECTION  */
/** SECTION Spannungswandler */
class Spannungswandler extends Messwandler {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** !SECTION  */
/** !SECTION Messwandler */
/** SECTION  Manteltransformator */
class Manteltransformator extends Transformator {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** !SECTION  */
/** SECTION Kerntransformator */
class Kerntransformator extends Transformator {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** SECTION Transformator mit Mittenabgriff */
class TransformatorMitMittenabgriff extends Kerntransformator {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** !SECTION  */
/** SECTION Ringkerntransformator */
class Ringkerntransformator extends Kerntransformator {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** !SECTION  */
/** SECTION Einphasentransformator */
class Einphasentransformator extends Kerntransformator {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** !SECTION  */
/** SECTION Dreiphasentransformator */
class Dreiphasentransformator extends Kerntransformator {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** !SECTION  */
/** SECTION  AudioTransformator */
class AudioTransformator extends Kerntransformator {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** !SECTION  */
/** !SECTION  */
/** SECTION Impulstransformator */
class Impulstransformator extends Transformator {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** !SECTION  */
/** SECTION HF Transformator */
class HFTransformator extends Transformator {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
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
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** SECTION Spulenkoerper */
class Spulenkoerper extends Spule {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** !SECTION  */
/** SECTION Variometer */
class Variometer extends Spule {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
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
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
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
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
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
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}

/** SECTION Klemme */
class Klemme extends Klemmvorrichtungen {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
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
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** !SECTION  */
/** SECTION Strommesser */
class Strommesser extends Messgeraete {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** !SECTION  */
/** SECTION Spannungsmesser */
class Spannungsmesser extends Messgeraete {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** !SECTION  */
/** SECTION Phasenwinkelmesser */
class Phasenwinkelmesser extends Messgeraete {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** !SECTION  */
/** SECTION MagnetischeGroessemesser */
class MagnetischeGroessemesser extends Messgeraete {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** !SECTION  */
/** SECTION Leistungsmesser */
class Leistungsmesser extends Messgeraete {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaftenften = Eigenschaften;
  }
}
/** !SECTION  */
/** SECTION Impedanzmesser */
class Impedanzmesser extends Messgeraete {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** !SECTION  */
/** SECTION Frequenzmesser */
class Frequenzmesser extends Messgeraete {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** !SECTION  */
/** SECTION Energiemesser */
class Energiemesser extends Messgeraete {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** !SECTION  */
/** !SECTION  */
/** SECTION Prüfgeräte */
class Pruefgeraete extends Betriebsmittel {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** !SECTION  */
/** SECTION Regler */
class Regler extends Betriebsmittel {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** !SECTION  */
/** SECTION Relais */
class Relais extends Betriebsmittel {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** !SECTION  */
/** SECTION Schalter */
class Schalter extends Betriebsmittel {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** !SECTION  */
/** SECTION Schütze */
class Schuetze extends Betriebsmittel {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** !SECTION  */
/** SECTION Schutzeinrichtungen */
class Schutzeinrichtungen extends Betriebsmittel {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** !SECTION  */
/** SECTION Sensoren */
class Sensoren extends Betriebsmittel {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** !SECTION  */
/** SECTION Steckvorrichtungen */
class Steckvorrichtungen extends Betriebsmittel {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}

/** SECTION Stecker */
class Stecker extends Steckvorrichtungen {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaftenften;
  }
}
/** !SECTION  */
/** SECTION Steckerleiste */
class Steckerleiste extends Steckvorrichtungen {
  constructor(Eigenschaftenften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** !SECTION  */
/** !SECTION  */

/** SECTION Übertragungswege */
class Uebertragungswege extends Betriebsmittel {
  constructor(Eigenschaften) {
    super();
    // this.Eigenschaften = Eigenschaften;
  }
}

/** SECTION Antenne */
class Antenne extends Uebertragungswege {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** !SECTION  */

/** SECTION Draht  */
class Draht extends Uebertragungswege {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}

/** !SECTION Draht  */

/** SECTION Kabel */
class Kabel extends Uebertragungswege {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** !SECTION Kabel */

/** SECTION Leitung */
class Leitung extends Uebertragungswege {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** !SECTION Leitung */

/** SECTION Schiene */
class Schiene extends Uebertragungswege {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** !SECTION  */

/** !SECTION  */

/** SECTION  Umsetzer */
class Umsetzer extends Betriebsmittel {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** !SECTION  */
/** SECTION Verschiedenes */
class Verschiedenes extends Betriebsmittel {
  constructor() {
    super();
  }
}

/** SECTION Verbraucher */
class Verbraucher extends Verschiedenes {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
    this.Berechnung = {};
  }
}
/** !SECTION Verbraucher */

/** !SECTION  */
/** SECTION Verstärker */
class Verstaerker extends Betriebsmittel {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
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
  }

  //TODO: Rmap Operationen schreiben
}

/** SECTION Widerstand  */
class Widerstand extends Widerstaende {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
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
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** SECTION Kaltleiter */
class Kaltleiter extends Thermistor {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** SECTION KeramischeKaltleiter */
class KeramischerKaltleiter extends Kaltleiter {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
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
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
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
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
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
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}

/** !SECTION  */
/** !SECTION  */
/** !SECTION  */
/** !SECTION  */
/** !SECTION  */
/** !SECTION Betriebsmittel */

exports.Verbraucher = Verbraucher;
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

// exports.Erder = Erder;
// exports.Erdungssammelleitung = Erdungssammelleitung;
// exports.Fahrleitung = Fahrleitung;
// exports.Freileitung = Freileitung;
// exports.Hochfrequenzleitung = Hochfrequenzleitung;
// exports.OffenGelegteLeing = OffenGelegteLeing;
// exports.Sammelschiene = Sammelschiene;

exports.Schiene = Schiene;

// exports.Schleifenleitung = Schleifenleitung;
// exports.Stromschiene = Stromschiene;
// exports.Blankeleitung = Blankeleitung;
// exports.Eindrahtleitung = Eindrahtleitung;
// exports.Lahnlitzeleitung = Lahnlitzeleitung;
// exports.Litzeleitung = Litzeleitung;
// exports.Fernmeldeleitung = Fernmeldeleitung;
// exports.BesondererZweck = BesondererZweck;
// exports.FesteLegung = FesteLegung;
// exports.Konfektioniert = Konfektioniert;
// exports.OrtsveraenderlicheLegung = OrtsveraenderlicheLegung;
// exports.Starkstromleitung = Starkstromleitung;
// exports.Isolierteleitung = Isolierteleitung;

exports.Leitung = Leitung;

// exports.Fernmeldekabel = Fernmeldekabel;
// exports.Hochfrequenzkabel = Hochfrequenzkabel;
// exports.Starkstromkabel = Starkstromkabel;

exports.Kabel = Kabel;

// exports.Aluminiumdraht = Aluminiumdraht;
// exports.Kupferdraht = Kupferdraht;
// exports.Legierungsdraht = Legierungsdraht;
// exports.Blank = Blank;
// exports.Isoliert = Isoliert;
// exports.Runddraht = Runddraht;
// exports.Wickeldraht = Wickeldraht;

exports.Draht = Draht;

// exports.Draehte = Draehte;

exports.Antenne = Antenne;

// intern?  exports.Uebertragungswege = Uebertragungswege;

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
