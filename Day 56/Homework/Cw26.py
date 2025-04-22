#26) Ask for user input until they enter "exit"
#Task: Write a while loop that repeatedly asks the user to enter something until they type "exit".

user_input = ""

while user_input.lower() != "exit":
    user_input = input("Enter something (type 'exit' to stop): ")
    print("You entered:", user_input)

print("Program has stopped.")
