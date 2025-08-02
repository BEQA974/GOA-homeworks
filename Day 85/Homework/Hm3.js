function addNumbers() {
    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === "number") {
        sum += arguments[i];
    }
}

console.log(sum);
}

addNumbers(1, 2, 3);          
addNumbers("a", 5, true, 10);  
