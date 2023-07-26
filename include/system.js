require('use-strict')
const path = require('path')

// Klassenstrukturen
// nicht Visualisierung!!!

const PElektrotechnik = 'src/components/Elektrotechnik'
const PRohrleitungstechnik = 'src/components/Rohrleitungstechnik'
const PMathematik = 'src/components/Mathematik'
const PBauelemente = 'src/components/Bauelemente'
const PBetriebsmittel = 'src/components/Betriebsmittel'
const PDatenverarbeitung = 'src/components/Datenverarbeitung'
const PPhysikalischeChemie = 'src/components/PhysikalischeChemie'

/** SECTION Material */
const Material = require(path.resolve('src/components/Material/Material.js'))
/** !SECTION Material */

/** SECTION Bauelemente */
const { Bauelemente } = require(path.resolve(`${PBauelemente}/Bauelemente.js`))

/** SECTION Platten */
const { Platten } = require(path.resolve(`${PBauelemente}/Platten/Platten.js`))

/** SECTION Platten Glasplatten */
const { Glasplatte } = require(path.resolve(
  `${PBauelemente}/Platten/Glasplatte/Glasplatte.js`
))
/** !SECTION Platten Glasplatten */
/** !SECTION Platten */

/** SECTION Rohrleitungen */

const { Rohrleitungen } = require(path.resolve(
  `${PBauelemente}/Rohrleitungen/Rohrleitungen.js`
))

/** SECTION Rohrleitungen Bleirohre */
const { Bleirohre } = require(path.resolve(
  `${PBauelemente}/Rohrleitungen/Bleirohre/Bleirohre.js`
))
/** !SECTION Rohrleitungen Bleirohre */
/** !SECTION Rohrleitungen */

/** !SECTION Bauelemente */

/** SECTION  Betriebsmittel*/

const { Betriebsmittel } = require(path.resolve(
  `${PBetriebsmittel}/Betriebsmittel.js`
))

/** SECTION Betriebsmittel Baugruppen */
const { Baugruppen } = require(path.resolve(
  `${PBetriebsmittel}/Baugruppen/Baugruppen.js`
))

/** SECTION Betriebsmittel Baugruppen Zweipole */
const { Zweipole } = require(path.resolve(
  `${PBetriebsmittel}/Baugruppen/Zweipole/Zweipole.js`
))

/** SECTION Betriebsmittel Baugruppen Zweipole PassiverZweipol */
const { PassiverZweipol } = require(path.resolve(
  `${PBetriebsmittel}/Baugruppen/Zweipole/PassiverZweipol/PassiverZweipol.js`
))

/** SECTION Betriebsmittel Baugruppen Zweipole Reihenschaltung */
const { Reihenschaltung } = require(path.resolve(
  `${PBetriebsmittel}/Baugruppen/Zweipole/PassiverZweipol/Reihenschaltung.js`
))
/** !SECTION Betriebsmittel Baugruppen Zweipole Reihenschaltung */

/** !SECTION Betriebsmittel Baugruppen Zweipole PassiverZweipol */

/** !SECTION Betriebsmittel Baugruppen Zweipole */

/** !SECTION Betriebsmittel Baugruppen */

/** SECTION  Betriebsmittel Widerstand*/
const { Widerstand } = require(path.resolve(
  `${PBetriebsmittel}/Widerstand/Widerstand.js`
))

/** SECTION Betriebsmittel Widerstand Feldplatte */
const { Feldplatte } = require(path.resolve(
  `${PBetriebsmittel}/Widerstand/Feldplatten/Feldplatte.js`
))
/** !SECTION Betriebsmittel Widerstand Feldplatte */

/** SECTION Betriebsmittel Widerstand Fotowiderstand */
const { Fotowiderstand } = require(path.resolve(
  `${PBetriebsmittel}/Widerstand/Fotowiderstand/Fotowiderstand.js`
))
/** !SECTION Betriebsmittel Widerstand Fotowiderstand */

/** SECTION Betriebsmittel Widerstand Heissleiter */
const { Heissleiter } = require(path.resolve(
  `${PBetriebsmittel}/Widerstand/Thermistor/Heissleiter/Heissleiter.js`
))
/** !SECTION Betriebsmittel Widerstand Heissleiter */

/** SECTION Betriebsmittel Widerstand Kaltleiter */
const { Kaltleiter } = require(path.resolve(
  `${PBetriebsmittel}/Widerstand/Thermistor/Kaltleiter/Kaltleiter.js`
))
/** !SECTION Betriebsmittel Widerstand Kaltleiter */

/** SECTION Betriebsmittel Widerstand Varistor */
const { Varistor } = require(path.resolve(
  `${PBetriebsmittel}/Widerstand/Varistoren/Varistor.js`
))
/** !SECTION Betriebsmittel Widerstand Varistor */

/** !SECTION Betriebsmittel Widerstand*/

/** SECTION  Betriebsmittel Uebertragungswege */
const { Uebertragungswege } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Uebertragungswege.js`
))

/** SECTION Betriebsmittel Uebertragungswege Kabel */
const { Kabel } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Kabel/Kabel.js`
))

/** SECTION Betriebsmittel Uebertragungswege Kabel Fernmeldekabel */
const { Fernmeldekabel } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Kabel/Fernmeldekabel/Fernmeldekabel.js`
))
/** !SECTION Betriebsmittel Uebertragungswege Kabel Fernmeldekabel */

/** SECTION Betriebsmittel Uebertragungswege Kabel Hochfrequenzkabel */
const { Hochfrequenzkabel } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Kabel/Hochfrequenzkabel/Hochfrequenzkabel.js`
))
/** !SECTION Betriebsmittel Uebertragungswege Kabel Hochfrequenzkabel */

/** SECTION Betriebsmittel Uebertragungswege Kabel Starkstromkabel */
const { Starkstromkabel } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Kabel/Starkstromkabel/Starkstromkabel.js`
))
/** !SECTION Betriebsmittel Uebertragungswege Kabel Starkstromkabel */

/** !SECTION Betriebsmittel Uebertragungswege Kabel */

/** SECTION Betriebsmittel Uebertragungswege Leitung */
const { Leitung } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/Leitung.js`
))

/** SECTION Betriebsmittel Uebertragungswege Leitung Freileitung */
const { Freileitung } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Leitung/Freileitung/Freileitung.js`
))
/** !SECTION Betriebsmittel Uebertragungswege Leitung Freileitung */

/** !SECTION Betriebsmittel Uebertragungswege Leitung */

/** SECTION Betriebsmittel Uebertragungswege Draht */
const { Draht } = require(path.resolve(
  `${PBetriebsmittel}/Uebertragungswege/Draht/Draht.js`
))
/** !SECTION Betriebsmittel Uebertragungswege Draht */

/** !SECTION Betriebsmittel Uebertragungswege */

/** SECTION Betriebsmittel Induktivitaet */

const { Induktivitaet } = require(path.resolve(
  `${PBetriebsmittel}/Induktivitaet/Induktivitaet.js`
))

/** SECTION Betriebsmittel Induktivitaet Spule */
const { Spule } = require(path.resolve(
  `${PBetriebsmittel}/Induktivitaet/Spule/Spule.js`
))

/** SECTION Betriebsmittel Induktivitaet Spule SpuleMitKern */
const { SpuleMitKern } = require(path.resolve(
  `${PBetriebsmittel}/Induktivitaet/Spule/SpuleMitKern/SpuleMitKern.js`
))

/** SECTION Betriebsmittel Induktivitaet Spule SpuleMitKern Magnetspule */
const { Magnetspule } = require(path.resolve(
  `${PBetriebsmittel}/Induktivitaet/Spule/SpuleMitKern/Magnetspule/Magnetspule.js`
))
/** !SECTION Betriebsmittel Induktivitaet Spule SpuleMitKern Magnetspule */

/** !SECTION Betriebsmittel Induktivitaet Spule SpuleMitKern */

/** SECTION Betriebsmittel Induktivitaet Spule SpuleOhneKern */
const { SpuleOhneKern } = require(path.resolve(
  `${PBetriebsmittel}/Induktivitaet/Spule/SpuleOhneKern/SpuleOhneKern.js`
))

/** SECTION Betriebsmittel Induktivitaet Spule SpuleOhneKern AbgeschirmteSpule */
const { AbgeschirmteSpule } = require(path.resolve(
  `${PBetriebsmittel}/Induktivitaet/Spule/SpuleOhneKern/AbgeschirmteSpule/AbgeschirmteSpule.js`
))
/** !SECTION Betriebsmittel Induktivitaet Spule SpuleOhneKern AbgeschirmteSpule */

/** SECTION Betriebsmittel Induktivitaet Spule SpuleOhneKern EinlagigeSpule */
const { EinlagigeSpule } = require(path.resolve(
  `${PBetriebsmittel}/Induktivitaet/Spule/SpuleOhneKern/EinlagigeSpule/EinlagigeSpule.js`
))
/** !SECTION Betriebsmittel Induktivitaet Spule SpuleOhneKern EinlagigeSpule */

/** SECTION Betriebsmittel Induktivitaet Spule SpuleOhneKern MehrlagigeSpule */
const { MehrlagigeSpule } = require(path.resolve(
  `${PBetriebsmittel}/Induktivitaet/Spule/SpuleOhneKern/MehrlagigeSpule/MehrlagigeSpule.js`
))
/** !SECTION Betriebsmittel Induktivitaet Spule SpuleOhneKern MehrlagigeSpule */

/** SECTION Betriebsmittel Induktivitaet Spule SpuleOhneKern Ringspule */
const { Ringspule } = require(path.resolve(
  `${PBetriebsmittel}/Induktivitaet/Spule/SpuleOhneKern/Ringspule/Ringspule.js`
))
/** !SECTION Betriebsmittel Induktivitaet Spule SpuleOhneKern Ringspule */

/** SECTION Betriebsmittel Induktivitaet Spule SpuleOhneKern Zylinderspule */
const { Zylinderspule } = require(path.resolve(
  `${PBetriebsmittel}/Induktivitaet/Spule/SpuleOhneKern/Zylinderspule/Zylinderspule.js`
))
/** !SECTION Betriebsmittel Induktivitaet Spule SpuleOhneKern Zylinderspule */
/** !SECTION Betriebsmittel Induktivitaet Spule SpuleOhneKern */

/** SECTION Betriebsmittel Induktivitaet Spule Variometer */
const { Variometer } = require(path.resolve(
  `${PBetriebsmittel}/Induktivitaet/Spule/Variometer/Variometer.js`
))
/** !SECTION Betriebsmittel Induktivitaet Spule Variometer */

/** !SECTION Betriebsmittel Induktivitaet Spule */

/** !SECTION Betriebsmittel Induktivitaet */

/** SECTION Betriebsmittel Verschiedens */
const { Verschiedenes } = require(path.resolve(
  `${PBetriebsmittel}/Verschiedenes/Verschiedenes.js`
))
/** SECTION Betriebsmittel Verschiedenes Elektrode */
const { Elektrode } = require(path.resolve(
  `${PBetriebsmittel}/Verschiedenes/Elektrode/Elektrode.js`
))
/** !SECTION Betriebsmittel Verschiedenes Elektrode */

/** SECTION Betriebsmittel Verschiedenes Beleuchtung */
const { Beleuchtung } = require(path.resolve(
  `${PBetriebsmittel}/Verschiedenes/Beleuchtung/Beleuchtung.js`
))

/** SECTION Betriebsmittel Verschiedenes Beleuchtung Lampe */
const { Lampe } = require(path.resolve(
  `${PBetriebsmittel}/Verschiedenes/Beleuchtung/Lampe/Lampe.js`
))

/** SECTION Betriebsmittel Verschiedenes Beleuchtung Lampe Gluehlampe */
const { Gluehlampe } = require(path.resolve(
  `${PBetriebsmittel}/Verschiedenes/Beleuchtung/Lampe/Gluehlampe/Gluehlampe.js`
))

/** !SECTION Betriebsmittel Verschiedenes Beleuchtung Lampe Gluehlampe */

/** !SECTION Betriebsmittel Verschiedenes Beleuchtung Lampe */

/** !SECTION Beriebsmittel Verschiedenes Beleuchtung */

/** !SECTION Betriebsmittel Verschiedens */

/** SECTION Betriebsmittel Messgeraet */
const { Messgeraet } = require(path.resolve(
  `${PBetriebsmittel}/Messgeraet/Messgeraet.js`
))

/** SECTION Betriebsmittel Messgeraet Energiemesser */
const { Energiemesser } = require(path.resolve(
  `${PBetriebsmittel}/Messgeraet/Energiemesser/Energiemesser.js`
))
/** !SECTION Betriebsmittel Messgeraet Energiemesser */

/** SECTION Betriebsmittel Messgeraet Frequenzmesser */
const { Frequenzmesser } = require(path.resolve(
  `${PBetriebsmittel}/Messgeraet/Frequenzmesser/Frequenzmesser.js`
))
/** !SECTION Betriebsmittel Messgeraet Frequenz */

/** SECTION Betriebsmittel Messgeraet Impedanzmesser */
const { Impedanzmesser } = require(path.resolve(
  `${PBetriebsmittel}/Messgeraet/Impedanzmesser/Impedanzmesser.js`
))
/** !SECTION Betriebsmittel Messgeraet Impedanzmesser */

/** SECTION Betriebsmittel Messgeraet Leistungsmesser */
const { Leistungsmesser } = require(path.resolve(
  `${PBetriebsmittel}/Messgeraet/Leistungsmesser/Leistungsmesser.js`
))
/** !SECTION Betriebsmittel Messgeraet Leistungsmesser */

/** SECTION Betriebsmittel Messgeraet MagnetischeGroessemesser */
const { MagnetischeGroessemesser } = require(path.resolve(
  `${PBetriebsmittel}/Messgeraet/MagnetischeGroessemesser/MagnetischeGroessemesser.js`
))
/** !SECTION Betriebsmittel Messgeraet MagnetischeGroessemesser */

/** SECTION Betriebsmittel Messgeraet Phasenwinkelmesser */
const { Phasenwinkelmesser } = require(path.resolve(
  `${PBetriebsmittel}/Messgeraet/Phasenwinkelmesser/Phasenwinkelmesser.js`
))
/** !SECTION Betriebsmittel Messgeraet Phasenwinkelmesser */

/** SECTION Betriebsmittel Messgeraet Spannungsmesser */
const { Spannungsmesser } = require(path.resolve(
  `${PBetriebsmittel}/Messgeraet/Spannungsmesser/Spannungsmesser.js`
))
/** !SECTION Betriebsmittel Messgeraet Spannungsmesser */

/** SECTION Betriebsmittel Messgeraet Strommesser */
const { Strommesser } = require(path.resolve(
  `${PBetriebsmittel}/Messgeraet/Strommesser/Strommesser.js`
))
/** !SECTION Betriebsmittel Messgeraet Strommesser */

/** SECTION Betriebsmittel Messgeraet Zeitmesser */
const { Zeitmesser } = require(path.resolve(
  `${PBetriebsmittel}/Messgeraet/Zeitmesser/Zeitmesser.js`
))
/** !SECTION Betriebsmittel Messgeraet Zeitmesser */

/** !SECTION Betriebsmittel Messgeraet */

/** SECTION Betriebsmittel Transformator */
const { Transformator } = require(path.resolve(
  `${PBetriebsmittel}/Transformator/Transformator.js`
))

/** SECTION Betriebsmittel Transformator AudioTransformator */
const { Audiotransformator } = require(path.resolve(
  `${PBetriebsmittel}/Transformator/Audiotransformator/Audiotransformator.js`
))
/** !SECTION Betriebsmittel Transformator AudioTransformator */

/** SECTION Betriebsmittel Transformator Dreiphasentransformator */
const { Dreiphasentransformator } = require(path.resolve(
  `${PBetriebsmittel}/Transformator/Dreiphasentransformator/Dreiphasentransformator.js`
))
/** !SECTION Betriebsmittel Transformator Dreiphasentransformator */

/** SECTION Betriebsmittel Transformator Einphasentransformator */
const { Einphasentransformator } = require(path.resolve(
  `${PBetriebsmittel}/Transformator/Einphasentransformator/Einphasentransformator.js`
))
/** !SECTION Betriebsmittel Transformator Einphasentransformator */

/** SECTION Betriebsmittel Transformator HFTransformator */
const { HFTransformator } = require(path.resolve(
  `${PBetriebsmittel}/Transformator/HFTransformator/HFTransformator.js`
))
/** !SECTION Betriebsmittel Transformator HFTransformator */

/** SECTION Betriebsmittel Transformator Impulstransformator */
const { Impulstransformator } = require(path.resolve(
  `${PBetriebsmittel}/Transformator/Impulstransformator/Impulstransformator.js`
))
/** !SECTION Betriebsmittel Transformator Impulstransformator */

/** SECTION Betriebsmittel Transformator Messwandler */
const { Messwandler } = require(path.resolve(
  `${PBetriebsmittel}/Transformator/Messwandler/Messwandler.js`
))

/** SECTION Betriebsmittel Transformator Messwandler Stromwandler */
const { Stromwandler } = require(path.resolve(
  `${PBetriebsmittel}/Transformator/Messwandler/Stromwandler/Stromwandler.js`
))
/** !SECTION Betriebsmittel Transformator Messwandler Stromwandler */

/** SECTION Betriebsmittel Transformator Messwandler Spannungswandler */
const { Spannungswandler } = require(path.resolve(
  `${PBetriebsmittel}/Transformator/Messwandler/Spannungswandler/Spannungswandler.js`
))
/** !SECTION Betriebsmittel Transformator Messwandler Spannungswandler */

/** !SECTION Betriebsmittel Transformator Messwandler */

/** SECTION Betriebsmittel Transformator Transaktor */
const { Transaktor } = require(path.resolve(
  `${PBetriebsmittel}/Transformator/Transaktor/Transaktor.js`
))
/** !SECTION Betriebsmittel Transformator Transaktor */

/** SECTION Betriebsmittel Transformator TransformatorMitMittenabgriff */
const { TransformatorMitMittenabgriff } = require(path.resolve(
  `${PBetriebsmittel}/Transformator/TransformatorMitMittenabgriff/TransformatorMitMittenabgriff.js`
))
/** !SECTION Betriebsmittel Transformator TransformatorMitMittenabgriff */

/** !SECTION Betriebsmittel Transformator */

/** !SECTION Betriebsmittel */

/** SECTION PhysikalischeChemie */
const { PhysikalischeChemie } = require(path.resolve(
  `${PPhysikalischeChemie}/PhysikalischeChemie.js`
))

/** SECTION PhysikalischeChemie Elektrochemie */
const { Elektrochemie } = require(path.resolve(
  `${PPhysikalischeChemie}/Elektrochemie/Elektrochemie.js`
))

/** SECTION PhysikalischeChemie Elektrochemie Elektrolyt */
const { Elektrolyt } = require(path.resolve(
  `${PPhysikalischeChemie}/Elektrochemie/Elektrolyt/Elektrolyt.js`
))

/** !SECTION PhysikalischeChemie Elektrochemie Elektrolyt */

/** !SECTION PhysikalischeChemie Elektrochemie */

/** !SECTION Physikalische Chemie */

const { ElektroKernel } = require(path.resolve(
  `${PElektrotechnik}/gleichspannung/grundbegriffe/kernel.js`
))

const { RohrleitungstechnikKernel } = require(path.resolve(
  `${PRohrleitungstechnik}/kernel.js`
))

// const { Rohrleitungen } = require(path.resolve(
//   `${PBauelemente}/Rohrleitungen/Rohrleitungen.js`
// ))

// const { Bleirohr } = require(path.resolve(
//   `${PBauelemente}/Rohrleitungen/Bleirohre/Bleirohr.js`
// ))

const { ArithmetikKernel } = require(path.resolve(
  `${PMathematik}/Arithmetik/kernel.js`
))

const { PlanemetrieKernel } = require(path.resolve(
  `${PMathematik}/Planemetrie/kernel.js`
))

const { Stack } = require(path.resolve(
  `${PDatenverarbeitung}/dynamischeDatenstrukturen/listen/stapel/stack.js`
))

module.exports = {
  Material,
  Bauelemente,
  Betriebsmittel,
  Baugruppen,
  Zweipole,
  PassiverZweipol,
  Rohrleitungen,
  Bleirohre,
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
  Freileitung,
  Draht,
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
  Stack
}
