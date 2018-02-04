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
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.arrayProducts = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        var index = this.arrayProducts.length;
        this.arrayProducts.push(item);
        console.log('Добавлен продукт ' + item.getName());
        return index;
    };
    ;
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.arrayProducts[index];
    };
    ;
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.arrayProducts.length;
    };
    ;
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        localStorage.setItem(String(localStorage.length), JSON.stringify(item));
        return localStorage.length - 1;
    };
    ;
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        return JSON.parse(localStorage.getItem(String(index)));
    };
    ;
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        return localStorage.length;
    };
    ;
    return ScalesStorageEngineLocalStorage;
}());
var Scale = /** @class */ (function () {
    function Scale() {
        this.listProducts = [];
    }
    Scale.prototype.add = function (product) {
        this.listProducts.push(product);
        console.log('Добавлен на весы продукт ', product['name']);
    };
    Scale.prototype.getSumScale = function () {
        var amountScale = 0;
        for (var i = 0; i < this.listProducts.length; i++) {
            amountScale += this.listProducts[i]['scale'];
            console.log(amountScale);
        }
        console.log('Общий вес добавленных продуктов в граммах:  ', amountScale);
        return amountScale;
    };
    Scale.prototype.getNameList = function () {
        var nameList = [];
        for (var i = 0; i < this.listProducts.length; i++) {
            nameList.push(this.listProducts[i]['name']);
        }
        console.log('Список наименований всех добавленных продуктов: ', nameList);
        return nameList;
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
/*Хранение продуктов в Array*/
var scale1 = new Scale();
var scalesStorageEngineArray1 = new ScalesStorageEngineArray();
var apple1 = new Apple("Apple ranet", 100);
var apple2 = new Apple("Apple shafran", 80);
var apple3 = new Apple("Apple antonovka", 70);
var apple4 = new Apple("Apple beliynaliv", 90);
var tomato1 = new Tomato("Tomato cherry", 50);
var tomato2 = new Tomato("Tomato akvarel", 45);
var tomato3 = new Tomato("Tomato eldorado", 60);
var tomato4 = new Tomato("Tomato skorospelka", 80);
var index0 = scalesStorageEngineArray1.addItem(apple1);
var index1 = scalesStorageEngineArray1.addItem(apple2);
var index2 = scalesStorageEngineArray1.addItem(apple3);
var index3 = scalesStorageEngineArray1.addItem(apple4);
var index4 = scalesStorageEngineArray1.addItem(tomato1);
var product1 = scalesStorageEngineArray1.getItem(index0);
var product2 = scalesStorageEngineArray1.getItem(index1);
var product3 = scalesStorageEngineArray1.getItem(index2);
var product4 = scalesStorageEngineArray1.getItem(index3);
var product5 = scalesStorageEngineArray1.getItem(index4);
scale1.add(product1);
scale1.add(product2);
scale1.add(product3);
scale1.add(product4);
scale1.add(product5);
scale1.getSumScale();
scale1.getSumScale();
scale1.getNameList();
/*Хранение продуктов в LocalStorage*/
var scale2 = new Scale();
var scalesStorageEngineLocalStorage1 = new ScalesStorageEngineLocalStorage();
var index20 = scalesStorageEngineLocalStorage1.addItem(apple1);
var index21 = scalesStorageEngineLocalStorage1.addItem(apple2);
var index22 = scalesStorageEngineLocalStorage1.addItem(apple3);
var index23 = scalesStorageEngineLocalStorage1.addItem(apple4);
var index24 = scalesStorageEngineLocalStorage1.addItem(tomato1);
var product21 = scalesStorageEngineLocalStorage1.getItem(index20);
var product22 = scalesStorageEngineLocalStorage1.getItem(index21);
var product23 = scalesStorageEngineLocalStorage1.getItem(index22);
var product24 = scalesStorageEngineLocalStorage1.getItem(index23);
var product25 = scalesStorageEngineLocalStorage1.getItem(index24);
var apple10 = new Apple(product21['name'], product21['scale']);
var apple20 = new Apple(product22['name'], product22['scale']);
var apple30 = new Apple(product23['name'], product23['scale']);
var apple40 = new Apple(product24['name'], product24['scale']);
var apple50 = new Apple(product25['name'], product25['scale']);
scale2.add(apple10);
scale2.add(apple20);
scale2.add(apple30);
scale2.add(apple40);
scale2.add(apple50);
scale2.getSumScale();
scale2.getSumScale();
scale2.getNameList();
//# sourceMappingURL=app.js.map