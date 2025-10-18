function getRandomPromise() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        const number = Math.random(); 
    if (number > 0.5) {
        resolve(`Resolve: ${number}`);
    } else {
        reject(`Reject: ${number}`);
    }
    }, 1000); 
});
}

getRandomPromise()
    .then(result => console.log(result))
