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
];
