export default class Componente {
	constructor(data) {
		this.eigenschaften = data[0]
		this.kennzeichnung = data[1]
		this.parameter = data[2]
		this.typ = data[3]
		this.berechnung = {}
		this.chart = {}
	}
}

