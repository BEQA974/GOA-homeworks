#7) Write a function that takes a list of numbers and checks whether each number is even or odd using a loop and conditional statements. 
# Print "Even" for even numbers and "Odd" for odd numbers.

def check_even_odd(numbers):
    for num in numbers:
        if num % 2 == 0:
            print(f"{num} is Even")
        else:
            print(f"{num} is Odd")

check_even_odd([1, 2, 3, 4, 5, 6])