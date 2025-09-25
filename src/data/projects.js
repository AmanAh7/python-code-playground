export const projects = [
  // Your existing 3 projects
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

  // NEW ALGORITHMS - ADD THESE 3
  {
    id: "bubble-sort",
    title: "Bubble Sort Algorithm",
    description:
      "Visualize how bubble sort compares and swaps elements to sort an array",
    code: `def bubble_sort(arr):
    n = len(arr)
    comparisons = 0
    swaps = 0
    
    print(f"Original array: {arr}")
    print("\\nStep-by-step sorting process:")
    
    for i in range(n):
        swapped = False
        print(f"\\n--- Pass {i + 1} ---")
        
        for j in range(0, n - i - 1):
            comparisons += 1
            print(f"Comparing {arr[j]} and {arr[j + 1]}", end=" ")
            
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swaps += 1
                swapped = True
                print(f"→ Swap! Array: {arr}")
            else:
                print("→ No swap needed")
        
        if not swapped:
            print("Array is already sorted!")
            break
    
    print(f"\\nSorted array: {arr}")
    print(f"Comparisons: {comparisons}, Swaps: {swaps}")
    return arr

numbers = list(map(int, input("Enter numbers: ").split()))
bubble_sort(numbers)`,
    logic: [
      "Compare adjacent elements in the array",
      "Swap if left element is greater than right element",
      "Continue passes until no swaps are needed",
      "Track comparisons and swaps for analysis",
      "Display step-by-step sorting process",
    ],
    inputs: [
      {
        name: "numbers",
        type: "text",
        label: "Numbers (space-separated): e.g., 64 34 25 12 22",
      },
    ],
  },

  {
    id: "binary-search",
    title: "Binary Search Algorithm",
    description: "Efficiently search in sorted arrays using divide-and-conquer",
    code: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    comparisons = 0
    
    print(f"Searching for {target} in: {arr}")
    
    while left <= right:
        mid = (left + right) // 2
        comparisons += 1
        
        print(f"Step {comparisons}: Check arr[{mid}] = {arr[mid]}")
        
        if arr[mid] == target:
            print(f"Found {target} at index {mid}!")
            print(f"Total comparisons: {comparisons}")
            return mid
        elif arr[mid] < target:
            print(f"{arr[mid]} < {target}, search right half")
            left = mid + 1
        else:
            print(f"{arr[mid]} > {target}, search left half")
            right = mid - 1
    
    print(f"{target} not found. Comparisons: {comparisons}")
    return -1

arr = list(map(int, input("Sorted numbers: ").split()))
target = int(input("Search for: "))
binary_search(arr, target)`,
    logic: [
      "Start with sorted array and target value",
      "Calculate middle index and compare with target",
      "If target is smaller, search left half",
      "If target is larger, search right half",
      "Repeat until found or search space exhausted",
    ],
    inputs: [
      {
        name: "numbers",
        type: "text",
        label: "Sorted numbers: e.g., 1 3 5 7 9 11 13",
      },
      { name: "target", type: "number", label: "Number to search for" },
    ],
  },

  {
    id: "fibonacci",
    title: "Fibonacci Generator",
    description: "Generate Fibonacci sequence with step-by-step calculations",
    code: `def fibonacci_sequence(n):
    if n <= 0:
        print("Please enter positive number")
        return []
    elif n == 1:
        return [0]
    
    sequence = [0, 1]
    print(f"Generating {n} Fibonacci numbers:")
    print("F(0) = 0")
    print("F(1) = 1")
    
    for i in range(2, n):
        next_fib = sequence[i-1] + sequence[i-2]
        sequence.append(next_fib)
        print(f"F({i}) = F({i-1}) + F({i-2}) = {sequence[i-1]} + {sequence[i-2]} = {next_fib}")
    
    print(f"\\nComplete sequence: {sequence}")
    
    # Show golden ratio approximation
    if len(sequence) > 5:
        ratio = sequence[-1] / sequence[-2]
        print(f"Golden ratio approximation: {ratio:.6f}")
    
    return sequence

n = int(input("How many Fibonacci numbers? "))
fibonacci_sequence(n)`,
    logic: [
      "Handle base cases: F(0)=0, F(1)=1",
      "Use iterative approach for efficiency",
      "Calculate F(n) = F(n-1) + F(n-2)",
      "Display step-by-step calculations",
      "Show golden ratio convergence for larger sequences",
    ],
    inputs: [
      { name: "count", type: "number", label: "Count (1-20 recommended)" },
    ],
  },
];
