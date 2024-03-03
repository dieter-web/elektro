import { vComponents } from "./components.mjs";

class vWerkstoff extends vComponents {
  constructor() {
    super();
    // this.Kennzeichnung = require(path.resolve("src/json/Bezeichnungssysteme/Material.json"));
    // this.Berechung = {};
  }
}

class vEisenwerkstoff extends vWerkstoff {
  constructor() {
    super();
  }
}

class vBaustahl extends vEisenwerkstoff {
  constructor() {
    super();
  }
}

class vAutomatenstahl extends vEisenwerkstoff {
  constructor() {
    super();
  }
}

class vEinsatzstahl extends vEisenwerkstoff {
  constructor() {
    super();
  }
}

class vVerguetungsstahl extends vEisenwerkstoff {
  constructor() {
    super();
  }
}

class vWerkzeugstahl extends vEisenwerkstoff {
  constructor() {
    super();
  }
}

class vLeiterwerkstoff extends vWerkstoff {
  constructor() {
    super();
  }
}

class vMagnetischerWerkstoff extends vWerkstoff {
  constructor() {
    super();
  }
}

exports.vWerkstoff = vWerkstoff;
exports.vEisenwerkstoff = vEisenwerkstoff;
exports.vBaustahl = vBaustahl;
exports.vAutomatenstahl = vAutomatenstahl;
exports.vEinsatzstahl = vEinsatzstahl;
exports.vVerguetungsstahl = vVerguetungsstahl;
exports.vWerkzeugstahl = vWerkzeugstahl;
exports.vLeiterwerkstoff = vLeiterwerkstoff;
exports.vMagnetischerWerkstoff = vMagnetischerWerkstoff;
