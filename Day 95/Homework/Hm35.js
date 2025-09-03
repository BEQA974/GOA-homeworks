function firstHalf(str) {
    return str.slice(0, Math.floor(str.length / 2));
}

console.log(firstHalf("HelloWorld"));
console.log(firstHalf("JavaScript")); 