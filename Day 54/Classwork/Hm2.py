def plus_ten(x):
    return x + 10

def apply_to_list(func, nums):
    new_list = []
    for n in nums:
        new_list.append(func(n))
    return new_list

print(apply_to_list(plus_ten, [5, 10, 0]))
