#Reversed sequence
def reverse_seq(n):
    return list(range(n, 0, -1))

#Rock Paper Scissors!
def rps(p1, p2):
    if p1 == p2:
        return "Draw!"
    
    wins = {"rock": "scissors", "scissors": "paper", "paper": "rock"}
    
    return "Player 1 won!" if wins[p1] == p2 else "Player 2 won!"

#Is n divisible by x and y?
def is_divisible(n, x, y):
    return n % x == 0 and n % y == 0

#If you can't sleep, just count sheep!!
def count_sheep(n):
    return "".join(f"{i} sheep..." for i in range(1, n + 1))

#Grasshopper - Grade book
def get_grade(s1, s2, s3):
    avg = (s1 + s2 + s3) / 3  # ვპოულობთ საშუალო ქულას

    if avg >= 90:
        return 'A'
    elif avg >= 80:
        return 'B'
    elif avg >= 70:
        return 'C'
    elif avg >= 60:
        return 'D'
    else:
        return 'F'
