def manual_swapcase(main_str):
    res=""

    for char in main_str:
        if char.islower():res+= char.upper()
        else:res+=char.lower()

    print(res)

manual_swapcase("edsggehehsdgsdgsg")
print("fasffwffwfwfw".swapcase())