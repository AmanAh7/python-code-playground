import Link from "next/link";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="status-dot"></span>
            <span>Live Interactive Environment</span>
          </div>

          <h1 className="hero-title">
            <span className="title-gradient">Python Code</span>
            <br />
            <span className="title-white">Playground</span>
          </h1>

          <p className="hero-description">
            Explore interactive Python algorithms, analyze code logic, and test
            implementations in a modern development environment.
          </p>

          <div className="hero-features">
            <div className="feature-item">
              <span>🐍</span>
              <span>Python 3.x</span>
            </div>
            <div className="feature-item">
              <span>⚡</span>
              <span>Real-time Execution</span>
            </div>
            <div className="feature-item">
              <span>📊</span>
              <span>Algorithm Analysis</span>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="projects-section">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Interactive implementations of fundamental algorithms
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card">
              <div className="card-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>

                <div className="card-tags">
                  <span className="tag tag-python">Python</span>
                  <span className="tag tag-algorithm">Algorithm</span>
                  <span className="tag tag-interactive">Interactive</span>
                </div>

                <Link href={`/projects/${project.id}`} className="card-button">
                  <span>Explore Code</span>
                  <span className="button-arrow">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="stats-section">
          <div className="stat-item">
            <div className="stat-number">{projects.length}</div>
            <div className="stat-label">Projects</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Interactive</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">Live</div>
            <div className="stat-label">Execution</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">Open</div>
            <div className="stat-label">Source</div>
          </div>
        </div>
      </div>
    </div>
  );
}
