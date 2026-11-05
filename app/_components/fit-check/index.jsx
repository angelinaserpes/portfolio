'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { cover, slots } from './data';
import { FitFigure } from './figure';

function drawCover(picks) {
  const W = 900;
  const H = 1200;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = picks.top.color;
  ctx.fillRect(0, 0, W, H);
  const glow = ctx.createRadialGradient(W / 2, H * 0.55, 40, W / 2, H * 0.55, 620);
  glow.addColorStop(0, 'rgba(255,255,255,0.28)');
  glow.addColorStop(1, 'rgba(0,0,0,0.25)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = '#F2EDE4';
  ctx.textAlign = 'center';
  ctx.font = 'italic 700 300px Georgia, "Times New Roman", serif';
  ctx.fillText(cover.masthead, W / 2, 290);
  ctx.font = '500 22px Helvetica, Arial, sans-serif';
  ctx.fillText(cover.issue.toUpperCase(), W / 2, 340);
  ctx.textAlign = 'left';
  ctx.font = 'italic 64px Georgia, serif';
  cover.headline.split('\n').forEach((line, i) => ctx.fillText(line, 60, 820 + i * 72));
  ctx.font = '24px Helvetica, Arial, sans-serif';
  [`THE LOOK: ${picks.top.name}`, `STYLED WITH ${picks.bottom.name}`, `FINISHED WITH ${picks.accessory.name}`].forEach(
    (line, i) => ctx.fillText(line.toUpperCase(), 60, 470 + i * 44),
  );
  ctx.font = '20px Helvetica, Arial, sans-serif';
  ctx.globalAlpha = 0.7;
  ctx.fillText('ANGELINA SERPES · PORTFOLIO', 60, H - 60);
  ctx.globalAlpha = 1;
  return canvas;
}

export function FitCheck() {
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState('rack');
  const [hint, setHint] = useState(false);
  const [picks, setPicks] = useState({ top: 0, bottom: 0, accessory: 0 });
  const closeRef = useRef(null);

  const look = {
    top: slots[0].items[picks.top],
    bottom: slots[1].items[picks.bottom],
    accessory: slots[2].items[picks.accessory],
  };

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
    const onKey = e => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    return () => {
      root.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, close]);

  useEffect(() => {
    if (stage !== 'runway') return undefined;
    const t = setTimeout(() => setStage('cover'), 2600);
    return () => clearTimeout(t);
  }, [stage]);

  const cycle = (key, dir) => {
    const count = slots.find(s => s.key === key).items.length;
    setPicks(p => ({ ...p, [key]: (p[key] + dir + count) % count }));
  };

  const shuffle = () =>
    setPicks({
      top: Math.floor(Math.random() * slots[0].items.length),
      bottom: Math.floor(Math.random() * slots[1].items.length),
      accessory: Math.floor(Math.random() * slots[2].items.length),
    });

  const download = () => {
    const link = document.createElement('a');
    link.download = 'angy-fit-check-cover.png';
    link.href = drawCover(look).toDataURL('image/png');
    link.click();
  };

  return (
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
        <div className={`fc-overlay fc-${stage}`} role='dialog' aria-modal='true' aria-label='Fit Check' data-lenis-prevent>
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
              <div className='fc-stage'>
                <FitFigure {...look} />
              </div>
              <div className='fc-panel'>
                <h2 className='fc-title'>
                  Style the <em>developer.</em>
                </h2>
                <p className='fc-sub'>Every piece is one of my real skills. Build a look, then send it down the runway.</p>
                {slots.map(slot => {
                  const item = look[slot.key];
                  return (
                    <div key={slot.key} className='fc-slot'>
                      <div className='fc-slot-head'>
                        <span>
                          {slot.label} · {slot.hint}
                        </span>
                        <span>
                          {String(picks[slot.key] + 1).padStart(2, '0')} / {String(slot.items.length).padStart(2, '0')}
                        </span>
                      </div>
                      <div className='fc-slot-row'>
                        <button type='button' onClick={() => cycle(slot.key, -1)} aria-label={`Previous ${slot.label}`}>
                          ←
                        </button>
                        <div className='fc-item' key={item.name}>
                          <span className='fc-swatch' style={{ background: item.color }} />
                          <div>
                            <p className='fc-item-name'>{item.name}</p>
                            <p className='fc-item-cap'>{item.caption}</p>
                          </div>
                        </div>
                        <button type='button' onClick={() => cycle(slot.key, 1)} aria-label={`Next ${slot.label}`}>
                          →
                        </button>
                      </div>
                    </div>
                  );
                })}
                <div className='fc-actions'>
                  <button type='button' className='fc-ghost' onClick={shuffle}>
                    Shuffle
                  </button>
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
              <p className='fc-look-no'>Look 01</p>
              <div className='fc-walker'>
                <FitFigure {...look} />
              </div>
              <div className='fc-floor' />
            </div>
          ) : null}

          {stage === 'cover' ? (
            <div className='fc-cover-wrap'>
              <article className='fc-cover' style={{ background: look.top.color }}>
                <p className='fc-masthead'>{cover.masthead}</p>
                <p className='fc-issue'>{cover.issue}</p>
                <ul className='fc-lines'>
                  <li>The look: {look.top.name}</li>
                  <li>Styled with {look.bottom.name}</li>
                  <li>Finished with {look.accessory.name}</li>
                </ul>
                <div className='fc-cover-figure'>
                  <FitFigure {...look} />
                </div>
                <h3 className='fc-headline'>
                  {cover.headline.split('\n').map(l => (
                    <span key={l}>{l}</span>
                  ))}
                </h3>
                <p className='fc-dek'>{cover.dek}</p>
              </article>
              <div className='fc-actions fc-cover-actions'>
                <button type='button' className='fc-ghost' onClick={() => setStage('rack')}>
                  Restyle
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
    </>
  );
}
