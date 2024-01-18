require("use-strict");
const path = require("path");

// Klassenstrukturen
// nicht Visualisierung!!!

const PElektrotechnik = "src/components/Elektrotechnik";
const PRohrleitungstechnik = "src/components/Rohrleitungstechnik";
const PMathematik = "src/components/Mathematik";
const PBauelemente = "src/components/Bauelemente";
const PBetriebsmittel = "src/components/Betriebsmittel";
const PDatenverarbeitung = "src/components/Datenverarbeitung";
const PPhysikalischeChemie = "src/components/PhysikalischeChemie";
const PVerbindungstechnik = "src/components/Verbindungstechnik";
const PWerkstoff = "src/components/Werkstoff";

/** SECTION Werkstoff */
const { Werkstoff } = require(path.resolve(`${PWerkstoff}/Werkstoff.js`));

const { Eisenwerkstoff } = require(path.resolve(`${PWerkstoff}/Werkstoff.js`));
const { Baustahl } = require(path.resolve(`${PWerkstoff}/Werkstoff.js`));
const { Automatenstahl } = require(path.resolve(`${PWerkstoff}/Werkstoff.js`));
const { Einsatzstahl } = require(path.resolve(`${PWerkstoff}/Werkstoff.js`));
const { Verguetungsstahl } = require(path.resolve(
  `${PWerkstoff}/Werkstoff.js`
));
const { Werkzeugstahl } = require(path.resolve(`${PWerkstoff}/Werkstoff.js`));
const { Leiterwerkstoff } = require(path.resolve(`${PWerkstoff}/Werkstoff.js`));
const { MagnetischerWerkstoff } = require(path.resolve(
  `${PWerkstoff}/Werkstoff.js`
));

/** !SECTION Werkstoff */

/** SECTION Bauelemente */
const { Bauelemente } = require(path.resolve(`${PBauelemente}/Bauelemente.js`));

/** SECTION Platten */
const { Platten } = require(path.resolve(`${PBauelemente}/Platten/Platten.js`));

/** SECTION Glasplatten */
const { Glasplatte } = require(path.resolve(
  `${PBauelemente}/Platten/Glasplatte/Glasplatte.js`
));
/** !SECTION Glasplatten */
/** !SECTION Platten */

/** SECTION Rohrleitungen */

const { Rohrleitungen } = require(path.resolve(
  `${PBauelemente}/Rohrleitungen/Rohrleitungen.js`
));

/** SECTION Bleirohre */
const { Bleirohr } = require(path.resolve(
  `${PBauelemente}/Rohrleitungen/Bleirohre/Bleirohr.js`
));
/** !SECTION Bleirohre */
/** !SECTION Rohrleitungen */

/** !SECTION Bauelemente */

/** SECTION  Betriebsmittel*/

const { Betriebsmittel } = require(path.resolve(
  `${PBetriebsmittel}/Betriebsmittel.js`
));

/** SECTION Baugruppen */
const { Baugruppen } = require(path.resolve(
  `${PBetriebsmittel}/Baugruppen/Baugruppen.js`
));

/** SECTION Zweipole */
const { Zweipole } = require(path.resolve(
  `${PBetriebsmittel}/Baugruppen/Zweipole/Zweipole.js`
));

/** SECTION PassiverZweipol */
const { PassiverZweipol } = require(path.resolve(
  `${PBetriebsmittel}/Baugruppen/Zweipole/PassiverZweipol/PassiverZweipol.js`
));

/** SECTION Reihenschaltung */
const { Reihenschaltung } = require(path.resolve(
  `${PBetriebsmittel}/Baugruppen/Zweipole/PassiverZweipol/Reihenschaltung.js`
));
/** !SECTION Reihenschaltung */

/** !SECTION PassiverZweipol */

/** !SECTION Zweipole */

/** !SECTION Baugruppen */

/** SECTION   Widerstaende*/
const { Widerstaende } = require(path.resolve(
  `${PBetriebsmittel}/Widerstaende/Widerstaende.js`
));

/** SECTION Widerstand */
const { Widerstand } = require(path.resolve(
  `${PBetriebsmittel}/Widerstaende/Widerstand/Widerstand.js`
));
/** !SECTION Widerstand */

/** SECTION ParameterabhaengigeHalbleiterwiderstaende */
const { ParameterabhaengigeHalbleiterwiderstande } = require(path.resolve(
  `${PBetriebsmittel}/Widerstaende/ParameterabhaengigeHalbleiterwiderstaende/ParameterabhaengigeHalbleiterwiderstaende.js`
));

/** SECTION ElektrischeParameter */
/** SECTION Spannung */
/** SECTION Varistor */
const { Varistor } = require(path.resolve(
  `${PBetriebsmittel}/Widerstaende/ParameterabhaengigeHalbleiterwiderstaende/ElektrischeParameter/Spannung/Varistoren/Varistor.js`
));
/** !SECTION Varistor */
/** !SECTION Spannung */
/** !SECTION ElektrischeParameter */

/** SECTION NichtelektrischeParameter */

/** SECTION ElektrischesFeld */
/** SECTION Feldplatte */
const { Feldplatte } = require(path.resolve(
  `${PBetriebsmittel}/Widerstaende/ParameterabhaengigeHalbleiterwiderstaende/NichtelektrischeParameter/MagnetischesFeld/Feldplatte/Feldplatte.js`
));
/** !SECTION Feldplatte */
/** !SECTION ElektrischesFeld */

/** SECTION Strahlung */
/** SECTION Fotowiderstand */
const { Fotowiderstand } = require(path.resolve(
  `${PBetriebsmittel}/Widerstaende/ParameterabhaengigeHalbleiterwiderstaende/NichtelektrischeParameter/Strahlung/Fotowiderstand/Fotowiderstand.js`
));
/** !SECTION Fotowiderstand */
/** !SECTION Strahlung */

/** SECTION Temperatur */
/** SECTION Thermistor */
/** SECTION Heissleiter */
const { Heissleiter } = require(path.resolve(
  `${PBetriebsmittel}/Widerstaende/ParameterabhaengigeHalbleiterwiderstaende/NichtelektrischeParameter/Temperatur/Thermistor/Heissleiter/Heissleiter.js`
));
/** !SECTION Heissleiter */
/** SECTION Kaltleiter */
const { Kaltleiter } = require(path.resolve(
  `${PBetriebsmittel}/Widerstaende/ParameterabhaengigeHalbleiterwiderstaende/NichtelektrischeParameter/Temperatur/Thermistor/Kaltleiter/Kaltleiter.js`
));
/** SECTION KeramischeKaltleiter */
/** !SECTION KeramischeKaltleiter */
/** !SECTION Kaltleiter */
/** !SECTION Thermistor */
/** !SECTION Temperatur */
/** !SECTION NichtlektrischeParameter */
/** !SECTION ParameterabhaengigeHalbleiterwiderstaende */
/** !SECTION Betriebsmittel Widerstaende*/

/** SECTION  Uebertragungswege */
const { Uebertragungswege } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Uebertragungswege.js`
));

/** SECTION Kabel */
const { Kabel } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Kabel/Kabel.js`
));

/** SECTION Fernmeldekabel */
const { Fernmeldekabel } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Kabel/Fernmeldekabel/Fernmeldekabel.js`
));
/** !SECTION Fernmeldekabel */

/** SECTION Hochfrequenzkabel */
const { Hochfrequenzkabel } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Kabel/Hochfrequenzkabel/Hochfrequenzkabel.js`
));
/** !SECTION Hochfrequenzkabel */

/** SECTION  Starkstromkabel */
const { Starkstromkabel } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Kabel/Starkstromkabel/Starkstromkabel.js`
));
/** !SECTION Starkstromkabel */

/** !SECTION Kabel */

/** SECTION Leitung */
const { Leitung } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/Leitung.js`
));

/** SECTION IsolierteLeitung */
const { IsolierteLeitung } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/IsolierteLeitung/IsolierteLeitung.js`
));

/** SECTION Fernmeldeleitung */
const { Fernmeldeleitung } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/IsolierteLeitung/Fernmeldeleitung/Fernmeldeleitung.js`
));

/** SECTION Eindrahtleitung */
const { Eindrahtleitung } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/IsolierteLeitung/Fernmeldeleitung/Eindrahtleitung/Eindrahtleitung.js`
));
/** !SECTION Eindrahtleitung */

/** SECTION Lahnlitzeleitung */
const { Lahnlitzeleitung } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/IsolierteLeitung/Fernmeldeleitung/Lahnlitzeleitung/Lahnlitzeleitung.js`
));
/** !SECTION Lahnlitzeleitung */

/** SECTION Litzeleitung */
const { Litzeleitung } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/IsolierteLeitung/Fernmeldeleitung/Litzeleitung/Litzeleitung.js`
));
/** !SECTION Litzeleitung */

/** !SECTION Fernmeldeleitung */

/** SECTION Starkstromleitung */
const { Starkstromleitung } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/IsolierteLeitung/Starkstromleitung/Starkstromleitung.js`
));

/** SECTION besondererZweck */
const { BesondererZweck } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/IsolierteLeitung/Starkstromleitung/BesondererZweck/BesondererZweck.js`
));

/** !SECTION besondererZweck */

/** SECTION festeVerlegung */

const { FesteLegung } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/IsolierteLeitung/Starkstromleitung/FesteLegung/FesteLegung.js`
));

/** !SECTION festeVerlegung */

/** SECTION Konfektioniert */
const { Konfektioniert } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/IsolierteLeitung/Starkstromleitung/Konfektioniert/Konfektioniert.js`
));

/** !SECTION Konfektioniert */

/** SECTION ortsveraenderlicheBetriebsmittel */
const { OrtsveraenderlicheLegung } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/IsolierteLeitung/Starkstromleitung/OrtsveraenderlicheLegung/OrtsveraenderlicheLegung.js`
));

/** !SECTION ortsveraenderlicheBetriebsmittel */

/** !SECTION Starkstromleitung */

/** !SECTION IsolierteLeitung */

/** SECTION BlankeLeitung */
const { BlankeLeitung } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/BlankeLeitung/BlankeLeitung.js`
));

/** SECTION Erder */
const { Erder } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/BlankeLeitung/Erder/Erder.js`
));

/** !SECTION Erder  */

/** SECTION Erdungssammelleitung */
const { Erdungssammelleitung } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/BlankeLeitung/Erdungssammelleitung/Erdungssammelleitung.js`
));

/** !SECTION Erdungssammelleitung  */

/** SECTION Fahrleitung */
const { Fahrleitung } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/BlankeLeitung/Fahrleitung/Fahrleitung.js`
));

/** !SECTION Fahrleitung  */

/** SECTION Freileitung */
const { Freileitung } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/BlankeLeitung/Freileitung/Freileitung.js`
));
/** !SECTION Freileitung  */

/** SECTION Hochfrequenzleitung */
const { Hochfrequenzleitung } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/BlankeLeitung/Hochfrequenzleitung/Hochfrequenzleitung.js`
));

/** !SECTION Hochfrequenzleitung  */

/** SECTION OffenGelegteLeitung */
const { OffenGelegteLeitung } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/BlankeLeitung/OffenGelegteLeitung/OffenGelegteLeitung.js`
));

/** !SECTION OffenGelegteLeitung  */

/** SECTION Sammelschiene */
const { Sammelschiene } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/BlankeLeitung/Sammelschiene/Sammelschiene.js`
));

/** !SECTION Sammelschiene  */

/** SECTION Schiene */
const { Schiene } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/BlankeLeitung/Schiene/Schiene.js`
));

/** !SECTION Schiene  */

/** SECTION Schleifenleitung */
const { Schleifenleitung } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/BlankeLeitung/Schleifenleitung/Schleifenleitung.js`
));

/** !SECTION Schleifenleitung */

/** SECTION Stromschiene */
const { Stromschiene } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/BlankeLeitung/Stromschiene/Stromschiene.js`
));

/** !SECTION Stromschiene  */

/** !SECTION BlankeLeitung */

/** !SECTION Leitung  */

/** SECTION Draehte */
const { Draehte } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Draehte/Draehte.js`
));

/** SECTION Draht */
const { Draht } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Draehte/Draht/Draht.js`
));

/** SECTION Runddraht */
const { Runddraht } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Draehte/Draht/Runddraht/Runddraht.js`
));

/** SECTION Blank */
const { Blank } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Draehte/Draht/Runddraht/Blank/Blank.js`
));

/** SECTION Kupferdraht */
const { Kupferdraht } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Draehte/Draht/Runddraht/Blank/Kupferdraht/Kupferdraht.js`
));
/** !SECTION Kupferdraht */

/** SECTION Aluminiumdraht */
const { Aluminiumdraht } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Draehte/Draht/Runddraht/Blank/Aluminiumdraht/Aluminiumdraht.js`
));
/** !SECTION Aluminiumdraht */

/** SECTION Legierungsdraht */
const { Legierungsdraht } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Draehte/Draht/Runddraht/Blank/Legierungsdraht/Legierungsdraht.js`
));
/** !SECTION Legierungsdraht */

/** !SECTION Blank */

/** SECTION Isoliert */
const { Isoliert } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Draehte/Draht/Runddraht/Isoliert/Isoliert.js`
));

/** !SECTION Isoliert */

/** !SECTION Runddraht */

/** !SECTION Draht */

/** SECTION Wickeldraht */
const { Wickeldraht } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Draehte/Wickeldraht/Wickeldraht.js`
));
/** !SECTION Wickeldraht */

/** !SECTION Draehte */

/** !SECTION Uebertragungswege */

/** SECTION Induktivitaet */

const { Induktivitaet } = require(path.resolve(
  `${PBetriebsmittel}/Induktivitaet/Induktivitaet.js`
));

/** SECTION Spule */
const { Spule } = require(path.resolve(
  `${PBetriebsmittel}/Induktivitaet/Spule/Spule.js`
));

/** SECTION SpuleMitKern */
const { SpuleMitKern } = require(path.resolve(
  `${PBetriebsmittel}/Induktivitaet/Spule/SpuleMitKern/SpuleMitKern.js`
));

/** SECTION Magnetspule */
const { Magnetspule } = require(path.resolve(
  `${PBetriebsmittel}/Induktivitaet/Spule/SpuleMitKern/Magnetspule/Magnetspule.js`
));
/** !SECTION Magnetspule */

/** !SECTION SpuleMitKern */

/** SECTION SpuleOhneKern */
const { SpuleOhneKern } = require(path.resolve(
  `${PBetriebsmittel}/Induktivitaet/Spule/SpuleOhneKern/SpuleOhneKern.js`
));

/** SECTION AbgeschirmteSpule */
const { AbgeschirmteSpule } = require(path.resolve(
  `${PBetriebsmittel}/Induktivitaet/Spule/SpuleOhneKern/AbgeschirmteSpule/AbgeschirmteSpule.js`
));
/** !SECTION AbgeschirmteSpule */

/** SECTION EinlagigeSpule */
const { EinlagigeSpule } = require(path.resolve(
  `${PBetriebsmittel}/Induktivitaet/Spule/SpuleOhneKern/EinlagigeSpule/EinlagigeSpule.js`
));
/** !SECTION EinlagigeSpule */

/** SECTION MehrlagigeSpule */
const { MehrlagigeSpule } = require(path.resolve(
  `${PBetriebsmittel}/Induktivitaet/Spule/SpuleOhneKern/MehrlagigeSpule/MehrlagigeSpule.js`
));
/** !SECTION MehrlagigeSpule */

/** SECTION Ringspule */
const { Ringspule } = require(path.resolve(
  `${PBetriebsmittel}/Induktivitaet/Spule/SpuleOhneKern/Ringspule/Ringspule.js`
));
/** !SECTION Ringspule */

/** SECTION Zylinderspule */
const { Zylinderspule } = require(path.resolve(
  `${PBetriebsmittel}/Induktivitaet/Spule/SpuleOhneKern/Zylinderspule/Zylinderspule.js`
));
/** !SECTION Zylinderspule */
/** !SECTION SpuleOhneKern */

/** SECTION Variometer */
const { Variometer } = require(path.resolve(
  `${PBetriebsmittel}/Induktivitaet/Spule/Variometer/Variometer.js`
));
/** !SECTION Variometer */

/** !SECTION Spule */

/** !SECTION Induktivitaet */

/** SECTION Verschiedens */
const { Verschiedenes } = require(path.resolve(
  `${PBetriebsmittel}/Verschiedenes/Verschiedenes.js`
));
/** SECTION Elektrode */
const { Elektrode } = require(path.resolve(
  `${PBetriebsmittel}/Verschiedenes/Elektrode/Elektrode.js`
));
/** !SECTION Elektrode */

/** SECTION Beleuchtung */
const { Beleuchtung } = require(path.resolve(
  `${PBetriebsmittel}/Verschiedenes/Beleuchtung/Beleuchtung.js`
));

/** SECTION Lampe */
const { Lampe } = require(path.resolve(
  `${PBetriebsmittel}/Verschiedenes/Beleuchtung/Lampe/Lampe.js`
));

/** SECTION Gluehlampe */
const { Gluehlampe } = require(path.resolve(
  `${PBetriebsmittel}/Verschiedenes/Beleuchtung/Lampe/Gluehlampe/Gluehlampe.js`
));

/** !SECTION Gluehlampe */

/** !SECTION Lampe */

/** !SECTION Beleuchtung */

/** !SECTION Verschiedens */

/** SECTION Messgeraete */
const { Messgeraete } = require(path.resolve(
  `${PBetriebsmittel}/Messgeraete/Messgeraete.js`
));

/** SECTION Energiemesser */
const { Energiemesser } = require(path.resolve(
  `${PBetriebsmittel}/Messgeraete/Energiemesser/Energiemesser.js`
));
/** !SECTION Energiemesser */

/** SECTION Frequenzmesser */
const { Frequenzmesser } = require(path.resolve(
  `${PBetriebsmittel}/Messgeraete/Frequenzmesser/Frequenzmesser.js`
));
/** !SECTION Frequenzmesser */

/** SECTION Impedanzmesser */
const { Impedanzmesser } = require(path.resolve(
  `${PBetriebsmittel}/Messgeraete/Impedanzmesser/Impedanzmesser.js`
));
/** !SECTION Impedanzmesser */

/** SECTION Leistungsmesser */
const { Leistungsmesser } = require(path.resolve(
  `${PBetriebsmittel}/Messgeraete/Leistungsmesser/Leistungsmesser.js`
));
/** !SECTION Leistungsmesser */

/** SECTION MagnetischeGroessemesser */
const { MagnetischeGroessemesser } = require(path.resolve(
  `${PBetriebsmittel}/Messgeraete/MagnetischeGroessemesser/MagnetischeGroessemesser.js`
));
/** !SECTION MagnetischeGroessemesser */

/** SECTION Phasenwinkelmesser */
const { Phasenwinkelmesser } = require(path.resolve(
  `${PBetriebsmittel}/Messgeraete/Phasenwinkelmesser/Phasenwinkelmesser.js`
));
/** !SECTION Phasenwinkelmesser */

/** SECTION Spannungsmesser */
const { Spannungsmesser } = require(path.resolve(
  `${PBetriebsmittel}/Messgeraete/Spannungsmesser/Spannungsmesser.js`
));
/** !SECTION Spannungsmesser */

/** SECTION Strommesser */
const { Strommesser } = require(path.resolve(
  `${PBetriebsmittel}/Messgeraete/Strommesser/Strommesser.js`
));
/** !SECTION Strommesser */

/** SECTION Zeitmesser */
const { Zeitmesser } = require(path.resolve(
  `${PBetriebsmittel}/Messgeraete/Zeitmesser/Zeitmesser.js`
));
/** !SECTION Zeitmesser */

/** !SECTION Messgeraete */

/** SECTION Transformator */
const { Transformator } = require(path.resolve(
  `${PBetriebsmittel}/Transformator/Transformator.js`
));

/** SECTION AudioTransformator */
const { Audiotransformator } = require(path.resolve(
  `${PBetriebsmittel}/Transformator/Audiotransformator/Audiotransformator.js`
));
/** !SECTION AudioTransformator */

/** SECTION Dreiphasentransformator */
const { Dreiphasentransformator } = require(path.resolve(
  `${PBetriebsmittel}/Transformator/Dreiphasentransformator/Dreiphasentransformator.js`
));
/** !SECTION Dreiphasentransformator */

/** SECTION Einphasentransformator */
const { Einphasentransformator } = require(path.resolve(
  `${PBetriebsmittel}/Transformator/Einphasentransformator/Einphasentransformator.js`
));
/** !SECTION Einphasentransformator */

/** SECTION HFTransformator */
const { HFTransformator } = require(path.resolve(
  `${PBetriebsmittel}/Transformator/HFTransformator/HFTransformator.js`
));
/** !SECTION HFTransformator */

/** SECTION Impulstransformator */
const { Impulstransformator } = require(path.resolve(
  `${PBetriebsmittel}/Transformator/Impulstransformator/Impulstransformator.js`
));
/** !SECTION Impulstransformator */

/** SECTION Messwandler */
const { Messwandler } = require(path.resolve(
  `${PBetriebsmittel}/Transformator/Messwandler/Messwandler.js`
));

/** SECTION Stromwandler */
const { Stromwandler } = require(path.resolve(
  `${PBetriebsmittel}/Transformator/Messwandler/Stromwandler/Stromwandler.js`
));
/** !SECTION Stromwandler */

/** SECTION Spannungswandler */
const { Spannungswandler } = require(path.resolve(
  `${PBetriebsmittel}/Transformator/Messwandler/Spannungswandler/Spannungswandler.js`
));
/** !SECTION Spannungswandler */

/** !SECTION Messwandler */

/** SECTION Transaktor */
const { Transaktor } = require(path.resolve(
  `${PBetriebsmittel}/Transformator/Transaktor/Transaktor.js`
));
/** !SECTION Transaktor */

/** SECTION TransformatorMitMittenabgriff */
const { TransformatorMitMittenabgriff } = require(path.resolve(
  `${PBetriebsmittel}/Transformator/TransformatorMitMittenabgriff/TransformatorMitMittenabgriff.js`
));
/** !SECTIONTransformatorMitMittenabgriff */

/** !SECTION Transformator */

/** !SECTION Betriebsmittel */

/** SECTION PhysikalischeChemie */
const { PhysikalischeChemie } = require(path.resolve(
  `${PPhysikalischeChemie}/PhysikalischeChemie.js`
));

/** SECTION Elektrochemie */
const { Elektrochemie } = require(path.resolve(
  `${PPhysikalischeChemie}/Elektrochemie/Elektrochemie.js`
));

/** SECTION Elektrolyt */
const { Elektrolyt } = require(path.resolve(
  `${PPhysikalischeChemie}/Elektrochemie/Elektrolyt/Elektrolyt.js`
));

/** !SECTION Elektrolyt */

/** !SECTION Elektrochemie */

/** !SECTION PhysikalischeChemie */

/** SECTION Verbindungstechnik */
const { Verbindungstechnik } = require(path.resolve(
  `${PVerbindungstechnik}/Verbindungstechnik.js`
));

/** SECTION BedingtLoesbareVerbindung */
const { BedingtLoesbareVerbindung } = require(path.resolve(
  `${PVerbindungstechnik}/BedingtLoesbareVerbindung/BedingtLoesbareVerbindung.js`
));

/** SECTION Drahtwickeltechnik */
const { Drahtwickeltechnik } = require(path.resolve(
  `${PVerbindungstechnik}/BedingtLoesbareVerbindung/Drahtwickeltechnik/Drahtwickeltechnik.js`
));
/** !SECTION Drahtwickeltechnik */

/** SECTION Einpresstechnik */
const { Einpresstechnik } = require(path.resolve(
  `${PVerbindungstechnik}/BedingtLoesbareVerbindung/Einpresstechnik/Einpresstechnik.js`
));

/** !SECTION Einpresstechnik */

/** SECTION Loettechnik */
const { Loettechnik } = require(path.resolve(
  `${PVerbindungstechnik}/BedingtLoesbareVerbindung/Loettechnik/Loettechnik.js`
));
/** !SECTION Loettechnik */

/** SECTION Schneidklemmtechnik */
const { Schneidklemmtechnik } = require(path.resolve(
  `${PVerbindungstechnik}/BedingtLoesbareVerbindung/Schneidklemmtechnik/Schneidklemmtechnik.js`
));
/** !SECTION Schneidklemmtechnik */

/** !SECTION BedingtLoesbareVerbindung */

/** SECTION LoesbareVerbindung */
const { LoesbareVerbindung } = require(path.resolve(
  `${PVerbindungstechnik}/LoesbareVerbindung/LoesbareVerbindung.js`
));

/** SECTION Klemmverbindung */
const { Klemmverbindung } = require(path.resolve(
  `${PVerbindungstechnik}/LoesbareVerbindung/Klemmverbindung/Klemmverbindung.js`
));
/** !SECTION Klemmverbindung */

/** SECTION QuetschUndSteckverbindung */
const { QuetschUndSteckverbindung } = require(path.resolve(
  `${PVerbindungstechnik}/LoesbareVerbindung/QuetschUndSteckverbindung/QuetschUndSteckverbindung.js`
));
/** !SECTION QuetschUndSteckverbindung */

/** SECTION SchraubVerbindung */
const { SchraubVerbindung } = require(path.resolve(
  `${PVerbindungstechnik}/LoesbareVerbindung/SchraubVerbindung/SchraubVerbindung.js`
));
/** !SECTION SchraubVerbindung */

/** !SECTION LoesbareVerbindung */

/** SECTION UnloesbareVerbindung */
const { UnloesbareVerbindung } = require(path.resolve(
  `${PVerbindungstechnik}/UnloesbareVerbindung/UnloesbareVerbindung.js`
));

/** SECTION Bonden */
const { Bonden } = require(path.resolve(
  `${PVerbindungstechnik}/UnloesbareVerbindung/Bonden/Bonden.js`
));

/** !SECTION Bonden */

/** SECTION Klebeverbindung */
const { Klebeverbindung } = require(path.resolve(
  `${PVerbindungstechnik}/UnloesbareVerbindung/Klebeverbindung/Klebeverbindung.js`
));

/** !SECTION Klebeverbindung */

/** SECTION Pressverbindung */
const { Pressverbindung } = require(path.resolve(
  `${PVerbindungstechnik}/UnloesbareVerbindung/Pressverbindung/Pressverbindung.js`
));

/** !SECTION Pressverbindung */

/** SECTION Schweisstechnik */
const { Schweisstechnik } = require(path.resolve(
  `${PVerbindungstechnik}/UnloesbareVerbindung/Schweisstechnik/Schweisstechnik.js`
));

/** !SECTION Schweisstechnik */

/** SECTION Spleissen */
const { Spleissen } = require(path.resolve(
  `${PVerbindungstechnik}/UnloesbareVerbindung/Spleissen/Spleissen.js`
));
/** !SECTION Spleissen */

/** !SECTION UnloesbareVerbindung */

/** !SECTION Verbindungstechnik */

/** !SECTION Betriebsmittel */

/** SECTION Kernel */

const { Elektro } = require(path.resolve("src/Kernel/Elektro.js"));
const { Rohrleitungstechnik } = require(path.resolve(
  "src/Kernel/Rohrleitungstechnik.js"
));
const { Arithmetik } = require(path.resolve("src/Kernel/Arithmetik.js"));
const { Planemetrie } = require(path.resolve("src/Kernel/Planemetrie.js"));

/** !SECTION Kernel */

// const { Rohrleitungen } = require(path.resolve(
//   `${PBauelemente}/Rohrleitungen/Rohrleitungen.js`
// ))

// const { Bleirohr } = require(path.resolve(
//   `${PBauelemente}/Rohrleitungen/Bleirohre/Bleirohr.js`
// ))

/** SECTION Dynamische Datenstrukturen */
const { Stack } = require(path.resolve(
  `${PDatenverarbeitung}/dynamischeDatenstrukturen/listen/stapel/stack.js`
));
/** !SECTION Dynamische Datenstrukturen */

module.exports = {
  Werkstoff,
  Eisenwerkstoff,
  Baustahl,
  Automatenstahl,
  Einsatzstahl,
  Verguetungsstahl,
  Werkzeugstahl,
  Leiterwerkstoff,
  MagnetischerWerkstoff,

  Bauelemente,
  Betriebsmittel,
  Baugruppen,
  Zweipole,
  PassiverZweipol,
  Rohrleitungen,
  Bleirohr,

  Reihenschaltung,
  Widerstand,
  Feldplatte,
  Fotowiderstand,
  Heissleiter,
  Kaltleiter,
  Varistor,
  Glasplatte,

  Leitung,
  BlankeLeitung,

  Erder,
  Erdungssammelleitung,
  Fahrleitung,
  Freileitung,
  Hochfrequenzleitung,
  OffenGelegteLeitung,
  Sammelschiene,
  Schiene,
  Schleifenleitung,
  Stromschiene,

  IsolierteLeitung,
  Fernmeldeleitung,
  Eindrahtleitung,
  Lahnlitzeleitung,
  Litzeleitung,

  Starkstromleitung,
  BesondererZweck,
  FesteLegung,
  Konfektioniert,
  OrtsveraenderlicheLegung,

  Draehte,
  Draht,
  Runddraht,
  Blank,
  Aluminiumdraht,
  Kupferdraht,
  Legierungsdraht,
  Isoliert,
  Wickeldraht,

  Induktivitaet,
  Spule,
  SpuleMitKern,
  Magnetspule,
  SpuleOhneKern,
  AbgeschirmteSpule,
  EinlagigeSpule,
  MehrlagigeSpule,
  Ringspule,
  Zylinderspule,
  Variometer,
  PhysikalischeChemie,
  Elektrochemie,
  Elektrolyt,
  Verschiedenes,
  Elektrode,
  Beleuchtung,
  Lampe,
  Gluehlampe,

  Messgeraete,
  Energiemesser,
  Frequenzmesser,
  Impedanzmesser,
  Leistungsmesser,
  MagnetischeGroessemesser,
  Phasenwinkelmesser,
  Spannungsmesser,
  Strommesser,
  Zeitmesser,

  Uebertragungswege,
  Kabel,
  Fernmeldekabel,
  Hochfrequenzkabel,
  Starkstromkabel,
  Transformator,
  Audiotransformator,
  Dreiphasentransformator,
  Einphasentransformator,
  HFTransformator,
  Impulstransformator,
  Messwandler,
  Stromwandler,
  Spannungswandler,
  Transaktor,
  Stack,

  Verbindungstechnik,

  BedingtLoesbareVerbindung,
  Drahtwickeltechnik,
  Einpresstechnik,
  Loettechnik,
  Schneidklemmtechnik,

  LoesbareVerbindung,
  Klemmverbindung,
  QuetschUndSteckverbindung,
  SchraubVerbindung,

  UnloesbareVerbindung,
  Bonden,
  Klebeverbindung,
  Pressverbindung,
  Schweisstechnik,
  Spleissen,

  Elektro,
  Arithmetik,
  Planemetrie,
  Rohrleitungstechnik,
};
