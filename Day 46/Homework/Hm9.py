primes = [num for num in range(2, 101) if not (False in [num % i != 0 for i in range(2, num)])]
print(primes)
