const prodSection = document.getElementById("products-section")

fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(products => {
        products.forEach(product => {
            let productDiv = document.createElement("div");

            // პროდუქტის ID
            let productId = document.createElement("h3");
            productId.textContent = `Id: ${product.id}`;
            productDiv.appendChild(productId)

            // პროდუქტის სურათი
            let productImage = document.createElement("img");
            productImage.src = product.image;
            productDiv.appendChild(productImage);

            // პროდუქტის სახელი
            let productTitle = document.createElement("h2");
            productTitle.textContent = product.title;
            productDiv.appendChild(productTitle);

            // რეიტინგის და რაოდენობის label
            let infoLabel = document.createElement("label");
            infoLabel.textContent = `${product.rating.rate}/5 ⭐, Remaining: ${product.rating.count}`
            productDiv.appendChild(infoLabel)

            // ფასის პარაგრაფი
            let priceP = document.createElement("p");
            priceP.textContent = `Product price: ${product.price}`;
            productDiv.appendChild(priceP);

            // პროდუქტის div ბლოკის ჩამატება html-ში
            prodSection.appendChild(productDiv)
        });
    })
    .catch(error => console.log(error))