#The Coupon Code
from datetime import datetime

def check_coupon(entered_code, correct_code, current_date, expiration_date):
    if entered_code != correct_code:
        return False

    current = datetime.strptime(current_date, "%B %d, %Y")
    expiration = datetime.strptime(expiration_date, "%B %d, %Y")

    return current <= expiration

#Are the numbers in order?
def in_asc_order(arr):
    return all(arr[i] <= arr[i+1] for i in range(len(arr)-1))

#Flatten and sort an array
def flatten_and_sort(array):
    flat = [num for sub in array for num in sub]
    return sorted(flat)

#Factorial
def factorial(n):
    if n == 0 or n == 1:
        return 1
    return n * factorial(n - 1)

#Maximum Length Difference
def mxdiflg(a1, a2):
    if not a1 or not a2:
        return -1
    
    len_a1 = [len(s) for s in a1]
    len_a2 = [len(s) for s in a2]
    
    return max(abs(max(len_a1) - min(len_a2)), abs(max(len_a2) - min(len_a1)))

#Alternate capitalization
def capitalize(s):
    even = ''.join(c.upper() if i % 2 == 0 else c.lower() for i, c in enumerate(s))
    odd  = ''.join(c.lower() if i % 2 == 0 else c.upper() for i, c in enumerate(s))
    return [even, odd]

#No oddities here
def no_odds(values):
    return [x for x in values if x % 2 == 0]

#Check the exam
def check_exam(correct_answers, student_answers):
    score = 0
    for ca, sa in zip(correct_answers, student_answers):
        if sa == "":
            score += 0
        elif sa == ca:
            score += 4
        else:
            score -= 1
    return max(score, 0)

#Fix string case
def solve(s):
    lower_count = sum(1 for c in s if c.islower())
    upper_count = sum(1 for c in s if c.isupper())
    
    if upper_count > lower_count:
        return s.upper()
    else:
        return s.lower()

#Number of Decimal Digits
def digits(n):
    return len(str(n))



