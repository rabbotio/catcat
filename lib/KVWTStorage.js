var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var KVWTStorage = /** @class */ (function () {
    function KVWTStorage(wtStorage) {
        this._wtStorage = null;
        this._wtStorage = wtStorage;
    }
    KVWTStorage.prototype.getItem = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._wtStorage.get(function (err, data) {
                            if (err)
                                return reject(err);
                            return data ? resolve(data[key]) : null;
                        });
                    })];
            });
        });
    };
    KVWTStorage.prototype.setItem = function (key, value) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // Use call back to prevent async race condition
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._wtStorage.get(function (err, data) {
                            if (err)
                                return reject(err);
                            // { '123': {senderId, commands} }
                            data = data || {};
                            // {senderId, commands}
                            data[key] = data[key] || {};
                            Object.assign(data[key], value);
                            _this._wtStorage.set(data, function (err) {
                                if (err)
                                    return reject(err);
                                return resolve(data);
                            });
                        });
                    })];
            });
        });
    };
    return KVWTStorage;
}());
module.exports = KVWTStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS1ZXVFN0b3JhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJLVldUU3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBR0UscUJBQVksU0FBUztRQUZyQixlQUFVLEdBQUcsSUFBSSxDQUFBO1FBR2YsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUE7SUFDN0IsQ0FBQztJQUVLLDZCQUFPLEdBQWIsVUFBYyxHQUFHOzs7O2dCQUNmLHNCQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07d0JBQ2pDLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBRyxFQUFFLElBQUk7NEJBQzVCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBOzRCQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTt3QkFDekMsQ0FBQyxDQUFDLENBQUE7b0JBQ0osQ0FBQyxDQUFDLEVBQUE7OztLQUNIO0lBRUssNkJBQU8sR0FBYixVQUFjLEdBQUcsRUFBRSxLQUFLOzs7O2dCQUN0QixnREFBZ0Q7Z0JBQ2hELHNCQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07d0JBQ2pDLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBRyxFQUFFLElBQUk7NEJBQzVCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBOzRCQUUzQixrQ0FBa0M7NEJBQ2xDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFBOzRCQUNqQix1QkFBdUI7NEJBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFBOzRCQUMzQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQTs0QkFFL0IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFVBQUMsR0FBRztnQ0FDNUIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDO29DQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7Z0NBQzNCLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7NEJBQ3RCLENBQUMsQ0FBQyxDQUFBO3dCQUNKLENBQUMsQ0FBQyxDQUFBO29CQUNKLENBQUMsQ0FBQyxFQUFBOzs7S0FDSDtJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQW5DRCxJQW1DQztBQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgS1ZXVFN0b3JhZ2Uge1xuICBfd3RTdG9yYWdlID0gbnVsbFxuXG4gIGNvbnN0cnVjdG9yKHd0U3RvcmFnZSkge1xuICAgIHRoaXMuX3d0U3RvcmFnZSA9IHd0U3RvcmFnZVxuICB9XG5cbiAgYXN5bmMgZ2V0SXRlbShrZXkpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fd3RTdG9yYWdlLmdldCgoZXJyLCBkYXRhKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHJldHVybiByZWplY3QoZXJyKVxuICAgICAgICByZXR1cm4gZGF0YSA/IHJlc29sdmUoZGF0YVtrZXldKSA6IG51bGxcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIHNldEl0ZW0oa2V5LCB2YWx1ZSkge1xuICAgIC8vIFVzZSBjYWxsIGJhY2sgdG8gcHJldmVudCBhc3luYyByYWNlIGNvbmRpdGlvblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl93dFN0b3JhZ2UuZ2V0KChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlamVjdChlcnIpXG5cbiAgICAgICAgLy8geyAnMTIzJzoge3NlbmRlcklkLCBjb21tYW5kc30gfVxuICAgICAgICBkYXRhID0gZGF0YSB8fCB7fVxuICAgICAgICAvLyB7c2VuZGVySWQsIGNvbW1hbmRzfVxuICAgICAgICBkYXRhW2tleV0gPSBkYXRhW2tleV0gfHwge31cbiAgICAgICAgT2JqZWN0LmFzc2lnbihkYXRhW2tleV0sIHZhbHVlKVxuXG4gICAgICAgIHRoaXMuX3d0U3RvcmFnZS5zZXQoZGF0YSwgKGVycikgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHJldHVybiByZWplY3QoZXJyKVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKGRhdGEpXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBLVldUU3RvcmFnZVxuIl19