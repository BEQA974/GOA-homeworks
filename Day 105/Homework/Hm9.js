const MyObj={
    name: "Beqa",
    age: 16,
    school: "High School",
    city: "Tbilisi",
    height:1.71
}
total=0
for(let i of Object.values(MyObj)){
    if(typeof i ==="number"){
        total +=i

    }
}
console.log(total) 