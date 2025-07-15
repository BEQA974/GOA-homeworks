let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
    if (sum >= 100) {
    break;
}
console.log("Added:", i, "Current sum:", sum);
}

console.log("Final sum:", sum);
