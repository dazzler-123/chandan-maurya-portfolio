import React, { useEffect, useRef, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const REVEAL_SELECTOR = '.section-header, .glass-card:not(.project-card):not(.hero-metric-card)';

// Site-wide motion: scroll progress bar, cursor glow, floating background orbs,
// scroll-reveal for section headers/cards and a back-to-top button.
export const SiteEffects: React.FC = () => {
  const barRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? window.scrollY / max : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${pct})`;
      setShowTop(window.scrollY > 600);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return;
    const onMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      glowRef.current.style.opacity = '1';
      glowRef.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fx-in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    const seen = new WeakSet<Element>();
    const scan = () => {
      document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
        if (seen.has(el) || el.closest('#hero')) return;
        seen.add(el);
        el.classList.add('fx-reveal');
        io.observe(el);
      });
    };
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.querySelector('main') ?? document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={barRef} className="fx-progress" aria-hidden="true" />
      <div className="fx-orbs" aria-hidden="true">
        <span className="fx-orb fx-orb-a" />
        <span className="fx-orb fx-orb-b" />
      </div>
      <div ref={glowRef} className="fx-cursor-glow" aria-hidden="true" />
      <button
        className={`fx-top ${showTop ? 'show' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    </>
  );
};
