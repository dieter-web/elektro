function init() {
  const l1 = [
    { x: "0", y: "0" },
    { x: "5", y: "0" },
    { x: "5", y: "5" },
    { x: "0", y: "5" },
    { x: "0", y: "0" },
    { x: "5", y: "5" },
    { x: "0", y: "5" },
    { x: "5", y: "0" },
  ];

  // const l1=FileAttachment( "l1.csv" ).csv( {typed: true} )
  // const l1=d3.dsvParse( "./l1.csv" )
  const width = 100;
  const height = 100;
  const marginTop = 0;
  const marginRight = 0;
  const marginLeft = 0;
  const marginBottom = 0;

  // Das ist die Scalierung der Fläche in der die Line gezeichnet wird.

  const x = d3.scaleLinear(
    d3.extent(l1, (d) => d.x),
    [0, 100]
    // [marginLeft, width - marginRight]
  );

  const y = d3.scaleLinear(
    [0, d3.max(l1, (d) => d.y)],
    [height - marginBottom, marginTop]
  );

  //Path Element "d"
  const line = d3
    .line()
    .x((d) => x(d.x))
    .y((d) => y(d.y));

  const svg = d3
    .create("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height])
    .attr(
      "style",
      "max-width: 100%; height:auto;height:intrinsic; border: black"
    );

  //   svg
  //     .append("g")
  //     .attr("transform", `translate(0,${height - marginBottom})`)
  //     .call(
  //       d3
  //         .axisBottom(x)
  //         .ticks(width / 80)
  //         .tickSizeOuter(0)
  //     );

  //   svg
  //     .append("g")
  //     .attr("transform", `translate(${marginLeft}, 0)`)
  //     .call(d3.axisLeft(y).ticks(height / 40))
  //     .call((g) =>
  //       g
  //         .selectAll(".tick line")
  //         .clone()
  //         .attr("x2", width - marginLeft - marginRight)
  //         .attr("stroke-opacity", 0.1)
  //     )
  //     .call((g) =>
  //       g
  //         .append("text")
  //         .attr("x", -marginLeft)
  //         .attr("y", 10)
  //         .attr("fill", "currentColor")
  //         .attr("text-anchor", "start")
  //         .text("Daily y ($)")
  //     );
  svg
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr("d", line(l1));

  return svg.node();
}

let gr = init();
d3.select("body").append(() => gr);
