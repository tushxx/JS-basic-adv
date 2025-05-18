function setUserName (username){
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password) {
    this.email = email
    this.password = password
}

const tushar = new createUser("tushar", "tush@gmail.com", "1234")
console.log(tushar); //--> createUser { email: 'tush@gmail.com', password: '1234' }\

//here setUserName is being called but it is not passing refrence to username 


function createUser2(username, email, password) {
  setUserName.call(this, username); 

  this.email = email;
  this.password = password;
}
const gargee = new createUser2("gargee", "tush@gmail.com", "1234");
console.log(gargee); //createUser2 {username: 'gargee',email: 'tush@gmail.com', password: '1234'}

//here we are calling that function but just by calling ,that function gets execute and it is remove from global exec context ,,
//   we want to keep reference somewhere so we give our this so they can keep there reference in this 
// and then you can go from global exe context


// ✅ 1. this in a Function
// In JavaScript, the value of 'this' is determined by how a function is called, not where it is defined.

// When a regular function is called without any context (e.g., setUserName(username)), this refers to the global object (or undefined in strict mode).

// ❌ 2. Problem in First Example
function createUser(username, email, password) {
    setUserName(username); // Called as a regular function
    this.email = email;
    this.password = password;
}
// setUserName(username) is called as a regular function, so 'this' inside setUserName refers to the global object, not to the newly created createUser object.

// As a result, username is not set on the createUser object (tushar), but instead on the global object.

// Hence, the tushar object only contains email and password.

// ✅ 3. Fix Using call()

setUserName.call(this, username);
// Function.prototype.call() is used to explicitly set the value of 'this' inside the called function.

// By calling setUserName.call(this, username), we ensure that this inside setUserName refers to the current object being constructed by createUser2.