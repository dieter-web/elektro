import { JSDOM } from "jsdom";
import * as d3 from "d3";

export function createEditorHtml(editorData) {
  const data = editorData;

  const width = data.options.width || 400;
  const height = data.options.height || 300;
  //const margin = data.options.margin || 60;
  const gridSize = 10;

  const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>");
  const { document } = dom.window;

  const svg = d3
    .select(document.body)
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // Raster erzeugen (vereinfacht mit D3)
  const grid = svg.append("g").attr("class", "grid");

  // Vertikale Linien
  const xLines = d3.range(0, width, gridSize);
  grid
    .selectAll(".vline")
    .data(xLines)
    .enter()
    .append("line")
    .attr("class", "vline")
    .attr("x1", (d) => d)
    .attr("y1", 0)
    .attr("x2", (d) => d)
    .attr("y2", height);

  // Horizontale Linien
  const yLines = d3.range(0, height, gridSize);
  grid
    .selectAll(".hline")
    .data(yLines)
    .enter()
    .append("line")
    .attr("class", "hline")
    .attr("x1", 0)
    .attr("y1", (d) => d)
    .attr("x2", width)
    .attr("y2", (d) => d);

  return document.body.innerHTML;
}
