function vW(data) {
  const nr = `g${data.Kennzeichnung.Art}${data.Kennzeichnung.Zählnummer}`;
  const Symbol = d3.create("svg:g").attr("id", nr);
  Symbol.append("g").attr("id", "huelle");
  Symbol.append("g").attr("id", "shape");
  // Symbol.append( "g" ).attr( "id", "pins" );
  Symbol.append("g").attr("id", "name");
  Symbol.append("g").attr("id", "parameter");
  Symbol.select("#huelle").append("rect").attr("fill", "none").attr("style", "stroke:#ffffff; stroke-width: 1.0").attr("x", data.Parameter.x).attr("y", data.Parameter.y).attr("height", data.visDraht.height + 4).attr("width", data.visDraht.width).attr("hidden", "true");
  Symbol.select("#shape").attr("fill", data.visDraht.fill).attr("fill-opacity", data.visDraht.fillopacity).attr("style", data.visDraht.style).append("rect").attr("x", data.Parameter.x).attr("y", data.Parameter.y).attr("height", data.visDraht.height).attr("width", data.visDraht.width);
  Symbol.select("#name").append("text").attr("x", data.Parameter.x).attr("y", data.Parameter.y - 5).text(data.Parameter.Name);
  Symbol.select("#parameter").append("text").attr("x", data.Parameter.x + 50).attr("y", data.Parameter.y - 5).text(`${data.Parameter.R} ${data.Parameter.l} ${data.Parameter.d}`);
  return Symbol.node();
}
export { vW };