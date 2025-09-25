"use client";
import { useState, useMemo } from "react";
import Link from "next/link";

export default function ProjectSearch({ projects }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [selectedTag, setSelectedTag] = useState("All");

  // Get unique categories, difficulties, and tags
  const categories = useMemo(() => {
    const cats = [...new Set(projects.map((p) => p.category))];
    return ["All", ...cats.sort()];
  }, [projects]);

  const difficulties = useMemo(() => {
    const diffs = [...new Set(projects.map((p) => p.difficulty))];
    return ["All", ...diffs.sort()];
  }, [projects]);

  const tags = useMemo(() => {
    const allTags = projects.flatMap((p) => p.tags || []);
    const uniqueTags = [...new Set(allTags)];
    return ["All", ...uniqueTags.sort()];
  }, [projects]);

  // Filter projects based on search criteria
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (project.tags &&
          project.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          ));

      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      const matchesDifficulty =
        selectedDifficulty === "All" ||
        project.difficulty === selectedDifficulty;

      const matchesTag =
        selectedTag === "All" ||
        (project.tags && project.tags.includes(selectedTag));

      return (
        matchesSearch && matchesCategory && matchesDifficulty && matchesTag
      );
    });
  }, [
    projects,
    searchQuery,
    selectedCategory,
    selectedDifficulty,
    selectedTag,
  ]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedDifficulty("All");
    setSelectedTag("All");
  };

  return (
    <div className="project-search">
      {/* Search Header */}
      <div className="search-header">
        <div className="search-title">
          <h2>🔍 Explore Python Algorithms</h2>
          <p>Search through {projects.length} interactive coding projects</p>
        </div>
      </div>

      {/* Search Controls */}
      <div className="search-controls">
        {/* Main Search Bar */}
        <div className="search-bar">
          <div className="search-input-container">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search projects by name, description, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="clear-search"
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Filter Controls */}
        <div className="filter-controls">
          <div className="filter-group">
            <label className="filter-label">Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Difficulty:</label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="filter-select"
            >
              {difficulties.map((difficulty) => (
                <option key={difficulty} value={difficulty}>
                  {difficulty}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Tag:</label>
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="filter-select"
            >
              {tags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>

          <button onClick={clearFilters} className="clear-filters">
            🗑️ Clear All
          </button>
        </div>
      </div>

      {/* Results Info */}
      <div className="search-results-info">
        <div className="results-count">
          <span className="results-number">{filteredProjects.length}</span>
          <span className="results-text">
            {filteredProjects.length === 1 ? "project" : "projects"} found
          </span>
        </div>

        {(searchQuery ||
          selectedCategory !== "All" ||
          selectedDifficulty !== "All" ||
          selectedTag !== "All") && (
          <div className="active-filters">
            <span className="filter-label">Active filters:</span>
            {searchQuery && (
              <span className="filter-pill">
                Search: "{searchQuery}"
                <button onClick={() => setSearchQuery("")}>✕</button>
              </span>
            )}
            {selectedCategory !== "All" && (
              <span className="filter-pill">
                Category: {selectedCategory}
                <button onClick={() => setSelectedCategory("All")}>✕</button>
              </span>
            )}
            {selectedDifficulty !== "All" && (
              <span className="filter-pill">
                Difficulty: {selectedDifficulty}
                <button onClick={() => setSelectedDifficulty("All")}>✕</button>
              </span>
            )}
            {selectedTag !== "All" && (
              <span className="filter-pill">
                Tag: {selectedTag}
                <button onClick={() => setSelectedTag("All")}>✕</button>
              </span>
            )}
          </div>
        )}
      </div>

      {/* Search Results */}
      <div className="search-results">
        {filteredProjects.length === 0 ? (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>No projects found</h3>
            <p>Try adjusting your search criteria or clearing filters</p>
            <button onClick={clearFilters} className="try-again-btn">
              🔄 Clear Filters & Try Again
            </button>
          </div>
        ) : (
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="project-card">
                <div className="card-header">
                  <div className="card-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="difficulty-badge difficulty-{project.difficulty?.toLowerCase()}">
                    {project.difficulty}
                  </div>
                </div>

                <div className="card-content">
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-description">{project.description}</p>

                  <div className="card-meta">
                    <div className="category-tag">📂 {project.category}</div>
                    <div className="stats">
                      <span>📋 {project.logic?.length || 0} steps</span>
                      <span>
                        ⚡ {project.code?.split("\n").length || 0} lines
                      </span>
                    </div>
                  </div>

                  <div className="card-tags">
                    {project.tags?.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="tag"
                        onClick={() => setSelectedTag(tag)}
                        title={`Filter by ${tag}`}
                      >
                        #{tag}
                      </span>
                    ))}
                    {project.tags?.length > 3 && (
                      <span className="tag more-tags">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/projects/${project.id}`}
                    className="card-button"
                  >
                    <span>🚀 Explore Algorithm</span>
                    <span className="button-arrow">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
