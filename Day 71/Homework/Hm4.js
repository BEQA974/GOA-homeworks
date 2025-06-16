function returnsMax(array) {
    let max = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }

    console.log(max)
}

returnsMax([3, 7, 2, 9, 5, 11, 1])