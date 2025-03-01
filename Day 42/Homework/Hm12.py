def sum_numeric_values(d):
    return sum(v for v in d.values() if type(v) in [int, float])

my_dict = {"a": 10, "b": 20, "c": "hi", "d": 5.5}
print(sum_numeric_values(my_dict))  
