const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

const keyToCheck = "color";

if (car.hasOwnProperty(keyToCheck)) {
    console.log("exists in the object");
} else {
    console.log("does not exist in the object");
}
