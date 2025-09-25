"use client";

import { projects } from "@/data/projects";
import CodeRunner from "@/components/CodeRunner";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return (
      <div className="error-page">
        <div className="error-content">
          <div className="error-icon">🔍</div>
          <h1>Project Not Found</h1>
          <p>The project you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/" className="back-button">
            <span>←</span>
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    );
  }

  // Copy function
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(project.code);

      // Visual feedback
      const button = document.querySelector(".copy-btn");
      const originalText = button.innerHTML;
      button.innerHTML = "<span>✅</span><span>Copied!</span>";

      setTimeout(() => {
        button.innerHTML = originalText;
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = project.code;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }
  };

  // Download function
  const handleDownload = () => {
    try {
      const element = document.createElement("a");
      const file = new Blob([project.code], { type: "text/plain" });
      element.href = URL.createObjectURL(file);
      element.download = `${project.id}.py`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      URL.revokeObjectURL(element.href);

      // Visual feedback
      const button = document.querySelector(".download-btn");
      const originalText = button.innerHTML;
      button.innerHTML = "<span>✅</span><span>Downloaded!</span>";

      setTimeout(() => {
        button.innerHTML = originalText;
      }, 2000);
    } catch (err) {
      console.error("Failed to download:", err);
    }
  };

  // Get time complexity for project
  const getTimeComplexity = (projectId) => {
    const complexities = {
      calculator: "O(1)",
      "odd-even": "O(1)",
      "prime-number": "O(√n)",
      "bubble-sort": "O(n²)",
      "binary-search": "O(log n)",
      fibonacci: "O(n)",
      "linear-search": "O(n)",
      "selection-sort": "O(n²)",
      "palindrome-checker": "O(n)",
      "factorial-calculator": "O(n)",
      "password-generator": "O(n)",
      "gcd-calculator": "O(log n)",
      "number-guessing": "O(1)",
      "rock-paper-scissors": "O(1)",
      "mad-libs": "O(n)",
    };
    return complexities[projectId] || "O(n)";
  };

  // Get time complexity description
  const getTimeComplexityDesc = (projectId) => {
    const descriptions = {
      calculator: "Constant time - operations are independent of input size",
      "odd-even": "Constant time - single modulo operation",
      "prime-number": "Square root time - checks divisors up to √n",
      "bubble-sort": "Quadratic time - nested loops for comparisons",
      "binary-search": "Logarithmic time - divides search space in half",
      fibonacci: "Linear time - iterative approach",
      "linear-search": "Linear time - may need to check every element",
      "selection-sort": "Quadratic time - nested loops for finding minimum",
      "palindrome-checker": "Linear time - checks each character once",
      "factorial-calculator": "Linear time - multiplies from 1 to n",
      "password-generator": "Linear time - generates n characters",
      "gcd-calculator": "Logarithmic time - Euclidean algorithm efficiency",
      "number-guessing": "Constant time - simple comparison operations",
      "rock-paper-scissors": "Constant time - simple game logic",
      "mad-libs": "Linear time - processes string length",
    };
    return descriptions[projectId] || "Time depends on input size";
  };

  // Get space complexity
  const getSpaceComplexity = (projectId) => {
    const complexities = {
      calculator: "O(1)",
      "odd-even": "O(1)",
      "prime-number": "O(1)",
      "bubble-sort": "O(1)",
      "binary-search": "O(1)",
      fibonacci: "O(n)",
      "linear-search": "O(1)",
      "selection-sort": "O(1)",
      "palindrome-checker": "O(n)",
      "factorial-calculator": "O(1)",
      "password-generator": "O(n)",
      "gcd-calculator": "O(1)",
      "number-guessing": "O(1)",
      "rock-paper-scissors": "O(1)",
      "mad-libs": "O(n)",
    };
    return complexities[projectId] || "O(1)";
  };

  // Get space complexity description
  const getSpaceComplexityDesc = (projectId) => {
    const descriptions = {
      calculator: "Constant space - uses fixed variables",
      "odd-even": "Constant space - single variable storage",
      "prime-number": "Constant space - few variables for checking",
      "bubble-sort": "Constant space - sorts in place",
      "binary-search": "Constant space - uses index pointers only",
      fibonacci: "Linear space - stores sequence in array",
      "linear-search": "Constant space - uses index variable only",
      "selection-sort": "Constant space - sorts in place",
      "palindrome-checker": "Linear space - stores cleaned string",
      "factorial-calculator": "Constant space - iterative calculation",
      "password-generator": "Linear space - stores generated password",
      "gcd-calculator": "Constant space - uses few variables",
      "number-guessing": "Constant space - stores game state",
      "rock-paper-scissors": "Constant space - simple variables",
      "mad-libs": "Linear space - stores story and user input",
    };
    return (
      descriptions[projectId] ||
      "Uses fixed amount of memory regardless of input size"
    );
  };

  // Get use cases for project
  const getUseCases = (projectId) => {
    const useCases = {
      calculator: [
        "Basic arithmetic",
        "Mathematical operations",
        "User interfaces",
      ],
      "odd-even": [
        "Number validation",
        "Input processing",
        "Mathematical concepts",
      ],
      "prime-number": [
        "Number theory",
        "Mathematical validation",
        "Algorithm optimization",
      ],
      "bubble-sort": [
        "Educational purposes",
        "Small datasets",
        "Algorithm learning",
      ],
      "binary-search": [
        "Sorted arrays",
        "Database queries",
        "Efficient searching",
      ],
      fibonacci: [
        "Mathematical sequences",
        "Pattern analysis",
        "Algorithm study",
      ],
      "linear-search": [
        "Unsorted data",
        "Simple algorithms",
        "Sequential processing",
      ],
      "selection-sort": [
        "Educational sorting",
        "Algorithm comparison",
        "Data organization",
      ],
      "palindrome-checker": [
        "Text validation",
        "String processing",
        "Pattern recognition",
      ],
      "factorial-calculator": [
        "Mathematical calculations",
        "Recursive algorithms",
        "Number theory",
      ],
      "password-generator": [
        "Security applications",
        "Random generation",
        "User authentication",
      ],
      "gcd-calculator": [
        "Mathematical operations",
        "Number theory",
        "Algorithm efficiency",
      ],
      "number-guessing": [
        "Game development",
        "Random numbers",
        "User interaction",
      ],
      "rock-paper-scissors": [
        "Game logic",
        "Decision making",
        "Probability learning",
      ],
      "mad-libs": [
        "Text processing",
        "String manipulation",
        "Creative applications",
      ],
    };
    return (
      useCases[projectId] || [
        "Algorithm learning",
        "Programming practice",
        "Problem solving",
      ]
    );
  };

  return (
    <div className="project-page">
      {/* Enhanced Header */}
      <div className="project-header">
        <div className="header-bg-pattern"></div>
        <div className="header-content">
          {/* Breadcrumb Navigation */}
          <nav className="breadcrumb-nav">
            <Link href="/" className="breadcrumb-link">
              <span>🏠</span>
              <span>Home</span>
            </Link>
            <span className="breadcrumb-separator">→</span>
            <Link href="/projects" className="breadcrumb-link">
              <span>📁</span>
              <span>Projects</span>
            </Link>
            <span className="breadcrumb-separator">→</span>
            <span className="breadcrumb-current">{project.title}</span>
          </nav>

          {/* Project Info */}
          <div className="project-info">
            <div className="project-badge">
              <span>Python Algorithm</span>
            </div>

            <h1 className="project-title">{project.title}</h1>
            <p className="project-description">{project.description}</p>

            {/* Quick Stats */}
            <div className="project-stats">
              <div className="stat-item">
                <span className="stat-icon">📋</span>
                <div className="stat-content">
                  <span className="stat-number">{project.logic.length}</span>
                  <span className="stat-label">Steps</span>
                </div>
              </div>
              <div className="stat-item">
                <span className="stat-icon">⚡</span>
                <div className="stat-content">
                  <span className="stat-number">
                    {project.code.split("\n").length}
                  </span>
                  <span className="stat-label">Lines</span>
                </div>
              </div>
              <div className="stat-item">
                <span className="stat-icon">🎯</span>
                <div className="stat-content">
                  <span className="stat-number">
                    {getTimeComplexity(project.id)}
                  </span>
                  <span className="stat-label">Complexity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="project-content">
        <div className="content-wrapper">
          {/* Interactive Runner */}
          <section className="runner-section">
            <div className="section-header">
              <h2 className="section-title">
                <span>Interactive Code Runner</span>
              </h2>
              <p className="section-subtitle">
                Test the algorithm with your own inputs
              </p>
            </div>
            <CodeRunner project={project} />
          </section>

          {/* Code Display */}
          <section className="code-section">
            <div className="section-header">
              <h2 className="section-title">
                <span>Python Implementation</span>
              </h2>
              <div className="code-actions">
                <button
                  className="action-btn copy-btn"
                  onClick={handleCopy}
                  title="Copy Code"
                >
                  <span>📋</span>
                  <span>Copy</span>
                </button>
                <button
                  className="action-btn download-btn"
                  onClick={handleDownload}
                  title="Download"
                >
                  <span>💾</span>
                  <span>Download</span>
                </button>
              </div>
            </div>

            <div className="code-container">
              <div className="code-header">
                <div className="code-title">
                  <span className="file-icon">📄</span>
                  <span>{project.id}.py</span>
                </div>
                <div className="code-meta">
                  <span className="code-lines">
                    {project.code.split("\n").length} lines
                  </span>
                </div>
              </div>

              <div className="code-editor">
                <div className="line-numbers">
                  {project.code.split("\n").map((_, index) => (
                    <span key={index} className="line-number">
                      {index + 1}
                    </span>
                  ))}
                </div>
                <pre className="code-block">
                  <code className="python-code">{project.code}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* Algorithm Logic */}
          <section className="logic-section">
            <div className="section-header">
              <h2 className="section-title">
                <span>Algorithm Logic & Flow</span>
              </h2>
              <p className="section-subtitle">
                Step-by-step breakdown of how the algorithm works
              </p>
            </div>

            <div className="logic-container">
              <div className="logic-steps">
                {project.logic.map((step, index) => (
                  <div key={index} className="logic-step">
                    <div className="step-marker">
                      <span className="step-number">{index + 1}</span>
                    </div>
                    <div className="step-content">
                      <div className="step-text">{step}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Technical Details */}
          <section className="details-section">
            <div className="section-header">
              <h2 className="section-title">
                <span>Technical Analysis</span>
              </h2>
            </div>

            <div className="details-grid">
              <div className="detail-card">
                <div className="card-header">
                  <span className="card-icon">⏱️</span>
                  <h3>Time Complexity</h3>
                </div>
                <div className="card-content">
                  <div className="complexity-value">
                    {getTimeComplexity(project.id)}
                  </div>
                  <p className="complexity-desc">
                    {getTimeComplexityDesc(project.id)}
                  </p>
                </div>
              </div>

              <div className="detail-card">
                <div className="card-header">
                  <span className="card-icon">💾</span>
                  <h3>Space Complexity</h3>
                </div>
                <div className="card-content">
                  <div className="complexity-value">
                    {getSpaceComplexity(project.id)}
                  </div>
                  <p className="complexity-desc">
                    {getSpaceComplexityDesc(project.id)}
                  </p>
                </div>
              </div>

              <div className="detail-card">
                <div className="card-header">
                  <span className="card-icon">🎯</span>
                  <h3>Use Cases</h3>
                </div>
                <div className="card-content">
                  <div className="use-cases">
                    <div className="case-tags">
                      {getUseCases(project.id).map((useCase, index) => (
                        <span key={index} className="case-tag">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="detail-card">
                <div className="card-header">
                  <span className="card-icon">🔧</span>
                  <h3>Key Features</h3>
                </div>
                <div className="card-content">
                  <ul className="feature-list">
                    <li>Interactive execution</li>
                    <li>Step-by-step visualization</li>
                    <li>Error handling included</li>
                    <li>Performance metrics</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <section className="navigation-section">
            <div className="nav-container">
              <Link href="/projects" className="nav-button secondary">
                <span>←</span>
                <span>All Projects</span>
              </Link>
              <Link href="/" className="nav-button primary">
                <span>🏠</span>
                <span>Home</span>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
