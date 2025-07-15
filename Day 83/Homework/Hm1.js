const logPositiveNumbers = (arr) => {
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) continue;
    console.log(arr[i]);
}
};

logPositiveNumbers([-3, 0, 4, 7, -1, 9]);