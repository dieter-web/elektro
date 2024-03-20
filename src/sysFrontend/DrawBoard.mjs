class DrawBoard {
  constructor(id, width, height, viewbox) {
    this.svg = d3
      .select(`svg#${id}`)
      .attr("width", width)
      .attr("height", height)
      .attr("xmlns", "http://www.w3.org/2000/svg")
      .attr("xmlns:link", "http://www.w3.org/1999/link")
      .attr("version", "1.1")
      .attr("viewBox", viewbox)
      .on("mousedown", this.mdown)
      .on("mousemove", this.mmove);

    this.counter = 0;
    this.selectNode = undefined;
    this.firstNode = undefined;
  }

  nextID() {
    return ++this.counter;
  }

  addNode(node) {
    this.nextID();
    // console.log(this.counter);
    this.svg.append(() => node);
  }

  mdown() {}

  mmove() {}
}

export { DrawBoard };
