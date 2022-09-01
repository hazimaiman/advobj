//1)refenece type
var object1 = {value:10};
var object2 = object1;
var object3 = {value:10};

//2) context vs scope 
// function b (){
//     let a= 4;
// } == scope 

const object4 = {
    a: function(){
        console.log(this);
    }
} 

class Player {
    constructor (name, type){
        console.log(' player' ,this);
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log (` Hi iam ${this.name}, im a ${this.type}`)
    }
}

class Wizard extends Player {
    constructor ( name, type){
       super(name, type) 
       console.log('wizard' ,this);
        
    }
    play(){
        console.log(`Weee iam ${this.type}`);
    }
}

const wizard1 = new Wizard('Helly', 'healer');
const wizard2 = new Wizard('Hairen', 'Kenesis');