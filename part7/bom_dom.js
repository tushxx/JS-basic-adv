// Display an alert box
window.alert("Hello, world!");

// Get the current URL
console.log(window.location.href);

// Navigate to a new page
window.location.assign("https://www.example.com");

// Go back in history
window.history.back();

// Get screen width
console.log(window.screen.width);

// agent using navigator
navigator.userAgent;
("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36");

//location
location.hostname;
("127.0.0.1");
location.href;
("http://127.0.0.1:5500/part7_dom/one.html");
location.pathname;
("/part7_dom/one.html");


//use for dom
console.log(document.getElementById);
console.log(document.getElementsByTagName);


document.getElementById("title").class;
undefined;
document.getElementById("title").className;
("heading");

//but
document.getElementById("title").getAttribute("class");
("heading");

document.getElementById("title").setAttribute("class", "head");
//this will overwrite class will become "head" from "heading"

title.style.backgroundColor = "purple";
("purple");

title.style = "color: red";
("color: red");


////////
title.textContent;
("Tush document");
title.innerHTML;
("<h3>Tush document</h3>");
title.innerText;
("Tush document");

//difference is lets say we add <span> and display: none & add text then 
//innertext will just give text which is visible
//textcontent will give all text 


document.querySelector('ul')
{/* <ul style=​"color:​ orange;​">​…​</ul>​<li>​…​</li>​::marker​"one"</li>​<li>​…​</li>​<li>​…​</li>​</ul>​  */}
document.querySelector('ul').style.color = 'orange'
'orange'



//nodelist

const allli = document.querySelectorAll('li')
undefined
allli
NodeList(3)[li, li, li]
allli.style.color = "green"
// VM3268:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
//     at <anonymous>:1:19
// (anonymous) @ VM3268:1Understand this error
allli[0].style.color = "green"
'green'

//nodelist into array
let my_arr = Array.from(allli);
undefined;
my_arr(3)[(li, li, li)];


