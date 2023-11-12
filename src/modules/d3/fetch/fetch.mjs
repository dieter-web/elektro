import {
  json,
  csv,
  text
  // blob,
  // buffer,
  // dsv,
  // html,
  // image,
  // svg,
  // tsv,
  // xml
} from 'd3-fetch'
// TypeError: Failed to parse URL from /src/d3/fetch/file.csv

json('http://localhost:8000/json/example/aufgabe11.json').then(data => {
  console.log(data)
})

csv('http://localhost:8000/csv/file.csv').then(data => {
  console.log(data)
})

text('http://localhost:8000/txt/test.txt').then(data => {
  console.log(data)
})

// html('http://localhost:8000/html/test.html').then(data => {
//   console.log(data)
// })
