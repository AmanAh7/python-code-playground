import Link from "next/link";
import ProjectSearch from "@/components/ProjectSearch";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="home-container">
      {/* Enhanced Hero Section */}
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
            Explore {projects.length} interactive Python algorithms, analyze
            code logic, and test implementations in a modern development
            environment.
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

          {/* Enhanced Hero Stats */}
          <div className="hero-stats">
            <div className="stat-highlight">
              <span className="stat-number">{projects.length}</span>
              <span className="stat-label">Interactive Algorithms</span>
            </div>
            <div className="stat-highlight">
              <span className="stat-number">
                {
                  [...new Set(projects.map((p) => p.category || "General"))]
                    .length
                }
              </span>
              <span className="stat-label">Categories</span>
            </div>
            <div className="stat-highlight">
              <span className="stat-number">100%</span>
              <span className="stat-label">Mobile Responsive</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects Preview */}
      <div className="featured-section">
        <div className="section-header">
          <h2 className="section-title">🌟 Featured Projects</h2>
          <p className="section-subtitle">
            Popular algorithms to get you started
          </p>
        </div>

        <div className="featured-grid">
          {projects.slice(0, 3).map((project, index) => (
            <div key={project.id} className="featured-card">
              <div className="card-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>

                <div className="card-meta">
                  <div className="category-badge">
                    📂 {project.category || "General"}
                  </div>
                  <div className="difficulty-badge difficulty-{project.difficulty?.toLowerCase() || 'beginner'}">
                    {project.difficulty || "Beginner"}
                  </div>
                </div>

                <div className="card-tags">
                  {project.tags?.slice(0, 3).map((tag) => (
                    <span key={tag} className="tag">
                      #{tag}
                    </span>
                  )) || [
                    <span key="python" className="tag tag-python">
                      Python
                    </span>,
                    <span key="algorithm" className="tag tag-algorithm">
                      Algorithm
                    </span>,
                    <span key="interactive" className="tag tag-interactive">
                      Interactive
                    </span>,
                  ]}
                </div>

                <Link href={`/projects/${project.id}`} className="card-button">
                  <span>🚀 Explore Algorithm</span>
                  <span className="button-arrow">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-section">
          <Link href="#all-projects" className="view-all-button">
            <span>🔍 View All {projects.length} Projects</span>
            <span className="button-arrow">↓</span>
          </Link>
        </div>
      </div>

      {/* All Projects with Search */}
      <div id="all-projects" className="projects-section">
        <ProjectSearch projects={projects} />
      </div>

      {/* Enhanced Stats */}
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
  );
}
