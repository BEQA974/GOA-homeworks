try:
    user_input = input("შეიყვანეთ რიცხვი: ")
    num = float(user_input)
    num_variable = 10
    result = num_variable + num
    print(f"შედეგი: {result}")
    
    my_list = [1, 2, 3]
    print(my_list[5])
    
    invalid_operation = "text" + 5
    print(invalid_operation)
    
except ValueError:
    print("შეყვანილი მონაცემი არ არის რიცხვი! გთხოვთ, შეიყვანოთ მხოლოდ რიცხვი.")
except TypeError as te:
    print(f"დაფიქსირდა TypeError: {te}")
except IndexError:
    print("IndexError: ცდებით არარსებულ ინდექსზე წვდომას სიაში.")
except Exception as e:
    print(f"დაფიქსირდა შეცდომა: {e}")
