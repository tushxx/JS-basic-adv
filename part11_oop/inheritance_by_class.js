class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class teacher extends user{
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addcourses(){
        console.log(`new courses was added by ${this.username}`);
        
    }
}

const tushar = new teacher("tushar", " tush@gmail.com", "Tush26");
tushar.addcourses() // new courses was added by tushar
tushar.logMe() //username is tushar

// these ablove and below output shows tushar(teacher) can access user function but ,, gargee(user) cant access teacher cant take reference from teacher
const gargee = new user ("gargee")
// gargee.addcourses(); //error
gargee.logMe(); //username is gargee



console.log(tushar instanceof teacher); //true
console.log(tushar instanceof user); //true
console.log(gargee instanceof user); //true 
console.log(gargee instanceof teacher); //false


