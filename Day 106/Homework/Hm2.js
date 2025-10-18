const randomStringPromise = new Promise((resolve, reject) => {
    const strings = ["apple", "banana", "kiwi", "grape", "orange"];

    const randomIndex = Math.floor(Math.random() * strings.length);
    const chosen = strings[randomIndex];

    console.log("აირჩეული სიტყვა:", chosen);

if (chosen.length % 2 === 0) {
    resolve("success");
} else {
    reject("failure");
}
});
function successHandler(message) {
    console.log(message);
}

function failureHandler(message) {
    console.log(message);
}

randomStringPromise.then(successHandler, failureHandler);
