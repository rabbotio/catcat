// Pre
require('../lib/pre')

// Init server
const { app } = new (require('../lib/WTServer'))()

// Start app
const bar = new (require('./bar'))(app)

// Start server
module.exports = require('webtask-tools').fromExpress(app)
