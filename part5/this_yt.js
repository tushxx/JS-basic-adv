const user  = {
    username : "tushar",
    price : "999",
    welcomemessage : function(){
        console.log(`${this.username}, welcome to website`);//this runs the current context
        //if we just write username we will get error of username not defined
        console.log(this);
        
    }
}
user.welcomemessage()//-->tushar, welcome to website
user.username = "gargee";
user.welcomemessage(); //gargee, welcome to website

// o/p------>>>>
/* tushar, welcome to website
{
  username: 'tushar',
  price: '999',
  welcomemessage: [Function: welcomemessage]
}                  ////////---------->>>>.. this is context

tush, welcome to website
{
  username: 'gargee',
  price: '999',
  welcomemessage: [Function: welcomemessage]
} */



// ***********************************************
console.log(this); ///------->...lets see what we will get if we print this
// output ===>>>> {} --->empty 
/* because we are in node environment .,,,,,,becuasae there is not any context in global
but in browser case is different -- we get window
*/


/*Context	-------------->>>this refers to...
Global scope (non-strict mode)----->	window
Global scope (strict mode)--->.	undefined
Inside a function (non-strict)	----->window
Inside a function (strict mode)---->	undefined
Inside a method in an object	---->The object itself
Inside a class method	---->>The instance of the class
In an event listener------->	The DOM element that received event*/


function chai() {
    console.log(this);
}
chai() //here we called in node environment but we will get various thing like global,fetch after calling this
//if we call this.username -->>>we will get undefined ,it doesnt work in function ,mostly works in object
