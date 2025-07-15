const doubleNumbers = (arr) => {
    return arr.map(num => num * 2);
};

const numbers = [1, 2, 3, 4, 5];

const doubled = doubleNumbers(numbers);

console.log(doubled);