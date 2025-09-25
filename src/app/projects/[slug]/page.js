import { projects } from "@/data/projects";
import CodeRunner from "@/components/CodeRunner";
import Link from "next/link";

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.id === params.slug);

  if (!project) {
    return (
      <div className="error-page">
        <div className="error-content">
          <h1>Project Not Found</h1>
          <p>The project you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/" className="back-button">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-page">
      {/* Header */}
      <div className="project-header">
        <div className="header-nav">
          <Link href="/" className="nav-link">
            ← Home
          </Link>
          <span className="nav-separator">/</span>
          <Link href="/projects" className="nav-link">
            Projects
          </Link>
          <span className="nav-separator">/</span>
          <span className="nav-current">{project.title}</span>
        </div>

        <div className="header-content">
          <div className="project-badge">
            <span className="badge-icon">🐍</span>
            <span>Python Algorithm</span>
          </div>

          <h1 className="project-title">{project.title}</h1>
          <p className="project-description">{project.description}</p>

          <div className="project-meta">
            <div className="meta-item">
              <span className="meta-icon">📋</span>
              <span>{project.logic.length} Algorithm Steps</span>
            </div>
            <div className="meta-item">
              <span className="meta-icon">⚡</span>
              <span>Interactive Execution</span>
            </div>
            <div className="meta-item">
              <span className="meta-icon">🔍</span>
              <span>Real-time Analysis</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="project-content">
        <div className="content-grid">
          {/* Left Column - Code & Logic */}
          <div className="code-section">
            <div className="section-header">
              <h2 className="section-title">
                <span className="title-icon">💻</span>
                Python Implementation
              </h2>
              <div className="code-stats">
                <span className="stat">
                  Lines: {project.code.split("\n").length}
                </span>
                <span className="stat">Complexity: O(n)</span>
              </div>
            </div>

            {/* Code Display */}
            <div className="code-container">
              <div className="code-header">
                <div className="code-title">
                  <span className="file-icon">📄</span>
                  <span>{project.id}.py</span>
                </div>
                <div className="code-actions">
                  <button className="action-btn" title="Copy Code">
                    📋
                  </button>
                  <button className="action-btn" title="Download">
                    💾
                  </button>
                </div>
              </div>

              <div className="code-editor">
                <pre className="code-block">
                  <code className="python-code">{project.code}</code>
                </pre>
              </div>
            </div>

            {/* Algorithm Logic */}
            <div className="logic-section">
              <div className="logic-header">
                <h3 className="logic-title">
                  <span className="title-icon">🧠</span>
                  Algorithm Logic & Flow
                </h3>
              </div>

              <div className="logic-steps">
                {project.logic.map((step, index) => (
                  <div key={index} className="logic-step">
                    <div className="step-marker">
                      <span className="step-number">{index + 1}</span>
                    </div>
                    <div className="step-content">
                      <p className="step-text">{step}</p>
                    </div>
                    {index < project.logic.length - 1 && (
                      <div className="step-connector"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Runner */}
          <div className="runner-section">
            <div className="section-header">
              <h2 className="section-title">
                <span className="title-icon">🚀</span>
                Live Code Execution
              </h2>
              <p className="section-subtitle">
                Test the algorithm with your own inputs
              </p>
            </div>

            <CodeRunner project={project} />

            {/* Additional Info */}
            <div className="info-cards">
              <div className="info-card">
                <div className="card-icon">⏱️</div>
                <div className="card-content">
                  <h4>Time Complexity</h4>
                  <p>O(1) - O(√n)</p>
                </div>
              </div>

              <div className="info-card">
                <div className="card-icon">💾</div>
                <div className="card-content">
                  <h4>Space Complexity</h4>
                  <p>O(1) constant</p>
                </div>
              </div>

              <div className="info-card">
                <div className="card-icon">🎯</div>
                <div className="card-content">
                  <h4>Use Cases</h4>
                  <p>Basic algorithms, Learning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static params for all projects
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}
