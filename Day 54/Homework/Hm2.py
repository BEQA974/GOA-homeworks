my_list = ["ვაშლი", "ბანანი", "ფორთოხალი", "საზამთრო"]

try:
    index = int(input("შეიყვანე ინდექსი (0-დან 3-მდე): "))
    print(f"სიის ელემენტი ინდექსით {index} არის: {my_list[index]}")

except IndexError:
    print("შეცდომა: ინდექსი სიის ფარგლებს სცდება.")

except ValueError:
    print("შეცდომა: გთხოვ, შეიყვანე მთელი რიცხვი.")
