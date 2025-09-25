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

          default:
            result = "Unknown project";
        }
      } catch (error) {
        result = "Error executing code";
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
