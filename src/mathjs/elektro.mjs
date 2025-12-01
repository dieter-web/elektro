import {Kernel} from './kernel.mjs'
import { parseValue} from '../module/utils.mjs'
// import { exec } from 'child_process'


import { create, all } from 'mathjs'
const config = {
	epsilon: 1e-12,
	matrix: 'Array',
	number: 'number',
	precision: 64,
	predictable: false,
	randomSeed: null
}

 const math = create(all, config) 

export class Elektro extends Kernel {
	constructor(allowed) {
		super()
		this.registerFormulas(allowed)
	}
	registerFormulas(allowed) {
		const definitions = {
			IQt: { expr: 'Q / t', params: ['Q', 't'] },

			IUR: { expr: 'U / R', params: ['U', 'R'] },

			III1: { expr: 'I / I1', params: ['I', 'I1'] },

			// Stromteilerregel Berechnung I1 bei gegebenen I2
			I1I2R1R2: { expr: 'I2 * (R1 / R2)', params: ['I2', 'R1', 'R2'] },

			// Stromteilerregel Berechnung I1 bei gegebenen Ig 
			I1IgR1R2: { expr: 'I * R2 / ( R1 + R2 )', params: ['I', 'R1', 'R2'] },

			IU12RiRa: { expr: 'U12 / ( Ri + Ra)', params: ['U12', 'Ri', 'Ra'] },

			Ik: { expr: 'U12 / Ri', params: ['U12', 'Ri'] },

      // Belasteter Spannungsteiler 
      I2 : { expr: 'Ia * Ra / R2', params: ['Ia', 'Ra', 'R2']},

			IρAlU: { expr: 'U * (A / (ρ * l))', params: ['U', 'A', 'ρ', 'l'] },

			ΔI: { expr: '(1 - ((1 + α20 * (δ1 - δ20)) / (1 + α20 * (δ2 - δ20)))) * 100', params: ['α20', 'δ1', 'δ20', 'δ2'] },
			QIt: { expr: 'I * t', params: ['I', 't'] },

			lρra: { expr: 'R * A / ρ', params: ['R', 'A', 'ρ'] },

			// Spannungsteiler mit Widerstandsdraht
			lU1UL: { expr: 'L * U1 / U', params: ['L', 'U', 'U1'] },
			lU2UL: { expr: 'L * (U - U1) / U', params: ['L', 'U', 'U1'] },

			lκra: { expr: 'R * A * κ', params: ['R', 'A', 'κ'] },

			lκus: { expr: '(U / S) * κ', params: ['U', 'S', 'κ'] },

			lnκus: { expr: '((U / S) * κ) / n', params: ['U', 'S', 'κ', 'n'] },

			lρus: { expr: '(U / S) / ρ', params: ['U', 'S', 'ρ'] },

			AρlR: { expr: '(l * ρ) / R', params: ['l', 'ρ', 'R'] },

			AρlUI: { expr: '(l * ρ * I)/U', params: ['l', 'ρ', 'I', 'U'] },

			κlra: { expr: 'l / (R * A)', params: ['l', 'R', 'A'] },

			κlsu: { expr: '(l * S) / U', params: ['l', 'S', 'U'] },

			Giu: { expr: 'I / U', params: ['I', 'U'] },

			GAρl: { expr: 'A / (ρ * l)', params: ['A', 'ρ', 'l'] },

			ΦRI: { expr: 'R * I', params: ['R', 'I'] },

			UIR: { expr: 'I * R', params: ['I', 'R'] },

			UIG: { expr: 'I / G', params: ['I', 'G'] },

			UUiNiNsum: { expr: '(Ui * Nsum)/Ni', params: ['Ui', 'Nsum', 'Ni'] },

			UUU1: { expr: 'U / U1', params: ['U', 'U1'] },

			Uk: { expr: 'U12 - I * Ri', params: ['U12', 'I', 'Ri'] },

			// Spannungsteiler Spannung über R2 
			U2UR1R2: { expr: 'U * (R2 / (R1 + R2))', params: ['U', 'R1', 'R2'] },

      // Unbelasteter Spannungsteiler 
      UbURbRg: { expr: 'U * (Rb/Rg)', params: ['U','Rb','Rg']},

			// Belasteter Spannungsteiler: Spannung über Ra 
			U2UR1R2Ra: { expr: 'U * (R2 * Ra) / ((R1*R2) + (Ra*(R1 + R2)))', params: ['U', 'R1', 'R2', 'Ra'] },
      U_loaded: { expr: 'U * ( Rp / ( Rt + Rp))', params: ['U','Rp','Rt']},

			// Belasteter Spannungsteiler: Ra
			RaUR1R2Ia: { expr: '( R2 / Ia ) * ( ( ( U - ( Ia * R1 ) ) / ( R1 + R2 ) ) + Ia ) - R2', params: ['U','R1','R2','Ia']},

			ρRAl: { expr: '(R * A)/ l', params: ['R', 'A', 'l'] },

			ρUlS: { expr: 'U / (l * S)', params: ['U', 'l', 'S'] },

			SUρl: { expr: 'U / (ρ * l)', params: ['U', 'ρ', 'l'] },

			SIA: { expr: 'I / A', params: ['I', 'A'] },

			δ: { expr: '(((Rδ / R20) - 1) / α20) + δ20 ', params: ['Rδ', 'R20', 'α20', 'δ20'] },

			δ0: { expr: '(1 / α20) - δ20', params: ['α20', 'δ20'] },

			δ2: { expr: '(((Rδ2 - R) / R) * (δ0 + δ1)) + δ1', params: ['Rδ2', 'R', 'δ0', 'δ1'] },

			Rδ: { expr: 'R20 * ( 1 + α20 * (δ - δ20))', params: ['R20', 'α20', 'δ', 'δ20'] },

			Rpδ1δ2: { expr: '(1 - ( (1 + α20 * (δ1 - δ20) ) / (1 + α20 * (δ2 - δ20) ) ) ) * 100', params: ['α20', 'δ1', 'δ20', 'δ2'] },

			RR1δ1δ2α20β20: { expr: 'R1 * (1 + α20 * ( δ2 - δ1 ) + β20 *(( δ2 - δ1 )*( δ2 - δ1 )))', params: ['R1', 'α20', 'β20', 'δ1', 'δ2'] },

			RρlA: { expr: 'ρ * l / A', params: ['ρ', 'l', 'A'] },

			RρnlA: { expr: 'ρ * n * l / A', params: ['ρ', 'n', 'l', 'A'] },

			RUSA: { expr: 'U / (S * A )', params: ['U', 'S', 'A'] },

			RUI: { expr: 'U / I', params: ['U', 'I'] },

			RRR1: { expr: 'R / R1', params: ['R', 'R1'] },

			R2G: { expr: '1 / R', params: ['R'] },

      // Teilung eines Rges in R1 und R2 über das Verhältnis v 
      R1v: { expr: 'R * v', params: ['R','v']},
      R2v: { expr: 'R - (R * v)', params: ['R','v']},

			// Parallelschaltung: R1*R2 / (R1 + R2)
			RgR1R2: { expr: '( R1 * R2 ) / ( R1 + R2 )', params: ['R1', 'R2'] },

			Δδρ: { expr: '1 / α20 * ((ρ / ρ1) - 1)', params: ['α20', 'ρ', 'ρ1'] },

			Δδκ: { expr: '1 / α20 * ((κ / κ1) - 1)', params: ['α20', 'κ', 'κ1'] },

			Δδ: { expr: '(κ / κ1 -1) / α20', params: ['κ', 'κ1', 'α20'] },

			α20: { expr: '( (Rδ / R20) - 1 ) * (1 / (δ - δ20) )', params: ['Rδ', 'R20', 'δ', 'δ20'] },

      // Dreieck-Stern-Transformation
      R1s: { expr: 'R2d * R3d / (R1d + R2d + R3d)', params:['R1d','R2d','R3d']},
      R2s: { expr: 'R3d * R1d / (R1d + R2d + R3d)', params:['R1d','R2d','R3d']},
      R3s: { expr: 'R1d * R2d / (R1d + R2d + R3d)', params:['R1d','R2d','R3d']},
		}

   // Kombinationen 
    definitions.ICombined = {
      expr: `(${definitions.IQt.expr}) + (${definitions.IUR.expr})`,
      params: [...new Set([...definitions.IQt.params, ...definitions.UIR.params])]
    };

		Object.entries(definitions)
			.filter(([name]) => allowed.includes(name))
			.forEach(([name, { expr, params }]) => {
				this.addFormula(name, expr, params)
			})
	}

	loadParameters(obj) {
		const allKeys = [
			'Q',
			't',
			'U', 'U1', 'U2', 'U12', 'Ui',
			'R', 'R1', 'R2', 'Rδ2', 'Rδ', 'Ri','Ra','R20','Rb','Rg','Rp','Rt',
			'I', 'I1', 'I2', 'Ia',
			'n',
			'A',
			'S',
			'G',
			'ρ', 'ρ1',
			'l',
			'L',
			'α20',
			'β20',
			'δ', 'δ1', 'δ2', 'δ20', 'δ0',
			'κ', 'κ1',
			'Nsum', 'Ni',
      'v'
    ]
		this.setParameters(obj, allKeys)
	}

	berechne(parameter, formula) {
		this.loadParameters(parameter)
		return this.runFormula(formula)
	}

	berechneMehrfach(parameter, formula) {
		return parameter.map((params, index) => {
			this.loadParameters(params)
			const result = this.runFormula(formula)
			return { index, result, params }
		})
	}

	berechneLeitwertSumme(Rarray) {
		const Garray = Rarray.map(R => this.berechne({ R }, 'R2G'))
		// Startwert als math.unit nullen(z.B. Siemens)
		const Gnull = math.unit(0, 'S')
		const Gsumme = Garray.reduce((acc, G) => math.add(acc, G), Gnull)
		const Rgesamt = math.divide(1, Gsumme)
		return { Garray, Gsumme, Rgesamt }
	}

	// Berechnung Spannungsteiler 
	/**
	 * 
	 * @param {unit} U  
	 * @param {bignummer} R1 
	 * @param {bignummer} R2 
	 * @returns {unit} U2 
	 */
	pointiometerdivider(U, R1, R2) {
		return math.multiply(U, math.divide(R2, math.add(R1, R2)));
	}

	RgesReihenschaltung(Rs) {
		return Rs.reduce((acc, key) => {
			return math.add(acc, math.unit(key))
		}, math.unit('0ohm'))
	}

	RgesParallelschaltung(Rs) {
		const inverseSum = Rs.reduce((acc, key) => {
			const resistance = math.unit(key);
			return math.add(acc, math.divide(1, resistance))
		}, math.unit('0 S'))
		return math.divide(1, inverseSum)
	}

	//
	// Belasteter Spannungsteiler
	//

	// normierte Werte
	// Ia/Iamax bzw. U2/U, v=R2/R , R = R1 + R2
	NormirteIU(iR1,iR2, iRa) {
		const R1 = parseValue(iR1)
		const R2 = parseValue(iR2)
		const Ra = iRa

		const R = R1 * R2
		const v = R2 / R
		return v / ((R / Ra) * (v - v * v) + 1)
	}

	// Berechnung Ra copilot (berechnet falsche Werte ?)
	RaBelasteterSpannungsteiler(iU, iR1, iR2, iIa) {

		const [U, R1, R2, Ia] = [iU,iR1,iR2,iIa].map(parse);
		
		// Koeffizienten der quadratischen Gleichung: a*Ra² + b*Ra + c = 0
		const a = Ia;
		const b = Ia * (R1 + R2);
		const c = -U * R2;

		// Mitternachtsformel
		const discriminant = math.pow(b, 2) - 4 * a * c;
		if (discriminant < 0) {
			console.log("Keine reale Lösung für Ra.")
		} else {
			const sqrtD = math.sqrt(discriminant);
			const Ra1 = (-b + sqrtD) / (2 * a);
			const Ra2 = (-b - sqrtD) / (2 * a);
			const Ra = Ra1 > 0 ? Ra1 : Ra2;

			return `${math.round(Ra, 3)}ohm`;
		}
	}

	// Reihenschaltung mit Spannungsquellen
	/**
	 * 
	 * @param {*} param0 
	 * @returns 
	 */
	calculateSeriesWithSources({ arrayR, arrayU }) {
		const N = arrayR.length;
		const size = N - 1;

		// Werte anpassen: alles als Zahl (Ohm)
		const array_r = arrayR.map(r => parseValue(r));

		// Leitwerte als Zahl (S)
		const g = array_r.map(r => 1 / r);

		// Leitwertmatrix G
		const G = Array.from({ length: size }, (_, i) =>
			Array.from({ length: size }, (_, j) =>
				(i === j ? g[i] + g[i + 1] : (Math.abs(i - j) === 1 ? -g[Math.max(i, j)] : 0))
			)
		);

		// Injektionsvektor b
		const b = Array(size).fill(0);

		// Quellenbeiträge addieren
		for (const U of arrayU) {
			const voltage = parseValue(U.voltage);
			if (U.position === 0) b[0] += g[0] * voltage;
			else if (U.position === size) b[size - 1] -= g[N - 1] * voltage;
			else {
				b[U.position - 1] -= g[U.position] * voltage;
				b[U.position] += g[U.position] * voltage;
			}
		}

		// Lösen
		const Vnums = math.lusolve(G, b).flat();

		// Knotenspannungen: Startknoten 0V, dann berechnete, dann Endknoten 0V
		const voltages = [0, ...Vnums, 0];

		// Ströme
		const currents = array_r.map((r, i) => (voltages[i] - voltages[i + 1]) / r);

		return {
			currents: currents.map(i => math.unit(i, 'A')),
			voltages: voltages.map(v => math.unit(v, 'V'))
		};
	}
  //
  // numerische Lösung für R2 in einem belastetem Spannungsteiler
  //
  
  f(R2) {
    return 142.875 - ( 100 - R2) - (18 * R2) / (R2 + 18);
  }


  // Berechnung nach den Regeln der Stromverzweigung
  // R1: vom Strom nicht durchflossen 
  // R2: Summe aller Widerstände der Stromverzweigung 
  // Ig: Gesamtstrom
  stromverzweigung(Ig,R1,R2) {
     return math.unit(math.multiply(Ig, math.divide(R1,R2)));
  }


  // Energiekosten 
  computeCostPerKwh(params) {
    const {
      lampsCount,
      lampWatt,
      motorsCount,
      motorMechKW,
      motorEff,
      hoursPerDay,
      workDays,
      annualCostEUR
    } = params;

    const A = simultG * loadB;
    const pLampskW = (lampsCount * lampWatt) / 1000 * simultG;
    const pMotorsElkW = (motorsCount * motorMechkW) / motorEff
    const pMotorsAvgkW = pMotorsElkW * A;
    const pSmallkW = smallkW * simultG
    const eOven16kWh = ovenMJ / 3.6
    const pOvenkW = eOven16kWh / 16

    const pTotalkW = pLampskW + pMotorsAvgkW + pSmallkW + pOvenkW
    const tYearH   = hoursPerDay * workDays
    const eYearkWh = pTotalkW * tYearH 
    const costPerkWh = annualCostEUR / eVarkWh

    return {
      plamskW, pMotorsElkW, pMotorsAvgkW, pSmallkW, pOvenkW, pTotalkW, eYearkWh, costPerkWh
    };
  }

  // Numerische Lösung mit Newton-Raphson oder einfacher Iteration 
  /*
  solveR2(start=50, tol=1e-6, maxIter = 100) {
    let R2 = start;
    for(let i = 0; i < maxIter; i++) {
      const fval = f(R2);
      const df = (f(R2 + 1e-6) - f(R2 - 1e-6)) / (2e-6); // Numerische Ableitung 
      const next = R2 - fval / df;
      if(Math.abs(next - R2) < tol) {
        return math.round(next,4);
      }
      R2 = next;
    }
    throw new Error('Keine Konvergenz erreicht');
  }
  const R2 = solveR2();
  console.log('Berechneter Wert für R2:', R2,'ohm');
  */

/**
 * Berechnet den Gesamtwiderstand aus einer Liste von Werten.
 * Gibt ein math.js Unit-Objekt mit Einheit "ohm" zurück.
 * @param {number[]} resistors - Liste von Widerstandswerten in Ohm
 * @returns {Promise<math.Unit>} - z. B. 54.5 ohm
 

  calculateParallelResistance(resistors) {
  const cmd = `./../ghc/resistors ${resistors.join(' ')}`;

  return new Promise((resolve, reject) => {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        reject(new Error(stderr || err.message));
        return;
      }

      try {
        const output = JSON.parse(stdout);
        const value = parseFloat(output.result); // z. B. "54.5 Ω"
        const result = math.unit(value, 'ohm');
        resolve(result);
      } catch (e) {
        reject(new Error('Ungültige JSON-Ausgabe: ' + stdout));
      }
    });
  });
}
*/
}
