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

