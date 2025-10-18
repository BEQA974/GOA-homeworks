function workingOnPromise(text) {
    const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
if (text.length > 5) {
        resolve(`Resolve: "${text}" სიგრძე მეტია 5-ზე`);
} else {
        reject(`Reject: "${text}" სიგრძე ნაკლებია ან ტოლია 5-ის`);
}
    }, 1000); 
    });

promise
    .then(result => console.log(result))
}

workingOnPromise("Hello");       
workingOnPromise("JavaScript");  
workingOnPromise("Code");        
