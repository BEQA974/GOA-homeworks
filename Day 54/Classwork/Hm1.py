try:
    num1 = float(input("Enter numerator: "))
    num2 = float(input("Enter denominator: "))

    if num2 == 0:
        raise ValueError("Denominator cannot be equal to zero")

    print(num1 / num2)

except ValueError as ve:
    print(f"ValueError: {ve}")

except Exception:
    print("Invalid input")

finally:
    print("Operation complete.")
