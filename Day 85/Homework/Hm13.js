function outerFunction() {
    let count = 0;
    console.log("Before inner function call:", count); 

    function innerFunction() {
    count += 5;  
    }

    innerFunction();

    console.log("After inner function call:", count); 
}

outerFunction();