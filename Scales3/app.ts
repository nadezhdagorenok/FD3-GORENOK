interface IStorageEngine {
    addItem(item:Products):any;
    getItem(index:any):Products;
    getCount():number;
}

class ScalesStorageEngineArray implements IStorageEngine{
    private arrayProducts:Array<Products>; 
    constructor(){
        this.arrayProducts = [];
    }
    addItem(item:Products):number{
        let index:number = this.arrayProducts.length;
        this.arrayProducts.push(item);
        console.log('Добавлен продукт ' + item.getName());     
        return index;
    };
    getItem(index:number):Products{
        return this.arrayProducts[index];
    };
    getCount():number{
        return this.arrayProducts.length;    
    };
}

class ScalesStorageEngineLocalStorage implements IStorageEngine{
    
    addItem(item:Products):number{
        localStorage.setItem(String(localStorage.length), JSON.stringify(item));          
        return localStorage.length-1;      
    };
    getItem(index:number):Products{
        return JSON.parse(localStorage.getItem(String(index)));
    };
    getCount():number{
        return localStorage.length;    
    };
}

class Scale <StorageEngine extends IStorageEngine> {        
       private listProducts:StorageEngine[];     
            constructor() {                           
            this.listProducts = [];           
        }
    
        add(product):void {           
            this.listProducts.push(product);
            console.log('Добавлен на весы продукт ', product['name']);
        }
    
        getSumScale(): number {
            let amountScale:number = 0;  
            for (let i = 0; i < this.listProducts.length; i++) {
                amountScale += this.listProducts[i]['scale'];
                console.log(amountScale);
            }
            console.log('Общий вес добавленных продуктов в граммах:  ', amountScale);
            return amountScale;
        }
    
        getNameList():Array<string> {
            let nameList: Array<string>=[];
            for (let i = 0; i < this.listProducts.length; i++) {
                nameList.push(this.listProducts[i]['name']);
            }
        console.log('Список наименований всех добавленных продуктов: ', nameList);
        return nameList;
        }
    }
        
    class Products {
        public name: string;
        public scale: number;   

        constructor( nameProduct: string, scaleProduct: number) {    
            this.name = nameProduct;
            this.scale = scaleProduct;
        }

        getScale():number {
           return this.scale;
        }
        getName():string {
           return this.name;
        }
        show():void {
            console.log(this.name+ " has " + " " + "scale = "+this.scale);
        }
    }    
        
    class Apple extends Products{
        constructor( name:string, scale:number) {           
        super(name, scale);
        }      
    }         
    
    class Tomato extends Products{
        constructor(name:string, scale:number) {           
            super(name, scale);
        }
        
    }

    /*Хранение продуктов в Array*/

    let scale1 = new Scale<ScalesStorageEngineArray>();
    let scalesStorageEngineArray1 : ScalesStorageEngineArray = new ScalesStorageEngineArray();

    let apple1:Apple = new Apple("Apple ranet",100);
    let apple2:Apple = new Apple("Apple shafran",80);
    let apple3:Apple = new Apple("Apple antonovka",70);
    let apple4:Apple = new Apple("Apple beliynaliv",90);
    let tomato1:Tomato = new Tomato("Tomato cherry",50);
    let tomato2:Tomato = new Tomato("Tomato akvarel",45);
    let tomato3:Tomato = new Tomato("Tomato eldorado",60);
    let tomato4:Tomato = new Tomato("Tomato skorospelka",80);     
    
    let index0:number = scalesStorageEngineArray1.addItem(apple1);       
    let index1:number = scalesStorageEngineArray1.addItem(apple2);
    let index2:number = scalesStorageEngineArray1.addItem(apple3);
    let index3:number = scalesStorageEngineArray1.addItem(apple4);
    let index4:number = scalesStorageEngineArray1.addItem(tomato1);

    let product1 = scalesStorageEngineArray1.getItem(index0);
    let product2 = scalesStorageEngineArray1.getItem(index1);
    let product3 = scalesStorageEngineArray1.getItem(index2);
    let product4 = scalesStorageEngineArray1.getItem(index3);
    let product5 = scalesStorageEngineArray1.getItem(index4);    
    
    scale1.add(product1);
    scale1.add(product2);
    scale1.add(product3);
    scale1.add(product4);
    scale1.add(product5);

    scale1.getSumScale();
    scale1.getSumScale(); 
    scale1.getNameList();


    /*Хранение продуктов в LocalStorage*/

    let scale2 = new Scale<ScalesStorageEngineArray>();
    let scalesStorageEngineLocalStorage1 : ScalesStorageEngineLocalStorage = new ScalesStorageEngineLocalStorage();    
    
    let index20:number = scalesStorageEngineLocalStorage1.addItem(apple1);    
    let index21:number = scalesStorageEngineLocalStorage1.addItem(apple2);
    let index22:number = scalesStorageEngineLocalStorage1.addItem(apple3);
    let index23:number = scalesStorageEngineLocalStorage1.addItem(apple4);
    let index24:number = scalesStorageEngineLocalStorage1.addItem(tomato1);

    let product21 = scalesStorageEngineLocalStorage1.getItem(index20);
    let product22 = scalesStorageEngineLocalStorage1.getItem(index21);
    let product23 = scalesStorageEngineLocalStorage1.getItem(index22);
    let product24 = scalesStorageEngineLocalStorage1.getItem(index23);
    let product25 = scalesStorageEngineLocalStorage1.getItem(index24);   

    let apple10:Apple = new Apple(product21['name'],product21['scale']);
    let apple20:Apple = new Apple(product22['name'],product22['scale']);    
    let apple30:Apple = new Apple(product23['name'],product23['scale']);    
    let apple40:Apple = new Apple(product24['name'],product24['scale']);    
    let apple50:Apple = new Apple(product25['name'],product25['scale']);

    scale2.add(apple10);
    scale2.add(apple20);
    scale2.add(apple30);
    scale2.add(apple40);
    scale2.add(apple50);    
    
    scale2.getSumScale();
    scale2.getSumScale(); 
    scale2.getNameList();

    
    



























