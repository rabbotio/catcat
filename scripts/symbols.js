require('isomorphic-fetch')
fetch('https://min-api.cryptocompare.com/data/all/coinlist').then(data => data.json()).then(json => {
  require('fs').writeFileSync('coinlist.json', JSON.stringify(Object.keys(json.Data)))
})
