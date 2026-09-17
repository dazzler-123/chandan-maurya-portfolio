import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, Award } from 'lucide-react';
import { WORK_EXPERIENCE } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" style={{ padding: '6rem 0', background: 'rgba(15, 23, 42, 0.3)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={16} />
            <span>Career Progression</span>
          </div>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            5+ years of delivering scalable enterprise mobile and web applications in Noida, UP, India.
          </p>
        </div>

        {/* Timeline List */}
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          {/* Vertical Timeline Bar */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '24px',
              width: '2px',
              background: 'linear-gradient(180deg, var(--accent-cyan) 0%, var(--accent-violet) 100%)',
              opacity: 0.4,
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {WORK_EXPERIENCE.map((exp) => (
              <div
                key={exp.id}
                style={{
                  position: 'relative',
                  paddingLeft: '4rem',
                }}
              >
                {/* Timeline Icon Node */}
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '50px',
                    height: '50px',
                    borderRadius: '14px',
                    background: exp.isCurrent ? 'var(--gradient-primary)' : 'var(--bg-elevated)',
                    border: '1px solid var(--border-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    boxShadow: exp.isCurrent ? '0 0 20px rgba(6, 182, 212, 0.4)' : 'none',
                    zIndex: 2,
                  }}
                >
                  <Briefcase size={22} />
                </div>

                {/* Experience Card */}
                <div
                  className="glass-card"
                  style={{
                    padding: '2rem',
                    borderColor: exp.isCurrent ? 'var(--border-accent)' : 'var(--border-subtle)',
                  }}
                >
                  {/* Card Top Header */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '1rem',
                      marginBottom: '1rem',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                        <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
                          {exp.role}
                        </h3>
                        {exp.isCurrent && (
                          <span
                            style={{
                              padding: '0.2rem 0.65rem',
                              borderRadius: '999px',
                              background: 'rgba(16, 185, 129, 0.15)',
                              border: '1px solid rgba(16, 185, 129, 0.3)',
                              fontSize: '0.75rem',
                              color: '#34d399',
                              fontFamily: 'var(--font-mono)',
                              fontWeight: 600,
                            }}
                          >
                            Present Role
                          </span>
                        )}
                      </div>
                      <h4
                        style={{
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          color: 'var(--accent-cyan)',
                          marginTop: '0.25rem',
                        }}
                      >
                        {exp.company}
                      </h4>
                    </div>

                    {/* Meta info pills */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        gap: '0.35rem',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontSize: '0.85rem',
                          color: 'var(--text-muted)',
                          fontFamily: 'var(--font-mono)',
                        }}
                      >
                        <Calendar size={14} color="var(--accent-cyan)" />
                        <span>{exp.period}</span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontSize: '0.85rem',
                          color: 'var(--text-dim)',
                        }}
                      >
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlight Metric Banner if available */}
                  {exp.metricsHighlight && (
                    <div
                      style={{
                        padding: '0.65rem 1rem',
                        borderRadius: '8px',
                        background: 'rgba(6, 182, 212, 0.08)',
                        borderLeft: '3px solid var(--accent-cyan)',
                        marginBottom: '1.25rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.9rem',
                        color: 'var(--text-main)',
                        fontWeight: 600,
                      }}
                    >
                      <Award size={18} color="var(--accent-cyan)" />
                      <span>{exp.metricsHighlight}</span>
                    </div>
                  )}

                  {/* Bullet Achievements */}
                  <ul
                    style={{
                      paddingLeft: 0,
                      listStyle: 'none',
                      margin: '0 0 1.5rem 0',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem',
                    }}
                  >
                    {exp.bulletPoints.map((bullet, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.75rem',
                          fontSize: '0.95rem',
                          color: 'var(--text-muted)',
                          lineHeight: 1.6,
                        }}
                      >
                        <CheckCircle
                          size={16}
                          color="var(--accent-teal)"
                          style={{ flexShrink: 0, marginTop: '4px' }}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          padding: '0.25rem 0.65rem',
                          borderRadius: '6px',
                          fontSize: '0.775rem',
                          fontFamily: 'var(--font-mono)',
                          background: 'rgba(30, 41, 59, 0.6)',
                          border: '1px solid var(--border-subtle)',
                          color: 'var(--text-dim)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
