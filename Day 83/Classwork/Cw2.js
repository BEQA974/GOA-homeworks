const printLongStrings = (arr) => {
    for (let i = 0; i < arr.length; i++) {
    if (arr[i].length <= 5) {
    continue; 
    }
    console.log(arr[i]);
}
};

const words = ["apple", "banana", "hi", "sunshine", "book", "awesome", "yes", "hello", "mountain", "cat"];

printLongStrings(words);