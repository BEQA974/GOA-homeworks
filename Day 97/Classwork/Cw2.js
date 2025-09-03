function allStrings(arr) {
    return arr.every(element => typeof element === "string");
}

console.log(allStrings(["apple", "banana", "cherry"])); 
console.log(allStrings(["apple", 42, "cherry"]));       
