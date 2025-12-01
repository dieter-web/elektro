import { Kernel } from './kernel.mjs'

export class Rohrleitungstechnik extends Kernel {

	constructor(allowed) {
		super()
		this.registerFormulas(allowed)
	}

	registerFormulas(allowed) {
		const definitions = {
			lAρG: { expr: 'A / (ρ * G)', params: ['A', 'G', 'ρ'] }
		}

		Object.entries(definitions)
			.filter(([name]) => allowed.includes(name))
			.forEach(([name, { expr, params }]) => {
				this.addFormula(name, expr, params)
			})
	}

	loadParameters(obj) {
		const allKeys = ['A', 'G', 'ρ']
		this.setParameters(obj, allKeys)
	}

	berechne(parameter, formula) {
		this.loadParameters(parameter)
		return this.runFormula(formula)
	}
}
