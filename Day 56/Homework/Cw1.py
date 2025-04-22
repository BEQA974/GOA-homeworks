#Expressions Matter
def expression_matter(a, b, c):
    combs = [
        a+b+c,
        a*b*c,
        (a+b)*c,
        a*(b+c),
        a+(b*c),
        (a*b)+c,
        a*b+c
    ]
    
    return max(combs)

#I love you, a little , a lot, passionately ... not at all
def how_much_i_love_you(nb_petals):
    num=nb_petals % 6
    if num == 0: return "not at all"
    elif num == 1: return "I love you"
    elif num == 2: return "a little"
    elif num == 3: return "a lot"
    elif num == 4: return "passionately"
    elif num == 5: return "madly"

#Reverse List Order
def reverse_list(l):
    return list(reversed(l))

#Count Odd Numbers below n
def odd_count(n):
    return n//2

#Difference of Volumes of Cuboids
def find_difference(a, b):
    v_a = a[0] * a[1] * a[2]
    v_b = b[0] * b[1] * b[2]
    
    if v_a > v_b: return v_a - v_b
    return v_b - v_a

#Welcome!
def greet(language):
    all_lang = [
        ("english", "Welcome"),
        ("czech", "Vitejte"),
        ("danish", "Velkomst"),
        ("dutch", "Welkom"),
        ("estonian", "Tere tulemast"),
        ("finnish", "Tervetuloa"),
        ("flemish", "Welgekomen"),
        ("french", "Bienvenue"),
        ("german", "Willkommen"),
        ("irish", "Failte"),
        ("italian", "Benvenuto"),
        ("latvian", "Gaidits"),
        ("lithuanian", "Laukiamas"),
        ("polish", "Witamy"),
        ("spanish", "Bienvenido"),
        ("swedish", "Valkommen"),
        ("welsh", "Croeso")
    ]

    for lang, greeting in all_lang:
        if lang == language:
            return greeting
    return "Welcome"

#Drink about
def people_with_age_drink(age):
    if age < 14:
        return "drink toddy"
    elif age < 18:
        return "drink coke"
    elif age < 21:
        return "drink beer"
    else:
        return "drink whisky"

#Sort and Star
def two_sort(array):
    array.sort()
    
    res = ""
    for i in array[0]:
        res += i+"***"
    
    return res[:-3]

#Grasshopper - Messi Goals
la_liga_goals = 43
champions_league_goals = 10
copa_del_rey_goals = 5

total_goals = la_liga_goals + champions_league_goals + copa_del_rey_goals

#Short Long Short
def solution(a, b):
    if len(a) > len(b):
        return b+a+b
    else:
        return a+b+a

#My head is at the wrong end!
def fix_the_meerkat(arr):
    arr.reverse()
    return arr

#Find Multiples of a Number
def find_multiples(n, limit):
    return [i for i in range(n, limit + 1, n)]

#Unfinished Loop - Bug Fixing #1
def create_array(number):
    new_array = []
    
    for i in range(1, number + 1):
        new_array.append(i)
        
    return new_array

#Basic variable assignment
a = "code"
b = "wa.rs"
name = a + b

#get character from ASCII Value
def get_char(c):
    return chr(c)

