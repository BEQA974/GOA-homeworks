#16) Check if the user is tall enough
#Task: Ask the user for their height (in cm) and check if they are taller than 150 cm. Print an appropriate message based on their height.

height=int(input("enter height: "))
if height > 150:
    print("you are tollet than 150")
elif height < 150:
    print("you are shorter than 150")
