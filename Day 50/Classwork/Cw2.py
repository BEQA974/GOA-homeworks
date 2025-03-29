try:
    user_input = input("შეიყვანეთ თქვენი სახელი ან გვარი: ")
    
    if not user_input.strip():
        raise ValueError("შეყვანილი მონაცემი ცარიელია!")
    
    num = 10  
    
    result = num + user_input
    
except ValueError as ve:
    print(f"დაფიქსირდა ValueError: {ve}")
except TypeError as te:
    print(f"დაფიქსირდა TypeError: {te}")
except Exception as e:
    print(f"დაფიქსირდა შეცდომა: {e}")
