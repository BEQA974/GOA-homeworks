#Sum of the first nth term of Series
def series_sum(n):
    total = 0.0
    denominator = 1
    for _ in range(n):
        total += 1 / denominator
        denominator += 3
    return "{:.2f}".format(total)

#Testing 1-2-3
def number(lines):
    return [f"{i+1}: {line}" for i, line in enumerate(lines)]

# Count the divisors of a number
def divisors(n):
    count = 0
    for i in range(1, int(n**0.5) + 1):
        if n % i == 0:
            count += 1
            if i != n // i:
                count += 1
    return count

#Find the divisors!
def divisors(n):
    result = [i for i in range(2, n) if n % i == 0]
    if not result:
        return f"{n} is prime"
    return result

#Remove the minimum
def remove_smallest(numbers):
    if not numbers:
        return []
    numbers_copy = numbers.copy() 
    numbers_copy.remove(min(numbers_copy))
    return numbers_copy

#Find the stray number
def stray(numbers):
    for num in numbers:
        if numbers.count(num) == 1:
            return num

#Sort Numbers
def solution(lst):
    if not lst:
        return []
    return sorted(lst)

#Make a function that does arithmetic!
def arithmetic(a, b, operator):
    if operator == "add":
        return a + b
    elif operator == "subtract":
        return a - b
    elif operator == "multiply":
        return a * b
    elif operator == "divide":
        return a / b
    else:
        raise ValueError("Unknown operator")

#Breaking chocolate problem
def break_chocolate(n, m):
    if n == 0 or m == 0:
        return 0
    return n * m - 1

#Anagram Detection
def is_anagram(test, original):
    return sorted(test.lower()) == sorted(original.lower())