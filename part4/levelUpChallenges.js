/* 
1. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`. 
   Store all teas before `"chai"` in a new array named `selectedTeas`.
*/
let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
  if (teas[i] == "chai") {
    break;
  }
  selectedTeas.push(teas[i]);
}
// console.log(selectedTeas);  -->  ["green tea", "black tea"];



/* 
2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`. 
   Store the other cities in a new array named `visitedCities`.
*/

let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = []

for (let c = 0; c < cities.length; c++) {
  // visitedCities.push(cities[c]);
  // if (cities[c] == "Paris") {
  //   visitedCities.pop(cities[c])
  // }
  if (cities[c] == "Paris") {
    continue; //continue statement breaks one iteration (in the loop) if a specified condition occurs, and continues with the next iteration in the loop
  }
  visitedCities.push(cities[c]);
}
// console.log(visitedCities);





/* 
3. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` is found. 
   Store the numbers before `4` in an array named `smallNumbers`.
*/

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = []
//num-->element ,,,,,,numbers-->object ///backend it is doing for loop only but instead of not going in every "i"th elemnt of array we can 
// just "go specified elemnt of that object/array"
for (const num of numbers) { 
  if (num == 4) {
    break;
  }
   smallNumbers.push(num)
}
// console.log(smallNumbers);



/* 
4. Use a `for-of` loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]` and skip `"herbal tea"`. 
   Store the other teas in an array named `preferredTeas`.
*/

let teatypes = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = []

for (const tea of teatypes) {
  if (tea == "herbal tea") {
    continue;
  }
  preferredTeas.push(tea)
}
// console.log(preferredTeas);





/* 
5. Use a `for-in` loop to loop through an object containing city populations. 
   Stop the loop when the population of `"Berlin"` is found and store all previous cities' populations in a new object named `cityPopulations`.

   let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};
*/

let citiesPopulation = {
    "London": 8900000,    //london-->keys ,,,8900000 -->values
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
}
let cityNewPopulations = {}
// console.log(Object.keys(citiesPopulation)); 
//this will give keys i.e.london newyork ,etc in array form

for (const city in citiesPopulation) {
  // citiesPopulation[city]---> this will gives values  
  if (city == "Berlin") {
    break;
  }
  cityNewPopulations[city] =citiesPopulation[city] 
}
console.log(cityNewPopulations);




/* 
6. Use a `for-in` loop to loop through an object containing city populations. 
   Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.

let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};
*/

let worldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};

largecities = {}
for (const city in worldCities) {
  if (worldCities[city] < 3000000) {
    continue;
  }
  largecities[city] = worldCities[city]
}
console.log(largecities);



/* 
7. Write a `forEach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`. 
   Stop the loop when `"chai"` is found, and store all previous tea types in an array named `availableTeas`.
*/

let teacollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = []

teacollection.forEach(function(tea) {
  if (tea == "chai") {
    return; //break and continue doesnt work inside function
  }
  availableTeas.push(tea)
});
// console.log(availableTeas);


/* we write function as 
function name(params) {}
or
() => {} 
array.forEach(element => {
  
});
*/
// this is how foreach loop is written as we seen => is function

/*there are a variety of such special cases  (above case)
where the function is just needed on the go.
You don't want to store them permanently in the memory,
just do the work and get away from the memory.
And for these functions, you don't have to define the
name because you don't want to use them later on.
So what's the point of h aving the name? And this is the definition. 
for "foreach loop" we dont need to give name to function
*/






/* 
8. Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`. 
   Skip `"Sydney"` and store the other cities in a new array named `traveledCities`.
*/

let citylist = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities =[]
citylist.forEach(city => {
  if (city == "Sydney") {
    return;
  }
  traveledCities.push(city);
});


citylist.forEach(function(city){
  if (city == "Sydney") {
    return;
  }
  traveledCities.push(city)
});
// console.log(traveledCities);





/* 
9. Write a `for` loop that iterates through the array `[2, 5, 7, 9]`. 
   Skip the value `7` and multiply the rest by 2. Store the results in a new array named `doubledNumbers`.
*/


let newnumbers = [2, 5, 7, 9];
let doubledNumbers = []

for (let i = 0; i < newnumbers.length; i++) {
  if (newnumbers[i] == 7) {
    continue 
  }
  // doubledNumbers.push(newnumbers[i] *2)
  multi = newnumbers[i] * 2
  doubledNumbers.push(multi); 

}
console.log(doubledNumbers);



/* 
10. Use a `for-of` loop to iterate through the array `["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]` 
    and stop when the length of the current tea name is greater than 10. 
    Store the teas iterated over in an array named `shortTeas`.
*/

let typetea = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas =[]

for (const tea of typetea) {
  if (tea.length >10) {
    break
  }
  shortTeas.push(tea)
}
console.log(shortTeas);





function countvowels(string) {
  const matches = string.match(/['aeiouAEIOU']/g) //
  return matches.length
}
console.timeLog(countvowels("tush"))





const mycoding = [
  {
    languagename: "javscript",
    languagefile: "js",
  },
  {
    languagename: "java",
    languagefile: "java",
  },
  {
    languagename: "python",
    languagefile: "py",
  },
];

mycoding.forEach((element) => {
  console.log(element.languagefile);
});
