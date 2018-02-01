interface IStorageEngine {
    addItem(item:Products):number;
    getItem(index:number):Products;
    getCount():number;
}

class ScalesStorageEngineArray implements IStorageEngine{
    private arrayProducts:Array<Products>; 
    constructor(){
        this.arrayProducts=[];
    }
    addItem(item:Products):number{
        let index:number=this.arrayProducts.length;
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
    //private index:number; 
    constructor(private index:number){
        this.index=0;
    }
    addItem(item:Products):number{
        localStorage.setItem('this.index', 'item');  
        this.index++;      
        console.log('Добавлен продукт ' + item.getName());  
        return this.index;
      
    };
    getItem(index:number):Products{
        return JSON.parse(localStorage.getItem('this.index'));
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
    
        add(product:StorageEngine):void {
            this.listProducts.push(product);
            console.log('Добавлен на весы продукт ' + product['name']);
        }
    
        getSumScale(): void {
            let amountScale = 0;  
            for (let i = 0; i < this.listProducts.length; i++) {
                amountScale += this.listProducts[i]['scale'];
            }
            console.log('Общий вес добавленных продуктов в граммах:  ' + amountScale + ', использовались весы типа ' + this.type);
            
        }
    
        getNameList():void {
            let nameList: Array<string>=[];
            for (let i = 0; i < this.listProducts.length; i++) {
                nameList.push(this.listProducts[i]['name']);
            }
        console.log('Список наименований всех добавленных продуктов: ' + nameList);
        }
    }
        
    class Products {
        protected name: string;
        protected scale: number;   

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


    let apple1:Apple=new Apple("Apple ranet",100);
    let apple2:Apple=new Apple("Apple shafran",80);
    let apple3:Apple=new Apple("Apple antonovka",70);
    let apple4:Apple=new Apple("Apple beliynaliv",90);
    let tomato1:Tomato=new Tomato("Tomato cherry",50);
    let tomato2:Tomato=new Tomato("Tomato akvarel",45);
    let tomato3:Tomato=new Tomato("Tomato eldorado",60);
    let tomato4:Tomato=new Tomato("Tomato skorospelka",80); 

    let scalesStorageEngineArray1 : ScalesStorageEngineArray = new ScalesStorageEngineArray();
    
    let index1:number = scalesStorageEngineArray1.addItem(apple1);
    let pr:Products=scalesStorageEngineArray1.getItem(index1);
    console.log(pr);
    scalesStorageEngineArray1.addItem(apple2);
    scalesStorageEngineArray1.addItem(apple3);
    scalesStorageEngineArray1.addItem(apple4);
    scalesStorageEngineArray1.addItem(tomato1);
    let scale1:any= new Scale<ScalesStorageEngineArray>();
    scale1.add(scalesStorageEngineArray1);
    scale1.getSumScale();
    scale1.getSumScale(); 
    scale1.getNameList();

    // let scale2 = new Scale<ScalesStorageEngineArray>;

    // scale2.addItem(apple2);
    // scale2.addItem(apple3);
    // // scale2.add(apple4);     // добавим на механические весы чуть меньше продуктов
    // // scale2.add(tomato1);
    // // scale2.add(tomato2);
    // scale2.add(tomato3);
    // scale2.add(tomato4);

    // scale2.getSumScale();    
    // scale2.getNameList();


    // apple1.show();
    // tomato4.show();



























