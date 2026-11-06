'use client';

import { useRef, useState } from 'react';

import Link from 'next/link';

export function ProjectSlider({
  type,
  source,
  title,
  href,
  category,
  start = 0,
  end,
}) {
  const videoRef = useRef(null);
  const resetting = useRef(false);
  const [fading, setFading] = useState(false);

  const startVideo = (event) => {
    const video = event.currentTarget;

    video.currentTime = start;
    video.play().catch(() => {});
  };

  const handleTimeUpdate = (event) => {
    const video = event.currentTarget;

    if (!end || resetting.current) return;

    if (video.currentTime >= end - 0.35) {
      resetting.current = true;
      setFading(true);

      setTimeout(() => {
        video.currentTime = start;

        const handleSeeked = () => {
          video.play().catch(() => {});

          requestAnimationFrame(() => {
            setFading(false);
            resetting.current = false;
          });

          video.removeEventListener('seeked', handleSeeked);
        };

        video.addEventListener('seeked', handleSeeked);
      }, 250);
    }
  };

  if (type !== 'video') return null;

  return (
    <Link
      href={href}
      className='group relative block aspect-[16/10] w-full overflow-hidden rounded-[18px] bg-black'
      aria-label={`${title} case study`}
    >
      <video
        ref={videoRef}
        src={source}
        autoPlay
        muted
        playsInline
        preload='metadata'
        onLoadedMetadata={startVideo}
        onTimeUpdate={handleTimeUpdate}
        className={`absolute inset-0 h-full w-full object-cover object-top transition-[opacity,transform] duration-700 group-hover:scale-[1.04] ${
          fading ? 'opacity-0' : 'opacity-100'
        }`}
      />

      <div className='pointer-events-none absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-black/65 via-black/15 to-transparent' />

      <div className='pointer-events-none absolute bottom-5 left-5 right-5 flex items-end justify-between text-white'>
        <div>
          <p className='mb-2 text-[10px] uppercase tracking-[0.25em] opacity-70'>
            {category}
          </p>

          <p className='text-[clamp(1rem,1.3vw,1.3rem)] tracking-[-0.025em]'>
            {title}
          </p>
        </div>

        <p className='text-[10px] uppercase tracking-[0.2em] opacity-70 transition-transform duration-300 group-hover:translate-x-1'>
          View ↗
        </p>
      </div>
    </Link>
  );
}