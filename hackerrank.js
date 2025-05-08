function getFixedCounter(k) {
  let value = 0;
  return {
    increment: function () {
      return value += k;
    },
    decrement: function () {
      return value -= k;
    },
    getValue: function () {
      return value;
    },
  };
}
let num = getFixedCounter(2)
console.log(num);
/*{
  increment: [Function: increment],
  decrement: [Function: decrement],
  getValue: [Function: getValue]
}*/

console.log(num.increment());
console.log(num.decrement());
console.log(num.getValue());




//
function weekdayText(weekdays) {

  return function getText(index) {
    if (index < 0 || index >= weekdays.length) {
      throw new Error("Index out of bounds");
    }
    return weekdays[index];
  };
}
// let getText = weekdayText(['m', 't'])
// console.log(getText(1));

