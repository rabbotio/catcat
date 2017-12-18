// Pre
require('./lib/pre')

// Init server
const { app } = new (require('./lib/WTServer'))()
app.get('/', (req, res) => res.send('Hi!'))

// Start app
const _CatCat = require('./catcat')
const catcat = new _CatCat(app)

// Start server
module.exports = require('webtask-tools').fromExpress(app)
