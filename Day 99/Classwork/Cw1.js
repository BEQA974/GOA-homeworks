const products = [
    { name: "Laptop", price: 1200 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 75 },
    { name: "Monitor", price: 200 }
];

const cheapProducts = products.filter(product => product.price < 100);

console.log(cheapProducts);
