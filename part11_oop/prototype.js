// let myName = "tushar    "

// console.log(myName.truelength()); // i want to make method that will give true length ,,,,we know this can be done through trim() too but want to create new one so that i can use it for every string


let myHeroes= ["thor", "spiderman", "ironman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",
    ironman : "suit",

    getSpiderPower : function(){
        console.log(`spidey power is ${this.spiderman}`);
    }
}

Object.prototype.tushar = function(){
    console.log(`we have created this method through applying method directly to Object by prototype`);
    
}
heroPower.tushar() ///-->> we will get console log upper one
myHeroes.tushar() ///-->>. same as upper


///this means you created method and applied it upper hierrachy by injecting it in prototype
// EVERYTHING IN JS IS OBJECT , therefore method injected in object is applied to everyone

Array.prototype.heytushar = function () {
    console.log(`hey tushar`)
}

// heroPower.heytushar() ///// this will give errorr becuase we have injected this method just to array
myHeroes.heytushar() /// hey tushar



////
let myName = "tushar    ";


String.prototype.trueLength = function () {
  console.log(`${this}`); 
  console.log(this); 
  console.log(`true length is ${this.trim().length}`); 
}
myName.trueLength() 
//this = [String: 'tushar    '] 
//`${this}` = tushar
