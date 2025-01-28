num = int(input("Enter mark: "))

if num >= 90 and num <= 100:
    print("A")
elif num >= 80 and num <= 89:
    print("B")
elif num >= 70 and num <= 79:
    print("C")
elif num >= 60 and num <= 69:
    print("D")
elif num < 60:
    print("F")
else:
    print("Invalid mark.")

