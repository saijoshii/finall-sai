def get_day(number):
    switch ={
        1: "Sunday",
        2: "Monday",
        3: "Tuesday",
        4: "Wednesday",
        5: "Thursday",
        6: "Friday",
        7: "Saturday"
    }
    return switch.get(number, "Invalid")

try:
    # Get input from the user
    number = int(input("Enter a number (1-7): "))
    print(f"The day is: {get_day(number)}")
except ValueError:
    print("Invalid input. Please enter a valid number between 1 and 7.")
