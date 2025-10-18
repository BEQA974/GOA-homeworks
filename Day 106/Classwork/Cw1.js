const taskPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task complete");
    }, 3000);
});

taskPromise.then(message => {
    console.log(message);
});