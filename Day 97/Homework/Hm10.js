function countDrNames(names) {
    return names.filter(name => name.startsWith("Dr.")).length;
}

const nameArray = ["Dr. Smith", "John Doe", "Dr. Brown", "Alice"];
console.log(countDrNames(nameArray)); 
