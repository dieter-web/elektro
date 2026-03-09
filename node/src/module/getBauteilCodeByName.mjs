// Funktion: Bauteil-Code anhand deutschem oder englischem Namen finden

import bauteileData from './../../data/Bauteile.json' // ggf. Pfad anpassen

export function getBauteilCodeByName(name) {
	const { Bauteile } = bauteileData
	name = name.trim().toLowerCase()
	for (const b of Bauteile) {
		// Prüfe deutsche Namen
		if (Array.isArray(b.de)) {
			if (b.de.some(d => d.trim().toLowerCase() === name)) return b.code
		} else if (typeof b.de === 'string') {
			if (b.de.trim().toLowerCase() === name) return b.code
		}
		// Prüfe englische Namen
		if (Array.isArray(b.en)) {
			if (b.en.some(e => e.trim().toLowerCase() === name)) return b.code
		} else if (typeof b.en === 'string') {
			if (b.en.trim().toLowerCase() === name) return b.code
		}
	}
	return null // kein Treffer
}

