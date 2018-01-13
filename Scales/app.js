var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Scale = /** @class */ (function () {
    function Scale(typeScale) {
        this.typeScale = typeScale;
        this.type = typeScale;
        this.amountScale = 0;
        this.listProducts = [];
    }
    Scale.prototype.add = function (product) {
        this.listProducts.push(product);
        console.log('Добавлен на весы продукт ' + product.getName());
    };
    Scale.prototype.getSumScale = function () {
        for (var i = 0; i < this.listProducts.length; i++) {
            this.amountScale += this.listProducts[i].getScale();
        }
        console.log('Общий вес добавленных продуктов в граммах:  ' + this.amountScale + ', использовались весы типа ' + this.type);
    };
    Scale.prototype.getNameList = function () {
        var nameList = [];
        for (var i = 0; i < this.listProducts.length; i++) {
            nameList.push(this.listProducts[i].getName());
        }
        console.log('Список наименований всех добавленных продуктов: ' + nameList);
    };
    return Scale;
}());
var Products = /** @class */ (function () {
    function Products(nameProduct, scaleProduct) {
        this.name = nameProduct;
        this.scale = scaleProduct;
    }
    Products.prototype.getScale = function () {
        return this.scale;
    };
    Products.prototype.getName = function () {
        return this.name;
    };
    Products.prototype.show = function () {
        console.log(this.name + " has " + " " + "scale = " + this.scale);
    };
    return Products;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(name, scale) {
        return _super.call(this, name, scale) || this;
    }
    return Apple;
}(Products));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(name, scale) {
        return _super.call(this, name, scale) || this;
    }
    return Tomato;
}(Products));
var apple1 = new Apple("Apple ranet", 100);
var apple2 = new Apple("Apple shafran", 80);
var apple3 = new Apple("Apple antonovka", 70);
var apple4 = new Apple("Apple beliynaliv", 90);
var tomato1 = new Tomato("Tomato cherry", 50);
var tomato2 = new Tomato("Tomato akvarel", 45);
var tomato3 = new Tomato("Tomato eldorado", 60);
var tomato4 = new Tomato("Tomato skorospelka", 80);
var scale1 = new Scale('electronic');
scale1.add(apple2);
scale1.add(apple3);
scale1.add(apple4);
scale1.add(tomato1);
scale1.add(tomato2);
scale1.add(tomato3);
scale1.add(tomato4);
scale1.getSumScale();
scale1.getNameList();
var scale2 = new Scale('mechanical');
scale2.add(apple2);
scale2.add(apple3);
// scale2.add(apple4);     // добавим на механические весы чуть меньше продуктов
// scale2.add(tomato1);
// scale2.add(tomato2);
scale2.add(tomato3);
scale2.add(tomato4);
scale2.getSumScale();
scale2.getNameList();
apple1.show();
tomato4.show();
//# sourceMappingURL=app.js.map