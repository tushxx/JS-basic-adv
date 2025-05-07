function chai() {
    let username = "tush"
  console.log(this);
}
chai(); //here we called in node environment but we will get various thing like global,fetch after calling this
//if we call this.username -->>>we will get undefined ,it doesnt work in function ,mostly works in object


const chai2 = () => {
    let username = "tush"
    console.log(this);
}
chai2()  //output=====>>> {}
//if we call this.username -->>>we will get undefined ,it doesnt work in function ,mostly works in object

/*Context	this refers to
Regular function (global)	----->>>.window / undefined
Arrow function (global)	------------->Enclosing scope (window in global)*/


/////arrow function
const addone = (num1, num2) => {
    return num1 + num2
}
// same above can be written as implicit written 
const addtwo = (num1, num2) => num1 + num2 //o/p will be same ,,,everything shld be in one line
const add23 = (num1, num2) => ( num1 + num2);  //if we write in parenthesis we dont need to write return
//mostly used in react
const add2 = (num1, num2) => ({username: "tush"}); //here it is used we can defined object in parenthesis