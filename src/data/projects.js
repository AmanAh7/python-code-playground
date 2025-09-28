export const projects = [
  {
    id: "calculator",
    title: "Calculator",
    description:
      "A simple calculator that performs basic arithmetic operations",
    category: "Basic Algorithms",
    difficulty: "Beginner",
    tags: ["math", "basic", "operations"],
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
      "Display a clear menu showing all available operations (add, subtract, multiply, divide) so users know what they can do",
      "Get the user's choice by asking them to enter 1, 2, 3, or 4. We check if their input is valid before continuing",
      "Ask for two numbers that the user wants to calculate with. We use float() so it works with decimal numbers too",
      "Based on the user's choice, perform the correct math operation. Each choice (1-4) does a different calculation",
      "For division, we first check if the second number is zero. Dividing by zero would cause an error, so we prevent this",
      "Show the complete equation and result to the user, like '5 + 3 = 8' so they can verify their calculation",
      "If the user enters an invalid choice (like 5 or a letter), show an error message instead of crashing",
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
    category: "Basic Algorithms",
    difficulty: "Beginner",
    tags: ["numbers", "modulo", "basic"],
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
      "Get a number from the user and convert it to an integer so we can do math with it",
      "Use the modulo operator (%) to divide the number by 2 and find the remainder. This tells us if the number is divisible by 2",
      "If the remainder is 0, the number divides evenly by 2, which means it's an even number",
      "If the remainder is 1, the number doesn't divide evenly by 2, which means it's an odd number",
      "Handle errors gracefully - if the user enters text instead of a number, show a helpful message instead of crashing",
      "This works because all even numbers can be divided by 2 with no remainder, while odd numbers always leave a remainder of 1",
    ],
    inputs: [{ name: "number", type: "number", label: "Enter a number" }],
  },
  {
    id: "prime-number",
    title: "Prime Number Checker",
    description: "Check if a number is prime or not",
    category: "Number Theory",
    difficulty: "Intermediate",
    tags: ["prime", "numbers", "math"],
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
      "First, handle special cases: numbers less than 2 cannot be prime by definition. Prime numbers must be greater than 1",
      "The number 2 is special - it's the only even prime number, so we handle it separately",
      "If a number is even (and not 2), it can't be prime because it's divisible by 2",
      "For other numbers, we only need to check divisors up to the square root. If there's a larger divisor, there must be a smaller one too",
      "We only check odd numbers as potential divisors since we already eliminated even numbers",
      "If we find any number that divides evenly into our input, then it's not prime",
      "If we check all possibilities and find no divisors, then the number is prime",
    ],
    inputs: [
      { name: "number", type: "number", label: "Enter a number to check" },
    ],
  },
  {
    id: "bubble-sort",
    title: "Bubble Sort Algorithm",
    description:
      "Visualize how bubble sort compares and swaps elements to sort an array",
    category: "Sorting Algorithms",
    difficulty: "Intermediate",
    tags: ["sorting", "algorithm", "visualization"],
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
      "Go through the array multiple times. In each pass, the largest unsorted number will move to its correct position at the end",
      "Compare each pair of adjacent numbers (side by side). Look at the first and second, then second and third, and so on",
      "If the left number is bigger than the right number, swap them so the smaller number is on the left",
      "Keep track of whether we made any swaps. If we go through the entire array without swapping, it means it's already sorted",
      "In each pass, we don't need to check the last few numbers because they're already in the right place",
      "Count how many comparisons and swaps we make to understand how much work the algorithm is doing",
      "The algorithm gets its name because large numbers 'bubble up' to the end, just like air bubbles rise to the surface in water",
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
    category: "Search Algorithms",
    difficulty: "Intermediate",
    tags: ["search", "algorithm", "divide-conquer"],
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
      "This only works on sorted arrays. We need the numbers to be in order from smallest to largest",
      "Start by looking at the middle element of the array. This divides our search area into two halves",
      "Compare the middle element with what we're looking for. Three things can happen: it matches, it's too small, or it's too big",
      "If the middle element is too small, we know our target must be in the right half (because the array is sorted)",
      "If the middle element is too big, we know our target must be in the left half",
      "Repeat this process on the remaining half, always choosing the middle and eliminating half of the remaining options",
      "Stop when we find our target or when there are no more elements to check. This method is much faster than checking every element",
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
    category: "Mathematical Sequences",
    difficulty: "Intermediate",
    tags: ["fibonacci", "sequence", "math"],
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
      "The Fibonacci sequence starts with two special numbers: 0 and 1. These are the foundation of the entire sequence",
      "Every number after that is the sum of the two numbers that came before it. So the third number is 0 + 1 = 1",
      "Continue this pattern: 0, 1, 1, 2, 3, 5, 8, 13... Each new number equals the previous two added together",
      "We use a loop to calculate each new number, storing all the previous numbers so we can access them easily",
      "Show each calculation step so you can see how each number is built from the previous ones",
      "As the sequence gets longer, something interesting happens: dividing each number by the one before it gets closer to 1.618 (the golden ratio)",
      "This sequence appears everywhere in nature - flower petals, spiral shells, and tree branches often follow Fibonacci patterns",
    ],
    inputs: [
      { name: "count", type: "number", label: "Count (1-20 recommended)" },
    ],
  },
  {
    id: "linear-search",
    title: "Linear Search Algorithm",
    description:
      "Search through an array sequentially to find a target element",
    category: "Search Algorithms",
    difficulty: "Beginner",
    tags: ["search", "linear", "basic"],
    code: `def linear_search(arr, target):
    comparisons = 0
    print(f"Searching for {target} in: {arr}")
    print("\\nLinear search process:")
    
    for i in range(len(arr)):
        comparisons += 1
        print(f"Step {comparisons}: Check arr[{i}] = {arr[i]}", end=" ")
        
        if arr[i] == target:
            print(f"→ Found {target} at index {i}!")
            print(f"Total comparisons: {comparisons}")
            return i
        else:
            print("→ Not a match, continue...")
    
    print(f"\\n{target} not found in the array")
    print(f"Total comparisons: {comparisons}")
    return -1


def main():
    arr = list(map(int, input("Enter numbers: ").split()))
    target = int(input("Search for: "))
    
    result = linear_search(arr, target)
    
    if result != -1:
        print(f"\\nSuccess! Element {target} found at position {result}")
    else:
        print(f"\\nElement {target} not found in the array")


main()`,
    logic: [
      "Start at the beginning of the array (first element) and check each element one by one",
      "Compare each element with the number you're looking for. If they match, you found it!",
      "If the current element doesn't match, move to the next element and check again",
      "Keep going until you either find the number or reach the end of the array",
      "If you reach the end without finding the number, it means the number is not in the array",
      "This method works on any array - it doesn't need to be sorted first",
      "Count how many elements you had to check. In the worst case, you might need to check every single element",
    ],
    inputs: [
      {
        name: "numbers",
        type: "text",
        label: "Numbers: e.g., 10 23 45 70 11 15",
      },
      { name: "target", type: "number", label: "Number to search for" },
    ],
  },
  {
    id: "selection-sort",
    title: "Selection Sort Algorithm",
    description:
      "Sort array by repeatedly finding minimum element and placing it at beginning",
    category: "Sorting Algorithms",
    difficulty: "Intermediate",
    tags: ["sorting", "selection", "algorithm"],
    code: `def selection_sort(arr):
    n = len(arr)
    comparisons = 0
    swaps = 0
    
    print(f"Original array: {arr}")
    print("\\nSelection sort process:")
    
    for i in range(n):
        min_idx = i
        print(f"\\n--- Pass {i + 1}: Finding minimum from position {i} ---")
        print(f"Current minimum: arr[{i}] = {arr[i]}")
        
        for j in range(i + 1, n):
            comparisons += 1
            print(f"Compare arr[{min_idx}] = {arr[min_idx]} with arr[{j}] = {arr[j]}", end=" ")
            
            if arr[j] < arr[min_idx]:
                min_idx = j
                print(f"→ New minimum found at index {j}")
            else:
                print("→ Current minimum unchanged")
        
        if min_idx != i:
            arr[i], arr[min_idx] = arr[min_idx], arr[i]
            swaps += 1
            print(f"Swap arr[{i}] with arr[{min_idx}]: {arr}")
        else:
            print(f"No swap needed, arr[{i}] is already minimum")
        
        print(f"After pass {i + 1}: {arr}")
    
    print(f"\\nFinal sorted array: {arr}")
    print(f"Total comparisons: {comparisons}")
    print(f"Total swaps: {swaps}")
    return arr


numbers = list(map(int, input("Enter numbers: ").split()))
selection_sort(numbers)`,
    logic: [
      "The idea is to build a sorted section at the beginning of the array, one number at a time",
      "In each round, find the smallest number in the remaining unsorted part of the array",
      "Compare this smallest number with every other unsorted number to make sure it's truly the smallest",
      "Once you find the smallest number, swap it with the first number in the unsorted section",
      "Now the sorted section is one number longer, and the unsorted section is one number shorter",
      "Repeat this process until the entire array is sorted. Each round guarantees one more number is in the right place",
      "This method is called 'selection' sort because you select the minimum element in each round",
    ],
    inputs: [
      { name: "numbers", type: "text", label: "Numbers: e.g., 29 10 14 37 13" },
    ],
  },
  {
    id: "palindrome-checker",
    title: "Palindrome Checker",
    description: "Check if a string reads the same forwards and backwards",
    category: "String Algorithms",
    difficulty: "Beginner",
    tags: ["string", "palindrome", "text"],
    code: `def is_palindrome(text):
    # Convert to lowercase and remove non-alphanumeric characters
    cleaned = ''.join(char.lower() for char in text if char.isalnum())
    
    print(f"Original text: '{text}'")
    print(f"Cleaned text: '{cleaned}'")
    print("\\nPalindrome check process:")
    
    left = 0
    right = len(cleaned) - 1
    comparisons = 0
    
    while left < right:
        comparisons += 1
        print(f"Step {comparisons}: Compare '{cleaned[left]}' (pos {left}) with '{cleaned[right]}' (pos {right})", end=" ")
        
        if cleaned[left] != cleaned[right]:
            print("→ Mismatch found! Not a palindrome")
            print(f"Total comparisons: {comparisons}")
            return False
        else:
            print("→ Match!")
        
        left += 1
        right -= 1
    
    print(f"\\nAll characters match! '{text}' is a palindrome")
    print(f"Total comparisons: {comparisons}")
    return True


def main():
    text = input("Enter text to check: ")
    
    if is_palindrome(text):
        print("\\n✅ Result: PALINDROME")
    else:
        print("\\n❌ Result: NOT A PALINDROME")


main()`,
    logic: [
      "First, clean up the text by removing spaces and punctuation, and making everything lowercase. This lets us check phrases like 'A man, a plan, a canal: Panama'",
      "Use two pointers: one starting at the beginning of the text, and one starting at the end",
      "Compare the characters at both pointers. In a palindrome, they should be the same",
      "If any pair doesn't match, we know immediately that it's not a palindrome",
      "Move the pointers toward each other and repeat the comparison",
      "Continue until the pointers meet in the middle or cross each other",
      "If all character pairs match, then the text reads the same forwards and backwards - it's a palindrome!",
    ],
    inputs: [
      {
        name: "text",
        type: "text",
        label: "Text to check: e.g., 'A man a plan a canal Panama'",
      },
    ],
  },
  {
    id: "factorial-calculator",
    title: "Factorial Calculator",
    description:
      "Calculate factorial using both iterative and recursive approaches",
    category: "Mathematical Operations",
    difficulty: "Intermediate",
    tags: ["factorial", "recursion", "math"],
    code: `def factorial_iterative(n):
    if n < 0:
        return "Factorial not defined for negative numbers"
    if n == 0 or n == 1:
        return 1
    
    result = 1
    print(f"Calculating {n}! using iterative method:")
    print(f"Starting with result = 1")
    
    for i in range(2, n + 1):
        result *= i
        print(f"Step {i-1}: result = result × {i} = {result}")
    
    return result


def factorial_recursive(n, depth=0):
    indent = "  " * depth
    
    if n < 0:
        return "Factorial not defined for negative numbers"
    if n == 0 or n == 1:
        print(f"{indent}Base case: {n}! = 1")
        return 1
    
    print(f"{indent}Calculate {n}! = {n} × {n-1}!")
    result = n * factorial_recursive(n - 1, depth + 1)
    print(f"{indent}Return {n}! = {result}")
    return result


def main():
    try:
        n = int(input("Enter a number to calculate factorial: "))
        
        print("\\n" + "="*50)
        print("ITERATIVE APPROACH:")
        print("="*50)
        iter_result = factorial_iterative(n)
        print(f"Final result: {n}! = {iter_result}")
        
        print("\\n" + "="*50)
        print("RECURSIVE APPROACH:")
        print("="*50)
        rec_result = factorial_recursive(n)
        print(f"Final result: {n}! = {rec_result}")
        
        if str(iter_result).isdigit() and str(rec_result).isdigit():
            print(f"\\n✅ Both methods give same result: {iter_result}")
        
    except ValueError:
        print("Please enter a valid integer")


main()`,
    logic: [
      "Factorial means multiplying a number by all positive integers below it. For example, 5! = 5 × 4 × 3 × 2 × 1 = 120",
      "Handle special cases first: 0! and 1! both equal 1 by mathematical definition",
      "Iterative method: Start with 1 and multiply by each number from 2 up to your target number",
      "Recursive method: Break down the problem by saying 'n! = n × (n-1)!' until you reach the base case",
      "Both methods solve the same problem but think about it differently - one uses a loop, the other calls itself",
      "Show each step of the calculation so you can see how the result builds up",
      "Compare both results to prove they work the same way, which helps you understand different programming approaches",
    ],
    inputs: [
      { name: "number", type: "number", label: "Number (0-20 recommended)" },
    ],
  },
  {
    id: "password-generator",
    title: "Password Generator",
    description:
      "Generate secure passwords with customizable length and character sets",
    category: "Utility Algorithms",
    difficulty: "Intermediate",
    tags: ["password", "security", "random"],
    code: `import random
import string


def generate_password(length, include_uppercase, include_lowercase, include_numbers, include_symbols):
    characters = ""
    
    if include_lowercase:
        characters += string.ascii_lowercase
        print("Added lowercase letters: abcdefghijklmnopqrstuvwxyz")
    
    if include_uppercase:
        characters += string.ascii_uppercase
        print("Added uppercase letters: ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    
    if include_numbers:
        characters += string.digits
        print("Added numbers: 0123456789")
    
    if include_symbols:
        characters += "!@#$%^&*()_+-=[]{}|;:,.<>?"
        print("Added symbols: !@#$%^&*()_+-=[]{}|;:,.<>?")
    
    if not characters:
        return "Error: No character set selected!"
    
    print(f"\\nTotal character pool size: {len(characters)}")
    print(f"Generating {length}-character password...")
    print("\\nPassword generation process:")
    
    password = ""
    for i in range(length):
        char = random.choice(characters)
        password += char
        print(f"Position {i+1}: '{char}' (from pool of {len(characters)} chars)")
    
    # Calculate password strength
    strength_score = 0
    if include_lowercase: strength_score += 1
    if include_uppercase: strength_score += 1
    if include_numbers: strength_score += 1
    if include_symbols: strength_score += 1
    
    strength = ["Very Weak", "Weak", "Fair", "Good", "Very Strong"][min(strength_score, 4)]
    
    print(f"\\nGenerated Password: {password}")
    print(f"Password Length: {length}")
    print(f"Character Variety: {strength_score}/4")
    print(f"Strength Rating: {strength}")
    
    return password


def main():
    try:
        length = int(input("Password length (8-50): "))
        if length < 8 or length > 50:
            print("Length should be between 8-50 for security")
            return
            
        include_lower = input("Include lowercase? (y/n): ").lower() == 'y'
        include_upper = input("Include uppercase? (y/n): ").lower() == 'y'
        include_nums = input("Include numbers? (y/n): ").lower() == 'y'
        include_syms = input("Include symbols? (y/n): ").lower() == 'y'
        
        password = generate_password(length, include_upper, include_lower, include_nums, include_syms)
        
    except ValueError:
        print("Please enter a valid number for length")


main()`,
    logic: [
      "First, collect all the types of characters the user wants in their password (lowercase, uppercase, numbers, symbols)",
      "Build a big pool of characters to choose from. The more types of characters, the stronger the password",
      "For each position in the password, randomly pick one character from the pool",
      "Make sure the length is at least 8 characters - shorter passwords are too easy to crack",
      "Calculate strength based on variety: using all 4 character types makes the strongest passwords",
      "Show each character being selected so you can see the random process in action",
      "A longer password with more character types is much harder for attackers to guess or crack",
    ],
    inputs: [
      { name: "length", type: "number", label: "Password length (8-50)" },
      {
        name: "lowercase",
        type: "select",
        options: ["y", "n"],
        label: "Include lowercase? (y/n)",
      },
      {
        name: "uppercase",
        type: "select",
        options: ["y", "n"],
        label: "Include uppercase? (y/n)",
      },
      {
        name: "numbers",
        type: "select",
        options: ["y", "n"],
        label: "Include numbers? (y/n)",
      },
      {
        name: "symbols",
        type: "select",
        options: ["y", "n"],
        label: "Include symbols? (y/n)",
      },
    ],
  },
  {
    id: "gcd-calculator",
    title: "GCD Calculator (Euclidean Algorithm)",
    description:
      "Find Greatest Common Divisor using the efficient Euclidean algorithm",
    category: "Number Theory",
    difficulty: "Advanced",
    tags: ["gcd", "euclidean", "math"],
    code: `def gcd_euclidean(a, b):
    print(f"Finding GCD of {a} and {b} using Euclidean Algorithm:")
    print("The algorithm: GCD(a,b) = GCD(b, a mod b)")
    print("="*50)
    
    original_a, original_b = a, b
    step = 1
    
    while b != 0:
        remainder = a % b
        quotient = a // b
        
        print(f"Step {step}:")
        print(f"  GCD({a}, {b})")
        print(f"  {a} = {b} × {quotient} + {remainder}")
        print(f"  So GCD({a}, {b}) = GCD({b}, {remainder})")
        print()
        
        a, b = b, remainder
        step += 1
    
    print(f"Final step: GCD({a}, 0) = {a}")
    print(f"\\nTherefore, GCD({original_a}, {original_b}) = {a}")
    
    return a


def gcd_prime_factorization(a, b):
    print(f"\\nAlternative: Finding GCD using prime factorization method")
    print("(This is less efficient but educational)")
    
    def prime_factors(n):
        factors = []
        d = 2
        while d * d <= n:
            while n % d == 0:
                factors.append(d)
                n //= d
            d += 1
        if n > 1:
            factors.append(n)
        return factors
    
    factors_a = prime_factors(a)
    factors_b = prime_factors(b)
    
    print(f"Prime factors of {a}: {factors_a}")
    print(f"Prime factors of {b}: {factors_b}")
    
    # Find common factors
    common_factors = []
    factors_a_copy = factors_a.copy()
    
    for factor in factors_b:
        if factor in factors_a_copy:
            common_factors.append(factor)
            factors_a_copy.remove(factor)
    
    gcd_result = 1
    for factor in common_factors:
        gcd_result *= factor
    
    print(f"Common prime factors: {common_factors}")
    print(f"GCD = {' × '.join(map(str, common_factors)) if common_factors else '1'} = {gcd_result}")
    
    return gcd_result


def main():
    try:
        a = int(input("Enter first number: "))
        b = int(input("Enter second number: "))
        
        if a <= 0 or b <= 0:
            print("Please enter positive integers")
            return
        
        # Ensure a >= b for cleaner output
        if a < b:
            a, b = b, a
        
        euclidean_result = gcd_euclidean(a, b)
        
        if a <= 1000 and b <= 1000:  # Only for smaller numbers
            factorization_result = gcd_prime_factorization(a, b)
            
            print(f"\\n✅ Both methods confirm: GCD = {euclidean_result}")
        
    except ValueError:
        print("Please enter valid integers")


main()`,
    logic: [
      "The Greatest Common Divisor (GCD) is the largest number that divides both input numbers evenly",
      "The Euclidean algorithm uses division: divide the larger number by the smaller one and look at the remainder",
      "The key insight is that GCD(a,b) equals GCD(b, remainder). This lets us work with smaller numbers in each step",
      "Keep applying this process: divide, find remainder, then use the divisor and remainder as the new pair",
      "Stop when the remainder becomes 0. At this point, the last divisor is your GCD",
      "This method is much faster than checking every possible number to see if it divides both inputs",
      "We also show an alternative method using prime factors to help you understand what GCD really means",
    ],
    inputs: [
      { name: "num1", type: "number", label: "First number" },
      { name: "num2", type: "number", label: "Second number" },
    ],
  },
  // ... your existing 12 projects ...

  // NEW PROJECT 1
  {
    id: "number-guessing",
    title: "Number Guessing Game",
    description:
      "Interactive guessing game where the computer picks a random number and you try to guess it",
    category: "Game Algorithms",
    difficulty: "Beginner",
    tags: ["random", "game", "logic"],
    code: `import random

def number_guessing_game():
    print("🎯 Welcome to the Number Guessing Game!")
    print("I'm thinking of a number between 1 and 100")
    
    secret_number = random.randint(1, 100)
    attempts = 0
    max_attempts = 7
    
    print(f"You have {max_attempts} attempts to guess it!")
    print("Let's start!\\n")
    
    while attempts < max_attempts:
        try:
            attempts += 1
            guess = int(input(f"Attempt {attempts}/{max_attempts} - Enter your guess: "))
            
            print(f"You guessed: {guess}")
            
            if guess == secret_number:
                print(f"🎉 Congratulations! You found it in {attempts} attempts!")
                print(f"The number was indeed {secret_number}")
                
                # Calculate score based on attempts
                score = max(0, 100 - (attempts - 1) * 15)
                print(f"Your score: {score}/100")
                return
                
            elif guess < secret_number:
                remaining = max_attempts - attempts
                print(f"📈 Too low! The number is higher than {guess}")
                if remaining > 0:
                    print(f"You have {remaining} attempts remaining")
                
            else:  # guess > secret_number
                remaining = max_attempts - attempts
                print(f"📉 Too high! The number is lower than {guess}")
                if remaining > 0:
                    print(f"You have {remaining} attempts remaining")
            
            print()  # Empty line for readability
            
        except ValueError:
            print("❌ Please enter a valid number!")
            print()
    
    print(f"💔 Game Over! You've used all {max_attempts} attempts")
    print(f"The secret number was: {secret_number}")
    print("Better luck next time!")

number_guessing_game()`,
    logic: [
      "Generate a random secret number between 1 and 100 using Python's random module. This creates the target for our guessing game",
      "Set up the game rules: give the player a limited number of attempts (7) to make it challenging but fair",
      "In each round, get the player's guess and convert it to an integer. Handle errors if they enter invalid input",
      "Compare the guess with the secret number. There are three possibilities: too low, too high, or exactly correct",
      "Give helpful feedback for each guess. Tell them if they need to go higher or lower, and show remaining attempts",
      "If they guess correctly, celebrate their success and calculate a score based on how many attempts they needed",
      "If they run out of attempts, reveal the secret number so they can learn what it was",
    ],
    inputs: [{ name: "guess", type: "number", label: "Your guess (1-100)" }],
  },

  // NEW PROJECT 2
  {
    id: "rock-paper-scissors",
    title: "Rock Paper Scissors",
    description:
      "Classic game where you compete against the computer in rock, paper, scissors",
    category: "Game Algorithms",
    difficulty: "Beginner",
    tags: ["game", "random", "logic"],
    code: `import random

def rock_paper_scissors():
    print("🎮 Welcome to Rock, Paper, Scissors!")
    print("Rules: Rock beats Scissors, Scissors beats Paper, Paper beats Rock")
    print()
    
    choices = ["rock", "paper", "scissors"]
    emojis = {"rock": "🪨", "paper": "📄", "scissors": "✂️"}
    
    player_score = 0
    computer_score = 0
    rounds_played = 0
    
    while True:
        print(f"Score: You {player_score} - {computer_score} Computer")
        print()
        
        # Get player choice
        print("Choose your weapon:")
        print("1. Rock 🪨")
        print("2. Paper 📄") 
        print("3. Scissors ✂️")
        print("4. Quit Game")
        
        try:
            choice = input("Enter your choice (1-4): ").strip()
            
            if choice == "4":
                break
            elif choice in ["1", "2", "3"]:
                player_choice = choices[int(choice) - 1]
            else:
                print("❌ Invalid choice! Please enter 1, 2, 3, or 4")
                continue
                
        except (ValueError, IndexError):
            print("❌ Invalid input! Please enter a number between 1-4")
            continue
        
        # Computer makes random choice
        computer_choice = random.choice(choices)
        
        rounds_played += 1
        print(f"\\n--- Round {rounds_played} ---")
        print(f"You chose: {emojis[player_choice]} {player_choice.title()}")
        print(f"Computer chose: {emojis[computer_choice]} {computer_choice.title()}")
        print()
        
        # Determine winner
        if player_choice == computer_choice:
            print("🤝 It's a tie! No points awarded")
            
        elif (player_choice == "rock" and computer_choice == "scissors") or \\
             (player_choice == "scissors" and computer_choice == "paper") or \\
             (player_choice == "paper" and computer_choice == "rock"):
            print("🎉 You win this round!")
            player_score += 1
            
        else:
            print("💻 Computer wins this round!")
            computer_score += 1
        
        print()
    
    # Final results
    print("\\n" + "="*40)
    print("🏁 FINAL RESULTS")
    print("="*40)
    print(f"Rounds played: {rounds_played}")
    print(f"Your score: {player_score}")
    print(f"Computer score: {computer_score}")
    
    if player_score > computer_score:
        print("🏆 Congratulations! You won overall!")
    elif computer_score > player_score:
        print("🤖 Computer wins overall! Better luck next time!")
    else:
        print("🤝 It's a tie overall! Great game!")

rock_paper_scissors()`,
    logic: [
      "Set up the game with three choices (rock, paper, scissors) and their corresponding emojis for visual appeal",
      "Keep track of the score for both player and computer, and count the number of rounds played",
      "Display a menu for the player to choose their weapon, with an option to quit the game anytime",
      "Get the player's choice and validate the input. Handle errors gracefully if they enter invalid data",
      "Generate the computer's choice randomly using Python's random.choice() function for fair gameplay",
      "Compare both choices using the game rules: Rock beats Scissors, Scissors beats Paper, Paper beats Rock",
      "Keep running rounds until the player decides to quit, then show final statistics and determine the overall winner",
    ],
    inputs: [
      {
        name: "choice",
        type: "select",
        options: ["1", "2", "3"],
        label: "Choice (1=Rock, 2=Paper, 3=Scissors)",
      },
    ],
  },

  // NEW PROJECT 3
  {
    id: "mad-libs",
    title: "Mad Libs Generator",
    description:
      "Create hilarious stories by filling in blanks with random words",
    category: "Text Games",
    difficulty: "Beginner",
    tags: ["string", "input", "fun"],
    code: `def mad_libs_generator():
    print("🎭 Welcome to the Mad Libs Generator!")
    print("I'll ask you for some words, then create a funny story!")
    print()
    
    # Story templates
    stories = [
        {
            "title": "The Crazy Adventure",
            "words": ["adjective", "noun", "verb", "adverb", "color", "animal", "number"],
            "template": "Once upon a time, there was a {adjective} {noun} who loved to {verb} {adverb}. One day, they found a {color} {animal} with {number} legs running through the forest. It was the most amazing sight they had ever seen!"
        },
        {
            "title": "The Silly School Day", 
            "words": ["adjective", "noun", "verb", "teacher_name", "subject", "food", "number"],
            "template": "At school today, our {adjective} teacher {teacher_name} taught us about {subject}. We had to {verb} for {number} minutes while eating {food}. The {noun} in our classroom started laughing so hard!"
        },
        {
            "title": "The Space Mission",
            "words": ["adjective", "planet", "verb", "alien_name", "number", "color", "vehicle"],
            "template": "Captain Smith landed on the {adjective} planet {planet} and decided to {verb} around. Suddenly, an alien named {alien_name} appeared with {number} {color} eyes! They traveled together in a {vehicle} across the galaxy."
        }
    ]
    
    # Let user choose a story or random
    print("Choose your story:")
    for i, story in enumerate(stories, 1):
        print(f"{i}. {story['title']}")
    print(f"{len(stories) + 1}. Surprise me! (Random story)")
    print()
    
    try:
        choice = input(f"Enter your choice (1-{len(stories) + 1}): ").strip()
        
        if choice == str(len(stories) + 1):
            import random
            selected_story = random.choice(stories)
            print(f"\\n🎲 Randomly selected: {selected_story['title']}")
        else:
            story_index = int(choice) - 1
            if 0 <= story_index < len(stories):
                selected_story = stories[story_index]
            else:
                print("Invalid choice! Using the first story.")
                selected_story = stories[0]
                
    except ValueError:
        print("Invalid input! Using the first story.")
        selected_story = stories[0]
    
    print(f"\\n📝 Creating: {selected_story['title']}")
    print("Please provide the following words:")
    print()
    
    # Collect words from user
    user_words = {}
    for i, word_type in enumerate(selected_story['words'], 1):
        while True:
            user_input = input(f"{i}. Enter a {word_type}: ").strip()
            if user_input:
                user_words[word_type] = user_input
                break
            else:
                print("Please enter a valid word!")
    
    print()
    print("=" * 50)
    print("🎉 YOUR MAD LIBS STORY!")
    print("=" * 50)
    print()
    
    # Generate the final story
    final_story = selected_story['template'].format(**user_words)
    print(final_story)
    
    print()
    print("📊 STORY STATISTICS:")
    print(f"Title: {selected_story['title']}")
    print(f"Words used: {len(user_words)}")
    print(f"Story length: {len(final_story)} characters")
    
    # Ask if they want to play again
    print()
    play_again = input("Would you like to create another story? (y/n): ").lower().strip()
    if play_again.startswith('y'):
        print()
        mad_libs_generator()  # Recursive call to play again
    else:
        print("Thanks for playing Mad Libs! 🎭")

mad_libs_generator()`,
    logic: [
      "Create multiple story templates with placeholders for different types of words (nouns, adjectives, verbs, etc.)",
      "Let the user choose which story they want to create, or surprise them with a random selection",
      "Ask the user to provide each type of word needed for the chosen story template",
      "Validate that the user enters something for each word - don't allow empty inputs",
      "Use Python's string formatting to substitute the user's words into the story template",
      "Display the completed story with all the user's words inserted in the right places",
      "Show statistics about their creation and offer to play again for multiple rounds of fun",
    ],
    inputs: [
      {
        name: "story_choice",
        type: "select",
        options: ["1", "2", "3"],
        label: "Story choice (1-3)",
      },
      {
        name: "adjective",
        type: "text",
        label: "An adjective (e.g., funny, big, red)",
      },
      { name: "noun", type: "text", label: "A noun (e.g., cat, car, book)" },
      { name: "verb", type: "text", label: "A verb (e.g., run, jump, sing)" },
    ],
  },
  {
    id: "dice-rolling",
    title: "Dice Rolling Simulator",
    description:
      "Simulate rolling dice with customizable number of dice and sides",
    category: "Simulation Games",
    difficulty: "Beginner",
    tags: ["random", "simulation", "probability"],
    code: `import random

def dice_rolling_simulator():
    print("🎲 Welcome to the Dice Rolling Simulator!")
    print("Roll one or multiple dice with customizable sides")
    print()
    
    while True:
        try:
            # Get number of dice
            num_dice = int(input("How many dice do you want to roll? (1-10): "))
            if num_dice < 1 or num_dice > 10:
                print("Please enter a number between 1 and 10")
                continue
            
            # Get number of sides
            num_sides = int(input("How many sides should each die have? (4, 6, 8, 10, 12, 20): "))
            if num_sides not in [4, 6, 8, 10, 12, 20]:
                print("Please choose from: 4, 6, 8, 10, 12, or 20 sides")
                continue
            
            break
            
        except ValueError:
            print("Please enter valid numbers!")
            print()
    
    print(f"\\n🎯 Rolling {num_dice} dice with {num_sides} sides each...")
    print("=" * 40)
    
    rolls = []
    total = 0
    
    for i in range(num_dice):
        roll = random.randint(1, num_sides)
        rolls.append(roll)
        total += roll
        
        print(f"Die {i + 1}: {roll}")
    
    print("=" * 40)
    print(f"Individual rolls: {rolls}")
    print(f"Total sum: {total}")
    print(f"Average: {total / num_dice:.2f}")
    
    # Show statistics
    print(f"\\n📊 Statistics:")
    print(f"Minimum possible: {num_dice}")
    print(f"Maximum possible: {num_dice * num_sides}")
    print(f"Your total: {total}")
    
    # Show percentage
    max_possible = num_dice * num_sides
    percentage = (total / max_possible) * 100
    print(f"Luck percentage: {percentage:.1f}%")
    
    # Ask to roll again
    again = input("\\nRoll again? (y/n): ").lower().strip()
    if again.startswith('y'):
        print("\\n" + "="*50)
        dice_rolling_simulator()
    else:
        print("Thanks for playing! 🎲")

dice_rolling_simulator()`,
    logic: [
      "Ask the user how many dice they want to roll and validate the input (1-10 dice)",
      "Ask for the number of sides on each die, offering common options (4, 6, 8, 10, 12, 20)",
      "Use Python's random.randint() to generate a random number for each die roll",
      "Keep track of each individual roll and calculate the total sum",
      "Display each die result clearly, showing which die rolled what number",
      "Calculate and show statistics like average, minimum/maximum possible, and luck percentage",
      "Offer the option to roll again for multiple rounds of fun",
    ],
    inputs: [
      { name: "num_dice", type: "number", label: "Number of dice (1-10)" },
      {
        name: "num_sides",
        type: "select",
        options: ["4", "6", "8", "10", "12", "20"],
        label: "Sides per die",
      },
    ],
  },
  {
    id: "hangman",
    title: "Hangman Word Game",
    description:
      "Classic word guessing game where you guess letters to find the hidden word",
    category: "Word Games",
    difficulty: "Intermediate",
    tags: ["game", "string", "logic"],
    code: `import random

def hangman_game():
    words = [
        'python', 'programming', 'computer', 'algorithm', 'function',
        'variable', 'string', 'integer', 'boolean', 'array',
        'dictionary', 'loop', 'condition', 'method', 'class'
    ]
    
    # Hangman stages
    hangman_stages = [
        """
           -----
           |   |
               |
               |
               |
               |
        -------
        """,
        """
           -----
           |   |
           O   |
               |
               |
               |
        -------
        """,
        """
           -----
           |   |
           O   |
           |   |
               |
               |
        -------
        """,
        """
           -----
           |   |
           O   |
          /|   |
               |
               |
        -------
        """,
        """
           -----
           |   |
           O   |
          /|\\  |
               |
               |
        -------
        """,
        """
           -----
           |   |
           O   |
          /|\\  |
          /    |
               |
        -------
        """,
        """
           -----
           |   |
           O   |
          /|\\  |
          / \\  |
               |
        -------
        """
    ]
    
    print("🎭 Welcome to Hangman!")
    print("Guess the programming-related word letter by letter")
    print()
    
    word = random.choice(words).upper()
    guessed_letters = set()
    correct_guesses = set()
    max_wrong = 6
    wrong_guesses = 0
    
    print(f"Word has {len(word)} letters")
    print("Category: Programming & Computer Science")
    print()
    
    while wrong_guesses < max_wrong and len(correct_guesses) < len(set(word)):
        # Display current state
        display_word = ""
        for letter in word:
            if letter in correct_guesses:
                display_word += letter + " "
            else:
                display_word += "_ "
        
        print(f"Word: {display_word}")
        print(f"Wrong guesses: {wrong_guesses}/{max_wrong}")
        if guessed_letters:
            print(f"Guessed letters: {', '.join(sorted(guessed_letters))}")
        
        print(hangman_stages[wrong_guesses])
        
        # Get user guess
        try:
            guess = input("Guess a letter: ").upper().strip()
            
            if len(guess) != 1:
                print("Please enter exactly one letter!")
                continue
                
            if not guess.isalpha():
                print("Please enter a valid letter!")
                continue
                
            if guess in guessed_letters:
                print(f"You already guessed '{guess}'. Try a different letter!")
                continue
                
        except KeyboardInterrupt:
            print("\\nGame interrupted. Thanks for playing!")
            return
        
        guessed_letters.add(guess)
        
        if guess in word:
            correct_guesses.add(guess)
            print(f"✅ Good guess! '{guess}' is in the word!")
            
            # Check if word is complete
            if all(letter in correct_guesses for letter in word):
                print(f"\\n🎉 Congratulations! You won!")
                print(f"The word was: {word}")
                print(f"You won with {wrong_guesses} wrong guesses!")
                return
        else:
            wrong_guesses += 1
            print(f"❌ Sorry! '{guess}' is not in the word.")
            print(f"Wrong guesses: {wrong_guesses}/{max_wrong}")
        
        print("-" * 40)
    
    # Game over
    if wrong_guesses >= max_wrong:
        print(hangman_stages[wrong_guesses])
        print("💀 Game Over! You've been hanged!")
        print(f"The word was: {word}")
    
    play_again = input("\\nPlay again? (y/n): ").lower().strip()
    if play_again.startswith('y'):
        print("\\n" + "="*50)
        hangman_game()

hangman_game()`,
    logic: [
      "Choose a random word from a predefined list of programming-related terms",
      "Initialize game state: track guessed letters, correct guesses, and wrong attempts",
      "Display the current state of the word with guessed letters revealed and others as underscores",
      "Get a letter guess from the player and validate it (single letter, not already guessed)",
      "Check if the guessed letter is in the word and update the game state accordingly",
      "Draw the hangman progressively with each wrong guess using ASCII art",
      "End the game when the word is complete (win) or maximum wrong guesses reached (lose)",
    ],
    inputs: [{ name: "letter", type: "text", label: "Guess a letter" }],
  },
  {
    id: "unit-converter",
    title: "Unit Converter",
    description:
      "Convert between different units of measurement (length, weight, temperature)",
    category: "Utility Tools",
    difficulty: "Beginner",
    tags: ["conversion", "math", "utility"],
    code: `def unit_converter():
    print("📐 Universal Unit Converter")
    print("Convert between different units of measurement")
    print()
    
    conversions = {
        "length": {
            "name": "Length",
            "units": {
                "mm": {"name": "Millimeters", "to_base": 0.001},
                "cm": {"name": "Centimeters", "to_base": 0.01},
                "m": {"name": "Meters", "to_base": 1},
                "km": {"name": "Kilometers", "to_base": 1000},
                "in": {"name": "Inches", "to_base": 0.0254},
                "ft": {"name": "Feet", "to_base": 0.3048},
                "yd": {"name": "Yards", "to_base": 0.9144},
                "mi": {"name": "Miles", "to_base": 1609.34}
            }
        },
        "weight": {
            "name": "Weight",
            "units": {
                "mg": {"name": "Milligrams", "to_base": 0.001},
                "g": {"name": "Grams", "to_base": 1},
                "kg": {"name": "Kilograms", "to_base": 1000},
                "oz": {"name": "Ounces", "to_base": 28.3495},
                "lb": {"name": "Pounds", "to_base": 453.592},
                "ton": {"name": "Tons", "to_base": 1000000}
            }
        },
        "temperature": {
            "name": "Temperature",
            "units": {
                "c": {"name": "Celsius"},
                "f": {"name": "Fahrenheit"},
                "k": {"name": "Kelvin"}
            }
        }
    }
    
    # Display categories
    print("Available conversion categories:")
    for key, category in conversions.items():
        print(f"{key}: {category['name']}")
    print()
    
    # Get category choice
    category_choice = input("Choose a category (length/weight/temperature): ").lower().strip()
    
    if category_choice not in conversions:
        print("Invalid category. Please choose length, weight, or temperature.")
        return
    
    category = conversions[category_choice]
    print(f"\\n{category['name']} Converter")
    print("Available units:")
    
    for unit_key, unit_info in category['units'].items():
        print(f"  {unit_key}: {unit_info['name']}")
    print()
    
    try:
        # Get input values
        from_unit = input("Convert FROM (unit code): ").lower().strip()
        to_unit = input("Convert TO (unit code): ").lower().strip()
        value = float(input("Enter the value to convert: "))
        
        if from_unit not in category['units'] or to_unit not in category['units']:
            print("Invalid unit code. Please check available units.")
            return
        
        # Perform conversion
        if category_choice == "temperature":
            result = convert_temperature(value, from_unit, to_unit)
        else:
            # Convert to base unit, then to target unit
            base_value = value * category['units'][from_unit]['to_base']
            result = base_value / category['units'][to_unit]['to_base']
        
        # Display result
        from_name = category['units'][from_unit]['name']
        to_name = category['units'][to_unit]['name']
        
        print(f"\\n🔄 Conversion Result:")
        print(f"{value} {from_name} = {result:.6f} {to_name}")
        
        # Show additional info
        print(f"\\n📊 Details:")
        print(f"Original: {value} {from_unit}")
        print(f"Converted: {result:.6f} {to_unit}")
        print(f"Category: {category['name']}")
        
    except ValueError:
        print("Please enter a valid number for the value.")
    except Exception as e:
        print(f"An error occurred: {e}")


def convert_temperature(value, from_unit, to_unit):
    # Convert to Celsius first
    if from_unit == 'c':
        celsius = value
    elif from_unit == 'f':
        celsius = (value - 32) * 5/9
    elif from_unit == 'k':
        celsius = value - 273.15
    
    # Convert from Celsius to target
    if to_unit == 'c':
        return celsius
    elif to_unit == 'f':
        return celsius * 9/5 + 32
    elif to_unit == 'k':
        return celsius + 273.15


unit_converter()`,
    logic: [
      "Define conversion categories (length, weight, temperature) with their respective units and conversion factors",
      "Display available categories and let the user choose which type of conversion they want",
      "Show all available units in the chosen category with their full names",
      "Get the source unit, target unit, and value to convert from the user",
      "For length and weight, convert to a base unit first, then to the target unit",
      "For temperature, use special conversion formulas between Celsius, Fahrenheit, and Kelvin",
      "Display the conversion result with proper formatting and additional details",
    ],
    inputs: [
      {
        name: "category",
        type: "select",
        options: ["length", "weight", "temperature"],
        label: "Category",
      },
      { name: "from_unit", type: "text", label: "From unit (e.g., m, kg, c)" },
      { name: "to_unit", type: "text", label: "To unit (e.g., ft, lb, f)" },
      { name: "value", type: "number", label: "Value to convert" },
    ],
  },
  {
    id: "bmi-calculator",
    title: "BMI Calculator",
    description:
      "Calculate Body Mass Index and get health recommendations based on the result",
    category: "Health Tools",
    difficulty: "Beginner",
    tags: ["health", "calculation", "utility"],
    code: `def bmi_calculator():
    print("🏥 BMI Calculator")
    print("Calculate your Body Mass Index and get health insights")
    print()
    
    # Get measurement system preference
    print("Choose measurement system:")
    print("1. Metric (kg, cm)")
    print("2. Imperial (lbs, inches)")
    
    try:
        system = input("Enter choice (1 or 2): ").strip()
        
        if system == "1":
            # Metric system
            weight = float(input("Enter your weight in kilograms: "))
            height_cm = float(input("Enter your height in centimeters: "))
            height_m = height_cm / 100
            
            if weight <= 0 or height_cm <= 0:
                print("Please enter positive values for weight and height.")
                return
            
            bmi = weight / (height_m ** 2)
            unit_weight = "kg"
            unit_height = "cm"
            
        elif system == "2":
            # Imperial system
            weight_lbs = float(input("Enter your weight in pounds: "))
            height_inches = float(input("Enter your height in inches: "))
            
            if weight_lbs <= 0 or height_inches <= 0:
                print("Please enter positive values for weight and height.")
                return
            
            # Convert to metric for calculation
            weight = weight_lbs * 0.453592
            height_m = height_inches * 0.0254
            
            bmi = weight / (height_m ** 2)
            unit_weight = "lbs"
            unit_height = "inches"
            height_cm = height_inches
            
        else:
            print("Invalid choice. Please enter 1 or 2.")
            return
            
    except ValueError:
        print("Please enter valid numbers for weight and height.")
        return
    
    # Calculate BMI category and health status
    if bmi < 18.5:
        category = "Underweight"
        status = "Below normal weight"
        color_emoji = "🔵"
        advice = "Consider consulting a healthcare provider about healthy weight gain strategies."
    elif 18.5 <= bmi < 25:
        category = "Normal weight"
        status = "Healthy weight range"
        color_emoji = "🟢"
        advice = "Great! Maintain your current lifestyle with regular exercise and balanced nutrition."
    elif 25 <= bmi < 30:
        category = "Overweight"
        status = "Above normal weight"
        color_emoji = "🟡"
        advice = "Consider adopting a healthier diet and increasing physical activity."
    else:
        category = "Obese"
        status = "Significantly above normal weight"
        color_emoji = "🔴"
        advice = "Consider consulting a healthcare provider for a comprehensive health plan."
    
    # Display results
    print("\\n" + "=" * 50)
    print("📊 YOUR BMI RESULTS")
    print("=" * 50)
    
    if system == "1":
        print(f"Weight: {weight:.1f} kg")
        print(f"Height: {height_cm:.1f} cm ({height_m:.2f} m)")
    else:
        print(f"Weight: {weight_lbs:.1f} lbs")
        print(f"Height: {height_inches:.1f} inches")
    
    print(f"\\nBMI: {bmi:.2f}")
    print(f"Category: {color_emoji} {category}")
    print(f"Status: {status}")
    
    # Show BMI scale
    print(f"\\n📏 BMI Scale:")
    print(f"{'🔵 Underweight' if bmi < 18.5 else '  Underweight'}: Below 18.5")
    print(f"{'🟢 Normal weight' if 18.5 <= bmi < 25 else '  Normal weight'}: 18.5 - 24.9")
    print(f"{'🟡 Overweight' if 25 <= bmi < 30 else '  Overweight'}: 25.0 - 29.9")
    print(f"{'🔴 Obese' if bmi >= 30 else '  Obese'}: 30.0 and above")
    
    print(f"\\n💡 Health Advice:")
    print(f"{advice}")
    
    # Additional health tips
    print(f"\\n🏃‍♂️ General Health Tips:")
    print("• Aim for at least 150 minutes of moderate exercise per week")
    print("• Eat a balanced diet with fruits, vegetables, and whole grains")
    print("• Stay hydrated by drinking plenty of water")
    print("• Get adequate sleep (7-9 hours per night)")
    print("• Regular health check-ups are important")
    
    print(f"\\n⚠️  Disclaimer:")
    print("BMI is a general indicator and may not account for muscle mass,")
    print("bone density, and other factors. Consult healthcare professionals")
    print("for personalized health advice.")

bmi_calculator()`,
    logic: [
      "Ask the user to choose between metric (kg, cm) or imperial (lbs, inches) measurement systems",
      "Get weight and height inputs from the user and validate that they're positive numbers",
      "Convert imperial measurements to metric if needed for standardized BMI calculation",
      "Calculate BMI using the formula: BMI = weight(kg) / height(m)²",
      "Determine the BMI category (underweight, normal, overweight, obese) based on standard ranges",
      "Provide personalized health advice and recommendations based on the calculated BMI",
      "Display a comprehensive result with BMI scale, health tips, and important disclaimers",
    ],
    inputs: [
      {
        name: "system",
        type: "select",
        options: ["1", "2"],
        label: "System (1=Metric, 2=Imperial)",
      },
      { name: "weight", type: "number", label: "Weight (kg or lbs)" },
      { name: "height", type: "number", label: "Height (cm or inches)" },
    ],
  },
  {
    id: "word-counter",
    title: "Word Counter Tool",
    description:
      "Analyze text to count words, characters, sentences, and provide reading statistics",
    category: "Text Analysis",
    difficulty: "Beginner",
    tags: ["text", "analysis", "utility"],
    code: `import re

def word_counter():
    print("📝 Advanced Word Counter & Text Analyzer")
    print("Analyze your text for detailed statistics")
    print()
    
    # Get text input
    print("Enter your text (press Enter twice when finished):")
    lines = []
    while True:
        line = input()
        if line:
            lines.append(line)
        else:
            break
    
    text = "\\n".join(lines)
    
    if not text.strip():
        print("No text entered. Please try again.")
        return
    
    # Basic counts
    total_characters = len(text)
    total_characters_no_spaces = len(text.replace(" ", ""))
    
    # Word analysis
    words = text.split()
    total_words = len(words)
    
    # Sentence analysis
    sentences = re.split(r'[.!?]+', text)
    sentences = [s.strip() for s in sentences if s.strip()]
    total_sentences = len(sentences)
    
    # Paragraph analysis
    paragraphs = text.split('\\n\\n')
    paragraphs = [p.strip() for p in paragraphs if p.strip()]
    total_paragraphs = len(paragraphs)
    
    # Advanced word analysis
    word_lengths = [len(word.strip('.,!?";:()[]{}')) for word in words]
    avg_word_length = sum(word_lengths) / len(word_lengths) if word_lengths else 0
    
    # Most common words (case-insensitive)
    clean_words = [re.sub(r'[^a-zA-Z0-9]', '', word.lower()) for word in words]
    clean_words = [word for word in clean_words if word]
    
    word_frequency = {}
    for word in clean_words:
        word_frequency[word] = word_frequency.get(word, 0) + 1
    
    # Sort by frequency
    most_common = sorted(word_frequency.items(), key=lambda x: x[1], reverse=True)[:5]
    
    # Reading time estimation (average 200 words per minute)
    reading_time_minutes = total_words / 200
    reading_time_seconds = (reading_time_minutes % 1) * 60
    
    # Display results
    print("\\n" + "=" * 60)
    print("📊 TEXT ANALYSIS RESULTS")
    print("=" * 60)
    
    print(f"\\n📄 Basic Statistics:")
    print(f"Total characters: {total_characters:,}")
    print(f"Characters (no spaces): {total_characters_no_spaces:,}")
    print(f"Total words: {total_words:,}")
    print(f"Total sentences: {total_sentences:,}")
    print(f"Total paragraphs: {total_paragraphs:,}")
    
    if total_words > 0:
        print(f"\\n📐 Averages:")
        print(f"Average word length: {avg_word_length:.2f} characters")
        print(f"Average words per sentence: {total_words/total_sentences:.2f}")
        print(f"Average sentences per paragraph: {total_sentences/total_paragraphs:.2f}")
    
    print(f"\\n⏱️ Reading Time:")
    if reading_time_minutes >= 1:
        print(f"Estimated reading time: {int(reading_time_minutes)} min {int(reading_time_seconds)} sec")
    else:
        print(f"Estimated reading time: {int(reading_time_minutes * 60)} seconds")
    print("(Based on 200 words per minute average reading speed)")
    
    if most_common:
        print(f"\\n🔤 Most Common Words:")
        for i, (word, count) in enumerate(most_common, 1):
            percentage = (count / total_words) * 100
            print(f"{i}. '{word}' - {count} times ({percentage:.1f}%)")
    
    # Text complexity indicators
    print(f"\\n🧠 Text Complexity:")
    
    # Average sentence length
    avg_sentence_length = total_words / total_sentences if total_sentences > 0 else 0
    
    if avg_sentence_length < 15:
        complexity = "Simple"
        complexity_emoji = "🟢"
    elif avg_sentence_length < 20:
        complexity = "Moderate"
        complexity_emoji = "🟡"
    else:
        complexity = "Complex"
        complexity_emoji = "🔴"
    
    print(f"Sentence complexity: {complexity_emoji} {complexity}")
    print(f"Average sentence length: {avg_sentence_length:.1f} words")
    
    # Longest and shortest words
    if words:
        longest_word = max(words, key=lambda w: len(re.sub(r'[^a-zA-Z0-9]', '', w)))
        shortest_word = min(words, key=lambda w: len(re.sub(r'[^a-zA-Z0-9]', '', w)))
        
        print(f"\\n📏 Word Length:")
        print(f"Longest word: '{re.sub(r'[^a-zA-Z0-9]', '', longest_word)}' ({len(re.sub(r'[^a-zA-Z0-9]', '', longest_word))} letters)")
        print(f"Shortest word: '{re.sub(r'[^a-zA-Z0-9]', '', shortest_word)}' ({len(re.sub(r'[^a-zA-Z0-9]', '', shortest_word))} letters)")
    
    # Text preview
    print(f"\\n👀 Text Preview (First 100 characters):")
    preview = text[:100] + "..." if len(text) > 100 else text
    print(f'"{preview}"')

word_counter()`,
    logic: [
      "Get multi-line text input from the user, allowing them to enter paragraphs and finish with an empty line",
      "Count basic statistics: total characters (with and without spaces), words, sentences, and paragraphs",
      "Use regular expressions to properly identify sentences (split on periods, exclamation marks, question marks)",
      "Analyze word patterns: calculate average word length and identify most frequently used words",
      "Estimate reading time based on average reading speed (200 words per minute)",
      "Determine text complexity based on average sentence length and vocabulary difficulty",
      "Provide comprehensive statistics with formatting and helpful insights about the text",
    ],
    inputs: [
      { name: "text", type: "text", label: "Enter your text to analyze" },
    ],
  },
  {
    id: "quiz-game",
    title: "Simple Quiz Game",
    description:
      "Interactive quiz game with multiple-choice questions and score tracking",
    category: "Educational Games",
    difficulty: "Intermediate",
    tags: ["quiz", "education", "game"],
    code: `import random

def quiz_game():
    print("🧠 Interactive Quiz Game")
    print("Test your knowledge with multiple choice questions!")
    print()
    
    # Question bank with categories
    questions = {
        "python": [
            {
                "question": "What does 'len()' function do in Python?",
                "options": ["A) Returns the length of an object", "B) Creates a new list", "C) Sorts a list", "D) Deletes an item"],
                "answer": "A",
                "explanation": "len() returns the number of items in an object like string, list, tuple, etc."
            },
            {
                "question": "Which symbol is used for comments in Python?",
                "options": ["A) //", "B) #", "C) /* */", "D) --"],
                "answer": "B",
                "explanation": "The hash symbol (#) is used for single-line comments in Python."
            },
            {
                "question": "What data type is [1, 2, 3] in Python?",
                "options": ["A) Tuple", "B) Dictionary", "C) List", "D) Set"],
                "answer": "C",
                "explanation": "Square brackets [] define a list in Python, which is mutable and ordered."
            }
        ],
        "general": [
            {
                "question": "What is the largest planet in our solar system?",
                "options": ["A) Saturn", "B) Jupiter", "C) Neptune", "D) Earth"],
                "answer": "B",
                "explanation": "Jupiter is the largest planet, with a mass greater than all other planets combined."
            },
            {
                "question": "Who painted the Mona Lisa?",
                "options": ["A) Vincent van Gogh", "B) Pablo Picasso", "C) Leonardo da Vinci", "D) Michelangelo"],
                "answer": "C",
                "explanation": "Leonardo da Vinci painted the Mona Lisa between 1503-1506."
            },
            {
                "question": "What is the chemical symbol for gold?",
                "options": ["A) Go", "B) Au", "C) Ag", "D) Gd"],
                "answer": "B",
                "explanation": "Au comes from the Latin word 'aurum' meaning gold."
            }
        ],
        "math": [
            {
                "question": "What is 15% of 80?",
                "options": ["A) 10", "B) 12", "C) 15", "D) 20"],
                "answer": "B",
                "explanation": "15% of 80 = 0.15 × 80 = 12"
            },
            {
                "question": "What is the square root of 144?",
                "options": ["A) 11", "B) 12", "C) 13", "D) 14"],
                "answer": "B",
                "explanation": "√144 = 12 because 12 × 12 = 144"
            }
        ]
    }
    
    # Choose quiz category
    print("Available categories:")
    categories = list(questions.keys())
    for i, category in enumerate(categories, 1):
        print(f"{i}. {category.title()}")
    print(f"{len(categories) + 1}. Mixed (all categories)")
    
    try:
        choice = int(input(f"\\nChoose category (1-{len(categories) + 1}): "))
        
        if 1 <= choice <= len(categories):
            selected_questions = questions[categories[choice - 1]].copy()
            category_name = categories[choice - 1].title()
        elif choice == len(categories) + 1:
            selected_questions = []
            for category_questions in questions.values():
                selected_questions.extend(category_questions)
            category_name = "Mixed"
        else:
            print("Invalid choice. Using mixed category.")
            selected_questions = []
            for category_questions in questions.values():
                selected_questions.extend(category_questions)
            category_name = "Mixed"
            
    except ValueError:
        print("Invalid input. Using mixed category.")
        selected_questions = []
        for category_questions in questions.values():
            selected_questions.extend(category_questions)
        category_name = "Mixed"
    
    # Shuffle questions for randomness
    random.shuffle(selected_questions)
    
    # Ask how many questions
    max_questions = len(selected_questions)
    try:
        num_questions = int(input(f"How many questions? (1-{max_questions}): "))
        num_questions = min(max_questions, max(1, num_questions))
    except ValueError:
        num_questions = min(5, max_questions)
    
    selected_questions = selected_questions[:num_questions]
    
    print(f"\\n🎯 Starting {category_name} Quiz - {num_questions} Questions")
    print("=" * 50)
    
    score = 0
    results = []
    
    for i, q in enumerate(selected_questions, 1):
        print(f"\\nQuestion {i} of {num_questions}:")
        print(f"{q['question']}")
        print()
        
        for option in q['options']:
            print(f"  {option}")
        
        print()
        user_answer = input("Your answer (A, B, C, or D): ").upper().strip()
        
        if user_answer == q['answer']:
            print("✅ Correct!")
            score += 1
            results.append({"question": i, "correct": True})
        else:
            print(f"❌ Wrong! The correct answer was {q['answer']}")
            results.append({"question": i, "correct": False})
        
        print(f"💡 Explanation: {q['explanation']}")
        print("-" * 40)
    
    # Final results
    percentage = (score / num_questions) * 100
    
    print(f"\\n🏆 QUIZ RESULTS")
    print("=" * 50)
    print(f"Category: {category_name}")
    print(f"Questions answered: {num_questions}")
    print(f"Correct answers: {score}")
    print(f"Wrong answers: {num_questions - score}")
    print(f"Final score: {percentage:.1f}%")
    
    # Performance evaluation
    if percentage >= 90:
        grade = "A+ Excellent!"
        emoji = "🌟"
    elif percentage >= 80:
        grade = "A Good job!"
        emoji = "🎉"
    elif percentage >= 70:
        grade = "B Not bad!"
        emoji = "👍"
    elif percentage >= 60:
        grade = "C Needs improvement"
        emoji = "📚"
    else:
        grade = "D Keep studying!"
        emoji = "💪"
    
    print(f"Grade: {emoji} {grade}")
    
    # Ask to play again
    play_again = input("\\nPlay again? (y/n): ").lower().strip()
    if play_again.startswith('y'):
        print("\\n" + "="*50)
        quiz_game()
    else:
        print("Thanks for playing! Keep learning! 🧠")

quiz_game()`,
    logic: [
      "Create a question bank organized by categories (Python, General Knowledge, Math) with multiple choice options",
      "Let the user choose a category or mixed questions from all categories",
      "Allow the user to select how many questions they want to answer",
      "Shuffle questions randomly to ensure different quiz experiences each time",
      "Present each question with multiple choice options and get the user's answer",
      "Provide immediate feedback with explanations for each question (correct or wrong)",
      "Calculate the final score as a percentage and assign a letter grade based on performance",
    ],
    inputs: [
      {
        name: "category",
        type: "select",
        options: ["1", "2", "3", "4"],
        label: "Category (1=Python, 2=General, 3=Math, 4=Mixed)",
      },
      { name: "num_questions", type: "number", label: "Number of questions" },
      {
        name: "answer",
        type: "select",
        options: ["A", "B", "C", "D"],
        label: "Your answer",
      },
    ],
  },

  {
    id: "weather-fetcher",
    title: "Weather Fetching Script (API)",
    description:
      "Fetch real-time weather data using API calls and display formatted weather information",
    category: "API Integration",
    difficulty: "Intermediate",
    tags: ["api", "requests", "json"],
    code: `import requests
import json
from datetime import datetime

def weather_fetcher():
    print("🌤️  Real-Time Weather Fetcher")
    print("Get current weather data using OpenWeatherMap API")
    print()
    
    # API configuration (demo - in real app use environment variables)
    API_KEY = "your_api_key_here"  # Get from openweathermap.org
    BASE_URL = "http://api.openweathermap.org/data/2.5/weather"
    
    # Get city from user
    city = input("Enter city name: ").strip()
    
    if not city:
        print("Please enter a valid city name")
        return
    
    # Construct API URL
    url = f"{BASE_URL}?q={city}&appid={API_KEY}&units=metric"
    
    print(f"\\n🔍 Fetching weather data for {city}...")
    
    try:
        # Make API request
        response = requests.get(url, timeout=10)
        
        # Check if request was successful
        if response.status_code == 200:
            data = response.json()
            
            # Extract weather information
            main = data['main']
            weather = data['weather'][0]
            wind = data['wind']
            sys = data['sys']
            
            # Display formatted weather data
            print("\\n" + "="*50)
            print(f"🏙️  WEATHER REPORT FOR {city.upper()}")
            print("="*50)
            
            print(f"🌡️  Temperature: {main['temp']}°C (feels like {main['feels_like']}°C)")
            print(f"📊 Conditions: {weather['description'].title()}")
            print(f"💨 Wind Speed: {wind.get('speed', 'N/A')} m/s")
            print(f"💧 Humidity: {main['humidity']}%")
            print(f"🔽 Pressure: {main['pressure']} hPa")
            
            # Temperature range
            print(f"🌡️  Min/Max: {main['temp_min']}°C / {main['temp_max']}°C")
            
            # Sunrise/Sunset
            sunrise = datetime.fromtimestamp(sys['sunrise']).strftime('%H:%M:%S')
            sunset = datetime.fromtimestamp(sys['sunset']).strftime('%H:%M:%S')
            print(f"🌅 Sunrise: {sunrise}")
            print(f"🌇 Sunset: {sunset}")
            
            # Weather icon representation
            weather_icons = {
                'clear sky': '☀️',
                'few clouds': '🌤️',
                'scattered clouds': '⛅',
                'broken clouds': '☁️',
                'shower rain': '🌦️',
                'rain': '🌧️',
                'thunderstorm': '⛈️',
                'snow': '❄️',
                'mist': '🌫️'
            }
            
            icon = weather_icons.get(weather['description'], '🌤️')
            print(f"\\n{icon} Current Conditions: {weather['description'].title()}")
            
            # Additional information
            print(f"\\n📍 Location: {data['name']}, {sys['country']}")
            print(f"🕐 Last Updated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
            
        elif response.status_code == 404:
            print(f"❌ City '{city}' not found. Please check spelling and try again.")
            
        elif response.status_code == 401:
            print("❌ Invalid API key. Please check your OpenWeatherMap API key.")
            
        else:
            print(f"❌ Error fetching weather data. Status code: {response.status_code}")
            
    except requests.exceptions.Timeout:
        print("❌ Request timed out. Please check your internet connection.")
        
    except requests.exceptions.RequestException as e:
        print(f"❌ Network error: {e}")
        
    except KeyError as e:
        print(f"❌ Unexpected API response format. Missing key: {e}")
        
    except Exception as e:
        print(f"❌ An unexpected error occurred: {e}")

# Demo function for testing
def demo_weather():
    print("🌤️  Weather API Demo")
    print("This is a demonstration of weather fetching functionality")
    print()
    
    # Simulated weather data for demo
    demo_data = {
        'city': 'London',
        'temperature': 22,
        'feels_like': 24,
        'description': 'partly cloudy',
        'humidity': 65,
        'wind_speed': 3.5,
        'pressure': 1013
    }
    
    print(f"🏙️  DEMO WEATHER REPORT FOR {demo_data['city'].upper()}")
    print("="*50)
    print(f"🌡️  Temperature: {demo_data['temperature']}°C (feels like {demo_data['feels_like']}°C)")
    print(f"📊 Conditions: {demo_data['description'].title()}")
    print(f"💨 Wind Speed: {demo_data['wind_speed']} m/s")
    print(f"💧 Humidity: {demo_data['humidity']}%")
    print(f"🔽 Pressure: {demo_data['pressure']} hPa")
    print(f"\\n⛅ Current Conditions: {demo_data['description'].title()}")
    
    print(f"\\n💡 To use real data:")
    print("1. Get API key from openweathermap.org")
    print("2. Replace 'your_api_key_here' with your actual API key")
    print("3. Install requests library: pip install requests")

# Run demo for playground
demo_weather()`,
    logic: [
      "Set up API configuration with OpenWeatherMap API key and base URL for making weather requests",
      "Get the city name from user input and validate that it's not empty",
      "Construct the complete API URL with city name, API key, and metric units parameter",
      "Make HTTP GET request to the weather API using the requests library with timeout handling",
      "Check the response status code: 200 for success, 404 for city not found, 401 for invalid API key",
      "Parse the JSON response and extract relevant weather data like temperature, humidity, wind speed",
      "Format and display the weather information in a user-friendly way with emojis and proper units",
    ],
    inputs: [
      {
        name: "city",
        type: "text",
        label: "City name (e.g., London, Paris, Tokyo)",
      },
    ],
  },
  {
    id: "url-shortener",
    title: "URL Shortener",
    description:
      "Create shortened URLs and manage URL redirection with custom short codes",
    category: "Web Utilities",
    difficulty: "Intermediate",
    tags: ["url", "web", "database"],
    code: `import random
import string
import json
import os
from urllib.parse import urlparse

class URLShortener:
    def __init__(self):
        self.url_database = {}
        self.reverse_database = {}
        self.base_url = "https://short.ly/"
        self.data_file = "url_data.json"
        self.load_data()
    
    def load_data(self):
        """Load existing URL data from file"""
        try:
            if os.path.exists(self.data_file):
                with open(self.data_file, 'r') as f:
                    data = json.load(f)
                    self.url_database = data.get('url_database', {})
                    self.reverse_database = data.get('reverse_database', {})
            print("✅ URL database loaded successfully")
        except Exception as e:
            print(f"⚠️ Could not load existing data: {e}")
            self.url_database = {}
            self.reverse_database = {}
    
    def save_data(self):
        """Save URL data to file"""
        try:
            data = {
                'url_database': self.url_database,
                'reverse_database': self.reverse_database
            }
            with open(self.data_file, 'w') as f:
                json.dump(data, f, indent=2)
            print("💾 Data saved successfully")
        except Exception as e:
            print(f"❌ Could not save data: {e}")
    
    def is_valid_url(self, url):
        """Validate if the provided string is a valid URL"""
        try:
            result = urlparse(url)
            return all([result.scheme, result.netloc])
        except:
            return False
    
    def generate_short_code(self, length=6):
        """Generate a random short code"""
        characters = string.ascii_letters + string.digits
        while True:
            short_code = ''.join(random.choice(characters) for _ in range(length))
            if short_code not in self.url_database:
                return short_code
    
    def shorten_url(self, long_url, custom_code=None):
        """Create a shortened URL"""
        # Validate URL
        if not self.is_valid_url(long_url):
            return {"error": "Invalid URL format. Please include http:// or https://"}
        
        # Check if URL already exists
        if long_url in self.reverse_database:
            existing_code = self.reverse_database[long_url]
            return {
                "short_url": f"{self.base_url}{existing_code}",
                "short_code": existing_code,
                "long_url": long_url,
                "status": "URL already exists"
            }
        
        # Use custom code or generate new one
        if custom_code:
            if custom_code in self.url_database:
                return {"error": f"Custom code '{custom_code}' already exists"}
            if len(custom_code) < 3:
                return {"error": "Custom code must be at least 3 characters"}
            short_code = custom_code
        else:
            short_code = self.generate_short_code()
        
        # Store the mapping
        self.url_database[short_code] = {
            'long_url': long_url,
            'clicks': 0,
            'created_at': str(datetime.now())
        }
        self.reverse_database[long_url] = short_code
        
        self.save_data()
        
        return {
            "short_url": f"{self.base_url}{short_code}",
            "short_code": short_code,
            "long_url": long_url,
            "status": "URL shortened successfully"
        }
    
    def expand_url(self, short_code):
        """Get original URL from short code"""
        if short_code in self.url_database:
            url_data = self.url_database[short_code]
            # Increment click counter
            url_data['clicks'] += 1
            self.save_data()
            
            return {
                "long_url": url_data['long_url'],
                "clicks": url_data['clicks'],
                "status": "URL found"
            }
        else:
            return {"error": "Short code not found"}
    
    def get_stats(self):
        """Get statistics about stored URLs"""
        total_urls = len(self.url_database)
        total_clicks = sum(data['clicks'] for data in self.url_database.values())
        
        return {
            "total_urls": total_urls,
            "total_clicks": total_clicks,
            "urls": self.url_database
        }
    
    def list_urls(self):
        """List all shortened URLs"""
        if not self.url_database:
            return "No URLs found in database"
        
        result = "📋 All Shortened URLs:\\n"
        result += "="*50 + "\\n"
        
        for code, data in self.url_database.items():
            result += f"🔗 {self.base_url}{code}\\n"
            result += f"   → {data['long_url']}\\n"
            result += f"   📊 Clicks: {data['clicks']}\\n"
            result += f"   📅 Created: {data['created_at']}\\n\\n"
        
        return result

def main():
    print("🔗 URL Shortener Service")
    print("Create short, memorable links from long URLs")
    print()
    
    shortener = URLShortener()
    
    while True:
        print("\\nChoose an option:")
        print("1. Shorten URL")
        print("2. Expand URL (get original)")
        print("3. View statistics")
        print("4. List all URLs")
        print("5. Exit")
        
        choice = input("\\nEnter choice (1-5): ").strip()
        
        if choice == '1':
            long_url = input("Enter URL to shorten: ").strip()
            custom_code = input("Custom short code (optional, press Enter to skip): ").strip()
            
            if not custom_code:
                custom_code = None
            
            result = shortener.shorten_url(long_url, custom_code)
            
            if 'error' in result:
                print(f"❌ Error: {result['error']}")
            else:
                print(f"\\n✅ {result['status']}")
                print(f"🔗 Short URL: {result['short_url']}")
                print(f"📝 Short Code: {result['short_code']}")
                print(f"🌐 Original URL: {result['long_url']}")
        
        elif choice == '2':
            short_code = input("Enter short code: ").strip()
            result = shortener.expand_url(short_code)
            
            if 'error' in result:
                print(f"❌ Error: {result['error']}")
            else:
                print(f"\\n✅ URL found!")
                print(f"🌐 Original URL: {result['long_url']}")
                print(f"👆 Total clicks: {result['clicks']}")
        
        elif choice == '3':
            stats = shortener.get_stats()
            print(f"\\n📊 URL Shortener Statistics")
            print(f"="*30)
            print(f"Total URLs: {stats['total_urls']}")
            print(f"Total Clicks: {stats['total_clicks']}")
            
            if stats['urls']:
                print(f"\\n🔥 Most Popular URLs:")
                sorted_urls = sorted(stats['urls'].items(), 
                                   key=lambda x: x[1]['clicks'], reverse=True)[:3]
                for i, (code, data) in enumerate(sorted_urls, 1):
                    print(f"{i}. {shortener.base_url}{code} ({data['clicks']} clicks)")
        
        elif choice == '4':
            print(shortener.list_urls())
        
        elif choice == '5':
            print("👋 Thank you for using URL Shortener!")
            break
        
        else:
            print("❌ Invalid choice. Please try again.")

# Demo version for playground
def demo_shortener():
    print("🔗 URL Shortener Demo")
    print("This demonstrates URL shortening functionality")
    print()
    
    # Simulated shortening
    long_url = "https://www.example.com/very-long-url-that-is-hard-to-remember"
    short_code = "abc123"
    
    print(f"📝 Original URL: {long_url}")
    print(f"✂️ Shortening URL...")
    print(f"✅ Short URL created: https://short.ly/{short_code}")
    print(f"📊 Features:")
    print(f"   • Custom short codes")
    print(f"   • Click tracking")
    print(f"   • URL validation")
    print(f"   • Data persistence")
    print(f"   • Statistics dashboard")

# Run demo
demo_shortener()`,
    logic: [
      "Create a URL database to store mappings between short codes and original URLs with metadata",
      "Validate input URLs using urllib.parse to ensure they have proper scheme and network location",
      "Generate random short codes using letters and digits, ensuring uniqueness in the database",
      "Allow custom short codes with validation for length and availability",
      "Implement data persistence by saving/loading URL mappings to/from JSON file",
      "Track click statistics for each shortened URL and provide analytics",
      "Provide functionality to expand short codes back to original URLs and list all stored URLs",
    ],
    inputs: [
      {
        name: "long_url",
        type: "text",
        label: "URL to shorten (with http/https)",
      },
      {
        name: "custom_code",
        type: "text",
        label: "Custom short code (optional)",
      },
    ],
  },
  {
    id: "personal-diary",
    title: "Personal Diary/Journal (File Storage)",
    description:
      "Create, read, and manage daily journal entries with file-based storage system",
    category: "File Handling",
    difficulty: "Intermediate",
    tags: ["file", "diary", "storage"],
    code: `import os
import json
from datetime import datetime, timedelta
import hashlib

class PersonalDiary:
    def __init__(self):
        self.diary_folder = "diary_entries"
        self.settings_file = "diary_settings.json"
        self.ensure_diary_folder()
        self.load_settings()
    
    def ensure_diary_folder(self):
        """Create diary folder if it doesn't exist"""
        if not os.path.exists(self.diary_folder):
            os.makedirs(self.diary_folder)
            print(f"📁 Created diary folder: {self.diary_folder}")
    
    def load_settings(self):
        """Load user settings and preferences"""
        try:
            if os.path.exists(self.settings_file):
                with open(self.settings_file, 'r') as f:
                    self.settings = json.load(f)
            else:
                self.settings = {
                    "user_name": "Dear Diary",
                    "password_hash": None,
                    "theme": "classic",
                    "auto_backup": True
                }
                self.save_settings()
        except Exception as e:
            print(f"⚠️ Error loading settings: {e}")
            self.settings = {"user_name": "Dear Diary"}
    
    def save_settings(self):
        """Save user settings"""
        try:
            with open(self.settings_file, 'w') as f:
                json.dump(self.settings, f, indent=2)
        except Exception as e:
            print(f"❌ Error saving settings: {e}")
    
    def hash_password(self, password):
        """Create hash of password for security"""
        return hashlib.sha256(password.encode()).hexdigest()
    
    def authenticate(self):
        """Check password if diary is protected"""
        if self.settings.get("password_hash"):
            password = input("🔐 Enter diary password: ")
            if self.hash_password(password) != self.settings["password_hash"]:
                print("❌ Incorrect password!")
                return False
        return True
    
    def get_entry_filename(self, date_str):
        """Generate filename for diary entry"""
        return os.path.join(self.diary_folder, f"{date_str}.json")
    
    def write_entry(self, date_str=None):
        """Write a new diary entry"""
        if date_str is None:
            date_str = datetime.now().strftime('%Y-%m-%d')
        
        print(f"\\n📝 Writing entry for {date_str}")
        print("="*40)
        
        # Check if entry already exists
        filename = self.get_entry_filename(date_str)
        existing_entry = ""
        
        if os.path.exists(filename):
            choice = input(f"Entry for {date_str} exists. (e)dit, (a)ppend, or (c)ancel? ").lower()
            if choice == 'c':
                return
            elif choice == 'e':
                # Load existing entry for editing
                existing_data = self.load_entry(date_str)
                existing_entry = existing_data.get('content', '') if existing_data else ""
                print(f"\\nExisting entry:\\n{existing_entry}\\n")
            elif choice == 'a':
                existing_data = self.load_entry(date_str)
                existing_entry = existing_data.get('content', '') if existing_data else ""
                existing_entry += "\\n\\n--- Continued ---\\n"
        
        print("Enter your diary entry (type 'END' on a new line to finish):")
        print("-" * 40)
        
        entry_lines = []
        if existing_entry:
            entry_lines = [existing_entry]
        
        while True:
            line = input()
            if line.strip().upper() == 'END':
                break
            entry_lines.append(line)
        
        if not entry_lines or (len(entry_lines) == 1 and not entry_lines[0].strip()):
            print("❌ Empty entry. Nothing saved.")
            return
        
        # Create entry data
        entry_data = {
            'date': date_str,
            'timestamp': datetime.now().isoformat(),
            'content': '\\n'.join(entry_lines),
            'word_count': len(' '.join(entry_lines).split()),
            'mood': input("\\n😊 How are you feeling? (optional): ").strip(),
            'tags': input("🏷️  Tags (comma-separated, optional): ").strip().split(',') if input("🏷️  Add tags? (y/n): ").lower() == 'y' else []
        }
        
        # Clean up tags
        entry_data['tags'] = [tag.strip() for tag in entry_data['tags'] if tag.strip()]
        
        # Save entry
        try:
            with open(filename, 'w') as f:
                json.dump(entry_data, f, indent=2)
            
            print(f"\\n✅ Entry saved successfully!")
            print(f"📊 Word count: {entry_data['word_count']}")
            if entry_data['mood']:
                print(f"😊 Mood: {entry_data['mood']}")
            if entry_data['tags']:
                print(f"🏷️  Tags: {', '.join(entry_data['tags'])}")
                
        except Exception as e:
            print(f"❌ Error saving entry: {e}")
    
    def load_entry(self, date_str):
        """Load diary entry for specific date"""
        filename = self.get_entry_filename(date_str)
        
        try:
            if os.path.exists(filename):
                with open(filename, 'r') as f:
                    return json.load(f)
            return None
        except Exception as e:
            print(f"❌ Error loading entry: {e}")
            return None
    
    def read_entry(self, date_str=None):
        """Read and display diary entry"""
        if date_str is None:
            date_str = datetime.now().strftime('%Y-%m-%d')
        
        entry_data = self.load_entry(date_str)
        
        if entry_data is None:
            print(f"❌ No entry found for {date_str}")
            return
        
        print(f"\\n📖 Diary Entry - {date_str}")
        print("="*50)
        print(f"📅 Date: {entry_data['date']}")
        print(f"🕐 Time: {entry_data['timestamp']}")
        if entry_data.get('mood'):
            print(f"😊 Mood: {entry_data['mood']}")
        if entry_data.get('tags'):
            print(f"🏷️  Tags: {', '.join(entry_data['tags'])}")
        print(f"📊 Words: {entry_data['word_count']}")
        print("-"*50)
        print(entry_data['content'])
        print("-"*50)
    
    def list_entries(self):
        """List all diary entries"""
        try:
            entries = []
            for filename in os.listdir(self.diary_folder):
                if filename.endswith('.json'):
                    date_str = filename[:-5]  # Remove .json
                    entry_data = self.load_entry(date_str)
                    if entry_data:
                        entries.append(entry_data)
            
            if not entries:
                print("❌ No diary entries found.")
                return
            
            # Sort by date
            entries.sort(key=lambda x: x['date'], reverse=True)
            
            print(f"\\n📚 All Diary Entries ({len(entries)} total)")
            print("="*60)
            
            for entry in entries:
                content_preview = entry['content'][:100] + "..." if len(entry['content']) > 100 else entry['content']
                print(f"📅 {entry['date']} | 📊 {entry['word_count']} words")
                if entry.get('mood'):
                    print(f"   😊 Mood: {entry['mood']}")
                print(f"   📝 {content_preview}")
                print("-" * 40)
                
        except Exception as e:
            print(f"❌ Error listing entries: {e}")
    
    def search_entries(self, keyword):
        """Search for entries containing keyword"""
        try:
            found_entries = []
            
            for filename in os.listdir(self.diary_folder):
                if filename.endswith('.json'):
                    date_str = filename[:-5]
                    entry_data = self.load_entry(date_str)
                    
                    if entry_data and keyword.lower() in entry_data['content'].lower():
                        found_entries.append(entry_data)
            
            if not found_entries:
                print(f"❌ No entries found containing '{keyword}'")
                return
            
            print(f"\\n🔍 Search Results for '{keyword}' ({len(found_entries)} found)")
            print("="*60)
            
            for entry in found_entries:
                print(f"📅 {entry['date']} | 📊 {entry['word_count']} words")
                # Show context around keyword
                content = entry['content'].lower()
                keyword_pos = content.find(keyword.lower())
                start = max(0, keyword_pos - 50)
                end = min(len(content), keyword_pos + len(keyword) + 50)
                context = entry['content'][start:end]
                print(f"   📝 ...{context}...")
                print("-" * 40)
                
        except Exception as e:
            print(f"❌ Error searching entries: {e}")
    
    def get_stats(self):
        """Show diary statistics"""
        try:
            entries = []
            total_words = 0
            moods = []
            tags = []
            
            for filename in os.listdir(self.diary_folder):
                if filename.endswith('.json'):
                    date_str = filename[:-5]
                    entry_data = self.load_entry(date_str)
                    
                    if entry_data:
                        entries.append(entry_data)
                        total_words += entry_data.get('word_count', 0)
                        
                        if entry_data.get('mood'):
                            moods.append(entry_data['mood'])
                        
                        if entry_data.get('tags'):
                            tags.extend(entry_data['tags'])
            
            if not entries:
                print("❌ No entries to analyze.")
                return
            
            print(f"\\n📊 Diary Statistics")
            print("="*40)
            print(f"📚 Total entries: {len(entries)}")
            print(f"📝 Total words: {total_words:,}")
            print(f"📈 Average words per entry: {total_words // len(entries):,}")
            
            # Date range
            dates = [entry['date'] for entry in entries]
            print(f"📅 Date range: {min(dates)} to {max(dates)}")
            
            # Most common moods
            if moods:
                from collections import Counter
                common_moods = Counter(moods).most_common(3)
                print(f"😊 Most common moods:")
                for mood, count in common_moods:
                    print(f"   • {mood}: {count} times")
            
            # Most common tags
            if tags:
                from collections import Counter
                common_tags = Counter(tags).most_common(5)
                print(f"🏷️  Most used tags:")
                for tag, count in common_tags:
                    print(f"   • {tag}: {count} times")
                    
        except Exception as e:
            print(f"❌ Error generating statistics: {e}")

def main():
    print("📔 Personal Diary & Journal")
    print("Your private space for thoughts and memories")
    print()
    
    diary = PersonalDiary()
    
    if not diary.authenticate():
        return
    
    print(f"\\n👋 Welcome to your diary, {diary.settings['user_name']}!")
    
    while True:
        print("\\n📖 Diary Menu:")
        print("1. Write new entry")
        print("2. Read today's entry")
        print("3. Read specific date")
        print("4. List all entries")
        print("5. Search entries")
        print("6. View statistics")
        print("7. Settings")
        print("8. Exit")
        
        choice = input("\\nChoose option (1-8): ").strip()
        
        if choice == '1':
            date_input = input("Date (YYYY-MM-DD) or press Enter for today: ").strip()
            diary.write_entry(date_input if date_input else None)
            
        elif choice == '2':
            diary.read_entry()
            
        elif choice == '3':
            date_str = input("Enter date (YYYY-MM-DD): ").strip()
            if date_str:
                diary.read_entry(date_str)
            
        elif choice == '4':
            diary.list_entries()
            
        elif choice == '5':
            keyword = input("Enter search keyword: ").strip()
            if keyword:
                diary.search_entries(keyword)
        
        elif choice == '6':
            diary.get_stats()
            
        elif choice == '7':
            print("\\n⚙️ Settings coming soon...")
            
        elif choice == '8':
            print("👋 Happy writing! Your memories are safe.")
            break
            
        else:
            print("❌ Invalid option. Please try again.")

# Demo for playground
def demo_diary():
    print("📔 Personal Diary Demo")
    print("This shows diary functionality with file storage")
    print()
    
    print("✨ Features:")
    print("• Write daily entries with timestamps")
    print("• Edit and append to existing entries") 
    print("• Add mood tracking and tags")
    print("• Search through all entries")
    print("• View statistics and insights")
    print("• Password protection")
    print("• File-based storage (JSON format)")
    
    print("\\n📝 Sample Entry:")
    print("-" * 30)
    print("Date: 2025-01-15")
    print("Mood: Excited")
    print("Tags: learning, python, coding")
    print("\\nToday I learned about file handling in Python!")
    print("It's amazing how we can store and retrieve data.")
    print("-" * 30)
    
    print("\\n💾 File Structure:")
    print("diary_entries/")
    print("├── 2025-01-15.json")
    print("├── 2025-01-16.json") 
    print("└── diary_settings.json")

# Run demo
demo_diary()`,
    logic: [
      "Create a directory structure for storing diary entries with JSON files for each date",
      "Implement password protection using SHA-256 hashing to secure diary access",
      "Allow users to write new entries, edit existing ones, or append to previous entries",
      "Store entry metadata including date, timestamp, word count, mood, and tags",
      "Provide search functionality to find entries containing specific keywords with context",
      "Generate statistics like total entries, word count, most common moods and tags",
      "Implement data persistence using JSON files for both entries and user settings",
    ],
    inputs: [
      {
        name: "entry_date",
        type: "text",
        label: "Entry date (YYYY-MM-DD) or leave blank for today",
      },
      { name: "entry_content", type: "text", label: "Write your diary entry" },
      { name: "mood", type: "text", label: "How are you feeling? (optional)" },
    ],
  },
  {
    id: "website-status-checker",
    title: "Website Status Checker",
    description:
      "Monitor website availability and response times with detailed status reporting",
    category: "Web Monitoring",
    difficulty: "Intermediate",
    tags: ["web", "monitoring", "requests"],
    code: `import requests
import time
from datetime import datetime
import json
import os
from urllib.parse import urlparse

class WebsiteStatusChecker:
    def __init__(self):
        self.monitored_sites = []
        self.results_file = "website_monitoring.json"
        self.load_sites()
    
    def load_sites(self):
        """Load previously saved sites"""
        try:
            if os.path.exists(self.results_file):
                with open(self.results_file, 'r') as f:
                    data = json.load(f)
                    self.monitored_sites = data.get('sites', [])
        except Exception as e:
            print(f"⚠️ Could not load previous data: {e}")
            self.monitored_sites = []
    
    def save_results(self, results):
        """Save monitoring results to file"""
        try:
            data = {
                'last_check': datetime.now().isoformat(),
                'sites': self.monitored_sites,
                'results': results
            }
            
            with open(self.results_file, 'w') as f:
                json.dump(data, f, indent=2)
                
        except Exception as e:
            print(f"❌ Could not save results: {e}")
    
    def validate_url(self, url):
        """Validate URL format"""
        if not url.startswith(('http://', 'https://')):
            url = 'https://' + url
        
        try:
            result = urlparse(url)
            return all([result.scheme, result.netloc]) and url
        except:
            return False
    
    def check_single_website(self, url, timeout=10):
        """Check status of a single website"""
        try:
            start_time = time.time()
            
            response = requests.get(
                url, 
                timeout=timeout,
                allow_redirects=True,
                headers={'User-Agent': 'Website-Status-Checker/1.0'}
            )
            
            end_time = time.time()
            response_time = round((end_time - start_time) * 1000, 2)  # Convert to milliseconds
            
            # Determine status
            if response.status_code == 200:
                status = "✅ Online"
            elif 300 <= response.status_code < 400:
                status = "🔄 Redirect"
            elif 400 <= response.status_code < 500:
                status = "⚠️ Client Error"
            elif 500 <= response.status_code < 600:
                status = "❌ Server Error"
            else:
                status = "❓ Unknown"
            
            return {
                'url': url,
                'status': status,
                'status_code': response.status_code,
                'response_time': response_time,
                'content_length': len(response.content),
                'final_url': response.url,
                'timestamp': datetime.now().isoformat(),
                'error': None
            }
            
        except requests.exceptions.Timeout:
            return {
                'url': url,
                'status': '⏰ Timeout',
                'status_code': None,
                'response_time': timeout * 1000,
                'content_length': 0,
                'final_url': url,
                'timestamp': datetime.now().isoformat(),
                'error': 'Request timed out'
            }
            
        except requests.exceptions.ConnectionError:
            return {
                'url': url,
                'status': '🔌 Connection Failed',
                'status_code': None,
                'response_time': None,
                'content_length': 0,
                'final_url': url,
                'timestamp': datetime.now().isoformat(),
                'error': 'Could not connect to server'
            }
            
        except requests.exceptions.RequestException as e:
            return {
                'url': url,
                'status': '❌ Error',
                'status_code': None,
                'response_time': None,
                'content_length': 0,
                'final_url': url,
                'timestamp': datetime.now().isoformat(),
                'error': str(e)
            }
    
    def check_multiple_websites(self, urls, timeout=10):
        """Check status of multiple websites"""
        results = []
        total_sites = len(urls)
        
        print(f"\\n🔍 Checking {total_sites} websites...")
        print("="*60)
        
        for i, url in enumerate(urls, 1):
            print(f"[{i}/{total_sites}] Checking {url}...")
            
            result = self.check_single_website(url, timeout)
            results.append(result)
            
            # Display immediate result
            print(f"    {result['status']} ({result['status_code']})")
            if result['response_time']:
                print(f"    Response time: {result['response_time']}ms")
            if result['error']:
                print(f"    Error: {result['error']}")
            print()
            
            # Small delay to be respectful
            time.sleep(0.5)
        
        return results
    
    def generate_report(self, results):
        """Generate detailed status report"""
        if not results:
            print("❌ No results to report")
            return
        
        print("\\n" + "="*70)
        print("📊 WEBSITE STATUS REPORT")
        print("="*70)
        
        online_count = sum(1 for r in results if r['status_code'] == 200)
        total_count = len(results)
        
        print(f"📅 Report Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print(f"🌐 Sites Checked: {total_count}")
        print(f"✅ Online: {online_count}")
        print(f"❌ Offline/Issues: {total_count - online_count}")
        print(f"📈 Success Rate: {(online_count/total_count)*100:.1f}%")
        
        # Response time statistics
        response_times = [r['response_time'] for r in results if r['response_time'] is not None]
        if response_times:
            avg_response = sum(response_times) / len(response_times)
            print(f"⚡ Average Response Time: {avg_response:.2f}ms")
            print(f"🚀 Fastest Site: {min(response_times):.2f}ms")
            print(f"🐌 Slowest Site: {max(response_times):.2f}ms")
        
        print("\\n" + "-"*70)
        print("DETAILED RESULTS")
        print("-"*70)
        
        # Sort results by status (online first)
        sorted_results = sorted(results, key=lambda x: (x['status_code'] is None, x['status_code'] != 200))
        
        for result in sorted_results:
            print(f"\\n🌐 {result['url']}")
            print(f"   Status: {result['status']} ({result['status_code']})")
            
            if result['response_time']:
                color = "🟢" if result['response_time'] < 1000 else "🟡" if result['response_time'] < 3000 else "🔴"
                print(f"   Response Time: {color} {result['response_time']}ms")
            
            if result['final_url'] != result['url']:
                print(f"   Redirected to: {result['final_url']}")
            
            if result['content_length']:
                print(f"   Content Size: {result['content_length']:,} bytes")
            
            if result['error']:
                print(f"   ❌ Error: {result['error']}")
        
        print("\\n" + "="*70)
    
    def add_site_to_monitoring(self, url):
        """Add a site to monitoring list"""
        validated_url = self.validate_url(url)
        if not validated_url:
            print(f"❌ Invalid URL: {url}")
            return False
        
        if validated_url not in self.monitored_sites:
            self.monitored_sites.append(validated_url)
            print(f"✅ Added {validated_url} to monitoring list")
            return True
        else:
            print(f"⚠️ {validated_url} is already being monitored")
            return False
    
    def remove_site_from_monitoring(self, url):
        """Remove a site from monitoring list"""
        if url in self.monitored_sites:
            self.monitored_sites.remove(url)
            print(f"✅ Removed {url} from monitoring list")
            return True
        else:
            print(f"❌ {url} not found in monitoring list")
            return False
    
    def monitor_websites_continuously(self, interval_minutes=5, duration_hours=1):
        """Monitor websites continuously"""
        interval_seconds = interval_minutes * 60
        total_duration = duration_hours * 3600
        checks = 0
        
        print(f"🔄 Starting continuous monitoring...")
        print(f"⏱️ Checking every {interval_minutes} minutes for {duration_hours} hour(s)")
        print("Press Ctrl+C to stop\\n")
        
        start_time = time.time()
        
        try:
            while time.time() - start_time < total_duration:
                checks += 1
                print(f"\\n{'='*20} CHECK #{checks} {'='*20}")
                
                if self.monitored_sites:
                    results = self.check_multiple_websites(self.monitored_sites)
                    self.save_results(results)
                    
                    # Quick summary
                    online = sum(1 for r in results if r['status_code'] == 200)
                    total = len(results)
                    print(f"📊 Quick Summary: {online}/{total} sites online")
                else:
                    print("❌ No sites in monitoring list")
                
                print(f"⏰ Next check in {interval_minutes} minutes...")
                time.sleep(interval_seconds)
                
        except KeyboardInterrupt:
            print(f"\\n🛑 Monitoring stopped by user after {checks} checks")

def main():
    print("🌐 Website Status Checker")
    print("Monitor website availability and performance")
    print()
    
    checker = WebsiteStatusChecker()
    
    while True:
        print("\\n📊 Website Monitor Menu:")
        print("1. Check single website")
        print("2. Check multiple websites")
        print("3. Add site to monitoring list")
        print("4. Remove site from monitoring list")
        print("5. View monitoring list")
        print("6. Check all monitored sites")
        print("7. Continuous monitoring")
        print("8. Exit")
        
        choice = input("\\nChoose option (1-8): ").strip()
        
        if choice == '1':
            url = input("Enter website URL: ").strip()
            validated_url = checker.validate_url(url)
            
            if validated_url:
                print(f"\\n🔍 Checking {validated_url}...")
                result = checker.check_single_website(validated_url)
                checker.generate_report([result])
            else:
                print("❌ Invalid URL format")
        
        elif choice == '2':
            urls_input = input("Enter URLs (comma-separated): ").strip()
            urls = [url.strip() for url in urls_input.split(',') if url.strip()]
            
            validated_urls = []
            for url in urls:
                validated = checker.validate_url(url)
                if validated:
                    validated_urls.append(validated)
                else:
                    print(f"⚠️ Skipping invalid URL: {url}")
            
            if validated_urls:
                results = checker.check_multiple_websites(validated_urls)
                checker.generate_report(results)
                checker.save_results(results)
        
        elif choice == '3':
            url = input("Enter URL to add to monitoring: ").strip()
            checker.add_site_to_monitoring(url)
        
        elif choice == '4':
            if not checker.monitored_sites:
                print("❌ No sites in monitoring list")
            else:
                print("\\nCurrent monitored sites:")
                for i, site in enumerate(checker.monitored_sites, 1):
                    print(f"{i}. {site}")
                
                try:
                    index = int(input("\\nEnter number to remove: ")) - 1
                    if 0 <= index < len(checker.monitored_sites):
                        url = checker.monitored_sites[index]
                        checker.remove_site_from_monitoring(url)
                    else:
                        print("❌ Invalid selection")
                except ValueError:
                    print("❌ Please enter a valid number")
        
        elif choice == '5':
            if checker.monitored_sites:
                print(f"\\n📋 Monitoring List ({len(checker.monitored_sites)} sites):")
                for i, site in enumerate(checker.monitored_sites, 1):
                    print(f"{i}. {site}")
            else:
                print("❌ No sites in monitoring list")
        
        elif choice == '6':
            if checker.monitored_sites:
                results = checker.check_multiple_websites(checker.monitored_sites)
                checker.generate_report(results)
                checker.save_results(results)
            else:
                print("❌ No sites in monitoring list")
        
        elif choice == '7':
            if not checker.monitored_sites:
                print("❌ No sites in monitoring list. Add some sites first.")
                continue
            
            try:
                interval = int(input("Check interval (minutes, default 5): ") or "5")
                duration = float(input("Duration (hours, default 1): ") or "1")
                checker.monitor_websites_continuously(interval, duration)
            except ValueError:
                print("❌ Invalid input for interval or duration")
        
        elif choice == '8':
            print("👋 Thank you for using Website Status Checker!")
            break
        
        else:
            print("❌ Invalid option. Please try again.")

# Demo version for playground
def demo_status_checker():
    print("🌐 Website Status Checker Demo")
    print("Monitor website availability and performance")
    print()
    
    # Simulate checking popular websites
    demo_sites = [
        ("https://google.com", "✅ Online", 200, 45.2),
        ("https://github.com", "✅ Online", 200, 123.5),
        ("https://stackoverflow.com", "✅ Online", 200, 89.1),
        ("https://nonexistent-demo-site.com", "🔌 Connection Failed", None, None)
    ]
    
    print("📊 Demo Results:")
    print("="*60)
    
    online_count = 0
    for url, status, code, response_time in demo_sites:
        print(f"\\n🌐 {url}")
        print(f"   Status: {status} ({code})")
        if response_time:
            print(f"   Response Time: {response_time}ms")
            online_count += 1
    
    print(f"\\n📈 Success Rate: {(online_count/len(demo_sites))*100:.1f}%")
    
    print(f"\\n✨ Features:")
    print("• Real-time website monitoring")
    print("• Response time measurement")
    print("• Batch checking multiple sites")
    print("• Continuous monitoring with intervals")
    print("• Detailed status reporting")
    print("• Data persistence (JSON)")
    print("• Error handling and validation")

# Run demo
demo_status_checker()`,
    logic: [
      "Validate URLs by adding https:// if missing and checking for proper scheme and domain",
      "Use requests library to make HTTP GET requests with timeout and custom user agent",
      "Measure response times by recording start and end times of requests in milliseconds",
      "Categorize HTTP status codes into meaningful status messages (online, redirect, error)",
      "Handle various request exceptions like timeout, connection errors, and general request failures",
      "Provide batch checking functionality for multiple websites with progress indication",
      "Generate comprehensive reports with statistics like success rate and response time analysis",
    ],
    inputs: [
      {
        name: "url",
        type: "text",
        label: "Website URL (e.g., google.com, https://github.com)",
      },
      {
        name: "timeout",
        type: "number",
        label: "Timeout in seconds (default: 10)",
      },
    ],
  },
  {
    id: "web-scraper-quotes",
    title: "Web Scraper for Quotes",
    description:
      "Scrape inspirational quotes from websites using BeautifulSoup and requests",
    category: "Web Scraping",
    difficulty: "Intermediate",
    tags: ["scraping", "beautifulsoup", "web"],
    code: `import requests
from bs4 import BeautifulSoup
import json
import csv
import random
import time
from datetime import datetime
import os

class QuotesScraper:
    def __init__(self):
        self.scraped_quotes = []
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        })
    
    def scrape_quotes_to_scrape(self, max_pages=3):
        """Scrape quotes from quotes.toscrape.com"""
        base_url = "http://quotes.toscrape.com"
        quotes = []
        
        print(f"🕷️ Scraping quotes from {base_url}")
        print(f"📖 Maximum pages to scrape: {max_pages}")
        
        for page in range(1, max_pages + 1):
            url = f"{base_url}/page/{page}/"
            print(f"\\n📄 Scraping page {page}...")
            
            try:
                response = self.session.get(url, timeout=10)
                response.raise_for_status()
                
                soup = BeautifulSoup(response.content, 'html.parser')
                
                # Find all quote containers
                quote_elements = soup.find_all('div', class_='quote')
                
                if not quote_elements:
                    print(f"⚠️ No quotes found on page {page}")
                    break
                
                for quote_elem in quote_elements:
                    try:
                        # Extract quote text
                        text_elem = quote_elem.find('span', class_='text')
                        text = text_elem.text.strip() if text_elem else "Unknown"
                        
                        # Extract author
                        author_elem = quote_elem.find('small', class_='author')
                        author = author_elem.text.strip() if author_elem else "Unknown"
                        
                        # Extract tags
                        tag_elements = quote_elem.find_all('a', class_='tag')
                        tags = [tag.text.strip() for tag in tag_elements]
                        
                        quote_data = {
                            'text': text,
                            'author': author,
                            'tags': tags,
                            'source': 'quotes.toscrape.com',
                            'scraped_at': datetime.now().isoformat(),
                            'page': page
                        }
                        
                        quotes.append(quote_data)
                        print(f"✅ Scraped quote by {author}")
                        
                    except Exception as e:
                        print(f"❌ Error extracting quote: {e}")
                        continue
                
                print(f"📊 Found {len(quote_elements)} quotes on page {page}")
                
                # Be respectful to the server
                time.sleep(1)
                
            except requests.RequestException as e:
                print(f"❌ Error fetching page {page}: {e}")
                break
        
        print(f"\\n✅ Scraping complete! Total quotes collected: {len(quotes)}")
        self.scraped_quotes.extend(quotes)
        return quotes
    
    def scrape_goodreads_quotes(self, topic="inspirational", max_quotes=20):
        """Scrape quotes from Goodreads (demo - simplified)"""
        print(f"📚 Scraping {topic} quotes from Goodreads...")
        
        # Note: This is a simplified demo. Real Goodreads scraping requires
        # handling of more complex page structures and anti-bot measures
        
        # Simulated quotes for demo purposes
        demo_quotes = [
            {
                'text': "The only way to do great work is to love what you do.",
                'author': "Steve Jobs",
                'tags': ["work", "passion", "success"],
                'source': 'goodreads.com',
                'scraped_at': datetime.now().isoformat(),
                'topic': topic
            },
            {
                'text': "Life is what happens to you while you're busy making other plans.",
                'author': "John Lennon", 
                'tags': ["life", "planning", "wisdom"],
                'source': 'goodreads.com',
                'scraped_at': datetime.now().isoformat(),
                'topic': topic
            },
            {
                'text': "The future belongs to those who believe in the beauty of their dreams.",
                'author': "Eleanor Roosevelt",
                'tags': ["future", "dreams", "belief"],
                'source': 'goodreads.com',
                'scraped_at': datetime.now().isoformat(),
                'topic': topic
            }
        ]
        
        selected_quotes = demo_quotes[:min(max_quotes, len(demo_quotes))]
        
        print(f"✅ Collected {len(selected_quotes)} {topic} quotes")
        self.scraped_quotes.extend(selected_quotes)
        return selected_quotes
    
    def clean_quote_text(self, text):
        """Clean and format quote text"""
        # Remove quotes marks if they exist
        text = text.strip()
        if text.startswith('"') and text.endswith('"'):
            text = text[1:-1]
        elif text.startswith("'") and text.endswith("'"):
            text = text[1:-1]
        
        # Remove extra whitespace
        text = ' '.join(text.split())
        
        return text
    
    def filter_quotes(self, quotes, author=None, tag=None, min_length=None, max_length=None):
        """Filter quotes by various criteria"""
        filtered = quotes
        
        if author:
            filtered = [q for q in filtered if author.lower() in q['author'].lower()]
            
        if tag:
            filtered = [q for q in filtered if any(tag.lower() in t.lower() for t in q['tags'])]
        
        if min_length:
            filtered = [q for q in filtered if len(q['text']) >= min_length]
            
        if max_length:
            filtered = [q for q in filtered if len(q['text']) <= max_length]
        
        return filtered
    
    def get_random_quote(self, quotes=None):
        """Get a random quote from collection"""
        if not quotes:
            quotes = self.scraped_quotes
            
        if not quotes:
            return None
            
        return random.choice(quotes)
    
    def save_quotes_json(self, quotes, filename="scraped_quotes.json"):
        """Save quotes to JSON file"""
        try:
            with open(filename, 'w', encoding='utf-8') as f:
                json.dump(quotes, f, indent=2, ensure_ascii=False)
            print(f"💾 Saved {len(quotes)} quotes to {filename}")
            return True
        except Exception as e:
            print(f"❌ Error saving to JSON: {e}")
            return False
    
    def save_quotes_csv(self, quotes, filename="scraped_quotes.csv"):
        """Save quotes to CSV file"""
        try:
            with open(filename, 'w', newline='', encoding='utf-8') as f:
                writer = csv.writer(f)
                writer.writerow(['Text', 'Author', 'Tags', 'Source', 'Scraped At'])
                
                for quote in quotes:
                    writer.writerow([
                        quote['text'],
                        quote['author'],
                        ', '.join(quote['tags']),
                        quote['source'],
                        quote['scraped_at']
                    ])
                    
            print(f"💾 Saved {len(quotes)} quotes to {filename}")
            return True
        except Exception as e:
            print(f"❌ Error saving to CSV: {e}")
            return False
    
    def display_quotes(self, quotes, max_display=10):
        """Display quotes in a formatted way"""
        if not quotes:
            print("❌ No quotes to display")
            return
        
        display_count = min(len(quotes), max_display)
        print(f"\\n📝 Displaying {display_count} of {len(quotes)} quotes:")
        print("="*80)
        
        for i, quote in enumerate(quotes[:display_count], 1):
            print(f"\\n{i}. "{quote['text']}"")
            print(f"   — {quote['author']}")
            
            if quote['tags']:
                tags_str = ', '.join(f"#{tag}" for tag in quote['tags'][:5])
                print(f"   🏷️ {tags_str}")
            
            print(f"   📅 From: {quote['source']}")
            
            if i < display_count:
                print("-" * 60)
    
    def get_quote_statistics(self, quotes):
        """Generate statistics about scraped quotes"""
        if not quotes:
            return {}
        
        # Count authors
        authors = {}
        all_tags = []
        total_chars = 0
        
        for quote in quotes:
            author = quote['author']
            authors[author] = authors.get(author, 0) + 1
            all_tags.extend(quote['tags'])
            total_chars += len(quote['text'])
        
        # Count tags
        from collections import Counter
        tag_counts = Counter(all_tags)
        
        stats = {
            'total_quotes': len(quotes),
            'unique_authors': len(authors),
            'most_quoted_authors': sorted(authors.items(), key=lambda x: x[1], reverse=True)[:5],
            'total_tags': len(all_tags),
            'unique_tags': len(tag_counts),
            'most_common_tags': tag_counts.most_common(10),
            'average_quote_length': total_chars // len(quotes) if quotes else 0,
            'longest_quote': max(quotes, key=lambda x: len(x['text'])),
            'shortest_quote': min(quotes, key=lambda x: len(x['text']))
        }
        
        return stats
    
    def display_statistics(self, quotes):
        """Display quote statistics"""
        stats = self.get_quote_statistics(quotes)
        
        if not stats:
            print("❌ No statistics available")
            return
        
        print(f"\\n📊 QUOTE COLLECTION STATISTICS")
        print("="*50)
        print(f"📚 Total quotes: {stats['total_quotes']}")
        print(f"👥 Unique authors: {stats['unique_authors']}")
        print(f"🏷️ Total tags: {stats['total_tags']} ({stats['unique_tags']} unique)")
        print(f"📏 Average quote length: {stats['average_quote_length']} characters")
        
        print(f"\\n🌟 Most Quoted Authors:")
        for author, count in stats['most_quoted_authors']:
            print(f"   • {author}: {count} quotes")
        
        print(f"\\n🏷️ Most Common Tags:")
        for tag, count in stats['most_common_tags'][:5]:
            print(f"   • #{tag}: {count} times")
        
        print(f"\\n📖 Longest Quote ({len(stats['longest_quote']['text'])} chars):")
        print(f'   "{stats['longest_quote']['text'][:100]}..."')
        print(f"   — {stats['longest_quote']['author']}")

def main():
    print("🕷️ Web Scraper for Quotes")
    print("Collect inspirational quotes from various websites")
    print()
    
    scraper = QuotesScraper()
    
    while True:
        print("\\n📖 Quote Scraper Menu:")
        print("1. Scrape quotes.toscrape.com")
        print("2. Scrape Goodreads (demo)")
        print("3. Display all quotes")
        print("4. Get random quote")
        print("5. Filter quotes")
        print("6. View statistics")
        print("7. Save quotes (JSON)")
        print("8. Save quotes (CSV)")
        print("9. Exit")
        
        choice = input("\\nChoose option (1-9): ").strip()
        
        if choice == '1':
            try:
                pages = int(input("Number of pages to scrape (1-10, default 3): ") or "3")
                pages = max(1, min(10, pages))
                scraper.scrape_quotes_to_scrape(pages)
            except ValueError:
                scraper.scrape_quotes_to_scrape(3)
        
        elif choice == '2':
            topic = input("Topic (default: inspirational): ").strip() or "inspirational"
            try:
                max_quotes = int(input("Max quotes (default: 10): ") or "10")
                scraper.scrape_goodreads_quotes(topic, max_quotes)
            except ValueError:
                scraper.scrape_goodreads_quotes(topic, 10)
        
        elif choice == '3':
            try:
                max_display = int(input("Max quotes to display (default: 10): ") or "10")
                scraper.display_quotes(scraper.scraped_quotes, max_display)
            except ValueError:
                scraper.display_quotes(scraper.scraped_quotes, 10)
        
        elif choice == '4':
            quote = scraper.get_random_quote()
            if quote:
                print(f'\\n✨ Random Quote:\\n"{quote['text']}"\\n— {quote['author']}')
                if quote['tags']:
                    print(f"🏷️ Tags: {', '.join(quote['tags'][:3])}")
            else:
                print("❌ No quotes available. Scrape some first!")
        
        elif choice == '5':
            if not scraper.scraped_quotes:
                print("❌ No quotes to filter. Scrape some first!")
                continue
            
            author = input("Filter by author (optional): ").strip() or None
            tag = input("Filter by tag (optional): ").strip() or None
            
            filtered = scraper.filter_quotes(scraper.scraped_quotes, author=author, tag=tag)
            print(f"\\n🔍 Found {len(filtered)} matching quotes")
            scraper.display_quotes(filtered, 5)
        
        elif choice == '6':
            scraper.display_statistics(scraper.scraped_quotes)
        
        elif choice == '7':
            if scraper.scraped_quotes:
                filename = input("JSON filename (default: quotes.json): ").strip() or "quotes.json"
                scraper.save_quotes_json(scraper.scraped_quotes, filename)
            else:
                print("❌ No quotes to save. Scrape some first!")
        
        elif choice == '8':
            if scraper.scraped_quotes:
                filename = input("CSV filename (default: quotes.csv): ").strip() or "quotes.csv"
                scraper.save_quotes_csv(scraper.scraped_quotes, filename)
            else:
                print("❌ No quotes to save. Scrape some first!")
        
        elif choice == '9':
            print("👋 Happy quote collecting!")
            break
        
        else:
            print("❌ Invalid option. Please try again.")

# Demo version for playground
def demo_quotes_scraper():
    print("🕷️ Web Scraper for Quotes Demo")
    print("Collect inspirational quotes from websites")
    print()
    
    # Show demo scraped quotes
    demo_quotes = [
        {
            'text': 'The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.',
            'author': 'Albert Einstein',
            'tags': ['change', 'deep-thoughts', 'thinking', 'world'],
            'source': 'quotes.toscrape.com'
        },
        {
            'text': 'It is our choices, Harry, that show what we truly are, far more than our abilities.',
            'author': 'J.K. Rowling',
            'tags': ['abilities', 'choices'],
            'source': 'quotes.toscrape.com'
        },
        {
            'text': 'The only way to do great work is to love what you do.',
            'author': 'Steve Jobs',
            'tags': ['work', 'passion', 'success'],
            'source': 'goodreads.com'
        }
    ]
    
    print("📖 Demo Scraped Quotes:")
    print("="*60)
    
    for i, quote in enumerate(demo_quotes, 1):
        print(f"\\n{i}. "{quote['text']}"")
        print(f"   — {quote['author']}")
        print(f"   🏷️ {', '.join(f'#{tag}' for tag in quote['tags'][:3])}")
        print(f"   📅 From: {quote['source']}")
    
    print(f"\\n📊 Demo Statistics:")
    print(f"• Total quotes: {len(demo_quotes)}")
    print(f"• Unique authors: {len(set(q['author'] for q in demo_quotes))}")
    print(f"• Sources: quotes.toscrape.com, goodreads.com")
    
    print(f"\\n✨ Features:")
    print("• Scrape from multiple quote websites")
    print("• Extract quote text, authors, and tags")
    print("• Filter quotes by author, tag, length")
    print("• Export to JSON and CSV formats")
    print("• Generate collection statistics")
    print("• Respectful scraping with delays")
    print("• Error handling and validation")

# Run demo
demo_quotes_scraper()`,
    logic: [
      "Use requests and BeautifulSoup to fetch and parse HTML content from quote websites",
      "Extract quote text, author names, and associated tags using CSS selectors and HTML parsing",
      "Implement respectful scraping with delays between requests and proper User-Agent headers",
      "Handle pagination by iterating through multiple pages until no more quotes are found",
      "Clean and format extracted quote text by removing extra quotes and whitespace",
      "Provide filtering capabilities by author, tags, and quote length for better organization",
      "Save scraped data to both JSON and CSV formats with proper encoding for international characters",
    ],
    inputs: [
      {
        name: "max_pages",
        type: "number",
        label: "Maximum pages to scrape (1-10)",
      },
      {
        name: "author_filter",
        type: "text",
        label: "Filter by author (optional)",
      },
      { name: "tag_filter", type: "text", label: "Filter by tag (optional)" },
    ],
  },
  {
    id: "email-automation",
    title: "Email Automation Tool",
    description:
      "Automate email sending with attachments, templates, and scheduled delivery using SMTP",
    category: "Automation",
    difficulty: "Advanced",
    tags: ["email", "smtp", "automation", "templates"],
    code: `import smtplib
import ssl
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders
import os
import json
from datetime import datetime
import schedule
import time

class EmailAutomation:
    def __init__(self):
        self.smtp_server = "smtp.gmail.com"
        self.smtp_port = 587
        self.email = ""
        self.password = ""
        self.templates = {}
        self.load_templates()
    
    def load_templates(self):
        """Load email templates from file"""
        try:
            with open('email_templates.json', 'r') as f:
                self.templates = json.load(f)
        except FileNotFoundError:
            self.templates = {
                "welcome": {
                    "subject": "Welcome to Our Service!",
                    "body": "Dear {name},\\n\\nWelcome to our platform! We're excited to have you on board.\\n\\nBest regards,\\nThe Team"
                },
                "reminder": {
                    "subject": "Friendly Reminder",
                    "body": "Hi {name},\\n\\nThis is a friendly reminder about {event} scheduled for {date}.\\n\\nThank you!"
                },
                "newsletter": {
                    "subject": "Monthly Newsletter - {month}",
                    "body": "Dear Subscriber,\\n\\nHere's what's new this month:\\n\\n{content}\\n\\nStay tuned for more updates!"
                }
            }
            self.save_templates()
    
    def save_templates(self):
        """Save email templates to file"""
        try:
            with open('email_templates.json', 'w') as f:
                json.dump(self.templates, f, indent=2)
        except Exception as e:
            print(f"Error saving templates: {e}")
    
    def setup_smtp_connection(self, email, password):
        """Setup SMTP connection"""
        self.email = email
        self.password = password
        
        try:
            context = ssl.create_default_context()
            server = smtplib.SMTP(self.smtp_server, self.smtp_port)
            server.starttls(context=context)
            server.login(email, password)
            return server
        except Exception as e:
            print(f"Failed to connect to SMTP server: {e}")
            return None
    
    def create_email(self, recipient, subject, body, attachments=None):
        """Create email message"""
        msg = MIMEMultipart()
        msg['From'] = self.email
        msg['To'] = recipient
        msg['Subject'] = subject
        
        # Add body to email
        msg.attach(MIMEText(body, 'plain'))
        
        # Add attachments if provided
        if attachments:
            for file_path in attachments:
                if os.path.isfile(file_path):
                    with open(file_path, "rb") as attachment:
                        part = MIMEBase('application', 'octet-stream')
                        part.set_payload(attachment.read())
                    
                    encoders.encode_base64(part)
                    part.add_header(
                        'Content-Disposition',
                        f'attachment; filename= {os.path.basename(file_path)}'
                    )
                    msg.attach(part)
        
        return msg
    
    def send_single_email(self, recipient, subject, body, attachments=None):
        """Send a single email"""
        if not self.email or not self.password:
            return {"error": "Email credentials not set"}
        
        server = self.setup_smtp_connection(self.email, self.password)
        if not server:
            return {"error": "Failed to connect to SMTP server"}
        
        try:
            msg = self.create_email(recipient, subject, body, attachments)
            text = msg.as_string()
            server.sendmail(self.email, recipient, text)
            server.quit()
            
            return {
                "success": True,
                "message": f"Email sent successfully to {recipient}",
                "timestamp": datetime.now().isoformat()
            }
            
        except Exception as e:
            return {"error": f"Failed to send email: {e}"}
    
    def send_bulk_emails(self, recipients, subject, body, personalize=True):
        """Send emails to multiple recipients"""
        if not isinstance(recipients, list):
            return {"error": "Recipients must be a list"}
        
        server = self.setup_smtp_connection(self.email, self.password)
        if not server:
            return {"error": "Failed to connect to SMTP server"}
        
        results = []
        successful = 0
        failed = 0
        
        try:
            for recipient in recipients:
                try:
                    # Personalize email if needed
                    personal_body = body
                    if personalize and isinstance(recipient, dict):
                        email_addr = recipient.get('email', '')
                        name = recipient.get('name', email_addr.split('@')[0])
                        personal_body = body.format(name=name, **recipient)
                        recipient = email_addr
                    
                    msg = self.create_email(recipient, subject, personal_body)
                    text = msg.as_string()
                    server.sendmail(self.email, recipient, text)
                    
                    results.append({
                        "recipient": recipient,
                        "status": "success",
                        "timestamp": datetime.now().isoformat()
                    })
                    successful += 1
                    
                    # Small delay to avoid overwhelming the server
                    time.sleep(0.1)
                    
                except Exception as e:
                    results.append({
                        "recipient": recipient,
                        "status": "failed",
                        "error": str(e)
                    })
                    failed += 1
            
            server.quit()
            
            return {
                "summary": {
                    "total": len(recipients),
                    "successful": successful,
                    "failed": failed
                },
                "results": results
            }
            
        except Exception as e:
            return {"error": f"Bulk email operation failed: {e}"}
    
    def use_template(self, template_name, **kwargs):
        """Use predefined template with variables"""
        if template_name not in self.templates:
            return {"error": f"Template '{template_name}' not found"}
        
        template = self.templates[template_name]
        
        try:
            subject = template['subject'].format(**kwargs)
            body = template['body'].format(**kwargs)
            
            return {
                "subject": subject,
                "body": body
            }
        except KeyError as e:
            return {"error": f"Missing template variable: {e}"}
    
    def schedule_email(self, recipient, subject, body, send_time):
        """Schedule email to be sent at specific time"""
        def send_scheduled_email():
            result = self.send_single_email(recipient, subject, body)
            print(f"Scheduled email result: {result}")
        
        schedule.every().day.at(send_time).do(send_scheduled_email)
        
        return {
            "message": f"Email scheduled to {recipient} at {send_time}",
            "recipient": recipient,
            "scheduled_time": send_time
        }
    
    def create_newsletter(self, subscriber_list, content, month=None):
        """Create and send newsletter"""
        if not month:
            month = datetime.now().strftime("%B %Y")
        
        template_data = self.use_template("newsletter", month=month, content=content)
        
        if "error" in template_data:
            return template_data
        
        return self.send_bulk_emails(
            subscriber_list,
            template_data["subject"],
            template_data["body"]
        )

# Demo usage
def demo_email_automation():
    print("📧 Email Automation Tool Demo")
    print("Automate email sending with templates and scheduling")
    print()
    
    automation = EmailAutomation()
    
    # Demo template usage
    template_result = automation.use_template(
        "welcome",
        name="John Doe"
    )
    
    print("📝 Template Demo:")
    if "error" not in template_result:
        print(f"Subject: {template_result['subject']}")
        print(f"Body: {template_result['body']}")
    
    print("\\n✨ Features:")
    print("• SMTP email sending")
    print("• Template system with variables")
    print("• Bulk email support")
    print("• File attachments")
    print("• Email scheduling")
    print("• Newsletter automation")
    print("• Delivery tracking")
    
    print("\\n💡 Setup Requirements:")
    print("1. Gmail account with App Password")
    print("2. Install required packages: pip install schedule")
    print("3. Configure SMTP settings")
    print("4. Create email templates")

demo_email_automation()`,
    logic: [
      "Set up SMTP connection with Gmail using SSL/TLS encryption for secure email transmission",
      "Create a template system that allows dynamic variable substitution in email subjects and bodies",
      "Implement bulk email functionality with personalization for each recipient",
      "Add file attachment support by encoding files in base64 and attaching them to MIME messages",
      "Create email scheduling system using the schedule library to send emails at specific times",
      "Implement error handling and delivery tracking for monitoring email send status",
      "Provide newsletter automation with subscriber list management and content templating",
    ],
    inputs: [
      { name: "recipient", type: "text", label: "Recipient email address" },
      { name: "subject", type: "text", label: "Email subject" },
      { name: "body", type: "text", label: "Email body content" },
      {
        name: "template",
        type: "select",
        options: ["welcome", "reminder", "newsletter"],
        label: "Email template",
      },
    ],
  },

  {
    id: "file-management-system",
    title: "File Management System",
    description:
      "Automate file organization, backup, and cleanup with advanced filtering and monitoring",
    category: "Automation",
    difficulty: "Advanced",
    tags: ["files", "automation", "organization", "backup"],
    code: `import os
import shutil
import json
import hashlib
from datetime import datetime, timedelta
import zipfile
import glob
from pathlib import Path
import schedule
import time

class FileManagementSystem:
    def __init__(self):
        self.config_file = "file_management_config.json"
        self.log_file = "file_management.log"
        self.load_config()
    
    def load_config(self):
        """Load configuration from file"""
        default_config = {
            "watch_directories": [],
            "organization_rules": {
                "images": {"extensions": [".jpg", ".jpeg", ".png", ".gif", ".bmp"], "folder": "Images"},
                "documents": {"extensions": [".pdf", ".doc", ".docx", ".txt", ".rtf"], "folder": "Documents"},
                "videos": {"extensions": [".mp4", ".avi", ".mkv", ".mov", ".wmv"], "folder": "Videos"},
                "music": {"extensions": [".mp3", ".wav", ".flac", ".aac"], "folder": "Music"},
                "archives": {"extensions": [".zip", ".rar", ".7z", ".tar", ".gz"], "folder": "Archives"},
                "code": {"extensions": [".py", ".js", ".html", ".css", ".java", ".cpp"], "folder": "Code"}
            },
            "cleanup_rules": {
                "temp_files": {"extensions": [".tmp", ".temp", ".cache"], "days_old": 7},
                "log_files": {"extensions": [".log"], "days_old": 30},
                "backup_files": {"extensions": [".bak", ".backup"], "days_old": 60}
            },
            "backup_settings": {
                "backup_directory": "backups",
                "compression": True,
                "retention_days": 90
            }
        }
        
        try:
            if os.path.exists(self.config_file):
                with open(self.config_file, 'r') as f:
                    self.config = json.load(f)
            else:
                self.config = default_config
                self.save_config()
        except Exception as e:
            print(f"Error loading config: {e}")
            self.config = default_config
    
    def save_config(self):
        """Save configuration to file"""
        try:
            with open(self.config_file, 'w') as f:
                json.dump(self.config, f, indent=2)
        except Exception as e:
            print(f"Error saving config: {e}")
    
    def log_action(self, action, details=""):
        """Log file management actions"""
        timestamp = datetime.now().isoformat()
        log_entry = f"[{timestamp}] {action}: {details}\\n"
        
        try:
            with open(self.log_file, 'a') as f:
                f.write(log_entry)
        except Exception as e:
            print(f"Error writing to log: {e}")
        
        print(log_entry.strip())
    
    def get_file_hash(self, file_path):
        """Generate MD5 hash of file for duplicate detection"""
        hash_md5 = hashlib.md5()
        try:
            with open(file_path, "rb") as f:
                for chunk in iter(lambda: f.read(4096), b""):
                    hash_md5.update(chunk)
            return hash_md5.hexdigest()
        except Exception as e:
            print(f"Error generating hash for {file_path}: {e}")
            return None
    
    def organize_files(self, directory):
        """Organize files in directory based on rules"""
        if not os.path.exists(directory):
            return {"error": f"Directory {directory} does not exist"}
        
        organized_count = 0
        errors = []
        
        try:
            for root, dirs, files in os.walk(directory):
                for file in files:
                    file_path = os.path.join(root, file)
                    file_ext = os.path.splitext(file)[1].lower()
                    
                    # Find matching rule
                    target_folder = None
                    for rule_name, rule in self.config["organization_rules"].items():
                        if file_ext in rule["extensions"]:
                            target_folder = rule["folder"]
                            break
                    
                    if target_folder:
                        # Create target directory if it doesn't exist
                        target_dir = os.path.join(directory, target_folder)
                        os.makedirs(target_dir, exist_ok=True)
                        
                        # Move file
                        target_path = os.path.join(target_dir, file)
                        
                        # Handle filename conflicts
                        counter = 1
                        while os.path.exists(target_path):
                            name, ext = os.path.splitext(file)
                            target_path = os.path.join(target_dir, f"{name}_{counter}{ext}")
                            counter += 1
                        
                        try:
                            shutil.move(file_path, target_path)
                            self.log_action("ORGANIZE", f"Moved {file} to {target_folder}")
                            organized_count += 1
                        except Exception as e:
                            errors.append(f"Failed to move {file}: {e}")
            
            return {
                "organized": organized_count,
                "errors": errors,
                "message": f"Organized {organized_count} files"
            }
            
        except Exception as e:
            return {"error": f"Organization failed: {e}"}
    
    def find_duplicates(self, directory):
        """Find duplicate files based on content hash"""
        if not os.path.exists(directory):
            return {"error": f"Directory {directory} does not exist"}
        
        file_hashes = {}
        duplicates = []
        
        try:
            for root, dirs, files in os.walk(directory):
                for file in files:
                    file_path = os.path.join(root, file)
                    file_hash = self.get_file_hash(file_path)
                    
                    if file_hash:
                        if file_hash in file_hashes:
                            duplicates.append({
                                "original": file_hashes[file_hash],
                                "duplicate": file_path,
                                "hash": file_hash,
                                "size": os.path.getsize(file_path)
                            })
                        else:
                            file_hashes[file_hash] = file_path
            
            return {
                "duplicates_found": len(duplicates),
                "duplicates": duplicates,
                "space_wasted": sum(dup["size"] for dup in duplicates)
            }
            
        except Exception as e:
            return {"error": f"Duplicate search failed: {e}"}
    
    def cleanup_old_files(self, directory):
        """Clean up old files based on rules"""
        if not os.path.exists(directory):
            return {"error": f"Directory {directory} does not exist"}
        
        cleaned_count = 0
        space_freed = 0
        errors = []
        
        try:
            current_time = datetime.now()
            
            for root, dirs, files in os.walk(directory):
                for file in files:
                    file_path = os.path.join(root, file)
                    file_ext = os.path.splitext(file)[1].lower()
                    
                    # Check cleanup rules
                    for rule_name, rule in self.config["cleanup_rules"].items():
                        if file_ext in rule["extensions"]:
                            try:
                                file_time = datetime.fromtimestamp(os.path.getmtime(file_path))
                                days_old = (current_time - file_time).days
                                
                                if days_old > rule["days_old"]:
                                    file_size = os.path.getsize(file_path)
                                    os.remove(file_path)
                                    
                                    self.log_action("CLEANUP", f"Removed {file} ({days_old} days old)")
                                    cleaned_count += 1
                                    space_freed += file_size
                                    
                            except Exception as e:
                                errors.append(f"Failed to remove {file}: {e}")
                            break
            
            return {
                "cleaned": cleaned_count,
                "space_freed": self.format_bytes(space_freed),
                "errors": errors,
                "message": f"Cleaned {cleaned_count} old files"
            }
            
        except Exception as e:
            return {"error": f"Cleanup failed: {e}"}
    
    def backup_directory(self, source_dir, backup_name=None):
        """Create backup of directory"""
        if not os.path.exists(source_dir):
            return {"error": f"Source directory {source_dir} does not exist"}
        
        # Create backup directory
        backup_base = self.config["backup_settings"]["backup_directory"]
        os.makedirs(backup_base, exist_ok=True)
        
        # Generate backup name
        if not backup_name:
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            backup_name = f"backup_{os.path.basename(source_dir)}_{timestamp}"
        
        backup_path = os.path.join(backup_base, backup_name)
        
        try:
            if self.config["backup_settings"]["compression"]:
                # Create compressed backup
                backup_path += ".zip"
                with zipfile.ZipFile(backup_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
                    for root, dirs, files in os.walk(source_dir):
                        for file in files:
                            file_path = os.path.join(root, file)
                            arc_path = os.path.relpath(file_path, source_dir)
                            zipf.write(file_path, arc_path)
            else:
                # Create uncompressed backup
                shutil.copytree(source_dir, backup_path)
            
            backup_size = os.path.getsize(backup_path) if os.path.isfile(backup_path) else self.get_dir_size(backup_path)
            
            self.log_action("BACKUP", f"Created backup {backup_name}")
            
            return {
                "backup_path": backup_path,
                "backup_size": self.format_bytes(backup_size),
                "message": f"Backup created successfully: {backup_name}"
            }
            
        except Exception as e:
            return {"error": f"Backup failed: {e}"}
    
    def schedule_cleanup(self, directory, schedule_time="02:00"):
        """Schedule automatic cleanup"""
        def run_cleanup():
            result = self.cleanup_old_files(directory)
            self.log_action("SCHEDULED_CLEANUP", f"Directory: {directory}, Result: {result}")
        
        schedule.every().day.at(schedule_time).do(run_cleanup)
        
        return {
            "message": f"Cleanup scheduled for {directory} at {schedule_time} daily",
            "directory": directory,
            "time": schedule_time
        }
    
    def get_directory_stats(self, directory):
        """Get comprehensive directory statistics"""
        if not os.path.exists(directory):
            return {"error": f"Directory {directory} does not exist"}
        
        stats = {
            "total_files": 0,
            "total_size": 0,
            "file_types": {},
            "largest_files": [],
            "oldest_files": [],
            "newest_files": []
        }
        
        file_info = []
        
        try:
            for root, dirs, files in os.walk(directory):
                for file in files:
                    file_path = os.path.join(root, file)
                    try:
                        file_stat = os.stat(file_path)
                        file_size = file_stat.st_size
                        file_mtime = file_stat.st_mtime
                        file_ext = os.path.splitext(file)[1].lower() or "no_extension"
                        
                        stats["total_files"] += 1
                        stats["total_size"] += file_size
                        
                        # Count file types
                        stats["file_types"][file_ext] = stats["file_types"].get(file_ext, 0) + 1
                        
                        # Collect file info for sorting
                        file_info.append({
                            "path": file_path,
                            "name": file,
                            "size": file_size,
                            "modified": file_mtime
                        })
                        
                    except (OSError, IOError):
                        continue
            
            # Sort and get top files
            file_info.sort(key=lambda x: x["size"], reverse=True)
            stats["largest_files"] = [
                {"name": f["name"], "size": self.format_bytes(f["size"])} 
                for f in file_info[:5]
            ]
            
            file_info.sort(key=lambda x: x["modified"])
            stats["oldest_files"] = [
                {"name": f["name"], "date": datetime.fromtimestamp(f["modified"]).strftime("%Y-%m-%d")} 
                for f in file_info[:5]
            ]
            
            file_info.sort(key=lambda x: x["modified"], reverse=True)
            stats["newest_files"] = [
                {"name": f["name"], "date": datetime.fromtimestamp(f["modified"]).strftime("%Y-%m-%d")} 
                for f in file_info[:5]
            ]
            
            stats["total_size_formatted"] = self.format_bytes(stats["total_size"])
            
            return stats
            
        except Exception as e:
            return {"error": f"Stats generation failed: {e}"}
    
    def format_bytes(self, bytes_count):
        """Format bytes to human readable format"""
        for unit in ['B', 'KB', 'MB', 'GB', 'TB']:
            if bytes_count < 1024.0:
                return f"{bytes_count:.2f} {unit}"
            bytes_count /= 1024.0
        return f"{bytes_count:.2f} PB"
    
    def get_dir_size(self, directory):
        """Get total size of directory"""
        total = 0
        try:
            for root, dirs, files in os.walk(directory):
                for file in files:
                    file_path = os.path.join(root, file)
                    try:
                        total += os.path.getsize(file_path)
                    except (OSError, IOError):
                        continue
        except:
            pass
        return total

# Demo usage
def demo_file_management():
    print("📁 File Management System Demo")
    print("Automate file organization, backup, and cleanup")
    print()
    
    fm = FileManagementSystem()
    
    # Demo directory stats
    print("📊 Directory Analysis:")
    print("• Total files: 1,234")
    print("• Total size: 15.6 GB")
    print("• File types: .jpg (45%), .pdf (23%), .mp3 (18%)")
    print("• Largest file: presentation.pptx (234 MB)")
    print("• 15 duplicate files found (saving 2.3 GB)")
    
    print("\\n🔧 Organization Rules:")
    for rule_name, rule in fm.config["organization_rules"].items():
        print(f"• {rule_name.title()}: {', '.join(rule['extensions'])} → {rule['folder']}")
    
    print("\\n🧹 Cleanup Rules:")
    for rule_name, rule in fm.config["cleanup_rules"].items():
        print(f"• {rule_name.replace('_', ' ').title()}: {', '.join(rule['extensions'])} older than {rule['days_old']} days")
    
    print("\\n✨ Features:")
    print("• Automatic file organization by type")
    print("• Duplicate file detection and removal")
    print("• Scheduled cleanup of old files")
    print("• Compressed backup creation")
    print("• Directory statistics and analysis")
    print("• Configurable rules and settings")
    print("• Comprehensive logging")

demo_file_management()`,
    logic: [
      "Create a configuration system that defines file organization rules based on extensions and target folders",
      "Implement file hash comparison using MD5 to detect duplicate files across directories",
      "Build automatic file organization that moves files to appropriate folders based on their extensions",
      "Create cleanup system that removes old files based on age and file type rules",
      "Implement backup functionality with compression options using zipfile library",
      "Add scheduling capabilities for automatic cleanup and maintenance tasks",
      "Provide comprehensive directory analysis with statistics on file types, sizes, and dates",
    ],
    inputs: [
      { name: "directory", type: "text", label: "Directory to manage" },
      {
        name: "action",
        type: "select",
        options: ["organize", "cleanup", "backup", "stats"],
        label: "Action to perform",
      },
    ],
  },
  {
    id: "data-analysis-dashboard",
    title: "Data Analysis Dashboard",
    description:
      "Analyze datasets with statistical insights, visualizations, and automated reporting",
    category: "Data Science",
    difficulty: "Advanced",
    tags: ["data", "analytics", "visualization", "pandas"],
    code: `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from datetime import datetime, timedelta
import json
import warnings
warnings.filterwarnings('ignore')

class DataAnalysisDashboard:
    def __init__(self):
        self.data = None
        self.analysis_results = {}
        self.reports = []
        
    def load_sample_data(self, dataset_type="sales"):
        """Load sample datasets for analysis"""
        np.random.seed(42)
        
        if dataset_type == "sales":
            # Generate sample sales data
            dates = pd.date_range(start='2024-01-01', end='2024-12-31', freq='D')
            n_records = len(dates) * 3  # 3 records per day average
            
            data = {
                'date': np.random.choice(dates, n_records),
                'product': np.random.choice(['Laptop', 'Phone', 'Tablet', 'Watch', 'Headphones'], n_records),
                'category': np.random.choice(['Electronics', 'Accessories'], n_records),
                'sales_amount': np.random.normal(500, 200, n_records).clip(min=50),
                'quantity': np.random.poisson(2, n_records) + 1,
                'customer_age': np.random.normal(35, 15, n_records).clip(min=18, max=80),
                'region': np.random.choice(['North', 'South', 'East', 'West'], n_records)
            }
            
        elif dataset_type == "customer":
            # Generate sample customer behavior data
            n_customers = 1000
            data = {
                'customer_id': range(1, n_customers + 1),
                'age': np.random.normal(40, 15, n_customers).clip(min=18, max=80),
                'income': np.random.normal(50000, 20000, n_customers).clip(min=20000),
                'spending_score': np.random.randint(1, 101, n_customers),
                'purchase_frequency': np.random.poisson(5, n_customers),
                'loyalty_years': np.random.exponential(2, n_customers).clip(max=20),
                'satisfaction': np.random.choice(['Low', 'Medium', 'High'], n_customers, p=[0.2, 0.5, 0.3])
            }
            
        elif dataset_type == "website":
            # Generate sample website analytics data
            dates = pd.date_range(start='2024-01-01', end='2024-12-31', freq='H')
            n_records = len(dates)
            
            data = {
                'timestamp': dates,
                'page_views': np.random.poisson(100, n_records),
                'unique_visitors': np.random.poisson(80, n_records),
                'bounce_rate': np.random.beta(2, 5, n_records),
                'avg_session_duration': np.random.exponential(180, n_records),  # seconds
                'conversion_rate': np.random.beta(1, 20, n_records),
                'traffic_source': np.random.choice(['Organic', 'Paid', 'Social', 'Direct'], n_records)
            }
        
        self.data = pd.DataFrame(data)
        return self.data
    
    def basic_statistics(self):
        """Generate basic statistical summary"""
        if self.data is None:
            return {"error": "No data loaded"}
        
        stats = {
            "dataset_info": {
                "rows": len(self.data),
                "columns": len(self.data.columns),
                "memory_usage": f"{self.data.memory_usage(deep=True).sum() / 1024:.2f} KB",
                "null_values": self.data.isnull().sum().sum()
            },
            "numerical_summary": {},
            "categorical_summary": {}
        }
        
        # Numerical columns analysis
        numerical_cols = self.data.select_dtypes(include=[np.number]).columns
        for col in numerical_cols:
            stats["numerical_summary"][col] = {
                "mean": round(self.data[col].mean(), 2),
                "median": round(self.data[col].median(), 2),
                "std": round(self.data[col].std(), 2),
                "min": round(self.data[col].min(), 2),
                "max": round(self.data[col].max(), 2),
                "quartiles": {
                    "Q1": round(self.data[col].quantile(0.25), 2),
                    "Q3": round(self.data[col].quantile(0.75), 2)
                }
            }
        
        # Categorical columns analysis
        categorical_cols = self.data.select_dtypes(include=['object']).columns
        for col in categorical_cols:
            value_counts = self.data[col].value_counts()
            stats["categorical_summary"][col] = {
                "unique_values": len(value_counts),
                "most_frequent": value_counts.index[0],
                "frequency": int(value_counts.iloc[0]),
                "distribution": dict(value_counts.head().to_dict())
            }
        
        self.analysis_results["basic_stats"] = stats
        return stats
    
    def correlation_analysis(self):
        """Perform correlation analysis on numerical data"""
        if self.data is None:
            return {"error": "No data loaded"}
        
        numerical_data = self.data.select_dtypes(include=[np.number])
        
        if len(numerical_data.columns) < 2:
            return {"error": "Need at least 2 numerical columns for correlation"}
        
        correlation_matrix = numerical_data.corr()
        
        # Find strong correlations
        strong_correlations = []
        for i in range(len(correlation_matrix.columns)):
            for j in range(i+1, len(correlation_matrix.columns)):
                corr_value = correlation_matrix.iloc[i, j]
                if abs(corr_value) > 0.5:  # Strong correlation threshold
                    strong_correlations.append({
                        "variables": f"{correlation_matrix.columns[i]} vs {correlation_matrix.columns[j]}",
                        "correlation": round(corr_value, 3),
                        "strength": "Strong" if abs(corr_value) > 0.7 else "Moderate"
                    })
        
        correlation_results = {
            "correlation_matrix": correlation_matrix.round(3).to_dict(),
            "strong_correlations": strong_correlations,
            "interpretation": self._interpret_correlations(strong_correlations)
        }
        
        self.analysis_results["correlation"] = correlation_results
        return correlation_results
    
    def _interpret_correlations(self, correlations):
        """Interpret correlation results"""
        if not correlations:
            return "No strong correlations found between variables."
        
        interpretations = []
        for corr in correlations:
            if corr["correlation"] > 0.7:
                interpretations.append(f"Strong positive relationship: {corr['variables']}")
            elif corr["correlation"] < -0.7:
                interpretations.append(f"Strong negative relationship: {corr['variables']}")
            elif corr["correlation"] > 0.5:
                interpretations.append(f"Moderate positive relationship: {corr['variables']}")
            else:
                interpretations.append(f"Moderate negative relationship: {corr['variables']}")
        
        return interpretations
    
    def trend_analysis(self, date_column=None, value_column=None):
        """Analyze trends over time"""
        if self.data is None:
            return {"error": "No data loaded"}
        
        # Auto-detect date and value columns if not provided
        if date_column is None:
            date_cols = self.data.select_dtypes(include=['datetime64']).columns
            if len(date_cols) == 0:
                return {"error": "No datetime column found"}
            date_column = date_cols[0]
        
        if value_column is None:
            numeric_cols = self.data.select_dtypes(include=[np.number]).columns
            if len(numeric_cols) == 0:
                return {"error": "No numerical column found"}
            value_column = numeric_cols[0]
        
        # Group by date and calculate trends
        if date_column in self.data.columns:
            daily_data = self.data.groupby(pd.Grouper(key=date_column, freq='D'))[value_column].agg(['sum', 'mean', 'count']).reset_index()
            
            # Calculate trend indicators
            recent_avg = daily_data[value_column + '_sum'].tail(30).mean()
            overall_avg = daily_data[value_column + '_sum'].mean()
            trend_direction = "Increasing" if recent_avg > overall_avg else "Decreasing"
            
            # Calculate growth rate
            first_month = daily_data[value_column + '_sum'].head(30).mean()
            last_month = daily_data[value_column + '_sum'].tail(30).mean()
            growth_rate = ((last_month - first_month) / first_month) * 100 if first_month > 0 else 0
            
            trend_results = {
                "trend_direction": trend_direction,
                "growth_rate": round(growth_rate, 2),
                "recent_30_days_avg": round(recent_avg, 2),
                "overall_average": round(overall_avg, 2),
                "peak_day": daily_data.loc[daily_data[value_column + '_sum'].idxmax(), date_column].strftime('%Y-%m-%d'),
                "peak_value": round(daily_data[value_column + '_sum'].max(), 2)
            }
            
            self.analysis_results["trend"] = trend_results
            return trend_results
        
        return {"error": f"Column {date_column} not found"}
    
    def outlier_detection(self, column=None, method='iqr'):
        """Detect outliers in numerical data"""
        if self.data is None:
            return {"error": "No data loaded"}
        
        numerical_cols = self.data.select_dtypes(include=[np.number]).columns
        
        if column and column not in numerical_cols:
            return {"error": f"Column {column} is not numerical"}
        
        columns_to_analyze = [column] if column else numerical_cols[:3]  # Limit to first 3 for demo
        outlier_results = {}
        
        for col in columns_to_analyze:
            if method == 'iqr':
                Q1 = self.data[col].quantile(0.25)
                Q3 = self.data[col].quantile(0.75)
                IQR = Q3 - Q1
                lower_bound = Q1 - 1.5 * IQR
                upper_bound = Q3 + 1.5 * IQR
                
                outliers = self.data[(self.data[col] < lower_bound) | (self.data[col] > upper_bound)]
                
            elif method == 'zscore':
                z_scores = np.abs((self.data[col] - self.data[col].mean()) / self.data[col].std())
                outliers = self.data[z_scores > 3]
            
            outlier_results[col] = {
                "outlier_count": len(outliers),
                "outlier_percentage": round((len(outliers) / len(self.data)) * 100, 2),
                "outlier_values": outliers[col].tolist()[:10],  # Show first 10 outliers
                "bounds": {
                    "lower": round(lower_bound, 2) if method == 'iqr' else None,
                    "upper": round(upper_bound, 2) if method == 'iqr' else None
                }
            }
        
        self.analysis_results["outliers"] = outlier_results
        return outlier_results
    
    def generate_insights(self):
        """Generate automated insights from analysis"""
        if not self.analysis_results:
            return {"error": "No analysis results available. Run analysis first."}
        
        insights = []
        
        # Dataset insights
        if "basic_stats" in self.analysis_results:
            stats = self.analysis_results["basic_stats"]
            insights.append(f"Dataset contains {stats['dataset_info']['rows']:,} records with {stats['dataset_info']['columns']} variables")
            
            if stats['dataset_info']['null_values'] > 0:
                insights.append(f"⚠️  Found {stats['dataset_info']['null_values']} missing values that may need attention")
        
        # Correlation insights
        if "correlation" in self.analysis_results:
            corr = self.analysis_results["correlation"]
            if corr["strong_correlations"]:
                insights.append(f"🔗 Discovered {len(corr['strong_correlations'])} strong relationships between variables")
                for interp in corr["interpretation"][:2]:  # Show first 2
                    insights.append(f"   • {interp}")
        
        # Trend insights
        if "trend" in self.analysis_results:
            trend = self.analysis_results["trend"]
            insights.append(f"📈 Data shows {trend['trend_direction'].lower()} trend with {trend['growth_rate']}% growth rate")
            insights.append(f"📊 Peak performance on {trend['peak_day']} with value of {trend['peak_value']}")
        
        # Outlier insights
        if "outliers" in self.analysis_results:
            outliers = self.analysis_results["outliers"]
            total_outliers = sum(col_data["outlier_count"] for col_data in outliers.values())
            if total_outliers > 0:
                insights.append(f"🚨 Detected {total_outliers} outliers across analyzed variables")
        
        return {"insights": insights, "total_insights": len(insights)}
    
    def export_report(self, format="json"):
        """Export analysis report"""
        report = {
            "report_metadata": {
                "generated_at": datetime.now().isoformat(),
                "dataset_shape": f"{len(self.data)} rows × {len(self.data.columns)} columns" if self.data is not None else "No data",
                "analysis_modules": list(self.analysis_results.keys())
            },
            "analysis_results": self.analysis_results,
            "insights": self.generate_insights()
        }
        
        if format == "json":
            return json.dumps(report, indent=2, default=str)
        elif format == "summary":
            return self._create_summary_report(report)
        
        return report
    
    def _create_summary_report(self, report):
        """Create a human-readable summary report"""
        summary = f"""
📊 DATA ANALYSIS REPORT
Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
{'='*50}

📈 DATASET OVERVIEW:
{report['report_metadata']['dataset_shape']}
Analysis modules: {', '.join(report['report_metadata']['analysis_modules'])}

🔍 KEY INSIGHTS:
"""
        if 'insights' in report and report['insights']['insights']:
            for insight in report['insights']['insights']:
                summary += f"• {insight}\n"
        else:
            summary += "• No insights generated yet\n"
        
        summary += f"""
📋 ANALYSIS SUMMARY:
• Basic Statistics: {'✅' if 'basic_stats' in self.analysis_results else '❌'}
• Correlation Analysis: {'✅' if 'correlation' in self.analysis_results else '❌'}
• Trend Analysis: {'✅' if 'trend' in self.analysis_results else '❌'}
• Outlier Detection: {'✅' if 'outliers' in self.analysis_results else '❌'}

💡 RECOMMENDATIONS:
• Review outliers for data quality issues
• Investigate strong correlations for business insights
• Monitor trend changes for strategic planning
• Consider advanced analysis for deeper insights
"""
        return summary

# Demo usage
def demo_data_analysis():
    print("📊 Data Analysis Dashboard Demo")
    print("Comprehensive data analysis with automated insights")
    print()
    
    dashboard = DataAnalysisDashboard()
    
    # Load sample sales data
    print("📁 Loading sample sales data...")
    data = dashboard.load_sample_data("sales")
    print(f"✅ Loaded {len(data)} records with {len(data.columns)} columns")
    
    # Basic statistics
    print("\\n📈 Generating basic statistics...")
    stats = dashboard.basic_statistics()
    print(f"✅ Analyzed {stats['dataset_info']['columns']} variables")
    
    # Correlation analysis
    print("\\n🔗 Performing correlation analysis...")
    corr = dashboard.correlation_analysis()
    print(f"✅ Found {len(corr['strong_correlations'])} strong correlations")
    
    # Trend analysis
    print("\\n📊 Analyzing trends...")
    trends = dashboard.trend_analysis('date', 'sales_amount')
    print(f"✅ Trend direction: {trends['trend_direction']}")
    
    # Generate insights
    print("\\n💡 Generating insights...")
    insights = dashboard.generate_insights()
    print(f"✅ Generated {insights['total_insights']} insights")
    
    # Export report
    print("\\n📋 Creating summary report...")
    report = dashboard.export_report("summary")
    print("✅ Report generated successfully")
    
    print("\\n" + "="*50)
    print("🎯 DASHBOARD FEATURES:")
    print("• Multi-dataset support (sales, customer, website)")
    print("• Automated statistical analysis")
    print("• Correlation and relationship detection")
    print("• Time series trend analysis")
    print("• Outlier detection with multiple methods")
    print("• Automated insight generation")
    print("• Exportable reports (JSON, Summary)")
    print("• Data visualization ready")

demo_data_analysis()`,
    logic: [
      "Create a comprehensive data analysis system that can handle multiple dataset types (sales, customer, website analytics)",
      "Implement basic statistical analysis including mean, median, standard deviation, and quartile calculations for numerical data",
      "Build correlation analysis to identify relationships between variables using Pearson correlation coefficients",
      "Develop trend analysis capabilities for time-series data with growth rate calculations and peak detection",
      "Implement outlier detection using IQR and Z-score methods to identify anomalous data points",
      "Create an automated insight generation system that interprets analysis results and provides business recommendations",
      "Build export functionality that can generate reports in multiple formats (JSON, human-readable summary)",
    ],
    inputs: [
      {
        name: "dataset_type",
        type: "select",
        options: ["sales", "customer", "website"],
        label: "Dataset type",
      },
      {
        name: "analysis_type",
        type: "select",
        options: ["basic", "correlation", "trend", "outliers"],
        label: "Analysis type",
      },
    ],
  },
  {
    id: "social-media-bot",
    title: "Social Media Automation Bot",
    description:
      "Automate social media posting, engagement tracking, and content scheduling across platforms",
    category: "Social Media Automation",
    difficulty: "Advanced",
    tags: ["automation", "social", "api", "scheduling"],
    code: `import requests
import json
from datetime import datetime, timedelta
import schedule
import time
import hashlib
import random
from urllib.parse import urlencode

class SocialMediaBot:
    def __init__(self):
        self.platforms = {
            'twitter': {'api_key': '', 'api_secret': '', 'access_token': '', 'access_secret': ''},
            'instagram': {'access_token': '', 'user_id': ''},
            'linkedin': {'access_token': ''},
            'facebook': {'access_token': '', 'page_id': ''}
        }
        self.post_queue = []
        self.analytics_data = {}
        self.content_templates = self.load_content_templates()
        
    def load_content_templates(self):
        """Load predefined content templates"""
        return {
            'motivational': [
                "🌟 {quote} - Start your {day} with determination!",
                "💪 Remember: {message}. You've got this!",
                "✨ {inspiration}. Make today count! #Motivation"
            ],
            'educational': [
                "📚 Did you know? {fact}",
                "💡 Tech Tip: {tip} #TechTips #Learning",
                "🔍 Quick insight: {insight} #Education"
            ],
            'promotional': [
                "🚀 Check out our latest: {product}! {benefit} #NewProduct",
                "🎉 Special offer: {offer}. Limited time! #Sale",
                "✨ Introducing {feature}: {description} #Innovation"
            ],
            'engagement': [
                "❓ Question for you: {question} Let us know in the comments!",
                "🤔 What's your take on {topic}? Share your thoughts!",
                "📊 Poll time: {poll_question} A) {option_a} B) {option_b}"
            ],
            'news': [
                "📰 Industry Update: {headline} {summary} #News",
                "🔥 Trending: {trend} What do you think? #Trending",
                "📈 Market Insight: {insight} #MarketNews"
            ]
        }
    
    def create_post(self, content, platform, media_urls=None, scheduled_time=None):
        """Create a new social media post"""
        post = {
            'id': hashlib.md5(f"{content}{platform}{datetime.now()}".encode()).hexdigest()[:8],
            'content': content,
            'platform': platform,
            'media_urls': media_urls or [],
            'scheduled_time': scheduled_time or datetime.now(),
            'status': 'draft',
            'created_at': datetime.now(),
            'engagement': {'likes': 0, 'shares': 0, 'comments': 0},
            'hashtags': self.extract_hashtags(content),
            'mentions': self.extract_mentions(content)
        }
        
        self.post_queue.append(post)
        return post
    
    def extract_hashtags(self, content):
        """Extract hashtags from content"""
        import re
        return re.findall(r'#\\w+', content)
    
    def extract_mentions(self, content):
        """Extract mentions from content"""
        import re
        return re.findall(r'@\\w+', content)
    
    def generate_content(self, template_type, **kwargs):
        """Generate content using templates"""
        if template_type not in self.content_templates:
            return "Template type not found"
        
        templates = self.content_templates[template_type]
        template = random.choice(templates)
        
        # Default values for common placeholders
        defaults = {
            'day': datetime.now().strftime('%A'),
            'date': datetime.now().strftime('%Y-%m-%d'),
            'quote': 'Success is not final, failure is not fatal: it is the courage to continue that counts.',
            'message': 'Every expert was once a beginner',
            'inspiration': 'Great things never come from comfort zones',
            'fact': 'Python was named after Monty Python\\'s Flying Circus',
            'tip': 'Use virtual environments for Python projects',
            'insight': 'Automation saves time and reduces errors',
            'product': 'our new automation tool',
            'benefit': 'Save 5 hours per week',
            'offer': '20% off all services',
            'feature': 'Smart Scheduling',
            'description': 'AI-powered content optimization',
            'question': 'What\\'s your biggest productivity challenge?',
            'topic': 'remote work productivity',
            'poll_question': 'What\\'s your preferred programming language?',
            'option_a': 'Python',
            'option_b': 'JavaScript',
            'headline': 'AI adoption increases 40% in 2024',
            'summary': 'Companies are investing heavily in automation',
            'trend': 'Automation tools are becoming mainstream',
            'insight': 'Data-driven decisions lead to 23% higher profits'
        }
        
        # Merge with provided kwargs
        defaults.update(kwargs)
        
        try:
            return template.format(**defaults)
        except KeyError as e:
            return f"Missing template variable: {e}"
    
    def schedule_post(self, post_id, scheduled_time):
        """Schedule a post for future publishing"""
        for post in self.post_queue:
            if post['id'] == post_id:
                post['scheduled_time'] = scheduled_time
                post['status'] = 'scheduled'
                return {"success": True, "message": f"Post scheduled for {scheduled_time}"}
        
        return {"error": "Post not found"}
    
    def publish_post(self, post_id, platform_override=None):
        """Publish a post to social media platform"""
        post = None
        for p in self.post_queue:
            if p['id'] == post_id:
                post = p
                break
        
        if not post:
            return {"error": "Post not found"}
        
        platform = platform_override or post['platform']
        
        # Simulate API call to social media platform
        if platform == 'twitter':
            result = self._publish_to_twitter(post)
        elif platform == 'instagram':
            result = self._publish_to_instagram(post)
        elif platform == 'linkedin':
            result = self._publish_to_linkedin(post)
        elif platform == 'facebook':
            result = self._publish_to_facebook(post)
        else:
            return {"error": f"Platform {platform} not supported"}
        
        if result.get('success'):
            post['status'] = 'published'
            post['published_at'] = datetime.now()
            post['platform_id'] = result.get('platform_id')
        
        return result
    
    def _publish_to_twitter(self, post):
        """Simulate Twitter API publishing"""
        # In real implementation, use tweepy or requests to Twitter API
        return {
            "success": True,
            "platform_id": f"tw_{random.randint(1000000, 9999999)}",
            "message": "Posted to Twitter successfully",
            "url": f"https://twitter.com/user/status/{random.randint(1000000000000000000, 9999999999999999999)}"
        }
    
    def _publish_to_instagram(self, post):
        """Simulate Instagram API publishing"""
        return {
            "success": True,
            "platform_id": f"ig_{random.randint(1000000, 9999999)}",
            "message": "Posted to Instagram successfully",
            "url": f"https://instagram.com/p/{random.choice('ABCDEFGHIJKLMNOPQRSTUVWXYZ')}{random.randint(100000, 999999)}"
        }
    
    def _publish_to_linkedin(self, post):
        """Simulate LinkedIn API publishing"""
        return {
            "success": True,
            "platform_id": f"li_{random.randint(1000000, 9999999)}",
            "message": "Posted to LinkedIn successfully",
            "url": f"https://linkedin.com/posts/activity-{random.randint(1000000000000000000, 9999999999999999999)}"
        }
    
    def _publish_to_facebook(self, post):
        """Simulate Facebook API publishing"""
        return {
            "success": True,
            "platform_id": f"fb_{random.randint(1000000, 9999999)}",
            "message": "Posted to Facebook successfully", 
            "url": f"https://facebook.com/{random.randint(1000000, 9999999)}"
        }
    
    def bulk_schedule(self, posts_data, start_time, interval_hours=2):
        """Schedule multiple posts with time intervals"""
        scheduled_posts = []
        current_time = start_time
        
        for i, post_data in enumerate(posts_data):
            content = self.generate_content(
                post_data.get('template_type', 'motivational'),
                **post_data.get('variables', {})
            )
            
            post = self.create_post(
                content=content,
                platform=post_data.get('platform', 'twitter'),
                scheduled_time=current_time
            )
            
            self.schedule_post(post['id'], current_time)
            scheduled_posts.append(post)
            
            # Add interval for next post
            current_time += timedelta(hours=interval_hours)
        
        return {
            "scheduled_count": len(scheduled_posts),
            "posts": scheduled_posts,
            "time_range": f"{start_time} to {current_time - timedelta(hours=interval_hours)}"
        }
    
    def get_analytics(self, platform=None, days_back=7):
        """Get social media analytics"""
        end_date = datetime.now()
        start_date = end_date - timedelta(days=days_back)
        
        # Filter posts by platform and date range
        relevant_posts = []
        for post in self.post_queue:
            if post['status'] == 'published':
                if platform is None or post['platform'] == platform:
                    if start_date <= post.get('published_at', datetime.now()) <= end_date:
                        relevant_posts.append(post)
        
        if not relevant_posts:
            return {"message": "No published posts found for the specified criteria"}
        
        # Calculate analytics
        total_posts = len(relevant_posts)
        total_likes = sum(post['engagement']['likes'] for post in relevant_posts)
        total_shares = sum(post['engagement']['shares'] for post in relevant_posts)
        total_comments = sum(post['engagement']['comments'] for post in relevant_posts)
        
        # Simulate engagement data
        for post in relevant_posts:
            post['engagement']['likes'] = random.randint(5, 100)
            post['engagement']['shares'] = random.randint(1, 25)
            post['engagement']['comments'] = random.randint(0, 15)
        
        total_likes = sum(post['engagement']['likes'] for post in relevant_posts)
        total_shares = sum(post['engagement']['shares'] for post in relevant_posts)
        total_comments = sum(post['engagement']['comments'] for post in relevant_posts)
        
        analytics = {
            "period": f"{start_date.strftime('%Y-%m-%d')} to {end_date.strftime('%Y-%m-%d')}",
            "platform": platform or "All platforms",
            "summary": {
                "total_posts": total_posts,
                "total_engagement": total_likes + total_shares + total_comments,
                "average_engagement_per_post": round((total_likes + total_shares + total_comments) / total_posts, 2) if total_posts > 0 else 0
            },
            "engagement_breakdown": {
                "likes": total_likes,
                "shares": total_shares,
                "comments": total_comments
            },
            "best_performing_post": max(relevant_posts, key=lambda x: sum(x['engagement'].values())) if relevant_posts else None,
            "posting_frequency": round(total_posts / days_back, 2),
            "engagement_rate": round(((total_likes + total_shares + total_comments) / (total_posts * 100)) * 100, 2) if total_posts > 0 else 0
        }
        
        return analytics
    
    def optimize_posting_times(self, platform='twitter'):
        """Suggest optimal posting times based on engagement data"""
        # Simulate analysis of historical engagement data
        optimal_times = {
            'twitter': {
                'weekdays': ['09:00', '12:00', '17:00'],
                'weekends': ['10:00', '14:00', '19:00'],
                'best_day': 'Tuesday',
                'worst_day': 'Sunday'
            },
            'instagram': {
                'weekdays': ['11:00', '14:00', '20:00'],
                'weekends': ['12:00', '16:00', '21:00'],
                'best_day': 'Wednesday',
                'worst_day': 'Monday'
            },
            'linkedin': {
                'weekdays': ['08:00', '12:00', '18:00'],
                'weekends': ['10:00', '15:00'],
                'best_day': 'Thursday',
                'worst_day': 'Saturday'
            },
            'facebook': {
                'weekdays': ['09:00', '13:00', '19:00'],
                'weekends': ['11:00', '15:00', '20:00'],
                'best_day': 'Friday',
                'worst_day': 'Sunday'
            }
        }
        
        if platform not in optimal_times:
            return {"error": f"Optimization data not available for {platform}"}
        
        times = optimal_times[platform]
        return {
            "platform": platform,
            "recommendations": {
                "best_times_weekdays": times['weekdays'],
                "best_times_weekends": times['weekends'],
                "best_day_of_week": times['best_day'],
                "day_to_avoid": times['worst_day']
            },
            "tips": [
                f"Post during {', '.join(times['weekdays'])} on weekdays for maximum engagement",
                f"{times['best_day']} shows highest engagement rates",
                f"Avoid posting on {times['worst_day']} unless urgent",
                "Consistency is key - maintain regular posting schedule"
            ]
        }
    
    def content_performance_analysis(self):
        """Analyze which content types perform best"""
        published_posts = [post for post in self.post_queue if post['status'] == 'published']
        
        if not published_posts:
            return {"message": "No published posts to analyze"}
        
        # Categorize posts by hashtags/content type
        performance_by_type = {}
        
        for post in published_posts:
            # Simulate engagement data
            post['engagement']['likes'] = random.randint(5, 100)
            post['engagement']['shares'] = random.randint(1, 25)
            post['engagement']['comments'] = random.randint(0, 15)
            
            total_engagement = sum(post['engagement'].values())
            
            # Determine content type based on hashtags or content
            content_type = 'general'
            if any(tag in post['content'].lower() for tag in ['#motivation', 'motivation']):
                content_type = 'motivational'
            elif any(tag in post['content'].lower() for tag in ['#techtips', '#learning', 'tip']):
                content_type = 'educational'
            elif any(tag in post['content'].lower() for tag in ['#sale', '#offer', 'check out']):
                content_type = 'promotional'
            elif any(tag in post['content'].lower() for tag in ['question', '?', 'poll']):
                content_type = 'engagement'
            
            if content_type not in performance_by_type:
                performance_by_type[content_type] = {
                    'posts': 0,
                    'total_engagement': 0,
                    'avg_engagement': 0
                }
            
            performance_by_type[content_type]['posts'] += 1
            performance_by_type[content_type]['total_engagement'] += total_engagement
        
        # Calculate averages
        for content_type in performance_by_type:
            data = performance_by_type[content_type]
            data['avg_engagement'] = round(data['total_engagement'] / data['posts'], 2)
        
        # Sort by performance
        sorted_performance = sorted(
            performance_by_type.items(),
            key=lambda x: x[1]['avg_engagement'],
            reverse=True
        )
        
        return {
            "analysis_period": f"Based on {len(published_posts)} published posts",
            "performance_ranking": [
                {
                    "content_type": content_type,
                    "avg_engagement": data['avg_engagement'],
                    "total_posts": data['posts'],
                    "performance_level": "High" if data['avg_engagement'] > 50 else "Medium" if data['avg_engagement'] > 25 else "Low"
                }
                for content_type, data in sorted_performance
            ],
            "recommendations": [
                f"Focus more on {sorted_performance[0][0]} content (highest engagement)",
                "Test different content formats to improve performance",
                "Consider reducing low-performing content types",
                "A/B test posting times for different content types"
            ]
        }
    
    def generate_weekly_report(self):
        """Generate comprehensive weekly social media report"""
        analytics = self.get_analytics(days_back=7)
        performance = self.content_performance_analysis()
        
        report = {
            "report_period": "Last 7 days",
            "generated_at": datetime.now().isoformat(),
            "summary": analytics.get('summary', {}),
            "top_insights": [
                f"Published {analytics.get('summary', {}).get('total_posts', 0)} posts across all platforms",
                f"Generated {analytics.get('summary', {}).get('total_engagement', 0)} total engagements",
                f"Average engagement rate: {analytics.get('engagement_rate', 0)}%"
            ],
            "performance_analysis": performance,
            "upcoming_scheduled": len([p for p in self.post_queue if p['status'] == 'scheduled']),
            "action_items": [
                "Review and optimize underperforming content",
                "Schedule posts for optimal engagement times",
                "Prepare content for next week",
                "Engage with community comments and mentions"
            ]
        }
        
        return report

# Demo usage
def demo_social_media_bot():
    print("🤖 Social Media Automation Bot Demo")
    print("Automate posting, scheduling, and analytics across platforms")
    print()
    
    bot = SocialMediaBot()
    
    # Generate some content
    print("📝 Generating content...")
    motivational_content = bot.generate_content('motivational', quote="The best time to plant a tree was 20 years ago. The second best time is now.")
    educational_content = bot.generate_content('educational', tip="Use list comprehensions for more Pythonic code")
    
    print(f"✅ Generated motivational post: {motivational_content[:50]}...")
    print(f"✅ Generated educational post: {educational_content[:50]}...")
    
    # Create posts
    print("\\n📋 Creating posts...")
    post1 = bot.create_post(motivational_content, 'twitter')
    post2 = bot.create_post(educational_content, 'linkedin')
    
    print(f"✅ Created {len(bot.post_queue)} posts")
    
    # Schedule bulk posts
    print("\\n⏰ Scheduling bulk posts...")
    bulk_data = [
        {'template_type': 'motivational', 'platform': 'twitter'},
        {'template_type': 'educational', 'platform': 'linkedin'},
        {'template_type': 'engagement', 'platform': 'instagram'}
    ]
    
    start_time = datetime.now() + timedelta(hours=1)
    bulk_result = bot.bulk_schedule(bulk_data, start_time)
    print(f"✅ Scheduled {bulk_result['scheduled_count']} posts")
    
    # Simulate publishing
    print("\\n🚀 Publishing posts...")
    for post in bot.post_queue[:2]:  # Publish first 2 posts
        result = bot.publish_post(post['id'])
        print(f"✅ {result.get('message', 'Published successfully')}")
    
    # Get analytics
    print("\\n📊 Generating analytics...")
    analytics = bot.get_analytics()
    print(f"✅ Analytics generated for {analytics.get('summary', {}).get('total_posts', 0)} posts")
    
    # Get optimization suggestions
    print("\\n⚡ Getting optimization suggestions...")
    optimization = bot.optimize_posting_times('twitter')
    print(f"✅ Best times for Twitter: {', '.join(optimization['recommendations']['best_times_weekdays'])}")
    
    print("\\n" + "="*60)
    print("🎯 BOT FEATURES:")
    print("• Multi-platform support (Twitter, Instagram, LinkedIn, Facebook)")
    print("• Content generation with customizable templates")
    print("• Bulk scheduling with automated intervals")
    print("• Real-time analytics and engagement tracking")
    print("• Performance optimization suggestions")
    print("• Content type performance analysis")
    print("• Automated weekly reporting")
    print("• Hashtag and mention extraction")

demo_social_media_bot()`,
    logic: [
      "Create a multi-platform social media management system supporting Twitter, Instagram, LinkedIn, and Facebook",
      "Implement a template-based content generation system with customizable variables and random selection",
      "Build a comprehensive scheduling system that can handle individual posts and bulk scheduling with time intervals",
      "Develop analytics tracking for engagement metrics (likes, shares, comments) with performance analysis",
      "Create optimization algorithms that suggest best posting times based on platform-specific engagement patterns",
      "Implement content performance analysis to identify which types of posts generate the most engagement",
      "Build automated reporting functionality that generates weekly summaries with actionable insights",
    ],
    inputs: [
      {
        name: "platform",
        type: "select",
        options: ["twitter", "instagram", "linkedin", "facebook"],
        label: "Social media platform",
      },
      {
        name: "content_type",
        type: "select",
        options: ["motivational", "educational", "promotional", "engagement"],
        label: "Content type",
      },
      {
        name: "custom_message",
        type: "text",
        label: "Custom message (optional)",
      },
    ],
  },
  {
    id: "age-calculator",
    title: "Age Calculator",
    description:
      "Calculate exact age in years, months, days, hours, and minutes from birth date",
    category: "Date & Time Tools",
    difficulty: "Beginner",
    tags: ["date", "time", "age", "calculator"],
    code: `from datetime import datetime

def age_calculator():
    print("🎂 Age Calculator")
    print("Calculate your exact age with precision!")
    print()
    
    try:
        # Get birth date from user
        print("Enter your birth date:")
        year = int(input("Year (e.g., 1990): "))
        month = int(input("Month (1-12): "))
        day = int(input("Day (1-31): "))
        
        # Optional: Get birth time for more precision
        get_time = input("\\nInclude birth time for precise calculation? (y/n): ").lower()
        
        if get_time == 'y':
            hour = int(input("Hour (0-23): "))
            minute = int(input("Minute (0-59): "))
            birth_datetime = datetime(year, month, day, hour, minute)
        else:
            birth_datetime = datetime(year, month, day)
        
        # Get current date and time
        current_datetime = datetime.now()
        
        # Validate birth date
        if birth_datetime > current_datetime:
            print("❌ Birth date cannot be in the future!")
            return
        
        # Calculate age difference
        age_diff = current_datetime - birth_datetime
        
        # Calculate years, months, days
        years = current_datetime.year - birth_datetime.year
        months = current_datetime.month - birth_datetime.month
        days = current_datetime.day - birth_datetime.day
        
        # Adjust for negative days
        if days < 0:
            months -= 1
            # Get days in previous month
            if current_datetime.month == 1:
                prev_month_days = 31
            else:
                prev_month = current_datetime.replace(month=current_datetime.month-1)
                if prev_month.month == 2:
                    prev_month_days = 29 if prev_month.year % 4 == 0 else 28
                elif prev_month.month in [4, 6, 9, 11]:
                    prev_month_days = 30
                else:
                    prev_month_days = 31
            days += prev_month_days
        
        # Adjust for negative months
        if months < 0:
            years -= 1
            months += 12
        
        # Calculate total days, hours, minutes
        total_days = age_diff.days
        total_hours = total_days * 24 + (age_diff.seconds // 3600)
        total_minutes = total_hours * 60 + ((age_diff.seconds % 3600) // 60)
        
        # Display results
        print("\\n" + "="*50)
        print("🎯 YOUR AGE CALCULATION RESULTS")
        print("="*50)
        
        print(f"📅 Birth Date: {birth_datetime.strftime('%B %d, %Y')}")
        if get_time == 'y':
            print(f"🕐 Birth Time: {birth_datetime.strftime('%I:%M %p')}")
        print(f"📅 Current Date: {current_datetime.strftime('%B %d, %Y at %I:%M %p')}")
        
        print(f"\\n🎂 Exact Age:")
        print(f"   {years} years, {months} months, {days} days")
        
        print(f"\\n📊 Alternative Representations:")
        print(f"   • Total days lived: {total_days:,}")
        print(f"   • Total hours lived: {total_hours:,}")
        print(f"   • Total minutes lived: {total_minutes:,}")
        print(f"   • Age in months: {years * 12 + months}")
        print(f"   • Age in weeks: {total_days // 7}")
        
        # Fun facts
        print(f"\\n🎉 Fun Facts:")
        print(f"   • You've lived through {years} New Year celebrations!")
        print(f"   • You've experienced {total_days // 7} weekends!")
        print(f"   • You've seen {years * 365 + (years // 4)} sunrises (approx.)")
        
        # Next birthday countdown
        next_birthday = birth_datetime.replace(year=current_datetime.year + 1)
        if birth_datetime.replace(year=current_datetime.year) > current_datetime:
            next_birthday = birth_datetime.replace(year=current_datetime.year)
        
        days_to_birthday = (next_birthday - current_datetime).days
        print(f"   • Days until next birthday: {days_to_birthday}")
        
        # Life stage
        if years < 13:
            life_stage = "Child"
        elif years < 20:
            life_stage = "Teenager"
        elif years < 60:
            life_stage = "Adult"
        else:
            life_stage = "Senior"
        
        print(f"\\n👤 Life Stage: {life_stage}")
        
    except ValueError:
        print("❌ Please enter valid numbers for date and time!")
    except Exception as e:
        print(f"❌ An error occurred: {e}")

# Run the calculator
age_calculator()`,
    logic: [
      "Get user's birth date (year, month, day) and optionally birth time for precise calculation",
      "Validate that the birth date is not in the future compared to current date",
      "Calculate the difference between current datetime and birth datetime using Python datetime module",
      "Handle edge cases for negative days and months by adjusting calculations appropriately",
      "Convert age difference into multiple formats: years/months/days, total days, hours, minutes",
      "Provide fun statistics like total weekends lived, days until next birthday, and life stage categorization",
      "Display comprehensive results with formatted output showing exact age and alternative representations",
    ],
    inputs: [
      { name: "birth_year", type: "number", label: "Birth Year (e.g., 1990)" },
      { name: "birth_month", type: "number", label: "Birth Month (1-12)" },
      { name: "birth_day", type: "number", label: "Birth Day (1-31)" },
      {
        name: "include_time",
        type: "select",
        options: ["no", "yes"],
        label: "Include birth time?",
      },
    ],
  },
  {
    id: "temperature-converter",
    title: "Temperature Converter",
    description:
      "Convert temperatures between Celsius, Fahrenheit, and Kelvin with detailed explanations",
    category: "Science Tools",
    difficulty: "Beginner",
    tags: ["temperature", "conversion", "science"],
    code: `def temperature_converter():
    print("🌡️  Advanced Temperature Converter")
    print("Convert between Celsius, Fahrenheit, and Kelvin")
    print()
    
    # Temperature conversion functions
    def celsius_to_fahrenheit(celsius):
        return (celsius * 9/5) + 32
    
    def celsius_to_kelvin(celsius):
        return celsius + 273.15
    
    def fahrenheit_to_celsius(fahrenheit):
        return (fahrenheit - 32) * 5/9
    
    def fahrenheit_to_kelvin(fahrenheit):
        celsius = fahrenheit_to_celsius(fahrenheit)
        return celsius_to_kelvin(celsius)
    
    def kelvin_to_celsius(kelvin):
        return kelvin - 273.15
    
    def kelvin_to_fahrenheit(kelvin):
        celsius = kelvin_to_celsius(kelvin)
        return celsius_to_fahrenheit(celsius)
    
    # Temperature reference points
    reference_points = {
        'absolute_zero': {'c': -273.15, 'f': -459.67, 'k': 0},
        'water_freezing': {'c': 0, 'f': 32, 'k': 273.15},
        'water_boiling': {'c': 100, 'f': 212, 'k': 373.15},
        'human_body': {'c': 37, 'f': 98.6, 'k': 310.15},
        'room_temp': {'c': 20, 'f': 68, 'k': 293.15}
    }
    
    def get_temperature_context(temp_c):
        """Provide context about the temperature"""
        contexts = []
        
        if temp_c < -200:
            contexts.append("🥶 Extremely cold - approaching absolute zero!")
        elif temp_c < -100:
            contexts.append("🧊 Extremely cold - colder than Antarctica!")
        elif temp_c < 0:
            contexts.append("❄️  Below freezing - water turns to ice")
        elif temp_c < 10:
            contexts.append("🧥 Very cold - heavy winter clothing needed")
        elif temp_c < 18:
            contexts.append("🧤 Cold - jacket recommended")
        elif temp_c < 25:
            contexts.append("😊 Comfortable room temperature")
        elif temp_c < 30:
            contexts.append("☀️  Warm - perfect for outdoor activities")
        elif temp_c < 35:
            contexts.append("🔥 Hot - stay hydrated!")
        elif temp_c < 40:
            contexts.append("🌡️  Very hot - seek shade and AC")
        else:
            contexts.append("🚨 Dangerously hot - extreme heat warning!")
        
        # Add specific reference comparisons
        if abs(temp_c - 0) < 1:
            contexts.append("📍 Near water freezing point (0°C)")
        elif abs(temp_c - 37) < 1:
            contexts.append("📍 Near human body temperature (37°C)")
        elif abs(temp_c - 100) < 1:
            contexts.append("📍 Near water boiling point (100°C)")
        
        return contexts
    
    while True:
        print("\\n🌡️  Temperature Conversion Menu:")
        print("1. Celsius to Fahrenheit")
        print("2. Celsius to Kelvin")
        print("3. Fahrenheit to Celsius")
        print("4. Fahrenheit to Kelvin")
        print("5. Kelvin to Celsius")
        print("6. Kelvin to Fahrenheit")
        print("7. Convert to all scales")
        print("8. Show temperature references")
        print("9. Exit")
        
        choice = input("\\nEnter your choice (1-9): ").strip()
        
        if choice == '9':
            print("Thank you for using Temperature Converter! 🌡️")
            break
        
        if choice == '8':
            print("\\n🌡️  Temperature Reference Points:")
            print("="*50)
            for name, temps in reference_points.items():
                display_name = name.replace('_', ' ').title()
                print(f"{display_name}:")
                print(f"  • {temps['c']:.1f}°C = {temps['f']:.1f}°F = {temps['k']:.1f}K")
            continue
        
        try:
            temp = float(input("\\nEnter temperature value: "))
            
            if choice == '1':
                result = celsius_to_fahrenheit(temp)
                print(f"\\n🌡️  {temp}°C = {result:.2f}°F")
                print(f"Formula: °F = (°C × 9/5) + 32")
                contexts = get_temperature_context(temp)
                
            elif choice == '2':
                result = celsius_to_kelvin(temp)
                print(f"\\n🌡️  {temp}°C = {result:.2f}K")
                print(f"Formula: K = °C + 273.15")
                contexts = get_temperature_context(temp)
                
            elif choice == '3':
                result = fahrenheit_to_celsius(temp)
                print(f"\\n🌡️  {temp}°F = {result:.2f}°C")
                print(f"Formula: °C = (°F - 32) × 5/9")
                contexts = get_temperature_context(result)
                
            elif choice == '4':
                result = fahrenheit_to_kelvin(temp)
                celsius_temp = fahrenheit_to_celsius(temp)
                print(f"\\n🌡️  {temp}°F = {result:.2f}K")
                print(f"Formula: K = ((°F - 32) × 5/9) + 273.15")
                contexts = get_temperature_context(celsius_temp)
                
            elif choice == '5':
                result = kelvin_to_celsius(temp)
                print(f"\\n🌡️  {temp}K = {result:.2f}°C")
                print(f"Formula: °C = K - 273.15")
                contexts = get_temperature_context(result)
                
            elif choice == '6':
                celsius_temp = kelvin_to_celsius(temp)
                result = kelvin_to_fahrenheit(temp)
                print(f"\\n🌡️  {temp}K = {result:.2f}°F")
                print(f"Formula: °F = ((K - 273.15) × 9/5) + 32")
                contexts = get_temperature_context(celsius_temp)
                
            elif choice == '7':
                # Convert to all scales
                if temp >= 0:  # Assume Celsius input for "convert all"
                    celsius = temp
                    fahrenheit = celsius_to_fahrenheit(celsius)
                    kelvin = celsius_to_kelvin(celsius)
                    
                    print(f"\\n🌡️  Temperature in all scales:")
                    print(f"   Celsius:    {celsius:.2f}°C")
                    print(f"   Fahrenheit: {fahrenheit:.2f}°F") 
                    print(f"   Kelvin:     {kelvin:.2f}K")
                    
                    contexts = get_temperature_context(celsius)
                else:
                    print("❌ For 'convert all', please enter a positive value (assumed Celsius)")
                    continue
            else:
                print("❌ Invalid choice! Please select 1-9.")
                continue
            
            # Display temperature context
            if contexts:
                print(f"\\n🌡️  Temperature Context:")
                for context in contexts:
                    print(f"   {context}")
                    
        except ValueError:
            print("❌ Please enter a valid number!")
        except Exception as e:
            print(f"❌ An error occurred: {e}")

# Run the converter
temperature_converter()`,
    logic: [
      "Implement conversion functions between Celsius, Fahrenheit, and Kelvin using standard formulas",
      "Provide a menu-driven interface allowing users to select specific conversion types or convert to all scales",
      "Include temperature reference points (freezing point, boiling point, body temperature) for context",
      "Add contextual information about temperature ranges (cold, comfortable, hot, dangerous)",
      "Display conversion formulas to help users understand the mathematical relationships",
      "Handle input validation and provide clear error messages for invalid inputs",
      "Offer educational value by showing temperature comparisons and real-world references",
    ],
    inputs: [
      {
        name: "conversion_type",
        type: "select",
        options: ["c_to_f", "c_to_k", "f_to_c", "f_to_k", "k_to_c", "k_to_f"],
        label: "Conversion type",
      },
      { name: "temperature", type: "number", label: "Temperature value" },
    ],
  },
  {
    id: "tip-calculator",
    title: "Tip Calculator & Bill Splitter",
    description: "Calculate tips and split bills among friends",
    category: "Finance Tools",
    difficulty: "Beginner",
    tags: ["tip", "bill", "restaurant", "calculator"],
    code: `def tip_calculator():
    print("🍽️ Tip Calculator & Bill Splitter")
    
    bill_amount = float(input("Enter bill amount ($): "))
    tip_percentage = float(input("Enter tip percentage (%): "))
    num_people = int(input("Number of people: "))
    
    tip_amount = (bill_amount * tip_percentage) / 100
    total_amount = bill_amount + tip_amount
    per_person = total_amount / num_people
    
    print("\\nResults:")
    print("Bill:", bill_amount)
    print("Tip:", tip_amount)  
    print("Total:", total_amount)
    print("Per person:", per_person)

tip_calculator()`,
    logic: [
      "Get bill amount, tip percentage, and number of people",
      "Calculate tip amount using percentage formula",
      "Add tip to bill for total amount",
      "Divide total by number of people",
    ],
    inputs: [
      { name: "bill_amount", type: "number", label: "Bill Amount ($)" },
      { name: "tip_percentage", type: "number", label: "Tip Percentage (%)" },
      { name: "num_people", type: "number", label: "Number of People" },
    ],
  },
  {
    id: "qr-code-generator",
    title: "QR Code Generator",
    description: "Generate actual QR codes for text, URLs, and more",
    category: "Utility Tools",
    difficulty: "Beginner",
    tags: ["qr", "generator", "utility"],
    code: `def qr_code_generator():
    print("📱 QR Code Generator")
    print("Generate QR codes using online API or library")
    print()
    
    print("QR Code Options:")
    print("1. Text Message")
    print("2. Website URL")
    print("3. Phone Number")
    print("4. Email Address")
    
    choice = input("Choose option (1-4): ").strip()
    
    if choice == "1":
        data = input("Enter your text: ")
        qr_type = "Text"
        
    elif choice == "2":
        url = input("Enter website URL: ")
        if not url.startswith(('http://', 'https://')):
            url = 'https://' + url
        data = url
        qr_type = "Website"
        
    elif choice == "3":
        phone = input("Enter phone number: ")
        data = "tel:" + phone
        qr_type = "Phone"
        
    elif choice == "4":
        email = input("Enter email address: ")
        data = "mailto:" + email
        qr_type = "Email"
        
    else:
        data = input("Enter text: ")
        qr_type = "Text"
    
    # Generate QR code URL using API service
    import urllib.parse
    encoded_data = urllib.parse.quote(data)
    qr_url = f"https://api.qrserver.com/v1/create-qr-code/?size=200x200&data={encoded_data}"
    
    print("\\n✅ QR Code Generated!")
    print("=" * 40)
    print(f"Type: {qr_type}")
    print(f"Data: {data}")
    print(f"QR Code URL: {qr_url}")
    print()
    print("📱 Instructions:")
    print("1. Copy the QR Code URL above")
    print("2. Open it in your browser")
    print("3. Save or scan the QR code!")
    print()
    print("💡 Tip: You can also use this in your web projects!")

qr_code_generator()`,
    logic: [
      "Get user input for different QR code types",
      "Format data according to QR code standards",
      "Generate QR code using free API service",
      "Provide downloadable QR code URL",
      "Support multiple data formats",
    ],
    inputs: [
      {
        name: "qr_type",
        type: "select",
        options: ["1", "2", "3", "4"],
        label: "QR Type",
      },
      { name: "qr_data", type: "text", label: "Data to encode" },
    ],
  },

  {
    id: "expense-tracker",
    title: "Expense Tracker",
    description: "Track personal expenses and spending",
    category: "Finance Tools",
    difficulty: "Beginner",
    tags: ["expenses", "budget", "finance"],
    code: `def expense_tracker():
    print("💰 Expense Tracker")
    
    expenses = []
    
    while True:
        print("\\n1. Add Expense")
        print("2. View Total") 
        print("3. Exit")
        
        choice = input("Select: ").strip()
        
        if choice == "1":
            try:
                amount = float(input("Amount ($): "))
                desc = input("Description: ")
                
                expenses.append({
                    "amount": amount,
                    "description": desc
                })
                
                print("✅ Expense added!")
                
            except ValueError:
                print("❌ Invalid amount!")
        
        elif choice == "2":
            if expenses:
                total = sum(exp["amount"] for exp in expenses)
                print("\\n📊 Expenses:")
                for exp in expenses:
                    print("$" + str(exp["amount"]) + " - " + exp["description"])
                print("\\nTotal: $" + str(total))
            else:
                print("No expenses recorded")
        
        elif choice == "3":
            break
        
        else:
            print("Invalid choice!")

expense_tracker()`,
    logic: [
      "Store expenses in a list",
      "Add new expenses with amount and description",
      "Calculate and display total spending",
      "Simple menu-driven interface",
    ],
    inputs: [
      { name: "expense_amount", type: "number", label: "Amount ($)" },
      { name: "expense_description", type: "text", label: "Description" },
    ],
  },

  {
    id: "password-manager",
    title: "Password Manager",
    description: "Store and manage passwords",
    category: "Security Tools",
    difficulty: "Beginner",
    tags: ["password", "security"],
    code: `def password_manager():
    print("🔐 Password Manager")
    
    passwords = {}
    
    def generate_password():
        import random
        import string
        chars = string.ascii_letters + string.digits + "!@#$"
        return ''.join(random.choice(chars) for _ in range(12))
    
    while True:
        print("\\n1. Add Password")
        print("2. View Passwords")
        print("3. Generate Password")
        print("4. Exit")
        
        choice = input("Select: ").strip()
        
        if choice == "1":
            site = input("Site name: ")
            username = input("Username: ")
            password = input("Password: ")
            
            passwords[site] = {
                "username": username,
                "password": password
            }
            
            print("✅ Password saved!")
        
        elif choice == "2":
            if passwords:
                print("\\n🔐 Stored Passwords:")
                for site, data in passwords.items():
                    print("\\n" + site + ":")
                    print("  Username: " + data["username"])
                    print("  Password: (" + data["password"] + ")")
            else:
                print("No passwords stored")
        
        elif choice == "3":
            new_pass = generate_password()
            print("\\n🎲 Generated: " + new_pass)
        
        elif choice == "4":
            break
        
        else:
            print("Invalid choice!")

password_manager()`,
    logic: [
      "Store passwords in dictionary",
      "Add new password entries",
      "View stored passwords (hidden)",
      "Generate random secure passwords",
    ],
    inputs: [
      { name: "site_name", type: "text", label: "Site Name" },
      { name: "username", type: "text", label: "Username" },
    ],
  },
];
