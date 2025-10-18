const coinFlip = new Promise((resolve, reject) => {
    const result = Math.random() < 0.5 ? "Heads" : "Tails";

setTimeout(() => {
    if (result === "Heads") {
        resolve("Heads");
    } else {
        reject("Tails");
    }
    }, 1000); 
});

coinFlip
    .then(message => console.log(message))
