let weight = prompt("");  
let height = prompt("");  

weight = parseFloat(weight);
height = parseFloat(height);

let bmi = weight / (height * height);

console.log("BMI:", bmi);
