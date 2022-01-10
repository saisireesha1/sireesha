"use strict";
exports.__esModule = true;
exports.Car = void 0;
/*7) Create a super class called Car.  The Car class has the following fields and methods.
a. Number speed;
b. number regularPrice;
c. String color;
d. Number getSalePrice();*/
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.getSalePrice = function () {
        console.log(this.regularPrice);
    };
    Car.prototype.display = function () {
        console.log(this.speed);
        console.log(this.regularPrice);
        console.log(this.color);
    };
    return Car;
}());
exports.Car = Car;
