let number = 1


let intervalId = setInterval(function() {
    console.log(number);
    if (number === 5) {
        clearInterval(intervalId);
    }
    number++;
}, 1000);