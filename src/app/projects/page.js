import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="projects-page">
      <div className="page-header">
        <div className="header-content">
          <Link href="/" className="back-link">
            ← Back to Home
          </Link>

          <h1 className="page-title">All Projects</h1>
          <p className="page-subtitle">
            Explore all Python implementations with interactive code execution
          </p>

          <div className="page-stats">
            <span className="stat-badge">{projects.length} Projects</span>
            <span className="stat-badge">100% Interactive</span>
            <span className="stat-badge">Live Execution</span>
          </div>
        </div>
      </div>

      <div className="projects-container">
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={project.id} className="project-item">
              <div className="project-info">
                <div className="project-header">
                  <span className="project-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="project-name">{project.title}</h2>
                </div>

                <p className="project-desc">{project.description}</p>

                <div className="project-details">
                  <div className="logic-preview">
                    <h4 className="logic-title">Algorithm Steps:</h4>
                    <ul className="logic-list">
                      {project.logic.slice(0, 3).map((step, i) => (
                        <li key={i} className="logic-item">
                          <span className="step-number">{i + 1}</span>
                          <span className="step-text">{step}</span>
                        </li>
                      ))}
                      {project.logic.length > 3 && (
                        <li className="logic-item more">
                          <span className="more-text">
                            +{project.logic.length - 3} more steps
                          </span>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                <div className="project-tags">
                  <span className="tag tag-python">Python</span>
                  <span className="tag tag-algorithm">Algorithm</span>
                  <span className="tag tag-interactive">Interactive</span>
                </div>
              </div>

              <div className="project-actions">
                <Link href={`/projects/${project.id}`} className="view-button">
                  <span>View Details</span>
                  <span className="button-icon">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
