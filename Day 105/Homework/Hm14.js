function filterObject(obj) {
    return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => value > 10)
);
}

const data = {
    apples: 5,
    oranges: 12,
    bananas: 20,
    grapes: 8,
};

console.log(filterObject(data));