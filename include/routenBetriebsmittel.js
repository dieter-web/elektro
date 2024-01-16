require("use-strict");
const path = require("path");

// Betriebsmittel
module.exports = {
  e: path.resolve(`src/example`),
  p2: `pages/Betriebsmittel`,
  l2: `layouts/Betriebsmittel`,

  r2: `/Betriebsmittel`,

  r2_1: `/Abschluesse`,

  r2_2: `/Baugruppen`,
  r2_2_1: `/Baugruppen/Zweipole`,
  r2_2_1_1: `/Baugruppen/Zweipole/passiverZweipol`,
  r2_2_1_1_1: `/Baugruppen/Zweipole/passiverZweipol/gemischteSchaltung`,
  r2_2_1_1_2: `/Baugruppen/Zweipole/passiverZweipol/Kettenschaltung`,
  r2_2_1_1_3: `/Baugruppen/Zweipole/passiverZweipol/Parallelschaltung`,
  r2_2_1_1_4: `/Baugruppen/Zweipole/passiverZweipol/Reihenschaltung`,

  r2_3: `/Filter`,

  r2_4: `/Generatoren`,

  r2_5: `/GeraeteMitElektrischenAntrieb`,

  r2_6: `/Halbleiter`,

  r2_7: `/Induktivitaet`,
  r2_7_1: `/Induktivitaet/MagnetischeBauelementeDigitalerEinrichtungen`,
  r2_7_2: `/Induktivitaet/Spule`,
  r2_7_2_1: `/Induktivitaet/Spule/SpuleMitKern`,
  r2_7_2_1_1: `/Induktivitaet/Spule/SpuleMitKern/Magnetspule`,
  r2_7_2_2: `/Induktivitaet/Spule/SpuleOhneKern`,
  r2_7_2_2_1: `/Induktivitaet/Spule/SpuleOhneKern/AbgeschirmteSpule`,
  r2_7_2_2_2: `/Induktivitaet/Spule/SpuleOhneKern/EinlagigeSpule`,
  r2_7_2_2_3: `/Induktivitaet/Spule/SpuleOhneKern/MehrlagigeSpule`,
  r2_7_2_2_4: `/Induktivitaet/Spule/SpuleOhneKern/Ringspule`,
  r2_7_2_2_5: `/Induktivitaet/Spule/SpuleOhneKern/Zylinderspule`,
  r2_7_2_3: `/Induktivitaet/Variometer`,

  r2_8: `/Kondensatoren`,

  r2_9: `/Melder`,

  r2_10: `/Messgeraete`,
  r2_10_1: `/Messgeraete/Energiemesser`,
  r2_10_2: `/Messgeraete/Frequenzmesser`,
  r2_10_3: `/Messgeraete/Impedanzmesser`,
  r2_10_4: `/Messgeraete/Leistungsmesser`,
  r2_10_5: `/Messgeraete/MagnetischeGroessemesser`,
  r2_10_6: `/Messgeraete/Phasenwinkelmesser`,
  r2_10_7: `/Messgeraete/Spannungsmesser`,
  r2_10_8: `/Messgeraete/Strommesser`,
  r2_10_9: `/Messgeraete/Zeitmesser`,

  r2_11: `/Motoren`,
  r2_12: `/Pruefgeraete`,
  r2_13: `/Regler`,
  r2_14: `/Relais`,
  r2_15: `/Schalter`,
  r2_16: `/Schuetze`,
  r2_17: `/Schutzeinrichtungen`,
  r2_18: `/Sensoren`,
  r2_19: `/Steckvorrichtungen`,

  r2_20: `/Transformator`,
  r2_20_1: `/Transformator/Audiotransformator`,
  r2_20_2: `/Transformator/Dreiphasentransformator`,
  r2_20_3: `/Transformator/Einphasentransformator`,
  r2_20_4: `/Transformator/HFTransformator`,
  r2_20_5: `/Transformator/Impulstransformator`,
  r2_20_6: `/Transformator/Messwandler`,
  r2_20_6_1: `/Transformator/Messwandler/Stromwandler`,
  r2_20_6_2: `/Transformator/Messwandler/Spannungswandler`,
  r2_20_7: `/Transformator/Transaktor`,
  r2_20_6: `/Transformator/TransformatorMitMittenabgriff`,

  r2_21: `/Uebertragungswege`,
  r2_21_1: `/Uebertragungswege/Antennen`,

  r2_21_2: `/Uebertragungswege/Draehte`,
  r2_21_2_1: `/Uebertragungswege/Draehte/Draht`,
  r2_21_2_1_1: `/Uebertragungswege/Draehte/Draht/Runddraht`,
  r2_21_2_1_1_1: `/Uebertragungswege/Draehte/Draht/Runddraht/Blank`,
  r2_21_2_1_1_1_1: `/Uebertragungswege/Draehte/Draht/Runddraht/Blank/Kupferdraht`,
  r2_21_2_1_1_1_2: `/Uebertragungswege/Draehte/Draht/Runddraht/Blank/Legierungsdraht`,
  r2_21_2_1_1_1_3: `/Uebertragungswege/Draehte/Draht/Runddraht/Blank/Aluminiumdraht`,

  r2_21_2_1_1_2: `/Uebertragungswege/Draehte/Draht/Runddraht/Isoliert`,
  r2_21_2_2: `/Uebertragungswege/Draehte/Wickeldraht`,

  r2_21_3: `/Uebertragungswege/Kabel`,

  r2_21_3_1: `/Uebertragungswege/Kabel/Fernmeldekabel`,
  r2_21_3_1_1: `/Uebertragungswege/Kabel/Fernmeldekabel/Niederfrequenzkabel`,
  r2_21_3_1_2: `/Uebertragungswege/Kabel/Fernmeldekabel/Trägerfrequenzkabel`,
  r2_21_3_1_3: `/Uebertragungswege/Kabel/Fernmeldekabel/Trägerfrequenzkabel`,
  r2_21_3_1_4: `/Uebertragungswege/Kabel/Fernmeldekabel/BesondererZweck`,

  r2_21_3_2: `/Uebertragungswege/Kabel/Hochfrequenzkabel`,

  r2_21_3_3: `/Uebertragungswege/Kabel/Starkstromkabel`,

  r2_21_4: `/Uebertragungswege/Leitung`,

  r2_21_4_1: `/Uebertragungswege/Leitung/IsolierteLeitung`,

  r2_21_4_1_1: `/Uebertragungswege/Leitung/IsolierteLeitung/Fernmeldeleitung`,
  r2_21_4_1_1_1: `/Uebertragungswege/Leitung/IsolierteLeitung/Fernmeldeleitung/Eindrahtleitung`,
  r2_21_4_1_1_2: `/Uebertragungswege/Leitung/IsolierteLeitung/Fernmeldeleitung/Lahnlitzeleitung`,
  r2_21_4_1_1_3: `/Uebertragungswege/Leitung/IsolierteLeitung/Fernmeldeleitung/Litzeleitung`,

  r2_21_4_1_1_4: `/Uebertragungswege/Leitung/IsolierteLeitung/Fernmeldeleitung/FesteLegung`,
  r2_21_4_1_1_4_1: `/Uebertragungswege/Leitung/IsolierteLeitung/Fernmeldeleitung/FesteLegung/Schaltdraehte`,
  r2_21_4_1_1_4_2: `/Uebertragungswege/Leitung/IsolierteLeitung/Fernmeldeleitung/FesteLegung/Schaltleitung`,
  r2_21_4_1_1_4_3: `/Uebertragungswege/Leitung/IsolierteLeitung/Fernmeldeleitung/FesteLegung/Mantelleitung`,
  r2_21_4_1_1_4_4: `/Uebertragungswege/Leitung/IsolierteLeitung/Fernmeldeleitung/FesteLegung/Schaltlitzen`,

  r2_21_4_1_1_5: `/Uebertragungswege/Leitung/IsolierteLeitung/Fernmeldeleitung/OrtsveraenderlicheLegung`,
  r2_21_4_1_1_5_1: `/Uebertragungswege/Leitung/IsolierteLeitung/Fernmeldeleitung/OrtsveraenderlicheLegung/Schlauchleitungen`,
  r2_21_4_1_1_5_2: `/Uebertragungswege/Leitung/IsolierteLeitung/Fernmeldeleitung/OrtsveraenderlicheLegung/Anschlussleitungen`,
  r2_21_4_1_1_5_3: `/Uebertragungswege/Leitung/IsolierteLeitung/Fernmeldeleitung/OrtsveraenderlicheLegung/Apparateleitungen`,

  r2_21_4_1_1_6: `/Uebertragungswege/Leitung/IsolierteLeitung/Fernmeldeleitung/BesondererZweck`,

  r2_21_4_1_2: `/Uebertragungswege/Leitung/IsolierteLeitung/Starkstromleitung`,

  r2_21_4_1_2_1: `/Uebertragungswege/Leitung/IsolierteLeitung/Starkstromleitung/BesondereZweck`,

  r2_21_4_1_2_2: `/Uebertragungswege/Leitung/IsolierteLeitung/Starkstromleitung/FesteLegung`,
  r2_21_4_1_2_3: `/Uebertragungswege/Leitung/IsolierteLeitung/Starkstromleitung/Konfektioniert`,
  r2_21_4_1_2_4: `/Uebertragungswege/Leitung/IsolierteLeitung/Starkstromleitung/OrtsveraenderlicheLegung`,

  r2_21_4_2: `/Uebertragungswege/Leitung/BlankeLeitung`,
  r2_21_4_2_1: `/Uebertragungswege/Leitung/BlankeLeitung/Freileitung`,
  r2_21_4_2_2: `/Uebertragungswege/Leitung/BlankeLeitung/Hochfrequenzleitung`,
  r2_21_4_2_3: `/Uebertragungswege/Leitung/BlankeLeitung/Erder`,
  r2_21_4_2_4: `/Uebertragungswege/Leitung/BlankeLeitung/Erdungssammelleitung`,
  r2_21_4_2_5: `/Uebertragungswege/Leitung/BlankeLeitung/Fahrleitung`,
  r2_21_4_2_6: `/Uebertragungswege/Leitung/BlankeLeitung/Freileitung`,
  r2_21_4_2_7: `/Uebertragungswege/Leitung/BlankeLeitung/OffenGelegteLeitung`,
  r2_21_4_2_8: `/Uebertragungswege/Leitung/BlankeLeitung/Sammelschiene`,
  r2_21_4_2_9: `/Uebertragungswege/Leitung/BlankeLeitung/Schiene`,
  r2_21_4_2_10: `/Uebertragungswege/Leitung/BlankeLeitung/Stromschiene`,
  r2_21_4_2_11: `/Uebertragungswege/Leitung/BlankeLeitung/Schleifenleitung`,

  r2_22: `/Umformer`,

  r2_23: `/Umsetzer`,

  r2_24: `/Verschiedenes`,
  r2_24_1: `/Verschiedenes/Beleuchtung`,
  r2_24_1_1: `/Verschiedenes/Beleuchtung/Lampe`,
  r2_24_1_1_1: `/Verschiedenes/Beleuchtung/Lampe/Gluehlampe`,
  r2_24_2: `Elektrode`,

  r2_25: `/Verstaerker`,

  r2_26: `/Waehler`,

  r2_27: `/Widerstaende`,
  r2_27_1: `/Widerstaende/Widerstand`,
  r2_27_2: `/Widerstaende/ParameterabhaengigeHalbleiterwiderstaende`,
  r2_27_2_1: `/Widerstaende/ParameterabhaengigeHalbleiterwiderstaende/ElektrischeParameter`,
  r2_27_2_1_1: `/Widerstaende/ParameterabhaengigeHalbleiterwiderstaende/ElektrischeParameter/Spannung`,
  r2_27_2_1_1_1: `/Widerstaende/ParameterabhaengigeHalbleiterwiderstaende/ElektrischeParameter/Spannung/Varistoren`,

  r2_27_2_2: `/Widerstaende/ParameterabhaengigeHalbleiterwiderstaende/NichtelektrischeParameter`,
  r2_27_2_2_1: `/Widerstaende/ParameterabhaengigeHalbleiterwiderstaende/NichtelektrischeParameter/MagnetischesFeld`,
  r2_27_2_2_1_1: `/Widerstaende/ParameterabhaengigeHalbleiterwiderstaende/NichtelektrischeParameter/MagnetischesFeld/Feldplatte`,
  r2_27_2_2_2: `/Widerstaende/ParameterabhaengigeHalbleiterwiderstaende/NichtelektrischeParameter/Strahlung`,
  r2_27_2_2_2_1: `/Widerstaende/ParameterabhaengigeHalbleiterwiderstaende/NichtelektrischeParameter/Strahlung/Fotowiderstand`,
  r2_27_2_2_3: `/Widerstaende/ParameterabhaengigeHalbleiterwiderstaende/NichtelektrischeParameter/Temperatur`,
  r2_27_2_2_3_1: `/Widerstaende/ParameterabhaengigeHalbleiterwiderstaende/NichtelektrischeParameter/Temperatur/Thermistor`,
  r2_27_2_2_3_1_1: `/Widerstaende/ParameterabhaengigeHalbleiterwiderstaende/NichtelektrischeParameter/Temperatur/Thermistor/Heissleiter`,
  r2_27_2_2_3_1_2: `/Widerstaende/ParameterabhaengigeHalbleiterwiderstaende/NichtelektrischeParameter/Temperatur/Thermistor/Kaltleiter`,
  r2_27_2_2_3_1_2_1: `/Widerstaende/ParameterabhaengigeHalbleiterwiderstaende/NichtelektrischeParameter/Temperatur/Kaltleiter/KeramischeKaltleiter`,

  // r2_27_4: `/Widerstaende/Thermistor`,
  // r2_27_4_1: `/Widerstaende/Thermistor/Heissleiter`,
  // r2_27_4_2: `/Widerstaende/Thermistor/Kaltleiter`,
  // r2_27_5: `/Widerstaende/Varistor`,

  a11: `/Aufgabe11`,
  a13: `/Aufgabe13`,
  a14: `/Aufgabe14`,
  a15: `/Aufgabe15`,
  a16: `/Aufgabe16`,
  b11: `/Beispiel11`,
  b12: `/Beispiel12`,
  b13: `/Beispiel13`,
  b14: `/Beispiel14`,
  b15: `/Beispiel15`,
  b16: `/Beispiel16`,
  b17: `/Beispiel17`,
  b18: `/Beispiel18`,
  u10: `/Uebung10`,
  u11: `/Uebung11`,
  u12: `/Uebung12`,
  u13: `/Uebung13`,
  u14: `/Uebung14`,
  u15: `/Uebung15`,
  u16: `/Uebung16`,
  u17: `/Uebung17`,
  u18: `/Uebung18`,
  u19: `/Uebung19`,
  u110: `/Uebung110`,
  u111: `/Uebung111`,
};
