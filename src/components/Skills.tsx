import React, { useState } from 'react';
import { Code2, Layers, Cpu, Database, Bot, Shield, Wrench, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'web3' | 'ai'>('all');

  const filterMap = {
    all: SKILL_CATEGORIES,
    frontend: SKILL_CATEGORIES.filter((c) => c.id === 'frameworks' || c.id === 'languages'),
    backend: SKILL_CATEGORIES.filter((c) => c.id === 'databases' || c.id === 'api' || c.id === 'devops'),
    web3: SKILL_CATEGORIES.filter((c) => c.id === 'blockchain'),
    ai: SKILL_CATEGORIES.filter((c) => c.id === 'ai'),
  };

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'languages':
        return <Code2 size={20} color="var(--accent-cyan)" />;
      case 'frameworks':
        return <Layers size={20} color="var(--accent-teal)" />;
      case 'databases':
        return <Database size={20} color="var(--accent-indigo)" />;
      case 'blockchain':
        return <Cpu size={20} color="var(--accent-violet)" />;
      case 'ai':
        return <Bot size={20} color="var(--accent-emerald)" />;
      case 'api':
        return <Shield size={20} color="var(--accent-blue)" />;
      case 'devops':
        return <Wrench size={20} color="var(--accent-cyan)" />;
      default:
        return <Sparkles size={20} color="var(--accent-cyan)" />;
    }
  };

  return (
    <section id="skills" style={{ padding: '6rem 0' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Code2 size={16} />
            <span>Technical Stack & Mastery</span>
          </div>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A comprehensive overview of programming languages, frameworks, databases, Web3 protocols, and AI tools I use daily.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginBottom: '3rem',
          }}
        >
          {[
            { id: 'all', label: 'All Technologies' },
            { id: 'frontend', label: 'Languages & Frameworks' },
            { id: 'backend', label: 'Backend & Databases' },
            { id: 'web3', label: 'Blockchain & Web3' },
            { id: 'ai', label: 'AI & Tools' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`pill-badge ${filter === tab.id ? 'active' : ''}`}
              style={{
                padding: '0.6rem 1.25rem',
                fontSize: '0.9rem',
                cursor: 'pointer',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Category Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {filterMap[filter].map((cat) => (
            <div
              key={cat.id}
              className="glass-card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              {/* Category Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  borderBottom: '1px solid var(--border-subtle)',
                  paddingBottom: '1rem',
                }}
              >
                <div
                  style={{
                    padding: '0.5rem',
                    borderRadius: '8px',
                    background: 'rgba(30, 41, 59, 0.6)',
                  }}
                >
                  {getCategoryIcon(cat.id)}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
                  {cat.category}
                </h3>
              </div>

              {/* Skills Tags List */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.45rem 0.85rem',
                      borderRadius: '8px',
                      fontSize: '0.875rem',
                      fontFamily: 'var(--font-mono)',
                      background: skill.highlighted ? 'rgba(6, 182, 212, 0.12)' : 'rgba(30, 41, 59, 0.5)',
                      border: skill.highlighted ? '1px solid rgba(6, 182, 212, 0.35)' : '1px solid var(--border-subtle)',
                      color: skill.highlighted ? 'var(--text-main)' : 'var(--text-muted)',
                      fontWeight: skill.highlighted ? 600 : 400,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {skill.highlighted && (
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: 'var(--accent-cyan)',
                        }}
                      />
                    )}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
