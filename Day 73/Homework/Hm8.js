let container = document.getElementById("textContainer");

let newParagraph = document.createElement("p");
newParagraph.textContent = "This is the new paragraph.";

let oldParagraph = document.getElementById("oldParagraph");

container.replaceChild(newParagraph, oldParagraph);