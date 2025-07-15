const findLongName = (names) => {
    for (let i = 0; i < names.length; i++) {
    if (names[i].length > 8) {
    console.log(names[i]);
    break;
    }
}
};

findLongName(["Ana", "George", "Beqa", "Leonardo", "Christina"]);