#Number of People in the Bus
def number(bus_stops):
    total = 0
    for on, off in bus_stops:
        total += on
        total -= off
    return total

#Odd or Even?
def odd_or_even(arr):
    return "even" if sum(arr) % 2 == 0 else "odd"

#The highest profit wins!
def min_max(lst):
    return [min(lst), max(lst)]
