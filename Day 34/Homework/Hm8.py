# 9) Define a function that takes a list of integers and returns a new list containing only the positive numbers. Use a loop and a conditional statement.


def funtion(numbers):
    positive_numbers = []
    for num in numbers:
        if num > 0:
            positive_numbers.append(num)
    return positive_numbers

numbers = [-10, 5, -3, 7, 0, -1, 4]
print(funtion(numbers))
