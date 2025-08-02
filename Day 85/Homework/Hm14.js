{
     var x = "var ბლოკში";
    let y = "let ბლოკში";
    const z = "const ბლოკში";
}

console.log(x); 
console.log(y); 
console.log(z); 



function testScope() {
    var a = "var ფუნქციაში";
    let b = "let ფუნქციაში";
    const c = "const ფუნქციაში";

    console.log(a); 
    console.log(b); 
    console.log(c); 
}

testScope();

console.log(a);
console.log(b);
console.log(c); 