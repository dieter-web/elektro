import * as d3 from "d3";
//import { JSDOM } from 'jsdom';
import jsdom from 'jsdom';
const { JSDOM } = jsdom;

export function createChartHtml(chartData) {
  const data = chartData;

  const width = data.options.width || 400;
  const height = data.options.height || 300;
  const margin = data.options.margin || 60;

  const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>");
  const { document } = dom.window;

  const x = d3
    .scaleLinear()
    .domain(data.xAxis.domain || [0, 1])
    .range([margin, width - margin]);

  const y = d3
    .scaleLinear()
    .domain(data.yAxis.domain || [0, 1])
    .range([height - margin, margin]);

  const svg = d3
    .select(document.body)
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // Achsen
  svg
    .append("g")
    .attr("transform", `translate(0,${height - margin})`)
    .call(d3.axisBottom(x))
    .append("text")
    .attr("x", width / 2)
    .attr("y", 35)
    .attr("fill", "#000")
    .text(data.xAxis.label || "x");

  svg
    .append("g")
    .attr("transform", `translate(${margin},0)`)
    .call(d3.axisLeft(y))
    .append("text")
    .attr("y", height / 2)
    .attr("x", -margin / 2)
    .attr("fill", "#000")
    .text(data.yAxis.label || "y");

  const line = d3
    .line()
    .x((d) => x(d[0]))
    .y((d) => y(d[1]));

  data.curves.forEach((curve, idx) => {
    svg
      .append("path")
      .datum(curve.points)
      .attr("class", "line")
      .attr("fill", "none")
      .attr("stroke", curve.color || d3.schemeCategrory10[idx % 10])
      .attr("stroke-width", 2)
      .attr("d", line);

    // Label am Ende der Linie
    if (curve.label) {
      const last = curve.points[curve.points.length - 1];
      svg
        .append("text")
        .attr("x", x(last[0]) + 5)
        .attr("y", y(last[1]))
        .text(curve.label)
        .attr("fill", curve.color || d3.schemeCategory10[idx % 10])
        .attr("font-size", "12px");
    }
  });

  // Legende
  const legend = svg
    .append("g")
    .attr("class", "legend")
    .attr("transform", `translate(${width - margin + 10}, ${margin})`);
  data.curves.forEach((curve, idx) => {
    legend
      .append("rect")
      .attr("x", 0)
      .attr("y", idx * 20)
      .attr("width", 16)
      .attr("height", 4)
      .attr("fill", curve.color || d3.schemeCategory10[idx % 10]);

    legend
      .append("text")
      .attr("x", 22)
      .attr("y", idx * 20 + 4)
      .text(curve.label || `Line ${idx + 1}`)
      .attr("font-size", "12px")
      .attr("fill", "#000");
  });

  return document.body.innerHTML;
}

export function createChartHtml_1(chartData) {
  // Wird in router.post abgefragt
  //if(!result || !result.chartData || result.chartData.length === 0) {
  //	return ''
  //}
  const data = chartData;
  console.log(data);

  const width = data.options.width || 400;
  const height = data.options.height || 300;
  const margin = data.options.margin || 60;

  const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>");
  const { document } = dom.window;

  const x = d3
    .scaleLinear()
    .domain(data.xAxis.domain || [0, 1])
    .range([margin, width - margin]);

  const y = d3
    .scaleLinear()
    .domain(data.yAxis.domain || [0, 1])
    .range([height - margin, margin]);

  const svg = d3
    .select(document.body)
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  // Achsen
  svg
    .append("g")
    .attr("transform", `translate(0,${height - margin})`)
    .call(d3.axisBottom(x))
    .append("text")
    .attr("x", width / 2)
    .attr("y", 35)
    .attr("fill", "#000")
    .text(data.xAxis.label || "x");

  svg
    .append("g")
    .attr("transform", `translate(${margin},0)`)
    .call(d3.axisLeft(y))
    .append("text")
    .attr("y", height / 2)
    .attr("x", -margin / 2)
    .attr("fill", "#000")
    .text(data.yAxis.label || "y");

  const line = d3
    .line()
    .x((d) => x(d[0]))
    .y((d) => y(d[1]));

  data.curves.forEach((curve, idx) => {
    svg
      .append("path")
      .datum(curve.points)
      .attr("class", "line")
      .attr("fill", "none")
      .attr("stroke", curve.color || d3.schemeCategory10[idx % 10])
      .attr("stroke-width", 2)
      .attr("d", line);

    // Label am Ende der Linie
    if (curve.label) {
      const last = curve.points[curve.points.length - 1];
      svg
        .append("text")
        .attr("x", x(last[0]) + 5)
        .attr("y", y(last[1]))
        .text(curve.label)
        .attr("fill", curve.color || d3.schemeCategory10[idx % 10])
        .attr("font-size", "12px");
    }
  });
  // Legende
  const legend = svg
    .append("g")
    .attr("class", "legend")
    .attr("transform", `translate(${width - margin + 10},${margin})`);
  data.curves.forEach((curve, idx) => {
    legend
      .append("rect")
      .attr("x", 0)
      .attr("y", idx * 20)
      .attr("width", 16)
      .attr("height", 4)
      .attr("fill", curve.color || d3.schemeCategory10[idx % 10]);
    legend
      .append("text")
      .attr("x", 22)
      .attr("y", idx * 20 + 4)
      .text(curve.label || `Linie ${idx + 1}`)
      .attr("font-size", "12px")
      .attr("fill", "#000");
  });

  return document.body.innerHTML;
}
