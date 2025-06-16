let container = document.getElementById("titleContainer");

let newHeading = document.createElement("h1");
newHeading.textContent = "This is the main heading";

let oldHeading = document.getElementById("subtitle");

container.replaceChild(newHeading, oldHeading);
