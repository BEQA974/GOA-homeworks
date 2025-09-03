function countWords(sentence) {
    let cleaned = sentence.trim().replace(/\s+/g, ""); 
if (cleaned === "") return 0; 
    return cleaned.split(" ").length;
}


console.log(countWords("   Hello   world!   ")); 
console.log(countWords("This   is   a   test")); 
console.log(countWords("   ")); 
