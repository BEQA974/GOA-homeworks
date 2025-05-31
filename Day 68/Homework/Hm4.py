#Disemvowel Trolls
def disemvowel(string):
    vowels = "aeiouAEIOU"
    res = ""

    for i in string:
        if i not in vowels:
            res += i

    return res

#Square Every Digit
def square_digits(num):
    return int("".join([str(int(d)**2) for d in str(num)]))

#Highest and Lowest
def high_and_low(numbers):
    nums = list(map(int, numbers.split(" ")))
    return f"{max(nums)} {min(nums)}"

#List Filtering
def filter_list(l):
    return [i for i in l if isinstance(i, int)]

#Descending Order
def descending_order(num):
    num_str = str(num)
    sorted_digits = sorted(num_str, reverse=True)
    sorted_str = ''.join(sorted_digits)
    return int(sorted_str)

#You're a square!
def is_square(n):
    return n >= 0 and int(n ** 0.5) ** 2 == n

#Get the Middle Character
def get_middle(s):
    length = len(s)
    mid = length // 2
    
    if length % 2 == 0:
        return s[mid - 1:mid + 1] 
    else:
        return s[mid] 

#Isograms
def is_isogram(s):
    s = s.lower()  
    return len(set(s)) == len(s)

#Exes and Oh
def xo(s):
    s = s.lower()  
    return s.count('x') == s.count('o')

#Jaden Casing Strings
def to_jaden_case(string):
    return ' '.join(word.capitalize() for word in string.split())
