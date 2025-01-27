def manual_append(main_list,item_to_insert):
    lenght=len(main_list)

    print(main_list)
    main_list.insert(lenght,item_to_insert)
    print(main_list)

manual_append([1,2,3],[1,2,3])