function manualMax(arr) {
    let max = arr[0];
        for (let n of arr) {
            if (n > max) max = n;
    }
return max;
}
console.log(manualMax([5, 12, 9]));