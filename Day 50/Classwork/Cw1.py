num = 10  
try:
    result = num + "text"
except TypeError as e:
    print(f"დაფიქსირდა შეცდომა: {e}")
