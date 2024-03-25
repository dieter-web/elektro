import { vComponents } from "./components.mjs";

class vBauelemente extends vComponents{}

/** SECTION Achsen  */
class vAchsen extends vBauelemente{}

/** !SECTION  */
/** SECTION Ausleger */
class vAusleger extends vBauelemente{}

/** !SECTION  */
/** SECTION Balken */
class vBalken extends vBauelemente{}

/** !SECTION  */
/** SECTION Baukonstruktionen */
class vBaukonstruktionen extends vBauelemente{}

/** !SECTION  */
/** SECTION Behaelter */
class vBehaelter extends vBauelemente{}

/** !SECTION  */
/** SECTION  Boecke*/
class vBoecke extends vBauelemente{}

/** !SECTION  */
/** SECTION Bolzen */
class vBolzen extends vBauelemente{}

/** !SECTION  */
/** SECTION  Buchsen*/
class vBuchsen extends vBauelemente{}

/** !SECTION  */
/** SECTION Daecher */
class vDaecher extends vBauelemente{}

/** !SECTION  */
/** SECTION Decken */
class vDecken extends vBauelemente{}

/** !SECTION  */
/** SECTION Drahtseiltriebe */
class vDrahtseiltriebe extends vBauelemente{}

/** !SECTION  */
/** SECTION  Exzenter*/
class vExzenter extends vBauelemente{}

/** !SECTION  */
/** SECTION Federn */
class vFedern extends vBauelemente{}

/** !SECTION  */
/** SECTION Fenster */
class vFenster extends vBauelemente{}

/** !SECTION  */
/** SECTION Flansche */
class vFlansche extends vBauelemente{}

/** !SECTION  */
/** SECTION Gefaese */
class vGefaese extends vBauelemente{}

/** !SECTION  */
/** SECTION Gelenke */
class vGelenke extends vBauelemente{}
/** !SECTION  */
/** SECTION Geradfuehrungen */
class vGeradfuehrungen extends vBauelemente{}

/** !SECTION  */
/** SECTION Getriebe */
class vGetriebe extends vBauelemente{}

/** !SECTION  */
/** SECTION  Gewinde*/
class vGewinde extends vBauelemente{}

/** !SECTION  */
/** SECTION Haehne */
class vHaehne extends vBauelemente{}

/** !SECTION  */
/** SECTION Haltestifte */
class vHaltestifte extends vBauelemente{}

/** !SECTION  */
/** SECTION Hanfseiltriebe */
class vHanfseiltriebe extends vBauelemente{}

/** !SECTION  */
/** SECTION Hebel */
class vHebel extends vBauelemente{}

/** !SECTION  */
/** SECTION  Kegelraeder*/
class vKegelraeder extends vBauelemente{}

/** !SECTION  */
/** SECTION Keile */
class vKeile extends vBauelemente{}

/** !SECTION  */
/** SECTION Kolben */
class vKolben extends vBauelemente{}

/** !SECTION  */
/** SECTION Kolbenbolzen */
class vKolbenbolzen extends vBauelemente{}

/** !SECTION  */
/** SECTION Kolbenringe */
class vKolbenringe extends vBauelemente{}

/** !SECTION  */
/** SECTION Kolbenstange */
class vKolbenstange extends vBauelemente{}

/** !SECTION  */
/** SECTION Konus */
class vKonus extends vBauelemente{}

/** !SECTION  */
/** SECTION Kreuzkoepfe */
class vKreuzkoepfe extends vBauelemente{}

/** !SECTION  */
/** SECTION Kreuzkopfbolzen */
class vKreuzkopfbolzen extends vBauelemente{}

/** !SECTION  */
/** SECTION Kupplungen */
class vKupplungen extends vBauelemente{}

/** !SECTION  */
/** SECTION Kurbel */
class vKurbel extends vBauelemente{}

/** !SECTION  */
/** SECTION Kurbeltrieb */
class vKurbeltrieb extends vBauelemente{}

/** !SECTION  */
/** SECTION Kurbelwellen */
class vKurbelwellen extends vBauelemente{}

/** !SECTION  */
/** SECTION Kurbelzapfen */
class vKurbelzapfen extends vBauelemente{}

/** !SECTION  */
/** SECTION Lager */
class vLager extends vBauelemente{}

/** !SECTION  */
/** SECTION  Maschinenfundamente*/
class vMaschinenfundamente extends vBauelemente{}

/** !SECTION  */
/** SECTION Mauern */
class vMauern extends vBauelemente{}

/** !SECTION  */
/** SECTION Muttern */
class vMuttern extends vBauelemente{}

/** !SECTION  */
/** SECTION Naben */
class vNaben extends vBauelemente{}

/** !SECTION  */
/** SECTION Naegel */
class vNaegel extends vBauelemente{}

/** !SECTION  */
/** SECTION Niete */
class vNiete extends vBauelemente{}

/** !SECTION  */
/** SECTION Passungen */
class vPassungen extends vBauelemente{}

/** !SECTION  */
/** SECTION Platte */
class vPlatte extends vBauelemente
{
  constructor ( data, point )
  {
    super( data, point );
  }
  fshape ()
  {
    this.Symbol.select( "#shape" )
      .append( "rect" )
      .attr( "x", 0 )
      .attr( "y", 0 )
      .attr( "width", 3 )
      .attr( "height", 365 )
  }
}
/** !SECTION  */
/** SECTION Riementriebe */
class vRiementriebe extends vBauelemente{}

/** !SECTION  */
/** SECTION Ringe */
class vRinge extends vBauelemente{}

/** !SECTION  */
/** SECTION Rohrleitungen */

class vRohrleitungen extends vBauelemente{}

/** SECTION Rohrleitung */
class vRohrleitung extends vRohrleitungen
{
  constructor ( data, point )
  {
    super( data, point );
    this.shape = "M 0 0 L 100 0";
  }
  fshape ()
  {
    this.Symbol.select( "#shape" )
      .append( "path" )
      .attr( "d", this.shape )
  }
}

/** !SECTION  */
/** SECTION Stahlrohre */
class vStahlrohre extends vRohrleitung{}

/** !SECTION  */
/** SECTION Praezisionsstahlrohre */
class vPraezisionsstahlrohre extends vStahlrohre{}

/** !SECTION  */
/** SECTION NahtloseStahlrohre */
class vNahtloseStahlrohre extends vStahlrohre{}

/** !SECTION  */
/** SECTION Gewinderohre */
class vGewinderohre extends vStahlrohre{}

/** !SECTION  */
/** SECTION GeschweissteStahlrohre */
class vGeschweissteStahlrohre extends vStahlrohre{}

/** !SECTION  */
/** SECTION Kupferrohre */
class vKupferrohre extends vRohrleitung{}

/** !SECTION  */
/** SECTION Kunststoffrohre */
class vKunststoffrohre extends vRohrleitung{}

/** !SECTION  */
/** SECTION Gussrohre */
class vGussrohre extends vRohrleitungen{}

/** !SECTION  */
/** SECTION Faserzementrohre */
class vFaserzementrohre extends vRohrleitung{}

/** !SECTION  */
/** SECTION Bleirohre */
class vBleirohre extends vRohrleitung{}

/** !SECTION  */
/** SECTION Betonrohre */
class vBetonrohre extends vRohrleitung{}

/** !SECTION  */
/** SECTION Aluminiumrohre */
class vAluminiumrohre extends vRohrleitung{}

/** !SECTION  */
/** !SECTION Rohrleitungen */
/** SECTION Saeulen */
class vSaeulen extends vBauelemente{}

/** !SECTION  */
/** SECTION Scheiben */
class vScheiben extends vBauelemente{}

/** SECTION Wellenenden */
class vWellenenden extends vScheiben{}

/** !SECTION  */
/** SECTION Stuetzscheiben */
class vStuetzscheiben extends vScheiben{}

/** !SECTION  */
/** SECTION Passscheiben */
class vPassscheiben extends vScheiben{}

/** !SECTION  */
/** !SECTION Scheiben */
/** SECTION Schrauben */
class vSchrauben extends vBauelemente{}

/** !SECTION  */
/** SECTION Schraubenraeder */
class vSchraubenraeder extends vBauelemente{}

/** !SECTION  */
/** SECTION Schubstangen */
class vSchubstangen extends vBauelemente{}

/** !SECTION  */
/** SECTION Senkungen */
class vSenkungen extends vBauelemente{}

/** !SECTION  */
/** SECTION Sicherungsbleche */
class vSicherungsbleche extends vBauelemente{}

/** !SECTION  */
/** SECTION Sicherungsringe */
class vSicherungsringe extends vBauelemente{}

/** !SECTION  */
/** SECTION Splinte */
class vSplinte extends vBauelemente{}

/** !SECTION  */
/** SECTION Stahlblech */
class vStahlblech extends vBauelemente{}

/** !SECTION  */
/** SECTION Stahldraht */
class vStahldraht extends vBauelemente{}

/** !SECTION  */
/** SECTION Stahlprofile */
class vStahlprofile extends vBauelemente{}

/** !SECTION  */
/** SECTION Stifte */
class vStifte extends vBauelemente{}

/** SECTION Zylinderstifte */
class vZylinderstifte extends vStifte{}

/** !SECTION  */
/** SECTION Spannstifte */
class vSpannstifte extends vStifte{}

/** !SECTION  */
/** SECTION Kerbstifte */
class vKerbstifte extends vStifte{}

/** !SECTION  */
/** SECTION Kegelstifte */
class vKegelstifte extends vStifte{}

/** !SECTION  */
/** !SECTION Stifte */

/** SECTION Stopfbuechsen */
class vStopfbuechsen extends vBauelemente{}

/** !SECTION  */
/** SECTION Traeger */
class vTraeger extends vBauelemente{}

/** !SECTION  */
/** SECTION Transmissionen */
class vTransmissionen extends vBauelemente{}

/** !SECTION  */
/** SECTION Tueren */
class vTueren extends vBauelemente{}

/** !SECTION  */
/** SECTION Ventile */
class vVentile extends vBauelemente{}

/** !SECTION  */
/** SECTION Wandarm */
class vWandarm extends vBauelemente{}

/** !SECTION  */
/** SECTION Wellen */
class vWellen extends vBauelemente{}

/** SECTION Keilwellen */
class vKeilwellen extends vWellen{}

/** !SECTION  */
/** !SECTION Wellen  */
/** SECTION Zahnraeder */
class vZahnraeder extends vBauelemente{}

/** !SECTION  */
/** SECTION Zapfen */
class vZapfen extends vBauelemente{}

/** !SECTION  */
/** SECTION Zylinder */
class vZylinder extends vBauelemente{}

/** !SECTION  */
/** !SECTION Bauelemente */
export
{
  vNahtloseStahlrohre,
  vStahlrohre,
  vPraezisionsstahlrohre,
  vGewinderohre,
  vGeschweissteStahlrohre,
  vKupferrohre,
  vKunststoffrohre,
  vGussrohre,
  vFaserzementrohre,
  vBleirohre,
  vBetonrohre,
  vAluminiumrohre,
  vRohrleitung,
  vRohrleitungen,
  vBauelemente,
  vAchsen,
  vAusleger,
  vBalken,
  vBaukonstruktionen,
  vBehaelter,
  vBoecke,
  vBolzen,
  vBuchsen,
  vDaecher,
  vDecken,
  vDrahtseiltriebe,
  vExzenter,
  vFedern,
  vFenster,
  vFlansche,
  vGefaese,
  vGelenke,
  vGeradfuehrungen,
  vGetriebe,
  vGewinde,
  vHaehne,
  vHaltestifte,
  vHanfseiltriebe,
  vHebel,
  vKegelraeder,
  vKeile,
  vKolben,
  vKolbenbolzen,
  vKolbenringe,
  vKolbenstange,
  vKonus,
  vKreuzkoepfe,
  vKreuzkopfbolzen,
  vKupplungen,
  vKurbel,
  vKurbeltrieb,
  vKurbelwellen,
  vKurbelzapfen,
  vLager,
  vMaschinenfundamente,
  vMauern,
  vMuttern,
  vNaben,
  vNaegel,
  vNiete,
  vPassungen,
  vPlatte,
  vRiementriebe,
  vRinge,
  vSaeulen,
  vSchrauben,
  vSchraubenraeder,
  vSchubstangen,
  vSenkungen,
  vSicherungsbleche,
  vSicherungsringe,
  vSplinte,
  vStahlblech,
  vStahldraht,
  vStahlprofile,
  vStopfbuechsen,
  vTraeger,
  vTransmissionen,
  vTueren,
  vVentile,
  vWandarm,
  vZahnraeder,
  vZapfen,
  vZylinder,
  vWellenenden,
  vPassscheiben,
  vStuetzscheiben,
  vScheiben,
  vStifte,
  vZylinderstifte,
  vSpannstifte,
  vKerbstifte,
  vKegelstifte,
  vWellen,
  vKeilwellen,
};
