const products = [
    { name: "Laptop", price: 1200 },
    { name: "Mouse", price: 19 },
    { name: "Keyboard", price: 75 },
    { name: "Monitor", price: 200 }
];

const cheapProducts = products.find(product => product.price < 20);

console.log(cheapProducts);
