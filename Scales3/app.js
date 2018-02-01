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
// class ScalesStorageEngineLocalStorage implements IStorageEngine{
//     private index:number; 
//     constructor(){
//         this.index=0;
//     }
//     addItem(item:Products):number{
//         localStorage.setItem('this.index', 'item');  
//         this.index++;      
//         console.log('Добавлен продукт ' + item.getName());  
//         return this.index;
//     };
//     getItem(index:number):Products{
//         return JSON.parse(localStorage.getItem('this.index'));
//     };
//     getCount():number{
//         return localStorage.length;    
//     };
// }
var Scale = /** @class */ (function () {
    function Scale() {
        this.listProducts = [];
    }
    Scale.prototype.add = function (product) {
        this.listProducts.push(product);
        console.log('Добавлен на весы продукт ' + product['name']);
    };
    Scale.prototype.getSumScale = function () {
        var amountScale = 0;
        for (var i = 0; i < this.listProducts.length; i++) {
            amountScale += this.listProducts[i]['scale'];
        }
        console.log('Общий вес добавленных продуктов в граммах:  ' + amountScale + ', использовались весы типа ' + this.type);
    };
    Scale.prototype.getNameList = function () {
        var nameList = [];
        for (var i = 0; i < this.listProducts.length; i++) {
            nameList.push(this.listProducts[i]['name']);
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
var scalesStorageEngineArray1 = new ScalesStorageEngineArray();
var index1 = scalesStorageEngineArray1.addItem(apple1);
var product = scalesStorageEngineArray1.getItem(index1);
console.log(product);
scalesStorageEngineArray1.addItem(apple2);
scalesStorageEngineArray1.addItem(apple3);
scalesStorageEngineArray1.addItem(apple4);
scalesStorageEngineArray1.addItem(tomato1);
var scale1 = new Scale();
scale1.add(scalesStorageEngineArray1);
scale1.getSumScale();
scale1.getSumScale();
scale1.getNameList();
//# sourceMappingURL=app.js.map