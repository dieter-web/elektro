function showCards(data, id) {
  d3.select(id).selectAll('div').data(data).enter().append('div').attr('class', 'card').append('div').attr('class', 'card-body').append('h5').attr('class', 'card-title').append('a').attr('class', 'nav-link link').attr('href', d => {
    return d.href;
  }).text(d => {
    return d.name;
  }).append('h6').attr('class', 'card-text').text(d => {
    return d.text;
  });
}
export { showCards };