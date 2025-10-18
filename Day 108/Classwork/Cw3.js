fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(error => console.log(error))