#1 Convert a Number to a String!
def number_to_string(num):
    return str(num)

#2 Simple multiplication
def simple_multiplication(number) :
    if number%2==0:
        return number * 8
    else:
        return number*9
    
#3 Opposites Attract
def lovefunc(flower1, flower2):
    return (flower1 + flower2) % 2 == 1

#4 Convert a string to an array
def string_to_array(s):
    if s == "":
        return [""]
    return s.split()

#5 Beginner Series #4 Cockroach
import math
def cockroach_speed(s):
    cm=s*100000/3600
    return math.floor(cm)
    
#6 Training JS #7: if..else and ternary operator
def sale_hotdogs(n):
    
    if n<5:
        price=100
    elif n>=5 and n<10:
        price=95
    elif n>=10:
        price=90
        
    return price*n
    
    
#7 Grasshopper - Basic Function Fixer
def add_five(num):
    total = num + 5
    return total

#8 Grasshopper - If/else syntax debug
def check_alive(health):
    if health > 0:
        return True
    else:
        return False
    
#9 Stringy Strings
def stringy(size):
    result = ""
    for i in range(size):
        result += "1" if i % 2 == 0 else "0"
    return result

#10 Hello, Name or World!
def hello(name=""):
    if not name:
        return "Hello, World!"
    name = name.capitalize()
    return f"Hello, {name}!"

#11 Convert to Binary
def to_binary(n):
    return int(bin(n)[2:])

#12 Price of Mangoes
def mango(quantity, price):
    free = quantity // 3       
    total = (quantity - free) * price
    return total

#13 FIXMe: Replace all dots
import re
def replace_dots(s):
    return re.sub(r"\.", "-", s)

#14 Generate range of integers
def generate_range(start, stop, step):
    return list(range(start, stop + 1, step))

#15 Return to Sanity
def mystery():
    results = {
    'sanity': 'Hello'}
    return results

#16 Grasshopper - Debug
def weather_info (temp):
    c = convertToCelsius(temp)
    if (c <= 0):
        return (str(c) + " is freezing temperature")
    else:
        return (str(c) + " is above freezing temperature")
    
def convertToCelsius (temperature):
    celsius = (temperature - 32) * (5.0/9.0)
    return celsius

#17 Is this my tail?
def correct_tail(body, tail):
    sub = body[-len(tail):]
    if sub == tail:
        return True
    else:
        return False
    
#18 How do I compare numbers?
def what_is(x):
    if x == 42:
        return 'everything'
    elif x == 42 * 42:
        return 'everything squared'
    else:
        return 'nothing'
    
#19 Swap Values

def swap_values(args): 
    args[0], args[1] = args[1], args[0]

#20 101 Dalmatians - squash the bugs, not the dogs!
def how_many_dalmatians(n):
    dogs = [
        "Hardly any",
        "More than a handful!",
        "Woah that's a lot of dogs!",
        "101 DALMATIONS!!!"
    ]
    
    if n <= 10:
        respond = dogs[0]
    elif n <= 50:
        respond = dogs[1]
    elif n == 101:
        respond = dogs[3]
    else:
        respond = dogs[2]
    
    return respond

# Form The Minimum
def min_value(digits):
    
    unique_digits = sorted(set(digits))
    
    return int("".join(map(str, unique_digits)))

#Triangular Treasure
def triangular(n):
    if n <= 0:
        return 0
    return n * (n + 1) // 2 

#Sum of Minimums!
def sum_of_minimums(numbers):
    return sum(min(row) for row in numbers)

#Fizz Buzz
def fizzbuzz(n):
    result = []
    for i in range(1, n + 1):
        if i % 3 == 0 and i % 5 == 0:
            result.append("FizzBuzz")
        elif i % 3 == 0:
            result.append("Fizz")
        elif i % 5 == 0:
            result.append("Buzz")
        else:
            result.append(i)
    return result
