const quotes = [
    "მეცადე იყო უკეთესი, ვიდრე გუშინ იყავი.",
    "წარმატება იწყება მცირე ნაბიჯებით.",
    "სწავლა არის უსასრულო მოგზაურობა.",
    "არ დანებდე, რადგან ყოველი დღე ახალი შანსია.",
    "ბედნიერება იწყება შიგნიდან."
];

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
return `rgb(${r},${g},${b})`;
}

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteBox").innerText = quotes[randomIndex];

    document.body.style.background = randomColor();
}
document.getElementById("quoteBtn").addEventListener("click", generateQuote);
