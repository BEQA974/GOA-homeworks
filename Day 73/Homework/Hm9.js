let container = document.getElementById("buttonContainer");

let newSpan = document.createElement("span");
newSpan.textContent = "This is a span now";

let oldButton = document.getElementById("myButton");

container.replaceChild(newSpan, oldButton);