import {Kernel} from'./kernel.mjs'


export class Arithmetik extends Kernel {
	constructor(allowed) {
		super();
		this.registerFormulas(allowed)
	}

	registerFormulas(allowed) {
		const definitions = {
			add: { expr: 'a + b', params: ['a', 'b'] },
			sub: { expr: 'a - b', params: ['a', 'b'] },
			mul: { expr: 'a * b', params: ['a', 'b'] },
			div: { expr: 'a / b', params: ['a', 'b'] },
			Prozentwert: { expr: '(p * G) / 100', params: ['p', 'G'] },
			Prozentsatz: { expr: '(P * 100) / G', params: ['P', 'G'] },
			Grundwert: { expr: '(P * p) / 100', params: ['P', 'p'] },
			Grundwertp: { expr: 'G * (1 + p / 100)', params: ['G', 'p'] },

      // Quadratische Gleichungen 
      pBA: { expr: 'B / A', params: ['A','B']},
      qCA: { expr: 'C / A', params: ['A','C']},
      Dpq: { expr: '(p/2)^2 - q', params: ['p','q']}
		}

		Object.entries(definitions)
			.filter(([name]) => allowed.includes(name))
			.forEach(([name, { expr, params }]) => {
				this.addFormula(name, expr, params)
			})
	}

	loadParameters(obj) {
		const allKeys = [
			'a',
			'b',
			'P', // Prozentwert
			'p', // Prozentsatz 
			'G', // Grundwert
      'A', // Quadratische Gleichung  Ax^2 + Bx + C = 0
      'B',
      'C',
      'p', // p = B/A
      'q', // q = C/A 
    ]
		this.setParameters(obj, allKeys)
	}

	berechne(parameter, formula) {
		this.loadParameters(parameter)
		return this.runFormula(formula)
	}

  // Quadratische Gleichung 
  solveQuadratic(p,q) {
    const halfP = math.divide(p,2);
    const neghalfP = math.multiply(halfP,-1);
    const D = math.subtract(math.pow(halfP,2),q);
    const sqrtD = math.sqrt(D);
    const x1 = math.subtract(neghalfP, sqrtD);
    const x2 = math.add(neghalfP, sqrtD);

    if(math.equal(D,0)){
      return x1; // Doppelte reelle Lösung 
    } else if(math.larger(D,0)){
      return {x1,x2} // Zwei reelle Lösungen 
    } else {
      return {x1, x2} // Zwei komplexe Lösungen
    }
  }
}


