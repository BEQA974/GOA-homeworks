# 8) Find the Maximum
# Create a function that takes a list of numbers and uses a loop to find and return the maximum number.

def find_max(numbers):
    if len(numbers) == 0:
        return 0

    max_num = numbers[0]
    for num in numbers:
        if num > max_num:
            max_num = num
    return max_num

numbers = [10, 5, 20, 8, 25, 3]
print("Maximum number:", find_max(numbers))



