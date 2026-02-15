export function createTableHtml(result) {
  if (
    !result ||
    !result.parameter ||
    !Array.isArray(result.parameter) ||
    result.parameter.length === 0
  ) {
    return "";
  }

  const data = result.parameter;

  // Hauptkeys mit nicht-leeren Objekten
  const keys = Object.keys(data[0]).filter((key) =>
    data.some((row) => row[key] && Object.keys(row[key]).length > 0),
  );

  // Subkeys pro Hauptkey sammeln
  const keySubMap = {};
  for (const key of keys) {
    const subKeySet = new Set();
    for (const row of data) {
      if (row[key]) {
        Object.keys(row[key]).forEach((subKey) => subKeySet.add(subKey));
      }
    }
    keySubMap[key] = Array.from(subKeySet);
  }

  // Kopfzeile 1: Hauptkeys mit colspan
  const head = keys
    .map((key) => {
      const colspan = keySubMap[key].length || 1;
      return `<th colspan="${colspan}">${key}</th>`;
    })
    .join("");

  // Kopfzeile 2: Subkeys unter jedem Hauptkey
  const head2 = keys
    .map((key) => keySubMap[key].map((subKey) => `<th>${subKey}</th>`).join(""))
    .join("");

  // Datenzeilen
  const rows = data
    .map((row) => {
      return (
        `<tr>` +
        keys
          .map((key) =>
            keySubMap[key]
              .map((subKey) =>
                row[key] && row[key][subKey] !== undefined
                  ? `<td>${row[key][subKey]}</td>`
                  : `<td></td>`,
              )
              .join(""),
          )
          .join("") +
        `</tr>`
      );
    })
    .join("");

  // HTML zusammenbauen
  const html = `<table border="1">
    <tr>${head}</tr>
    <tr>${head2}</tr>
    ${rows}
    </table>`;
  return html;
}
