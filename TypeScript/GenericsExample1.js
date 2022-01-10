function getArray12(items) {
    return new Array().concat(items);
}
var myNumArr12 = getArray12([100, 200, 300]);
var myStrArr12 = getArray12(["Hello", "World"]);
myNumArr12.push(400);
myStrArr12.push("Hello TyepScript");
myNumArr12.push("Hi");
myStrArr12.push(500);
console.log(myNumArr12);
console.log(myStrArr12);
