items = [1, None, 2, None, 3]
result = list(filter(lambda x: x is not None, items))
print(result)  
