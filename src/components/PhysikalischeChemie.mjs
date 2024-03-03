import { vComponents } from "./components.mjs";

class vPhysikalischeChemie extends vComponents {
    constructor() {
        this.vis = {}
    }
}
    
class vElektrochemie extends vPhysikalischeChemie {
    constructor(data, point) {
        super();
        this.data = data;
        this.point = point;
    }

    this.Symbol = d3.create("svg:g")
    .attr("id",`${data.Kennzeichnung.Art}${data.Kennzeichnung.Zählnummer}`);
}

class vElektrode extends vElektrochemie {
    constructor(data, point) {
        super(data, point);
        this.shape = '';
    }

    fshape() {};
}

class vElektrolyt extends vElektrochemie {
    constructor(data, point) {
        super(data, point);
        this.shape = '';
    }

    fshape() {};
}


export {vPhysikalischeChemie};
export {vElektrochemie};
export {vElektrode};
export {vElektrolyt};
