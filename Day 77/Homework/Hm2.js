let isHello = true;

const interval = setInterval(function() {
if (isHello) {
    document.title = "Hello";
    isHello = false;
} else {
    document.title = "Goodbye";
    isHello = true;
}
}, 1000);

setTimeout(function() {
    clearInterval(interval);
}, 6000);