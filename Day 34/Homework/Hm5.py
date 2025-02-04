#6) Boss level: Nested Functions: Define a function that contains another function inside it and calls the inner function.

def outer_function():
    def inner_function():
        print("hello")

    print("beka")
    inner_function()  


outer_function()
