class user {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return  `${this.password}abc`
    }

    correctPassword(){
      return this.encryptPassword().toLowerCase() 
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const tushar = new user("tushar"," tush@gmail.com", "Tush26" )

console.log(tushar.encryptPassword()); // Tush26abc
console.log(tushar.correctPassword()); // tush26abc
console.log(tushar.changeUsername()); // TUSHAR



//  behind the scene 

function User(username, email,  password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
        return  `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}

const gargee = new user("gargee", " gargee@gmail.com", "GEEGS26");

console.log(gargee.encryptPassword());  //GEEGS26abc
console.log(gargee.correctPassword());  //geegs26abc
console.log(gargee.changeUsername());  // GARGEE