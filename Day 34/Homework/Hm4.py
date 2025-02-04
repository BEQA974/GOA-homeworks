# 5) Default Arguments: Define a function that takes a name as input and prints a greeting. If no name is provided, it should use "Guest" as the default.

def function(name="guest"):
    if name == "guest":  
        name = input("Enter your name: ")
    print(f"Hello, {name}")

function() 
