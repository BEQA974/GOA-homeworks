for (let i = 0; i < 3; i++) {
    const circle = document.createElement("div");
    circle.className = "circle";
    circle.style.width = "50px";
    circle.style.height = "50px";
    circle.style.borderRadius = "50%";
    circle.style.backgroundColor = "purple";
    circle.style.position = "relative";
    circle.style.margin = "10px";
    document.body.appendChild(circle);

    let pos = 0;
    setInterval(() => {
    pos += 10;
    circle.style.left = pos + "px";
}, 200);
}