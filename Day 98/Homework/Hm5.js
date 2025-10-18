const values = [1, "hi", 0, true, null];
const hasFalsy = values.some(el => !el);

console.log(hasFalsy); 
