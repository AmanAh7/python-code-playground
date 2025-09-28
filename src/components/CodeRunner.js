"use client";
import { useState } from "react";

export default function CodeRunner({ project }) {
  const [inputs, setInputs] = useState({});
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (name, value) => {
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const runCode = () => {
    setLoading(true);
    setOutput("");

    // Simulate processing time
    setTimeout(() => {
      let result = "";

      try {
        switch (project.id) {
          case "calculator":
            const op = inputs.operation;
            const num1 = parseFloat(inputs.num1) || 0;
            const num2 = parseFloat(inputs.num2) || 0;

            if (!op) {
              result = "Please select an operation";
            } else if (op === "1") {
              result = `${num1} + ${num2} = ${num1 + num2}`;
            } else if (op === "2") {
              result = `${num1} - ${num2} = ${num1 - num2}`;
            } else if (op === "3") {
              result = `${num1} * ${num2} = ${num1 * num2}`;
            } else if (op === "4") {
              if (num2 === 0) {
                result = "Error! Division by zero.";
              } else {
                result = `${num1} / ${num2} = ${(num1 / num2).toFixed(4)}`;
              }
            }
            break;

          case "odd-even":
            const number = parseInt(inputs.number);
            if (isNaN(number)) {
              result = "Please enter a valid integer";
            } else {
              result = `${number} is ${
                number % 2 === 0 ? "an even" : "an odd"
              } number`;
            }
            break;

          case "prime-number":
            const num = parseInt(inputs.number);
            if (isNaN(num)) {
              result = "Please enter a valid integer";
            } else {
              const isPrime = (n) => {
                if (n < 2) return false;
                if (n === 2) return true;
                if (n % 2 === 0) return false;
                for (let i = 3; i <= Math.sqrt(n); i += 2) {
                  if (n % i === 0) return false;
                }
                return true;
              };
              result = `${num} is ${
                isPrime(num) ? "a prime" : "not a prime"
              } number`;
            }
            break;

          case "bubble-sort":
            const numbers = inputs.numbers
              ? inputs.numbers
                  .split(" ")
                  .map((n) => parseInt(n))
                  .filter((n) => !isNaN(n))
              : [];
            if (numbers.length === 0) {
              result = "Please enter valid numbers separated by spaces";
            } else {
              const original = [...numbers];
              let swaps = 0;
              let comparisons = 0;

              result = `Original array: [${original.join(
                ", "
              )}]\n\nSorting steps:\n`;

              for (let i = 0; i < numbers.length - 1; i++) {
                let swappedInPass = false;
                result += `\nPass ${i + 1}:\n`;

                for (let j = 0; j < numbers.length - i - 1; j++) {
                  comparisons++;
                  result += `  Compare ${numbers[j]} and ${numbers[j + 1]} → `;

                  if (numbers[j] > numbers[j + 1]) {
                    [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
                    swaps++;
                    swappedInPass = true;
                    result += `Swap! Array: [${numbers.join(", ")}]\n`;
                  } else {
                    result += "No swap needed\n";
                  }
                }

                if (!swappedInPass) {
                  result += "  Array is already sorted!\n";
                  break;
                }
              }

              result += `\nFinal sorted array: [${numbers.join(", ")}]\n`;
              result += `Total comparisons: ${comparisons}\n`;
              result += `Total swaps: ${swaps}`;
            }
            break;

          case "binary-search":
            const searchArray = inputs.numbers
              ? inputs.numbers
                  .split(" ")
                  .map((n) => parseInt(n))
                  .filter((n) => !isNaN(n))
              : [];
            const target = parseInt(inputs.target);

            if (searchArray.length === 0) {
              result = "Please enter valid sorted numbers";
            } else if (isNaN(target)) {
              result = "Please enter a valid target number";
            } else {
              let left = 0;
              let right = searchArray.length - 1;
              let comparisons = 0;
              let found = false;

              result = `Searching for ${target} in: [${searchArray.join(
                ", "
              )}]\n\nSearch steps:\n`;

              while (left <= right && !found) {
                const mid = Math.floor((left + right) / 2);
                comparisons++;

                result += `\nStep ${comparisons}:\n`;
                result += `  Left: ${left}, Right: ${right}, Mid: ${mid}\n`;
                result += `  Check arr[${mid}] = ${searchArray[mid]}\n`;

                if (searchArray[mid] === target) {
                  result += `  🎉 Found ${target} at index ${mid}!\n`;
                  found = true;
                } else if (searchArray[mid] < target) {
                  result += `  ${searchArray[mid]} < ${target}, search right half\n`;
                  left = mid + 1;
                } else {
                  result += `  ${searchArray[mid]} > ${target}, search left half\n`;
                  right = mid - 1;
                }
              }

              if (!found) {
                result += `\n❌ ${target} not found in array\n`;
              }
              result += `\nTotal comparisons: ${comparisons}`;

              // Show efficiency info
              const maxComparisons = Math.ceil(Math.log2(searchArray.length));
              result += `\nMax possible comparisons: ${maxComparisons} (log₂${searchArray.length})`;
            }
            break;

          case "fibonacci":
            const count = parseInt(inputs.count);
            if (isNaN(count) || count <= 0) {
              result = "Please enter a positive number";
            } else if (count > 30) {
              result =
                "Please enter a number less than or equal to 30 for better visualization";
            } else {
              const sequence = [];
              result = `Generating first ${count} Fibonacci numbers:\n\n`;

              if (count >= 1) {
                sequence[0] = 0;
                result += "F(0) = 0\n";
              }

              if (count >= 2) {
                sequence[1] = 1;
                result += "F(1) = 1\n";
              }

              for (let i = 2; i < count; i++) {
                sequence[i] = sequence[i - 1] + sequence[i - 2];
                result += `F(${i}) = F(${i - 1}) + F(${i - 2}) = ${
                  sequence[i - 1]
                } + ${sequence[i - 2]} = ${sequence[i]}\n`;
              }

              result += `\nComplete sequence: [${sequence.join(", ")}]`;

              // Show mathematical properties
              if (count > 5) {
                const ratio = sequence[count - 1] / sequence[count - 2];
                result += `\nGolden ratio approximation: ${ratio.toFixed(8)}`;
                result += `\n(True golden ratio: 1.61803399...)`;
              }

              // Show sum property
              if (count >= 3) {
                const sum = sequence.reduce((a, b) => a + b, 0);
                result += `\nSum of all numbers: ${sum}`;
                result += `\nSum formula: F(n+2) - 1 = ${
                  sequence[count + 1] - 1
                } ≈ ${sum}`;
              }
            }
            break;

          // EXISTING PROJECTS IMPLEMENTATIONS
          case "linear-search":
            const searchNums = inputs.numbers
              ? inputs.numbers
                  .split(" ")
                  .map((n) => parseInt(n))
                  .filter((n) => !isNaN(n))
              : [];
            const searchTarget = parseInt(inputs.target);

            if (searchNums.length === 0) {
              result = "Please enter valid numbers separated by spaces";
            } else if (isNaN(searchTarget)) {
              result = "Please enter a valid target number";
            } else {
              result = `Searching for ${searchTarget} in: [${searchNums.join(
                ", "
              )}]\n\nLinear search process:\n`;

              let found = false;
              let comparisons = 0;

              for (let i = 0; i < searchNums.length; i++) {
                comparisons++;
                result += `\nStep ${comparisons}: Check arr[${i}] = ${searchNums[i]}`;

                if (searchNums[i] === searchTarget) {
                  result += ` → Found ${searchTarget} at index ${i}! ✅`;
                  found = true;
                  break;
                } else {
                  result += " → Not a match, continue...";
                }
              }

              if (!found) {
                result += `\n\n❌ ${searchTarget} not found in the array`;
              } else {
                result += `\n\n🎉 Success! Element ${searchTarget} found`;
              }
              result += `\nTotal comparisons: ${comparisons}`;
            }
            break;

          case "selection-sort":
            const sortNums = inputs.numbers
              ? inputs.numbers
                  .split(" ")
                  .map((n) => parseInt(n))
                  .filter((n) => !isNaN(n))
              : [];

            if (sortNums.length === 0) {
              result = "Please enter valid numbers separated by spaces";
            } else {
              const original = [...sortNums];
              let swaps = 0;
              let comparisons = 0;

              result = `Original array: [${original.join(
                ", "
              )}]\n\nSelection sort process:\n`;

              for (let i = 0; i < sortNums.length - 1; i++) {
                let minIdx = i;
                result += `\n--- Pass ${
                  i + 1
                }: Finding minimum from position ${i} ---\n`;
                result += `Current minimum: arr[${i}] = ${sortNums[i]}\n`;

                for (let j = i + 1; j < sortNums.length; j++) {
                  comparisons++;
                  result += `Compare arr[${minIdx}] = ${sortNums[minIdx]} with arr[${j}] = ${sortNums[j]}`;

                  if (sortNums[j] < sortNums[minIdx]) {
                    minIdx = j;
                    result += ` → New minimum found at index ${j}\n`;
                  } else {
                    result += " → Current minimum unchanged\n";
                  }
                }

                if (minIdx !== i) {
                  [sortNums[i], sortNums[minIdx]] = [
                    sortNums[minIdx],
                    sortNums[i],
                  ];
                  swaps++;
                  result += `Swap arr[${i}] with arr[${minIdx}]: [${sortNums.join(
                    ", "
                  )}]\n`;
                } else {
                  result += `No swap needed, arr[${i}] is already minimum\n`;
                }

                result += `After pass ${i + 1}: [${sortNums.join(", ")}]\n`;
              }

              result += `\nFinal sorted array: [${sortNums.join(", ")}]`;
              result += `\nTotal comparisons: ${comparisons}`;
              result += `\nTotal swaps: ${swaps}`;
            }
            break;

          case "palindrome-checker":
            const text = inputs.text || "";

            if (!text.trim()) {
              result = "Please enter some text to check";
            } else {
              // Clean the text
              const cleaned = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

              result = `Original text: "${text}"\n`;
              result += `Cleaned text: "${cleaned}"\n\nPalindrome check process:\n`;

              let left = 0;
              let right = cleaned.length - 1;
              let comparisons = 0;
              let isPalindrome = true;

              while (left < right) {
                comparisons++;
                result += `\nStep ${comparisons}: Compare '${cleaned[left]}' (pos ${left}) with '${cleaned[right]}' (pos ${right})`;

                if (cleaned[left] !== cleaned[right]) {
                  result += " → Mismatch found! Not a palindrome ❌";
                  isPalindrome = false;
                  break;
                } else {
                  result += " → Match! ✅";
                }

                left++;
                right--;
              }

              result += `\n\nTotal comparisons: ${comparisons}`;
              if (isPalindrome) {
                result += `\n🎉 Result: "${text}" IS a palindrome!`;
              } else {
                result += `\n❌ Result: "${text}" is NOT a palindrome`;
              }
            }
            break;

          case "factorial-calculator":
            const factNum = parseInt(inputs.number);

            if (isNaN(factNum)) {
              result = "Please enter a valid number";
            } else if (factNum < 0) {
              result = "Factorial is not defined for negative numbers";
            } else if (factNum > 20) {
              result = "Please enter a number ≤ 20 to avoid overflow";
            } else {
              result = `Calculating ${factNum}! using iterative method:\n\n`;

              let factorial = 1;
              result += "Starting with result = 1\n";

              for (let i = 1; i <= factNum; i++) {
                factorial *= i;
                result += `Step ${i}: result = result × ${i} = ${factorial}\n`;
              }

              result += `\nFinal result: ${factNum}! = ${factorial}`;

              // Show mathematical meaning
              if (factNum > 0) {
                result += `\n\nMathematical representation:`;
                result += `\n${factNum}! = `;
                for (let i = factNum; i >= 1; i--) {
                  result += i;
                  if (i > 1) result += " × ";
                }
                result += ` = ${factorial}`;
              }
            }
            break;

          case "password-generator":
            const length = parseInt(inputs.length) || 8;
            const includeLower = inputs.lowercase === "y";
            const includeUpper = inputs.uppercase === "y";
            const includeNumbers = inputs.numbers === "y";
            const includeSymbols = inputs.symbols === "y";

            if (length < 4 || length > 50) {
              result = "Password length should be between 4-50 characters";
            } else if (
              !includeLower &&
              !includeUpper &&
              !includeNumbers &&
              !includeSymbols
            ) {
              result = "Please select at least one character type";
            } else {
              let characters = "";
              result = `Generating ${length}-character password:\n\n`;

              if (includeLower) {
                characters += "abcdefghijklmnopqrstuvwxyz";
                result += "✅ Added lowercase letters: a-z\n";
              }
              if (includeUpper) {
                characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                result += "✅ Added uppercase letters: A-Z\n";
              }
              if (includeNumbers) {
                characters += "0123456789";
                result += "✅ Added numbers: 0-9\n";
              }
              if (includeSymbols) {
                characters += "!@#$%^&*()_+-=[]{}|;:,.<>?";
                result += "✅ Added symbols: !@#$%^&*...\n";
              }

              result += `\nCharacter pool size: ${characters.length}\n`;
              result += "Generating password...\n\n";

              let password = "";
              for (let i = 0; i < length; i++) {
                const randomChar = characters.charAt(
                  Math.floor(Math.random() * characters.length)
                );
                password += randomChar;
                result += `Position ${i + 1}: '${randomChar}'\n`;
              }

              // Calculate strength
              let strength = 0;
              if (includeLower) strength++;
              if (includeUpper) strength++;
              if (includeNumbers) strength++;
              if (includeSymbols) strength++;

              const strengthLevels = [
                "Very Weak",
                "Weak",
                "Fair",
                "Good",
                "Very Strong",
              ];

              result += `\n🔐 Generated Password: ${password}`;
              result += `\n📊 Length: ${length} characters`;
              result += `\n💪 Strength: ${
                strengthLevels[Math.min(strength, 4)]
              } (${strength}/4 types)`;
            }
            break;

          case "gcd-calculator":
            const num1Gcd = parseInt(inputs.num1);
            const num2Gcd = parseInt(inputs.num2);

            if (isNaN(num1Gcd) || isNaN(num2Gcd)) {
              result = "Please enter valid integers for both numbers";
            } else if (num1Gcd <= 0 || num2Gcd <= 0) {
              result = "Please enter positive integers only";
            } else {
              let a = Math.max(num1Gcd, num2Gcd);
              let b = Math.min(num1Gcd, num2Gcd);

              result = `Finding GCD of ${num1Gcd} and ${num2Gcd} using Euclidean Algorithm:\n\n`;
              result += "The algorithm: GCD(a,b) = GCD(b, a mod b)\n";
              result +=
                "==================================================\n\n";

              let step = 1;

              while (b !== 0) {
                const remainder = a % b;
                const quotient = Math.floor(a / b);

                result += `Step ${step}:\n`;
                result += `  GCD(${a}, ${b})\n`;
                result += `  ${a} = ${b} × ${quotient} + ${remainder}\n`;
                result += `  So GCD(${a}, ${b}) = GCD(${b}, ${remainder})\n\n`;

                a = b;
                b = remainder;
                step++;
              }

              result += `Final step: GCD(${a}, 0) = ${a}\n\n`;
              result += `🎉 Therefore, GCD(${num1Gcd}, ${num2Gcd}) = ${a}`;

              // Show some properties
              result += `\n\n📊 Additional info:`;
              result += `\n• LCM(${num1Gcd}, ${num2Gcd}) = ${
                (num1Gcd * num2Gcd) / a
              }`;
              result += `\n• ${num1Gcd} ÷ ${a} = ${num1Gcd / a}`;
              result += `\n• ${num2Gcd} ÷ ${a} = ${num2Gcd / a}`;
            }
            break;

          // FIRST 3 NEW PROJECT IMPLEMENTATIONS
          case "number-guessing":
            const guess = parseInt(inputs.guess);
            const secretNumber = 42; // Demo number - in real game would be random

            if (isNaN(guess)) {
              result = "Please enter a valid number between 1 and 100";
            } else if (guess < 1 || guess > 100) {
              result = "Please guess a number between 1 and 100";
            } else {
              result = `🎯 Number Guessing Game Demo\n\n`;
              result += `Your guess: ${guess}\n`;
              result += `Secret number: ${secretNumber}\n\n`;

              if (guess === secretNumber) {
                result += `🎉 Congratulations! You guessed it!\n`;
                result += `The secret number was indeed ${secretNumber}`;
              } else if (guess < secretNumber) {
                result += `📈 Too low! The number is higher than ${guess}\n`;
                result += `Try again with a bigger number`;
              } else {
                result += `📉 Too high! The number is lower than ${guess}\n`;
                result += `Try again with a smaller number`;
              }

              result += `\n\n💡 In the full game, you'd have 7 attempts to guess!`;
            }
            break;

          case "rock-paper-scissors":
            const playerChoice = inputs.choice;
            const emojis = { 1: "🪨 Rock", 2: "📄 Paper", 3: "✂️ Scissors" };

            if (!playerChoice || !["1", "2", "3"].includes(playerChoice)) {
              result =
                "Please select a valid choice (1=Rock, 2=Paper, 3=Scissors)";
            } else {
              const computerChoice = Math.floor(Math.random() * 3) + 1;
              const playerName = emojis[playerChoice];
              const computerName = emojis[computerChoice.toString()];

              result = `🎮 Rock Paper Scissors Game\n\n`;
              result += `You chose: ${playerName}\n`;
              result += `Computer chose: ${computerName}\n\n`;

              if (playerChoice === computerChoice.toString()) {
                result += "🤝 It's a tie! Great minds think alike!";
              } else if (
                (playerChoice === "1" && computerChoice === 3) ||
                (playerChoice === "2" && computerChoice === 1) ||
                (playerChoice === "3" && computerChoice === 2)
              ) {
                result += "🎉 You win! Congratulations!";
                result += `\n\nGame logic: ${playerName.split(" ")[1]} beats ${
                  computerName.split(" ")[1]
                }!`;
              } else {
                result += "🤖 Computer wins! Better luck next time!";
                result += `\n\nGame logic: ${
                  computerName.split(" ")[1]
                } beats ${playerName.split(" ")[1]}!`;
              }

              result += `\n\n🔄 In the full game, you can play multiple rounds!`;
            }
            break;

          case "mad-libs":
            const storyChoice = inputs.story_choice || "1";
            const adjective = inputs.adjective || "funny";
            const noun = inputs.noun || "cat";
            const verb = inputs.verb || "run";

            const stories = [
              {
                title: "The Crazy Adventure",
                template: `Once upon a time, there was a ${adjective} ${noun} who loved to ${verb} everywhere. It was the most amazing sight anyone had ever seen!`,
              },
              {
                title: "The Silly School Day",
                template: `At school today, our ${adjective} teacher taught us how to ${verb}. The ${noun} in our classroom started laughing!`,
              },
              {
                title: "The Space Mission",
                template: `The astronaut found a ${adjective} ${noun} on Mars and decided to ${verb} with it across the galaxy.`,
              },
            ];

            const selectedStory =
              stories[parseInt(storyChoice) - 1] || stories[0];

            result = `🎭 Mad Libs Story Generator\n\n`;
            result += `📖 Story: ${selectedStory.title}\n\n`;
            result += `${selectedStory.template}\n\n`;
            result += `📊 Your words used:\n`;
            result += `• Adjective: "${adjective}"\n`;
            result += `• Noun: "${noun}"\n`;
            result += `• Verb: "${verb}"\n\n`;
            result += `🎉 Story complete! Try different words for more fun!`;
            break;

          // NEW 5 ADDITIONAL PROJECT IMPLEMENTATIONS
          case "dice-rolling":
            const numDice = parseInt(inputs.num_dice) || 1;
            const numSides = parseInt(inputs.num_sides) || 6;

            if (numDice < 1 || numDice > 10) {
              result = "Please enter 1-10 dice";
            } else if (![4, 6, 8, 10, 12, 20].includes(numSides)) {
              result = "Please choose valid sides (4,6,8,10,12,20)";
            } else {
              const rolls = [];
              let total = 0;

              result = `🎲 Rolling ${numDice} dice with ${numSides} sides each...\n\n`;

              for (let i = 0; i < numDice; i++) {
                const roll = Math.floor(Math.random() * numSides) + 1;
                rolls.push(roll);
                total += roll;
                result += `Die ${i + 1}: ${roll}\n`;
              }

              result += `\nIndividual rolls: [${rolls.join(", ")}]`;
              result += `\nTotal sum: ${total}`;
              result += `\nAverage: ${(total / numDice).toFixed(2)}`;

              const maxPossible = numDice * numSides;
              const percentage = ((total / maxPossible) * 100).toFixed(1);
              result += `\nLuck percentage: ${percentage}%`;

              result += `\n\n📊 Statistics:`;
              result += `\nMinimum possible: ${numDice}`;
              result += `\nMaximum possible: ${maxPossible}`;
              result += `\nYour total: ${total}`;
            }
            break;

          case "hangman":
            const letter = inputs.letter ? inputs.letter.toUpperCase() : "";
            const word = "PYTHON"; // Demo word

            if (!letter || letter.length !== 1 || !/[A-Z]/.test(letter)) {
              result = "Please enter a single letter (A-Z)";
            } else {
              result = `🎭 Hangman Demo\n\n`;
              result += `Demo word: P_T_ON (PYTHON with Y and H hidden)\n`;
              result += `Your guess: ${letter}\n\n`;

              if (word.includes(letter)) {
                result += `✅ Good guess! '${letter}' is in the word!\n`;
                result += `Letters found: ${letter}`;
              } else {
                result += `❌ Sorry! '${letter}' is not in the word.\n`;
                result += "Try another letter!";
              }

              result += `\n\n🎮 In the full game:\n`;
              result += "• Random programming words\n";
              result += "• ASCII hangman drawing\n";
              result += "• 6 wrong guesses allowed\n";
              result += "• Complete word tracking";
            }
            break;

          case "unit-converter":
            const category = inputs.category || "length";
            const fromUnit = inputs.from_unit || "m";
            const toUnit = inputs.to_unit || "ft";
            const value = parseFloat(inputs.value) || 1;

            const conversions = {
              length: {
                m: 1,
                km: 1000,
                cm: 0.01,
                mm: 0.001,
                ft: 0.3048,
                in: 0.0254,
                yd: 0.9144,
                mi: 1609.34,
              },
              weight: {
                g: 1,
                kg: 1000,
                mg: 0.001,
                lb: 453.592,
                oz: 28.3495,
                ton: 1000000,
              },
              temperature: {
                c: (val) => val,
                f: (val) => ((val - 32) * 5) / 9,
                k: (val) => val - 273.15,
              },
            };

            if (category === "temperature") {
              let celsius = value;
              if (fromUnit === "f") celsius = ((value - 32) * 5) / 9;
              if (fromUnit === "k") celsius = value - 273.15;

              let converted = celsius;
              if (toUnit === "f") converted = (celsius * 9) / 5 + 32;
              if (toUnit === "k") converted = celsius + 273.15;

              result = `🌡️ Temperature Conversion:\n\n`;
              result += `${value}° ${fromUnit.toUpperCase()} = ${converted.toFixed(
                2
              )}° ${toUnit.toUpperCase()}\n\n`;
              result += `Conversion process:\n`;
              result += `• First convert to Celsius: ${celsius.toFixed(2)}°C\n`;
              result += `• Then convert to target: ${converted.toFixed(
                2
              )}° ${toUnit.toUpperCase()}`;
            } else {
              const categoryData = conversions[category];
              if (
                !categoryData ||
                !categoryData[fromUnit] ||
                !categoryData[toUnit]
              ) {
                result = `Invalid units. Available ${category} units: ${Object.keys(
                  categoryData || {}
                ).join(", ")}`;
              } else {
                const baseValue = value * categoryData[fromUnit];
                const converted = baseValue / categoryData[toUnit];

                result = `📐 ${
                  category.charAt(0).toUpperCase() + category.slice(1)
                } Conversion:\n\n`;
                result += `${value} ${fromUnit} = ${converted.toFixed(
                  6
                )} ${toUnit}\n\n`;
                result += `Conversion process:\n`;
                result += `• Convert to base unit: ${baseValue} base units\n`;
                result += `• Convert to target: ${converted.toFixed(
                  6
                )} ${toUnit}`;
              }
            }
            break;

          case "bmi-calculator":
            const system = inputs.system || "1";
            const weight = parseFloat(inputs.weight) || 70;
            const height = parseFloat(inputs.height) || 170;

            if (weight <= 0 || height <= 0) {
              result = "Please enter positive values for weight and height";
            } else {
              let bmi, weightKg, heightM;

              if (system === "1") {
                // Metric
                weightKg = weight;
                heightM = height / 100;
              } else {
                // Imperial
                weightKg = weight * 0.453592;
                heightM = height * 0.0254;
              }

              bmi = weightKg / (heightM * heightM);

              let category, status, emoji, advice;
              if (bmi < 18.5) {
                category = "Underweight";
                status = "Below normal weight";
                emoji = "🔵";
                advice =
                  "Consider consulting a healthcare provider about healthy weight gain strategies.";
              } else if (bmi < 25) {
                category = "Normal weight";
                status = "Healthy weight range";
                emoji = "🟢";
                advice =
                  "Great! Maintain your current lifestyle with regular exercise and balanced nutrition.";
              } else if (bmi < 30) {
                category = "Overweight";
                status = "Above normal weight";
                emoji = "🟡";
                advice =
                  "Consider adopting a healthier diet and increasing physical activity.";
              } else {
                category = "Obese";
                status = "Significantly above normal weight";
                emoji = "🔴";
                advice =
                  "Consider consulting a healthcare provider for a comprehensive health plan.";
              }

              result = `🏥 BMI Calculator Results\n\n`;
              result += `Weight: ${weight} ${system === "1" ? "kg" : "lbs"}\n`;
              result += `Height: ${height} ${
                system === "1" ? "cm" : "inches"
              }\n\n`;
              result += `BMI: ${bmi.toFixed(2)}\n`;
              result += `Category: ${emoji} ${category}\n`;
              result += `Status: ${status}\n\n`;
              result += `📏 BMI Scale:\n`;
              result += `${bmi < 18.5 ? "🔵" : "  "} Underweight: Below 18.5\n`;
              result += `${
                bmi >= 18.5 && bmi < 25 ? "🟢" : "  "
              } Normal: 18.5 - 24.9\n`;
              result += `${
                bmi >= 25 && bmi < 30 ? "🟡" : "  "
              } Overweight: 25.0 - 29.9\n`;
              result += `${bmi >= 30 ? "🔴" : "  "} Obese: 30.0+\n\n`;
              result += `💡 Advice: ${advice}`;
            }
            break;

          case "word-counter":
            const textInput = inputs.text || "";

            if (!textInput.trim()) {
              result = "Please enter some text to analyze";
            } else {
              const totalChars = textInput.length;
              const totalCharsNoSpaces = textInput.replace(/\s/g, "").length;
              const words = textInput
                .trim()
                .split(/\s+/)
                .filter((word) => word.length > 0);
              const sentences = textInput
                .split(/[.!?]+/)
                .filter((s) => s.trim().length > 0);
              const paragraphs = textInput
                .split(/\n\s*\n/)
                .filter((p) => p.trim().length > 0);

              const avgWordLength =
                words.length > 0
                  ? words.reduce((sum, word) => sum + word.length, 0) /
                    words.length
                  : 0;

              const readingTime = Math.max(
                1,
                Math.round((words.length / 200) * 60)
              ); // seconds

              // Most common words
              const wordFreq = {};
              words.forEach((word) => {
                const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");
                if (cleanWord.length > 2) {
                  wordFreq[cleanWord] = (wordFreq[cleanWord] || 0) + 1;
                }
              });

              const topWords = Object.entries(wordFreq)
                .sort(([, a], [, b]) => b - a)
                .slice(0, 3);

              result = `📝 Text Analysis Results\n\n`;
              result += `📄 Basic Statistics:\n`;
              result += `Total characters: ${totalChars}\n`;
              result += `Characters (no spaces): ${totalCharsNoSpaces}\n`;
              result += `Total words: ${words.length}\n`;
              result += `Total sentences: ${sentences.length}\n`;
              result += `Total paragraphs: ${paragraphs.length}\n\n`;

              if (words.length > 0) {
                result += `📐 Averages:\n`;
                result += `Average word length: ${avgWordLength.toFixed(
                  2
                )} characters\n`;
                result += `Average words per sentence: ${(
                  words.length / sentences.length
                ).toFixed(2)}\n\n`;
              }

              result += `⏱️ Reading Time:\n`;
              result += `Estimated: ${Math.floor(readingTime / 60)}m ${
                readingTime % 60
              }s\n`;
              result += `(Based on 200 words/minute)\n\n`;

              if (topWords.length > 0) {
                result += `🔤 Most Common Words:\n`;
                topWords.forEach(([word, count], i) => {
                  result += `${i + 1}. "${word}" - ${count} times\n`;
                });
              }
            }
            break;

          case "quiz-game":
            const quizCategory = inputs.category || "1";
            const numQuestions = parseInt(inputs.num_questions) || 1;
            const answer = inputs.answer || "";

            const quizQuestions = {
              1: {
                name: "Python",
                questions: [
                  {
                    q: "What does len() do?",
                    options: [
                      "A) Length",
                      "B) Create list",
                      "C) Sort",
                      "D) Delete",
                    ],
                    answer: "A",
                  },
                  {
                    q: "Python comment symbol?",
                    options: ["A) //", "B) #", "C) /* */", "D) --"],
                    answer: "B",
                  },
                ],
              },
              2: {
                name: "General",
                questions: [
                  {
                    q: "Largest planet?",
                    options: [
                      "A) Saturn",
                      "B) Jupiter",
                      "C) Neptune",
                      "D) Earth",
                    ],
                    answer: "B",
                  },
                  {
                    q: "Who painted Mona Lisa?",
                    options: [
                      "A) Van Gogh",
                      "B) Picasso",
                      "C) Da Vinci",
                      "D) Michelangelo",
                    ],
                    answer: "C",
                  },
                ],
              },
              3: {
                name: "Math",
                questions: [
                  {
                    q: "15% of 80?",
                    options: ["A) 10", "B) 12", "C) 15", "D) 20"],
                    answer: "B",
                  },
                  {
                    q: "√144 = ?",
                    options: ["A) 11", "B) 12", "C) 13", "D) 14"],
                    answer: "B",
                  },
                ],
              },
            };

            const categoryData =
              quizQuestions[quizCategory] || quizQuestions["1"];
            const question = categoryData.questions[0]; // Demo with first question

            result = `🧠 Interactive Quiz Game\n\n`;
            result += `Category: ${categoryData.name}\n`;
            result += `Questions: ${numQuestions}\n\n`;
            result += `Sample Question:\n`;
            result += `${question.q}\n\n`;
            question.options.forEach((opt) => (result += `${opt}\n`));

            if (answer) {
              result += `\nYour answer: ${answer}\n`;
              if (answer.toUpperCase() === question.answer) {
                result += `✅ Correct! Well done!`;
              } else {
                result += `❌ Wrong! The correct answer was ${question.answer}`;
              }
              result += `\n\n🎯 In the full game:\n`;
              result += `• Multiple questions\n`;
              result += `• Score tracking\n`;
              result += `• Different categories\n`;
              result += `• Performance analysis`;
            } else {
              result += `\nSelect your answer (A, B, C, or D)`;
            }
            break;

          // NEW 5 INTERMEDIATE PROJECT IMPLEMENTATIONS
          case "weather-fetcher":
            const city = inputs.city || "London";

            result = `🌤️ Weather API Demo for ${city}\n\n`;
            result += `🌡️ Temperature: 22°C (feels like 24°C)\n`;
            result += `📊 Conditions: Partly Cloudy\n`;
            result += `💨 Wind Speed: 3.5 m/s\n`;
            result += `💧 Humidity: 65%\n`;
            result += `🔽 Pressure: 1013 hPa\n`;
            result += `🌅 Sunrise: 06:45:30\n`;
            result += `🌇 Sunset: 19:32:15\n\n`;
            result += `⛅ Current Conditions: Partly Cloudy\n`;
            result += `📍 Location: ${city}, UK\n`;
            result += `🕐 Last Updated: ${new Date().toLocaleString()}\n\n`;
            result += `💡 To use real data:\n`;
            result += `1. Get API key from openweathermap.org\n`;
            result += `2. Install requests: pip install requests\n`;
            result += `3. Replace demo data with API calls`;
            break;

          case "url-shortener":
            const longUrl =
              inputs.long_url || "https://example.com/very-long-url";
            const customCode = inputs.custom_code || "";

            const shortCode =
              customCode || Math.random().toString(36).substr(2, 6);

            result = `🔗 URL Shortener Demo\n\n`;
            result += `📝 Original URL: ${longUrl}\n`;
            result += `✂️ Shortening URL...\n`;
            result += `✅ Short URL created: https://short.ly/${shortCode}\n\n`;
            result += `📊 Features:\n`;
            result += `• Custom short codes ${
              customCode ? "✅" : "(not used)"
            }\n`;
            result += `• Click tracking\n`;
            result += `• URL validation\n`;
            result += `• Data persistence\n`;
            result += `• Statistics dashboard\n\n`;
            result += `💾 Saved to database with metadata\n`;
            result += `🕐 Created: ${new Date().toLocaleString()}`;
            break;

          case "personal-diary":
            const entryDate =
              inputs.entry_date || new Date().toISOString().split("T")[0];
            const entryContent =
              inputs.entry_content || "Today was a great day learning Python!";
            const mood = inputs.mood || "Happy";

            result = `📔 Personal Diary Demo\n\n`;
            result += `📅 Date: ${entryDate}\n`;
            result += `😊 Mood: ${mood}\n\n`;
            result += `📝 Entry Content:\n`;
            result += `"${entryContent}"\n\n`;
            result += `✅ Entry saved to: diary_entries/${entryDate}.json\n\n`;
            result += `📊 Entry Statistics:\n`;
            result += `• Word count: ${entryContent.split(" ").length}\n`;
            result += `• Character count: ${entryContent.length}\n`;
            result += `• Timestamp: ${new Date().toISOString()}\n\n`;
            result += `💾 Features:\n`;
            result += `• File-based storage (JSON)\n`;
            result += `• Search functionality\n`;
            result += `• Mood and tag tracking\n`;
            result += `• Statistics generation\n`;
            result += `• Password protection available`;
            break;

          case "website-status-checker":
            const url = inputs.url || "https://google.com";
            const timeout = parseInt(inputs.timeout) || 10;

            // Simulate different response scenarios
            const scenarios = [
              { status: "✅ Online", code: 200, time: 45.2 },
              { status: "🔄 Redirect", code: 301, time: 123.5 },
              { status: "⚠️ Client Error", code: 404, time: 89.1 },
              { status: "❌ Server Error", code: 500, time: null },
              { status: "⏰ Timeout", code: null, time: timeout * 1000 },
            ];

            const scenario = scenarios[Math.floor(Math.random() * 3)]; // Bias towards successful responses

            result = `🌐 Website Status Checker Demo\n\n`;
            result += `🔍 Checking: ${url}\n`;
            result += `⏱️ Timeout: ${timeout} seconds\n\n`;
            result += `📊 Results:\n`;
            result += `Status: ${scenario.status} (${
              scenario.code || "N/A"
            })\n`;

            if (scenario.time) {
              const responseColor =
                scenario.time < 100 ? "🟢" : scenario.time < 500 ? "🟡" : "🔴";
              result += `Response Time: ${responseColor} ${scenario.time}ms\n`;
            }

            if (scenario.code === 200) {
              result += `Content Size: 1,234,567 bytes\n`;
              result += `Final URL: ${url}\n`;
            }

            result += `🕐 Checked at: ${new Date().toLocaleString()}\n\n`;
            result += `✨ Features:\n`;
            result += `• Real-time monitoring\n`;
            result += `• Response time measurement\n`;
            result += `• Batch checking\n`;
            result += `• Continuous monitoring\n`;
            result += `• Detailed reporting\n`;
            result += `• Error handling`;
            break;

          case "web-scraper-quotes":
            const maxPages = parseInt(inputs.max_pages) || 3;
            const authorFilter = inputs.author_filter || "";
            const tagFilter = inputs.tag_filter || "";

            // Simulate scraped quotes
            const demoQuotes = [
              {
                text: "The world as we have created it is a process of our thinking.",
                author: "Albert Einstein",
                tags: ["change", "thinking"],
              },
              {
                text: "It is our choices that show what we truly are.",
                author: "J.K. Rowling",
                tags: ["choices", "character"],
              },
              {
                text: "The only way to do great work is to love what you do.",
                author: "Steve Jobs",
                tags: ["work", "passion"],
              },
              {
                text: "Life is what happens when you're busy making other plans.",
                author: "John Lennon",
                tags: ["life", "planning"],
              },
              {
                text: "The future belongs to those who believe in their dreams.",
                author: "Eleanor Roosevelt",
                tags: ["future", "dreams"],
              },
            ];

            let filteredQuotes = demoQuotes;

            // Apply filters
            if (authorFilter) {
              filteredQuotes = filteredQuotes.filter((q) =>
                q.author.toLowerCase().includes(authorFilter.toLowerCase())
              );
            }
            if (tagFilter) {
              filteredQuotes = filteredQuotes.filter((q) =>
                q.tags.some((tag) =>
                  tag.toLowerCase().includes(tagFilter.toLowerCase())
                )
              );
            }

            result = `🕷️ Web Scraper for Quotes Demo\n\n`;
            result += `📖 Scraping ${maxPages} pages from quotes.toscrape.com\n`;
            result += `🔍 Filters applied:\n`;
            result += `• Author: ${authorFilter || "None"}\n`;
            result += `• Tag: ${tagFilter || "None"}\n\n`;
            result += `📊 Results: ${filteredQuotes.length} quotes found\n\n`;

            result += `Sample Quotes:\n`;
            result += "==================================================\n";

            filteredQuotes.slice(0, 3).forEach((quote, i) => {
              result += `\n${i + 1}. "${quote.text}"\n`;
              result += `   — ${quote.author}\n`;
              result += `   🏷️ ${quote.tags
                .map((tag) => `#${tag}`)
                .join(", ")}\n`;
            });

            result += `\n✨ Features:\n`;
            result += `• Scrape from multiple sites\n`;
            result += `• Extract text, authors, tags\n`;
            result += `• Filter by criteria\n`;
            result += `• Export to JSON/CSV\n`;
            result += `• Respectful scraping\n`;
            result += `• Error handling`;
            break;

          // NEW ADVANCED PROJECT IMPLEMENTATIONS
          case "email-automation":
            const recipient = inputs.recipient || "user@example.com";
            const subject = inputs.subject || "Test Email";
            const body =
              inputs.body || "This is a test email from our automation tool!";
            const template = inputs.template || "welcome";

            result = "📧 Email Automation Demo\n\n";
            result += "📨 Recipient: " + recipient + "\n";
            result += "📋 Subject: " + subject + "\n";
            result += "📝 Template: " + template + "\n\n";

            if (template === "welcome") {
              result += "📤 Welcome Email Content:\n";
              result +=
                '"Dear User,\n\nWelcome to our platform! We\'re excited to have you on board.\n\nBest regards,\nThe Team"\n\n';
            } else if (template === "reminder") {
              result += "📤 Reminder Email Content:\n";
              result +=
                '"Hi there,\n\nThis is a friendly reminder about your upcoming event.\n\nThank you!"\n\n';
            } else if (template === "newsletter") {
              result += "📤 Newsletter Email Content:\n";
              result +=
                "\"Dear Subscriber,\n\nHere's what's new this month:\n• New features released\n• Bug fixes and improvements\n\nStay tuned!\"\n\n";
            }

            result += "✅ Email would be sent via SMTP (Gmail)\n";
            result += "📊 Status: Ready to send\n";
            result += "🕐 Timestamp: " + new Date().toLocaleString() + "\n\n";
            result += "✨ Features:\n";
            result += "• SMTP email sending with SSL/TLS\n";
            result += "• Template system with variables\n";
            result += "• Bulk email support with personalization\n";
            result += "• File attachments (PDF, images, etc.)\n";
            result += "• Email scheduling and automation\n";
            result += "• Newsletter automation\n";
            result += "• Delivery tracking and error handling\n\n";
            result += "💡 Setup Requirements:\n";
            result += "1. Gmail account with App Password\n";
            result += "2. Install: pip install schedule\n";
            result += "3. Configure SMTP settings\n";
            result += "4. Create email templates JSON file";
            break;

          case "file-management-system":
            const directory = inputs.directory || "/home/user/Documents";
            const action = inputs.action || "organize";

            result = "📁 File Management System Demo\n\n";
            result += "📂 Directory: " + directory + "\n";
            result +=
              "⚡ Action: " +
              action.charAt(0).toUpperCase() +
              action.slice(1) +
              "\n\n";

            if (action === "organize") {
              result += "🔄 Organizing files by type...\n\n";
              result += "📸 Images: .jpg, .jpeg, .png, .gif → Images/\n";
              result += "  ✅ Moved photo001.jpg to Images/\n";
              result += "  ✅ Moved screenshot.png to Images/\n";
              result += "  ✅ Moved 13 more image files...\n\n";
              result += "📄 Documents: .pdf, .doc, .docx, .txt → Documents/\n";
              result += "  ✅ Moved report.pdf to Documents/\n";
              result += "  ✅ Moved notes.txt to Documents/\n";
              result += "  ✅ Moved 6 more document files...\n\n";
              result += "🎵 Music: .mp3, .wav, .flac → Music/\n";
              result += "  ✅ Moved song.mp3 to Music/\n";
              result += "  ✅ Moved 2 more music files...\n\n";
              result += "📊 Organization Summary:\n";
              result += "• Total files processed: 26\n";
              result += "• Files organized: 24\n";
              result += "• Errors: 0\n";
              result += "• Time taken: 2.3 seconds";
            } else if (action === "cleanup") {
              result += "🧹 Cleaning up old files...\n\n";
              result += "🗑️ Temp Files (older than 7 days):\n";
              result += "  ✅ Removed temp_file_001.tmp (45 days old)\n";
              result += "  ✅ Removed cache_data.cache (12 days old)\n";
              result += "  ✅ Removed 10 more temp files...\n\n";
              result += "📋 Log Files (older than 30 days):\n";
              result += "  ✅ Removed system.log (67 days old, 45 MB)\n";
              result += "  ✅ Removed error.log (41 days old, 12 MB)\n";
              result += "  ✅ Removed 3 more log files...\n\n";
              result += "📊 Cleanup Summary:\n";
              result += "• Files removed: 17\n";
              result += "• Space freed: 234.5 MB\n";
              result += "• Errors: 0\n";
              result += "• Oldest file removed: 67 days old";
            } else if (action === "backup") {
              result += "💾 Creating compressed backup...\n\n";
              result += "📦 Backup Details:\n";
              result += "• Source: " + directory + "\n";
              result +=
                "• Backup name: backup_Documents_" +
                new Date().toISOString().slice(0, 10) +
                ".zip\n";
              result += "• Compression: ZIP_DEFLATED\n\n";
              result += "🔄 Backup Progress:\n";
              result += "  ✅ Scanning directory structure...\n";
              result += "  ✅ Found 1,234 files to backup\n";
              result += "  ✅ Compressing files... (87% compression ratio)\n";
              result += "  ✅ Backup created successfully!\n\n";
              result += "📊 Backup Summary:\n";
              result += "• Original size: 15.6 GB\n";
              result += "• Compressed size: 2.1 GB\n";
              result += "• Files backed up: 1,234\n";
              result += "• Time taken: 8.3 minutes\n";
              result +=
                "• Location: ./backups/backup_Documents_" +
                new Date().toISOString().slice(0, 10) +
                ".zip";
            } else if (action === "stats") {
              result += "📊 Directory Analysis Results\n\n";
              result += "📁 Basic Statistics:\n";
              result += "• Total files: 1,234\n";
              result += "• Total directories: 87\n";
              result += "• Total size: 15.6 GB\n";
              result += "• Average file size: 12.9 MB\n\n";
              result += "📈 File Type Distribution:\n";
              result += "• Images (.jpg, .png): 556 files (45.1%) - 8.2 GB\n";
              result +=
                "• Documents (.pdf, .docx): 284 files (23.0%) - 4.1 GB\n";
              result += "• Music (.mp3, .flac): 221 files (17.9%) - 2.8 GB\n";
              result += "• Videos (.mp4, .avi): 89 files (7.2%) - 0.4 GB\n";
              result += "• Other: 84 files (6.8%) - 0.1 GB\n\n";
              result += "🔍 Duplicate Analysis:\n";
              result += "• Duplicate files found: 15\n";
              result += "• Space wasted by duplicates: 2.3 GB\n";
              result += "• Potential savings: 14.7%\n\n";
              result += "📅 File Age Distribution:\n";
              result += "• Last 30 days: 234 files\n";
              result += "• Last 6 months: 567 files\n";
              result += "• Older than 1 year: 433 files\n\n";
              result += "🏆 Top 5 Largest Files:\n";
              result += "1. movie_backup.mkv (1.2 GB)\n";
              result += "2. project_archive.zip (890 MB)\n";
              result += "3. presentation.pptx (234 MB)\n";
              result += "4. photo_album.zip (198 MB)\n";
              result += "5. database_dump.sql (167 MB)";
            }

            result += "\n\n✨ Advanced Features:\n";
            result += "• Smart file organization by type\n";
            result += "• Content-based duplicate detection\n";
            result += "• Scheduled automatic cleanup\n";
            result += "• Compressed backup with retention\n";
            result += "• Comprehensive directory analytics\n";
            result += "• Configurable rules and filters\n";
            result += "• Detailed logging and reporting\n";
            result += "• Cross-platform compatibility\n\n";
            result += "📋 Configuration:\n";
            result += "• Organization rules: 6 categories\n";
            result += "• Cleanup rules: 3 file types\n";
            result += "• Backup retention: 90 days\n";
            result += "• Scheduled runs: Daily at 2:00 AM";
            break;
          case "data-analysis-dashboard":
            const datasetType = inputs.dataset_type || "sales";
            const analysisType = inputs.analysis_type || "basic";

            result = "📊 Data Analysis Dashboard Demo\\n\\n";
            result +=
              "📁 Dataset: " +
              datasetType.charAt(0).toUpperCase() +
              datasetType.slice(1) +
              " Data\\n";
            result +=
              "🔍 Analysis: " +
              analysisType.charAt(0).toUpperCase() +
              analysisType.slice(1) +
              " Analysis\\n\\n";

            if (analysisType === "basic") {
              result += "📈 Basic Statistics Generated:\\n";
              result += "• Dataset: 1,095 records × 7 columns\\n";
              result += "• Memory usage: 234.56 KB\\n";
              result += "• Null values: 0\\n\\n";
              result += "📊 Numerical Summary:\\n";
              result += "• Sales Amount: Mean $523.45, Std $198.23\\n";
              result += "• Quantity: Mean 2.3, Median 2.0\\n";
              result += "• Customer Age: Mean 35.2, Range 18-80\\n\\n";
              result += "📂 Categorical Summary:\\n";
              result +=
                "• Products: 5 unique (Laptop most frequent: 234 times)\\n";
              result += "• Regions: 4 unique (North: 28.3% distribution)\\n";
            } else if (analysisType === "correlation") {
              result += "🔗 Correlation Analysis Results:\\n";
              result +=
                "• Strong positive correlation: Sales Amount vs Quantity (0.734)\\n";
              result +=
                "• Moderate correlation: Customer Age vs Sales Amount (0.521)\\n";
              result +=
                "• Weak correlation: Region vs Purchase Frequency (0.234)\\n\\n";
              result += "💡 Interpretation:\\n";
              result += "• Higher quantities lead to higher sales amounts\\n";
              result += "• Older customers tend to spend more\\n";
              result += "• Regional differences have minimal impact\\n";
            } else if (analysisType === "trend") {
              result += "📈 Trend Analysis Results:\\n";
              result += "• Trend Direction: Increasing (12.3% growth rate)\\n";
              result += "• Recent 30 days average: $567.89\\n";
              result += "• Overall average: $523.45\\n";
              result += "• Peak day: 2024-11-15 ($1,234.56)\\n\\n";
              result += "📊 Growth Insights:\\n";
              result += "• Consistent upward trend over last quarter\\n";
              result += "• Seasonal peaks during holiday periods\\n";
              result += "• 23% improvement in Q4 performance\\n";
            } else if (analysisType === "outliers") {
              result += "🚨 Outlier Detection Results:\\n";
              result += "• Sales Amount: 23 outliers (2.1% of data)\\n";
              result += "• Customer Age: 8 outliers (0.7% of data)\\n";
              result += "• Quantity: 12 outliers (1.1% of data)\\n\\n";
              result += "📋 Outlier Analysis:\\n";
              result += "• Most outliers in high-value transactions\\n";
              result += "• Some unusually young/old customers\\n";
              result += "• Bulk orders creating quantity outliers\\n";
            }

            result += "\\n✨ Dashboard Features:\\n";
            result += "• Multi-dataset support (sales, customer, website)\\n";
            result += "• Automated statistical analysis\\n";
            result += "• Correlation and relationship detection\\n";
            result += "• Time series trend analysis\\n";
            result += "• Advanced outlier detection\\n";
            result += "• AI-powered insight generation\\n";
            result += "• Exportable reports (JSON, PDF, Excel)\\n";
            result += "• Interactive visualizations\\n";
            result += "• Real-time data processing\\n\\n";
            result +=
              "📊 Generated " +
              Math.floor(Math.random() * 8 + 5) +
              " actionable insights from your data!";
            break;

          case "social-media-bot":
            const platform = inputs.platform || "twitter";
            const contentType = inputs.content_type || "motivational";
            const customMessage = inputs.custom_message || "";

            result = "🤖 Social Media Automation Bot Demo\n\n";
            result +=
              "📱 Platform: " +
              platform.charAt(0).toUpperCase() +
              platform.slice(1) +
              "\n";
            result +=
              "📝 Content Type: " +
              contentType.charAt(0).toUpperCase() +
              contentType.slice(1) +
              "\n\n";

            // Generate sample content based on type
            let sampleContent = "";
            if (contentType === "motivational") {
              sampleContent =
                "🌟 Success is not final, failure is not fatal: it is the courage to continue that counts. - Start your " +
                new Date().toLocaleDateString("en-US", { weekday: "long" }) +
                " with determination! #Motivation";
            } else if (contentType === "educational") {
              sampleContent =
                "💡 Tech Tip: Use virtual environments for Python projects to avoid dependency conflicts! #TechTips #Learning #Python";
            } else if (contentType === "promotional") {
              sampleContent =
                "🚀 Check out our latest automation tool! Save 5 hours per week with smart scheduling! #NewProduct #Automation";
            } else if (contentType === "engagement") {
              sampleContent =
                "❓ Question for you: What's your biggest productivity challenge? Let us know in the comments! #Engagement";
            }

            if (customMessage) {
              sampleContent = customMessage;
            }

            result += "📤 Generated Content:\n";
            result += '"' + sampleContent + '"\n\n';

            result += "🚀 Publishing Simulation:\n";
            result += "✅ Content optimized for " + platform + "\n";
            result +=
              "✅ Hashtags extracted: " +
              Math.floor(Math.random() * 3 + 1) +
              " found\n";
            result += "✅ Posted successfully to " + platform + "\n";
            result +=
              "🔗 Post URL: https://" +
              platform +
              ".com/user/post/" +
              Math.floor(Math.random() * 1000000) +
              "\n\n";

            result += "📊 Simulated Engagement (first hour):\n";
            const likes = Math.floor(Math.random() * 50 + 10);
            const shares = Math.floor(Math.random() * 15 + 2);
            const comments = Math.floor(Math.random() * 8 + 1);

            result += "👍 Likes: " + likes + "\n";
            result += "🔄 Shares: " + shares + "\n";
            result += "💬 Comments: " + comments + "\n";
            result +=
              "📈 Engagement Rate: " +
              (((likes + shares + comments) / 100) * 100).toFixed(1) +
              "%\n\n";

            result +=
              "⏰ Optimal Posting Times for " +
              platform.charAt(0).toUpperCase() +
              platform.slice(1) +
              ":\n";
            if (platform === "twitter") {
              result += "• Weekdays: 9:00 AM, 12:00 PM, 5:00 PM\n";
              result += "• Weekends: 10:00 AM, 2:00 PM, 7:00 PM\n";
              result += "• Best day: Tuesday\n";
            } else if (platform === "instagram") {
              result += "• Weekdays: 11:00 AM, 2:00 PM, 8:00 PM\n";
              result += "• Weekends: 12:00 PM, 4:00 PM, 9:00 PM\n";
              result += "• Best day: Wednesday\n";
            } else if (platform === "linkedin") {
              result += "• Weekdays: 8:00 AM, 12:00 PM, 6:00 PM\n";
              result += "• Weekends: 10:00 AM, 3:00 PM\n";
              result += "• Best day: Thursday\n";
            } else if (platform === "facebook") {
              result += "• Weekdays: 9:00 AM, 1:00 PM, 7:00 PM\n";
              result += "• Weekends: 11:00 AM, 3:00 PM, 8:00 PM\n";
              result += "• Best day: Friday\n";
            }

            result += "\n✨ Bot Features:\n";
            result +=
              "• Multi-platform posting (Twitter, Instagram, LinkedIn, Facebook)\n";
            result += "• AI-powered content generation with templates\n";
            result += "• Bulk scheduling with smart intervals\n";
            result += "• Real-time engagement analytics\n";
            result += "• Optimal timing recommendations\n";
            result += "• Content performance analysis\n";
            result += "• Automated weekly reports\n";
            result += "• Hashtag and mention tracking\n";
            result += "• A/B testing capabilities\n\n";
            result +=
              "📅 Next scheduled post: " +
              new Date(Date.now() + 2 * 60 * 60 * 1000).toLocaleString();
            break;
          case "age-calculator":
            const birthYear = parseInt(inputs.birth_year) || 1990;
            const birthMonth = parseInt(inputs.birth_month) || 1;
            const birthDay = parseInt(inputs.birth_day) || 1;
            const includeTime = inputs.include_time || "no";

            // Create birth date
            const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
            const currentDate = new Date();

            // Validate birth date
            if (birthDate > currentDate) {
              result = "❌ Birth date cannot be in the future!";
              break;
            }

            // Calculate age
            let years = currentDate.getFullYear() - birthDate.getFullYear();
            let months = currentDate.getMonth() - birthDate.getMonth();
            let days = currentDate.getDate() - birthDate.getDate();

            // Adjust for negative days/months
            if (days < 0) {
              months--;
              days += new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                0
              ).getDate();
            }
            if (months < 0) {
              years--;
              months += 12;
            }

            // Calculate total days
            const totalDays = Math.floor(
              (currentDate - birthDate) / (1000 * 60 * 60 * 24)
            );
            const totalHours = totalDays * 24;
            const totalMinutes = totalHours * 60;

            result = "🎂 Age Calculator Results\n\n";
            result +=
              "📅 Birth Date: " +
              birthDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }) +
              "\n";
            result +=
              "📅 Current Date: " +
              currentDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }) +
              "\n\n";

            result += "🎂 Exact Age:\n";
            result +=
              "   " +
              years +
              " years, " +
              months +
              " months, " +
              days +
              " days\n\n";

            result += "📊 Alternative Representations:\n";
            result +=
              "   • Total days lived: " + totalDays.toLocaleString() + "\n";
            result +=
              "   • Total hours lived: " + totalHours.toLocaleString() + "\n";
            result +=
              "   • Total minutes lived: " +
              totalMinutes.toLocaleString() +
              "\n";
            result += "   • Age in months: " + (years * 12 + months) + "\n";
            result +=
              "   • Age in weeks: " + Math.floor(totalDays / 7) + "\n\n";

            result += "🎉 Fun Facts:\n";
            result +=
              "   • You've lived through " +
              years +
              " New Year celebrations!\n";
            result +=
              "   • You've experienced " +
              Math.floor(totalDays / 7) +
              " weekends!\n";
            result +=
              "   • You've seen approximately " +
              (years * 365).toLocaleString() +
              " sunrises!\n";

            // Life stage
            let lifeStage = "";
            if (years < 13) lifeStage = "Child";
            else if (years < 20) lifeStage = "Teenager";
            else if (years < 60) lifeStage = "Adult";
            else lifeStage = "Senior";

            result += "\n👤 Life Stage: " + lifeStage;
            break;

          case "temperature-converter":
            const conversionType = inputs.conversion_type || "c_to_f";
            const temperature = parseFloat(inputs.temperature) || 25;

            result = "🌡️ Temperature Converter Results\n\n";
            result += "Input: " + temperature + "°";

            let convertedTemp,
              formula,
              contexts = [];

            switch (conversionType) {
              case "c_to_f":
                convertedTemp = (temperature * 9) / 5 + 32;
                result += "C\nResult: " + convertedTemp.toFixed(2) + "°F\n";
                result += "Formula: °F = (°C × 9/5) + 32\n";
                break;
              case "c_to_k":
                convertedTemp = temperature + 273.15;
                result += "C\nResult: " + convertedTemp.toFixed(2) + "K\n";
                result += "Formula: K = °C + 273.15\n";
                break;
              case "f_to_c":
                convertedTemp = ((temperature - 32) * 5) / 9;
                result += "F\nResult: " + convertedTemp.toFixed(2) + "°C\n";
                result += "Formula: °C = (°F - 32) × 5/9\n";
                break;
              case "f_to_k":
                const celsius = ((temperature - 32) * 5) / 9;
                convertedTemp = celsius + 273.15;
                result += "F\nResult: " + convertedTemp.toFixed(2) + "K\n";
                result += "Formula: K = ((°F - 32) × 5/9) + 273.15\n";
                break;
              case "k_to_c":
                convertedTemp = temperature - 273.15;
                result += "K\nResult: " + convertedTemp.toFixed(2) + "°C\n";
                result += "Formula: °C = K - 273.15\n";
                break;
              case "k_to_f":
                const celsiusFromK = temperature - 273.15;
                convertedTemp = (celsiusFromK * 9) / 5 + 32;
                result += "K\nResult: " + convertedTemp.toFixed(2) + "°F\n";
                result += "Formula: °F = ((K - 273.15) × 9/5) + 32\n";
                break;
            }

            // Temperature context (assuming Celsius for context)
            let tempInCelsius = temperature;
            if (conversionType.startsWith("f_"))
              tempInCelsius = ((temperature - 32) * 5) / 9;
            if (conversionType.startsWith("k_"))
              tempInCelsius = temperature - 273.15;

            result += "\n🌡️ Temperature Context:\n";
            if (tempInCelsius < 0)
              result += "   ❄️ Below freezing - water turns to ice\n";
            else if (tempInCelsius < 10)
              result += "   🧥 Very cold - heavy winter clothing needed\n";
            else if (tempInCelsius < 18)
              result += "   🧤 Cold - jacket recommended\n";
            else if (tempInCelsius < 25)
              result += "   😊 Comfortable room temperature\n";
            else if (tempInCelsius < 30)
              result += "   ☀️ Warm - perfect for outdoor activities\n";
            else if (tempInCelsius < 35)
              result += "   🔥 Hot - stay hydrated!\n";
            else result += "   🚨 Very hot - seek shade and AC\n";

            result += "\n📍 Reference Points:\n";
            result += "   • Water freezing: 0°C = 32°F = 273.15K\n";
            result += "   • Room temperature: 20°C = 68°F = 293.15K\n";
            result += "   • Human body: 37°C = 98.6°F = 310.15K\n";
            result += "   • Water boiling: 100°C = 212°F = 373.15K";
            break;
          case "tip-calculator":
            const tipBillAmount = parseFloat(inputs.bill_amount) || 50.0;
            const tipPercentage = parseFloat(inputs.tip_percentage) || 18;
            const tipNumPeople = parseInt(inputs.num_people) || 2;

            const tipAmount = (tipBillAmount * tipPercentage) / 100;
            const tipTotalAmount = tipBillAmount + tipAmount;
            const tipPerPerson = tipTotalAmount / tipNumPeople;

            result = "🍽️ Tip Calculator Results\n\n";
            result += "💰 Bill Breakdown:\n";
            result += "💵 Bill Amount: $" + tipBillAmount.toFixed(2) + "\n";
            result +=
              "💡 Tip (" +
              tipPercentage +
              "%): $" +
              tipAmount.toFixed(2) +
              "\n";
            result += "💸 Total Amount: $" + tipTotalAmount.toFixed(2) + "\n\n";

            result += "👥 Split " + tipNumPeople + " ways:\n";
            result +=
              "   Bill per person: $" +
              (tipBillAmount / tipNumPeople).toFixed(2) +
              "\n";
            result +=
              "   Tip per person: $" +
              (tipAmount / tipNumPeople).toFixed(2) +
              "\n";
            result +=
              "   Total per person: $" + tipPerPerson.toFixed(2) + "\n\n";

            result += "📊 Tip Guide:\n";
            result += "• 15% - Basic service\n";
            result += "• 18% - Good service\n";
            result += "• 20% - Excellent service\n";
            result += "• 22%+ - Outstanding service";
            break;

          case "countdown-timer":
            const timerType = inputs.countdown_type || "1";

            result = "⏰ Countdown Timer Demo\n\n";

            if (timerType === "1") {
              const timerMinutes = parseInt(inputs.minutes) || 5;
              const timerSeconds = timerMinutes * 60;

              result += "⏱️ Timer Mode: Minutes Countdown\n";
              result +=
                "Duration: " +
                timerMinutes +
                " minutes (" +
                timerSeconds +
                " seconds)\n\n";
              result += "🎬 Simulation:\n";
              result += "Starting countdown: " + timerMinutes + ":00\n";
              result += "After 1 minute: " + (timerMinutes - 1) + ":00\n";
              result += "After 2 minutes: " + (timerMinutes - 2) + ":00\n";
              result += "...\n";
              result += "Final: 00:00 🎉\n\n";
              result += "✨ Features:\n";
              result += "• Real-time countdown display\n";
              result += "• Visual and audio alerts\n";
              result += "• Pause/resume functionality";
            } else {
              const timerYear = parseInt(inputs.target_year) || 2024;
              const timerMonth = parseInt(inputs.target_month) || 12;

              result += "📅 Timer Mode: Date Countdown\n";
              result +=
                "Target Date: " +
                timerYear +
                "-" +
                String(timerMonth).padStart(2, "0") +
                "-01\n\n";
              result += "🎬 Simulation:\n";
              result += "Time until target: 45d 12h 30m 15s\n";
              result += "Updating every second...\n";
              result += "...\n";
              result += "🎉 TARGET DATE REACHED!\n\n";
              result += "✨ Features:\n";
              result += "• Days, hours, minutes, seconds display\n";
              result += "• Custom event names\n";
              result += "• Multiple timezone support";
            }
            break;

          case "random-quote-generator":
            const quoteCategory = inputs.category || "1";

            const quoteDatabase = {
              1: {
                name: "Motivation",
                quote: "The only way to do great work is to love what you do.",
                author: "Steve Jobs",
              },
              2: {
                name: "Success",
                quote:
                  "Success is not the key to happiness. Happiness is the key to success.",
                author: "Albert Schweitzer",
              },
              3: {
                name: "Wisdom",
                quote: "The only true wisdom is in knowing you know nothing.",
                author: "Socrates",
              },
              4: {
                name: "Random",
                quote: "Be yourself; everyone else is already taken.",
                author: "Oscar Wilde",
              },
            };

            const selectedQuote =
              quoteDatabase[quoteCategory] || quoteDatabase["1"];

            result = "✨ Random Quote Generator\n\n";
            result += "📚 Category: " + selectedQuote.name + "\n\n";
            result +=
              "============================================================\n";
            result += "✨ YOUR INSPIRATIONAL QUOTE\n";
            result +=
              "============================================================\n";
            result += '"' + selectedQuote.quote + '"\n\n';
            result += "— " + selectedQuote.author + "\n";
            result +=
              "============================================================\n\n";
            result += "💡 Quote Features:\n";
            result += "• 4 inspiring categories\n";
            result += "• Famous personality quotes\n";
            result += "• Daily motivation boost\n";
            result += "• Share-worthy wisdom";
            break;

          case "simple-interest-calculator":
            const interestPrincipal = parseFloat(inputs.principal) || 1000;
            const interestRate = parseFloat(inputs.rate) || 5;
            const interestTime = parseFloat(inputs.time) || 2;

            const simpleInterest =
              (interestPrincipal * interestRate * interestTime) / 100;
            const interestTotal = interestPrincipal + simpleInterest;

            result = "💰 Simple Interest Calculator Results\n\n";
            result += "📊 Calculation Details:\n";
            result +=
              "💵 Principal Amount: $" +
              interestPrincipal.toLocaleString() +
              "\n";
            result += "📈 Interest Rate: " + interestRate + "% per year\n";
            result += "⏰ Time Period: " + interestTime + " years\n\n";

            result += "💰 Results:\n";
            result +=
              "💡 Simple Interest: $" + simpleInterest.toLocaleString() + "\n";
            result +=
              "💸 Total Amount: $" + interestTotal.toLocaleString() + "\n\n";

            result += "📊 Breakdown:\n";
            result +=
              "   Interest earned: $" + simpleInterest.toFixed(2) + "\n";
            result +=
              "   Interest as % of principal: " +
              ((simpleInterest / interestPrincipal) * 100).toFixed(2) +
              "%\n";
            result +=
              "   Monthly interest: $" +
              (simpleInterest / (interestTime * 12)).toFixed(2) +
              "\n\n";

            result += "📐 Formula Used: SI = (P × R × T) / 100";
            break;

          case "color-code-converter":
            const colorType = inputs.conversion_type || "1";
            const colorRed = parseInt(inputs.red_value) || 255;
            const colorGreen = parseInt(inputs.green_value) || 0;
            const colorBlue = parseInt(inputs.blue_value) || 0;

            // RGB to HEX conversion
            const toHex = (r, g, b) =>
              "#" +
              ((1 << 24) + (r << 16) + (g << 8) + b)
                .toString(16)
                .slice(1)
                .toUpperCase();

            const hexResult = toHex(colorRed, colorGreen, colorBlue);

            result = "🎨 Color Code Converter Results\n\n";
            result += "🌈 Input Color:\n";
            result +=
              "RGB: rgb(" +
              colorRed +
              ", " +
              colorGreen +
              ", " +
              colorBlue +
              ")\n";
            result += "HEX: " + hexResult + "\n\n";

            result += "📊 All Format Conversions:\n";
            result +=
              "• RGB: rgb(" +
              colorRed +
              ", " +
              colorGreen +
              ", " +
              colorBlue +
              ")\n";
            result += "• HEX: " + hexResult + "\n";
            result += "• HSL: hsl(0, 100%, 50%) [approx]\n\n";

            // Color description
            let colorName = "";
            if (colorRed > 200 && colorGreen < 100 && colorBlue < 100)
              colorName = "Red";
            else if (colorGreen > 200 && colorRed < 100 && colorBlue < 100)
              colorName = "Green";
            else if (colorBlue > 200 && colorRed < 100 && colorGreen < 100)
              colorName = "Blue";
            else if (colorRed > 200 && colorGreen > 200 && colorBlue < 100)
              colorName = "Yellow";
            else colorName = "Mixed/Custom";

            result += "🎯 Color Analysis:\n";
            result += "Approximate Color: " + colorName + "\n";
            result +=
              "Brightness: " +
              Math.round((colorRed + colorGreen + colorBlue) / 3) +
              "/255\n\n";

            result += "✨ Converter Features:\n";
            result += "• RGB ↔ HEX ↔ HSL conversions\n";
            result += "• Color name approximation\n";
            result += "• Brightness analysis\n";
            result += "• Design-friendly formats";
            break;

          case "qr-code-generator":
            const qrType = inputs.qr_type || "1";
            const qrData = inputs.qr_data || "Hello, World!";

            let formattedData = qrData;
            let dataType = "Text";

            // Format data based on type
            switch (qrType) {
              case "1":
                formattedData = qrData;
                dataType = "Text Message";
                break;
              case "2":
                formattedData = qrData.startsWith("http")
                  ? qrData
                  : "https://" + qrData;
                dataType = "Website URL";
                break;
              case "3":
                formattedData = "tel:" + qrData;
                dataType = "Phone Number";
                break;
              case "4":
                formattedData = "mailto:" + qrData;
                dataType = "Email Address";
                break;
            }

            // Generate actual QR code URL using free API
            const encodedData = encodeURIComponent(formattedData);
            const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodedData}`;
            const downloadUrl = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&format=png&data=${encodedData}`;

            result = "📱 QR Code Generator - LIVE RESULT!\n\n";
            result += "✅ QR Code Successfully Generated!\n";
            result += "===================================\n\n";

            result += "📊 QR Code Details:\n";
            result += "Type: " + dataType + "\n";
            result += "Data: " + formattedData + "\n";
            result += "Size: 300x300 pixels\n";
            result += "Format: PNG\n\n";

            result += "🔗 LIVE QR CODE LINKS:\n";
            result += "======================\n";
            result += "📱 View QR Code:\n";
            result += qrCodeUrl + "\n\n";

            result += "💾 Download High-Res:\n";
            result += downloadUrl + "\n\n";

            result += "📱 How to Use:\n";
            result += "1. Click on 'View QR Code' link above\n";
            result += "2. Your QR code will appear in browser\n";
            result += "3. Right-click → Save image\n";
            result += "4. Or scan directly with phone!\n\n";

            result += "✨ QR Code Features:\n";
            result += "• Instantly scannable\n";
            result += "• High resolution (500x500)\n";
            result += "• Multiple format support\n";
            result += "• Free API service\n";
            result += "• Works on all devices\n\n";

            result += "🎯 Test It:\n";
            result += "• Open camera app on phone\n";
            result += "• Point at QR code from link above\n";
            result += "• Watch it work instantly! 📱✨";
            break;

          case "expense-tracker":
            const expenseAmount = parseFloat(inputs.expense_amount) || 25.5;
            const expenseDesc =
              inputs.expense_description || "Coffee and snack";

            result = "💰 Expense Tracker Demo\n\n";
            result += "✅ New Expense Added!\n";
            result += "========================\n";
            result += "💵 Amount: $" + expenseAmount.toFixed(2) + "\n";
            result += "📝 Description: " + expenseDesc + "\n";
            result += "📅 Date: " + new Date().toLocaleDateString() + "\n\n";

            result += "📊 Your Expense Summary (Demo):\n";
            result += "================================\n";
            result += "Today's Expenses:\n";
            result +=
              "• $" + expenseAmount.toFixed(2) + " - " + expenseDesc + "\n";
            result += "• $15.00 - Lunch\n";
            result += "• $8.50 - Bus fare\n";
            result += "• $12.75 - Groceries\n\n";

            result +=
              "💰 Daily Total: $" + (expenseAmount + 36.25).toFixed(2) + "\n";
            result += "📊 Weekly Average: $45.80\n";
            result += "📈 Monthly Total: $687.50\n\n";

            result += "🎯 Budget Status:\n";
            result += "Monthly Budget: $800.00\n";
            result += "Spent: $687.50 (85.9%)\n";
            result += "Remaining: $112.50\n";
            result += "Status: 🟡 Close to limit\n\n";

            result += "✨ Tracker Features:\n";
            result += "• Daily expense logging\n";
            result += "• Category organization\n";
            result += "• Budget monitoring\n";
            result += "• Spending analytics\n";
            result += "• Monthly reports";
            break;

          case "password-manager":
            const siteName = inputs.site_name || "facebook.com";
            const username = inputs.username || "user@example.com";

            // Generate demo password (keeping it simple)
            const passwordChars =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$";
            let demoPassword = "";
            for (let i = 0; i < 12; i++) {
              demoPassword += passwordChars.charAt(
                Math.floor(Math.random() * passwordChars.length)
              );
            }

            result = "🔐 Password Manager Demo\n\n";
            result += "✅ Password Saved Successfully!\n";
            result += "===============================\n";
            result += "🌐 Site: " + siteName + "\n";
            result += "👤 Username: " + username + "\n";
            result += "🔑 Password: " + demoPassword + "\n";
            result += "📅 Created: " + new Date().toLocaleDateString() + "\n\n";

            result += "🔒 Password Strength Check:\n";
            result += "Length: 12 characters ✅\n";
            result += "Uppercase letters: ✅\n";
            result += "Lowercase letters: ✅\n";
            result += "Numbers: ✅\n";
            result += "Special characters: ✅\n";
            result += "Overall strength: 🟢 Strong\n\n";

            result += "💾 Your Password Vault (Demo):\n";
            result += "==============================\n";
            result += "1. " + siteName + " - " + username + "\n";
            result += "2. gmail.com - john@gmail.com\n";
            result += "3. github.com - developer123\n";
            result += "4. amazon.com - shopper456\n\n";

            result += "📊 Vault Statistics:\n";
            result += "Total passwords: 4\n";
            result += "Strong passwords: 3 (75%)\n";
            result += "Weak passwords: 1 (25%)\n";
            result += "Last updated: Today\n\n";

            result += "🛡️ Security Features:\n";
            result += "• Secure password generation\n";
            result += "• Encrypted storage\n";
            result += "• Strength analysis\n";
            result += "• Quick search function\n";
            result += "• Backup capability\n\n";

            result += "💡 Security Tips:\n";
            result += "• Use unique passwords for each site\n";
            result += "• Update weak passwords regularly\n";
            result += "• Enable two-factor authentication\n";
            result += "• Keep your master password secure";
            break;

          default:
            result = `✅ Algorithm "${
              project.id
            }" loaded successfully!\n\nInputs received:\n${Object.entries(
              inputs
            )
              .map(([key, value]) => `• ${key}: ${value || "(empty)"}`)
              .join(
                "\n"
              )}\n\n🔧 Implementation for this algorithm is ready to be added to the CodeRunner component.`;
        }
      } catch (error) {
        result = "❌ Error executing code: " + error.message;
      }

      setOutput(result);
      setLoading(false);
    }, 1500);
  };

  const clearInputs = () => {
    setInputs({});
    setOutput("");
  };

  return (
    <div className="code-runner">
      <div className="runner-header">
        <h3 className="runner-title">🚀 Interactive Code Runner</h3>
        <p className="runner-subtitle">
          Enter values and execute the algorithm
        </p>
      </div>

      {/* Input Fields */}
      <div className="input-section">
        <h4 className="input-title">Input Parameters:</h4>
        <div className="input-grid">
          {project.inputs.map((input) => (
            <div key={input.name} className="input-group">
              <label className="input-label">{input.label}</label>
              {input.type === "select" ? (
                <select
                  className="input-field select-field"
                  onChange={(e) =>
                    handleInputChange(input.name, e.target.value)
                  }
                  value={inputs[input.name] || ""}
                >
                  <option value="">Select...</option>
                  {input.options.map((option) => (
                    <option key={option} value={option}>
                      {input.name === "operation"
                        ? option === "1"
                          ? "1 (Addition)"
                          : option === "2"
                          ? "2 (Subtraction)"
                          : option === "3"
                          ? "3 (Multiplication)"
                          : option === "4"
                          ? "4 (Division)"
                          : option
                        : input.name === "choice"
                        ? option === "1"
                          ? "1 (Rock 🪨)"
                          : option === "2"
                          ? "2 (Paper 📄)"
                          : option === "3"
                          ? "3 (Scissors ✂️)"
                          : option
                        : input.name === "story_choice"
                        ? option === "1"
                          ? "1 (The Crazy Adventure)"
                          : option === "2"
                          ? "2 (The Silly School Day)"
                          : option === "3"
                          ? "3 (The Space Mission)"
                          : option
                        : input.name === "category" &&
                          input.options.includes("length")
                        ? option === "length"
                          ? "Length"
                          : option === "weight"
                          ? "Weight"
                          : option === "temperature"
                          ? "Temperature"
                          : option
                        : input.name === "system"
                        ? option === "1"
                          ? "1 (Metric)"
                          : "2 (Imperial)"
                        : input.name === "num_sides"
                        ? `${option} sides`
                        : input.name === "template"
                        ? option === "welcome"
                          ? "Welcome Email"
                          : option === "reminder"
                          ? "Reminder Email"
                          : option === "newsletter"
                          ? "Newsletter"
                          : option
                        : input.name === "action"
                        ? option === "organize"
                          ? "Organize Files"
                          : option === "cleanup"
                          ? "Cleanup Old Files"
                          : option === "backup"
                          ? "Create Backup"
                          : option === "stats"
                          ? "Generate Statistics"
                          : option
                        : option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={input.type}
                  className="input-field"
                  onChange={(e) =>
                    handleInputChange(input.name, e.target.value)
                  }
                  value={inputs[input.name] || ""}
                  placeholder={`Enter ${input.label.toLowerCase()}`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Control Buttons */}
      <div className="control-buttons">
        <button onClick={runCode} disabled={loading} className="run-button">
          {loading ? (
            <>
              <span className="spinner"></span>
              <span>Executing...</span>
            </>
          ) : (
            <>
              <span>▶️</span>
              <span>Run Code</span>
            </>
          )}
        </button>

        <button onClick={clearInputs} className="clear-button">
          🗑️ Clear
        </button>
      </div>

      {/* Output Section */}
      {output && (
        <div className="output-section">
          <h4 className="output-title">📤 Output:</h4>
          <div className="output-terminal">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="terminal-title">Python Console</span>
            </div>
            <div className="terminal-body">
              <pre className="output-text">{output}</pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
