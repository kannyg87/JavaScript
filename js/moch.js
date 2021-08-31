// // 1. create 2 anchor tags
// var a1 = document.createElement('a')
// a1.textContent = "Home";
// a1.setAttribute('class', 'nav-item nav-link active');
// var a2 = document.createElement('a');
// a2.textContent = "About Us";
// a2.setAttribute('class', 'nav-item nav-link')
// //2. create div tag
// var div = document.createElement('div');
// div.setAttribute('class', 'nav navbar-nav')
// //3. append 2 anchors to our div
// div.appendChild(a1);
// div.appendChild(a2);
// //4 create nav element 
// var nav = document.createElement('nav');
// nav.setAttribute('class', 'navbar navbar-expand navbar-light bg-light')
// //5 append div to nav element 
// nav.appendChild(div);
// // 6. find body element 
// var body = document.querySelector('body');
// // 7. append nav element to body
// body.appendChild(nav);




// // create nav element

// // append div to nav elemnt

// // find body elemnt

// // append nav element 


// navbar

var a1 = document.createElement('a');
a1.innerHTML = "<b>HighOnCoding</b>";
var a2 = document.createElement('a');
a2.textContent = "Home";
var a3 = document.createElement('a');
a3.textContent = "Categories";



var div= document.createElement('div');
div.setAttribute('class','col-12 d-flex header justify-content-center my-5');
div.appendChild(a1);
div.appendChild(a2);
div.appendChild(a3);

var nav = document.createElement('nav');
//nav.setAttribute('class','row');
nav.appendChild(div);


var body = document.querySelector('body');
body.appendChild(nav);

// bar of Curse Of the Current Reviewa 
var h1 = document.createElement('h1');
h1.innerHTML="<h1> Curse Of the Current Reviewa</h1>";

var p = document.createElement('p');
p.textContent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quidem itaque, pariatur ab voluptates aliquam impedit numquam. Sit est, saepe inventore voluptatibus maiores id aut iure vitae qui tenetur vero?";

var div= document.createElement('div');
div.setAttribute('class','col-12 d-flex flex-column justify-content-start gray');
div.appendChild(h1);
div.appendChild(p);

var span = document.createElement('span');
span.setAttribute('class','row');
span.appendChild(div);

//var body = document.querySelector('body');
body.appendChild(span);


//test
var h2 = document.createElement('h2');
h2.innerHTML="<h2>this is the third row</h2>"

var p2 = document.createElement('p');
p.innerText ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quidem itaque, pariatur ab voluptates aliquam impedit numquam. Sit est, saepe inventore voluptatibus maiores id aut iure vitae qui tenetur vero?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quidem itaque, pariatur ab voluptates aliquam impedit numquam. Sit est, saepe inventore voluptatibus maiores id aut iure vitae qui tenetur vero?"

var div = document.createElement("div")
div.setAttribute("class","col-12 d-flex flex-column justify-content-start gray my-5")
div.appendChild(h2);
div.appendChild(p2);

body.appendChild(div);


