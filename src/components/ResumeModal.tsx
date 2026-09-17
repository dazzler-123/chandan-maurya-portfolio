import React from 'react';
import { X, Download, Printer, FileText, Mail, Phone, MapPin } from 'lucide-react';
import { PERSONAL_INFO, WORK_EXPERIENCE, PROJECTS, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTxt = () => {
    const resumeText = `
CHANDAN MAURYA
Senior Full-Stack Developer (MEAN / MERN / React Native)
Phone: ${PERSONAL_INFO.phone} | Email: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location}

SUMMARY
${PERSONAL_INFO.bio}

WORK EXPERIENCE
${WORK_EXPERIENCE.map(
  (e) => `
${e.role} - ${e.company} (${e.period})
Location: ${e.location}
${e.bulletPoints.map((b) => `• ${b}`).join('\n')}
`
).join('\n')}

FEATURED PROJECTS
${PROJECTS.map(
  (p) => `
${p.title} (${p.category})
Technologies: ${p.technologies.join(', ')}
${p.description}
${p.keyHighlights.map((h) => `• ${h}`).join('\n')}
`
).join('\n')}

LANGUAGES
${PERSONAL_INFO.languages.join(', ')}
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Chandan_Maurya_Resume.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '950px',
          background: '#0d111a',
          borderColor: 'var(--border-accent)',
        }}
      >
        {/* Modal Top Actions */}
        <div
          className="no-print"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--border-subtle)',
            paddingBottom: '1rem',
            marginBottom: '1.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <FileText size={22} color="var(--accent-cyan)" />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, color: 'var(--text-main)' }}>
              Curriculum Vitae — {PERSONAL_INFO.name}
            </h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button onClick={handleDownloadTxt} className="btn btn-outline" style={{ padding: '0.45rem 0.85rem', fontSize: '0.85rem' }}>
              <Download size={15} /> Download Text
            </button>
            <button onClick={handlePrint} className="btn btn-secondary" style={{ padding: '0.45rem 0.85rem', fontSize: '0.85rem' }}>
              <Printer size={15} /> Print Resume
            </button>
            <button
              onClick={onClose}
              style={{
                background: 'rgba(30, 41, 59, 0.6)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-main)',
                borderRadius: '50%',
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Formatted Resume View */}
        <div
          id="printable-resume"
          className="printable-resume"
          style={{
            background: '#070a11',
            border: '1px solid var(--border-subtle)',
            borderRadius: '12px',
            padding: '2.5rem',
            color: '#e2e8f0',
            lineHeight: 1.6,
          }}
        >
          {/* Resume Header */}
          <div className="resume-header" style={{ borderBottom: '2px solid var(--accent-cyan)', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
            <h1 className="resume-name" style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', margin: 0, textTransform: 'uppercase' }}>
              {PERSONAL_INFO.name}
            </h1>
            <p className="resume-subtitle" style={{ fontSize: '1.1rem', color: 'var(--accent-cyan)', fontWeight: 600, marginTop: '0.25rem' }}>
              {PERSONAL_INFO.title}
            </p>

            <div className="resume-contact-info" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '0.75rem', fontSize: '0.875rem', color: '#94a3b8' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Phone size={14} color="var(--accent-teal)" /> {PERSONAL_INFO.phone}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Mail size={14} color="var(--accent-teal)" /> {PERSONAL_INFO.email}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <MapPin size={14} color="var(--accent-teal)" /> {PERSONAL_INFO.location}
              </span>
            </div>
          </div>

          {/* Summary Section */}
          <div className="resume-section" style={{ marginBottom: '1.5rem' }}>
            <h2 className="resume-section-title" style={{ fontSize: '1.1rem', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              SUMMARY
            </h2>
            <p className="resume-text" style={{ fontSize: '0.925rem', color: '#cbd5e1', margin: 0 }}>
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Skills Section */}
          <div className="resume-section" style={{ marginBottom: '1.5rem' }}>
            <h2 className="resume-section-title" style={{ fontSize: '1.1rem', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              SKILLS & COMPETENCIES
            </h2>
            <div className="resume-skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem', fontSize: '0.875rem' }}>
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.id} className="resume-item">
                  <strong className="resume-title-bold" style={{ color: '#ffffff' }}>{cat.category}:</strong>{' '}
                  <span className="resume-text" style={{ color: '#cbd5e1' }}>{cat.skills.map((s) => s.name).join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="resume-section" style={{ marginBottom: '1.5rem' }}>
            <h2 className="resume-section-title" style={{ fontSize: '1.1rem', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
              WORK EXPERIENCE
            </h2>
            {WORK_EXPERIENCE.map((exp) => (
              <div key={exp.id} className="resume-item" style={{ marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <strong className="resume-title-bold" style={{ fontSize: '1.05rem', color: '#ffffff' }}>{exp.company}</strong>
                  <span className="resume-date" style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>{exp.period}</span>
                </div>
                <div className="resume-text" style={{ fontStyle: 'italic', fontSize: '0.925rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
                  {exp.role} | {exp.location}
                </div>
                <ul className="resume-bullet-list" style={{ paddingLeft: '1.2rem', margin: 0, fontSize: '0.875rem', color: '#cbd5e1' }}>
                  {exp.bulletPoints.map((b, i) => (
                    <li key={i} style={{ marginBottom: '0.3rem' }}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects Section */}
          <div className="resume-section" style={{ marginBottom: '1.5rem' }}>
            <h2 className="resume-section-title" style={{ fontSize: '1.1rem', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
              SELECTED PROJECTS
            </h2>
            {PROJECTS.slice(0, 5).map((p) => (
              <div key={p.id} className="resume-item" style={{ marginBottom: '0.85rem' }}>
                <strong className="resume-title-bold" style={{ color: '#ffffff', fontSize: '0.95rem' }}>{p.title}</strong>{' '}
                <span className="resume-text" style={{ fontSize: '0.8rem', color: '#94a3b8' }}>({p.technologies.join(', ')})</span>
                <p className="resume-text" style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: '0.2rem 0 0 0' }}>{p.description}</p>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className="resume-section">
            <h2 className="resume-section-title" style={{ fontSize: '1.1rem', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              LANGUAGES
            </h2>
            <div className="resume-text" style={{ fontSize: '0.875rem', color: '#cbd5e1' }}>
              <strong className="resume-title-bold" style={{ color: '#ffffff' }}>Languages:</strong> {PERSONAL_INFO.languages.join(', ')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
