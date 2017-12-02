class Bar {
  constructor(app) {
    // Price
    const getMethod = (method, fsym, tsyms) => `https://min-api.cryptocompare.com/data/${method}?fsym=${fsym}&tsyms=${tsyms}`

    app.get('/price', (req, res) => {
      const method = 'price'
      let { fsym, tsyms } = req.query

      // Upper case
      fsym = fsym.trim().toUpperCase()
      tsyms = tsyms.trim().toUpperCase()

      fetch(getMethod(method, fsym, tsyms))
        .then(data => data.json())
        .then(json =>
          res.send({
            messages: [
              { text: `1 ${fsym} = ${json[tsyms]} ${tsyms}` }
            ]
          })
        )
        .catch((err) => res.send(err.message))
    })
  }
}

module.exports = Bar
