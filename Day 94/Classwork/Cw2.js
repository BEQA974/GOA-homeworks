let url = "https://example.com/";
    if (url.endsWith("/")) {
        console.log("URL ends with /");
    } else {
        console.log("URL does not end with /");
    }

function endsWithS(word) {
    return word.endsWith("s");
}

console.log(endsWithS("cats"));   
console.log(endsWithS("dog"));    
console.log(endsWithS("books")); 