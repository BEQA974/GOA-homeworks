my_num=7
user_num=int(input("enter num: "))
counter=0
while user_num != my_num:
    user_num=int(input("enter num: "))
    counter+=1

    print("you gussed")
    print("your guess count:", str(counter))
