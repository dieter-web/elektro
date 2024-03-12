function o2d(odata) {
  let adata = [];
  JSON.parse(JSON.stringify(odata), (key, value) => {
    adata.push(`${key}=${value}`);
  });
  adata.length = adata.length - 1; // Korrektur
  return adata;
}

export { o2d };
