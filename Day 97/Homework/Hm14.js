function cleanUsernames(usernames) {
    return usernames.map(name => name.trim());
}

const users = ["  Alice  ", "  Bob", "Charlie  "];
console.log(cleanUsernames(users)); 
