"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point() {
        this.num1 = 0;
        this.num2 = 0;
    }
    Point.prototype.Sum = function () {
        return this.num1 + this.num2;
    };
    return Point;
}());
exports.Point = Point;
