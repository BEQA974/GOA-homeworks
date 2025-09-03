let num1 = String(prompt("Enter: "))
let num2 = String(prompt("Enter: "))

let sumInt = parseInt(num1) + parseInt(num2);
console.log(sumInt);

let sumFloat = parseFloat(num1) + parseFloat(num2);
console.log(sumFloat);

console.log(sumInt === sumFloat);
