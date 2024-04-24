"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BarkRecognizer = /** @class */ (function () {
    function BarkRecognizer(door) {
        this._door = door;
    }
    BarkRecognizer.prototype.recognize = function (bark) {
        console.log('Listening...');
        for (var _i = 0, _a = this.getDoor().getAllowedBarks(); _i < _a.length; _i++) {
            var allowedBark = _a[_i];
            if (!allowedBark.equals(bark))
                continue;
            this.getDoor().open();
        }
    };
    BarkRecognizer.prototype.getDoor = function () {
        return this._door;
    };
    return BarkRecognizer;
}());
exports.default = BarkRecognizer;
