#Shortest Word
def find_short(s):
    s = s.split(" ")
    res = 1000000

    for i in s:
        if len(i) < res:
            res = len(i)
    return res

#String ends with?
def solution(text, ending):
    return text.endswith(ending)

#Mumbling
def accum(s):
    return '-'.join(char.upper() + char.lower() * i for i, char in enumerate(s))

#Sum of two lowest positive integers
def sum_two_smallest_numbers(numbers):
    numbers.sort()
    return numbers[0]+numbers[1]

#Complementary DNA
def DNA_strand(dna):
    res = ""

    for base in dna:
        if base == "A": res+="T"
        elif base == "T": res+="A"
        elif base == "C": res+="G"
        else: res+="C"

    return res

#Beginner Series #3 Sum of Numbers
def get_sum(a,b):
    return sum(range(min(a, b), max(a,b)+1))

#Friend or Foe?
def friend(x):
    res = []
    for i in x:
        if len(i) == 4:
            res.append(i)
    return res

#Credit Card Mask
def maskify(cc):
    if len(cc) <= 4:
        return cc
    res = ""
    for i in range(len(cc)):
        if i < len(cc) - 4:
            res+="#"
        else: res+=cc[i]
    return res

#Binary Addition
def add_binary(a, b):
    return bin(a + b)[2:]

#Regex validate PIN code
def validate_pin(pin):
    return (len(pin) == 4 or len(pin) == 6) and pin.isdigit()

#Is this a triangle?
def is_triangle(a, b, c):
    return (a + b > c) and (a + c > b) and (b + c > a)

#Two to One
def longest(a1, a2):
    return ''.join(sorted(set(a1 + a2)))

#Categorize New Member
def open_or_senior(data):
    result = []
    for age, handicap in data:
        if age >= 55 and handicap > 7:
            result.append("Senior")
        else:
            result.append("Open")
    return result

#Find the next perfect square!
import math

def find_next_square(n):
    root = math.isqrt(n)  
    if root * root == n:
        return (root + 1) ** 2
    else:
        return -1

