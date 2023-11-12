function dline(data) {
  const l = d3
    .line()
    .x((d) => x(data.x))
    .y((d) => y(data.y));
  return l;
}

export { dline };
