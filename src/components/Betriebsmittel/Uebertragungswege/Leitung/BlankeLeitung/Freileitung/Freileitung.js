require("use-strict");
const path = require("path");
const { Blankeleitung } = require(path.resolve(
  "src/components/Betriebsmittel/Uebertragungswege/Leitung/Blankeleitung/Blankeleitung.js"
));

class Freileitung extends Blankeleitung {
  constructor(Parameter) {
    super();
    this.Parameter = Parameter;
    // this.vis = {
    //   fill: "#B8733",
    //   fillopacity: 1,
    //   style: "stroke:#ffff; strocke-width: 1.0",
    //   width: this.Parameter.l,
    //   height: this.Parameter.h,
    //   // path: "",
    //   // name: "",
    //   // value: "",
    //   // Events
    //   "pointer-events": "all",
    // };
  }
}
exports.Freileitung = Freileitung;
