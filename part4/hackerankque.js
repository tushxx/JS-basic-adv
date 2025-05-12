let arr = [7, 5, 2, 0, 8, 0]

function getSecondLargest (arr) {
        // code here
        let largest = "";
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            if (element > largest) {
              largest = element
            }
        }
        let newarr = arr.filter((num) => num !== largest)
        let secondlargest = ""
        for (let index = 0; index < newarr.length; index++) {
          const element = newarr[index];
          if (element > secondlargest) {
            secondlargest = element;
          }
        }
        console.log(secondlargest)
}
getSecondLargest(arr)

function getSecondLargest(arr) {
    let max = Math.max(...arr); // Find the largest
    let filtered = arr.filter(num => num !== max); // Remove all instances of the largest
    return Math.max(...filtered); // Find the max of the remaining (second largest)
}

console.log(getSecondLargest([1, 5, 7, 7, 5])); // Output: 5


function  pushZerosToEnd(arr) {
        // code here
        let nonzero = arr.filter((num) => num !== 0)
        let zero = arr.filter((num) => num === 0 )
        return nonzero.concat(zero);
        
    }
console.log(pushZerosToEnd([3,5, 0, 0 ,4]))


 [arr[tush], arr[j]] = [arr[j], arr[tush]];


function vowelsAndConsonants(s) {
  let snew = s.split("");
  let vow = snew.filter((char) => /[aeiouAEIOU]/.test(char));
  let cons = snew.filter((char) => !/[aeiouAEIOU]/.test(char));

  vow.forEach((vw) => console.log(vw));
  cons.forEach((lett) => console.log(lett));

}
console.log(vowelsAndConsonants('javascript'))

//
function vowelsAndConsonants(s) {
  const vowels = "aeiouAEIOU";
  let vow = [];
  let letters = [];

  for (const char of s) {
    if (vowels.includes(char)) {
      vow.push(char);
    } else {
      letters.push(char);
    }
  }

  vow.forEach((vw) => console.log(vw));
  letters.forEach((lett) => console.log(lett));
}


//
function reverseString(s) {
  let snew = s.toString().split("");
  let reverse = snew.reverse();
  console.log(reverse.join(""));
}
reverseString(Number(1234));
