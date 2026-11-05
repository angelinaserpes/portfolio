'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { createPortal } from 'react-dom';

import { cover, looks } from './data';

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

async function drawCover(look) {
  const W = 900;
  const H = 1200;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = look.soft;
  ctx.fillRect(0, 0, W, H);
  const glow = ctx.createRadialGradient(W * 0.62, H * 0.6, 40, W * 0.62, H * 0.6, 640);
  glow.addColorStop(0, 'rgba(255,255,255,0.45)');
  glow.addColorStop(1, 'rgba(0,0,0,0.06)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, W, H);

  const img = await loadImage(look.image);
  const h = 900;
  const w = (img.width / img.height) * h;
  ctx.drawImage(img, W - w - 30, H - h - 20, w, h);

  ctx.fillStyle = look.accent;
  ctx.textAlign = 'center';
  let size = 300;
  ctx.font = `italic 700 ${size}px Georgia, "Times New Roman", serif`;
  while (ctx.measureText(cover.masthead).width > W - 90 && size > 120) {
    size -= 6;
    ctx.font = `italic 700 ${size}px Georgia, "Times New Roman", serif`;
  }
  ctx.fillText(cover.masthead, W / 2, 280);
  ctx.fillStyle = '#1B1B1B';
  ctx.font = '500 22px Helvetica, Arial, sans-serif';
  ctx.fillText(cover.issue.toUpperCase(), W / 2, 330);
  ctx.textAlign = 'left';
  ctx.font = '22px Helvetica, Arial, sans-serif';
  [look.name, ...look.pieces.map(p => p.item)].forEach((t, i) => ctx.fillText(t.toUpperCase(), 60, 430 + i * 42));
  ctx.font = '600 18px Helvetica, Arial, sans-serif';
  ctx.globalAlpha = 0.7;
  ctx.fillText('INSIDE THIS ISSUE', 60, 640);
  ctx.globalAlpha = 1;
  ctx.font = '22px Helvetica, Arial, sans-serif';
  ['AirSense: the data app that tells you', 'when to breathe easy', 'Aurevo: designing stores with AI', '4 looks. 1 developer. Zero bugs*'].forEach(
    (t, i) => ctx.fillText(t, 60, 676 + i * 32),
  );
  ctx.font = 'italic 62px Georgia, serif';
  cover.headline.split('\n').forEach((line, i) => ctx.fillText(line, 60, 900 + i * 70));
  ctx.font = '20px Helvetica, Arial, sans-serif';
  ctx.globalAlpha = 0.75;
  ctx.fillText('ANGELINA SERPES · PORTFOLIO', 60, H - 56);
  ctx.globalAlpha = 1;
  return canvas;
}

export function FitCheck() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState('rack');
  const [hint, setHint] = useState(false);
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const closeRef = useRef(null);
  const look = looks[index];

  useEffect(() => setMounted(true), []);

  const close = useCallback(() => {
    setOpen(false);
    setStage('rack');
  }, []);

  useEffect(() => {
    const show = setTimeout(() => setHint(true), 2500);
    const hide = setTimeout(() => setHint(false), 14000);
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = 'hidden';
    closeRef.current?.focus();
    looks.forEach(l => loadImage(l.image).catch(() => {}));
    const onKey = e => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      root.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, close]);

  useEffect(() => {
    if (stage !== 'runway') return undefined;
    const t = setTimeout(() => setStage('cover'), 2800);
    return () => clearTimeout(t);
  }, [stage]);

  function step(d) {
    setDir(d);
    setIndex(i => (i + d + looks.length) % looks.length);
  }

  const download = async () => {
    const canvas = await drawCover(look);
    const link = document.createElement('a');
    link.download = `angy-${look.name.toLowerCase().replace(/\s+/g, '-')}-cover.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  if (!mounted) return null;

  return createPortal(
    <>
      <div className='fc-trigger-wrap'>
        {hint && !open ? <span className='fc-hint'>psst, check my fit</span> : null}
        <button
          type='button'
          className='fc-trigger'
          onClick={() => {
            setOpen(true);
            setHint(false);
          }}
          aria-label='Open Fit Check, a fashion mini game'
        >
          <svg viewBox='0 0 40 40' width='22' height='22' aria-hidden='true' className='fc-hanger'>
            <path
              d='M20 9a3.5 3.5 0 1 1 3.5 3.5c-1.4 0-3.5 1.2-3.5 3v1.5M20 17L5 27.5c-1.5 1 -.8 3 1 3h28c1.8 0 2.5-2 1-3L20 17z'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </div>

      {open ? (
        <div className={`fc-overlay is-${stage}`} role='dialog' aria-modal='true' aria-label='Fit Check' data-lenis-prevent>
          <div className='fc-grain' aria-hidden='true' />
          <div className='fc-lights' aria-hidden='true' />

          <header className='fc-top'>
            <span className='fc-kicker'>Fit Check · Angy&apos;s wardrobe of skills</span>
            <button type='button' ref={closeRef} className='fc-close' onClick={close}>
              ← back to portfolio
            </button>
          </header>

          {stage === 'rack' ? (
            <div className='fc-rack'>
              <div className='fc-decor' aria-hidden='true'>
                <span className='fc-watermark'>{look.name.replace('The ', '').replace(' Look', '')}</span>
                <span className='fc-rail' />
                <span className='fc-tag fc-tag-a'>SS / 26 · Collection</span>
                <span className='fc-tag fc-tag-b'>Look {String(index + 1).padStart(2, '0')} · One of one</span>
                <span className='fc-tape' />
              </div>
              <div className='fc-stage'>
                <button type='button' className='fc-arrow' onClick={() => step(-1)} aria-label='Previous look'>
                  ←
                </button>
                <div className='fc-look-frame'>
                  <img
                    key={look.image}
                    src={look.image}
                    alt={`Illustration of Angy wearing ${look.name}`}
                    className={`fc-look-img ${dir > 0 ? 'from-right' : 'from-left'}`}
                  />
                </div>
                <button type='button' className='fc-arrow' onClick={() => step(1)} aria-label='Next look'>
                  →
                </button>
              </div>

              <div className='fc-panel'>
                <p className='fc-count'>
                  Look {String(index + 1).padStart(2, '0')} / {String(looks.length).padStart(2, '0')}
                </p>
                <h2 className='fc-title' key={look.name}>
                  {look.name.replace('The ', '').replace(' Look', '')} <em>look.</em>
                </h2>
                <p className='fc-sub'>{look.tagline} Every piece is one of my real skills.</p>

                <ul className='fc-pieces' key={`p-${look.name}`}>
                  {look.pieces.map((p, i) => (
                    <li key={p.item} style={{ animationDelay: `${i * 70}ms` }}>
                      <span className='fc-swatch' style={{ background: look.accent }} />
                      <div>
                        <p className='fc-item-name'>{p.item}</p>
                        <p className='fc-item-cap'>{p.note}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className='fc-thumbs' role='tablist' aria-label='Choose a look'>
                  {looks.map((l, i) => (
                    <button
                      key={l.name}
                      type='button'
                      role='tab'
                      aria-selected={i === index}
                      aria-label={l.name}
                      className={i === index ? 'is-active' : ''}
                      onClick={() => {
                        setDir(i > index ? 1 : -1);
                        setIndex(i);
                      }}
                    >
                      <img src={l.image} alt='' />
                    </button>
                  ))}
                </div>

                <div className='fc-actions'>
                  <button type='button' className='fc-primary' onClick={() => setStage('runway')}>
                    Walk the runway →
                  </button>
                </div>
              </div>
            </div>
          ) : null}

          {stage === 'runway' ? (
            <div className='fc-runway' aria-live='polite'>
              <div className='fc-flash' />
              <p className='fc-look-no'>Look {String(index + 1).padStart(2, '0')}</p>
              <div className='fc-walker'>
                <img src={look.image} alt={look.name} />
              </div>
              <div className='fc-floor' />
            </div>
          ) : null}

          {stage === 'cover' ? (
            <div className='fc-cover-wrap'>
              <div className='fc-cover-decor' aria-hidden='true'>
                <span className='fc-cover-word'>Fit check</span>
                {looks
                  .filter(l => l.name !== look.name)
                  .map((l, i) => (
                    <figure key={l.name} className={`fc-polaroid fc-pol-${i}`}>
                      <img src={l.image} alt='' />
                      <figcaption>{l.name.replace('The ', '')}</figcaption>
                    </figure>
                  ))}
                <span className='fc-stamp'>Issue 01 · Sold out</span>
              </div>
              <article className='fc-cover' style={{ background: look.soft, '--fc-accent': look.accent }}>
                <p className='fc-masthead'>{cover.masthead}</p>
                <p className='fc-issue'>{cover.issue}</p>
                <ul className='fc-lines'>
                  <li>{look.name}</li>
                  {look.pieces.map(p => (
                    <li key={p.item}>{p.item}</li>
                  ))}
                </ul>
                <span className='fc-badge' aria-hidden='true'>
                  Fashion
                  <br />× Tech
                </span>
                <div className='fc-inside'>
                  <p className='fc-inside-label'>Inside this issue</p>
                  <p>
                    <strong>AirSense:</strong> the data app that tells you when to breathe easy
                  </p>
                  <p>
                    <strong>Aurevo:</strong> designing stores with AI
                  </p>
                  <p>
                    <strong>4 looks.</strong> 1 developer. Zero bugs* <em>(*mostly)</em>
                  </p>
                </div>
                <img className='fc-cover-figure' src={look.image} alt='' />
                <span className='fc-barcode' aria-hidden='true' />
                <h3 className='fc-headline'>
                  {cover.headline.split('\n').map(l => (
                    <span key={l}>{l}</span>
                  ))}
                </h3>
                <p className='fc-dek'>{cover.dek}</p>
              </article>
              <div className='fc-actions fc-cover-actions'>
                <button type='button' className='fc-ghost' onClick={() => setStage('rack')}>
                  Try another look
                </button>
                <button type='button' className='fc-primary' onClick={download}>
                  Download cover ↓
                </button>
                <button type='button' className='fc-ghost' onClick={close}>
                  Back to portfolio
                </button>
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </>,
    document.body,
  );
}
