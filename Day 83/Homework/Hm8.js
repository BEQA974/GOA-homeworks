const printOdds = (arr) => {
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) continue;
    console.log(arr[i]);
}
};

printOdds([2, 5, 7, 8, 10, 11]);    