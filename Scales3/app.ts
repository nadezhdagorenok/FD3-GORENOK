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
        console.log('Добавлен продукт в Array: ' + item.getName());     
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
        console.log('Добавлен продукт в LocalStorage: ' + item.getName());         
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

      constructor(private mechanismStorage:StorageEngine){

      };          
    
        add(item:Products):void { 
            this.mechanismStorage.addItem(item);                    
            console.log('Добавлен на весы продукт: ', item.getName());
            console.log('продукт ', item);
        }
    
        getSumScale(): number {
            let amountScale:number = 0;  
            for (let i = 0; i < this.mechanismStorage.getCount(); i++) {                
                amountScale += this.mechanismStorage.getItem(i)['scale'];
                console.log(amountScale);
            }           
            console.log('Общий вес добавленных продуктов в граммах:  ', amountScale);
            return amountScale;
        }
    
        getNameList():Array<string> {
            let nameList:Array<string> = [];
            for (let i = 0; i < this.mechanismStorage.getCount(); i++) {
                nameList.push(this.mechanismStorage.getItem(i)['name']);               
                      
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
    let scalesStorageEngineArray1 : ScalesStorageEngineArray = new ScalesStorageEngineArray();
    let scale1 = new Scale<ScalesStorageEngineArray>(scalesStorageEngineArray1);    

    let apple1:Apple = new Apple("Apple ranet",100);
    let apple2:Apple = new Apple("Apple shafran",80);
    let apple3:Apple = new Apple("Apple antonovka",70);
    let apple4:Apple = new Apple("Apple beliynaliv",90);
    let tomato1:Tomato = new Tomato("Tomato cherry",50);
    let tomato2:Tomato = new Tomato("Tomato akvarel",45);
    let tomato3:Tomato = new Tomato("Tomato eldorado",60);
    let tomato4:Tomato = new Tomato("Tomato skorospelka",80);     
        
    scale1.add(apple1);
    scale1.add(apple2);
    scale1.add(apple3);
    scale1.add(apple4);
    scale1.add(tomato1);

    scale1.getSumScale();
    scale1.getSumScale(); 
    scale1.getNameList();


    // /*Хранение продуктов в LocalStorage*/

    let scalesStorageEngineLocalStorage1 : ScalesStorageEngineLocalStorage = new ScalesStorageEngineLocalStorage(); 
    let scale2 = new Scale<ScalesStorageEngineLocalStorage>(scalesStorageEngineLocalStorage1);
   
    scale2.add(apple1);
    scale2.add(apple2);
    scale2.add(apple3);
    scale2.add(apple4);
    scale2.add(tomato1);    
    
    scale2.getSumScale();
    scale2.getSumScale(); 
    scale2.getNameList();

    
    



























