const stringLength = (str) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (str.length % 2 === 0) {
                resolve(str)
            } else {
                reject(str)
            }
        }, 2000)
    })
}


const promises = [
    stringLength("Hello"),    
    stringLength("World!"),  
    stringLength("JS")       
];


Promise.all(promises)
    .then(results => {
        console.log(results)
    })
    .catch(error => {
        console.log(error)
    })