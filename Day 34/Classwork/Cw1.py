def function(main, index):
    for ind in index:
        main.pop(ind)

    print(main)

function([1, 2, 3, 4, 5, 6, 7],[2, 5, 4])