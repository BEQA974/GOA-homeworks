list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
num1 = int(input("Enter number: "))
num2 = int(input("Enter number: "))

if num1 > num2:
    print(list1[num2:num1][::-1]) 
elif num2 > num1:
    print(list1[num1:num2])  
else:
    print([])  
