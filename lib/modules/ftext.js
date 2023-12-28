function ftext(data, id) {
  let t = d3.select(id).selectAll("div").data(data).enter().append("div").attr("class", "card").append("div").attr("class", "card-body").append("h5").attr("class", "card-title").text(d => {
    return d.title;
  }).append("h6").attr("class", "card-subtitle text-muted").text(d => {
    return d.subtitle;
  }).append("p").attr("class", "card-text").text(d => {
    return d.text;
  });
}
export { ftext };