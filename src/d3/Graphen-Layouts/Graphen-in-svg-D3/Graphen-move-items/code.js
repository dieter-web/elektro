var svg, counter, selectedNode;

function init() {
    counter = 0;
    svg = d3.select("svg")
        .on("mousemove", moveNode)
        .on("mouseup", mouseUp);
}

function nextID() {
    return ++counter;
}

function mouseDown() {
    selectedNode = this;
}

function mouseUp() {
    if (!selectedNode)
        addNode(d3.mouse(this));
    selectedNode = null;
}

function moveNode() {
    if (selectedNode) {
        var point = d3.mouse(this);
        var node = d3.select(selectedNode).datum();
        node.x = point[0];
        node.y = point[1];
        draw();
    }
}

function getID() {
    var ID = 1;
    var data = svg.selectAll("circle").data();
    while (true) {
        if (data.indexOf(ID) === -1)
            return ID;
        ID++;
    }
}

function draw() {
    svg.selectAll("g").attr("transform", function (d) {
        return "translate(" + d.x + "," + d.y + ")";
    });
}

function addNode(point) {
    var ID = nextID();
    var group = svg.append("g");
    var text = group.append("text")
        .attr("x", 0)
        .attr("y", 0)
        .text(ID);

    var box = text.node().getBBox();
    text
        .attr("dx", -box.width / 2)
        .attr("dy", box.height / 2);

    box = text.node().getBBox();

    var circle = group.insert("circle", ":last-child")
        .attr("cx", box.x + box.width / 2)
        .attr("cy", box.y + box.height / 2)
        .attr("r", 4 + Math.sqrt(box.width * box.width, box.height * box.height) / 2)
        .attr("fill", "white")
        .attr("stroke", "black");

    var node = { id: ID, x: point[0], y: point[1] };
    group.on("mousedown", mouseDown).datum(node);
    draw();
}

function clearSelection() {
    if (document.selection) {
        document.selection.empty();
    }
    else if (window.getSelection) {
        window.getSelection().removeAllRanges();
    }
}
