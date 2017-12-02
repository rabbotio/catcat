const API = `https://min-api.cryptocompare.com/data`

const getPrice = (req, res) => {
  const method = 'price'
  let { fsym, tsyms } = req.query

  // Upper case
  fsym = fsym.trim().toUpperCase()
  tsyms = tsyms.trim().toUpperCase()

  const { getJSON } = require('../../fetcher')
  getJSON(`${API}/${method}`,
    {
      fsym, tsyms
    })
    .then(json =>
      res.send({
        messages: [
          { text: `1 ${fsym} = ${json[tsyms]} ${tsyms}` }
        ]
      })
    )
    .catch((err) => res.send(err.message))
}


module.exports = { getPrice }