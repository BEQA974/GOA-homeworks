def is_divisible_by_3(x):
    return x % 3 == 0
numbers = [1, 3, 4, 6, 7, 9, 10, 12, 15, 17, 18]
divisible_by_3 = list(filter(is_divisible_by_3, numbers))

print(divisible_by_3)
