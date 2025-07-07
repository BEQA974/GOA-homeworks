const box = document.getElementById("box");
let moved = 0;

const interval = setInterval(() => {
    if (moved >= 100) {
    clearInterval(interval);
    } else {
    moved += 10;
    box.style.left = moved + "px";
    }
}, 200);