var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.display = function () {
        console.log(this.pid);
        console.log(this.pname);
        console.log(this.price);
    };
    return Product;
}());
var pr1 = new Product();
pr1.pid = 123;
pr1.pname = "sha";
pr1.price = 234.34;
pr1.display();
