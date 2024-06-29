def get_grade(marks):
    if marks >= 80 and marks <= 100:
        return "Distinction"
    elif marks >= 60 and marks < 80:
        return "First Division"
    elif marks >= 50 and marks < 60:
        return "Second Division"
    elif marks >= 40 and marks < 50:
        return "Third Division"
    else:
        return "Fail"

marks = float(input("Enter your marks: "))
print(f"Your grade is: {get_grade(marks)}")
