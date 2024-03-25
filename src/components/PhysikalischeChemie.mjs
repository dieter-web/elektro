import { vComponents } from "./components.mjs";

class vPhysikalischeChemie extends vComponents {
  constructor(data, point) {
    super(data, point);
  }
}

class vElektrochemie extends vPhysikalischeChemie {
  constructor(data, point) {
    super(data, point);
  }
}

class vElektrode extends vElektrochemie {
  constructor(data, point) {
    super(data, point);
  }
}

class vForm1 extends vElektrode {
  constructor(data, point) {
    super(data, point);
    this.shape = "";
  }

  fshape() {
    this.Symbol.select("#shape")
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("height", 130)
      .attr("width", 10)
  }
}

class vElektrolyt extends vElektrochemie {
  constructor(data, point) {
    super(data, point);
    this.shape = "";
  }

  fshape() {}
}

export { vPhysikalischeChemie };
export { vElektrochemie };
export { vElektrode };
export { vElektrolyt };
export { vForm1 };
