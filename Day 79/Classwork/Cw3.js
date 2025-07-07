const btn = document.getElementById("moveBtn");
const box = document.getElementById("colorBox");

let count = 0;

box.style.width = "100px";
box.style.height = "100px";
box.style.position = "relative";
box.style.backgroundColor = "red";

btn.addEventListener("click", () => {
    count++;
    box.style.backgroundColor = "green";
    
    setTimeout(() => {
        box.style.backgroundColor = "red";
    }, 10000);

    box.style.left = (count * 10) + "px";
});