#Get the mean of an array
def get_average(marks):
    return int(sum(marks) / len(marks))

#Keep up the hoop
def hoop_count(n):
    if n>=10:
        return "Great, now move on to tricks"
    elif n<=10:
        return "Keep at it until you get it"

#Reversed Words
def reverse_words(s):
    return " ".join(s.split(' ')[::-1])

#Beginner Series #4 Cockroach
def cockroach_speed(s):
    return int(s*27.777778)

#Switch it Up!
def switch_it_up(number):
    res = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"]
    return res[number]

#Function 2 - squaring an argument
def square(n):
    return n*n

#Removing Elements
def remove_every_other(my_list):
    return my_list[::2]

#Twice as old
def twice_as_old(dad_years_old, son_years_old):
    res = (dad_years_old - 2 * son_years_old)
    
    if res < 0: return res*-1
    return res

#All Star Code Challenge #18
def str_count(strng, letter):
    return strng.count(letter)

#Is it even?
def is_even(n): 
    return n % 2 == 0

#Grasshopper - Terminal game move function
def move(position, roll):
    return position + roll*2

#Get Planet Name By ID
def get_planet_name(id):
    if id == 1: return "Mercury"
    elif id == 2: return "Venus"
    elif id == 3: return "Earth"
    elif id == 4: return "Mars"
    elif id == 5: return "Jupiter"
    elif id == 6: return "Saturn"
    elif id == 7: return "Uranus"
    elif id == 8: return "Neptune"

#Will there be enough space?
def enough(cap, on, wait):
    available = cap - on
    
    if available >= wait: return 0
    return wait - available

#What is between?
def between(a,b):
    return list(range(a, b+1))

#Is the string uppercase?
def is_uppercase(inp):
    return inp == inp.upper()

#Grasshopper - Debug sayHell
def say_hello(name):
    return "Hello, " + name

#Count the Monkeys!
def monkey_count(n):
    return list(range(1, n+1))

#Powers of 2
def powers_of_two(n):
    return [2**i for i in range(n+1)]

#Cat years, Dog years
def human_years_cat_years_dog_years(human_years):
    return [human_years, 
    15 + (9 if human_years > 1 else 0) + (4 * (human_years - 2) if human_years > 2 else 0),
    15 + (9 if human_years > 1 else 0) + (5 * (human_years - 2) if human_years > 2 else 0)]

#Find the first non-consecutive number
def first_non_consecutive(arr):
    if len(arr) < 2:
        return None 

    for i in range(1, len(arr)):
        if arr[i] != arr[i - 1] + 1:
            return arr[i]
    
    return None 

#altERnaTIng cAsE <=> ALTerNAtiNG CaSe
def to_alternating_case(s):
    return s.swapcase()

#Correct the mistakes of the character recognition software
def correct(text):
    return text.replace('5', 'S').replace('0', 'O').replace('1', 'I')

#Is it a palindrome?
def is_palindrome(s):
    s = s.lower()  
    return s == s[::-1] 

#Do I get a bonus?
def bonus_time(salary, bonus):
    total = salary * 10 if bonus else salary
    return f"${total}"

#Student's Final Grade
def final_grade(exam, projects):
    if exam > 90 or projects > 10:
        return 100
    elif exam > 75 and projects >= 5:
        return 90
    elif exam > 50 and projects >= 2:
        return 75
    else:
        return 0

#Sum The Strings
def sum_str(a, b):
    return str(int(a or 0) + int(b or 0))

