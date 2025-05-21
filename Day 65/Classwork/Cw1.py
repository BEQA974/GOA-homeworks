#Vowel Count
def get_count(s):
    vowels = "aeiou"
    return sum(1 for char in s if char in vowels)
