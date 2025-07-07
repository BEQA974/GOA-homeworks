const div = document.createElement("div");
div.textContent = "I will disappear";
div.style.width = "150px";
div.style.height = "50px";
div.style.backgroundColor = "orange";
div.style.margin = "10px";

const btn = document.createElement("button");
btn.textContent = "Hide";

document.body.appendChild(btn);
document.body.appendChild(div);

btn.addEventListener("click", () => {
    div.style.display = "none";
    setTimeout(() => {
    div.style.display = "block";
}, 5000);
});
