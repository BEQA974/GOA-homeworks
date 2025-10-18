const paragraph = document.getElementById("myParagraph");
const button = document.getElementById("myButton");

const texts = [
    "პირველი ტექსტი",
    "მეორე ტექსტი",
    "მესამე ტექსტი",
    "მეოთხე ტექსტი",
    "მეხუთე ტექსტი"
];

button.addEventListener("click", function() {

    const randomIndex = Math.floor(Math.random() * texts.length);


    paragraph.textContent = texts[randomIndex];
});
