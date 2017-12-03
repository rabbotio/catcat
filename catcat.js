var CatCat = /** @class */ (function () {
    function CatCat(app) {
        var _a = require('./facebook/hook'), postHook = _a.postHook, getHook = _a.getHook;
        // Accepts POST requests at /webhook endpoint
        app.post('/webhook', postHook);
        // Accepts GET requests at the /webhook endpoint
        app.get('/webhook', getHook);
    }
    return CatCat;
}());
module.exports = CatCat;
