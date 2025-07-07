let number = 1


let intervalId = setInterval(function() {
    number++;
    console.log(number);
    if (number === 5) {
        clearInterval(intervalId);
    }   
}, 1000);