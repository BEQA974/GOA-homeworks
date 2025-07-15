const sumPositiveEvens = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0 || arr[i] % 2 !== 0) continue;
    sum += arr[i];
}
console.log(sum);
};

sumPositiveEvens([2, -4, 6, 3, -2, 8]);