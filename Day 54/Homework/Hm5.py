def multiplier(factor):
    def multiply_by_factor(number):
        return number * factor
    return multiply_by_factor

multiply_by_3 = multiplier(3)

result = multiply_by_3(5) 
print(result)
