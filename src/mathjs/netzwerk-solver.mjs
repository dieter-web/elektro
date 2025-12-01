// netzwerk-solver.mjs

import { create, all } from "mathjs";
const config = {
  epsilon: 1e-12,
  matrix: "Array",
  number: "number",
  precision: 64,
  predictable: false,
  randomSeed: null,
};

const math = create(all, config);

// Helper: Leitwert aus Widerstand (ohm) -> Siemens (number)
/**
 *
 * @param {string} R
 * @returns {unit} Leitwert
 */
function G2R(R) {
  return math.divide(1, math.unit(R));
}

/*
 Netzbeschreibung:
 - nodes: array of node names, one node must be '0' for ground or you provide groundIndex
 - branches: [{n1: index, n2: index_or_null_for_ground, R: ohm, type?: 'R'|'V'|'I', value?: value}]
   For now we handle only resistors and independent current sources.
   For voltage sources not referenced to ground, use extended methods (not shown).
*/

// TEST
console.log(G2R("34.54ohm").toString());
