let expression = prompt("Enter a math expression (e.g., '12.5 + 7.3 * 2'):");

let result = eval(expression);

let intResult = parseInt(result);

let floatResult = parseFloat(result);

console.log("Original expression:", expression);
console.log("Evaluated result:", result);
console.log("Integer conversion:", intResult);
console.log("Float conversion:", floatResult);
