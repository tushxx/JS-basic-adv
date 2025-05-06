function filterNumbers(arr) {
  return arr.filter(Element => typeof Element === 'number');
}



function reverseArray(arr) {
  return arr.reverse();
}



function findMax(arr) {
  return Math.max(...arr);
}
/*Math.max([3, 8, 1]) // ❌ NaN (invalid)
Math.max(...[3, 8, 1]) // ✅ 8 */
// The ... is the spread operator. It "spreads" array elements as individual arguments.


function removeDuplicates(arr) {
  return [...new Set(arr)];
}
/* 
Set is a built-in JavaScript object that only stores unique values.
Spreading (...) it into an array gives us the result.
*/
new Set([1, 2, 2]) // → Set {1, 2}
[...new Set([1, 2, 2])] // → [1, 2]



function flattenArray(arr) {
  return arr.flat(Infinity);
}
/*
Array.prototype.flat() flattens arrays to a certain depth.
Infinity tells it to go all the way, no matter how deep the nesting.*/
[1, [2, 3]].flat() // → [1, 2, 3]
[[1], [2, [3]]].flat(2) // → [1, 2, 3]



