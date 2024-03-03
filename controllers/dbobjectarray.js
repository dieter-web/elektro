use - strict;

/**
 * @description
 * z.B. let oa = [
 * {name:'n1', value: 'v1}
 * {name:'n1', value: 'v1}
 * ]
 * @author Dieter Krause
 * @date 03/03/2024
 * @param {*} OA Object Array
 * @param {*} index
 * @returns {*}
 * z.B. getIndexOA(OA,index).name);
 * z.B. getIndexOA(OA,index).value);
 */
function getIndexOA(OA, index) {
  return Array.prototype.at.call(OA, index);
}
