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

/** SECTION Platten Glasplatten */
const { Glasplatte } = require(path.resolve(
  `${PBauelemente}/Platten/Glasplatte/Glasplatte.js`
));
/** !SECTION Platten Glasplatten */
/** !SECTION Platten */

/** SECTION Rohrleitungen */

const { Rohrleitungen } = require(path.resolve(
  `${PBauelemente}/Rohrleitungen/Rohrleitungen.js`
));

/** SECTION Rohrleitungen Bleirohre */
const { Bleirohr } = require(path.resolve(
  `${PBauelemente}/Rohrleitungen/Bleirohre/Bleirohr.js`
));
/** !SECTION Rohrleitungen Bleirohre */
/** !SECTION Rohrleitungen */

/** !SECTION Bauelemente */

/** SECTION  Betriebsmittel*/

const { Betriebsmittel } = require(path.resolve(
  `${PBetriebsmittel}/Betriebsmittel.js`
));

/** SECTION Betriebsmittel Baugruppen */
const { Baugruppen } = require(path.resolve(
  `${PBetriebsmittel}/Baugruppen/Baugruppen.js`
));

/** SECTION Betriebsmittel Baugruppen Zweipole */
const { Zweipole } = require(path.resolve(
  `${PBetriebsmittel}/Baugruppen/Zweipole/Zweipole.js`
));

/** SECTION Betriebsmittel Baugruppen Zweipole PassiverZweipol */
const { PassiverZweipol } = require(path.resolve(
  `${PBetriebsmittel}/Baugruppen/Zweipole/PassiverZweipol/PassiverZweipol.js`
));

/** SECTION Betriebsmittel Baugruppen Zweipole Reihenschaltung */
const { Reihenschaltung } = require(path.resolve(
  `${PBetriebsmittel}/Baugruppen/Zweipole/PassiverZweipol/Reihenschaltung.js`
));
/** !SECTION Betriebsmittel Baugruppen Zweipole Reihenschaltung */

/** !SECTION Betriebsmittel Baugruppen Zweipole PassiverZweipol */

/** !SECTION Betriebsmittel Baugruppen Zweipole */

/** !SECTION Betriebsmittel Baugruppen */

/** SECTION  Betriebsmittel Widerstaende*/
const { Widerstaende } = require(path.resolve(
  `${PBetriebsmittel}/Widerstaende/Widerstaende.js`
));

/** SECTION Betriebsmittel Widerstaende Widerstand */
const { Widerstand } = require(path.resolve(
  `${PBetriebsmittel}/Widerstaende/Widerstand/Widerstand.js`
));
/** !SECTION Betriebsmittel Widerstaende Widerstand */

/** SECTION Betriebsmittel Widerstaende Feldplatte */
const { Feldplatte } = require(path.resolve(
  `${PBetriebsmittel}/Widerstaende/Feldplatte/Feldplatte.js`
));
/** !SECTION Betriebsmittel Widerstaende Feldplatte */

/** SECTION Betriebsmittel Widerstaende  Fotowiderstand */
const { Fotowiderstand } = require(path.resolve(
  `${PBetriebsmittel}/Widerstaende/Fotowiderstand/Fotowiderstand.js`
));
/** !SECTION Betriebsmittel Widerstaende Fotowiderstand */

/** SECTION Betriebsmittel Widerstaende Thermistor */

/** SECTION Betriebsmittel Widerstaende Thermistor Heissleiter */
const { Heissleiter } = require(path.resolve(
  `${PBetriebsmittel}/Widerstaende/Thermistor/Heissleiter/Heissleiter.js`
));
/** !SECTION Betriebsmittel Widerstaende Thermistor Heissleiter */

/** SECTION Betriebsmittel Widerstaende Thermistor Kaltleiter */
const { Kaltleiter } = require(path.resolve(
  `${PBetriebsmittel}/Widerstaende/Thermistor/Kaltleiter/Kaltleiter.js`
));
/** !SECTION Betriebsmittel Widerstaende Thermistor Kaltleiter */

/** !SECTION Betriebsmittel Widerstaende Thermistor */

/** SECTION Betriebsmittel Widerstaende Varistor */
const { Varistor } = require(path.resolve(
  `${PBetriebsmittel}/Widerstaende/Varistoren/Varistor.js`
));
/** !SECTION Betriebsmittel Widerstaende Varistor */

/** !SECTION Betriebsmittel Widerstaende*/

/** SECTION  Betriebsmittel Uebertragungswege */
const { Uebertragungswege } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Uebertragungswege.js`
));

/** SECTION Betriebsmittel Uebertragungswege Kabel */
const { Kabel } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Kabel/Kabel.js`
));

/** SECTION Betriebsmittel Uebertragungswege Kabel Fernmeldekabel */
const { Fernmeldekabel } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Kabel/Fernmeldekabel/Fernmeldekabel.js`
));
/** !SECTION Betriebsmittel Uebertragungswege Kabel Fernmeldekabel */

/** SECTION Betriebsmittel Uebertragungswege Kabel Hochfrequenzkabel */
const { Hochfrequenzkabel } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Kabel/Hochfrequenzkabel/Hochfrequenzkabel.js`
));
/** !SECTION Betriebsmittel Uebertragungswege Kabel Hochfrequenzkabel */

/** SECTION Betriebsmittel Uebertragungswege Kabel Starkstromkabel */
const { Starkstromkabel } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Kabel/Starkstromkabel/Starkstromkabel.js`
));
/** !SECTION Betriebsmittel Uebertragungswege Kabel Starkstromkabel */

/** !SECTION Betriebsmittel Uebertragungswege Kabel */

/** SECTION Betriebsmittel Uebertragungswege Leitung */
const { Leitung } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/Leitung.js`
));

/** SECTION Betriebsmittel Uebertragungswege Leitung IsolierteLeitung */
const { IsolierteLeitung } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/IsolierteLeitung/IsolierteLeitung.js`
));

/** SECTION Betriebsmittel Uebertragungswege Leitung IsolierteLeitung Fernmeldeleitung */
const { Fernmeldeleitung } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/IsolierteLeitung/Fernmeldeleitung/Fernmeldeleitung.js`
));

/** SECTION Betriebsmittel Uebertragungswege Leitung IsolierteLeitung Fernmeldeleitung Eindrahtleitung */
const { Eindrahtleitung } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/IsolierteLeitung/Fernmeldeleitung/Eindrahtleitung/Eindrahtleitung.js`
));
/** !SECTION Betriebsmittel Uebertragungswege Leitung IsolierteLeitung Fernmeldeleitung Eindrahtleitung */

/** SECTION Betriebsmittel Uebertragungswege Leitung IsolierteLeitung Fernmeldeleitung Lahnlitzeleitung */
const { Lahnlitzeleitung } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/IsolierteLeitung/Fernmeldeleitung/Lahnlitzeleitung/Lahnlitzeleitung.js`
));
/** !SECTION Betriebsmittel Uebertragungswege Leitung IsolierteLeitung Fernmeldeleitung Lahnlitzeleitung */

/** SECTION Betriebsmittel Uebertragungswege Leitung IsolierteLeitung Fernmeldeleitung Litzeleitung */
const { Litzeleitung } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/IsolierteLeitung/Fernmeldeleitung/Litzeleitung/Litzeleitung.js`
));
/** !SECTION Betriebsmittel Uebertragungswege Leitung IsolierteLeitung Fernmeldeleitung Litzeleitung */

/** !SECTION Betriebsmittel Uebertragungswege Leitung IsolierteLeitung Fernmeldeleitung */

/** SECTION Betriebsmittel Uebertragungswege Leitung IsolierteLeitung Starkstromleitung */
const { Starkstromleitung } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/IsolierteLeitung/Starkstromleitung/Starkstromleitung.js`
));

/** SECTION Betriebsmittel Uebertragungswege Leitung IsolierteLeitung Starkstromleitung besondererZweck */
const { BesondererZweck } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/IsolierteLeitung/Starkstromleitung/BesondererZweck/BesondererZweck.js`
));

/** !SECTION Betriebsmittel Uebertragungswege Leitung IsolierteLeitung Starkstromleitung besondererZweck */

/** SECTION Betriebsmittel Uebertragungswege Leitung IsolierteLeitung Starkstromleitung festeVerlegung */

const { FesteLegung } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/IsolierteLeitung/Starkstromleitung/FesteLegung/FesteLegung.js`
));

/** !SECTION Betriebsmittel Uebertragungswege Leitung IsolierteLeitung Starkstromleitung festeVerlegung */

/** SECTION Betriebsmittel Uebertragungswege Leitung IsolierteLeitung Starkstromleitung Konfektioniert */
const { Konfektioniert } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/IsolierteLeitung/Starkstromleitung/Konfektioniert/Konfektioniert.js`
));

/** !SECTION Betriebsmittel Uebertragungswege Leitung IsolierteLeitung Starkstromleitung Konfektioniert */

/** SECTION Betriebsmittel Uebertragungswege Leitung IsolierteLeitung Starkstromleitung ortsveraenderlicheBetriebsmittel */
const { OrtsveraenderlicheLegung } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/IsolierteLeitung/Starkstromleitung/OrtsveraenderlicheLegung/OrtsveraenderlicheLegung.js`
));

/** !SECTION Betriebsmittel Uebertragungswege Leitung IsolierteLeitung Starkstromleitung ortsveraenderlicheBetriebsmittel */

/** !SECTION Betriebsmittel Uebertragungswege Leitung IsolierteLeitung Starkstromleitung */

/** !SECTION Betriebsmittel Uebertragungswege Leitung IsolierteLeitung */

/** SECTION Betriebsmittel Uebertragungswege Leitung BlankeLeitung */
const { BlankeLeitung } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/BlankeLeitung/BlankeLeitung.js`
));

/** SECTION Betriebsmittel Uebertragungswege Leitung BlankeLeitung Erder */
const { Erder } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/BlankeLeitung/Erder/Erder.js`
));

/** !SECTION Betriebsmittel Uebertragungswege Leitung BlankeLeitung Erder  */

/** SECTION Betriebsmittel Uebertragungswege Leitung BlankeLeitung Erdungssammelleitung */
const { Erdungssammelleitung } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/BlankeLeitung/Erdungssammelleitung/Erdungssammelleitung.js`
));

/** !SECTION Betriebsmittel Uebertragungswege Leitung BlankeLeitung Erdungssammelleitung  */

/** SECTION Betriebsmittel Uebertragungswege Leitung BlankeLeitung Fahrleitung */
const { Fahrleitung } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/BlankeLeitung/Fahrleitung/Fahrleitung.js`
));

/** !SECTION Betriebsmittel Uebertragungswege Leitung BlankeLeitung Fahrleitung  */

/** SECTION Betriebsmittel Uebertragungswege Leitung BlankeLeitung Freileitung */
const { Freileitung } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/BlankeLeitung/Freileitung/Freileitung.js`
));
/** !SECTION Betriebsmittel Uebertragungswege Leitung BlankeLeitung Freileitung  */

/** SECTION Betriebsmittel Uebertragungswege Leitung BlankeLeitung Hochfrequenzleitung */
const { Hochfrequenzleitung } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/BlankeLeitung/Hochfrequenzleitung/Hochfrequenzleitung.js`
));

/** !SECTION Betriebsmittel Uebertragungswege Leitung BlankeLeitung Hochfrequenzleitung  */

/** SECTION Betriebsmittel Uebertragungswege Leitung BlankeLeitung OffenGelegteLeitung */
const { OffenGelegteLeitung } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/BlankeLeitung/OffenGelegteLeitung/OffenGelegteLeitung.js`
));

/** !SECTION Betriebsmittel Uebertragungswege Leitung BlankeLeitung OffenGelegteLeitung  */

/** SECTION Betriebsmittel Uebertragungswege Leitung BlankeLeitung Sammelschiene */
const { Sammelschiene } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/BlankeLeitung/Sammelschiene/Sammelschiene.js`
));

/** !SECTION Betriebsmittel Uebertragungswege Leitung BlankeLeitung Sammelschiene  */

/** SECTION Betriebsmittel Uebertragungswege Leitung BlankeLeitung Schiene */
const { Schiene } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/BlankeLeitung/Schiene/Schiene.js`
));

/** !SECTION Betriebsmittel Uebertragungswege Leitung BlankeLeitung Schiene  */

/** SECTION Betriebsmittel Uebertragungswege Leitung BlankeLeitung Schleifenleitung */
const { Schleifenleitung } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/BlankeLeitung/Schleifenleitung/Schleifenleitung.js`
));

/** !SECTION Betriebsmittel Uebertragungswege Leitung BlankeLeitung Schleifenleitung */

/** SECTION Betriebsmittel Uebertragungswege Leitung BlankeLeitung Stromschiene */
const { Stromschiene } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/BlankeLeitung/Stromschiene/Stromschiene.js`
));

/** !SECTION Betriebsmittel Uebertragungswege Leitung BlankeLeitung Stromschiene  */

/** !SECTION Betriebsmittel Uebertragungswege Leitung BlankeLeitung */

/** !SECTION Betriebsmittel Uebertragungswege Leitung  */

/** SECTION Betriebsmittel Uebertragungswege Draehte */
const { Draehte } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Draehte/Draehte.js`
));

/** SECTION Betriebsmittel Uebertragungswege Draehte Draht */
const { Draht } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Draehte/Draht/Draht.js`
));

/** SECTION Betriebsmittel Uebertragungswege Draehte Draht Runddraht */
const { Runddraht } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Draehte/Draht/Runddraht/Runddraht.js`
));

/** SECTION Betriebsmittel Uebertragungswege Draehte Draht Runddraht Blank */
const { Blank } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Draehte/Draht/Runddraht/Blank/Blank.js`
));

/** SECTION Betriebsmittel Uebertragungswege Draehte Draht Runddraht Blank Kupferdraht */
const { Kupferdraht } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Draehte/Draht/Runddraht/Blank/Kupferdraht/Kupferdraht.js`
));
/** !SECTION Betriebsmittel Uebertragungswege Draehte Draht Runddraht Blank Kupferdraht */

/** SECTION Betriebsmittel Uebertragungswege Draehte Draht Runddraht Blank Aluminiumdraht */
const { Aluminiumdraht } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Draehte/Draht/Runddraht/Blank/Aluminiumdraht/Aluminiumdraht.js`
));
/** !SECTION Betriebsmittel Uebertragungswege Draehte Draht Runddraht Blank Aluminiumdraht */

/** SECTION Betriebsmittel Uebertragungswege Draehte Draht Runddraht Blank Legierungsdraht */
const { Legierungsdraht } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Draehte/Draht/Runddraht/Blank/Legierungsdraht/Legierungsdraht.js`
));
/** !SECTION Betriebsmittel Uebertragungswege Draehte Draht Runddraht Legierungsdraht */

/** !SECTION Betriebsmittel Uebertragungswege Draehte Draht Runddraht Blank */

/** SECTION Betriebsmittel Uebertragungswege Draehte Draht Runddraht Isoliert */
const { Isoliert } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Draehte/Draht/Runddraht/Isoliert/Isoliert.js`
));

/** !SECTION Betriebsmittel Uebertragungswege Draehte Draht Runddraht Isoliert */

/** !SECTION Betriebsmittel Uebertragungswege Draehte Draht Runddraht */

/** !SECTION Betriebsmittel Uebertragungswege Draehte Draht */

/** SECTION Betriebsmittel Uebertragungswege Draehte Wickeldraht */
const { Wickeldraht } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Draehte/Wickeldraht/Wickeldraht.js`
));
/** !SECTION Betriebsmittel Uebertragungswege Draehte Wickeldraht */

/** !SECTION Betriebsmittel Uebertragungswege Draehte */

/** !SECTION Betriebsmittel Uebertragungswege */

/** SECTION Betriebsmittel Induktivitaet */

const { Induktivitaet } = require(path.resolve(
  `${PBetriebsmittel}/Induktivitaet/Induktivitaet.js`
));

/** SECTION Betriebsmittel Induktivitaet Spule */
const { Spule } = require(path.resolve(
  `${PBetriebsmittel}/Induktivitaet/Spule/Spule.js`
));

/** SECTION Betriebsmittel Induktivitaet Spule SpuleMitKern */
const { SpuleMitKern } = require(path.resolve(
  `${PBetriebsmittel}/Induktivitaet/Spule/SpuleMitKern/SpuleMitKern.js`
));

/** SECTION Betriebsmittel Induktivitaet Spule SpuleMitKern Magnetspule */
const { Magnetspule } = require(path.resolve(
  `${PBetriebsmittel}/Induktivitaet/Spule/SpuleMitKern/Magnetspule/Magnetspule.js`
));
/** !SECTION Betriebsmittel Induktivitaet Spule SpuleMitKern Magnetspule */

/** !SECTION Betriebsmittel Induktivitaet Spule SpuleMitKern */

/** SECTION Betriebsmittel Induktivitaet Spule SpuleOhneKern */
const { SpuleOhneKern } = require(path.resolve(
  `${PBetriebsmittel}/Induktivitaet/Spule/SpuleOhneKern/SpuleOhneKern.js`
));

/** SECTION Betriebsmittel Induktivitaet Spule SpuleOhneKern AbgeschirmteSpule */
const { AbgeschirmteSpule } = require(path.resolve(
  `${PBetriebsmittel}/Induktivitaet/Spule/SpuleOhneKern/AbgeschirmteSpule/AbgeschirmteSpule.js`
));
/** !SECTION Betriebsmittel Induktivitaet Spule SpuleOhneKern AbgeschirmteSpule */

/** SECTION Betriebsmittel Induktivitaet Spule SpuleOhneKern EinlagigeSpule */
const { EinlagigeSpule } = require(path.resolve(
  `${PBetriebsmittel}/Induktivitaet/Spule/SpuleOhneKern/EinlagigeSpule/EinlagigeSpule.js`
));
/** !SECTION Betriebsmittel Induktivitaet Spule SpuleOhneKern EinlagigeSpule */

/** SECTION Betriebsmittel Induktivitaet Spule SpuleOhneKern MehrlagigeSpule */
const { MehrlagigeSpule } = require(path.resolve(
  `${PBetriebsmittel}/Induktivitaet/Spule/SpuleOhneKern/MehrlagigeSpule/MehrlagigeSpule.js`
));
/** !SECTION Betriebsmittel Induktivitaet Spule SpuleOhneKern MehrlagigeSpule */

/** SECTION Betriebsmittel Induktivitaet Spule SpuleOhneKern Ringspule */
const { Ringspule } = require(path.resolve(
  `${PBetriebsmittel}/Induktivitaet/Spule/SpuleOhneKern/Ringspule/Ringspule.js`
));
/** !SECTION Betriebsmittel Induktivitaet Spule SpuleOhneKern Ringspule */

/** SECTION Betriebsmittel Induktivitaet Spule SpuleOhneKern Zylinderspule */
const { Zylinderspule } = require(path.resolve(
  `${PBetriebsmittel}/Induktivitaet/Spule/SpuleOhneKern/Zylinderspule/Zylinderspule.js`
));
/** !SECTION Betriebsmittel Induktivitaet Spule SpuleOhneKern Zylinderspule */
/** !SECTION Betriebsmittel Induktivitaet Spule SpuleOhneKern */

/** SECTION Betriebsmittel Induktivitaet Spule Variometer */
const { Variometer } = require(path.resolve(
  `${PBetriebsmittel}/Induktivitaet/Spule/Variometer/Variometer.js`
));
/** !SECTION Betriebsmittel Induktivitaet Spule Variometer */

/** !SECTION Betriebsmittel Induktivitaet Spule */

/** !SECTION Betriebsmittel Induktivitaet */

/** SECTION Betriebsmittel Verschiedens */
const { Verschiedenes } = require(path.resolve(
  `${PBetriebsmittel}/Verschiedenes/Verschiedenes.js`
));
/** SECTION Betriebsmittel Verschiedenes Elektrode */
const { Elektrode } = require(path.resolve(
  `${PBetriebsmittel}/Verschiedenes/Elektrode/Elektrode.js`
));
/** !SECTION Betriebsmittel Verschiedenes Elektrode */

/** SECTION Betriebsmittel Verschiedenes Beleuchtung */
const { Beleuchtung } = require(path.resolve(
  `${PBetriebsmittel}/Verschiedenes/Beleuchtung/Beleuchtung.js`
));

/** SECTION Betriebsmittel Verschiedenes Beleuchtung Lampe */
const { Lampe } = require(path.resolve(
  `${PBetriebsmittel}/Verschiedenes/Beleuchtung/Lampe/Lampe.js`
));

/** SECTION Betriebsmittel Verschiedenes Beleuchtung Lampe Gluehlampe */
const { Gluehlampe } = require(path.resolve(
  `${PBetriebsmittel}/Verschiedenes/Beleuchtung/Lampe/Gluehlampe/Gluehlampe.js`
));

/** !SECTION Betriebsmittel Verschiedenes Beleuchtung Lampe Gluehlampe */

/** !SECTION Betriebsmittel Verschiedenes Beleuchtung Lampe */

/** !SECTION Beriebsmittel Verschiedenes Beleuchtung */

/** !SECTION Betriebsmittel Verschiedens */

/** SECTION Betriebsmittel Messgeraet */
const { Messgeraet } = require(path.resolve(
  `${PBetriebsmittel}/Messgeraet/Messgeraet.js`
));

/** SECTION Betriebsmittel Messgeraet Energiemesser */
const { Energiemesser } = require(path.resolve(
  `${PBetriebsmittel}/Messgeraet/Energiemesser/Energiemesser.js`
));
/** !SECTION Betriebsmittel Messgeraet Energiemesser */

/** SECTION Betriebsmittel Messgeraet Frequenzmesser */
const { Frequenzmesser } = require(path.resolve(
  `${PBetriebsmittel}/Messgeraet/Frequenzmesser/Frequenzmesser.js`
));
/** !SECTION Betriebsmittel Messgeraet Frequenz */

/** SECTION Betriebsmittel Messgeraet Impedanzmesser */
const { Impedanzmesser } = require(path.resolve(
  `${PBetriebsmittel}/Messgeraet/Impedanzmesser/Impedanzmesser.js`
));
/** !SECTION Betriebsmittel Messgeraet Impedanzmesser */

/** SECTION Betriebsmittel Messgeraet Leistungsmesser */
const { Leistungsmesser } = require(path.resolve(
  `${PBetriebsmittel}/Messgeraet/Leistungsmesser/Leistungsmesser.js`
));
/** !SECTION Betriebsmittel Messgeraet Leistungsmesser */

/** SECTION Betriebsmittel Messgeraet MagnetischeGroessemesser */
const { MagnetischeGroessemesser } = require(path.resolve(
  `${PBetriebsmittel}/Messgeraet/MagnetischeGroessemesser/MagnetischeGroessemesser.js`
));
/** !SECTION Betriebsmittel Messgeraet MagnetischeGroessemesser */

/** SECTION Betriebsmittel Messgeraet Phasenwinkelmesser */
const { Phasenwinkelmesser } = require(path.resolve(
  `${PBetriebsmittel}/Messgeraet/Phasenwinkelmesser/Phasenwinkelmesser.js`
));
/** !SECTION Betriebsmittel Messgeraet Phasenwinkelmesser */

/** SECTION Betriebsmittel Messgeraet Spannungsmesser */
const { Spannungsmesser } = require(path.resolve(
  `${PBetriebsmittel}/Messgeraet/Spannungsmesser/Spannungsmesser.js`
));
/** !SECTION Betriebsmittel Messgeraet Spannungsmesser */

/** SECTION Betriebsmittel Messgeraet Strommesser */
const { Strommesser } = require(path.resolve(
  `${PBetriebsmittel}/Messgeraet/Strommesser/Strommesser.js`
));
/** !SECTION Betriebsmittel Messgeraet Strommesser */

/** SECTION Betriebsmittel Messgeraet Zeitmesser */
const { Zeitmesser } = require(path.resolve(
  `${PBetriebsmittel}/Messgeraet/Zeitmesser/Zeitmesser.js`
));
/** !SECTION Betriebsmittel Messgeraet Zeitmesser */

/** !SECTION Betriebsmittel Messgeraet */

/** SECTION Betriebsmittel Transformator */
const { Transformator } = require(path.resolve(
  `${PBetriebsmittel}/Transformator/Transformator.js`
));

/** SECTION Betriebsmittel Transformator AudioTransformator */
const { Audiotransformator } = require(path.resolve(
  `${PBetriebsmittel}/Transformator/Audiotransformator/Audiotransformator.js`
));
/** !SECTION Betriebsmittel Transformator AudioTransformator */

/** SECTION Betriebsmittel Transformator Dreiphasentransformator */
const { Dreiphasentransformator } = require(path.resolve(
  `${PBetriebsmittel}/Transformator/Dreiphasentransformator/Dreiphasentransformator.js`
));
/** !SECTION Betriebsmittel Transformator Dreiphasentransformator */

/** SECTION Betriebsmittel Transformator Einphasentransformator */
const { Einphasentransformator } = require(path.resolve(
  `${PBetriebsmittel}/Transformator/Einphasentransformator/Einphasentransformator.js`
));
/** !SECTION Betriebsmittel Transformator Einphasentransformator */

/** SECTION Betriebsmittel Transformator HFTransformator */
const { HFTransformator } = require(path.resolve(
  `${PBetriebsmittel}/Transformator/HFTransformator/HFTransformator.js`
));
/** !SECTION Betriebsmittel Transformator HFTransformator */

/** SECTION Betriebsmittel Transformator Impulstransformator */
const { Impulstransformator } = require(path.resolve(
  `${PBetriebsmittel}/Transformator/Impulstransformator/Impulstransformator.js`
));
/** !SECTION Betriebsmittel Transformator Impulstransformator */

/** SECTION Betriebsmittel Transformator Messwandler */
const { Messwandler } = require(path.resolve(
  `${PBetriebsmittel}/Transformator/Messwandler/Messwandler.js`
));

/** SECTION Betriebsmittel Transformator Messwandler Stromwandler */
const { Stromwandler } = require(path.resolve(
  `${PBetriebsmittel}/Transformator/Messwandler/Stromwandler/Stromwandler.js`
));
/** !SECTION Betriebsmittel Transformator Messwandler Stromwandler */

/** SECTION Betriebsmittel Transformator Messwandler Spannungswandler */
const { Spannungswandler } = require(path.resolve(
  `${PBetriebsmittel}/Transformator/Messwandler/Spannungswandler/Spannungswandler.js`
));
/** !SECTION Betriebsmittel Transformator Messwandler Spannungswandler */

/** !SECTION Betriebsmittel Transformator Messwandler */

/** SECTION Betriebsmittel Transformator Transaktor */
const { Transaktor } = require(path.resolve(
  `${PBetriebsmittel}/Transformator/Transaktor/Transaktor.js`
));
/** !SECTION Betriebsmittel Transformator Transaktor */

/** SECTION Betriebsmittel Transformator TransformatorMitMittenabgriff */
const { TransformatorMitMittenabgriff } = require(path.resolve(
  `${PBetriebsmittel}/Transformator/TransformatorMitMittenabgriff/TransformatorMitMittenabgriff.js`
));
/** !SECTION Betriebsmittel Transformator TransformatorMitMittenabgriff */

/** !SECTION Betriebsmittel Transformator */

/** !SECTION Betriebsmittel */

/** SECTION PhysikalischeChemie */
const { PhysikalischeChemie } = require(path.resolve(
  `${PPhysikalischeChemie}/PhysikalischeChemie.js`
));

/** SECTION PhysikalischeChemie Elektrochemie */
const { Elektrochemie } = require(path.resolve(
  `${PPhysikalischeChemie}/Elektrochemie/Elektrochemie.js`
));

/** SECTION PhysikalischeChemie Elektrochemie Elektrolyt */
const { Elektrolyt } = require(path.resolve(
  `${PPhysikalischeChemie}/Elektrochemie/Elektrolyt/Elektrolyt.js`
));

/** !SECTION PhysikalischeChemie Elektrochemie Elektrolyt */

/** !SECTION PhysikalischeChemie Elektrochemie */

/** !SECTION Physikalische Chemie */

/** SECTION Verbindungstechnik */
const { Verbindungstechnik } = require(path.resolve(
  `${PVerbindungstechnik}/Verbindungstechnik.js`
));

/** SECTION Verbindungstechnik BedingtLoesbareVerbindung */
const { BedingtLoesbareVerbindung } = require(path.resolve(
  `${PVerbindungstechnik}/BedingtLoesbareVerbindung/BedingtLoesbareVerbindung.js`
));

/** SECTION Verbindungstechnik BedingtLoesbareVerbindung Drahtwickeltechnik */
const { Drahtwickeltechnik } = require(path.resolve(
  `${PVerbindungstechnik}/BedingtLoesbareVerbindung/Drahtwickeltechnik/Drahtwickeltechnik.js`
));
/** !SECTION Verbindungstechnik BedingtLoesbareVerbindung Drahtwickeltechnik */

/** SECTION Verbindungstechnik BedingtLoesbareVerbindung Einpresstechnik */
const { Einpresstechnik } = require(path.resolve(
  `${PVerbindungstechnik}/BedingtLoesbareVerbindung/Einpresstechnik/Einpresstechnik.js`
));

/** !SECTION Verbindungstechnik BedingtLoesbareVerbindung Einpresstechnik */

/** SECTION Verbindungstechnik BedingtLoesbareVerbindung Loettechnik */
const { Loettechnik } = require(path.resolve(
  `${PVerbindungstechnik}/BedingtLoesbareVerbindung/Loettechnik/Loettechnik.js`
));
/** !SECTION Verbindungstechnik BedingtLoesbareVerbindung Loeten */

/** SECTION Verbindungstechnik BedingtLoesbareVerbindung Schneidklemmtechnik */
const { Schneidklemmtechnik } = require(path.resolve(
  `${PVerbindungstechnik}/BedingtLoesbareVerbindung/Schneidklemmtechnik/Schneidklemmtechnik.js`
));
/** !SECTION Verbindungstechnik BedingtLoesbareVerbindung Schneidklemmtechnik */

/** !SECTION Verbindungstechnik BedingtLoesbareVerbindung */

/** SECTION Verbindungstechnik LoesbareVerbindung */
const { LoesbareVerbindung } = require(path.resolve(
  `${PVerbindungstechnik}/LoesbareVerbindung/LoesbareVerbindung.js`
));

/** SECTION Verbindungstechnik LoesbareVerbindung Klemmverbindung */
const { Klemmverbindung } = require(path.resolve(
  `${PVerbindungstechnik}/LoesbareVerbindung/Klemmverbindung/Klemmverbindung.js`
));
/** !SECTION Verbindungstechnik LoesbareVerbindung Klemmverbindung */

/** SECTION Verbindungstechnik LoesbareVerbindung QuetschUndSteckverbindung */
const { QuetschUndSteckverbindung } = require(path.resolve(
  `${PVerbindungstechnik}/LoesbareVerbindung/QuetschUndSteckverbindung/QuetschUndSteckverbindung.js`
));
/** !SECTION Verbindungstechnik LoesbareVerbindung QuetschUndSteckverbindung */

/** !SECTION Verbindungstechnik LoesbareVerbindung */

/** SECTION Verbindungstechnik UnloesbareVerbindung */
const { UnloesbareVerbindung } = require(path.resolve(
  `${PVerbindungstechnik}/UnloesbareVerbindung/UnloesbareVerbindung.js`
));

/** SECTION Verbindungstechnik UnloesbareVerbindung Bonden */
const { Bonden } = require(path.resolve(
  `${PVerbindungstechnik}/UnloesbareVerbindung/Bonden/Bonden.js`
));

/** !SECTION Verbindungstechnik UnloesbareVerbindung Bonden */

/** SECTION Verbindungstechnik UnloesbareVerbindung Klebeverbindung */
const { Klebeverbindung } = require(path.resolve(
  `${PVerbindungstechnik}/UnloesbareVerbindung/Klebeverbindung/Klebeverbindung.js`
));

/** !SECTION Verbindungstechnik UnloesbareVerbindung Klebeverbindung */

/** SECTION Verbindungstechnik UnloesbareVerbindung Pressverbindung */
const { Pressverbindung } = require(path.resolve(
  `${PVerbindungstechnik}/UnloesbareVerbindung/Pressverbindung/Pressverbindung.js`
));

/** !SECTION Verbindungstechnik UnloesbareVerbindung Pressverbindung */

/** SECTION Verbindungstechnik UnloesbareVerbindung Schweisstechnik */
const { Schweisstechnik } = require(path.resolve(
  `${PVerbindungstechnik}/UnloesbareVerbindung/Schweisstechnik/Schweisstechnik.js`
));

/** !SECTION Verbindungstechnik UnloesbareVerbindung Schweisstechnik */

/** SECTION Verbindungstechnik UnloesbareVerbindung Spleissen */
const { Spleissen } = require(path.resolve(
  `${PVerbindungstechnik}/UnloesbareVerbindung/Spleissen/Spleissen.js`
));
/** !SECTION Verbindungstechnik UnloesbareVerbindung Spleissen */

/** !SECTION Verbindungstechnik UnloesbareVerbindung */

/** !SECTION Verbindungstechnik */

const { ElektroKernel } = require(path.resolve(
  `${PElektrotechnik}/gleichspannung/grundbegriffe/kernel.js`
));

const { RohrleitungstechnikKernel } = require(path.resolve(
  `${PRohrleitungstechnik}/kernel.js`
));

// const { Rohrleitungen } = require(path.resolve(
//   `${PBauelemente}/Rohrleitungen/Rohrleitungen.js`
// ))

// const { Bleirohr } = require(path.resolve(
//   `${PBauelemente}/Rohrleitungen/Bleirohre/Bleirohr.js`
// ))

const { ArithmetikKernel } = require(path.resolve(
  `${PMathematik}/Arithmetik/kernel.js`
));

const { PlanemetrieKernel } = require(path.resolve(
  `${PMathematik}/Planemetrie/kernel.js`
));

const { Stack } = require(path.resolve(
  `${PDatenverarbeitung}/dynamischeDatenstrukturen/listen/stapel/stack.js`
));

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
  ElektroKernel,
  ArithmetikKernel,
  PlanemetrieKernel,
  RohrleitungstechnikKernel,
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
  Messgeraet,
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
  UnloesbareVerbindung,
  Bonden,
  Klebeverbindung,
  Pressverbindung,
  Schweisstechnik,
  Spleissen,
};
