

const items = document.querySelector('#items');

 //console.log(items.parentElement);
 //console.log(items.parentNode);
// console.log(items.childNodes);
// console.log(items.children[1]);
//  console.log(items.firstElementChild);
// console.log(items.lastElementChild);
// console.log(items.nextElementSibling);
// console.log(items.previousElementSibling);

const newdiv = document.createElement('div');
newdiv.className = "hello";
newdiv.id="hello";
newdiv.setAttribute("title","Hello Div");
let newdivtext = document.createTextNode("Hello World");

newdiv.appendChild(newdivtext);
newdiv.style.fontSize='30px'
let container = document.querySelector('header .container');
let h1 = document.querySelector("header h1");
container.insertBefore(newdiv,h1);
let item1 = items.firstElementChild

//console.log(item1);
// console.log(newdiv)
let ul =document.getElementById('items');
ul.insertBefore(newdiv,item1);