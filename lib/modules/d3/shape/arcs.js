function darc(data) {
  const a = d3.arc().innerRadius(data.ri).outerRadius(data.ra).startAngle(data.san).endAngle(Math.PI / 2);
  return a;
}
export { darc };