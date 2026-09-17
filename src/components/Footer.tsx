import React from 'react';
import { ArrowUp, Terminal, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        background: '#04060a',
        padding: '3.5rem 0 2rem 0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'var(--gradient-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                }}
              >
                <Terminal size={18} />
              </div>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)' }}>
                Chandan Maurya
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', maxWidth: '420px' }}>
              Senior Full-Stack & Cross-Platform Developer specializing in MEAN, MERN, and React Native platforms based in Noida, UP, India.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              style={{
                color: 'var(--text-muted)',
                padding: '0.5rem',
                borderRadius: '8px',
                background: 'rgba(30, 41, 59, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'color 0.2s ease',
              }}
              title="GitHub"
            >
              <GithubIcon size={20} />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{
                color: 'var(--text-muted)',
                padding: '0.5rem',
                borderRadius: '8px',
                background: 'rgba(30, 41, 59, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'color 0.2s ease',
              }}
              title="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              style={{
                color: 'var(--text-muted)',
                padding: '0.5rem',
                borderRadius: '8px',
                background: 'rgba(30, 41, 59, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'color 0.2s ease',
              }}
              title="Email"
            >
              <Mail size={20} />
            </a>

            <button
              onClick={scrollToTop}
              style={{
                background: 'var(--gradient-primary)',
                color: '#fff',
                border: 'none',
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 0 15px rgba(6, 182, 212, 0.3)',
              }}
              title="Back to Top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '1.5rem',
            fontSize: '0.85rem',
            color: 'var(--text-dim)',
          }}
        >
          <p>© {new Date().getFullYear()} Chandan Maurya. Built with React & TypeScript.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="pulse-dot" />
            <span>Based in Noida, UP, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
