password = "1234"
username="beqa"
while input("Enter the password: ") != password:
    print("Incorrect password. Try again.")
    
    while input("Enter the username: ") != username:
            print("Incorrect username. Try again.")

    print("Access granted!")
