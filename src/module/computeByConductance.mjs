// Benötigt nur Standard-JS; wenn du mathjs hast, kannst du math.inv/solve verwenden.
// Hier: einfacher Gauss-Löser für reelle Matrizen.

function solveLinear(A, b) {
  const n = A.length;
  // deep copy
  const M = A.map((row, i) => row.concat(b[i]));
  // Gauss-Jordan
  for (let i = 0; i < n; i++) {
    // pivot
    let max = i;
    for (let k = i + 1; k < n; k++) if (Math.abs(M[k][i]) > Math.abs(M[max][i])) max = k;
    if (Math.abs(M[max][i]) < 1e-12) throw new Error('Singuläre Matrix');
    [M[i], M[max]] = [M[max], M[i]];
    const piv = M[i][i];
    for (let j = i; j <= n; j++) M[i][j] /= piv;
    for (let r = 0; r < n; r++) if (r !== i) {
      const fac = M[r][i];
      for (let c = i; c <= n; c++) M[r][c] -= fac * M[i][c];
    }
  }
  return M.map(row => row[n]);
}

// Netzwerk-Helper: Knoten 0 ist Referenz (Masse).
export function computeByConductance(nodesCount, resistors, voltageSources) {

  // resistors: [{n1, n2, R}]  n1,n2 integers, 0..N
  // voltageSources: [{plusNode, minusNode, V}] treat as ideal voltage between nodes;
  // for single ideal source between reference (0) and node k, we can place known node voltage.
  // This helper supports only sources where one terminal is reference (0).
  // nodesCount includes reference; we'll build for unknown nodes 1..N-1
  
  const N = nodesCount; // total nodes including ref 0
  const unknownCount = N - 1; // nodes with unknown voltage: 1..N-1
  const G = Array.from({length: unknownCount}, () => Array(unknownCount).fill(0));
  const I = Array(unknownCount).fill(0);

  // Mark nodes with fixed voltages (due to ideal source to ref)
  const fixedVoltages = {}; // node -> voltage
  (voltageSources || []).forEach(s => {
    if (s.minusNode !== 0 && s.plusNode !== 0) {
      throw new Error('Dieses einfache helper unterstützt nur Quellen gegen Referenz (node 0).');
    }
    const node = s.plusNode === 0 ? s.minusNode : s.plusNode;
    const V = s.plusNode === node ? s.V : -s.V; // ensure V at node = plusNode - minusNode
    fixedVoltages[node] = V;
  });

  // Add conductances
  for (const {n1, n2, R} of resistors) {
    const g = 1 / R;
    // four Fälle: beide unknown, eine fixed, beide fixed
    const isFixed1 = (n1 === 0) || (fixedVoltages.hasOwnProperty(n1));
    const isFixed2 = (n2 === 0) || (fixedVoltages.hasOwnProperty(n2));
    const val1 = fixedVoltages[n1] ?? 0;
    const val2 = fixedVoltages[n2] ?? 0;

    if (!isFixed1 && !isFixed2) {
      const i = n1 - 1, j = n2 - 1;
      G[i][i] += g;
      G[j][j] += g;
      G[i][j] -= g;
      G[j][i] -= g;
    } else if (!isFixed1 && isFixed2) {
      const i = n1 - 1;
      G[i][i] += g;
      I[i] += g * val2; // move known voltage to RHS
    } else if (isFixed1 && !isFixed2) {
      const j = n2 - 1;
      G[j][j] += g;
      I[j] += g * val1;
    } // else both fixed -> kein Beitrag zur Unbekanntenmatrix
  }

  // solve for unknown node voltages
  const V_unknown = solveLinear(G, I);
  const V = Array(N).fill(0);
  // node 0 is 0 (reference)
  for (let k = 1; k < N; k++) V[k] = fixedVoltages.hasOwnProperty(k) ? fixedVoltages[k] : V_unknown[k - 1];
  return V;
}

