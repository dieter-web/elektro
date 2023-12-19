import { vBetriebsmittel } from "../Betriebsmittel.mjs";

class vWiderstaende extends vBetriebsmittel {
  constructor(data, point) {
    super(data, point);
    this.counter = 0;
    this.firstNode = undefined;
    this.selectedNode = undefined;
  }

  nextID() {
    return ++this.counter;
  }

  addNode(point){
    let ID = nextID();
    let group = this.Symbol;
    

  }
}

export { vWiderstaende };
