function showCards(data, cardid, nodeid) {
  fetch(data).then(res => {
    return res.json();
  }).then(bm => {
    const container = document.getElementById(nodeid);
    bm.forEach(b => {
      const tmpl = document.getElementById(cardid).content.cloneNode(true);
      tmpl.querySelector('.link').innerText = b.name;
      tmpl.querySelector('.card-text').innerText = b.text;
      tmpl.querySelector('.link').href = b.href;
      container.appendChild(tmpl);
    });
  });
}
export { showCards };