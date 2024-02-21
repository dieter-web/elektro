require("use-strict");
const path = require("path");
const express = require("express");
const router = express.Router();

const { routerGet } = require(path.resolve("src/js/routerGet.js"));
const { erouter } = require(path.resolve("src/js/erouter.js"));

const R2 = require(path.resolve("include/routenBetriebsmittel"));

/** SECTION Betriebsmittel */
router.get("/", function (req, res) {
  res.render(R2.p2, {
    layout: `${R2.l2}/layout.ejs`,
  });
});

/** SECTION  Baugruppen */
routerGet(router, R2.r2_2, R2.p2, R2.l2);

/** SECTION Zweipole */
routerGet(router, R2.r2_2_1, R2.p2, R2.l2);

/** SECTION passiver Zweipol */
routerGet(router, R2.r2_2_1_1, R2.p2, R2.l2);

/** SECTION gemischte Schaltung */
routerGet(router, R2.r2_2_1_1_1, R2.p2, R2.l2);
/** !SECTION gemischteSchaltung */

/** SECTION Kettenschaltung */
routerGet(router, R2.r2_2_1_1_2, R2.p2, R2.l2);
/** !SECTION Kettenschaltung */

/** SECTION Parallelschaltung */
routerGet(router, R2.r2_2_1_1_3, R2.p2, R2.l2);
/** !SECTION Parallelschaltung */

/** SECTION Reihenschaltung */
routerGet(router, R2.r2_2_1_1_4, R2.p2, R2.l2);

/** NOTE Übung 1.111 */
erouter(router, R2.p2, R2.l2, R2.e, R2.r2_2_1_1_4, R2.u111);

/** !SECTION Reihenschaltung */

/** !SECTION passiver Zweipol */
/** !SECTION Zweipol */

/** !SECTION Baugruppen */

/** SECTION  Widerstaende */
routerGet(router, R2.r2_27, R2.p2, R2.l2);

/** SECTION Widerstand */
routerGet(router, R2.r2_27_1, R2.p2, R2.l2);

/** NOTE Beispiel 1.1 */
erouter(router, R2.p2, R2.l2, R2.e, R2.r2_27_1, R2.b11);

/** !SECTION Widerstand */

/** SECTION ParameterabhaengigeHalbleiterwiderstaende */
routerGet(router, R2.r2_27_2, R2.p2, R2.l2);

/** SECTION ElektrischeParameter */
routerGet(router, R2.r2_27_2_1, R2.p2, R2.l2);

/** SECTION Spannung */
routerGet(router, R2.r2_27_2_1_1, R2.p2, R2.l2);

/** SECTION Varistor */
routerGet(router, R2.r2_27_2_1_1_1, R2.p2, R2.l2);
/** !SECTION Varistor */
/** !SECTION Spannung */
/** !SECTION ElektrischeParameter */

/** SECTION NichtelektrischeParameter */
routerGet(router, R2.r2_27_2_2, R2.p2, R2.l2);

/** SECTION MagnetischesFeld */
routerGet(router, R2.r2_27_2_2_1, R2.p2, R2.l2);

/** SECTION Feldplatte */
routerGet(router, R2.r2_27_2_2_1_1, R2.p2, R2.l2);
/** !SECTION Feldplatte */
/** !SECTION MagnetischesFeld */

/** SECTION Strahlung */
routerGet(router, R2.r2_27_2_2_2, R2.p2, R2.l2);
/** SECTION Fotowiderstand */
routerGet(router, R2.r2_27_2_2_2_1, R2.p2, R2.l2);
/** !SECTION Fotowiderstand */
/** !SECTION Strahlung */
/** SECTION Temperatur */
routerGet(router, R2.r2_27_2_2_3, R2.p2, R2.l2);

/** SECTION Thermistor */
routerGet(router, R2.r2_27_2_2_3_1, R2.p2, R2.l2);

/** SECTION Heissleiter */
routerGet(router, R2.r2_27_2_2_3_1_1, R2.p2, R2.l2);
/** !SECTION Heissleiter */

/** SECTION Kaltleiter */
routerGet(router, R2.r2_27_2_2_3_1_2, R2.p2, R2.l2);

/** NOTE Uebung 19 */
erouter(router, R2.p2, R2.l2, R2.e, R2.r2_27_2_2_3_1_2, R2.u19);

/** SECTION KeramischeKaltleiter */
routerGet(router, R2.r2_27_2_2_3_1_2_1, R2.p2, R2.l2);
/** !SECTION KeramischeKaltleiter */
/** !SECTION Kaltleiter */
/** !SECTION Thermistor */
/** !SECTION Temperatur */
/** !SECTION NichtelektrischeParameter */
/** !SECTION ParameterabhaengigeHalbleiterwiderstaende */
/** !SECTION Widerstandaende */

/** SECTION Übertragungswege */
routerGet(router, R2.r2_21, R2.p2, R2.l2);

/** SECTION Leitung */
routerGet(router, R2.r2_21_4, R2.p2, R2.l2);

/** SECTION Isolierteleitung */
routerGet(router, R2.r2_21_4_1, R2.p2, R2.l2);

/** SECTION Fernmeldeleitung */
routerGet(router, R2.r2_21_4_1_1, R2.p2, R2.l2);

/** SECTION Eindrahtleitung */
routerGet(router, R2.r2_21_4_1_1_1, R2.p2, R2.l2);
/** !SECTION Eindrahtleitung */

/** SECTION Lahnlitzeleitung */
routerGet(router, R2.r2_21_4_1_1_2, R2.p2, R2.l2);
/** !SECTION Lahnlitzeleitung */

/** SECTION Litzeleitung */
routerGet(router, R2.r2_21_4_1_1_3, R2.p2, R2.l2);

/** NOTE Litzeleitung Uebung12 */
erouter(router, R2.p2, R2.l2, R2.e, R2.r2_21_4_1_1_3, R2.u12);

/** !SECTION Litzeleitung */

/** !SECTION Fernmeldeleitung */

/** SECTION Starkstromleitung */
routerGet(router, R2.r2_21_4_1_2, R2.p2, R2.l2);

/** NOTE Starkstromleitung Beispiel14  */
erouter(router, R2.p2, R2.l2, R2.e, R2.r2_21_4_1_2, R2.b14);

/** !SECTION Starkstromleitung */

/** !SECTION Isolierteleitung */

/** SECTION Blankeleitung */
routerGet(router, R2.r2_21_4_2, R2.p2, R2.l2);

/** SECTION Freileitung */
routerGet(router, R2.r2_21_4_2_1, R2.p2, R2.l2);

/**NOTE Freileitung Übung 1.1 */
erouter(router, R2.p2, R2.l2, R2.e, R2.r2_21_4_2_1, R2.u11);

/** !SECTION Freileitung */

/** SECTION Hochfrequenzleitung */
routerGet(router, R2.r2_21_4_2_2, R2.p2, R2.l2);
/** !SECTION Hochfrequenzleitung */

/** SECTION Erder */
routerGet(router, R2.r2_21_4_2_3, R2.p2, R2.l2);

/** NOTE Erder Aufgabe15 */
erouter(router, R2.p2, R2.l2, R2.e, R2.r2_21_4_2_3, R2.a15);

/** !SECTION Erder */

/** SECTION Erdungssammelleitung */
routerGet(router, R2.r2_21_4_2_4, R2.p2, R2.l2);
/** !SECTION Erdungssammelleitung */

/** SECTION Fahrleitung */
routerGet(router, R2.r2_21_4_2_5, R2.p2, R2.l2);
/** !SECTION Fahrleitung */

/** SECTION Freileitung */
routerGet(router, R2.r2_21_4_2_6, R2.p2, R2.l2);
/** !SECTION Freileitung */

/** SECTION OffenGelegteLeitung */
routerGet(router, R2.r2_21_4_2_7, R2.p2, R2.l2);
/** !SECTION OffenGelegteLeitung */

/** SECTION Sammelschiene */
routerGet(router, R2.r2_21_4_2_8, R2.p2, R2.l2);
/** !SECTION Sammelschiene */

/** SECTION Schiene */
routerGet(router, R2.r2_21_4_2_9, R2.p2, R2.l2);
/** !SECTION Schiene */

/** SECTION Stromschiene */
routerGet(router, R2.r2_21_4_2_10, R2.p2, R2.l2);
/** !SECTION Stromschiene */

/** !SECTION Blankeleitung */

/** !SECTION Leitungen */

/** SECTION Antenne */
routerGet(router, R2.r2_21_1, R2.p2, R2.l2);
/** !SECTION Antenne */

/** SECTION Kabel */
routerGet(router, R2.r2_21_3, R2.p2, R2.l2);

/** SECTION Fernmeldekabel */
routerGet(router, R2.r2_21_3_1, R2.p2, R2.l2);
/** !SECTION Fernmeldekabel */

/** SECTION Hochfrequenzkabel */
routerGet(router, R2.r2_21_3_2, R2.p2, R2.l2);
/** !SECTION Hochfrequenzkabel */

/** SECTION Starkstromkabel */
routerGet(router, R2.r2_21_3_3, R2.p2, R2.l2);

/** NOTE Starkstromkabel Übung16 */
erouter(router, R2.p2, R2.l2, R2.e, R2.r2_21_3_3, R2.u16);

/** NOTE Starkstromkabel Aufgabe 110 */
erouter(router, R2.p2, R2.l2, R2.e, R2.r2_21_3_3, R2.u110);

/** !SECTION Starkstromkabel */

/** !SECTION Kabel */

/** SECTION Drahete */
routerGet(router, R2.r2_21_2, R2.p2, R2.l2);

/** SECTION Draht */
routerGet(router, R2.r2_21_2_1, R2.p2, R2.l2);

/** SECTION Runddraht */
routerGet(router, R2.r2_21_2_1_1, R2.p2, R2.l2);

/** SECTION Blank */
routerGet(router, R2.r2_21_2_1_1_1, R2.p2, R2.l2);

/** SECTION Kupferdraht */
routerGet(router, R2.r2_21_2_1_1_1_1, R2.p2, R2.l2);
/** !SECTION Kupferdraht */

/** SECTION Legierungsdraht */
routerGet(router, R2.r2_21_2_1_1_1_2, R2.p2, R2.l2);

/** !SECTION Legierungsdraht */

/** SECTION Aluminiumdraht */
routerGet(router, R2.r2_21_2_1_1_1_3, R2.p2, R2.l2);

/** NOTE Aluminiumdraht Beispiel16 */
erouter(router, R2.p2, R2.l2, R2.e, R2.r2_21_2_1_1_1_3, R2.b16);

/** !SECTION Aluminiumdraht */

/** !SECTION Blank */

/** SECTION Isoliert */
routerGet(router, R2.r2_21_2_1_1_2, R2.p2, R2.l2);
/** !SECTION Isoliert */

/** !SECTION Runddraht */

/** !SECTION Draht */

/** SECTION Wickeldraht */
routerGet(router, R2.r2_21_2_2, R2.p2, R2.l2);
/** !SECTION Wickeldraht */

/** !SECTION Draehte */

/** SECTION Sammelschiene */
routerGet(router, R2.r2_21_5, R2.p2, R2.l2);
/** !SECTION Sammelschiene */

/** !SECTION Übertragungswege */

/** SECTION Induktivitaet */
routerGet(router, R2.r2_7, R2.p2, R2.l2);

/** SECTION Magnetische Bauelemente digitaler Einrichtungen */
routerGet(router, R2.r2_7_1, R2.p2, R2.l2);
/** !SECTION Magnetische Bauelemente digitaler Einrichtungen */

/** SECTION Spule */
routerGet(router, R2.r2_7_2, R2.p2, R2.l2);

/** SECTION SpulenmitKern */
routerGet(router, R2.r2_7_2_1, R2.p2, R2.l2);

/** SECTION Magnetspule */
routerGet(router, R2.r2_7_2_1_1, R2.p2, R2.l2);

/** NOTE Magnetspuel Uebung18 */
erouter(router, R2.p2, R2.l2, R2.e, R2.r2_7_2_1_1, R2.u18);

/** !SECTION Magnetspule */

/** !SECTION SpulenmitKern */

/** SECTION SpulenohneKern */
routerGet(router, R2.r2_7_2_2, R2.p2, R2.l2);

/** SECTION Abgeschirmte Spule */
routerGet(router, R2.r2_7_2_2_1, R2.p2, R2.l2);
/** !SECTION Abgeschirmte Spule */

/** SECTION EinlagigeSpule  */
routerGet(router, R2.r2_7_2_2_2, R2.p2, R2.l2);
/** !SECTION EinlagigeSpule  */

/** SECTION MehrlagigeSpule  */
routerGet(router, R2.r2_7_2_2_3, R2.p2, R2.l2);

/** NOTE MehrlagigeSpule Aufgabe13 */
erouter(router, R2.p2, R2.l2, R2.e, R2.r2_7_2_2_3, R2.a13);

/** NOTE MehrlagigeSpule Aufgabe 14 */
erouter(router, R2.p2, R2.l2, R2.e, R2.r2_7_2_2_3, R2.a14);

/** NOTE MehrlagigeSpule Beispiel 18 */
erouter(router, R2.p2, R2.l2, R2.e, R2.r2_7_2_2_3, R2.b18);

/** !SECTION MehrlagigeSpule  */

/** SECTION Ringspule  */
routerGet(router, R2.r2_7_2_2_4, R2.p2, R2.l2);
/** !SECTION Ringspule  */

/** SECTION Zylinderspule */
routerGet(router, R2.r2_7_2_2_5, R2.p2, R2.l2);
/** !SECTION Zylinderspule */

/** !SECTION SpulenohneKern */

/** SECTION Variometer */
routerGet(router, R2.r2_7_3, R2.p2, R2.l2);
/** !SECTION Variometer */

/** !SECTION Spule */

/** !SECTION Induktivitaet */

/** SECTION Messgeraete */
routerGet(router, R2.r2_10, R2.p2, R2.l2);

/** SECTION Energiemesser */
routerGet(router, R2.r2_10_1, R2.p2, R2.l2);
/** !SECTION Energiemesser */

/** SECTION Frequenzmesser */
routerGet(router, R2.r2_10_2, R2.p2, R2.l2);
/** !SECTION Frequenzmesser */

/** SECTION Impedanzmesser */
routerGet(router, R2.r2_10_3, R2.p2, R2.l2);
/** !SECTION Impedanzmesser */

/** SECTION Leistungsmesser */
routerGet(router, R2.r2_10_4, R2.p2, R2.l2);
/** !SECTION Leistungsmesser */

/** SECTION MagnetischeGroessemesser */
routerGet(router, R2.r2_10_5, R2.p2, R2.l2);
/** !SECTION MagnetischeGroessemesser */

/** SECTION Phasenwinkelmesser */
routerGet(router, R2.r2_10_6, R2.p2, R2.l2);
/** !SECTION Phasenwinkelmesser */

/** SECTION Spannungsmesser */
routerGet(router, R2.r2_10_7, R2.p2, R2.l2);

/** NOTE Spannungsmesser Uebung15 */
erouter(router, R2.p2, R2.l2, R2.e, R2.r2_10_7, R2.u15);
/** !SECTION pannungsmesser */

/** SECTION Strommesser */
routerGet(router, R2.r2_10_8, R2.p2, R2.l2);

/** NOTE Strommesser Uebung13 */
erouter(router, R2.p2, R2.l2, R2.e, R2.r2_10_8, R2.u13);

/** !SECTION Strommesser */

/** SECTION Zeitmesser */
routerGet(router, R2.r2_10_9, R2.p2, R2.l2);
/** !SECTION Zeitmesser */

/** !SECTION Messgeraete */

/** SECTION Verschiedenes */
routerGet(router, R2.r2_24, R2.p2, R2.l2);

/**SECTION Beleuchtung */
routerGet(router, R2.r2_24_1, R2.p2, R2.l2);

/** SECTION Lampe */
routerGet(router, R2.r2_24_1_1, R2.p2, R2.l2);

/** SECTION Gluehlampe */
routerGet(router, R2.r2_24_1_1_1, R2.p2, R2.l2);

/** NOTE Gluehlampe Beispiel17 */
erouter(router, R2.p2, R2.l2, R2.e, R2.r2_24_1_1_1, R2.b17);

/** !SECTION Gluehlampe */

/** !SECTION Lampe */

/**!SECTION Beleuchtung */

/** SECTION Elektrode */
/** !SECTION Elektrode */

/** !SECTION Verschiedenes */

/** SECTION Elektrische Maschinen */
routerGet(router, R2.r2_20, R2.p2, R2.l2);
/** SECTION Beweglich */
routerGet(router, R2.r2_20_1, R2.p2, R2.l2);
/** SECTION RotierendeElektrischeMaschinen */
routerGet(router, R2.r2_20_1_1, R2.p2, R2.l2);
/** SECTION Asynchronmaschienen */
routerGet(router, R2.r2_20_1_1_1, R2.p2, R2.l2);
/** !SECTION Asynchronmaschienen */

/** SECTION Generatoren */
routerGet(router, R2.r2_20_1_1_2, R2.p2, R2.l2);
/** !SECTION Generatoren */

/** SECTION KommutatorMaschinen */
routerGet(router, R2.r2_20_1_1_3, R2.p2, R2.l2);

/** SECTION DreiphasenKommutatorMaschienen */
routerGet(router, R2.r2_20_1_1_3_1, R2.p2, R2.l2);
/** !SECTION DreiphasenKommutatorMaschienen */

/** SECTION EinphasenKommutatorMaschienen */
routerGet(router, R2.r2_20_1_1_3_2, R2.p2, R2.l2);
/** !SECTION EinphasenKommutatorMaschienen */

/** SECTION Gleichstrommaschine */
routerGet(router, R2.r2_20_1_1_3_3, R2.p2, R2.l2);
/** !SECTION Gleichstrommaschine */

/** !SECTION KommutatorMaschinen */

/** SECTION Motoren */
routerGet(router, R2.r2_20_1_1_4, R2.p2, R2.l2);
/** !SECTION Motoren */

/** SECTION Synchronmaschinen */
routerGet(router, R2.r2_20_1_1_5, R2.p2, R2.l2);
/** !SECTION Synchronmaschinen */

/** SECTION Umformer */
routerGet(router, R2.r2_20_1_1_6, R2.p2, R2.l2);
/** !SECTION Umformer */

/** !SECTION RotierendeElektrischeMaschinen *

/** !SECTION Beweglich */

/** SECTION Starr */
routerGet(router, R2.r2_20_2, R2.p2, R2.l2);
/** SECTION RuhendeElektrischeMaschinen */
routerGet(router, R2.r2_20_2_1, R2.p2, R2.l2);

/** SECTION Transformatoren */
routerGet(router, R2.r2_20_2_1_1, R2.p2, R2.l2);

/** SECTION Transformator */
routerGet(router, R2.r2_20_2_1_1_7, R2.p2, R2.l2);

/** NOTE Transformator Übung 1.7 */
erouter(router, R2.p2, R2.l2, R2.e, R2.r2_20_2_1_1_7, R2.u17);

/** !SECTION Transformator */

/** SECTION HFTransformator */
routerGet(router, R2.r2_20_2_1_1_1, R2.p2, R2.l2);
/** !SECTION HFTransformator */

/** SECTION Impulstransformator */
routerGet(router, R2.r2_20_2_1_1_2, R2.p2, R2.l2);
/** !SECTION Impulstransformator */

/** SECTION Kerntransformator */
routerGet(router, R2.r2_20_2_1_1_3, R2.p2, R2.l2);

/** SECTION Audiotransformator */
routerGet(router, R2.r2_20_2_1_1_3_1, R2.p2, R2.l2);
/** !SECTION Audiotransformator */

/** SECTION Dreiphasentransformator */
routerGet(router, R2.r2_20_2_1_1_3_2, R2.p2, R2.l2);
/** !SECTION Dreiphasentransformator */

/** SECTION Einphasentransformator */
routerGet(router, R2.r2_20_2_1_1_3_3, R2.p2, R2.l2);
/** !SECTION Einphasentransformator */

/** SECTION Ringkerntransformator */
routerGet(router, R2.r2_20_2_1_1_3_4, R2.p2, R2.l2);
/** !SECTION Ringkerntransformator */

/** SECTION TransformatorMitMittenabgriff */
routerGet(router, R2.r2_20_2_1_1_3_5, R2.p2, R2.l2);
/** !SECTION TransformatorMitMittenabgriff */

/** !SECTION Kerntransformator */

/** SECTION Manteltransformator */
routerGet(router, R2.r2_20_2_1_1_4, R2.p2, R2.l2);
/** !SECTION Manteltransformator */

/** SECTION Messwandler */
routerGet(router, R2.r2_20_2_1_1_5, R2.p2, R2.l2);
/** SECTION Spannungswandler */
routerGet(router, R2.r2_20_2_1_1_5_1, R2.p2, R2.l2);
/** !SECTION Spannungswandler */

/** SECTION Stromwandler */
routerGet(router, R2.r2_20_2_1_1_5_2, R2.p2, R2.l2);
/** !SECTION Stromwandler */

/** !SECTION Messwandler */

/** SECTION Transaktor */
routerGet(router, R2.r2_20_2_1_1_6, R2.p2, R2.l2);
/** !SECTION Transaktor */

/** !SECTION Transformatoren */

/** !SECTION RuhendeElektrischeMaschinen */

/** !SECTION Starr */

/** !SECTION Elektrische Maschinen */

/** !SECTION Betriebsmittel */

module.exports = router;
