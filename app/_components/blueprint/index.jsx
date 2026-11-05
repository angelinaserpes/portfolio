'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { usePathname } from 'next/navigation';

const TAG_SELECTOR = 'main h1, main h2, main h3, main img, main video, main a, main button, main section';
const MAX_TAGS = 22;

const NOTES = [
  'Pretty is nice. Pretty + functional is better.',
  "I don't really fit in one box. This view is the box I usually hide.",
  'Every outline you see is a real element, measured live in your browser.',
];

// TODO(Angy): swap in your own fun fact.
const FUN_FACT = 'Everyone calls me Angy. Only my portfolio calls me Angelina.';

function rgbToHex(rgb) {
  const m = rgb.match(/\d+(\.\d+)?/g);
  if (!m || (m.length === 4 && Number(m[3]) === 0)) return null;
  return `#${m
    .slice(0, 3)
    .map(v => Number(v).toString(16).padStart(2, '0'))
    .join('')}`.toUpperCase();
}

function describe(el) {
  const tag = el.tagName.toLowerCase();
  const cs = getComputedStyle(el);
  const r = el.getBoundingClientRect();
  if (tag === 'img' || tag === 'video') {
    return `${tag} · ${Math.round(r.width)}×${Math.round(r.height)}`;
  }
  if (tag === 'a') {
    const href = el.getAttribute('href') || '';
    return `a → ${href.replace(/^https?:\/\//, '').slice(0, 28)}`;
  }
  if (tag === 'section') {
    const bg = rgbToHex(cs.backgroundColor);
    return `section · ${Math.round(r.height)}px${bg ? ` · ${bg}` : ''}`;
  }
  if (tag === 'button') return 'button · interactive';
  const raw = cs.fontFamily.split(',')[0].replace(/["']/g, '').trim();
  const font = raw.startsWith('__') ? 'Neue Montreal' : raw;
  return `${tag} · ${font || 'sans'} ${Math.round(parseFloat(cs.fontSize))}px`;
}

function measurePage() {
  const all = Array.from(document.querySelectorAll('main *'));
  const colors = new Map();
  const fonts = new Set();
  all.forEach(el => {
    const cs = getComputedStyle(el);
    const bg = rgbToHex(cs.backgroundColor);
    if (bg) colors.set(bg, (colors.get(bg) || 0) + 1);
    const f = cs.fontFamily.split(',')[0].replace(/["']/g, '').trim();
    if (f && !f.startsWith('__')) fonts.add(f);
  });
  return {
    elements: all.length,
    palette: [...colors.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5).map(([c]) => c),
    fonts: [...fonts].slice(0, 2),
  };
}

export function Blueprint() {
  const pathname = usePathname();
  const [on, setOn] = useState(false);
  const [hint, setHint] = useState(true);
  const [tags, setTags] = useState([]);
  const [stats, setStats] = useState(null);
  const [note, setNote] = useState(0);
  const [showFact, setShowFact] = useState(false);
  const frame = useRef(0);

  const scan = useCallback(() => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const vh = window.innerHeight;
      const found = [];
      document.querySelectorAll(TAG_SELECTOR).forEach(el => {
        if (found.length >= MAX_TAGS) return;
        const r = el.getBoundingClientRect();
        if (r.width < 40 || r.height < 14 || r.bottom < 0 || r.top > vh) return;
        found.push({ x: Math.max(4, r.left), y: Math.max(4, r.top), label: describe(el) });
      });
      setTags(found);
    });
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setHint(false), 9000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (!on) {
      root.classList.remove('bp-on');
      setTags([]);
      return undefined;
    }
    root.classList.add('bp-on');
    setStats(measurePage());
    scan();
    const onKey = e => e.key === 'Escape' && setOn(false);
    const rotate = setInterval(() => setNote(n => (n + 1) % NOTES.length), 4500);
    window.addEventListener('scroll', scan, { passive: true });
    window.addEventListener('resize', scan);
    window.addEventListener('keydown', onKey);
    return () => {
      clearInterval(rotate);
      window.removeEventListener('scroll', scan);
      window.removeEventListener('resize', scan);
      window.removeEventListener('keydown', onKey);
      root.classList.remove('bp-on');
    };
  }, [on, scan]);

  useEffect(() => {
    if (!on) return undefined;
    const t = setTimeout(() => {
      setStats(measurePage());
      scan();
    }, 900);
    return () => clearTimeout(t);
  }, [pathname, on, scan]);

  return (
    <>
      {on ? (
        <div className='bp-layer' aria-hidden='true'>
          <div className='bp-grid' />
          {tags.map((t, i) => (
            <span
              key={`${t.label}-${i}`}
              className='bp-tag'
              style={{ transform: `translate(${t.x}px, ${t.y}px)` }}
            >
              {t.label}
            </span>
          ))}
        </div>
      ) : null}

      {on && stats ? (
        <aside className='bp-hud' aria-label='Blueprint details'>
          <div className='bp-hud-head'>
            <span>BLUEPRINT / {pathname === '/' ? 'home' : pathname.slice(1)}</span>
            <button type='button' onClick={() => setOn(false)} aria-label='Close blueprint mode'>
              esc ✕
            </button>
          </div>

          <dl className='bp-rows'>
            <dt>Stack</dt>
            <dd>Next.js · React · Framer Motion · GSAP · Tailwind</dd>
            <dt>Hosting</dt>
            <dd>AWS Amplify</dd>
            <dt>Elements</dt>
            <dd>{stats.elements} on this page</dd>
            <dt>Type</dt>
            <dd>{stats.fonts.join(' / ') || 'Neue Montreal'}</dd>
            <dt>Palette</dt>
            <dd className='bp-swatches'>
              {stats.palette.map(c => (
                <span key={c} title={c} style={{ background: c }} />
              ))}
            </dd>
          </dl>

          <p className='bp-note' key={note}>
            “{NOTES[note]}”
          </p>

          <button type='button' className='bp-fact' onClick={() => setShowFact(s => !s)}>
            {showFact ? FUN_FACT : '▸ decrypt classified fun fact'}
          </button>
        </aside>
      ) : null}

      <div className='bp-trigger-wrap'>
        {hint && !on ? <span className='bp-hint'>psst, see how this site is built →</span> : null}
        <button
          type='button'
          className={`bp-trigger${on ? ' is-on' : ''}`}
          onClick={() => {
            setOn(v => !v);
            setHint(false);
          }}
          aria-pressed={on}
        >
          <span className='bp-dot' />
          {on ? 'Exit blueprint' : 'Blueprint mode'}
        </button>
      </div>
    </>
  );
}
