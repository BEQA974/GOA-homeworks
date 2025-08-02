function printNumbersOnly() {
    for (let num of arguments) {
        if (typeof num === "string") {
        continue;
    }
        console.log(num);
    }
}

printNumbersOnly(2, "hello", 69, "beqa");