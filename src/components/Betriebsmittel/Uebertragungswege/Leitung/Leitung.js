require("use-strict");
const path = require("path");

const { Uebertragungswege } = require(path.resolve(
  "src/components/Betriebsmittel/Uebertragungswege/Uebertragungswege.js"
));

const Bezeichnung = require(path.resolve(
  "src/json/Uebertragungswege/Leitungen/Bezeichnung.json"
));

class Leitung extends Uebertragungswege {
  constructor() {
    super();
    this.Kennzeichnung = Bezeichnung;
    this.vis = {
      // fill: "#B8733",
      // fillopacity: 1,
      // style: "stroke:#ffff; strocke-width: 1.0",
      // width: this.Parameter.l,
      // height: this.Parameter.h,
      // // path: "",
      // // name: "",
      // // value: "",
      // // Events
      // "pointer-events": "all",
    };
  }
}
exports.Leitung = Leitung;
