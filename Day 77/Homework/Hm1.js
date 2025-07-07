let count = 10;

let intervalId = setInterval(function() {
    console.log(count);

if (count === 0) {
    clearInterval(intervalId);
    console.log("Time's up!");
}

count--;
}, 1000);