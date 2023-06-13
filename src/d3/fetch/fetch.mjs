import { csv } from 'd3-fetch'

// TypeError: Failed to parse URL from /src/d3/fetch/file.csv
csv('./file.csv').then(data => {
  console.log(data)
})
