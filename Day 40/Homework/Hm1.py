#Beginner Series #1 School Paperwork
def paperwork(n, m):
    if n < 0 or m < 0:
        return 0
    return n * m

#MakeUpperCase
def make_upper_case(s):
    return s.upper()

#Beginner Series #2 Clock
def past(h, m, s):
    return (h * 3600000) + (m * 60000) + (s * 1000)

#Are You Playing Banjo?
def are_you_playing_banjo(name):
    if name[0].lower() == "r":  
        return name + " plays banjo"
    else:
        return name + " does not play banjo"

#Abbreviate a Two Word Name
def abbrev_name(name):
    first, last = name.split()  
    return f"{first[0].upper()}.{last[0].upper()}"
