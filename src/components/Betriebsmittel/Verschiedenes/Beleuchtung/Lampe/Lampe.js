require("use-strict");
const path = require("path");

const { Beleuchtung } = require(path.resolve(
  "src/components/Betriebsmittel/Verschiedenes/Beleuchtung/Beleuchtung.js"
));

class Lampe extends Beleuchtung {
  constructor() {
    super();
    this.visLampe = {
      
    };
  }
}

exports.Lampe = Lampe;
