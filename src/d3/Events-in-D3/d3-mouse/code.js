function init() {
    svg = d3.select("svg");
    // svg.datum(42);
    svg
        .on("mousedown", doit)
        .on("mousemove", moveCursor);

    cursor = svg.append("circle")
        .attr("r", 10)
        .attr("stroke", "black")
        .attr("stroke-width", 1)
        .attr("fill", "white")
        .attr("transformation", "translate(-100, -100")
        .attr("class", "cursor");
}

// D3 Eventhandler 
function moveCursor(data, index) {
    cursor.attr("transform", "translate(" + d3.mouse(this) + ")");
}

function doit(data, index) {
    // console.log("data: " + data + ", index: " + index);
    // console.log(d3.event);
    // console.log(this); // immer das aktuelle html element
    // console.log(d3.mouse(this)); // Innerhalb von svg
    if (data) {
        d3.select(this).remove();
        d3.event.stopPropagation(); // Unterbrechung des Eventhandlers
    }
    else {
        var point = d3.mouse(this);
        svg.append("circle")
            .on("mousedown", doit)
            .attr("cx", point[0])
            .attr("cy", point[1])
            .attr("r", 5)
            .datum(42);
    }
}
