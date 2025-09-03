let str1 = "banana";
let firstA = str1.indexOf("a");           
let secondA = str1.indexOf("a", firstA + 1); 

console.log("First a:", firstA);   
console.log("Second a:", secondA); 

let str2 = "Hello world";
if (str2.indexOf("world") !== -1) {
    console.log('"world" exists in the string'); 
} else {
    console.log('"world" does not exist in the string');
}
