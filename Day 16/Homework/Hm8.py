# 10
user_number = int(input("Enter natural number: "))
factorial, starting_number = 1, 1

while starting_number <= user_number:
    factorial *= starting_number
    starting_number += 1

    print("Starting number:", str(starting_number))
    print("Factorial:", str(factorial))

print("Factorial of", str(user_number), "is:", str(factorial))