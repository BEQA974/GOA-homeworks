fetch("https://goa-api.vercel.app/api/მომხმარებელი")  
    .then(response => {
    if (!response.ok) {
        throw new Error("Network response was not ok, status = " + response.status);
    }
    return response.json();
})
.then(data => {
    console.log("მიღებული მონაცემები:", data);
})
.catch(error => {
    console.error("შეცდომა მოხდა:", error);
});
