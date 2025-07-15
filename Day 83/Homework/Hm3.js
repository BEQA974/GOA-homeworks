const sumUntilNegative = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) break;
    sum += arr[i];
}
console.log(sum);
};

sumUntilNegative([5, 10, 15, -4, 20]);