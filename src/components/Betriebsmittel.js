require("use-strict");
const { Components } = require("./components.js");

/** SECTION Betriebsmittel */
class Betriebsmittel extends Components {}

/** SECTION Abschlüsse */
class Abschluesse extends Betriebsmittel {}

/** !SECTION  */
/** SECTION  Baugruppen */
class Baugruppen extends Betriebsmittel {}

/** !SECTION  */
/** SECTION Zweipole */
class Zweipole extends Baugruppen {}

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
class ElektrischeMaschinen extends Betriebsmittel {}

/** SECTION Starr */
class Starr extends ElektrischeMaschinen {}

/** SECTION  Ruhende Elektrische Maschinen*/
class RuhendeElektrischeMaschinen extends Starr {}

/** SECTION Transformatoren */
class Transformatoren extends RuhendeElektrischeMaschinen {}

/** SECTION Transformator  */
class Transformator extends Transformatoren {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** SECTION Transaktor */
class Transaktor extends Transformatoren {}

/** !SECTION  */
/** !SECTION  */
/** SECTION Messwandler */
class Messwandler extends Transformator {}

/** SECTION Stromwandler */
class Stromwandler extends Messwandler {}

/** !SECTION  */
/** SECTION Spannungswandler */
class Spannungswandler extends Messwandler {}

/** !SECTION  */
/** !SECTION Messwandler */
/** SECTION  Manteltransformator */
class Manteltransformator extends Transformator {}

/** !SECTION  */
/** SECTION Kerntransformator */
class Kerntransformator extends Transformator {}

/** SECTION Transformator mit Mittenabgriff */
class TransformatorMitMittenabgriff extends Kerntransformator {}

/** !SECTION  */
/** SECTION Ringkerntransformator */
class Ringkerntransformator extends Kerntransformator {}

/** !SECTION  */
/** SECTION Einphasentransformator */
class Einphasentransformator extends Kerntransformator {}

/** !SECTION  */
/** SECTION Dreiphasentransformator */
class Dreiphasentransformator extends Kerntransformator {}

/** !SECTION  */
/** SECTION  AudioTransformator */
class AudioTransformator extends Kerntransformator {}

/** !SECTION  */
/** !SECTION  */
/** SECTION Impulstransformator */
class Impulstransformator extends Transformator {}

/** !SECTION  */
/** SECTION HF Transformator */
class HFTransformator extends Transformator {}
/** !SECTION  */
/** !SECTION  */
/** !SECTION  */
/** !SECTION  */
/** SECTION Beweglich */
class Beweglich extends ElektrischeMaschinen {}

/** SECTION  Rotierende */
class Rotierende extends Beweglich {}

/** SECTION Umformer */
class Umformer extends Rotierende {}

/** !SECTION  */
/** SECTION Synchronmaschinen */
class Synchronmaschinen extends Rotierende {}

/** !SECTION  */
/** SECTION Motoren */
class Motoren extends Rotierende {}

/** !SECTION  */
/** SECTION Kommutator Maschinen */
class KommutatorMaschinen extends Rotierende {}

/** SECTION GleichstromMaschinen */
class GleichstromMaschinen extends KommutatorMaschinen {}

/** !SECTION  */
/** SECTION EinphasenKommutatorMaschinen */
class EinphasenKommutatorMaschinen extends KommutatorMaschinen {}

/** !SECTION  */
/** SECTION DreiphasenKommutatorMaschinen */
class DreiphasenKommutatorMaschinen extends KommutatorMaschinen {}

/** !SECTION  */
/** !SECTION  */
/** SECTION Generatoren */
class Generatoren extends Rotierende {}

/** !SECTION  */
/** SECTION Asynchronmaschinen */
class Asynchronmaschinen extends Rotierende {}

/** !SECTION  */
/** !SECTION  */
/** !SECTION  */
/** !SECTION  */
/** SECTION Filter */
class Filter extends Betriebsmittel {}
/** !SECTION  */
/** SECTION GeraeteMitElektrischenAntrieb */
class GeraeteMitElektrischenAntrieb extends Betriebsmittel {}

/** !SECTION  */
/** SECTION Halbleiter */
class Halbleiter extends Betriebsmittel {}

/** !SECTION  */
/** SECTION Induktivitaet */
class Induktivitaet extends Betriebsmittel {}

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
class Variometer extends Spule {}

/** !SECTION  */
/** SECTION SpuleOhneKern */
class SpuleOhneKern extends Spule {}

/** SECTION Zylinderspule */
class Zylinderspule extends SpuleOhneKern {}

/** !SECTION  */
/** SECTION Ringspule */
class Ringspule extends SpuleOhneKern {}

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
class EinlagigeSpule extends SpuleOhneKern {}

/** !SECTION  */
/** SECTION  AbgeschirmteSpule*/
class AbgeschirmteSpule extends SpuleOhneKern {}

/** !SECTION  */
/** !SECTION  */
/** SECTION SpuleMitKern */
class SpuleMitKern extends Spule {}

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
class MagnetischeBauelementeDigitalerEinrichtungen extends Induktivitaet {}

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
class Klemmleiste extends Klemme {}
/** !SECTION  */
/** !SECTION  */
/** SECTION Kondensatoren */
class Kondensatoren extends Betriebsmittel {}

/** !SECTION  */
/** SECTION Leiter */
class Leiter extends Betriebsmittel {}
/** !SECTION  */
/** SECTION Melder */
class Melder extends Betriebsmittel {}

/** !SECTION  */
/** SECTION Messgeraete */
class Messgeraete extends Betriebsmittel {}

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
class Phasenwinkelmesser extends Messgeraete {}

/** !SECTION  */
/** SECTION MagnetischeGroessemesser */
class MagnetischeGroessemesser extends Messgeraete {}

/** !SECTION  */
/** SECTION Leistungsmesser */
class Leistungsmesser extends Messgeraete {}

/** !SECTION  */
/** SECTION Impedanzmesser */
class Impedanzmesser extends Messgeraete {}

/** !SECTION  */
/** SECTION Frequenzmesser */
class Frequenzmesser extends Messgeraete {}

/** !SECTION  */
/** SECTION Energiemesser */
class Energiemesser extends Messgeraete {}

/** !SECTION  */
/** !SECTION  */
/** SECTION Prüfgeräte */
class Pruefgeraete extends Betriebsmittel {}

/** !SECTION  */
/** SECTION Regler */
class Regler extends Betriebsmittel {}

/** !SECTION  */
/** SECTION Relais */
class Relais extends Betriebsmittel {}

/** !SECTION  */
/** SECTION Schalter */
class Schalter extends Betriebsmittel {}

/** !SECTION  */
/** SECTION Schütze */
class Schuetze extends Betriebsmittel {}
/** !SECTION  */
/** SECTION Schutzeinrichtungen */
class Schutzeinrichtungen extends Betriebsmittel {}

/** !SECTION  */
/** SECTION Sensoren */
class Sensoren extends Betriebsmittel {}

/** !SECTION  */
/** SECTION Steckvorrichtungen */
class Steckvorrichtungen extends Betriebsmittel {}

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
class Uebertragungswege extends Betriebsmittel {}

/** SECTION Antenne */
class Antenne extends Uebertragungswege {}
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
class Umsetzer extends Betriebsmittel {}
/** !SECTION  */
/** SECTION Verschiedenes */
class Verschiedenes extends Betriebsmittel {}

/** SECTION Verbraucher */
class Verbraucher extends Verschiedenes {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** !SECTION Verbraucher */

/** SECTION Gluehlampe */
class Gluehlampe extends Verschiedenes {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** !SECTION Gluehlampe */

/** !SECTION Verschiedenes */
/** SECTION Verstärker */
class Verstaerker extends Betriebsmittel {}

/** !SECTION  */
/** SECTION Wähler */
class Waehler extends Betriebsmittel {}

/** !SECTION  */
/** SECTION Widerstände */
class Widerstaende extends Betriebsmittel {}

/** SECTION Widerstand  */
class Widerstand extends Widerstaende {
  constructor(Eigenschaften) {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** !SECTION  */
/** SECTION ParameterabhaengigeHalbleiterwiderstaende */
class ParameterabhaengigeHalbleiterwiderstaende extends Widerstaende {}

/** SECTION NichtelektrischeParameter */
class NichtelektrischeParameter extends ParameterabhaengigeHalbleiterwiderstaende {}

/** SECTION Temperatur */
class Temperatur extends NichtelektrischeParameter {}

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
class Strahlung extends NichtelektrischeParameter {}

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
class MagnetischesFeld extends NichtelektrischeParameter {}

/** SECTION Feldplatte */
class Feldplatte extends MagnetischesFeld {}

/** !SECTION  */
/** !SECTION  */
/** SECTION Druck */
class Druck extends NichtelektrischeParameter {}

/** !SECTION  */
/** !SECTION  */
/** SECTION ElektrischeParameter */
class ElektrischeParameter extends ParameterabhaengigeHalbleiterwiderstaende {}

/** SECTION Spannung */
class Spannung extends ElektrischeParameter {}

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
exports.Gluehlampe = Gluehlampe;

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
