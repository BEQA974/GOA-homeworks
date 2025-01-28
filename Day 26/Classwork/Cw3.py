def manual_len(input_list):
    length = 0
    while input_list[length:]:
        length += 1
    print("სიის სიგრძე არის:", length)

my_list = [1, 2, 3, 4, 5]
manual_len(my_list)
