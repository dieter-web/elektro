// import {select, axisLeft, scaleLinear} from "d3"

function draw() {
  d3.select("body").append("svg").attr("width", 1440).attr("height", 200).append("g").attr("transform", "translate(0,30)").call(shape);
}
export { draw };