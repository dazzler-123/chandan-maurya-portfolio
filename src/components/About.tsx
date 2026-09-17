import React from 'react';
import { UserCheck, Shield, Cpu, Smartphone, Database, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Shield size={24} color="var(--accent-cyan)" />,
      title: 'Fintech & InsurTech Solutions',
      description:
        'Architected 13-step Loan Origination Workflows (LOS), end-to-end AES-CBC API encryption, multi-insurer payment integrations, and automated portfolio rebalancing engines.',
    },
    {
      icon: <Cpu size={24} color="var(--accent-violet)" />,
      title: 'Web3 & Crypto Ecosystems',
      description:
        'Engineered NFT marketplaces (Zeptagram, TruOrigin), multi-crypto & fiat wallets (Wallaby), Ethereum/Talos smart contract interaction layers, and real estate tokenization apps.',
    },
    {
      icon: <Smartphone size={24} color="var(--accent-teal)" />,
      title: 'Cross-Platform Mobile Apps',
      description:
        'Delivered production-grade iOS & Android applications with React Native for high-volume insurance providers, employee benefit claims, and location-based NFT experiences.',
    },
    {
      icon: <Database size={24} color="var(--accent-indigo)" />,
      title: 'Full-Stack Architecture & DBs',
      description:
        'Built enterprise web applications with MEAN & MERN stacks, conducted zero-downtime MongoDB to PostgreSQL schema migrations, and optimized RESTful microservices.',
    },
  ];

  const summaryHighlights = [
    '5+ Years of hands-on full-stack development experience',
    'Specialized in MEAN (Mongo, Express, Angular, Node) & MERN (Mongo, Express, React, Node) stacks',
    'Expertise in React Native cross-platform mobile app development',
    'Built proprietary No-Code form builder reducing support tickets by 25%',
    'Delivered 50+ financial advisory & portfolio management modules',
    'Strong track record in mentoring developers and conducting code reviews',
  ];

  return (
    <section id="about" style={{ padding: '6rem 0', background: 'rgba(15, 23, 42, 0.3)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <UserCheck size={16} />
            <span>About Chandan</span>
          </div>
          <h2 className="section-title">Senior Software Engineer & Tech Innovator</h2>
          <p className="section-subtitle">
            Based in Noida, UP, India — delivering robust web, mobile, and decentralized systems for global applications.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          {/* Detailed Narrative */}
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-main)' }}>
              Transforming Complex Business Workflows into Elegant Code
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
              I am a Senior Full-Stack Developer with over 5 years of experience engineering high-availability web applications,
              cross-platform mobile apps, and Web3 solutions. Currently working as a React Native Developer at{' '}
              <strong style={{ color: 'var(--accent-cyan)' }}>EbixCash Ltd.</strong> in Noida, I specialize in simplifying intricate
              financial, insurance, and cryptographic operations into seamless user experiences.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '1.05rem' }}>
              Throughout my career at EbixCash and Lapins Technologies, I have designed scalable RESTful API architectures, implemented
              AES-CBC client payload encryption, integrated third-party insurer APIs, and pioneered a no-code form builder that dramatically
              boosted operational turnaround times.
            </p>

            {/* Checklist of highlights */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.85rem' }}>
              {summaryHighlights.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <CheckCircle2 size={18} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ fontSize: '0.925rem', color: 'var(--text-main)', lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Pillars Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem' }}>
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(15, 23, 42, 0.9)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {pillar.icon}
                </div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-main)' }}>{pillar.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
