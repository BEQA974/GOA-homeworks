function alwaysResolve() {
    return new Promise((resolve) => {
    resolve("resolved");
});
}

const p1 = alwaysResolve();
const p2 = alwaysResolve();
const p3 = alwaysResolve();

Promise.all([p1, p2, p3])
    .then(result => console.log(result));
