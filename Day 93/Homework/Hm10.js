let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let operator = prompt("Enter an operator (+, -, *, /):");

num1 = Number(num1);
num2 = Number(num2);

if (isNaN(num1) || isNaN(num2)) {
    console.log("Invalid input: both must be numbers");
} else {
    let result;
    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            console.log("Invalid operator");
    }
    if (result !== undefined) {
        console.log("Result:", result);
    }
}
