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
                  <span className="stat-number">O(n)</span>
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

          {/* Technical Details - Rest of your existing code... */}
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
                    {project.id === "calculator"
                      ? "O(1)"
                      : project.id === "bubble-sort"
                      ? "O(n²)"
                      : project.id === "binary-search"
                      ? "O(log n)"
                      : project.id === "fibonacci"
                      ? "O(n)"
                      : "O(√n)"}
                  </div>
                  <p className="complexity-desc">
                    {project.id === "calculator"
                      ? "Constant time - operations are independent of input size"
                      : project.id === "bubble-sort"
                      ? "Quadratic time - nested loops for comparisons"
                      : project.id === "binary-search"
                      ? "Logarithmic time - divides search space in half"
                      : project.id === "fibonacci"
                      ? "Linear time - iterative approach"
                      : "Square root time - checks divisors up to √n"}
                  </p>
                </div>
              </div>

              <div className="detail-card">
                <div className="card-header">
                  <span className="card-icon">💾</span>
                  <h3>Space Complexity</h3>
                </div>
                <div className="card-content">
                  <div className="complexity-value">O(1)</div>
                  <p className="complexity-desc">
                    Constant space - uses fixed amount of memory regardless of
                    input size
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
                      {project.id === "calculator" && (
                        <>
                          <span className="case-tag">Basic arithmetic</span>
                          <span className="case-tag">
                            Mathematical operations
                          </span>
                          <span className="case-tag">User interfaces</span>
                        </>
                      )}
                      {project.id === "bubble-sort" && (
                        <>
                          <span className="case-tag">Educational purposes</span>
                          <span className="case-tag">Small datasets</span>
                          <span className="case-tag">Algorithm learning</span>
                        </>
                      )}
                      {project.id === "binary-search" && (
                        <>
                          <span className="case-tag">Sorted arrays</span>
                          <span className="case-tag">Database queries</span>
                          <span className="case-tag">Efficient searching</span>
                        </>
                      )}
                      {project.id === "fibonacci" && (
                        <>
                          <span className="case-tag">
                            Mathematical sequences
                          </span>
                          <span className="case-tag">Pattern analysis</span>
                          <span className="case-tag">Algorithm study</span>
                        </>
                      )}
                      {(project.id === "odd-even" ||
                        project.id === "prime-number") && (
                        <>
                          <span className="case-tag">Number theory</span>
                          <span className="case-tag">
                            Mathematical validation
                          </span>
                          <span className="case-tag">Input processing</span>
                        </>
                      )}
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
