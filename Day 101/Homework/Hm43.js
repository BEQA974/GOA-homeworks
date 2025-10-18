function manualMin(arr) {
    let min = arr[0];
        for (let n of arr) {
            if (n < min) min = n;
}
    return min;
}
console.log(manualMin([5, 12, 9]));