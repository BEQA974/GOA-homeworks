const checkending = sentense => {
    return sentense.endsWith(".") || sentense.endsWith("!") || sentense.endsWith("?")
}

console.log(checkending("gdsgsghd!"))
console.log(checkending("gdsgsghd."))
console.log(checkending("gdsgsghd?"))
console.log(checkending("gdsgsghd"))