const btn = document.getElementById("createBtn");
const div = document.getElementById("animatedDiv");

div.style.backgroundColor = "blue";
div.style.width = "200px";
div.style.height = "200px";
div.style.marginTop = "20px";

let counter = 1;
let width = 200;
let height = 200;

btn.addEventListener("click", () => {
    const intervalId = setInterval(() => {
        const p = document.createElement("p");
        const text = document.createTextNode("p" + counter);
        p.appendChild(text);
        document.body.appendChild(p);
        counter++;

        width -= 10;
        height -= 10;

        div.style.width = width + "px";
        div.style.height = height + "px";


        if (width <= 0 || height <= 0) {
            div.style.display = "none";
            clearInterval(intervalId);
        }
    }, 3000);
});