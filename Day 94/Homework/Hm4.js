function middleChar(str) {
    let middleIndex = Math.floor(str.length / 2);
    return str.at(middleIndex);
}

console.log(middleChar("JavaScript")); 
console.log(middleChar("OpenAI"));  
console.log(middleChar("Hello"));    