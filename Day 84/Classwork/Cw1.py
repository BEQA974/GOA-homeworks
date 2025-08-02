def sequence_sum(begin_number, end_number, step):
    if begin_number > end_number:
        return 0
    
    total = 0
    for i in range(begin_number, end_number + 1, step):
        total += i
    return total

#Count the Digit
def nb_dig(n, d):
    
    count = 0
    for k in range(n + 1):
        square_str = str(k * k)
        count += square_str.count(str(d))
    return count

#Remove anchor from URL
def remove_url_anchor(url):
    return url.split('#')[0]

#Find the capitals
def capitals(word):
    result = []
    for i in range(len(word)):
        if word[i].isupper():
            result.append(i)
    return result

#Small enough? - Beginner
def small_enough(array, limit):
    for i in array:
        if i>limit:
            return False
        
    return True

#Factorial

def factorial(n):
    if n < 0 or n > 12:
        raise ValueError("Error")
    
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

#Don't give me five!
def dont_give_me_five(start, end):
    count = 0
    for n in range(start, end + 1):
        if '5' not in str(n):
            count += 1
    return count

#Leap Years
def is_leap_year(year):
    return year % 400 == 0 or (year % 4 == 0 and year % 100 != 0)