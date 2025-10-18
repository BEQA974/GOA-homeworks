#Power of two
def power_of_two(n):
    if n < 1:
        return False
    return (n & (n - 1)) == 0

#Row Weights
def row_weights(array):
    return (sum(array[::2]), sum(array[1::2]))

#Predict your age!
def predict_age(*ages):
    return int((sum(age**2 for age in ages) ** 0.5) / 2)

#Greet Me
def greet(name):
    return f"Hello {name.capitalize()}!"

#Sum of Cubes
def sum_cubes(n):
    return sum(i**3 for i in range(1, n+1))

#Even numbers in an array
def even_numbers(array, number):
    evens = [x for x in array if x % 2 == 0]
    return evens[-number:]

#Sort the Gift Code
def sort_gift_code(code):
    return ''.join(sorted(code))

#Sorted? yes? no? how?
def is_sorted_and_how(array):
    if array == sorted(array):
        return "yes, ascending"
    elif array == sorted(array, reverse=True):
        return "yes, descending"
    else:
        return "no"

#Remove duplicate words
def remove_duplicate_words(s):
    seen = set()
    result = []
    for word in s.split():
        if word not in seen:
            seen.add(word)
            result.append(word)
    return ' '.join(result)

#Love vs friendship
def words_to_marks(s):
    return sum(ord(c) - ord('a') + 1 for c in s.lower())

#Simple beads count
def count_red_beads(n):
    return max(0, (n - 1) * 2)

#Bumps in the Road
def bumps(road):
    if road.count('n') > 15:
        return "Car Dead"
    else:
        return "Woohoo!"

#Find the vowels
def vowel_indices(word):
    vowels = "aeiouyAEIOUY"
    return [i for i, letter in enumerate(word, start=1) if letter in vowels]





#Largest pair sum in array
def largest_pair_sum(numbers):
    numbers_sorted = sorted(numbers, reverse=True)
    return numbers_sorted[0] + numbers_sorted[1]

#Alphabet war
def alphabet_war(fight):
    left = {'w': 4, 'p': 3, 'b': 2, 's': 1}
    right = {'m': 4, 'q': 3, 'd': 2, 'z': 1}
    
    left_score = sum(left.get(c, 0) for c in fight)
    right_score = sum(right.get(c, 0) for c in fight)
    
    if left_score > right_score:
        return "Left side wins!"
    elif right_score > left_score:
        return "Right side wins!"
    else:
        return "Let's fight again!"

#Maximum Product
def adjacent_element_product(array):
    return max(array[i] * array[i + 1] for i in range(len(array) - 1))

#Filter the number
def filter_string(st):
    return int(''.join(c for c in st if c.isdigit()))

#Odd-Even String Sort
def sort_my_string(s):
    even_chars = s[::2]
    odd_chars = s[1::2]
    return even_chars + ' ' + odd_chars

#My Language Skills
def my_languages(results):
    passed = {lang: score for lang, score in results.items() if score >= 60}
    return sorted(passed, key=lambda x: passed[x], reverse=True)