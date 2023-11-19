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

/** SECTION Baugruppen Zweipole */
routerGet(router, R2.r2_2_1, R2.p2, R2.l2);

/** SECTION Baugruppen Zweipole passiver Zweipol */
routerGet(router, R2.r2_2_1_1, R2.p2, R2.l2);

/** SECTION Baugruppen Zweipole passiver Zweipol gemischte Schaltung */
routerGet(router, R2.r2_2_1_1_1, R2.p2, R2.l2);
/** !SECTION Baugruppen Zweipole passiver Zweipol gemischteSchaltung */

/** SECTION Baugruppen Zweipole passiver Zweipol Kettenschaltung */
routerGet(router, R2.r2_2_1_1_2, R2.p2, R2.l2);
/** !SECTION Baugruppen Zweipole passiver Zweipol Kettenschaltung */

/** SECTION Baugruppen Zweipole passiver Zweipol Parallelschaltung */
routerGet(router, R2.r2_2_1_1_3, R2.p2, R2.l2);
/** !SECTION Baugruppen Zweipole passiver Zweipol Parallelschaltung */

/** SECTION Baugruppen Zweipole passiver Zweipol Reihenschaltung */
routerGet(router, R2.r2_2_1_1_4, R2.p2, R2.l2);

/** NOTE Übung 1.111 */
erouter(router, R2.p2, R2.l2, R2.e, R2.r2_2_1_1_4, R2.u111);

/** !SECTION Baugruppen Zweipole passiver Zweipol Reihenschaltung */

/** !SECTION Baugruppen Zweipole passiver Zweipol */

/** !SECTION Betriebsmittel Baugruppen */
/** !SECTION Betriebsmittel Baugruppen */

/** SECTION  Betriebsmittel Widerstaende */
routerGet(router, R2.r2_27, R2.p2, R2.l2);

/** SECTION Betriebsmittel Widerstaende widerstand */
routerGet(router, R2.r2_27_1, R2.p2, R2.l2);

/** NOTE Beispiel 1.1 */
erouter(router, R2.p2, R2.l2, R2.e, R2.r2_27_1, R2.b11);

/** !SECTION Betriebsmittel Widerstand widerstand */

/** SECTION Betriebsmittel Widerstand feldplatten */
routerGet(router, R2.r2_27_2, R2.p2, R2.l2);
/** !SECTION Betriebsmittel Widerstand feldplatten */

/** SECTION Betriebsmittel Widerstand fotowiderstand */
routerGet(router, R2.r2_27_3, R2.p2, R2.l2);
/** !SECTION Betriebsmittel Widerstand fotowiderstand */

/** SECTION Betriebsmittel Widerstand thermistor */
routerGet(router, R2.r2_27_4, R2.p2, R2.l2);

/** SECTION Betriebsmittel Widerstand thermistor heissleiter */
routerGet(router, R2.r2_27_4_1, R2.p2, R2.l2);
/** !SECTION Betriebsmittel Widerstand thermistor heissleiter */

/** SECTION Betriebsmittel Widerstand thermistor kaltleiter */
routerGet(router, R2.r2_27_4_2, R2.p2, R2.l2);

/** NOTE Uebung 19 */
erouter(router, R2.p2, R2.l2, R2.e, R2.r2_27_4_2, R2.u19);

/** !SECTION Betriebsmittel Widerstand thermistor kaltleiter */

/** !SECTION Betriebsmittel Widerstand thermistor */

/** SECTION Betriebsmittel Widerstand varistor */
routerGet(router, R2.r2_27_5, R2.p2, R2.l2);
/** !SECTION Betriebsmittel Widerstand varistor */

/** !SECTION Widerstand */

/** SECTION Betriebsmittel Übertragungswege */
routerGet(router, R2.r2_21, R2.p2, R2.l2);

/** SECTION Betriebsmittel Übertragungswege Leitung */
routerGet(router, R2.r2_21_4, R2.p2, R2.l2);

/** SECTION Betriebsmittel Übertragungswege Leitung Isolierteleitung */
routerGet(router, R2.r2_21_4_1, R2.p2, R2.l2);

/** SECTION Betriebsmittel Übertragungswege Leitung Isolierteleitung Fernmeldeleitung */
routerGet(router, R2.r2_21_4_1_1, R2.p2, R2.l2);

/** SECTION Betriebsmittel Übertragungswege Leitung Isolierteleitung Fernmeldeleitung Eindrahtleitung */
routerGet(router, R2.r2_21_4_1_1_1, R2.p2, R2.l2);
/** !SECTION Betriebsmittel Übertragungswege Leitung Isolierteleitung Fernmeldeleitung Eindrahtleitung */

/** SECTION Betriebsmittel Übertragungswege Leitung Isolierteleitung Fernmeldeleitung Lahnlitzeleitung */
routerGet(router, R2.r2_21_4_1_1_2, R2.p2, R2.l2);
/** !SECTION Betriebsmittel Übertragungswege Leitung Isolierteleitung Fernmeldeleitung Lahnlitzeleitung */

/** SECTION Betriebsmittel Übertragungswege Leitung Isolierteleitung Fernmeldeleitung Litzeleitung */
routerGet(router, R2.r2_21_4_1_1_3, R2.p2, R2.l2);

/** NOTE Betriebsmittel Übertragungswege Leitung Isolierteleitung Fernmeldeleitung Litzeleitung Uebung12 */
erouter(router, R2.p2, R2.l2, R2.e, R2.r2_21_4_1_1_3, R2.u12);

/** !SECTION Betriebsmittel Übertragungswege Leitung Isolierteleitung Fernmeldeleitung Litzeleitung */

/** !SECTION Betriebsmittel Übertragungswege Leitung Isolierteleitung Fernmeldeleitung */

/** SECTION Betriebsmittel Übertragungswege Leitung Isolierteleitung Starkstromleitung */
routerGet(router, R2.r2_21_4_1_2, R2.p2, R2.l2);

/** NOTE Betriebsmittel Übertragungswege Leitung Isolierteleitung Starkstromleitung Beispiel14  */
erouter(router, R2.p2, R2.l2, R2.e, R2.r2_21_4_1_2, R2.b14);

/** NOTE Betriebsmittel Übertragungswege Leitung Isolierteleitung Starkstromleitung Aufgabe15 */
erouter(router, R2.p2, R2.l2, R2.e, R2.r2_21_4_1_2, R2.a15);

/** !SECTION Betriebsmittel Übertragungswege Leitung Isolierteleitung Starkstromleitung */

/** !SECTION Betriebsmittel Übertragungswege Leitung Isolierteleitung */

/** SECTION Betriebsmittel Übertragungswege Leitung Blankeleitung */
routerGet(router, R2.r2_21_4_2, R2.p2, R2.l2);

/** SECTION Betriebsmittel Übertragungswege Leitung Blankeleitung Freileitung */
routerGet(router, R2.r2_21_4_2_1, R2.p2, R2.l2);

/**NOTE Betriebsmittel Übertragungswege Leitung Blankeleitung Freileitung Übung 1.1 */
erouter(router, R2.p2, R2.l2, R2.e, R2.r2_21_4_2_1, R2.u11);

/** !SECTION Betriebsmittel Übertragungswege Leitung Blankeleitung Freileitung */

/** SECTION Betriebsmittel Übertragungswege Leitung Blankeleitung Hochfrequenzleitung */
routerGet(router, R2.r2_21_4_2_2, R2.p2, R2.l2);
/** !SECTION Betriebsmittel Übertragungswege Leitung Blankeleitung Hochfrequenzleitung */

/** SECTION Betriebsmittel Übertragungswege Leitung Blankeleitung Erder */
routerGet(router, R2.r2_21_4_2_3, R2.p2, R2.l2);
/** !SECTION Betriebsmittel Übertragungswege Leitung Blankeleitung Erder */

/** SECTION Betriebsmittel Übertragungswege Leitung Blankeleitung Erdungssammelleitung */
routerGet(router, R2.r2_21_4_2_4, R2.p2, R2.l2);
/** !SECTION Betriebsmittel Übertragungswege Leitung Blankeleitung Erdungssammelleitung */

/** SECTION Betriebsmittel Übertragungswege Leitung Blankeleitung Fahrleitung */
routerGet(router, R2.r2_21_4_2_5, R2.p2, R2.l2);
/** !SECTION Betriebsmittel Übertragungswege Leitung Blankeleitung Fahrleitung */

/** SECTION Betriebsmittel Übertragungswege Leitung Blankeleitung Freileitung */
routerGet(router, R2.r2_21_4_2_6, R2.p2, R2.l2);
/** !SECTION Betriebsmittel Übertragungswege Leitung Blankeleitung Freileitung */

/** SECTION Betriebsmittel Übertragungswege Leitung Blankeleitung OffenGelegteLeitung */
routerGet(router, R2.r2_21_4_2_7, R2.p2, R2.l2);
/** !SECTION Betriebsmittel Übertragungswege Leitung Blankeleitung OffenGelegteLeitung */

/** SECTION Betriebsmittel Übertragungswege Leitung Blankeleitung Sammelschiene */
routerGet(router, R2.r2_21_4_2_8, R2.p2, R2.l2);
/** !SECTION Betriebsmittel Übertragungswege Leitung Blankeleitung Sammelschiene */

/** SECTION Betriebsmittel Übertragungswege Leitung Blankeleitung Schiene */
routerGet(router, R2.r2_21_4_2_9, R2.p2, R2.l2);
/** !SECTION Betriebsmittel Übertragungswege Leitung Blankeleitung Schiene */

/** SECTION Betriebsmittel Übertragungswege Leitung Blankeleitung Stromschiene */
routerGet(router, R2.r2_21_4_2_10, R2.p2, R2.l2);
/** !SECTION Betriebsmittel Übertragungswege Leitung Blankeleitung Stromschiene */

/** !SECTION Betriebsmittel Übertragungswege Leitung Blankeleitung */

/** !SECTION Betriebsmittel Übertragungswege Leitungen */

/** SECTION Betriebsmittel Übertragungswege Antenne */
routerGet(router, R2.r2_21_1, R2.p2, R2.l2);
/** !SECTION Betriebsmittel Übertragungswege Antenne */

/** SECTION Betriebsmittel Übertragungswege Kabel */
routerGet(router, R2.r2_21_3, R2.p2, R2.l2);

/** NOTE Betriebsmittel Übertragungswege Kabel Aufgabe 110 */
erouter(router, R2.p2, R2.l2, R2.e, R2.r2_21_3, R2.u110);

/** SECTION Betriebsmittel Übertragungswege Kabel Fernmeldekabel */
routerGet(router, R2.r2_21_3_1, R2.p2, R2.l2);
/** !SECTION Betriebsmittel Übertragungswege Kabel Fernmeldekabel */

/** SECTION Betriebsmittel Übertragungswege Kabel Hochfrequenzkabel */
routerGet(router, R2.r2_21_3_2, R2.p2, R2.l2);
/** !SECTION Betriebsmittel Übertragungswege Kabel Hochfrequenzkabel */

/** SECTION Betriebsmittel Übertragungswege Kabel Starkstromkabel */
routerGet(router, R2.r2_21_3_3, R2.p2, R2.l2);
/** !SECTION Betriebsmittel Übertragungswege Kabel Starkstromkabel */

/** !SECTION Betriebsmittel Übertragungswege Kabel */

/** SECTION Betriebsmittel Übertragungswege Drahete */
routerGet(router, R2.r2_21_2, R2.p2, R2.l2);

/** SECTION Betriebsmittel Übertragungswege Drahete Draht */
routerGet(router, R2.r2_21_2_1, R2.p2, R2.l2);

/** SECTION Betriebsmittel Übertragungswege Drahete Draht Runddraht */
routerGet(router, R2.r2_21_2_1_1, R2.p2, R2.l2);

/** SECTION Betriebsmittel Übertragungswege Drahete Draht Runddraht Blank */
routerGet(router, R2.r2_21_2_1_1_1, R2.p2, R2.l2);

/** SECTION Betriebsmittel Übertragungswege Drahete Draht Runddraht Blank Kupferdraht */
routerGet(router, R2.r2_21_2_1_1_1_1, R2.p2, R2.l2);
/** !SECTION Betriebsmittel Übertragungswege Drahete Draht Runddraht Blank Kupferdraht */

/** SECTION Betriebsmittel Übertragungswege Drahete Draht Runddraht Blank Legierungsdraht */
routerGet(router, R2.r2_21_2_1_1_1_2, R2.p2, R2.l2);

/** !SECTION Betriebsmittel Übertragungswege Drahete Draht Runddraht Blank Legierungsdraht */

/** SECTION Betriebsmittel Übertragungswege Drahete Draht Runddraht Blank Aluminiumdraht */
routerGet(router, R2.r2_21_2_1_1_1_3, R2.p2, R2.l2);

/** NOTE Betriebsmittel Übertragungswege Draehte Draht Runddraht Blank Aluminiumdraht Beispiel16 */
erouter(router, R2.p2, R2.l2, R2.e, R2.r2_21_2_1_1_1_3, R2.b16);

/** !SECTION Betriebsmittel Übertragungswege Drahete Draht Runddraht Blank Aluminiumdraht */

/** !SECTION Betriebsmittel Übertragungswege Drahete Draht Runddraht Blank */

/** SECTION Betriebsmittel Übertragungswege Drahete Draht Runddraht Isoliert */
routerGet(router, R2.r2_21_2_1_1_2, R2.p2, R2.l2);
/** !SECTION Betriebsmittel Übertragungswege Drahete Draht Runddraht Isoliert */

/** !SECTION Betriebsmittel Übertragungswege Drahete Draht Runddraht */

/** !SECTION Betriebsmittel Übertragungswege Drahete Draht */

/** SECTION Betriebsmittel Übertragungswege Drahete Wickeldraht */
routerGet(router, R2.r2_21_2_2, R2.p2, R2.l2);
/** !SECTION Betriebsmittel Übertragungswege Drahete Wickeldraht */

/** !SECTION Betriebsmittel Übertragungswege Draehte */

/** SECTION Betriebsmittel Übertragungswege Sammelschiene */
routerGet(router, R2.r2_21_5, R2.p2, R2.l2);
/** !SECTION Betriebsmittel Übertragungswege Sammelschiene */

/** !SECTION Betriebsmittel Übertragungswege */

/** SECTION Betriebsmittel Induktivitaet */
routerGet(router, R2.r2_7, R2.p2, R2.l2);

/** SECTION Betriebsmittel Induktivitaet Magnetische Bauelemente digitaler Einrichtungen */
routerGet(router, R2.r2_7_1, R2.p2, R2.l2);
/** !SECTION Betriebsmittel Induktivitaet Magnetische Bauelemente digitaler Einrichtungen */

/** SECTION Betriebsmittel Induktivitaet Spule */
routerGet(router, R2.r2_7_2, R2.p2, R2.l2);

/** SECTION Betriebsmittel Induktivitaet Spule SpulenmitKern */
routerGet(router, R2.r2_7_2_1, R2.p2, R2.l2);

/** SECTION Betriebsmittel Induktivitaet Spule SpulenmitKern Magnetspule */
routerGet(router, R2.r2_7_2_1_1, R2.p2, R2.l2);

/** NOTE Betriebsmittel Induktivitaet Spule SpulemitKern Magnetspuel Uebung18 */
erouter(router, R2.p2, R2.l2, R2.e, R2.r2_7_2_1_1, R2.u18);

/** !SECTION Betriebsmittel Induktivitaet Spule SpulenmitKern Magnetspule */

/** !SECTION Betriebsmittel Induktivitaet Spule SpulenmitKern */

/** SECTION Betriebsmittel Induktivitaet Spule SpulenohneKern */
routerGet(router, R2.r2_7_2_2, R2.p2, R2.l2);

/** SECTION Betriebsmittel Induktivitaet Spule SpulenohneKern Abgeschirmte Spule */
routerGet(router, R2.r2_7_2_2_1, R2.p2, R2.l2);
/** !SECTION Betriebsmittel Induktivitaet Spule SpulenohneKern Abgeschirmte Spule */

/** SECTION Betriebsmittel Induktivitaet Spule SpulenohneKern EinlagigeSpule  */
routerGet(router, R2.r2_7_2_2_2, R2.p2, R2.l2);
/** !SECTION Betriebsmittel Induktivitaet Spule SpulenohneKern EinlagigeSpule  */

/** SECTION Betriebsmittel Induktivitaet Spule SpulenohneKern MehrlagigeSpule  */
routerGet(router, R2.r2_7_2_2_3, R2.p2, R2.l2);

/** NOTE Betriebsmittel Induktivitaet SpuleohneKern MehrlagigeSpule Aufgabe13 */
erouter(router, R2.p2, R2.l2, R2.e, R2.r2_7_2_2_3, R2.a13);

/** NOTE Betriebsmittel Induktivitaet SpuleohneKern MehrlagigeSpule Aufgabe 14 */
erouter(router, R2.p2, R2.l2, R2.e, R2.r2_7_2_2_3, R2.a14);

/** NOTE Betriebsmittel Induktivitaet SpuleohneKern MehrlagigeSpule Beispiel 18 */
erouter(router, R2.p2, R2.l2, R2.e, R2.r2_7_2_2_3, R2.b18);

/** !SECTION Betriebsmittel Induktivitaet Spule SpulenohneKern MehrlagigeSpule  */

/** SECTION Betriebsmittel Induktivitaet Spule SpulenohneKern Ringspule  */
routerGet(router, R2.r2_7_2_2_4, R2.p2, R2.l2);
/** !SECTION Betriebsmittel Induktivitaet Spule SpulenohneKern Ringspule  */

/** SECTION Betriebsmittel Induktivitaet Spule SpulenohneKern Zylinderspule */
routerGet(router, R2.r2_7_2_2_5, R2.p2, R2.l2);
/** !SECTION Betriebsmittel Induktivitaet Spule SpulenohneKern Zylinderspule */

/** !SECTION Betriebsmittel Induktivitaet Spule Spulen ohne Kern */

/** SECTION Betriebsmittel Induktivitaeten Variometer */
routerGet(router, R2.r2_7_3, R2.p2, R2.l2);
/** !SECTION Betriebsmittel Induktivitaeten Variometer */

/** !SECTION Betriebsmittel Induktivitaet Spule */

/** !SECTION Betriebsmittel Induktivitaet */

/** SECTION Betriebsmittel Verschiedenes */
routerGet(router, R2.r2_24, R2.p2, R2.l2);

/**SECTION Betriebsmittel Verschiedenes Beleuchtung */
routerGet(router, R2.r2_24_1, R2.p2, R2.l2);

/** SECTION Betriebsmittel Verschiedenes Beleuchtung Lampe */
routerGet(router, R2.r2_24_1_1, R2.p2, R2.l2);

/** SECTION Betriebsmittel Verschiedenes Beleuchtung Lampe Gluehlampe */
routerGet(router, R2.r2_24_1_1_1, R2.p2, R2.l2);

/** NOTE Betriebsmittel Verschiedenes Beleuchtung Lampe Gluehlampe Beispiel17 */
erouter(router, R2.p2, R2.l2, R2.e, R2.r2_24_1_1_1, R2.b17);

/** !SECTION Betriebsmittel Verschiedenes Beleuchtung Lampe Gluehlampe */

/** !SECTION Betriebsmittel Verschiedenes Beleuchtung Lampe */

/**!SECTION Betriebsmittel Verschiedenes Beleuchtung */

/** SECTION Betriebsmittel Verschiedenes Elektrode */
/** !SECTION Betriebsmittel Verschiedenes Elektrode */

/** !SECTION Betriebsmittel Verschiedenes */

module.exports = router;
