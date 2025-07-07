let div = document.getElementById("myDiv");

const paragraphs = div.getElementsByTagName("p");

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "green";     
    paragraphs[i].style.backgroundColor = "black"; 
}