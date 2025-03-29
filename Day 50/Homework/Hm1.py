try:
    user_input = input("შეიყვანეთ რიცხვი: ")
    num = float(user_input)
    
    num_variable = 10 
    
    result = num_variable + num
    print(f"შედეგი: {result}")
    
except ValueError:
    print("შეყვანილი მონაცემი არ არის რიცხვი! გთხოვთ, შეიყვანოთ მხოლოდ რიცხვი.")
except TypeError as te:
    print(f"დაფიქსირდა TypeError: {te}")
except Exception as e:
    print(f"დაფიქსირდა შეცდომა: {e}")
