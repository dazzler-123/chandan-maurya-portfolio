import React, { useEffect, useRef, useState } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Types out and deletes a rotating list of phrases.
export const Typewriter: React.FC<{ phrases: string[] }> = ({ phrases }) => {
  const [text, setText] = useState(prefersReducedMotion() ? phrases[0] : '');

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let i = 0;
    let n = 0;
    let deleting = false;
    let timer: number;
    const tick = () => {
      const word = phrases[i];
      n += deleting ? -1 : 1;
      setText(word.slice(0, n));
      let delay = deleting ? 35 : 75;
      if (!deleting && n === word.length) {
        deleting = true;
        delay = 1600;
      } else if (deleting && n === 0) {
        deleting = false;
        i = (i + 1) % phrases.length;
        delay = 350;
      }
      timer = window.setTimeout(tick, delay);
    };
    timer = window.setTimeout(tick, 600);
    return () => window.clearTimeout(timer);
  }, [phrases]);

  return (
    <span className="typewriter" aria-label={phrases.join(', ')}>
      <span aria-hidden="true">{text}</span>
      <span className="typewriter-caret" aria-hidden="true" />
    </span>
  );
};

// Counts up to a value like "19+" or "25%" once it scrolls into view.
export const CountUp: React.FC<{ value: string }> = ({ value }) => {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : '';
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(match && !prefersReducedMotion() ? 0 : target);

  useEffect(() => {
    const el = ref.current;
    if (!match || !el || prefersReducedMotion() || typeof IntersectionObserver === 'undefined') return;
    let raf = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min((now - start) / 1400, 1);
        setN(Math.round(target * (1 - Math.pow(1 - t, 3))));
        if (t < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  if (!match) return <span>{value}</span>;
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
};

// Floating shapes behind the hero that drift with the mouse (parallax).
export const HeroShapes: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const section = el?.parentElement;
    if (!el || !section || prefersReducedMotion() || !window.matchMedia('(hover: hover)').matches) return;
    const onMove = (e: MouseEvent) => {
      const r = section.getBoundingClientRect();
      el.style.setProperty('--px', String((e.clientX - r.left) / r.width - 0.5));
      el.style.setProperty('--py', String((e.clientY - r.top) / r.height - 0.5));
    };
    section.addEventListener('mousemove', onMove);
    return () => section.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div ref={ref} className="hero-shapes" aria-hidden="true">
      <span className="hero-shape hs-ring" style={{ '--depth': 40 } as React.CSSProperties} />
      <span className="hero-shape hs-square" style={{ '--depth': -60 } as React.CSSProperties} />
      <span className="hero-shape hs-dot" style={{ '--depth': 80 } as React.CSSProperties} />
      <span className="hero-shape hs-tri" style={{ '--depth': -30 } as React.CSSProperties} />
    </div>
  );
};

// Vertical timeline line that draws itself as the section scrolls through the viewport.
export const TimelineBar: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;
    if (prefersReducedMotion()) {
      el.style.setProperty('--fill', '1');
      return;
    }
    const update = () => {
      const r = parent.getBoundingClientRect();
      const p = (window.innerHeight * 0.6 - r.top) / r.height;
      el.style.setProperty('--fill', String(Math.max(0, Math.min(1, p))));
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div ref={ref} className="timeline-bar" aria-hidden="true">
      <div className="timeline-bar-fill" />
    </div>
  );
};
