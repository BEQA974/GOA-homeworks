list =[1,2,3,4,5,6,7,8,9,10]
num=int(input("enter number: "))

if num >= 0 and num > 10:
    print(list[num])
elif num >= -10 and num<=-1:
    print(list[num])
else:
    print("wrong index")