num1 = float(input("Enter number: "))
num2 = float(input("Enter number: "))
num3 = float(input("Enter number: "))

if num1 > num2 and num1 > num3:
    print("Biggest number is", num1)
elif num2 > num1 and num2 > num3:
    print("Biggest number is", num2)
elif num3 > num1 and num3 > num2:
    print("Biggest number is", num3)
else:
    print("Two or three numbers are equal")
