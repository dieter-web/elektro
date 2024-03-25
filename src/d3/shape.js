// line(x,y)
const line = d3.line((d) => x(d.Date), (d) => y(d.Close));

// line(data)
svg.append("path").attr("d", line(data)).attr("stroke","currentColor");

// line.x(x)
const line = d3.line().x((d)=> x(d.Date));

// line.y(y)
const line = d3.line().y((d)=> y(d.Close));

// line.defined(defined)
const line = d3.line().defined((d) => !isNaN(d.Close));

// line.curve(curve)
const line = d3.line().curve(d3.curveStep);


// line.context(context)
const context = canvas.getContext("2d");
const line = d3.line().context(context);

// line.digits(digits)
const line = d3.line().digits(3);
