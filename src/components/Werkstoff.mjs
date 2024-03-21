import { vComponents } from "./components.mjs";

class vWerkstoff extends vComponents {
  constructor() {
    super();
    // this.Kennzeichnung = require(path.resolve("src/json/Bezeichnungssysteme/Material.json"));
    // this.Berechung = {};
  }
}

class vEisenwerkstoff extends vWerkstoff {}

class vBaustahl extends vEisenwerkstoff {}

class vAutomatenstahl extends vEisenwerkstoff {}

class vEinsatzstahl extends vEisenwerkstoff {}

class vVerguetungsstahl extends vEisenwerkstoff {}

class vWerkzeugstahl extends vEisenwerkstoff {}

class vLeiterwerkstoff extends vWerkstoff {}

class vMagnetischerWerkstoff extends vWerkstoff {}

exports.vWerkstoff = vWerkstoff;
exports.vEisenwerkstoff = vEisenwerkstoff;
exports.vBaustahl = vBaustahl;
exports.vAutomatenstahl = vAutomatenstahl;
exports.vEinsatzstahl = vEinsatzstahl;
exports.vVerguetungsstahl = vVerguetungsstahl;
exports.vWerkzeugstahl = vWerkzeugstahl;
exports.vLeiterwerkstoff = vLeiterwerkstoff;
exports.vMagnetischerWerkstoff = vMagnetischerWerkstoff;
