const numbers = [5, 8, 12, 7, 10, 15, 4];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    if (sum > 50) {
    break;
}
}

console.log("ჯამი:", sum);