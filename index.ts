// Pre
require('./lib/pre')

// Init server
const { app } = new (require('./lib/WTServer'))()
app.get('/', (req, res) => res.send('Hi!'))

// Start app
require('./catcat')(app)

// Start server
module.exports = require('webtask-tools').fromExpress(app)
