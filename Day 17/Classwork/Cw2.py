correct_password="12345678"
user_guess=input("enter password: ")
counter=0
while user_guess != correct_password:
    user_guess=input("enter password: ")
    counter+=1

    print("access granted")
    print("your guess count:", str(counter))
