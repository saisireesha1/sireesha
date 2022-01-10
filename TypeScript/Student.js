"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(i, n, s) {
        this.stdID = 123;
        this.stdName = "sireesha";
        this.stdCourse = "B.Tech";
        this.stdID = i;
        this.stdName = n;
        this.stdCourse = s;
    }
    Student.prototype.display = function () {
        console.log(this.stdID);
        console.log(this.stdName);
        console.log(this.stdCourse);
    };
    return Student;
}());
exports.Student = Student;
var e1 = new Student(124, "sireesha k", "B.Tech(CSE)");
var e2 = new Student(135, "Leela k", "BSC(MPCs)");
e1.display();
e2.display();
