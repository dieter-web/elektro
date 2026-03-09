import { Kernel } from './kernel.mjs'

export class Planemetrie extends Kernel {
	constructor(allowed) {
		super()
		this.registerFormulas(allowed)
	}

	registerFormulas(allowed) {
		const definitions = {
			l: { expr: 'N * 2 * ( a + b )', params: ['N', 'a', 'b'] },
			//Kreis
			KAd: { expr: '(PI / 4) * pow(d,2)', params: ['d'] },
			KdA: { expr: 'sqrt( 4 / PI * A)', params: ['A'] },
			KUd: { expr: 'PI * d', params: ['d'] },
			//Kreisring
			KRADd: { expr: '(PI / 4) * ( pow(D,2) - pow(d,2))', params: ['D', 'd'] },
			KRR: { expr: '((PI * Ra * Ra) / 2)', params: ['Ra'] },
			KRArmRr: { expr: '(2 * PI * rm * (R - r))', params: ['rm', 'R', 'r'] },
			KRd: { expr: 'D-2*s', params: ['D', 's'] },
			Kdm: { expr: '(D+d)/2', params: ['D', 'd'] },
			KA: { expr: 'Aa - Ai', params: ['Aa', 'Ai'] },

			KAuA: { expr: '(pow(r,2) * PI * α) / w360', params: ['r', 'α', 'w360'] },
			KAub: { expr: '(d * PI * α) / w360', params: ['d', 'α', 'w360'] },
			KAbA: { expr: '(pow(r,2) * PI * α) / w360 - (s * (r - h)) / 2', params: ['r', 'α', 's', 'r', 'h'] },
			ElA: { expr: 'D * d * PI / 4', params: ['D', 'd'] },
			ElU: { expr: '(D + d) /2 * PI', params: ['D', 'd'] },
			// Quadrat
			QUa: { expr: '4 * l', params: ['l'] },
			QAa: { expr: 'l * l', params: ['l'] },
			QEa: { expr: 'l * sqrt(2)', params: ['l'] },
			// Rechteck
			RDab: { expr: 'sqrt(pow(g,2) + pow(h,2))', params: ['g', 'h'] },
			RAgh: { expr: 'g * h', params: ['g', 'h'] },
			RUgh: { expr: '2 * ( g + h)', params: ['g', 'h'] },
			// Parallelogram
			PaA: { expr: 'g * h', params: ['g', 'h'] },
			PaU: { expr: '2 * ( g + s)', params: ['g', 's'] },
			// Rombus
			RoA: { expr: 'l * h', params: ['l', 'h'] },
			RoU: { expr: '4 * l', params: ['l'] },
			// 
			TrA: { expr: '(l1 + l2) / 2 * h', params: ['l1', 'l2', 'h'] },
			TrU: { expr: 'l1 + l2 + s1 + s2', params: ['l1', 'l2', 's1', 's2'] },
			// Dreieck
			DrA: { expr: '(g * h) / 2', params: ['g', 'h'] },
			DrU: { expr: 'a + b + g', params: ['a', 'b', 'g'] }
		}

		Object.entries(definitions)
			.filter(([name]) => allowed.includes(name))
			.forEach(([name, { expr, params }]) => {
				this.addFormula(name, expr, params)
			})
	}

	loadParameters(obj) {
		const allKeys = [
			'd',
			'A', 'Aa', 'Ai',
			'D',
			'rm',
			'R',
			'r',
			'α',
			'w360',
			's',
			'h',
			'l', 'l1', 'l2',
			'g',
			'h',
			's', 's1', 's2',
			'a',
			'b',
			'N'
		]
		this.setParameters(obj, allKeys)
	}

	berechne(parameter, formula) {
		this.loadParameters(parameter)
		return this.runFormula(formula)
	}
}


