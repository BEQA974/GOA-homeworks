def sum_numeric_values(data):
    return sum(value for value in data.values() if isinstance(value, (int, float)))

# Example usage
example_dict = {"a": 10, "b": "hello", "c": 5.5, "d": True}
print(sum_numeric_values(example_dict))  # Output: 15.5
