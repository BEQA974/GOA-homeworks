const box = document.getElementById("box");
    let position = 0;
    const slide = setInterval(function() {
    position += 5; 
    box.style.left = position + "px";
}, 100);