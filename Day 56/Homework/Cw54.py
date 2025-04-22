#54) Add a new key-value pair to a dictionary
#Task: Create a dictionary and add a new key-value pair to it. Print the updated dictionary.

dict1={
    "name": "beqa",
    "surname": "ograpishvili",
    "academy": "Goa",
    "fav-color": "purple",
}

dict2={
    "goa-student": "True",
    "age":"15",
    "fav-programming-lang": "Html",
    "city":"Tbilisi",
}

dict1.update(dict2)
print(dict1)


