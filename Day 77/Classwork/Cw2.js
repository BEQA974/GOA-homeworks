let myArray = [10, 20, 30, 40, 50];

let intervalId = setInterval(function () {
    for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
    }
    console.log("-----------");
}, 1000);

for (let i = 0; i < myArray.length; i++) {
    myArray[i] = myArray[i] + 5; 
}