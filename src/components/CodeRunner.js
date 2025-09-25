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

          default:
            result = `Algorithm "${project.id}" execution not implemented yet`;
        }
      } catch (error) {
        result = "Error executing code: " + error.message;
      }

      setOutput(result);
      setLoading(false);
    }, 1500); // 1.5 second delay for realistic feel
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
                      {option === "1"
                        ? "1 (Addition)"
                        : option === "2"
                        ? "2 (Subtraction)"
                        : option === "3"
                        ? "3 (Multiplication)"
                        : option === "4"
                        ? "4 (Division)"
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
