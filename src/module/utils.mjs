import * as fs from 'node:fs';
import { readFile } from 'fs/promises';
import { existsSync } from 'fs';
import assert from 'node:assert';
import { create, all } from 'mathjs';
import { fileURLToPath, pathToFileURL } from 'url';

import { JSDOM } from "jsdom";
import * as d3 from 'd3';

import { exec} from 'node:child_process'
import { promisify} from 'util'
const execAsync = promisify(exec)

import path from 'path'

// const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const math = create(all);

const haskPath = path.resolve(__dirname,'../ghc')


export async function hask(nam,par) {
const args = par.map(k => parseNum(k)).join(" ")
  const cmd = `${haskPath}/${nam} ${args}`;
  try {
  const out = await execAsync(cmd)
  const result = out.stdout.trim().replace(/[()]/g,'').split(',').map(a => Number(a))
  
  if(isNaN(result)) return result;
  } catch(err) {
    console.error('Fehler bei der Berechung:', err);
    return null;
  }
}

export async function transform(nam,felder) {
    const parameter = felder.map(k => parseNum(k.value));
    return await hask(nam, parameter);
}

export function parseNum(v) {
  return Number(String(v).replace(/[^\d.-]/g,''));
}

export function parseValue(val) {
	if (typeof val === 'number') return val;
	if (typeof val === 'string') return parseFloat(val.replace(',', '.'))
	return 0;
}

export function createTableHtml(result) {
    if (!result || !result.parameter || !Array.isArray(result.parameter) || result.parameter.length === 0) {
        return '';
    }
    const data = result.parameter;

    // Hauptkeys mit nicht-leeren Objekten
    const keys = Object.keys(data[0]).filter(key =>
        data.some(row => row[key] && Object.keys(row[key]).length > 0)
    );

    // Subkeys pro Hauptkey sammeln
    const keySubMap = {};
    for (const key of keys) {
        const subKeySet = new Set();
        for (const row of data) {
            if (row[key]) {
                Object.keys(row[key]).forEach(subKey => subKeySet.add(subKey));
            }
        }
        keySubMap[key] = Array.from(subKeySet);
    }

    // Kopfzeile 1: Hauptkeys mit colspan
    const head = keys.map(key => {
        const colspan = keySubMap[key].length || 1;
        return `<th colspan="${colspan}">${key}</th>`;
    }).join('');

    // Kopfzeile 2: Subkeys unter jedem Hauptkey
    const head2 = keys.map(key =>
        keySubMap[key].map(subKey => `<th>${subKey}</th>`).join('')
    ).join('');

    // Datenzeilen
    const rows = data.map(row => {
        return `<tr>` + keys.map(key =>
            keySubMap[key].map(subKey =>
                row[key] && row[key][subKey] !== undefined
                    ? `<td>${row[key][subKey]}</td>`
  : `<td></td>`
            ).join('')
        ).join('') + `</tr>`;
    }).join('');

    // HTML zusammenbauen
    const html = `<table border="1">
        <tr>${head}</tr>
        <tr>${head2}</tr>
        ${rows}
    </table>`;
    return html;
}
         
      



/*
	const head = [];
	for (const key of keys) {
		const len = Object.keys(data[0][key]).length;
		head.push(key, ...Array(Math.max(len - 1, 0)).fill(""));
	}
	const head1 = subKeys;

	let html = `<table>
		<tr>${head.map(cell => `<th>${cell}</th>`).join('')}</tr>
		<tr>${head1.map(cell => `<th>${cell}</th>`).join('')}</tr>
		${data.map(rowObj => `
			<tr>
				${subKeys.map(subKey => {
		for (const key of keys) {
			if (rowObj[key] && Object.prototype.hasOwnProperty.call(rowObj[key], subKey)) {
				return `<td>${rowObj[key][subKey]}</td>`;
			}
		}
		return '<td></td>';
	}).join('')}
			</tr>
		`).join('')}
	</table>`;
	return html;
}
*/

// Points zum ChartHtml erzeugen 
export function createYPoints(){
	
}

export function createChartHtml(chartData) {
	// Wird in router.post abgefragt
	//if(!result || !result.chartData || result.chartData.length === 0) {
	//	return ''
	//}
	const data = chartData
	console.log(data)

	const width = data.options.width || 400
	const height = data.options.height || 300
	const margin = data.options.margin || 60

	const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>")
	const { document } = dom.window;

	const x = d3.scaleLinear()
		.domain(data.xAxis.domain || [0, 1])
		.range([margin, width - margin])

	const y = d3.scaleLinear()
		.domain(data.yAxis.domain || [0, 1])
		.range([height - margin, margin])

	const svg = d3.select(document.body)
		.append("svg")
		.attr("width", width)
		.attr("height", height)

	// Achsen 
	svg.append("g")
		.attr("transform", `translate(0,${height - margin})`)
		.call(d3.axisBottom(x))
		.append('text')
		.attr('x', width / 2)
		.attr('y', 35)
		.attr('fill', '#000')
		.text(data.xAxis.label || 'x');

	svg.append("g")
		.attr("transform", `translate(${margin},0)`)
		.call(d3.axisLeft(y))
		.append('text')
		.attr('y', height / 2)
		.attr('x', -margin / 2)
		.attr('fill', '#000')
		.text(data.yAxis.label || 'y');

	const line = d3.line()
		.x(d => x(d[0]))
		.y(d => y(d[1]))

	data.curves.forEach((curve, idx) => {
		svg.append('path')
			.datum(curve.points)
			.attr('class', 'line')
			.attr('fill', 'none')
			.attr('stroke', curve.color || d3.schemeCategory10[idx % 10])
			.attr('stroke-width', 2)
			.attr('d', line)

		// Label am Ende der Linie
		if (curve.label) {
			const last = curve.points[curve.points.length - 1]
			svg.append('text')
				.attr('x', x(last[0]) + 5)
				.attr('y', y(last[1]))
				.text(curve.label)
				.attr('fill', curve.color || d3.schemeCategory10[idx % 10])
				.attr('font-size', '12px')
		}
	});
	// Legende
	const legend = svg.append('g')
		.attr('class', 'legend')
		.attr('transform', `translate(${width - margin + 10},${margin})`);
	data.curves.forEach((curve, idx) => {
		legend.append('rect')
			.attr('x', 0)
			.attr('y', idx * 20)
			.attr('width', 16)
			.attr('height', 4)
			.attr('fill', curve.color || d3.schemeCategory10[idx % 10]);
		legend.append('text')
			.attr('x', 22)
			.attr('y', idx * 20 + 4)
			.text(curve.label || `Linie ${idx + 1}`)
			.attr('font-size', '12px')
			.attr('fill', '#000');
	});

	return document.body.innerHTML;
}


export function createChartHtml_1(chartData) {
	// Wird in router.post abgefragt
	//if(!result || !result.chartData || result.chartData.length === 0) {
	//	return ''
	//}
	const data = chartData
	console.log(data)

	const width = data.options.width || 400
	const height = data.options.height || 300
	const margin = data.options.margin || 60

	const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>")
	const { document } = dom.window;

	const x = d3.scaleLinear()
		.domain(data.xAxis.domain || [0, 1])
		.range([margin, width - margin])

	const y = d3.scaleLinear()
		.domain(data.yAxis.domain || [0, 1])
		.range([height - margin, margin])

	const svg = d3.select(document.body)
		.append("svg")
		.attr("width", width)
		.attr("height", height)

	// Achsen 
	svg.append("g")
		.attr("transform", `translate(0,${height - margin})`)
		.call(d3.axisBottom(x))
		.append('text')
		.attr('x', width / 2)
		.attr('y', 35)
		.attr('fill', '#000')
		.text(data.xAxis.label || 'x');

	svg.append("g")
		.attr("transform", `translate(${margin},0)`)
		.call(d3.axisLeft(y))
		.append('text')
		.attr('y', height / 2)
		.attr('x', -margin / 2)
		.attr('fill', '#000')
		.text(data.yAxis.label || 'y');

	const line = d3.line()
		.x(d => x(d[0]))
		.y(d => y(d[1]))

	data.curves.forEach((curve, idx) => {
		svg.append('path')
			.datum(curve.points)
			.attr('class', 'line')
			.attr('fill', 'none')
			.attr('stroke', curve.color || d3.schemeCategory10[idx % 10])
			.attr('stroke-width', 2)
			.attr('d', line)

		// Label am Ende der Linie
		if (curve.label) {
			const last = curve.points[curve.points.length - 1]
			svg.append('text')
				.attr('x', x(last[0]) + 5)
				.attr('y', y(last[1]))
				.text(curve.label)
				.attr('fill', curve.color || d3.schemeCategory10[idx % 10])
				.attr('font-size', '12px')
		}
	});
	// Legende
	const legend = svg.append('g')
		.attr('class', 'legend')
		.attr('transform', `translate(${width - margin + 10},${margin})`);
	data.curves.forEach((curve, idx) => {
		legend.append('rect')
			.attr('x', 0)
			.attr('y', idx * 20)
			.attr('width', 16)
			.attr('height', 4)
			.attr('fill', curve.color || d3.schemeCategory10[idx % 10]);
		legend.append('text')
			.attr('x', 22)
			.attr('y', idx * 20 + 4)
			.text(curve.label || `Linie ${idx + 1}`)
			.attr('font-size', '12px')
			.attr('fill', '#000');
	});

	return document.body.innerHTML;
}

export function createEditorHtml(editorData) {
	const data = editorData 

	const width = data.options.width || 400
	const height = data.options.height || 300
	const margin = data.options.margin || 60

	const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>")
	const { document } = dom.window;

	const svg = d3.select(document.body)
	.append("svg")
	.attr("width", width)
	.attr("height", height)

	// Raster erzeugen (vereinfacht mit D3)
	const grid = svg.append("g")
	.attr("class","grid")

	// Vertikale Linien
	const xLines = d3.range(0, width, gridSize);
	grid.selectAll(".vline")
		.data(xLines)
		.enter()
		.append("line")
		.attr("class", "vline")
		.attr("x1", d => d).attr("y1", 0)
		.attr("x2", d => d).attr("y2", height);

	// Horizontale Linien
	const yLines = d3.range(0, height, gridSize);
	grid.selectAll(".hline")
		.data(yLines)
		.enter()
		.append("line")
		.attr("class", "hline")
		.attr("x1", 0).attr("y1", d => d)
		.attr("x2", width).attr("y2", d => d);

	return document.body.innerHTML

}

export async function ladeWerkstoffe(pfad = 'data/Leiterwerkstoffe.json') {
//	if (!existsSync(pfad)) throw new Error(`Datei nicht gefunden: ${pfad}`);

	try {
		const inhalt = await readFile(pfad, 'utf8');
		return JSON.parse(inhalt);
	} catch (err) {
		throw new Error(`Fehler beim Lesen oder Parsen von ${pfad}: ${err.message}`)
	}
}

export async function ladeWerkstoff_wert(Material, wert = 'ρ') {
  const pfad = path.join(__dirname,'../../data/Leiterwerkstoffe.json');

  if (!existsSync(pfad)) throw new Error(`Datei nicht gefunden: ${pfad}`);
	try {
		const inhalt = await readFile(pfad, 'utf8');
		const jinhalt = JSON.parse(inhalt);
		const konstante = jinhalt?.[Material]?.werte?.[wert];

		assert.ok(konstante, `Material "${Material}" nicht gefunden oder Struktur ungültig`)
		assert.ok(typeof konstante?.wert === 'number', 'wert ist keine gültige Zahl')
		assert.ok(typeof (konstante?.einheit === 'string', 'einheit fehlt oder ist kein string'))


		return math.unit(konstante.wert, konstante.einheit);
	} catch (err) {
		throw new Error(`Fehler beim Lesen oder Parsen von ${pfad}: ${err.message}`)
	}
}
  
  /*
  return new Promise((resolve, reject) => {
    readFile(pfad,'utf8')
    .then(inhalt => {
      try {
        const jinhalt = JSON.parse(inhalt);
        const konstante = jinhalt?.[Material]?.werte?.[wert];

        if(!konstante) {
          return reject(new Error(`Material "${Material}" nicht gefunden oder Struktur ungültig `));
        }
        if(typeof konstante?.wert !== 'number') {
          return reject(new Error('wert ist keine gültige Zahl'));
        }
        if(typeof konstante?.einheit !== 'string') {
          return reject(new Error('einheit fehlt oder ist kein string'));
        }
        const result = math.unit(konstante.wert, konstante.einheit);
        resolve(result);
      } catch(err) {
        reject(new Error(`Fehler beim Parsen: ${err.message}`));
      }
  })
    .catch(err => {
      reject(new Error(`Fehler beim Lesen der Datei: ${err.message}`));
    });
});
}
*/


// Hilfsfunktion zum sicheren JSON Laden 
export const loadJsonData = (filename) => {
	try {
		return JSON.parse(fs.readFileSync(path.join(JSON_DIR, filename), 'utf8'));
	} catch (error) {
		console.error(`Error loading ${filename}:`, error)
		return {};
	}
};

// Besseres Pfad-Handling
export const JSON_DIR = path.join(process.cwd(), 'data');

export async function loadTaskConfig(taskName) {
	// Suche nach taskName.mjs in allen Unterverzeichnissen von src/aufgaben
	const aufgabenRoot = path.resolve(process.cwd(), 'src', 'aufgaben');

	function findAllTaskFiles(dir) {
		let results = [];
		const list = fs.readdirSync(dir, { withFileTypes: true });
		for (const file of list) {
			const filePath = path.join(dir, file.name);
			if (file.isDirectory()) {
				results = results.concat(findAllTaskFiles(filePath));
			} else if (file.isFile() && file.name === `${taskName}.mjs`) {
				results.push(filePath);
			}
		}
		return results;
	}

	const matches = findAllTaskFiles(aufgabenRoot);

	if (matches.length > 0) {
		try {
			const moduleUrl = pathToFileURL(matches[0]).href;
			const taskModule = await import(moduleUrl);
			return {
				meta: taskModule.meta,
				handler: taskModule.default
			};
		} catch (err) {
			throw new Error(`Fehler beim Laden von Aufgabe "${taskName}": ${err.message}`);
		}
	}
	throw new Error(`Aufgabe "${taskName}" nicht gefunden in Unterverzeichnissen von ${aufgabenRoot}`);
}


