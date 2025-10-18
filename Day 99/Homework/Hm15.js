const words = ["sun", "apple", "orange", "tree", "ice", "moon"];

const lastVowelWord = words.findLast(word =>
    ["a","e","i","o","u"].includes(word[0].toLowerCase())
);

console.log(lastVowelWord);
