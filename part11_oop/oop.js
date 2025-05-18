// object literal
const user = {
    username : "tushar",
    loginCount : "8",
    signedIn : true,


    getUserDetails : function () {
        // console.log(`username: ${username}`);//this will give error as username is not defineed
        console.log(`username: ${this.username}`);
        console.log(this);
        
    }

}
// console.log(user.username);
// user.getUserDetails()





//constructor function
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this // even if we didnt return still we will get return implicitly
}

// const userOne = User("hitesh", 12, true)
// const userTwo = User("ChaiAurCode", 11, false)

// console.log(userOne); 
// //if we do this our object will get add to global object and and and
// USERTWO WILL OVERWRITE USERONE
//---->>>username: 'ChaiAurCode',loginCount: 11,isLoggedIn: false

//You are calling User() without new, which means:

// this refers to the global object (window in browser or global in Node.js)

// So this.username, this.loginCount, etc., are being added to the global scope

// userOne and userTwo both point to the same global object, not to different user objects

// 🔁 So when you call User() the second time, it overwrites the same global properties.



//The Fix: Use the new keyword 
// 'new' creates a new empty object
const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)

console.log(userOne.constructor);// -->>[Function: User]
