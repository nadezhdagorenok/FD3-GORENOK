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
var Apple = /** @class */ (function () {
    function Apple(name, scale) {
        this.name = name;
        this.scale = scale;
    }
    Apple.prototype.getScale = function () {
        return this.scale;
    };
    Apple.prototype.getName = function () {
        return this.name;
    };
    Apple.prototype.show = function () {
        console.log("apple" + this.name + " has " + " " + "scale = " + this.scale);
    };
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato(name, scale) {
        this.name = name;
        this.scale = scale;
    }
    Tomato.prototype.getScale = function () {
        return this.scale;
    };
    Tomato.prototype.getName = function () {
        return this.name;
    };
    Tomato.prototype.show = function () {
        console.log("apple" + this.name + " has " + " " +
            +"scale = " + this.scale);
    };
    return Tomato;
}());
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
//# sourceMappingURL=app.js.map