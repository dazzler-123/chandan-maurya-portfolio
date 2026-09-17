import React, { useState } from 'react';
import { FolderGit2, Zap, X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../types';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'AI / Automation' | 'Fintech' | 'InsurTech' | 'Web3' | 'Full-Stack'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'AI / Automation':
        return { bg: 'rgba(236, 72, 153, 0.12)', border: 'rgba(236, 72, 153, 0.3)', text: '#ec4899' };
      case 'Fintech':
        return { bg: 'rgba(6, 182, 212, 0.12)', border: 'rgba(6, 182, 212, 0.3)', text: '#06b6d4' };
      case 'InsurTech':
        return { bg: 'rgba(16, 185, 129, 0.12)', border: 'rgba(16, 185, 129, 0.3)', text: '#10b981' };
      case 'Web3':
        return { bg: 'rgba(139, 92, 246, 0.12)', border: 'rgba(139, 92, 246, 0.3)', text: '#8b5cf6' };
      default:
        return { bg: 'rgba(59, 130, 246, 0.12)', border: 'rgba(59, 130, 246, 0.3)', text: '#3b82f6' };
    }
  };

  return (
    <section id="projects" style={{ padding: '6rem 0' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={16} />
            <span>Enterprise Portfolio</span>
          </div>
          <h2 className="section-title">Featured Engineering Projects</h2>
          <p className="section-subtitle">
            A showcase of production platforms, AI agents, financial workflows, payment integrations, and Web3 products built over 5+ years.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginBottom: '3rem',
          }}
        >
          {['All', 'AI / Automation', 'Fintech', 'InsurTech', 'Web3', 'Full-Stack'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`pill-badge ${filter === cat ? 'active' : ''}`}
              style={{
                padding: '0.6rem 1.25rem',
                fontSize: '0.9rem',
                cursor: 'pointer',
              }}
            >
              {cat === 'All' ? `All Projects (${PROJECTS.length})` : cat}
            </button>
          ))}
        </div>

        {/* Projects Card Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {filteredProjects.map((project) => {
            const badgeStyle = getCategoryBadgeColor(project.category);
            return (
              <div
                key={project.id}
                className="glass-card"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                }}
              >
                <div>
                  {/* Top Bar with Category & Featured badge */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1rem',
                    }}
                  >
                    <span
                      style={{
                        padding: '0.25rem 0.75rem',
                        borderRadius: '999px',
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 600,
                        background: badgeStyle.bg,
                        border: `1px solid ${badgeStyle.border}`,
                        color: badgeStyle.text,
                      }}
                    >
                      {project.category}
                    </span>

                    {project.featured && (
                      <span
                        style={{
                          fontSize: '0.75rem',
                          color: '#f59e0b',
                          fontFamily: 'var(--font-mono)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                        }}
                      >
                        <Zap size={12} fill="#f59e0b" /> Featured
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: 'var(--text-main)',
                      marginBottom: '0.5rem',
                      lineHeight: 1.3,
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--accent-cyan)',
                      fontWeight: 500,
                      marginBottom: '0.85rem',
                    }}
                  >
                    {project.tagline}
                  </p>

                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.6,
                      marginBottom: '1.25rem',
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Impact metric if available */}
                  {project.metrics && (
                    <div
                      style={{
                        padding: '0.5rem 0.75rem',
                        borderRadius: '6px',
                        background: 'rgba(15, 23, 42, 0.9)',
                        border: '1px dashed var(--border-accent)',
                        fontSize: '0.8rem',
                        color: 'var(--text-main)',
                        fontFamily: 'var(--font-mono)',
                        marginBottom: '1.25rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                      }}
                    >
                      <Zap size={14} color="var(--accent-cyan)" />
                      <span>{project.metrics}</span>
                    </div>
                  )}
                </div>

                <div>
                  {/* Tech stack pills */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.4rem',
                      marginBottom: '1.25rem',
                    }}
                  >
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        style={{
                          padding: '0.2rem 0.55rem',
                          borderRadius: '4px',
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono)',
                          background: 'rgba(30, 41, 59, 0.6)',
                          color: 'var(--text-dim)',
                          border: '1px solid var(--border-subtle)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span
                        style={{
                          padding: '0.2rem 0.55rem',
                          borderRadius: '4px',
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--accent-cyan)',
                        }}
                      >
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn btn-secondary"
                    style={{
                      width: '100%',
                      padding: '0.6rem 1rem',
                      fontSize: '0.875rem',
                      justifyContent: 'center',
                    }}
                  >
                    View Project Case Study <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Case Study Details Modal */}
        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.25rem',
                  background: 'rgba(30, 41, 59, 0.6)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-main)',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <X size={20} />
              </button>

              {/* Modal Header */}
              <div style={{ marginBottom: '1.5rem' }}>
                <span
                  style={{
                    padding: '0.25rem 0.75rem',
                    borderRadius: '999px',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                    background: getCategoryBadgeColor(selectedProject.category).bg,
                    border: `1px solid ${getCategoryBadgeColor(selectedProject.category).border}`,
                    color: getCategoryBadgeColor(selectedProject.category).text,
                  }}
                >
                  {selectedProject.category} Platform
                </span>

                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginTop: '0.75rem', marginBottom: '0.35rem' }}>
                  {selectedProject.title}
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'var(--accent-cyan)', fontWeight: 500 }}>
                  {selectedProject.tagline}
                </p>
              </div>

              {/* Overview Description */}
              <div style={{ marginBottom: '1.75rem' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  Overview & Scope
                </h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.975rem' }}>
                  {selectedProject.description}
                </p>
              </div>

              {/* Key Implementation Highlights */}
              <div style={{ marginBottom: '1.75rem' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                  Key Technical Achievements
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {selectedProject.keyHighlights.map((highlight, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                      <CheckCircle2 size={18} color="var(--accent-teal)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontSize: '0.925rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used Grid */}
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.75rem' }}>
                  Technologies & Libraries
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '0.35rem 0.75rem',
                        borderRadius: '6px',
                        fontSize: '0.85rem',
                        fontFamily: 'var(--font-mono)',
                        background: 'rgba(30, 41, 59, 0.8)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-main)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Close Action */}
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button onClick={() => setSelectedProject(null)} className="btn btn-secondary">
                  Close Window
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
