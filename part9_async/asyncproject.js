// generate a random color
// Math.floor(Math.random() * 16) //will give random no. from 0 to 16 (floor removes the decimals)
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
console.log(randomColor());

// functions

let interval;

const startChangingColor = function () {
  const changeBgColor = (color) =>
    (document.body.style.backgroundColor = randomColor());
  if (!interval) {
    interval = setInterval(changeBgColor, 1000);
  }
};

//
const stopChangingColor = function () {
  document.querySelector("#stop").addEventListener("click", function () {
    clearInterval(interval);
    interval = null;
  });
};

//adding event
document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
