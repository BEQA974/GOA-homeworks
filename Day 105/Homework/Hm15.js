function swapKeysAndValues(obj) {
    return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key])
    );
}

const original = {
    a: 1,
    b: 2,
    c: 3
};

console.log(swapKeysAndValues(original));

