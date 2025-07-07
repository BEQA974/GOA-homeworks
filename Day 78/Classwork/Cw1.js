let paragraphs = document.getElementsByTagName("p");

let textsArray = [];

for (let i = 0; i < paragraphs.length; i++) {

    textsArray.push(paragraphs[i].textContent);
}

console.log(textsArray);