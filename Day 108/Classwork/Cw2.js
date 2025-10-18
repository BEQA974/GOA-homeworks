fetch('https://goa-api.onrender.com/mentors')
    .then(result => result.json())
    .then(res => console.log(res))
    .catch(error => console.error(error));