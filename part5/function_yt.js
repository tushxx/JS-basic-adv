//situation of shoppiung cart ,we dont how many items will add ,we need to add prices(argument)

function calculateCartPrice(...num1){ //(...)-> rest / spread operator
    return num1
}
// console.log(calculateCartPrice(200, 300, 400)); //-->[ 200, 300, 400 ]

function calculateCartPrice(...num1) {
  let sum = 0;
  for (let i = 0; i < num1.length; i++) {
    sum += num1[i];
  }
  return sum;
}
// console.log(calculateCartPrice(200, 300, 400)); //-->900


function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}
// console.log(calculateCartPrice(200, 300, 400, 2000)); //-->[ 400, 2000] 



//calling object in function
const user = {
    name : "tushar",
    price : "999",
}
function handleObject(anyobject) {
    console.log(`username is ${anyobject.name} and price is ${anyobject.price}`);
    
}
// handleObject(user) //->username is tushar and price is 999