import React, { useState } from 'react';
import { FileText, Send, Mail, MapPin, ShieldCheck, Zap, ArrowRight, Check } from 'lucide-react';
import { PERSONAL_INFO, METRICS } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'stack' | 'overview' | 'achievements'>('stack');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        paddingTop: '8.5rem',
        paddingBottom: '4rem',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Main Hero Text Column */}
          <div>
            {/* Top Tagline Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.45rem 1rem',
                borderRadius: '999px',
                background: 'rgba(6, 182, 212, 0.08)',
                border: '1px solid rgba(6, 182, 212, 0.25)',
                color: 'var(--accent-cyan)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                fontWeight: 500,
                marginBottom: '1.5rem',
              }}
            >
              <Zap size={14} />
              <span>Senior Full-Stack & Cross-Platform Engineer</span>
            </div>

            {/* Main Name Heading */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: '1rem',
              }}
            >
              Hi, I'm <span className="gradient-text">{PERSONAL_INFO.name}</span>
            </h1>

            {/* Sub-Headline Role Title */}
            <h2
              style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                fontWeight: 600,
                color: 'var(--text-muted)',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                flexWrap: 'wrap',
              }}
            >
              <span>Senior Full-Stack Developer</span>
              <span style={{ color: 'var(--accent-cyan)' }}>|</span>
              <span style={{ color: 'var(--text-main)' }}>MEAN / MERN / React Native</span>
            </h2>

            {/* Value Proposition Description */}
            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--text-muted)',
                maxWidth: '650px',
                lineHeight: 1.7,
                marginBottom: '2rem',
              }}
            >
              With <strong style={{ color: 'var(--text-main)' }}>5+ years of experience</strong> based in{' '}
              <span style={{ color: 'var(--accent-cyan)' }}>Noida, India</span>, I architect enterprise-grade fintech platforms,
              payment gateway integrations, AES-encrypted financial tools, and decentralized Web3 ecosystems.
            </p>

            {/* Location & Contact Meta bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                flexWrap: 'wrap',
                marginBottom: '2.25rem',
                fontSize: '0.9rem',
                color: 'var(--text-dim)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <MapPin size={16} color="var(--accent-teal)" />
                <span>Noida, UP, India (201301)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <ShieldCheck size={16} color="var(--accent-indigo)" />
                <span>5+ Yrs Industry Track Record</span>
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <a href="#projects" className="btn btn-primary" style={{ padding: '0.85rem 1.75rem', fontSize: '1rem' }}>
                Explore Projects <ArrowRight size={18} />
              </a>

              <button onClick={onOpenResume} className="btn btn-secondary" style={{ padding: '0.85rem 1.5rem', fontSize: '1rem' }}>
                <FileText size={18} /> View Resume
              </button>

              <a href="#contact" className="btn btn-outline" style={{ padding: '0.85rem 1.5rem', fontSize: '1rem' }}>
                <Send size={18} /> Get in Touch
              </a>
            </div>

            {/* Social Links & Quick Copy Email */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-cyan)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                <GithubIcon size={18} /> GitHub
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-cyan)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                <LinkedinIcon size={18} /> LinkedIn
              </a>

              <button
                onClick={handleCopyEmail}
                style={{
                  background: 'none',
                  border: 'none',
                  color: copied ? 'var(--accent-emerald)' : 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'color 0.2s ease',
                }}
              >
                {copied ? <Check size={18} /> : <Mail size={18} />}
                <span>{copied ? 'Email Copied!' : PERSONAL_INFO.email}</span>
              </button>
            </div>
          </div>

          {/* Interactive Developer Code Terminal Widget */}
          <div>
            <div
              className="glass-card"
              style={{
                overflow: 'hidden',
                borderColor: 'var(--border-accent)',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              {/* Terminal Window Top Bar */}
              <div
                style={{
                  background: '#090d16',
                  padding: '0.75rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' }} />
                  <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
                  <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f' }} />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: 'var(--text-dim)',
                      marginLeft: '0.5rem',
                    }}
                  >
                    chandan-profile.ts
                  </span>
                </div>

                {/* Tab Switcher */}
                <div style={{ display: 'flex', gap: '0.25rem' }}>
                  {(['stack', 'overview', 'achievements'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      style={{
                        background: activeTab === tab ? 'rgba(6, 182, 212, 0.15)' : 'transparent',
                        color: activeTab === tab ? 'var(--accent-cyan)' : 'var(--text-dim)',
                        border: 'none',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '4px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        cursor: 'pointer',
                        textTransform: 'capitalize',
                      }}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Code Content */}
              <div style={{ padding: '1.25rem', background: '#070a11', minHeight: '260px' }}>
                {activeTab === 'stack' && (
                  <pre style={{ margin: 0 }}>
                    <code className="mono" style={{ background: 'transparent', padding: 0 }}>
                      <span style={{ color: '#8b5cf6' }}>const</span> <span style={{ color: '#06b6d4' }}>developer</span> = &#123;{'\n'}
                      {'  '}name: <span style={{ color: '#10b981' }}>'{PERSONAL_INFO.name}'</span>,{'\n'}
                      {'  '}role: <span style={{ color: '#10b981' }}>'Senior Full-Stack Developer'</span>,{'\n'}
                      {'  '}experience: <span style={{ color: '#f59e0b' }}>5</span> <span style={{ color: '#64748b' }}>// years+</span>,{'\n'}
                      {'  '}location: <span style={{ color: '#10b981' }}>'Noida, UP, India'</span>,{'\n'}
                      {'  '}primaryStacks: [<span style={{ color: '#10b981' }}>'MEAN'</span>, <span style={{ color: '#10b981' }}>'MERN'</span>, <span style={{ color: '#10b981' }}>'React Native'</span>],{'\n'}
                      {'  '}domainSpecialty: [<span style={{ color: '#10b981' }}>'Fintech'</span>, <span style={{ color: '#10b981' }}>'InsurTech'</span>, <span style={{ color: '#10b981' }}>'Web3/Crypto'</span>],{'\n'}
                      {'  '}databaseMigration: <span style={{ color: '#10b981' }}>'MongoDB → PostgreSQL'</span>,{'\n'}
                      {'  '}status: <span style={{ color: '#10b981' }}>'Available for Senior / Lead Roles'</span>{'\n'}
                      &#125;;
                    </code>
                  </pre>
                )}

                {activeTab === 'overview' && (
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                    <p style={{ marginBottom: '0.75rem', color: 'var(--accent-teal)' }}>
                      // Core Technical Focus
                    </p>
                    <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                      <li style={{ marginBottom: '0.4rem' }}>
                        Architecting cross-platform iOS/Android mobile apps with React Native.
                      </li>
                      <li style={{ marginBottom: '0.4rem' }}>
                        Building 13-step banking workflows & AES-CBC encrypted financial APIs.
                      </li>
                      <li style={{ marginBottom: '0.4rem' }}>
                        Engineering Web3 smart contract interaction layers (Talos, Ethereum, Wax).
                      </li>
                      <li>
                        Optimizing bundle sizes, code splitting & high-throughput Node.js APIs.
                      </li>
                    </ul>
                  </div>
                )}

                {activeTab === 'achievements' && (
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                    <p style={{ marginBottom: '0.75rem', color: 'var(--accent-violet)' }}>
                      // Highlights & Impact
                    </p>
                    <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
                      <li style={{ marginBottom: '0.5rem' }}>
                        ⚡ <strong style={{ color: 'var(--text-main)' }}>25% Support Ticket Reduction:</strong> Designed & deployed proprietary no-code form builder at EbixCash.
                      </li>
                      <li style={{ marginBottom: '0.5rem' }}>
                        🛡️ <strong style={{ color: 'var(--text-main)' }}>50+ Enterprise Modules:</strong> Delivered AES-CBC encrypted financial advisory platform.
                      </li>
                      <li>
                        🔄 <strong style={{ color: 'var(--text-main)' }}>Zero Downtime DB Migration:</strong> Executed MongoDB to PostgreSQL migration for high data integrity.
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Metrics Counter Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
            marginTop: '4rem',
          }}
        >
          {METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
              }}
            >
              <div
                style={{
                  fontSize: '2.25rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                  background: 'var(--gradient-primary)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {metric.value}
              </div>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.15rem' }}>
                  {metric.label}
                </h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>{metric.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
};
