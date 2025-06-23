let colors = ["red", "blue", "green", "yellow", "purple"];
let index = 0;

let intervalId = setInterval(function() {
    document.body.style.backgroundColor = colors[index];
    index++;

    if (index === 5) {
        clearInterval(intervalId); 
    }
}, 3000); 
