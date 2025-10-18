const arr = [
    "hello",
    "javascript",
    "programming",
    "world",
    "short",
    "example",
    "longerthan10chars",
    "test",
    "code",
    "strings"
];

const hasLongString = arr.some(str => str.length > 10);

console.log(hasLongString); 