name = input("Enter your name: ")
surname = input("Enter your surname: ")
age = int(input("Enter your age: "))

def generate_big_sentence(name, surname, age):
    print("My name is {}, my surname is {}, and my age is {}.".format(name, surname, age))

generate_big_sentence(name, surname, age)
