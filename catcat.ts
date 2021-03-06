class CatCat {
  constructor(app) {
    const { postHook, getHook } = require('./providers/facebook/hook')

    // Accepts POST requests at /webhook endpoint
    app.post('/webhook', postHook)

    // Accepts GET requests at the /webhook endpoint
    app.get('/webhook', getHook)
  }
}

module.exports = CatCat
