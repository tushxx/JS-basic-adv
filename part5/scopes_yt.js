
// {} --> scope 
//inside it's block scope and outside global scope
// from global scope you can read inside block but block scope shouldnt read from outsode

var c = 300 //lets see problem with "var"
if (true){
    let a = 30
    const b = 20
    var c = 10
}
// console.log(a); //--> a is not defined 
// console.log(b); //--> b is not defined
// console.log(c); //-> o/p- 10 (var is read from inside too and it overwrite global scope value ,which is not right)



function one (){
    const username = "tushar"
    function two (){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website); 
    // -->we will get error because we are calling it outside two we can do that
    //andar ka function bahar ke variable ko access kar sakta pr ,,,bahar ka function andar ke variable ko access nahi kr sakta.
    two()
}
one() //-->tushar (here one is getting execute and in one, two is being execute)
// console.log(username); // here too we will get error becuase it is outside function scope





//++++++++++++++++ interesting ++++++++++++ 

addOne(5) // here we have initiliaze variable before function still we will get value after console.log
function addOne(num) {
    return num +1
}

// addtwo(5) // here we will get "error" of not initialization,, because here we just didnt declared but also hold in variable
const addtwo = function(num){
    return num + 2
}





