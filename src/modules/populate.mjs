/**
 * @description
 * Aus einer auf dem Server gespeicherte
 * JSON Datei die Daten zurückholen
 * @date 25/06/2023
 * @param {*} requestURL - JSON Datei
 * @returns {*}
 */
async function populate(name) {
  const request = new Request(`http://localhost:8000/json/${name}`);
  const response = await fetch(request);
  const text = await response.text();
  const data = JSON.parse(text);
  return data;
}

export { populate };
