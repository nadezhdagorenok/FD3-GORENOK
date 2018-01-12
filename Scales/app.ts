class Scale {

        type:string;    
        amountScale:number;
        listProducts;        
    
        constructor(private typeScale: string) {      
            this.type = typeScale;
            this.amountScale = 0;
            this.listProducts = [];           
        }
    
        add(product:{name:string, scale: number}):void {
            this.listProducts.push(product);
            console.log(this.listProducts);
        }
    
        getSumScale(): void {
            for (let i = 0; i < this.listProducts.length; i++) {
                this.amountScale += this.listProducts[i]['scale'];
            }
            console.log('Общий вес добавленных продуктов:  ' + this.amountScale + ', использовались весы типа ' + this.type);
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

        name: string;
        scale: number;   

        constructor( nameProduct: string, scaleProduct: number) {    
            this.name = nameProduct;
            this.scale = scaleProduct;
        }

        getScale():void {
           alert(this.scale);
        }
        getName():void {
           alert(this.name);
        }
    }   
    
    
    class Apple extends Products{

        constructor( name:string, scale:number) {           
        super(name, scale);
        }

      show():void {

        console.log("apple"+this.name+ " has " + " " + "scale = " + this.scale);
       }
    }  
       
    
    class Tomato extends Products{

        constructor(name:string, scale:number) {           
            super(name, scale);
        }

        show():void {
            console.log("apple"+this.name+ " has " + " " +     
                +"scale = "+this.scale);
        }
    }


    let apple1:Apple=new Apple("ranet",100);
    let apple2:Apple=new Apple("shafran",80);
    let apple3:Apple=new Apple("antonovka",70);
    let apple4:Apple=new Apple("beliynaliv",90);
    let tomato1:Tomato=new Tomato("cherry",50);
    let tomato2:Tomato=new Tomato("akvarel",45);
    let tomato3:Tomato=new Tomato("eldorado",60);
    let tomato4:Tomato=new Tomato("skorospelka",80);

    let scale1:Scale=new Scale('electronic');

    scale1.add(apple2);
    scale1.add(apple3);
    scale1.add(apple4);
    scale1.add(tomato1);
    scale1.add(tomato2);
    scale1.add(tomato3);
    scale1.add(tomato4);

    scale1.getSumScale();    
    scale1.getNameList();

    let scale2:Scale=new Scale('mechanical');

    scale2.add(apple2);
    scale2.add(apple3);
    // scale2.add(apple4);     // добавим на механические весы чуть меньше продуктов
    // scale2.add(tomato1);
    // scale2.add(tomato2);
    scale2.add(tomato3);
    scale2.add(tomato4);

    scale2.getSumScale();    
    scale2.getNameList();



























