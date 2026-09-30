import React, { useEffect, useRef, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const REVEAL_SELECTOR = '.section-header, .glass-card:not(.project-card):not(.hero-metric-card)';

// Site-wide motion: scroll progress bar, cursor glow, floating background orbs,
// scroll-reveal for section headers/cards and a back-to-top button.
export const SiteEffects: React.FC = () => {
  const barRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
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
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let tx = 0;
    let ty = 0;
    let rx = 0;
    let ry = 0;
    let raf = 0;
    const loop = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      raf = requestAnimationFrame(loop);
    };
    if (!reduce) raf = requestAnimationFrame(loop);

    const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, .pill-badge';
    let magnet: HTMLElement | null = null;
    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (glowRef.current) {
        glowRef.current.style.opacity = '1';
        glowRef.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
      }
      const target = e.target as HTMLElement | null;
      const hovering = !!target?.closest?.(INTERACTIVE);
      if (ringRef.current) {
        ringRef.current.style.opacity = '1';
        ringRef.current.classList.toggle('is-hover', hovering);
      }
      if (reduce) return;
      // Magnetic pull on primary buttons
      const btn = target?.closest?.('.btn') as HTMLElement | null;
      if (magnet && magnet !== btn) magnet.style.translate = '';
      magnet = btn;
      if (btn) {
        const r = btn.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) * 0.18;
        const dy = (e.clientY - (r.top + r.height / 2)) * 0.28;
        btn.style.translate = `${dx}px ${dy}px`;
      }
    };
    const onLeave = () => {
      if (ringRef.current) ringRef.current.style.opacity = '0';
      if (magnet) magnet.style.translate = '';
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
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
      <div ref={ringRef} className="fx-cursor-ring" aria-hidden="true" />
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
