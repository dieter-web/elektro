import { create, all } from 'mathjs'
const config = {
	epsilon: 1e-12,
	matrix: 'Array',
	number: 'number',
	precision: 64,
	predictable: false,
	randomSeed: null
}

// import { parseValue } from '../module/utils.mjs'

const math = create(all, config) 
// const fmt = (val,unitStr) => math.format(math.unit(val,unitStr).toNumber(unitStr),{notation:'fixed',precison:6});

export class Kernel {
	constructor() {
		this.params = {}
		this.formulas = {}
	}

	setParameters(obj, allowedKeys) {
		this.params = {};
		allowedKeys.forEach(key => {
			if (obj[key] != undefined) {
				this.params[key] = math.unit(obj[key])
			}
		})
	}

	formatResult(result, digits = 3) {
		if (!result) return 'Fehler'
		return result.format ? result.format({ notation: 'fixed', precision: digits }) : result.toString()
	}

	addFormula(name, expression, requiredParams) {
		this.formulas[name] = { expression, requiredParams }
	}

	runFormula(name) {
		const formula = this.formulas[name]
		if (!formula) return null
		if (!this.validateParams(formula.requiredParams)) return null
		return this.evaluate(formula.expression)
	}

	runCustomFormula(expression, paramObj) {
		try {
			const compiled = math.parse(expression).compile();
			const result = compiled.evaluate(paramObj);
			return math.unit(result); // Optional: .toSI()
		} catch (err) {
			console.log('Fehler bei Formel:', err);
			return null;
		}
	}

	evaluate(expression) {
		try {
			return math.unit(math.parse(expression).compile().evaluate(this.params))
		} catch (err) {
			console.error('Berechnungsfehler:', err)
			return null
		}
	}

  evaluate_gruppe(definition, values) {
  const scope = {};
  for (const param of definition.params) {
    if (!(param in values)) {
      throw new Error(`Missing value for parameter: ${param}`);
    }
    scope[param] = math.unit(values[param]);
  }
  return math.evaluate(definition.expr, scope);
}

	validateParams(requiredKeys) {
		return requiredKeys.every(key => this.params[key] != null && this.params[key] !== undefined)
	}

	getResultString(name, digits = 3) {
		const result = this.runFormula(name)
		return this.formatResult(result, digits)
	}

  // Umwandlung Number in Unit
  Num2Unit(num, unit) {
    return math.unit(num,unit);
  }

 // Rechnen mit Einheiten 
 berechnenEinheit(einheit) {
   return math.evaluate(einheit).toString();
 }

 umrechnenEinheiten(von,zu) {
   return math.evaluate(`${von} to ${zu}`);
 }

 dimensionsanalyse() {
    // TODO: schreiben
 }

}

/*
	### 5. **Mehrsprachigkeit**
Lagere Formelnamen und Beschreibungen in ein Objekt aus, um Mehrsprachigkeit zu ermöglichen.

---

### 6. **Unit-Tests**
Erstelle Unit-Tests für alle Kernmethoden, um die Zuverlässigkeit zu erhöhen.

---

### 7. **Fehler- und Logging-Verbesserung**
Füge ein optionales Logging-Callback hinzu, das Fehler und Berechnungen dokumentiert.

---

### 8. **Asynchrone Unterstützung**
Falls du später externe Datenquellen oder Services einbinden willst, kannst du die Methoden optional asynchron gestalten.
*/
