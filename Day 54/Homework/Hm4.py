def say_hello():
    print("გამარჯობა! როგორ ხარ?")

def greet(func):
    print("მისალმების დაწყება:")
    func()
    print("მისალმება დასრულდა.")

greet(say_hello)
