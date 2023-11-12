import { select, selectAll } from "d3";

function initvga() {
  select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height])
    .attr(
      "style",
      "max-width: 100%; height:auto;height:intrinsic; border: black"
    );
}

export { initvga };
