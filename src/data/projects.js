export const projects = [
  {
    id: "calculator",
    title: "Calculator",
    description:
      "A simple calculator that performs basic arithmetic operations",
    code: `def calculator():
    print("Simple Calculator")
    print("Select operation:")
    print("1. Add")
    print("2. Subtract") 
    print("3. Multiply")
    print("4. Divide")
    
    choice = input("Enter choice (1/2/3/4): ")
    
    if choice in ['1', '2', '3', '4']:
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))
        
        if choice == '1':
            result = num1 + num2
            print(f"{num1} + {num2} = {result}")
        elif choice == '2':
            result = num1 - num2
            print(f"{num1} - {num2} = {result}")
        elif choice == '3':
            result = num1 * num2
            print(f"{num1} * {num2} = {result}")
        elif choice == '4':
            if num2 != 0:
                result = num1 / num2
                print(f"{num1} / {num2} = {result}")
            else:
                print("Error! Division by zero.")
    else:
        print("Invalid input")

calculator()`,
    logic: [
      "Display menu options for arithmetic operations",
      "Get user's choice of operation",
      "Input two numbers from user",
      "Perform calculation based on choice",
      "Handle division by zero error",
      "Display the result",
    ],
    inputs: [
      {
        name: "operation",
        type: "select",
        options: ["1", "2", "3", "4"],
        label: "Operation (1=Add, 2=Sub, 3=Mul, 4=Div)",
      },
      { name: "num1", type: "number", label: "First Number" },
      { name: "num2", type: "number", label: "Second Number" },
    ],
  },
  {
    id: "odd-even",
    title: "Odd or Even Checker",
    description: "Check if a number is odd or even",
    code: `def check_odd_even():
    try:
        number = int(input("Enter a number: "))
        
        if number % 2 == 0:
            print(f"{number} is an even number")
        else:
            print(f"{number} is an odd number")
            
    except ValueError:
        print("Please enter a valid integer")

check_odd_even()`,
    logic: [
      "Get integer input from user",
      "Use modulo operator (%) to check remainder when divided by 2",
      "If remainder is 0, number is even",
      "If remainder is 1, number is odd",
      "Handle invalid input with try-except",
    ],
    inputs: [{ name: "number", type: "number", label: "Enter a number" }],
  },
  {
    id: "prime-number",
    title: "Prime Number Checker",
    description: "Check if a number is prime or not",
    code: `def is_prime(n):
    if n < 2:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    
    for i in range(3, int(n**0.5) + 1, 2):
        if n % i == 0:
            return False
    return True

def check_prime():
    try:
        number = int(input("Enter a number: "))
        
        if is_prime(number):
            print(f"{number} is a prime number")
        else:
            print(f"{number} is not a prime number")
            
    except ValueError:
        print("Please enter a valid integer")

check_prime()`,
    logic: [
      "Handle edge cases: numbers less than 2 are not prime",
      "2 is the only even prime number",
      "Check divisibility only up to square root of the number",
      "Only check odd divisors for efficiency",
      "If no divisors found, number is prime",
    ],
    inputs: [
      { name: "number", type: "number", label: "Enter a number to check" },
    ],
  },
];
