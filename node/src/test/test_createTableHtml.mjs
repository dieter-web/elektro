const results= [
 { v:0, Ra: 1, R1:2, R2: 3, R2_parallel: 4, R_total: 5, Ua: 6, Ia: 7, I2:8},
 { v:20, Ra: 21, R1:22, R2: 23, R2_parallel: 24, R_total:25, Ua: 26, Ia: 27, I2:28},
 { v:30, Ra: 31, R1:32, R2: 33, R2_parallel: 34, R_total: 35, Ua: 36, Ia: 37, I2:38},
 { v:40, Ra: 41, R1:42, R2: 43, R2_parallel: 44, R_total: 45, Ua: 46, Ia: 47, I2:48},
 { v:50, Ra: 51, R1:52, R2: 53, R2_parallel: 54, R_total: 55, Ua: 56, Ia: 57, I2:58},
 { v:60, Ra: 61, R1:62, R2: 63, R2_parallel: 64, R_total: 65, Ua: 66, Ia: 67, I2:68},
 { v:70, Ra: 71, R1:72, R2: 73, R2_parallel: 74, R_total: 75, Ua: 76, Ia: 77, I2:78},

]

let param = [];

results.map( result => {
  param.push( 
    {
       Kennzeichnung: {Art: 'A', Id: '1'},
       Parameter: {
         v: result.v,
         Ra: result.Ra,
         R1: result.R1,
         R2: result.R2,
         R2_parallel: result.R2_parallel,
         R_total: result.R_total,
         Ua: result.Ua,
       },
       Eigenschaften: '',
       Berechnung: {
         'Ia': result.Ia,
         'I2': result.I2
       }
     }
  )
})

const  erg  =  {
  'parameter' : param
}

function createTableHtml(erg) {
 if(!erg || !erg.parameter || erg.parameter.length === 0) {
   return '';
 }

 const data = erg.parameter;
 // Kopfzeile für Kennzeichnung, Parameter, Eigenschaften, Berechnung  
 const keys = Object.keys(data[0]).filter(key => Object.keys(data[0][key] || {}).length > 0);

  const subKeys = keys.flatMap(key => Object.keys(data[0][key] || {}));

 const head = [];
  for(const key of keys) {
    const len = Object.keys(data[0][key]).length;
      head.push(key, ...Array(Math.max(len - 1, 0)).fill(""));
  }
  const head1 = subKeys[0];

  let html = `
  <table>
  <tr>${head.map(cell => `<th>${cell}</th>`).join('')}</tr>
  <tr>${head1.map(cell => `<th>${cell}</th>`).join('')}</tr>
  ${subKeys.map(row => 
     row.map(rowObj =>
  `
  <tr>



  </tr>`).join(''))}
  
  </table>`

  return html;

}

console.log('Tabelle',createTableHtml(erg))

