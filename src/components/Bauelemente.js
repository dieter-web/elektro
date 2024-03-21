const { Components } = require( "./components.js" );
/** SECTION Bauelemente */
class Bauelemente extends Components{}

/** SECTION Achsen  */
class Achsen extends Bauelemente{}

/** !SECTION  */
/** SECTION Ausleger */
class Ausleger extends Bauelemente{}

/** !SECTION  */
/** SECTION Balken */
class Balken extends Bauelemente{}

/** !SECTION  */
/** SECTION Baukonstruktionen */
class Baukonstruktionen extends Bauelemente{}

/** !SECTION  */
/** SECTION Behaelter */
class Behaelter extends Bauelemente{}

/** !SECTION  */
/** SECTION  Boecke*/
class Boecke extends Bauelemente{}

/** !SECTION  */
/** SECTION Bolzen */
class Bolzen extends Bauelemente{}

/** !SECTION  */
/** SECTION  Buchsen*/
class Buchsen extends Bauelemente{}

/** !SECTION  */
/** SECTION Daecher */
class Daecher extends Bauelemente{}

/** !SECTION  */
/** SECTION Decken */
class Decken extends Bauelemente{}

/** !SECTION  */
/** SECTION Drahtseiltriebe */
class Drahtseiltriebe extends Bauelemente{}

/** !SECTION  */
/** SECTION  Exzenter*/
class Exzenter extends Bauelemente{}

/** !SECTION  */
/** SECTION Federn */
class Federn extends Bauelemente{}

/** !SECTION  */
/** SECTION Fenster */
class Fenster extends Bauelemente{}

/** !SECTION  */
/** SECTION Flansche */
class Flansche extends Bauelemente{}

/** !SECTION  */
/** SECTION Gefaese */
class Gefaese extends Bauelemente{}

/** !SECTION  */
/** SECTION Gelenke */
class Gelenke extends Bauelemente{}

/** !SECTION  */
/** SECTION Geradfuehrungen */
class Geradfuehrungen extends Bauelemente{}

/** !SECTION  */
/** SECTION Getriebe */
class Getriebe extends Bauelemente{}

/** !SECTION  */
/** SECTION  Gewinde*/
class Gewinde extends Bauelemente{}

/** !SECTION  */
/** SECTION Haehne */
class Haehne extends Bauelemente{}

/** !SECTION  */
/** SECTION Haltestifte */
class Haltestifte extends Bauelemente{}

/** !SECTION  */
/** SECTION Hanfseiltriebe */
class Hanfseiltriebe extends Bauelemente{}

/** !SECTION  */
/** SECTION Hebel */
class Hebel extends Bauelemente{}

/** !SECTION  */
/** SECTION  Kegelraeder*/
class Kegelraeder extends Bauelemente{}

/** !SECTION  */
/** SECTION Keile */
class Keile extends Bauelemente{}

/** !SECTION  */
/** SECTION Kolben */
class Kolben extends Bauelemente{}

/** !SECTION  */
/** SECTION Kolbenbolzen */
class Kolbenbolzen extends Bauelemente{}

/** !SECTION  */
/** SECTION Kolbenringe */
class Kolbenringe extends Bauelemente{}

/** !SECTION  */
/** SECTION Kolbenstange */
class Kolbenstange extends Bauelemente{}

/** !SECTION  */
/** SECTION Konus */
class Konus extends Bauelemente{}

/** !SECTION  */
/** SECTION Kreuzkoepfe */
class Kreuzkoepfe extends Bauelemente{}

/** !SECTION  */
/** SECTION Kreuzkopfbolzen */
class Kreuzkopfbolzen extends Bauelemente{}

/** !SECTION  */
/** SECTION Kupplungen */
class Kupplungen extends Bauelemente{}

/** !SECTION  */
/** SECTION Kurbel */
class Kurbel extends Bauelemente{}

/** !SECTION  */
/** SECTION Kurbeltrieb */
class Kurbeltrieb extends Bauelemente{}

/** !SECTION  */
/** SECTION Kurbelwellen */
class Kurbelwellen extends Bauelemente{}

/** !SECTION  */
/** SECTION Kurbelzapfen */
class Kurbelzapfen extends Bauelemente{}

/** !SECTION  */
/** SECTION Lager */
class Lager extends Bauelemente{}

/** !SECTION  */
/** SECTION  Maschinenfundamente*/
class Maschinenfundamente extends Bauelemente{}

/** !SECTION  */
/** SECTION Mauern */
class Mauern extends Bauelemente{}

/** !SECTION  */
/** SECTION Muttern */
class Muttern extends Bauelemente{}

/** !SECTION  */
/** SECTION Naben */
class Naben extends Bauelemente{}

/** !SECTION  */
/** SECTION Naegel */
class Naegel extends Bauelemente{}

/** !SECTION  */
/** SECTION Niete */
class Niete extends Bauelemente{}

/** !SECTION  */
/** SECTION Passungen */
class Passungen extends Bauelemente{}

/** !SECTION  */
/** SECTION Platte */
class Platte extends Bauelemente
{
  constructor ( Eigenschaften )
  {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** !SECTION  */
/** SECTION Riementriebe */
class Riementriebe extends Bauelemente{}

/** !SECTION  */
/** SECTION Ringe */
class Ringe extends Bauelemente{}

/** !SECTION  */
/** SECTION Rohrleitungen */

const DN = [
  10,
  15,
  20,
  25,
  32,
  40,
  50,
  60,
  65,
  80,
  100,
  125,
  150,
  200,
  250,
  300,
  350,
  400,
  450,
  500,
  600,
  700,
  800,
  900,
  1000,
  1100,
  1200,
  1400,
  1500,
  1600,
  1800,
  2000,
  2200,
  2400,
  2600,
  2800,
  3000,
  3200,
  3400,
  3600,
  3800,
  4000,
];

const PN = [ 2.5, 6, 10, 16, 25, 40, 63, 100 ];

class Rohrleitungen extends Bauelemente
{
  constructor ()
  {
    super();
  }
  //TODO: schreiben!
  getDN () { }
  getPN () { }
}
/** SECTION Rohrleitung */
class Rohrleitung extends Rohrleitungen{}

/** !SECTION  */
/** SECTION Stahlrohre */
class Stahlrohre extends Rohrleitungen{}

/** !SECTION  */
/** SECTION Praezisionsstahlrohre */
class Praezisionsstahlrohre extends Stahlrohre{}

/** !SECTION  */
/** SECTION NahtloseStahlrohre */
class NahtloseStahlrohre extends Stahlrohre{}

/** !SECTION  */
/** SECTION Gewinderohre */
class Gewinderohre extends Stahlrohre{}

/** !SECTION  */
/** SECTION GeschweissteStahlrohre */
class GeschweissteStahlrohre extends Stahlrohre{}

/** !SECTION  */
/** SECTION Kupferrohre */
class Kupferrohre extends Rohrleitungen{}

/** !SECTION  */
/** SECTION Kunststoffrohre */
class Kunststoffrohre extends Rohrleitungen{}

/** !SECTION  */
/** SECTION Gussrohre */
class Gussrohre extends Rohrleitungen{}

/** !SECTION  */
/** SECTION Faserzementrohre */
class Faserzementrohre extends Rohrleitungen{}

/** !SECTION  */
/** SECTION Bleirohre */
class Bleirohre extends Rohrleitungen
{
  constructor ( Eigenschaften )
  {
    super();
    this.Eigenschaften = Eigenschaften;
  }
}
/** !SECTION  */
/** SECTION Betonrohre */
class Betonrohre extends Rohrleitungen{}

/** !SECTION  */
/** SECTION Aluminiumrohre */
class Aluminiumrohre extends Rohrleitungen{}

exports.NahtloseStahlrohre = NahtloseStahlrohre;
exports.Stahlrohre = Stahlrohre;
exports.Praezisionsstahlrohre = Praezisionsstahlrohre;
exports.Gewinderohre = Gewinderohre;
exports.GeschweissteStahlrohre = GeschweissteStahlrohre;
exports.Kupferrohre = Kupferrohre;
exports.Kunststoffrohre = Kunststoffrohre;
exports.Gussrohre = Gussrohre;
exports.Faserzementrohre = Faserzementrohre;
exports.Bleirohre = Bleirohre;
exports.Betonrohre = Betonrohre;
exports.Aluminiumrohre = Aluminiumrohre;
exports.Rohrleitung = Rohrleitung;
exports.Rohrleitungen = Rohrleitungen;
/** !SECTION  */
/** !SECTION Rohrleitungen */
/** SECTION Saeulen */
class Saeulen extends Bauelemente
{
  constructor ()
  {
    super();
  }
}
/** !SECTION  */
/** SECTION Scheiben */
class Scheiben extends Bauelemente
{
  constructor ()
  {
    super();
  }
}
/** SECTION Wellenenden */
class Wellenenden extends Scheiben
{
  constructor ()
  {
    super();
  }
}
/** !SECTION  */
/** SECTION Stuetzscheiben */
class Stuetzscheiben extends Scheiben
{
  constructor ()
  {
    super();
  }
}
/** !SECTION  */
/** SECTION Passscheiben */
class Passscheiben extends Scheiben
{
  constructor ()
  {
    super();
  }
}

exports.Wellenenden = Wellenenden;
exports.Passscheiben = Passscheiben;
exports.Stuetzscheiben = Stuetzscheiben;
exports.Scheiben = Scheiben;
/** !SECTION  */
/** !SECTION Scheiben */
/** SECTION Schrauben */
class Schrauben extends Bauelemente
{
  constructor ()
  {
    super();
  }
}
/** !SECTION  */
/** SECTION Schraubenraeder */
class Schraubenraeder extends Bauelemente
{
  constructor ()
  {
    super();
  }
}
/** !SECTION  */
/** SECTION Schubstangen */
class Schubstangen extends Bauelemente
{
  constructor ()
  {
    super();
  }
}
/** !SECTION  */
/** SECTION Senkungen */
class Senkungen extends Bauelemente
{
  constructor ()
  {
    super();
  }
}
/** !SECTION  */
/** SECTION Sicherungsbleche */
class Sicherungsbleche extends Bauelemente
{
  constructor ()
  {
    super();
  }
}
/** !SECTION  */
/** SECTION Sicherungsringe */
class Sicherungsringe extends Bauelemente
{
  constructor ()
  {
    super();
  }
}
/** !SECTION  */
/** SECTION Splinte */
class Splinte extends Bauelemente
{
  constructor ()
  {
    super();
  }
}
/** !SECTION  */
/** SECTION Stahlblech */
class Stahlblech extends Bauelemente
{
  constructor ()
  {
    super();
  }
}
/** !SECTION  */
/** SECTION Stahldraht */
class Stahldraht extends Bauelemente
{
  constructor ()
  {
    super();
  }
}
/** !SECTION  */
/** SECTION Stahlprofile */
class Stahlprofile extends Bauelemente
{
  constructor ()
  {
    super();
  }
}
/** !SECTION  */
/** SECTION Stifte */
class Stifte extends Bauelemente
{
  constructor ()
  {
    super();
  }
}
/** SECTION Zylinderstifte */
class Zylinderstifte extends Stifte
{
  constructor ()
  {
    super();
  }
}
/** !SECTION  */
/** SECTION Spannstifte */
class Spannstifte extends Stifte
{
  constructor ()
  {
    super();
  }
}
/** !SECTION  */
/** SECTION Kerbstifte */
class Kerbstifte extends Stifte
{
  constructor ()
  {
    super();
  }
}
/** !SECTION  */
/** SECTION Kegelstifte */
class Kegelstifte extends Stifte
{
  constructor ()
  {
    super();
  }
}

exports.Stifte = Stifte;
exports.Zylinderstifte = Zylinderstifte;
exports.Spannstifte = Spannstifte;
exports.Kerbstifte = Kerbstifte;
exports.Kegelstifte = Kegelstifte;
/** !SECTION  */
/** !SECTION Stifte */

/** SECTION Stopfbuechsen */
class Stopfbuechsen extends Bauelemente
{
  constructor ()
  {
    super();
  }
}
/** !SECTION  */
/** SECTION Traeger */
class Traeger extends Bauelemente
{
  constructor ()
  {
    super();
  }
}
/** !SECTION  */
/** SECTION Transmissionen */
class Transmissionen extends Bauelemente
{
  constructor ()
  {
    super();
  }
}
/** !SECTION  */
/** SECTION Tueren */
class Tueren extends Bauelemente
{
  constructor ()
  {
    super();
  }
}
/** !SECTION  */
/** SECTION Ventile */
class Ventile extends Bauelemente
{
  constructor ()
  {
    super();
  }
}
/** !SECTION  */
/** SECTION Wandarm */
class Wandarm extends Bauelemente
{
  constructor ()
  {
    super();
  }
}
/** !SECTION  */
/** SECTION Wellen */
class Wellen extends Bauelemente
{
  constructor ()
  {
    super();
  }
}
/** SECTION Keilwellen */
class Keilwellen extends Wellen
{
  constructor ()
  {
    super();
  }
}

exports.Wellen = Wellen;
exports.Keilwellen = Keilwellen;
/** !SECTION  */
/** !SECTION Wellen  */
/** SECTION Zahnraeder */
class Zahnraeder extends Bauelemente
{
  constructor ()
  {
    super();
  }
}
/** !SECTION  */
/** SECTION Zapfen */
class Zapfen extends Bauelemente
{
  constructor ()
  {
    super();
  }
}
/** !SECTION  */
/** SECTION Zylinder */
class Zylinder extends Bauelemente
{
  constructor ()
  {
    super();
  }
}
/** !SECTION  */
/** !SECTION Bauelemente */
exports.Bauelemente = Bauelemente;
exports.Achsen = Achsen;
exports.Ausleger = Ausleger;
exports.Balken = Balken;
exports.Baukonstruktionen = Baukonstruktionen;
exports.Behaelter = Behaelter;
exports.Boecke = Boecke;
exports.Bolzen = Bolzen;
exports.Buchsen = Buchsen;
exports.Daecher = Daecher;
exports.Decken = Decken;
exports.Drahtseiltriebe = Drahtseiltriebe;
exports.Exzenter = Exzenter;
exports.Federn = Federn;
exports.Fenster = Fenster;
exports.Flansche = Flansche;
exports.Gefaese = Gefaese;
exports.Gelenke = Gelenke;
exports.Geradfuehrungen = Geradfuehrungen;
exports.Getriebe = Getriebe;
exports.Gewinde = Gewinde;
exports.Haehne = Haehne;
exports.Haltestifte = Haltestifte;
exports.Hanfseiltriebe = Hanfseiltriebe;
exports.Hebel = Hebel;
exports.Kegelraeder = Kegelraeder;
exports.Keile = Keile;
exports.Kolben = Kolben;
exports.Kolbenbolzen = Kolbenbolzen;
exports.Kolbenringe = Kolbenringe;
exports.Kolbenstange = Kolbenstange;
exports.Konus = Konus;
exports.Kreuzkoepfe = Kreuzkoepfe;
exports.Kreuzkopfbolzen = Kreuzkopfbolzen;
exports.Kupplungen = Kupplungen;
exports.Kurbel = Kurbel;
exports.Kurbeltrieb = Kurbeltrieb;
exports.Kurbelwellen = Kurbelwellen;
exports.Kurbelzapfen = Kurbelzapfen;
exports.Lager = Lager;
exports.Maschinenfundamente = Maschinenfundamente;
exports.Mauern = Mauern;
exports.Muttern = Muttern;
exports.Naben = Naben;
exports.Naegel = Naegel;
exports.Niete = Niete;
exports.Passungen = Passungen;
exports.Platte = Platte;
exports.Riementriebe = Riementriebe;
exports.Ringe = Ringe;
exports.Saeulen = Saeulen;
exports.Schrauben = Schrauben;
exports.Schraubenraeder = Schraubenraeder;
exports.Schubstangen = Schubstangen;
exports.Senkungen = Senkungen;
exports.Sicherungsbleche = Sicherungsbleche;
exports.Sicherungsringe = Sicherungsringe;
exports.Splinte = Splinte;
exports.Stahlblech = Stahlblech;
exports.Stahldraht = Stahldraht;
exports.Stahlprofile = Stahlprofile;
exports.Stopfbuechsen = Stopfbuechsen;
exports.Traeger = Traeger;
exports.Transmissionen = Transmissionen;
exports.Tueren = Tueren;
exports.Ventile = Ventile;
exports.Wandarm = Wandarm;
exports.Zahnraeder = Zahnraeder;
exports.Zapfen = Zapfen;
exports.Zylinder = Zylinder;
