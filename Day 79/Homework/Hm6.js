const box = document.createElement("div");
const button = document.createElement("button");

box.style.width = "100px";
box.style.height = "100px";
box.style.backgroundColor = "blue";
box.style.position = "relative";
box.style.marginTop = "10px";

button.textContent = "Move";

document.body.appendChild(button);
document.body.appendChild(box);

let moveRight = 0;

button.addEventListener("click", () => {
    moveRight += 20;
    box.style.left = moveRight + "px";
    box.style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
});