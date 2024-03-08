let h1 = document.querySelector("h1");
let btn = document.querySelector("button");

let url = "https://catfact.ninja/fact";

function getJokes() {
    return fetch(url)
        .then((res) => res.json())
        .then((data) => data.fact)
        .catch((err) => err);
}

btn.addEventListener("click", function () {
    getJokes()
        .then((joke) => {
            h1.innerText = joke;
        })
        .catch((err) => {
            console.error("Error fetching joke:", err);
        });
});
