// Map Object
// A Map is a built-in object that stores key-value pairs, similar to a dictionary in other languages. It remembers the original insertion order of the keys and allows keys of any data type.

//it is different from map()

const map = new Map()

map.set('In', 'India')
map.set('us', 'usa')
map.set('fr', 'france')
map.set('In', 'India')

console.log(map);
/* output -
Map(3) { 'In' => 'India', 'us' => 'usa', 'fr' => 'france' } */

// forof loop on map 
for (const [key, value] of map) {
    console.log(key, ':-', value );  
}
//output--->
/* In :- India
us :- usa
fr :- france */ 


// Creating a new Map
const myMap = new Map();

// Adding key-value pairs
myMap.set('name', 'John');
myMap.set(1, 'Number one');
myMap.set({}, 'An object');

// Getting values
myMap.get('name'); // Returns 'John'
myMap.get(1);    // Returns 'Number one'

// Checking if a key exists
myMap.has('name'); // Returns true

// Deleting a key-value pair
myMap.delete(1);

// Getting the size of the Map
myMap.size; // Returns 2

// Clearing the Map
myMap.clear();


