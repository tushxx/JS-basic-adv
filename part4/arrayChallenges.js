/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.
*/

let teaFlavors = ["green tea", "black tea", "oolong tea"]

let teaFl = new Array("green tea", "black tea", "oolong tea"); //this too gives a array in form of object

let firstTea = teaFlavors[0] 
// o/p = green tea



/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/

let cities = ["London", "Tokyo", "Paris", "New York"]
const favoriteCity = cities[2]
//console.log(favoriteCity);


/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/

let teaTypes = ["herbal tea" , "white tea", "masala chai"]
teaTypes[1] = ("jasmine tea")
console.log(teaTypes);




/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/
let citiesVisited = ["Mumbai", "Sydney",];
// citiesVisited[citiesVisited.length] = ("berlin") // this is also one way when we dont know length

citiesVisited.push("berlin") //this is easy PUSH method
console.log(citiesVisited);



/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/
let teaOrders = ["chai", "iced tea", "matcha", "earl grey" ]
let lastOrder = teaOrders.pop()
console.log(lastOrder);

console.log(teaOrders);




/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/
let var1 = 5
let var2 = var1
var1 = 9
// console.log(var2); //here o/p will be '5' because var2 is alr defined before var1 becomes 9

let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas
popularTeas.pop()
console.log(softCopyTeas);
console.log(popularTeas);
// as above case we will think it will behave same but here from both softcopy and popular one item will remove even if we have define it later still ,thats a behaviour of javascript
// this happens in array ,object because conditiojn is defined directly to memory not particular one array






/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/
let topCities = ["Berlin", "Singapore", "New york"]
let hardCopyCities = [...topCities] //this will make hardcopy i.e. now condition will be define to array now after this any condition real array will not resemble to this copy array
topCities.pop()
console.log(hardCopyCities);

// let hardCopyCities = topCities.slice()
// //this is also method for hardcopy







/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/
let europeanCities = ["paris", "rome"]
let asianCities = ["tokyo", "bangkok"]
let worldCities = europeanCities.concat(asianCities)

console.log(worldCities);



/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/

let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"]
let menuLength = teaMenu.lenth



/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/

let cityBucketList = ["kyoto", "london", "cape town", "vancouver"]
let isLondonInList = cityBucketList.includes("london")
 
console.log(isLondonInList); //o/p =true



let arr = [1, 2, 3, 4];
console.log(arr.indexOf(3)); //o/p =2