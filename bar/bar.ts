class Bar {
  constructor(app) {
    // Price
    const { getPrice } = require('./model/prices')
    app.get('/price', getPrice)
  }
}

module.exports = Bar
