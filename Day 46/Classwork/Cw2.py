num1 = [num for num in range(1, 101) if (num % 3 == 0 or num % 5 == 0) and not (num % 3 == 0 and num % 5 == 0)]
print(num1)
