#36) Create a list of numbers squared if they are divisible by 2
#Task: Use a list comprehension to create a list that squares each number in a given list only if the number is divisible by 2.

numbers = [1, 2, 3, 4, 5, 6]
num = [x**2 for x in numbers if x % 2 == 0]
print(num)
