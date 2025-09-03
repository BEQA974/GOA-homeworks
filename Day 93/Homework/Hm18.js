let distance = prompt("");  
let fuelUsed = prompt(""); 

distance = parseFloat(distance);
fuelUsed = parseFloat(fuelUsed);

let kmPerLiter = distance / fuelUsed;

console.log("Kilometers per liter:", kmPerLiter);
