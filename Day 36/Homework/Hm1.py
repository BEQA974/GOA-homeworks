#Find the smallest integer in the array
def find_smallest_int(arr):
    smallest = arr[0] 
    
    for num in arr:
        if num < smallest: 
            smallest = num
            
    return smallest

numbers = [34, 15, 88, 2]


#Convert a String to a Number!
def string_to_number(s):
    return int(s)


#Grasshopper - Summation
def summation(num):
    total = 0
    for i in range(1, num + 1):
        total += i
    return total

