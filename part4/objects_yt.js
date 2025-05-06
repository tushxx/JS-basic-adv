// singleton -> aap jab koi bhi constructor se banate hai toh singleton ek object banta hai
// A constructor in JavaScript is a special method within a class or a function that initializes objects. It's called automatically when a " new "object instance is created using the new keyword
//agar litreals se declare karte hai toh singleton nahi banta hai,
// bas constructor se jab banaega tab hamesha singleton banega 

/* Object.create() //-> constructor method */

// object literals
const mysym =  Symbol("key1") // adding symbol in object

const jsuser = {
    name : "tushar",
    "full name" : "tushshirke",
    [mysym] : "key2" , //mysym is symbol here
    surname : "shirke",
    email : "tusharshirke@google.com",
    isloggedin : true,
    lastloggedin : ["monday", "saturday"]
}

// console.log(jsuser.email); //->tusharshirke@google.com
// console.log(jsuser["email"]); //same o/p as above  //-->more perfect way to call value of key
// problem with .key is --> we can write .full name ,,,,we neeed to write ["full name"]
// console.log(jsuser[mysym]);

// console.log(Object.keys(jsuser)); //-->give all values in array

jsuser.email = "tusha@gmail.com" //change /overwrite value
// Object.freeze(jsuser) //it freezes the object and cant change in future


jsuser.greeting = function () {
    console.log("hello JS user");
    
}
// console.log(jsuser.greeting()); //hello JS user
 
jsuser.greetingtwo = function () {
    console.log(`hello ${this.name}`);
    
}
// console.log(jsuser.greetingtwo()); //hello tushar





// part 2  (singleton by constructor)
const tinderUser = new Object() //->singleton object

tinderUser.id = "tush2610"
tinderUser.age = "21"

// console.log(tinderUser);
console.log(Object.entries(tinderUser)); // this make everything in array 
//->[ [ 'id', 'tush2610' ], [ 'age', '21' ] ]



const regularuser = {
    email : "tush@gmail.com",
    fullname : {
        userfullname : {
            first : "tushar",
            last : "shirke"
            }
    }
}

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "a", 4 : "b"}
// const obj3 = Object.assign({}, obj1, obj2) 
// const obj3 = Object.assign(...obj1, ...obj2); //... spreads the operator
// console.log(obj3);



// when we get data from DB 
const users = [
    {
        id : "hh",
        yes : "no"
    },
    {
        id : "hh",
        yes : "no"
    },
    {
        id : "hh",
        yes : "no"
    },
    
]
users[1].yes

//this tells if that object hav this value or not
console.log(tinderUser.hasOwnProperty('isloggedin'));






//de-structuring

const course = {
    name : "jscouse",
    price : "999",
    courseinstructor : "hitesh"
}
//course.courseinstructor
const {courseinstructor} = course //helps to extract value from object
const {courseinstructor: instructor} = course //courseinstructor is so big name we destructure it by giving small name

// console.log(courseinstructor); //-->hitesh
// console.log(instructor); //same o/p as above

