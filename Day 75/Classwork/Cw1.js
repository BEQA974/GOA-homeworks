function printName() {
    console.log("ბექა ოღრაპიშვილი");
}

let myInterval = setInterval(printName, 10000);

let stopButton = document.getElementById("stopBtn");

stopButton.addEventListener("click", function() {
    clearInterval(myInterval);
    console.log("ინტერვალი გაჩერდა");
});
