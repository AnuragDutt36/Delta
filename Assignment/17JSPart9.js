// 1. Solution

let input = document.createElement("input");
let button = document.createElement("button");

button.innerText = "Click Me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);

// 2. Solution

button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");

// 3. Solution

let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

// 4. Solution

let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM Practice</u>";
document.querySelector("body").append(h1);


// 5. Solution

let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Pratice";
document.querySelector("body").append(p);


