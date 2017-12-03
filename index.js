// Pre
require('./lib/pre');
// Init server
var app = new (require('./lib/WTServer'))().app;
app.get('/', function (req, res) { return res.send('Hi!'); });
// Start app
require('./catcat')(app);
// Start server
module.exports = require('webtask-tools').fromExpress(app);
