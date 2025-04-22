#39) Function to check if a number is even or odd
#Task: Write a function that takes an integer as input and returns whether it is even or odd.

def check_even_odd(number):
    if number % 2 == 0:
        print("Even")
    else:
        print("Odd")

num = int(input("Enter a number: "))
check_even_odd(num)
