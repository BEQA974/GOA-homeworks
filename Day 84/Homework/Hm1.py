#Sum of a sequence
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


#2-6)


#Simple Fun #176: Reverse Letter
def reverse_letter(st):
    filtered = [c for c in st if c.isalpha()]
    return ''.join(filtered[::-1])


#Find the middle element
def gimme(input_array):
    sorted_arr = sorted(input_array)
    middle_value = sorted_arr[1]
    return input_array.index(middle_value)

#Sum of angles
def angle(n):
    return (n - 2) * 180

#Round up to the next multiple of 5
def round_to_next5(n):
    return n if n % 5 == 0 else n + (5 - n % 5)

#Two Oldest Ages
def two_oldest_ages(ages):
    sorted_ages = sorted(ages)
    return [sorted_ages[-2], sorted_ages[-1]]