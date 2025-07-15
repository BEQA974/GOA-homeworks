const countWordsStartingWithA = (words) => {
    let count = 0;
    for (let i = 0; i < words.length; i++) {
    if (words[i].length < 1) continue;
    if (words[i][0].toLowerCase() === "a") count++;
}
console.log(count);
};

countWordsStartingWithA(["apple", "banana", "Ant", "dog", "aero", ""]);