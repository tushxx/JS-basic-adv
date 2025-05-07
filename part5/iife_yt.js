// Immediately Invoked Function Expressions (IIFE)
// function can variable take from global scope,to reduce some global scope pollution

(function chai (){ //NAMED IIFE
    console.log(`hello js`);
    
})(); //---";" if you do not add this at end next iife function will get error
// this is how you can immediately invoked the function 

( () => {
    console.log(`hello`) 
})();

( (name) => {
    console.log(`hello ${name}`) 
})('tushar');