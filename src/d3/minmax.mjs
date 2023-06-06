import { min, max } from 'd3-array'

function getminmax (array) {
  return {
    min: min(array),
    max: max(array)
  }
}

// let darray = [12, 45, 9, 23, 1]
// const mi = min(darray)
// const ma = max(darray)

// console.log(mi, ma)

// console.log(getminmax([1, 2, 3, 4, 5]))
export { getminmax }
