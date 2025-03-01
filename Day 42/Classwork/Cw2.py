tech_products = {
    "Laptop": 1200,
    "Smartphone": 800,
    "Tablet": 400,
    "Smartwatch": 250,
    "Headphones": 150
}

print(tech_products.keys())

print(tech_products.values())


print(tech_products.items())


for key, value in tech_products.items():
    print(f"{key}: {value}")
