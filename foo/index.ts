// Pre
require('../lib/pre')

// Init server
const { app } = new (require('../lib/WTServer'))()
app.get('/', (req, res) => res.send('Hi!'))

// Start app
const foo = new (require('./foo'))(app)

// Start server
module.exports = require('webtask-tools').fromExpress(app)
