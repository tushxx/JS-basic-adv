//always total code should not run,,pura code conditional basis pr run hona chahiye

// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`); //will get error becuase we are calling outside scope


const balance = 1000

if (balance > 500) console.log("test"),console.log("test2"); //applying coma is not good practice

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) { //&& all should be True
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) { // || means OR any one should be true
    console.log("User logged in");
}