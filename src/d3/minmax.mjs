import { min, max } from 'd3-array'

function getminmax (array) {
  return {
    min: min(array),
    max: max(array)
  }
}

export { getminmax }
