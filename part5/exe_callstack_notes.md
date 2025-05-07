# execution notes
// javascript execution context

# while executing js code first
1.JS creates 'Global excution' context 
2.Next it creates 'memory phase'
3.Memory phase - In this phase,the variables are set to undefined 
  until the execution phase(next phase) and the functions are set to their definitions.
4.Next it creates the 'execution phase'
5.Execution phase - In this phase,the variables are initialsed to given values and 
  when the function s are called,it creates a memory phase and execution phase for the function 
  just like the main one. (property of global execution)

# javascript runs in two phases
1.memory 'creation phase' 
2.execution phase 

e.g--->>>> lets see how following code will execute
let var1 = 10
let var2 = 20
function addnum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addnum(var1, var2)
let result2 = addnum(10, 2)

(1)-> global execution -> first of all it is allocated in "this"
(2)-> memory phase ->
      var1 => undefined
      var2 =>  undefined
      addnum => definition(everything inside function is being defined)
      result1  => undefined
      result2  => undefined
(3)-> execution phase - >
      var1 => 10
      var2 => 20
      # addnum => new variable environment + execution thread <<<--------this will be delete after execution
              -> memory phase
                 var1 => undefined
                 var2 =>  undefined
                 total => undefined
              -> execution phase
                 num1 => 10
                 num2 => 20
                 total => 30
    
     total => will return in global execution  
     result1 => 30

     -->same things goes for result2 new environment + thread will be create 
        again memory phase and execution phase will be create







# call stack notes
here LIFO is applied
LAST IN FIRST OUT 

//from browser
# (1) 
function one(){
    console.log("one")    <-----
}
function two(){
    console.log("two")    <------
}
function three(){
    console.log("three")  <------
}
one()                     <------
two()                     <------
three()                   <------

# callstack- 
(anonymous) <----appear due to one()
one         <----console log one
(anonymous) <----> two()
two
(anonymous) <----> three()
three

# (2) example
function one(){
    console.log("one")    <-----
    two()
}
function two(){
    console.log("two")    <------
    three()
}
function three(){
    console.log("three")  <------
}
one()                     <------
two()                     <------
three() 

# callstack
(anonymous) <----appear due to one()
one         <---- console log one
two         <---- two is called inside one()
three       <---- three is called inside two which is being called inside one()
(anonymous) <----appear due to two()
two
three
(anonymous) <----appear due to three()
three

