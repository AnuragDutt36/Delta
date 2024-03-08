// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {

//     btn.style.backgroundColor = "green";

//     console.log("color updated");
// });


let inp = document.querySelector("#text");
let p = document.querySelector("p");

inp.addEventListener("input", function () {
    let validInput = inp.value.replace(/[^a-zA-Z ]/g, '');
    if (validInput) {
        console.log(validInput);
        p.innerText = inp.value;
    } else {
        alert("Wrong input");
    }

})






