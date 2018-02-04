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
        console.log('Добавлен продукт в Array: ' + item.getName());
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
        console.log('Добавлен продукт в LocalStorage: ' + item.getName());
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
    function Scale(mechanismStorage) {
        this.mechanismStorage = mechanismStorage;
    }
    ;
    Scale.prototype.add = function (item) {
        this.mechanismStorage.addItem(item);
        console.log('Добавлен на весы продукт: ', item.getName());
        console.log('продукт ', item);
    };
    Scale.prototype.getSumScale = function () {
        var amountScale = 0;
        for (var i = 0; i < this.mechanismStorage.getCount(); i++) {
            amountScale += this.mechanismStorage.getItem(i)['scale'];
            console.log(amountScale);
        }
        console.log('Общий вес добавленных продуктов в граммах:  ', amountScale);
        return amountScale;
    };
    Scale.prototype.getNameList = function () {
        var nameList = [];
        for (var i = 0; i < this.mechanismStorage.getCount(); i++) {
            nameList.push(this.mechanismStorage.getItem(i)['name']);
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
var scalesStorageEngineArray1 = new ScalesStorageEngineArray();
var scale1 = new Scale(scalesStorageEngineArray1);
var apple1 = new Apple("Apple ranet", 100);
var apple2 = new Apple("Apple shafran", 80);
var apple3 = new Apple("Apple antonovka", 70);
var apple4 = new Apple("Apple beliynaliv", 90);
var tomato1 = new Tomato("Tomato cherry", 50);
var tomato2 = new Tomato("Tomato akvarel", 45);
var tomato3 = new Tomato("Tomato eldorado", 60);
var tomato4 = new Tomato("Tomato skorospelka", 80);
scale1.add(apple1);
scale1.add(apple2);
scale1.add(apple3);
scale1.add(apple4);
scale1.add(tomato1);
scale1.getSumScale();
scale1.getSumScale();
scale1.getNameList();
// /*Хранение продуктов в LocalStorage*/
var scalesStorageEngineLocalStorage1 = new ScalesStorageEngineLocalStorage();
var scale2 = new Scale(scalesStorageEngineLocalStorage1);
scale2.add(apple1);
scale2.add(apple2);
scale2.add(apple3);
scale2.add(apple4);
scale2.add(tomato1);
scale2.getSumScale();
scale2.getSumScale();
scale2.getNameList();
//# sourceMappingURL=app.js.map