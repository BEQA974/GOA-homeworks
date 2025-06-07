let num1 = Number(prompt("enter number: "));

if (num1 % 3 === 0 && num1 % 5 === 0) {
    console.log("იყოფა ორივეზე");
} else if (num1 % 3 === 0 && num1 % 5 !== 0) {
    console.log("იყოფა 3-ზე და არ იყოფა 5-ზე");
} else if (num1 % 5 === 0 && num1 % 3 !== 0) {
    console.log("იყოფა 5-ზე და არ იყოფა 3-ზე");
} else {
    console.log("არცერთზე არ იყოფა");
}
