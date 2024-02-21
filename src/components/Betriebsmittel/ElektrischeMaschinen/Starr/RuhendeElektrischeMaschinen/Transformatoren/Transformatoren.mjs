import { vRuhendeElektrischeMaschinen } from "../RuhendeElektrischeMaschinen.mjs";

class vTransformatoren extends vRuhendeElektrischeMaschinen {
  constructor(data, point) {
    super(data, point);
  }
}

export { vTransformatoren };
