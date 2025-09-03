function startsWithAtPosition(str, substring, position) {
    return str.startsWith(substring, position);
}

console.log(startsWithAtPosition("JavaScript is fun", "Script", 4)); 
console.log(startsWithAtPosition("JavaScript is fun", "Java", 1));   