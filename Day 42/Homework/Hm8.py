dict1 = {
    "name": "beqa",
    "surname": "ograpishvili",
    "academy": "Goa",
    "fav-color": "purple",
    "goa-student": "True",
}

# get() მეთოდი ავტომატურად ამოწმებს key-ს არსებობას
print(dict1.get("name", "არ არის"))
