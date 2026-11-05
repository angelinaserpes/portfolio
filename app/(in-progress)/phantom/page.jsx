'use client';

import { useRef } from 'react';

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import {
  ArrowUpRight,
  Circle,
  MoveRight,
  Palette,
  Settings2,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';

import { Transition } from '@/layout';

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  initial: {
    opacity: 0,
    y: 50,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    margin: '-80px',
  },
  transition: {
    duration: 0.85,
    ease,
  },
};

const models = [
  {
    number: '01',
    name: 'Aura',
    type: 'Grand Touring',
    description:
      'A refined expression of performance, presence and effortless luxury.',
    image: '/images/phantom-aura.png',
  },
  {
    number: '02',
    name: 'Vortex',
    type: 'Performance',
    description:
      'Sharper, faster and more aggressive — designed around movement.',
    image: '/images/phantom-vortex.png',
  },
  {
    number: '03',
    name: 'Spectre',
    type: 'Concept',
    description:
      'A futuristic interpretation of the Phantom design language.',
    image: '/images/phantom-spectre.png',
  },
];

const customizer = [
  {
    number: '01',
    title: 'Exterior',
    description:
      'Choose the visual identity of the vehicle through exterior colour.',
    icon: Palette,
  },
  {
    number: '02',
    title: 'Interior',
    description:
      'Shape the cabin through material and interior configuration.',
    icon: Settings2,
  },
  {
    number: '03',
    title: 'Wheels',
    description:
      'Complete the specification with a wheel design that changes its character.',
    icon: Circle,
  },
];


export default function Phantom() {
  const prefersReducedMotion = useReducedMotion();

  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const customizerRef = useRef(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroTitleY = useTransform(
    heroProgress,
    [0, 1],
    ['0%', '25%']
  );

  const { scrollYProgress: videoProgress } = useScroll({
    target: videoRef,
    offset: ['start end', 'center center'],
  });

  const videoScale = useTransform(
    videoProgress,
    [0, 1],
    [0.84, 1]
  );

  const videoRadius = useTransform(
    videoProgress,
    [0, 1],
    [30, 0]
  );

  const { scrollYProgress: customizerProgress } = useScroll({
    target: customizerRef,
    offset: ['start end', 'end start'],
  });

  const customizerY = useTransform(
    customizerProgress,
    [0, 1],
    [70, -70]
  );

  const handleCarLoopLoaded = (event) => {
    const video = event.currentTarget;

    video.currentTime = 0;
    video.play().catch(() => {});
  };

  const handleCarLoopTimeUpdate = (event) => {
    const video = event.currentTarget;

    if (video.currentTime >= 2.4) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  };

  return (
    <Transition>
      <main className='overflow-hidden bg-[#0d0d0d] text-[#eeeae2]'>

        {/* =========================================================
            HERO
        ========================================================= */}
        <section
          ref={heroRef}
          className='relative min-h-[100svh] overflow-hidden bg-[#0d0d0d]'
        >
          <div className='pointer-events-none absolute left-1/2 top-1/2 h-[55vw] w-[55vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[120px]' />

          <div className='relative z-10 flex min-h-[100svh] flex-col px-5 pb-7 pt-24 sm:px-6 sm:pt-28 md:px-12 md:pb-8 md:pt-32 lg:px-[7vw]'>

            <motion.div
              initial={{
                scaleX: 0,
              }}
              animate={{
                scaleX: 1,
              }}
              transition={{
                duration: 1.2,
                ease,
              }}
              className='origin-left border-t border-white/20'
            />

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.6,
              }}
              className='mt-5 flex items-center justify-between'
            >
              <p className='text-[9px] uppercase tracking-[0.32em] text-white/40'>
                Selected Project / 03
              </p>

              <p className='text-[9px] uppercase tracking-[0.32em] text-white/40'>
                Automotive / Digital Experience
              </p>
            </motion.div>

            <div className='flex flex-1 flex-col justify-center py-12 sm:py-16'>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.35,
                  ease,
                }}
                className='mb-5 flex items-center gap-3'
              >
                <span className='h-[1px] w-8 bg-white/30' />

                <span className='text-[9px] uppercase tracking-[0.35em] text-white/40'>
                  Digital Showroom
                </span>
              </motion.div>

              <div className='overflow-hidden pb-4'>

                <motion.h1
                  initial={{
                    y: '110%',
                  }}
                  animate={{
                    y: '0%',
                  }}
                  transition={{
                    duration: 1.25,
                    delay: 0.1,
                    ease,
                  }}
                  style={{
                    y: prefersReducedMotion ? 0 : heroTitleY,
                  }}
                  className='whitespace-nowrap text-[18vw] font-medium uppercase leading-[0.76] tracking-[-0.075em] text-[#eeeae2] sm:text-[17.2vw] sm:leading-[0.72]'
                >
                  Phantom
                </motion.h1>

              </div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.8,
                  ease,
                }}
                className='mt-8 grid gap-7 sm:mt-10 md:grid-cols-2 md:gap-8'
              >

                <h2 className='max-w-lg text-3xl leading-[0.95] tracking-[-0.04em] text-[#eeeae2] md:text-5xl'>
                  Experience the apex
                  <br />
                  of automotive luxury.
                </h2>

                <div className='flex items-end md:justify-end'>

                  <p className='max-w-sm text-sm leading-relaxed text-white/40'>
                    A digital automotive experience built around discovery,
                    customisation and interaction.
                  </p>

                </div>

              </motion.div>

            </div>

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 1.15,
              }}
              className='flex items-end justify-between border-t border-white/15 pt-6'
            >

              <div>

                <p className='mb-2 text-[8px] uppercase tracking-[0.32em] text-white/25'>
                  Designed & Developed
                </p>

                <p className='text-[10px] uppercase tracking-[0.25em] text-white/50'>
                  Angelina Serpes
                </p>

              </div>

              <motion.a
                href='#phantom-film'
                whileHover={{
                  scale: 1.08,
                  rotate: 4,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className='flex h-24 w-24 items-center justify-center rounded-full border border-white/20 text-center md:h-28 md:w-28'
              >

                <div>

                  <span className='block text-[8px] uppercase tracking-[0.25em] text-white/45'>
                    Play
                  </span>

                  <span className='mt-1 block text-[8px] uppercase tracking-[0.25em] text-white/45'>
                    Film ↘
                  </span>

                </div>

              </motion.a>

            </motion.div>

          </div>
        </section>

        {/* =========================================================
            PROJECT INFO
        ========================================================= */}
        <section className='px-5 py-20 sm:px-6 sm:py-24 md:px-12 md:py-28 lg:px-[10vw] lg:py-40'>

          <motion.div
            {...fadeUp}
            className='grid gap-12 border-t border-white/15 pt-8 md:grid-cols-4'
          >

            <div>

              <p className='mb-4 text-[9px] uppercase tracking-[0.28em] text-white/35'>
                Role
              </p>

              <p className='text-sm text-white/80'>
                Design & Development
              </p>

            </div>

            <div>

              <p className='mb-4 text-[9px] uppercase tracking-[0.28em] text-white/35'>
                Focus
              </p>

              <p className='text-sm text-white/80'>
                Luxury / Interaction / AI
              </p>

            </div>

            <div>

              <p className='mb-4 text-[9px] uppercase tracking-[0.28em] text-white/35'>
                Type
              </p>

              <p className='text-sm text-white/80'>
                Interactive Web Experience
              </p>

            </div>

            <div>

              <p className='mb-4 text-[9px] uppercase tracking-[0.28em] text-white/35'>
                Project
              </p>

              <p className='text-sm text-white/80'>
                Phantom
              </p>

            </div>

          </motion.div>

        </section>

        {/* =========================================================
            CONCEPT
        ========================================================= */}
        <section className='px-5 py-20 sm:px-6 sm:py-24 md:px-12 md:py-28 lg:px-[10vw] lg:py-44'>

          <motion.div
            {...fadeUp}
            className='grid gap-14 lg:grid-cols-[0.55fr_1.45fr]'
          >

            <div>

              <p className='text-[9px] uppercase tracking-[0.32em] text-white/35'>
                01 / The Concept
              </p>

            </div>

            <div>

              <h2 className='max-w-6xl text-5xl leading-[0.9] tracking-[-0.06em] md:text-7xl lg:text-[7.5vw]'>
                Luxury shouldn&apos;t feel like a catalogue.
              </h2>

              <p className='mt-6 text-right text-5xl italic leading-[0.9] tracking-[-0.06em] text-white/30 md:text-7xl lg:text-[7.5vw]'>
                It should feel like an experience.
              </p>

              <div className='mt-16 grid gap-8 md:grid-cols-2'>

                <p className='max-w-md text-base leading-relaxed text-white/55'>
                  Phantom was designed as a digital showroom rather than a
                  traditional product page — using motion, imagery and
                  interaction to create a stronger sense of presence.
                </p>

                <p className='max-w-md text-base leading-relaxed text-white/35'>
                  The experience moves from discovery into configuration,
                  allowing the visitor to explore vehicles and shape their own
                  interpretation of the car.
                </p>

              </div>

            </div>

          </motion.div>

        </section>

        {/* =========================================================
            FULL PROJECT FILM
        ========================================================= */}
        <section
          id='phantom-film'
          ref={videoRef}
          className='scroll-mt-0 pb-32 pt-12 md:pb-44'
        >

          <div className='px-6 pb-14 md:px-12 lg:px-[10vw]'>

            <div className='flex items-center justify-between border-t border-white/15 pt-6'>

              <p className='text-[9px] uppercase tracking-[0.3em] text-white/35'>
                Phantom / In Motion
              </p>

              <div className='hidden items-center gap-3 md:flex'>

                <motion.span
                  animate={{
                    opacity: [1, 0.25, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className='h-1.5 w-1.5 rounded-full bg-white'
                />

                <span className='text-[9px] uppercase tracking-[0.3em] text-white/35'>
                  Playing
                </span>

              </div>

            </div>

          </div>

          <motion.div
            style={{
              scale: prefersReducedMotion ? 1 : videoScale,
              borderRadius: prefersReducedMotion ? 0 : videoRadius,
            }}
            className='relative mx-auto aspect-[3380/1740] w-full max-w-[1800px] overflow-hidden bg-black'
          >

            <video
              src='/phantom-demo.mov'
              autoPlay
              muted
              loop
              playsInline
              preload='metadata'
              className='h-full w-full object-cover'
            />

            <div className='pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10' />

          </motion.div>

        </section>

        {/* =========================================================
            MODELS INTRO
        ========================================================= */}
        <section className='bg-[#eeeae2] px-5 py-20 text-[#111] sm:px-6 sm:py-24 md:px-12 md:py-28 lg:px-[6vw] lg:py-44'>

          <motion.div {...fadeUp}>

            <p className='mb-12 text-[9px] uppercase tracking-[0.32em] text-black/40'>
              Three Concepts / One Experience
            </p>

            <h2 className='text-[clamp(4.5rem,11vw,11rem)] uppercase leading-[0.78] tracking-[-0.075em]'>

              <span className='block'>
                Built to
              </span>

              <span className='block text-right'>
                be explored.
              </span>

            </h2>

          </motion.div>

        </section>

        {/* =========================================================
            INTERACTIVE MODELS
        ========================================================= */}
        <section className='bg-[#eeeae2] px-5 pb-24 text-[#111] sm:px-6 md:px-12 md:pb-32 lg:px-[8vw] lg:pb-44'>

          <div className='border-t border-black/20'>

            {models.map((model, index) => (
              <motion.div
                key={model.name}
                initial='rest'
                animate='rest'
                whileHover='hover'
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                variants={{
                  rest: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.08,
                  ease,
                }}
                className='group relative min-h-[150px] cursor-default overflow-hidden border-b border-black/20 md:min-h-[190px]'
              >

                <motion.div
                  variants={{
                    rest: {
                      x: '-101%',
                    },
                    hover: {
                      x: '0%',
                    },
                  }}
                  transition={{
                    duration: 0.55,
                    ease,
                  }}
                  className='pointer-events-none absolute inset-0 z-0 bg-[#101010]'
                />

                <motion.div
                  variants={{
                    rest: {
                      opacity: 0,
                      x: 100,
                      scale: 0.92,
                    },
                    hover: {
                      opacity: 1,
                      x: 0,
                      scale: 1,
                    },
                  }}
                  transition={{
                    duration: 0.65,
                    ease,
                  }}
                  className='pointer-events-none absolute bottom-0 right-[7%] top-0 z-10 hidden w-[42%] items-center justify-center lg:flex'
                >

                  <motion.img
                    src={model.image}
                    alt={`Phantom ${model.name}`}
                    loading='lazy'
                    decoding='async'
                    variants={{
                      rest: {
                        y: 12,
                      },
                      hover: {
                        y: -4,
                      },
                    }}
                    transition={{
                      duration: 1,
                      ease,
                    }}
                    className='max-h-[88%] w-full object-contain'
                  />

                </motion.div>

                <motion.div
                  variants={{
                    rest: {
                      opacity: 0,
                    },
                    hover: {
                      opacity: 1,
                    },
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className='pointer-events-none absolute inset-y-0 right-0 z-[11] hidden w-[55%] bg-gradient-to-r from-[#101010] via-transparent to-transparent lg:block'
                />

                <div className='relative z-20 grid min-h-[150px] grid-cols-12 items-center py-10 md:min-h-[190px] md:py-14'>

                  <motion.span
                    variants={{
                      rest: {
                        color: 'rgba(17,17,17,0.35)',
                      },
                      hover: {
                        color: 'rgba(238,234,226,0.38)',
                      },
                    }}
                    className='col-span-2 text-xs md:col-span-1'
                  >
                    {model.number}
                  </motion.span>

                  <motion.div
                    variants={{
                      rest: {
                        x: 0,
                        color: '#111111',
                      },
                      hover: {
                        x: 18,
                        color: '#eeeae2',
                      },
                    }}
                    transition={{
                      duration: 0.45,
                      ease,
                    }}
                    className='col-span-8 md:col-span-5'
                  >

                    <h3 className='text-5xl uppercase leading-none tracking-[-0.055em] md:text-7xl lg:text-8xl'>
                      {model.name}
                    </h3>

                  </motion.div>

                  <motion.p
                    variants={{
                      rest: {
                        color: 'rgba(17,17,17,0.35)',
                      },
                      hover: {
                        color: 'rgba(238,234,226,0.52)',
                      },
                    }}
                    className='relative z-30 hidden text-[10px] uppercase tracking-[0.25em] md:col-span-2 md:block'
                  >
                    {model.type}
                  </motion.p>

                  <motion.p
                    variants={{
                      rest: {
                        opacity: 1,
                        color: 'rgba(17,17,17,0.45)',
                      },
                      hover: {
                        opacity: 0,
                      },
                    }}
                    className='relative z-30 hidden max-w-xs text-sm leading-relaxed lg:col-span-3 lg:block'
                  >
                    {model.description}
                  </motion.p>

                  <motion.div
                    variants={{
                      rest: {
                        x: 0,
                        color: '#111111',
                      },
                      hover: {
                        x: 8,
                        color: '#eeeae2',
                      },
                    }}
                    className='relative z-30 col-span-2 flex justify-end md:col-span-1'
                  >

                    <MoveRight
                      size={25}
                      strokeWidth={1}
                    />

                  </motion.div>

                </div>

              </motion.div>
            ))}

          </div>

          <div className='mt-5 hidden items-center justify-between lg:flex'>

            <p className='text-[8px] uppercase tracking-[0.3em] text-black/30'>
              Hover to explore
            </p>

            <p className='text-[8px] uppercase tracking-[0.3em] text-black/30'>
              03 Models / Phantom
            </p>

          </div>

        </section>

        {/* =========================================================
            YOUR CAR
        ========================================================= */}
        <section
          ref={customizerRef}
          className='relative bg-[#151515] px-5 py-20 sm:px-6 sm:py-24 md:px-12 md:py-28 lg:px-[8vw] lg:py-44'
        >

          <div className='grid gap-20 lg:grid-cols-12'>

            <motion.div
              style={{
                y: prefersReducedMotion ? 0 : customizerY,
              }}
              className='lg:col-span-5'
            >

              <p className='mb-7 text-[9px] uppercase tracking-[0.32em] text-white/35'>
                02 / Customisation
              </p>

              <h2 className='text-6xl uppercase leading-[0.84] tracking-[-0.06em] md:text-8xl'>
                Your car.
                <br />
                Your spec.
              </h2>

              <p className='mt-10 max-w-md text-base leading-relaxed text-white/45'>
                Shape the Phantom through exterior, interior and wheel
                selections — creating a specification that feels distinctly
                yours.
              </p>

              <div className='mt-12 flex items-center gap-3'>

                <Sparkles
                  size={16}
                  strokeWidth={1.1}
                  className='text-white/40'
                />

                <p className='text-[9px] uppercase tracking-[0.28em] text-white/35'>
                  Interactive Configurator
                </p>

              </div>

            </motion.div>

            <div className='lg:col-span-7'>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 70,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1,
                  ease,
                }}
                className='relative aspect-[16/10] overflow-hidden bg-black'
              >

                <video
                  src='/phantom-demo.mov'
                  autoPlay
                  muted
                  playsInline
                  preload='auto'
                  onLoadedMetadata={handleCarLoopLoaded}
                  onTimeUpdate={handleCarLoopTimeUpdate}
                  className='h-full w-full object-cover'
                />

                <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent' />

                <div className='pointer-events-none absolute bottom-5 left-5'>

                  <p className='text-[8px] uppercase tracking-[0.3em] text-white/50'>
                    Phantom / Exterior
                  </p>

                </div>

                <div className='pointer-events-none absolute right-5 top-5 flex items-center gap-2'>

                  <motion.span
                    animate={{
                      opacity: [1, 0.3, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                    className='h-1.5 w-1.5 rounded-full bg-white'
                  />

                  <p className='text-[8px] uppercase tracking-[0.3em] text-white/50'>
                    Motion Study
                  </p>

                </div>

              </motion.div>

              <div className='mt-5 flex justify-between'>

                <p className='text-[8px] uppercase tracking-[0.25em] text-white/30'>
                  Phantom
                </p>

                <p className='text-[8px] uppercase tracking-[0.25em] text-white/30'>
                  Exterior / Motion
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* =========================================================
            CUSTOMIZER OPTIONS
        ========================================================= */}
        <section className='bg-[#151515] px-5 pb-24 sm:px-6 md:px-12 md:pb-32 lg:px-[8vw] lg:pb-44'>

          <div className='border-t border-white/15'>

            {customizer.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    ease,
                  }}
                  className='group grid grid-cols-12 items-center border-b border-white/15 py-9'
                >

                  <span className='col-span-2 text-xs text-white/25 md:col-span-1'>
                    {item.number}
                  </span>

                  <motion.h3
                    whileHover={{
                      x: 12,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className='col-span-8 cursor-default text-3xl uppercase tracking-[-0.04em] md:col-span-4 md:text-5xl'
                  >
                    {item.title}
                  </motion.h3>

                  <p className='hidden max-w-md text-sm leading-relaxed text-white/35 md:col-span-5 md:block'>
                    {item.description}
                  </p>

                  <div className='col-span-2 flex justify-end'>

                    <motion.div
                      whileHover={{
                        rotate: 15,
                        scale: 1.12,
                      }}
                    >

                      <Icon
                        size={23}
                        strokeWidth={1}
                        className='text-white/40'
                      />

                    </motion.div>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </section>

        {/* =========================================================
            GENERATIVE EXPERIENCE — PORTFOLIO STORY
        ========================================================= */}
        <section className='bg-[#eeeae2] px-5 py-24 text-[#111] sm:px-6 md:px-12 md:py-32 lg:px-[7vw] lg:py-48'>

          <motion.div {...fadeUp}>

            <div className='grid gap-12 lg:grid-cols-12'>

              <div className='lg:col-span-9'>

                <p className='mb-8 text-[9px] uppercase tracking-[0.32em] text-black/35'>
                  03 / Generative Experience
                </p>

                <h2 className='text-[clamp(4rem,9vw,9rem)] uppercase leading-[0.8] tracking-[-0.075em]'>
                  <span className='block'>Configure.</span>
                  <span className='block'>Imagine.</span>
                  <span className='block italic text-black/30'>Generate.</span>
                </h2>

              </div>

              <div className='flex items-end lg:col-span-3'>

                <p className='max-w-sm text-sm leading-relaxed text-black/45'>
                  The experience moves beyond browsing. A vehicle specification
                  becomes the starting point for an AI-generated visual direction.
                </p>

              </div>

            </div>

          </motion.div>

          {/* CONFIGURE — REAL PRODUCT FOOTAGE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease }}
            className='mt-20 border-t border-black/20 pt-6 md:mt-24 lg:mt-28'
          >

            <div className='mb-8 flex items-start justify-between gap-8'>

              <div>
                <p className='text-[9px] uppercase tracking-[0.3em] text-black/35'>
                  01 / Configure
                </p>
                <p className='mt-3 max-w-sm text-sm leading-relaxed text-black/45'>
                  Exterior, interior and wheel choices shape the vehicle before
                  generation begins.
                </p>
              </div>

              <p className='hidden text-right text-[9px] uppercase tracking-[0.28em] text-black/30 md:block'>
                Product Interaction / Phantom
              </p>

            </div>

            <div className='relative aspect-[3380/1740] overflow-hidden bg-[#111]'>

              <video
                src='/phantom-demo.mov'
                autoPlay
                muted
                loop
                playsInline
                preload='metadata'
                className='h-full w-full object-cover'
              />

              <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10' />

              <div className='pointer-events-none absolute bottom-5 left-5 right-5 flex items-end justify-between'>
                <p className='text-[8px] uppercase tracking-[0.3em] text-white/55'>
                  Configuration / In Product
                </p>
                <p className='hidden text-[8px] uppercase tracking-[0.3em] text-white/40 md:block'>
                  Select → Refine → Visualise
                </p>
              </div>

            </div>

          </motion.div>

          {/* IMAGINE — TRANSLATING CHOICES INTO A PROMPT */}
          <div className='mt-20 grid gap-10 border-t border-black/20 pt-8 md:mt-24 lg:mt-28 lg:grid-cols-12 lg:gap-12'>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className='lg:col-span-4'
            >

              <p className='text-[9px] uppercase tracking-[0.3em] text-black/35'>
                02 / Imagine
              </p>

              <h3 className='mt-8 text-5xl uppercase leading-[0.88] tracking-[-0.055em] md:text-6xl'>
                From choice
                <br />
                to direction.
              </h3>

              <p className='mt-8 max-w-sm text-sm leading-relaxed text-black/45'>
                The selected configuration is translated into a visual prompt —
                connecting product customisation with generative exploration.
              </p>

            </motion.div>

            <div className='lg:col-span-8'>

              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease }}
                className='bg-[#111] p-7 text-[#eeeae2] md:p-10'
              >

                <div className='flex items-center justify-between border-b border-white/15 pb-5'>
                  <p className='text-[8px] uppercase tracking-[0.3em] text-white/35'>
                    Specification / Example
                  </p>
                  <div className='flex items-center gap-2'>
                    <motion.span
                      animate={{ opacity: [0.25, 1, 0.25] }}
                      transition={{ duration: 1.8, repeat: Infinity }}
                      className='h-1.5 w-1.5 rounded-full bg-white/70'
                    />
                    <p className='text-[8px] uppercase tracking-[0.28em] text-white/35'>
                      Translating
                    </p>
                  </div>
                </div>

                <div className='grid gap-8 border-b border-white/15 py-8 md:grid-cols-3'>
                  {[
                    ['Exterior', 'Silver'],
                    ['Interior', 'Ivory'],
                    ['Wheels', 'Performance'],
                  ].map(([label, value], index) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, delay: index * 0.12, ease }}
                    >
                      <p className='text-[8px] uppercase tracking-[0.28em] text-white/30'>
                        {label}
                      </p>
                      <p className='mt-3 text-lg uppercase tracking-[-0.02em] text-white/85'>
                        {value}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className='py-8'>
                  <div className='mb-5 flex items-center gap-2'>
                    <Sparkles size={13} strokeWidth={1.2} className='text-white/35' />
                    <p className='text-[8px] uppercase tracking-[0.3em] text-white/35'>
                      Generative Prompt
                    </p>
                  </div>

                  <p className='max-w-3xl font-mono text-[12px] leading-[1.9] text-white/55 md:text-[13px]'>
                    {[
                      'Create a cinematic Phantom concept.',
                      'Silver exterior with sculptural reflections.',
                      'Ivory interior and performance wheels.',
                      'Luxury automotive photography, dramatic studio light,',
                      'refined editorial atmosphere and premium material detail.',
                    ].map((line, index) => (
                      <motion.span
                        key={line}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: 0.15 + index * 0.16 }}
                        className='block'
                      >
                        {line}
                      </motion.span>
                    ))}
                  </p>
                </div>

              </motion.div>

            </div>

          </div>

          {/* GENERATE — CINEMATIC REVEAL */}
          <div className='mt-20 border-t border-black/20 pt-8 md:mt-24 lg:mt-28'>

            <div className='mb-10 grid gap-8 lg:grid-cols-12'>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, ease }}
                className='lg:col-span-7'
              >
                <p className='text-[9px] uppercase tracking-[0.3em] text-black/35'>
                  03 / Generate
                </p>
                <h3 className='mt-7 text-5xl uppercase leading-[0.88] tracking-[-0.055em] md:text-7xl'>
                  A specification
                  <br />
                  becomes a world.
                </h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='flex items-end lg:col-span-5 lg:justify-end'
              >
                <p className='max-w-sm text-sm leading-relaxed text-black/45'>
                  The final step explores how generative AI can extend a configured
                  vehicle into a cinematic concept visual without interrupting the
                  luxury-focused experience.
                </p>
              </motion.div>

            </div>

            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.35 }}
              className='relative aspect-[16/9] overflow-hidden bg-[#111]'
            >

              <motion.img
                src='/images/phantom-aura.png'
                alt='Phantom generative concept visual'
                variants={{
                  hidden: { scale: 1.08, opacity: 0 },
                  visible: { scale: 1, opacity: 1 },
                }}
                transition={{ duration: 1.25, ease }}
                className='h-full w-full object-cover'
              />

              <motion.div
                variants={{
                  hidden: { x: '0%' },
                  visible: { x: '101%' },
                }}
                transition={{ duration: 1.15, delay: 0.15, ease }}
                className='pointer-events-none absolute inset-0 z-20 bg-[#eeeae2]'
              />

              <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10' />

              <div className='pointer-events-none absolute left-5 top-5 z-10 md:left-7 md:top-7'>
                <p className='text-[8px] uppercase tracking-[0.3em] text-white/45'>
                  AI / Visual Direction
                </p>
              </div>

              <div className='pointer-events-none absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between md:bottom-7 md:left-7 md:right-7'>
                <div>
                  <p className='text-[8px] uppercase tracking-[0.3em] text-white/40'>
                    Phantom / Concept Study
                  </p>
                  <p className='mt-2 text-sm uppercase tracking-[0.18em] text-white/75'>
                    Silver / Ivory / Performance
                  </p>
                </div>
                <p className='hidden text-[8px] uppercase tracking-[0.3em] text-white/35 md:block'>
                  Generated Direction / 01
                </p>
              </div>

            </motion.div>

            <div className='mt-5 flex flex-col gap-4 border-b border-black/20 pb-6 md:flex-row md:items-center md:justify-between'>
              <p className='text-[8px] uppercase tracking-[0.28em] text-black/30'>
                Prototype generative workflow / Portfolio case study
              </p>
              <p className='max-w-md text-[10px] leading-relaxed text-black/35 md:text-right'>
                The portfolio demonstrates the interaction concept while the original
                project contains the complete product experience.
              </p>
            </div>

          </div>

        </section>

        {/* =========================================================
            MARQUEE
        ========================================================= */}
        <section className='overflow-hidden border-y border-white/10 bg-[#0d0d0d] py-8'>

          <motion.div
            animate={
              prefersReducedMotion
                ? { x: '0%' }
                : { x: ['0%', '-50%'] }
            }
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : {
                    duration: 22,
                    repeat: Infinity,
                    ease: 'linear',
                  }
            }
            className='flex w-max whitespace-nowrap'
          >

            {[1, 2].map((group) => (

              <div
                key={group}
                className='flex items-center gap-12 pr-12 text-5xl uppercase tracking-[-0.05em] text-[#eeeae2] md:text-7xl'
              >

                <span>Discover</span>
                <span className='text-white/15'>✦</span>

                <span>Configure</span>
                <span className='text-white/15'>✦</span>

                <span>Experience</span>
                <span className='text-white/15'>✦</span>

                <span>Generate</span>
                <span className='text-white/15'>✦</span>

              </div>

            ))}

          </motion.div>

        </section>

        {/* =========================================================
            BEHIND THE BUILD
        ========================================================= */}
        <section className='relative overflow-hidden px-5 py-24 sm:px-6 md:px-12 md:py-32 lg:px-[8vw] lg:py-48'>

          <div className='pointer-events-none absolute -right-[2vw] top-16 select-none text-[28vw] font-medium uppercase leading-none tracking-[-0.09em] text-white/[0.018]'>
            04
          </div>

          <motion.div {...fadeUp} className='relative z-10'>

            <div className='grid gap-12 lg:grid-cols-12'>

              <div className='lg:col-span-3'>
                <p className='text-[9px] uppercase tracking-[0.32em] text-white/35'>
                  04 / Behind the Build
                </p>
              </div>

              <div className='lg:col-span-9'>
                <h2 className='max-w-6xl text-[clamp(4rem,8.6vw,9rem)] uppercase leading-[0.79] tracking-[-0.075em]'>
                  Built beyond
                  <br />
                  <span className='ml-[10vw] italic text-white/30'>the surface.</span>
                </h2>

                <p className='ml-auto mt-12 max-w-md text-base leading-relaxed text-white/45'>
                  Phantom was built as more than a visual concept. Motion,
                  configuration logic and generative workflows work together
                  to make the experience feel responsive, considered and alive.
                </p>
              </div>

            </div>

            <div className='mt-16 border-t border-white/15 md:mt-24 lg:mt-32'>

              {[
                {
                  number: '01',
                  title: 'Interaction',
                  kicker: 'Motion / Behaviour',
                  description:
                    'Scroll choreography, hover states and responsive transitions create a continuous sense of movement throughout the showroom.',
                },
                {
                  number: '02',
                  title: 'Configuration',
                  kicker: 'State / Customisation',
                  description:
                    'Exterior, interior and wheel selections turn the vehicle experience into an interface shaped by the visitor rather than a static catalogue.',
                },
                {
                  number: '03',
                  title: 'Generative AI',
                  kicker: 'Prompt / Visualisation',
                  description:
                    'Selected specifications are translated into structured visual prompts, extending configuration into an AI-assisted concept workflow.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.number}
                  initial='rest'
                  whileHover='hover'
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  variants={{
                    rest: { opacity: 1, y: 0 },
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.06,
                    ease,
                  }}
                  className='group relative overflow-hidden border-b border-white/15'
                >

                  <motion.div
                    variants={{
                      rest: { x: '-101%' },
                      hover: { x: '0%' },
                    }}
                    transition={{ duration: 0.55, ease }}
                    className='pointer-events-none absolute inset-0 bg-[#eeeae2]'
                  />

                  <div className='relative z-10 grid min-h-[170px] grid-cols-12 items-center gap-y-5 py-9 md:min-h-[190px] md:py-12'>

                    <motion.span
                      variants={{
                        rest: { color: 'rgba(255,255,255,0.28)' },
                        hover: { color: 'rgba(17,17,17,0.35)' },
                      }}
                      className='col-span-2 text-[10px] md:col-span-1'
                    >
                      {item.number}
                    </motion.span>

                    <motion.div
                      variants={{
                        rest: { x: 0, color: '#eeeae2' },
                        hover: { x: 14, color: '#111111' },
                      }}
                      transition={{ duration: 0.45, ease }}
                      className='col-span-10 md:col-span-5'
                    >
                      <p className='mb-3 text-[8px] uppercase tracking-[0.3em] opacity-40'>
                        {item.kicker}
                      </p>

                      <h3 className='text-4xl uppercase leading-none tracking-[-0.055em] md:text-6xl lg:text-7xl'>
                        {item.title}
                      </h3>
                    </motion.div>

                    <motion.p
                      variants={{
                        rest: { color: 'rgba(255,255,255,0.36)' },
                        hover: { color: 'rgba(17,17,17,0.58)' },
                      }}
                      className='col-span-10 col-start-3 max-w-lg text-sm leading-relaxed md:col-span-5 md:col-start-auto'
                    >
                      {item.description}
                    </motion.p>

                    <motion.div
                      variants={{
                        rest: { x: 0, rotate: 0, color: 'rgba(255,255,255,0.45)' },
                        hover: { x: 7, rotate: -8, color: '#111111' },
                      }}
                      transition={{ duration: 0.4, ease }}
                      className='col-span-2 hidden justify-end md:col-span-1 md:flex'
                    >
                      <ArrowUpRight size={24} strokeWidth={1} />
                    </motion.div>

                  </div>

                </motion.div>
              ))}

            </div>

            <div className='mt-8 flex flex-col gap-6 border-b border-white/15 pb-8 md:flex-row md:items-end md:justify-between'>

              <p className='max-w-sm text-[9px] uppercase leading-[1.8] tracking-[0.27em] text-white/30'>
                Frontend development / interaction design / generative systems
              </p>

              <div className='flex flex-wrap gap-x-6 gap-y-3'>
                {['JavaScript', 'Tailwind CSS', 'Framer Motion', 'Generative AI'].map((skill) => (
                  <span
                    key={skill}
                    className='text-[9px] uppercase tracking-[0.25em] text-white/45'
                  >
                    {skill} ↗
                  </span>
                ))}
              </div>

            </div>

          </motion.div>

        </section>

        {/* =========================================================
            PHANTOM CLOSING
        ========================================================= */}
        <section className='relative overflow-hidden px-6 pb-32 pt-20 md:px-12 lg:px-[8vw] lg:pb-48 lg:pt-28'>

          <div className='pointer-events-none absolute right-[-2vw] top-8 select-none text-[26vw] font-medium leading-none tracking-[-0.09em] text-white/[0.018]'>
            P
          </div>

          <motion.div
            {...fadeUp}
            className='relative z-10 border-t border-white/15 pt-7'
          >

            <div className='flex items-center justify-between'>
              <p className='text-[9px] uppercase tracking-[0.32em] text-white/35'>
                Phantom / 2026
              </p>

              <p className='hidden text-[9px] uppercase tracking-[0.32em] text-white/25 md:block'>
                End of Case Study / 03
              </p>
            </div>

            <div className='pb-20 pt-20 md:pb-28 md:pt-28 lg:pb-36'>
              <div className='overflow-hidden'>
                <motion.h2
                  initial={{ y: '110%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease }}
                  className='text-[clamp(4.2rem,10.5vw,10.5rem)] uppercase leading-[0.78] tracking-[-0.075em]'
                >
                  Designed to
                </motion.h2>
              </div>

              <div className='overflow-hidden pb-3'>
                <motion.h2
                  initial={{ y: '110%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.08, ease }}
                  className='text-right text-[clamp(4.2rem,10.5vw,10.5rem)] uppercase italic leading-[0.78] tracking-[-0.075em] text-white/35'
                >
                  be experienced.
                </motion.h2>
              </div>
            </div>

            <div className='grid gap-12 border-t border-white/15 pt-8 md:grid-cols-2'>
              <p className='max-w-md text-base leading-relaxed text-white/45'>
                A digital automotive case study combining cinematic storytelling,
                interactive configuration, frontend development and generative
                exploration into one cohesive experience.
              </p>

              <div className='flex flex-wrap items-end gap-x-10 gap-y-5 md:justify-end'>
                <motion.a
                  href='https://github.com/angelinaserpes/luxury-car'
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ x: 5 }}
                  className='group flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-white/60 transition-colors hover:text-white'
                >
                  View Source
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.2}
                    className='transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1'
                  />
                </motion.a>

                <motion.div whileHover={{ x: 5 }}>
                  <Link
                    href='/'
                    className='group flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-white/60 transition-colors hover:text-white'
                  >
                    Back to Work
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.2}
                      className='transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1'
                    />
                  </Link>
                </motion.div>
              </div>
            </div>

          </motion.div>

        </section>

        {/* =========================================================
            NEXT PROJECT
        ========================================================= */}
        <Link href='/evoltic' className='block'>

                    <motion.section
            initial='rest'
            whileHover='hover'
            className='group relative min-h-[72vh] cursor-pointer overflow-hidden bg-[#eeeae2] text-[#111]'
          >
            <motion.div
              variants={{
                rest: {
                  opacity: 0,
                  scale: 1.1,
                  filter: 'blur(18px)',
                },
                hover: {
                  opacity: 0.28,
                  scale: 1,
                  filter: 'blur(0px)',
                },
              }}
              transition={{
                duration: 0.9,
                ease,
              }}
              className='pointer-events-none absolute inset-0 bg-[url("/images/evoltic.png")] bg-cover bg-center'
            />

            <motion.div
              variants={{
                rest: {
                  opacity: 0,
                },
                hover: {
                  opacity: 1,
                },
              }}
              transition={{
                duration: 0.7,
                ease,
              }}
              className='pointer-events-none absolute inset-0 bg-gradient-to-b from-[#eeeae2]/15 via-[#eeeae2]/35 to-[#eeeae2]/80'
            />

            <div className='relative z-10 flex min-h-[72vh] flex-col px-5 py-10 sm:px-6 md:px-10 lg:px-[5vw] lg:py-14'>

              <div className='flex items-center justify-between border-t border-black/20 pt-6'>
                <p className='text-[9px] uppercase tracking-[0.32em] text-black/45'>
                  Next Project / 04
                </p>

                <div className='flex items-center gap-3'>
                  <span className='hidden text-[9px] uppercase tracking-[0.28em] text-black/35 md:block'>
                    View Project
                  </span>

                  <motion.div
                    variants={{
                      rest: { x: 0 },
                      hover: { x: 10 },
                    }}
                    transition={{ duration: 0.45, ease }}
                  >
                    <MoveRight size={30} strokeWidth={1} />
                  </motion.div>
                </div>
              </div>

              <div className='flex flex-1 items-center'>
                <div className='w-full'>
                  <div className='w-full pb-5'>
                    <motion.h2
                      variants={{
                        rest: { x: 0 },
                        hover: { x: 6 },
                      }}
                      transition={{ duration: 0.75, ease }}
                      className='w-full whitespace-nowrap text-[clamp(4.25rem,13.2vw,12.5rem)] leading-[0.8] tracking-[-0.075em] sm:text-[clamp(5rem,13vw,12.5rem)]'
                    >
                      Evoltic
                    </motion.h2>
                  </div>

                  <motion.div
                    variants={{
                      rest: { opacity: 0.45, y: 8 },
                      hover: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5, ease }}
                    className='mt-8 flex items-center justify-between border-t border-black/20 pt-6'
                  >
                    <p className='max-w-sm text-sm leading-relaxed text-black/50'>
                      Continue into the next selected project.
                    </p>

                    <div className='flex h-16 w-16 items-center justify-center rounded-full border border-black/25 md:h-20 md:w-20'>
                      <ArrowUpRight size={19} strokeWidth={1} />
                    </div>
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