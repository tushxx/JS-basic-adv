
function sumOfN(n) {
  if (n <= 0) {
    return 0;
  }
  return (n * (n + 1)) / 2;
}

function printMultiplicationTable(n) {
  table = [];
  i = 1;
  while (i <= 10) {
    table.push(`${n} * ${i} = ${n * i}`);
    i++;
  }
  return table;
}
// console.log(printMultiplicationTable(2));


function countVowels(str) {
  const matches = str.match(/[aeiouAEIOU]/g); //gives an array 
  // //"g"-Global flag – find all matches, not just one
  return matches ? matches.length : 0; //If matches is not null (i.e., vowels were found),then return matches.length (the number of vowels), otherwise, return 0.
}


console.log(countVowels("hello"));
