'use client';

import { useRef } from 'react';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, MoveRight } from 'lucide-react';
import Link from 'next/link';

import { Transition } from '@/layout';

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.85, ease },
};

function LoopVideo({ src, poster, start = 0, end, className }) {
  const onLoaded = e => {
    e.currentTarget.currentTime = start;
    e.currentTarget.play().catch(() => {});
  };
  const onTime = e => {
    if (end && e.currentTarget.currentTime >= end) {
      e.currentTarget.currentTime = start;
      e.currentTarget.play().catch(() => {});
    }
  };
  return (
    <video
      src={src}
      poster={poster}
      autoPlay
      muted
      loop={!end}
      playsInline
      preload='auto'
      onLoadedMetadata={onLoaded}
      onTimeUpdate={onTime}
      className={className}
    />
  );
}

function Pulse({ label }) {
  return (
    <div className='flex items-center gap-2'>
      <motion.span
        animate={{ opacity: [1, 0.25, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className='h-1.5 w-1.5 rounded-full bg-white'
      />
      <span className='text-[9px] uppercase tracking-[0.3em] text-white/45'>{label}</span>
    </div>
  );
}

/** Hover row that wipes dark and reveals an image, like Phantom's model list. */
function RevealRow({ row, index }) {
  return (
    <motion.div
      initial='rest'
      animate='rest'
      whileHover='hover'
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75, delay: index * 0.08, ease }}
      className='group relative min-h-[150px] cursor-default overflow-hidden border-b border-black/20 md:min-h-[190px]'
    >
      <motion.div
        variants={{ rest: { x: '-101%' }, hover: { x: '0%' } }}
        transition={{ duration: 0.55, ease }}
        className='pointer-events-none absolute inset-0 z-0 bg-[#101010]'
      />
      {row.image ? (
        <motion.div
          variants={{ rest: { opacity: 0, x: 100, scale: 0.92 }, hover: { opacity: 1, x: 0, scale: 1 } }}
          transition={{ duration: 0.65, ease }}
          className='pointer-events-none absolute bottom-0 right-[5%] top-0 z-10 hidden w-[40%] items-center justify-center lg:flex'
        >
          <motion.img
            src={row.image}
            alt={row.name}
            loading='lazy'
            variants={{ rest: { y: 12 }, hover: { y: -4 } }}
            transition={{ duration: 1, ease }}
            className='max-h-[84%] w-full rounded-md object-cover object-top shadow-2xl'
          />
        </motion.div>
      ) : null}
      <div className='relative z-20 grid min-h-[150px] grid-cols-12 items-center py-10 md:min-h-[190px] md:py-14'>
        <motion.span
          variants={{ rest: { color: 'rgba(17,17,17,0.35)' }, hover: { color: 'rgba(238,234,226,0.38)' } }}
          className='col-span-2 text-xs md:col-span-1'
        >
          {String(index + 1).padStart(2, '0')}
        </motion.span>
        <motion.div
          variants={{ rest: { x: 0, color: '#111111' }, hover: { x: 18, color: '#eeeae2' } }}
          transition={{ duration: 0.45, ease }}
          className='col-span-10 md:col-span-5'
        >
          <h3 className='text-4xl uppercase leading-none tracking-[-0.055em] md:text-6xl lg:text-7xl'>{row.name}</h3>
        </motion.div>
        <motion.p
          variants={{ rest: { color: 'rgba(17,17,17,0.45)', opacity: 1 }, hover: { color: 'rgba(238,234,226,0.55)', opacity: 1 } }}
          className='col-span-10 col-start-3 mt-3 max-w-xs text-sm leading-relaxed md:col-span-4 md:col-start-auto md:mt-0 lg:opacity-100'
        >
          <span className='mb-2 block text-[9px] uppercase tracking-[0.25em] opacity-70'>{row.type}</span>
          {row.description}
        </motion.p>
      </div>
    </motion.div>
  );
}

function BuildRow({ item, index }) {
  return (
    <motion.div
      initial='rest'
      whileHover='hover'
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: index * 0.06, ease }}
      className='group relative overflow-hidden border-b border-white/15'
    >
      <motion.div
        variants={{ rest: { x: '-101%' }, hover: { x: '0%' } }}
        transition={{ duration: 0.55, ease }}
        className='pointer-events-none absolute inset-0 bg-[#eeeae2]'
      />
      <div className='relative z-10 grid min-h-[170px] grid-cols-12 items-center gap-y-5 py-9 md:min-h-[190px] md:py-12'>
        <motion.span
          variants={{ rest: { color: 'rgba(255,255,255,0.28)' }, hover: { color: 'rgba(17,17,17,0.35)' } }}
          className='col-span-2 text-[10px] md:col-span-1'
        >
          {String(index + 1).padStart(2, '0')}
        </motion.span>
        <motion.div
          variants={{ rest: { x: 0, color: '#eeeae2' }, hover: { x: 14, color: '#111111' } }}
          transition={{ duration: 0.45, ease }}
          className='col-span-10 md:col-span-5'
        >
          <p className='mb-3 text-[8px] uppercase tracking-[0.3em] opacity-40'>{item.kicker}</p>
          <h3 className='text-4xl uppercase leading-none tracking-[-0.055em] md:text-6xl lg:text-7xl'>{item.title}</h3>
        </motion.div>
        <motion.p
          variants={{ rest: { color: 'rgba(255,255,255,0.36)' }, hover: { color: 'rgba(17,17,17,0.58)' } }}
          className='col-span-10 col-start-3 max-w-lg text-sm leading-relaxed md:col-span-5 md:col-start-auto'
        >
          {item.description}
        </motion.p>
      </div>
    </motion.div>
  );
}

/**
 * Phantom-style case study. Every project page passes its own content.
 */
export function CaseStudy({ data, children }) {
  const reduce = useReducedMotion();
  const heroRef = useRef(null);
  const filmRef = useRef(null);
  const showRef = useRef(null);

  const { scrollYProgress: heroP } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const titleY = useTransform(heroP, [0, 1], ['0%', '25%']);
  const heroVideoScale = useTransform(heroP, [0, 1], [1, 1.12]);
  const { scrollYProgress: filmP } = useScroll({ target: filmRef, offset: ['start end', 'center center'] });
  const filmScale = useTransform(filmP, [0, 1], [0.84, 1]);
  const filmRadius = useTransform(filmP, [0, 1], [30, 0]);
  const { scrollYProgress: showP } = useScroll({ target: showRef, offset: ['start end', 'end start'] });
  const showY = useTransform(showP, [0, 1], [70, -70]);

  const d = data;

  return (
    <Transition>
      <main className='overflow-hidden bg-[#0d0d0d] text-[#eeeae2]'>
        {/* HERO */}
        <section ref={heroRef} className='relative min-h-[100svh] overflow-hidden bg-[#0d0d0d]'>
          {d.heroImage ? (
            <motion.div style={{ scale: reduce ? 1 : heroVideoScale }} className='absolute inset-0'>
              <img src={d.heroImage} alt='' className='h-full w-full object-cover opacity-45' />
              <div className='absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/75 to-[#0d0d0d]/20' />
              <div className='absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-[#0d0d0d]/40' />
            </motion.div>
          ) : null}
          {d.heroVideo ? (
            <motion.div style={{ scale: reduce ? 1 : heroVideoScale }} className='absolute inset-0'>
              <LoopVideo
                src={d.heroVideo}
                poster={d.heroPoster}
                className='h-full w-full object-cover opacity-70'
              />
              <div className='absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/70 to-[#0d0d0d]/10' />
              <div className='absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-[#0d0d0d]/40' />
            </motion.div>
          ) : !d.heroImage && (
            <div className='pointer-events-none absolute left-1/2 top-1/2 h-[55vw] w-[55vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.035] blur-[120px]' />
          )}

          <div className='relative z-10 flex min-h-[100svh] flex-col px-5 pb-7 pt-24 sm:px-6 sm:pt-28 md:px-12 md:pb-8 md:pt-32 lg:px-[7vw]'>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease }}
              className='origin-left border-t border-white/20'
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className='mt-5 flex items-center justify-between'
            >
              <p className='text-[9px] uppercase tracking-[0.32em] text-white/40'>Selected Project / {d.number}</p>
              <p className='text-[9px] uppercase tracking-[0.32em] text-white/40'>{d.category}</p>
            </motion.div>

            <div className='flex flex-1 flex-col justify-center py-12 sm:py-16'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease }}
                className='mb-5 flex items-center gap-3'
              >
                <span className='h-[1px] w-8 bg-white/30' />
                <span className='text-[9px] uppercase tracking-[0.35em] text-white/45'>{d.kicker}</span>
              </motion.div>
              <div className='overflow-hidden pb-[0.12em]'>
                <motion.h1
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 1.25, delay: 0.1, ease }}
                  style={{ y: reduce ? 0 : titleY }}
                  className='whitespace-nowrap text-[15vw] font-medium uppercase leading-[0.8] tracking-[-0.075em] text-[#eeeae2]'
                >
                  {d.title}
                </motion.h1>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.8, ease }}
                className='mt-8 grid gap-7 sm:mt-10 md:grid-cols-2 md:gap-8'
              >
                <h2 className='max-w-lg text-3xl leading-[0.95] tracking-[-0.04em] md:text-5xl'>
                  {d.tagline[0]}
                  <br />
                  {d.tagline[1]}
                </h2>
                <div className='flex items-end md:justify-end'>
                  <p className='max-w-sm text-sm leading-relaxed text-white/50'>{d.intro}</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.15 }}
              className='flex items-end justify-between border-t border-white/15 pt-6'
            >
              <div>
                <p className='mb-2 text-[8px] uppercase tracking-[0.32em] text-white/30'>Designed & Developed</p>
                <p className='text-[10px] uppercase tracking-[0.25em] text-white/55'>Angelina Serpes</p>
              </div>
              <motion.a
                href='#case-film'
                whileHover={{ scale: 1.08, rotate: 4 }}
                whileTap={{ scale: 0.96 }}
                className='flex h-24 w-24 items-center justify-center rounded-full border border-white/20 text-center md:h-28 md:w-28'
              >
                <div>
                  <span className='block text-[8px] uppercase tracking-[0.25em] text-white/50'>{d.film ? 'Play' : 'Explore'}</span>
                  <span className='mt-1 block text-[8px] uppercase tracking-[0.25em] text-white/50'>{d.film ? 'Film ↘' : 'Project ↘'}</span>
                </div>
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* PROJECT INFO */}
        <section className='px-5 py-20 sm:px-6 sm:py-24 md:px-12 md:py-28 lg:px-[10vw] lg:py-40'>
          <motion.div {...fadeUp} className='grid gap-12 border-t border-white/15 pt-8 md:grid-cols-4'>
            {d.info.map(([k, v]) => (
              <div key={k}>
                <p className='mb-4 text-[9px] uppercase tracking-[0.28em] text-white/35'>{k}</p>
                <p className='text-sm text-white/80'>{v}</p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* CONCEPT */}
        <section className='px-5 py-20 sm:px-6 sm:py-24 md:px-12 md:py-28 lg:px-[10vw] lg:py-44'>
          <motion.div {...fadeUp} className='grid gap-14 lg:grid-cols-[0.55fr_1.45fr]'>
            <p className='text-[9px] uppercase tracking-[0.32em] text-white/35'>01 / The Concept</p>
            <div>
              <h2 className='max-w-6xl text-5xl leading-[0.92] tracking-[-0.06em] md:text-7xl lg:text-[6.6vw]'>
                {d.concept.headline}
              </h2>
              <p className='mt-6 pr-[0.1em] text-right text-5xl italic leading-[0.92] tracking-[-0.06em] text-white/30 md:text-7xl lg:text-[6.6vw]'>
                {d.concept.italic}
              </p>
              <div className='mt-16 grid gap-8 md:grid-cols-2'>
                <p className='max-w-md text-base leading-relaxed text-white/55'>{d.concept.body[0]}</p>
                <p className='max-w-md text-base leading-relaxed text-white/35'>{d.concept.body[1]}</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* FILM */}
        <section id='case-film' ref={filmRef} className='pb-32 pt-12 md:pb-44'>
          <div className='px-6 pb-14 md:px-12 lg:px-[10vw]'>
            <div className='flex items-center justify-between border-t border-white/15 pt-6'>
              <p className='text-[9px] uppercase tracking-[0.3em] text-white/35'>{d.title} / In Motion</p>
              <div className='hidden md:block'>
                <Pulse label={d.film ? 'Playing' : 'Preview'} />
              </div>
            </div>
          </div>
          <motion.div
            style={{ scale: reduce ? 1 : filmScale, borderRadius: reduce ? 0 : filmRadius }}
            className='relative mx-auto w-full max-w-[1800px] overflow-hidden bg-black'
          >
            {d.film ? (
              <video src={d.film} poster={d.filmPoster} autoPlay muted loop playsInline preload='metadata' className='block h-auto w-full' />
            ) : (
              <img src={d.filmImage} alt={`${d.title} preview`} className='block h-auto w-full' />
            )}
            <div className='pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10' />
          </motion.div>
        </section>

        {/* EXPLORE (light) */}
        <section className='bg-[#eeeae2] px-5 py-20 text-[#111] sm:px-6 sm:py-24 md:px-12 md:py-28 lg:px-[6vw] lg:py-44'>
          <motion.div {...fadeUp}>
            <p className='mb-12 text-[9px] uppercase tracking-[0.32em] text-black/40'>{d.explore.label}</p>
            <h2 className='text-[clamp(4rem,10vw,10rem)] uppercase leading-[0.8] tracking-[-0.075em]'>
              <span className='block'>{d.explore.lines[0]}</span>
              <span className='block pr-[0.06em] text-right'>{d.explore.lines[1]}</span>
            </h2>
            <p className='mt-10 text-[10px] uppercase tracking-[0.3em] text-black/40 lg:hidden'>Tap through the rows</p>
            <p className='mt-10 hidden text-[10px] uppercase tracking-[0.3em] text-black/40 lg:block'>Hover the rows to look inside →</p>
          </motion.div>
        </section>
        <section className='bg-[#eeeae2] px-5 pb-24 text-[#111] sm:px-6 md:px-12 md:pb-32 lg:px-[8vw] lg:pb-44'>
          <div className='border-t border-black/20'>
            {d.explore.rows.map((row, i) => (
              <RevealRow key={row.name} row={row} index={i} />
            ))}
          </div>
        </section>

        {/* SHOWCASE */}
        <section ref={showRef} className='relative bg-[#151515] px-5 py-20 sm:px-6 sm:py-24 md:px-12 md:py-28 lg:px-[8vw] lg:py-44'>
          <div className='grid gap-20 lg:grid-cols-12'>
            <motion.div style={{ y: reduce ? 0 : showY }} className='lg:col-span-5'>
              <p className='mb-7 text-[9px] uppercase tracking-[0.32em] text-white/35'>02 / {d.showcase.label}</p>
              <h2 className='text-6xl uppercase leading-[0.86] tracking-[-0.06em] md:text-8xl'>
                {d.showcase.lines[0]}
                <br />
                {d.showcase.lines[1]}
              </h2>
              <p className='mt-10 max-w-md text-base leading-relaxed text-white/45'>{d.showcase.body}</p>
            </motion.div>
            <div className='lg:col-span-7'>
              <motion.div
                initial={{ opacity: 0, y: 70, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease }}
                className='relative overflow-hidden bg-black'
              >
                {d.showcase.video ? (
                  <LoopVideo
                    src={d.showcase.video}
                    start={d.showcase.start}
                    end={d.showcase.end}
                    className='block h-auto w-full'
                  />
                ) : (
                  <img src={d.showcase.image} alt={d.showcase.caption} className='block h-auto w-full' />
                )}
                <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent' />
                <div className='pointer-events-none absolute right-5 top-5'>
                  <Pulse label='Motion Study' />
                </div>
              </motion.div>
              <div className='mt-5 flex justify-between text-[8px] uppercase tracking-[0.25em] text-white/30'>
                <span>{d.title}</span>
                <span>{d.showcase.caption}</span>
              </div>
            </div>
          </div>
          {d.screens ? (
            <div className='mt-24 grid gap-6 md:mt-32 md:grid-cols-2'>
              {d.screens.map((s, i) => (
                <motion.figure
                  key={s.src}
                  {...fadeUp}
                  transition={{ duration: 0.85, delay: i * 0.1, ease }}
                  className='group m-0'
                >
                  <div className='overflow-hidden bg-black'>
                    <img
                      src={s.src}
                      alt={s.caption}
                      loading='lazy'
                      className='block h-auto w-full transition-transform duration-1000 group-hover:scale-[1.03]'
                    />
                  </div>
                  <figcaption className='mt-4 flex justify-between text-[8px] uppercase tracking-[0.25em] text-white/35'>
                    <span>{String(i + 1).padStart(2, '0')}</span>
                    <span>{s.caption}</span>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          ) : null}
        </section>

        {/* PAGE-SPECIFIC INTERACTIVE BLOCK */}
        {children}

        {/* MARQUEE */}
        <section className='overflow-hidden border-y border-white/10 bg-[#0d0d0d] py-8'>
          <motion.div
            animate={reduce ? { x: '0%' } : { x: ['0%', '-50%'] }}
            transition={reduce ? { duration: 0 } : { duration: 22, repeat: Infinity, ease: 'linear' }}
            className='flex w-max whitespace-nowrap'
          >
            {[1, 2].map(g => (
              <div key={g} className='flex items-center gap-12 pr-12 text-5xl uppercase tracking-[-0.05em] md:text-7xl'>
                {d.marquee.map(w => (
                  <span key={w} className='flex items-center gap-12'>
                    <span>{w}</span>
                    <span className='text-white/15'>✦</span>
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </section>

        {/* BEHIND THE BUILD */}
        <section className='relative overflow-hidden px-5 py-24 sm:px-6 md:px-12 md:py-32 lg:px-[8vw] lg:py-48'>
          <div className='pointer-events-none absolute right-[4vw] top-16 select-none text-[22vw] font-medium uppercase leading-none tracking-[-0.09em] text-white/[0.025]'>
            03
          </div>
          <motion.div {...fadeUp} className='relative z-10'>
            <div className='grid gap-12 lg:grid-cols-12'>
              <p className='text-[9px] uppercase tracking-[0.32em] text-white/35 lg:col-span-3'>03 / Behind the Build</p>
              <div className='lg:col-span-9'>
                <h2 className='max-w-6xl text-[clamp(3.6rem,8vw,8.5rem)] uppercase leading-[0.82] tracking-[-0.075em]'>
                  {d.build.lines[0]}
                  <br />
                  <span className='ml-[8vw] pr-[0.08em] italic text-white/30'>{d.build.lines[1]}</span>
                </h2>
                <p className='ml-auto mt-12 max-w-md text-base leading-relaxed text-white/45'>{d.build.body}</p>
              </div>
            </div>
            <div className='mt-16 border-t border-white/15 md:mt-24 lg:mt-32'>
              {d.build.rows.map((item, i) => (
                <BuildRow key={item.title} item={item} index={i} />
              ))}
            </div>
            <div className='mt-14 flex flex-wrap gap-x-6 gap-y-3'>
              {d.stack.map(s => (
                <span key={s} className='text-[9px] uppercase tracking-[0.25em] text-white/45'>
                  {s} ↗
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CLOSING */}
        <section className='relative overflow-hidden px-6 pb-32 pt-20 md:px-12 lg:px-[8vw] lg:pb-48 lg:pt-28'>
          <div className='pointer-events-none absolute right-[4vw] top-8 select-none text-[22vw] font-medium leading-none tracking-[-0.09em] text-white/[0.03]'>
            {d.title.charAt(0)}
          </div>
          <motion.div {...fadeUp} className='relative z-10 border-t border-white/15 pt-7'>
            <div className='flex items-center justify-between'>
              <p className='text-[9px] uppercase tracking-[0.32em] text-white/35'>{d.title} / 2026</p>
              <p className='hidden text-[9px] uppercase tracking-[0.32em] text-white/25 md:block'>End of Case Study / {d.number}</p>
            </div>
            <div className='pb-20 pt-20 md:pb-28 md:pt-28 lg:pb-36'>
              <motion.div className='overflow-hidden' initial='hidden' whileInView='show' viewport={{ once: true, amount: 0.1 }}>
                <motion.h2
                  variants={{ hidden: { y: '110%' }, show: { y: 0 } }}
                  transition={{ duration: 1, ease }}
                  className='text-[clamp(3.6rem,9.2vw,9.5rem)] uppercase leading-[0.86] tracking-[-0.07em]'
                >
                  {d.closing[0]}
                </motion.h2>
              </motion.div>
              <motion.div className='overflow-hidden pb-3 pr-[0.15em]' initial='hidden' whileInView='show' viewport={{ once: true, amount: 0.1 }}>
                <motion.h2
                  variants={{ hidden: { y: '110%' }, show: { y: 0 } }}
                  transition={{ duration: 1, delay: 0.08, ease }}
                  className='pr-[0.08em] text-right text-[clamp(3.6rem,9.2vw,9.5rem)] uppercase italic leading-[0.86] tracking-[-0.07em] text-white/35'
                >
                  {d.closing[1]}
                </motion.h2>
              </motion.div>
            </div>
            <div className='grid gap-12 border-t border-white/15 pt-8 md:grid-cols-2'>
              <p className='max-w-md text-base leading-relaxed text-white/45'>{d.summary}</p>
              <div className='flex flex-wrap items-end gap-x-10 gap-y-5 md:justify-end'>
                {d.links.map(l => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    whileHover={{ x: 5 }}
                    className='group flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-white/60 transition-colors hover:text-white'
                  >
                    {l.label}
                    <ArrowUpRight size={14} strokeWidth={1.2} className='transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1' />
                  </motion.a>
                ))}
                <motion.div whileHover={{ x: 5 }}>
                  <Link
                    href='/work'
                    className='group flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-white/60 transition-colors hover:text-white'
                  >
                    Back to Work
                    <ArrowUpRight size={14} strokeWidth={1.2} />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* NEXT PROJECT */}
        <Link href={d.next.href} className='block'>
          <motion.section
            initial='rest'
            whileHover='hover'
            className='group relative min-h-[72vh] cursor-pointer overflow-hidden bg-[#eeeae2] text-[#111]'
          >
            <motion.div
              variants={{ rest: { opacity: 0, scale: 1.1, filter: 'blur(18px)' }, hover: { opacity: 0.28, scale: 1, filter: 'blur(0px)' } }}
              transition={{ duration: 0.9, ease }}
              style={{ backgroundImage: `url(${d.next.image})` }}
              className='pointer-events-none absolute inset-0 bg-cover bg-center'
            />
            <div className='relative z-10 flex min-h-[72vh] flex-col px-5 py-10 sm:px-6 md:px-10 lg:px-[5vw] lg:py-14'>
              <div className='flex items-center justify-between border-t border-black/20 pt-6'>
                <p className='text-[9px] uppercase tracking-[0.32em] text-black/45'>Next Project / {d.next.number}</p>
                <motion.div variants={{ rest: { x: 0 }, hover: { x: 10 } }} transition={{ duration: 0.45, ease }}>
                  <MoveRight size={30} strokeWidth={1} />
                </motion.div>
              </div>
              <div className='flex flex-1 items-center'>
                <div className='w-full'>
                  <motion.h2
                    variants={{ rest: { x: 0 }, hover: { x: 6 } }}
                    transition={{ duration: 0.75, ease }}
                    className='w-full whitespace-nowrap pb-[0.12em] text-[clamp(4.25rem,13vw,12.5rem)] leading-[0.86] tracking-[-0.075em]'
                  >
                    {d.next.title}
                  </motion.h2>
                  <motion.div
                    variants={{ rest: { opacity: 0.45, y: 8 }, hover: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.5, ease }}
                    className='mt-8 flex items-center justify-between border-t border-black/20 pt-6'
                  >
                    <p className='max-w-sm text-sm leading-relaxed text-black/50'>Continue into the next selected project.</p>
                    <span className='text-[9px] uppercase tracking-[0.3em] text-black/45'>View Project</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.section>
        </Link>
      </main>
    </Transition>
  );
}
