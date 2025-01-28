correct_password = "Goa best"  
wrong_attempts = 0  

password = ""  
while password != correct_password:  
    password = input("შეიყვანეთ პაროლი: ")
    if password != correct_password:
        print("პაროლი არასწორია.")
        wrong_attempts += 1  
        

