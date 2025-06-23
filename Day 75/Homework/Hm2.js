let number = 1;

let intervalId = setInterval(function() {
    console.log(number);
    if (number === 10) {
        clearInterval(intervalId);
    }
    number++;
}, 2000);