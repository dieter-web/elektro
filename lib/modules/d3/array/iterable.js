import { map, filter, every, some, reduce, reverse, sort } from 'd3-array';
let data = [[{
  name: 'W1',
  l: '3km',
  d: '0.5 mm'
}, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(map(new Set(data), x => x[0]));
console.log(map(new Set(data), x => x[1]));
console.log(map(new Set(data), x => x[2]));
console.log('---');
console.log(filter(new Set([0, 2, 3, 4]), x => x & 0x11));
console.log(filter(new Set([0, 2, 3, 4]), x => x & 3));
console.log(filter(new Set([0, 2, 3, 4]), x => x & 4));
console.log(filter(new Set([0, 2, 3, 4]), x => x & 5));
console.log('---');
console.log(every(new Set([1, 3, 5, 7]), x => x & 1));
console.log('---');
console.log(some(new Set([0, 2, 3, 4]), x => x & 1));
console.log('---');
console.log(reduce(new Set([0, 2, 3, 4]), (p, v) => p + v, 0));