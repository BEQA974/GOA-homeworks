const findLongWord = (words) => {
    for (let i = 0; i < words.length; i++) {
    if (words[i].length > 5) {
    console.log(words[i]);
    break;
    }
}
};

findLongWord(["hi", "hello", "awesome", "cat"]);
