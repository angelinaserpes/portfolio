'use client';

import { useRef } from 'react';

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  Coffee,
  MousePointer2,
  MoveRight,
  Sparkles,
} from 'lucide-react';
import Link from 'next/link';

import { Transition } from '@/layout';

const ease = [0.22, 1, 0.36, 1];

const VIDEO_START = 0;
const VIDEO_END = 20;

const reveal = {
  initial: {
    opacity: 0,
    y: 34,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    margin: '-70px',
  },
  transition: {
    duration: 0.85,
    ease,
  },
};

const experienceItems = [
  {
    number: '01',
    title: 'Browse',
    word: 'discover',
    icon: Coffee,
    description:
      'A visual-first experience that lets products, flavour and personality lead the journey.',
  },
  {
    number: '02',
    title: 'Explore',
    word: 'taste',
    icon: MousePointer2,
    description:
      'Clear interaction patterns make moving through drinks and content feel immediate and intuitive.',
  },
  {
    number: '03',
    title: 'Engage',
    word: 'play',
    icon: Sparkles,
    description:
      'Playful typography, colour and motion turn a simple café interface into a memorable digital experience.',
  },
];

const buildItems = [
  {
    number: '01',
    title: 'Visual Direction',
    kicker: 'Brand / Interface',
    description:
      'A soft, playful visual language gives Dakota Coffee a distinct personality while keeping the interface easy to navigate.',
  },
  {
    number: '02',
    title: 'Responsive UI',
    kicker: 'Layout / Frontend',
    description:
      'The interface adapts across screen sizes while preserving the oversized typography, imagery and hierarchy.',
  },
  {
    number: '03',
    title: 'Interaction',
    kicker: 'Motion / Experience',
    description:
      'Subtle transitions and responsive interactions add movement without distracting from the café content.',
  },
];

const principles = [
  {
    number: '01',
    title: 'Fresh',
    description:
      'A light visual system built around soft colour, product imagery and generous space.',
  },
  {
    number: '02',
    title: 'Playful',
    description:
      'Oversized typography and expressive compositions give the interface a stronger personality.',
  },
  {
    number: '03',
    title: 'Simple',
    description:
      'The experience remains easy to understand despite the more expressive visual direction.',
  },
];

export default function Dakota() {
  const prefersReducedMotion = useReducedMotion();

  const heroRef = useRef(null);
  const imageRef = useRef(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(
    heroProgress,
    [0, 1],
    ['0%', '14%']
  );

  const heroOpacity = useTransform(
    heroProgress,
    [0, 0.9],
    [1, 0.3]
  );

  const { scrollYProgress: imageProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'center center'],
  });

  const imageScale = useTransform(
    imageProgress,
    [0, 1],
    [0.94, 1]
  );

  const startVideo = (event) => {
    const video = event.currentTarget;
    video.currentTime = VIDEO_START;
    video.play().catch(() => {});
  };

  const loopVideo = (event) => {
    const video = event.currentTarget;

    if (video.currentTime >= VIDEO_END) {
      video.currentTime = VIDEO_START;
      video.play().catch(() => {});
    }
  };

  return (
    <Transition>
      <main className='overflow-x-clip bg-[#edf4f0] text-[#171717]'>
        {/* HERO */}
        <section
          ref={heroRef}
          className='relative min-h-[100svh] overflow-hidden bg-[#edf4f0]'
        >
          <div className='pointer-events-none absolute -bottom-[6vw] -right-[2vw] select-none text-[28vw] font-medium leading-none tracking-[-0.08em] text-[#171717]/[0.025]'>
            04
          </div>

          <div className='relative z-10 flex min-h-[100svh] flex-col px-5 pb-7 pt-24 sm:px-6 sm:pt-28 md:px-12 md:pb-9 md:pt-32 lg:px-[7vw]'>
            <motion.div
              initial={{
                scaleX: 0,
              }}
              animate={{
                scaleX: 1,
              }}
              transition={{
                duration: 1.15,
                ease,
              }}
              className='origin-left border-t border-black/20'
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
                delay: 0.5,
              }}
              className='mt-5 flex items-center justify-between'
            >
              <p className='text-[9px] uppercase tracking-[0.32em] text-black/40'>
                Selected Project / 07
              </p>

              <p className='text-right text-[9px] uppercase tracking-[0.32em] text-black/40'>
                Cafe / Digital Experience
              </p>
            </motion.div>

            <div className='flex flex-1 flex-col justify-center py-10 md:py-12'>
              <motion.div
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.35,
                  ease,
                }}
                className='mb-5 flex items-center gap-3'
              >
                <span className='h-[1px] w-8 bg-[#efaaa5]' />

                <span className='text-[9px] uppercase tracking-[0.35em] text-black/40'>
                  Dakota Coffee
                </span>
              </motion.div>

              <motion.div
                style={{
                  y: prefersReducedMotion ? 0 : heroY,
                  opacity: prefersReducedMotion
                    ? 1
                    : heroOpacity,
                }}
              >
                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 80,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1.15,
                    delay: 0.1,
                    ease,
                  }}
                  className='whitespace-nowrap pb-[0.12em] text-[14.2vw] font-medium leading-[0.9] tracking-[-0.085em]'
                >
                  Dakota Coffee
                </motion.h1>
              </motion.div>

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
                  delay: 0.7,
                  ease,
                }}
                className='mt-5 grid gap-8 md:grid-cols-2 md:items-end'
              >
                <h2 className='max-w-2xl pb-[0.1em] font-serif text-[clamp(2.7rem,5vw,5.4rem)] leading-[1] tracking-[-0.05em]'>
                  Made to feel

                  <span className='block pb-[0.1em] italic text-[#d98782]'>
                    fresh.
                  </span>
                </h2>

                <div className='md:flex md:justify-end'>
                  <p className='max-w-sm text-sm leading-[1.7] text-black/45'>
                    A playful café experience shaped through
                    product-led visuals, expressive typography
                    and responsive interaction.
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
                delay: 1,
              }}
              className='flex items-end justify-between border-t border-black/20 pt-5'
            >
              <div>
                <p className='mb-2 text-[8px] uppercase tracking-[0.32em] text-black/30'>
                  Designed & Developed
                </p>

                <p className='text-[10px] uppercase tracking-[0.25em] text-black/55'>
                  Angelina Serpes
                </p>
              </div>

              <motion.a
                href='#project-info'
                whileHover={{
                  scale: 1.07,
                  backgroundColor: '#171717',
                  color: '#edf4f0',
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className='flex h-20 w-20 items-center justify-center rounded-full border border-black/25 md:h-24 md:w-24'
              >
                <div className='flex flex-col items-center gap-2'>
                  <span className='text-[9px] uppercase tracking-[0.25em]'>
                    Explore
                  </span>

                  <motion.div
                    animate={
                      prefersReducedMotion
                        ? {}
                        : {
                            y: [0, 5, 0],
                          }
                    }
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <ArrowDown
                      size={16}
                      strokeWidth={1}
                    />
                  </motion.div>
                </div>
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* PROJECT INFO */}
        <section
          id='project-info'
          className='px-5 py-20 sm:px-6 md:px-12 md:py-24 lg:px-[8vw] lg:py-28'
        >
          <motion.div
            {...reveal}
            className='grid gap-10 border-t border-black/20 pt-7 sm:grid-cols-2 lg:grid-cols-4'
          >
            {[
              ['Role', 'Design & Development'],
              ['Focus', 'Visual / Interaction / UX'],
              ['Type', 'Cafe Web Experience'],
              ['Project', 'Dakota Coffee'],
            ].map(([label, value]) => (
              <div key={label}>
                <p className='mb-3 text-[9px] uppercase tracking-[0.28em] text-black/35'>
                  {label}
                </p>

                <p className='text-sm text-black/75'>
                  {value}
                </p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* CONCEPT */}
        <section className='px-5 pb-28 pt-10 sm:px-6 md:px-12 md:pb-32 lg:px-[8vw]'>
          <div className='grid gap-12 lg:grid-cols-[0.4fr_1.6fr]'>
            <motion.div {...reveal}>
              <p className='text-[9px] uppercase tracking-[0.32em] text-black/35'>
                01 / The Concept
              </p>
            </motion.div>

            <div>
              <motion.h2
                initial={{
                  opacity: 0,
                  x: -50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1,
                  ease,
                }}
                className='max-w-6xl pb-[0.1em] font-serif text-[clamp(3.6rem,7vw,7.5rem)] leading-[0.96] tracking-[-0.06em]'
              >
                More than a menu.
              </motion.h2>

              <motion.h2
                initial={{
                  opacity: 0,
                  x: 60,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1,
                  delay: 0.1,
                  ease,
                }}
                className='pb-[0.1em] text-right font-serif text-[clamp(3.4rem,6.7vw,7.2rem)] italic leading-[1] tracking-[-0.055em] text-[#d98782]'
              >
                A digital flavour.
              </motion.h2>

              <motion.div
                {...reveal}
                className='mt-12 grid gap-8 md:grid-cols-2'
              >
                <p className='max-w-md text-base leading-[1.75] text-black/60'>
                  Dakota Coffee turns a familiar café website into
                  a more expressive digital experience, where the
                  products and personality of the brand become part
                  of the interface.
                </p>

                <p className='max-w-md text-base leading-[1.75] text-black/40'>
                  Instead of relying on a conventional menu-first
                  layout, the design uses oversized type, soft colour
                  and product imagery to make browsing feel more
                  visual and engaging.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* MAIN PROJECT VISUAL */}
        <section
          ref={imageRef}
          className='pb-28 md:pb-32'
        >
          <div className='px-5 pb-6 sm:px-6 md:px-12 lg:px-[4vw]'>
            <motion.div
              {...reveal}
              className='flex items-center justify-between'
            >
              <p className='text-[8px] uppercase tracking-[0.3em] text-black/30'>
                Dakota Coffee / Digital Experience
              </p>

              <p className='hidden text-[8px] uppercase tracking-[0.3em] text-black/30 md:block'>
                Responsive / Interactive
              </p>
            </motion.div>
          </div>

          <motion.div
            style={{
              scale: prefersReducedMotion
                ? 1
                : imageScale,
            }}
            className='relative mx-auto aspect-[16/9] w-[94%] overflow-hidden bg-[#f1d8d4]'
          >
            <motion.img
              initial={{
                scale: 1.06,
              }}
              whileInView={{
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.4,
                ease,
              }}
              src='/images/dakota.png'
              alt='Dakota Coffee website'
              className='absolute inset-0 h-full w-full object-cover'
            />
          </motion.div>
        </section>

        {/* PROJECT FILM */}
        <section className='bg-[#171717] pb-28 pt-24 text-[#edf4f0] md:pb-32 md:pt-28'>
          <div className='px-5 sm:px-6 md:px-12 lg:px-[6vw]'>
            <motion.div
              {...reveal}
              className='flex items-end justify-between border-t border-white/15 pt-6'
            >
              <div>
                <p className='mb-3 text-[9px] uppercase tracking-[0.32em] text-white/30'>
                  Project Film
                </p>

                <h2 className='pb-[0.08em] font-serif text-[clamp(3rem,5vw,5.5rem)] leading-none tracking-[-0.05em]'>
                  Dakota in

                  <span className='italic text-[#efaaa5]'>
                    {' '}
                    motion.
                  </span>
                </h2>
              </div>

              <p className='hidden text-[8px] uppercase tracking-[0.3em] text-white/25 md:block'>
                00:00 — 00:20
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              margin: '-80px',
            }}
            transition={{
              duration: 1.1,
              ease,
            }}
            className='mx-auto mt-12 w-[94%]'
          >
            <div className='relative aspect-video overflow-hidden bg-black'>
              <video
                src='/dakota-demo.mov'
                autoPlay
                muted
                playsInline
                preload='metadata'
                onLoadedMetadata={startVideo}
                onTimeUpdate={loopVideo}
                className='absolute inset-0 h-full w-full object-cover'
              />
            </div>

            <div className='mt-5 flex items-center justify-between'>
              <p className='text-[8px] uppercase tracking-[0.28em] text-white/25'>
                Interaction / Product / Responsive UI
              </p>

              <div className='flex items-center gap-2'>
                <span className='h-1.5 w-1.5 rounded-full bg-[#efaaa5]' />

                <span className='text-[8px] uppercase tracking-[0.28em] text-white/30'>
                  Playing
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* EXPERIENCE INTRO */}
        <section className='overflow-hidden bg-[#171717] px-5 pb-20 pt-12 text-[#edf4f0] sm:px-6 md:px-12 md:pb-24 md:pt-16 lg:px-[6vw]'>
          <motion.p
            {...reveal}
            className='mb-10 text-[9px] uppercase tracking-[0.32em] text-white/35'
          >
            02 / The Experience
          </motion.p>

          <motion.h2
            initial={{
              opacity: 0,
              y: 45,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.95,
              ease,
            }}
            className='pb-[0.12em] text-[clamp(4rem,9vw,9.5rem)] uppercase leading-[0.9] tracking-[-0.075em]'
          >
            Designed to

            <motion.span
              initial={{
                opacity: 0,
                x: 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease,
              }}
              className='block pb-[0.1em] text-right font-serif normal-case italic text-[#efaaa5]'
            >
              feel refreshing.
            </motion.span>
          </motion.h2>
        </section>

        {/* EXPERIENCE ROWS */}
        <section className='bg-[#171717] px-5 pb-28 text-[#edf4f0] sm:px-6 md:px-12 lg:px-[8vw]'>
          <div className='border-t border-white/15'>
            {experienceItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial='rest'
                  whileHover='hover'
                  className='group relative border-b border-white/15'
                >
                  <motion.div
                    variants={{
                      rest: {
                        opacity: 0,
                        x: 70,
                      },
                      hover: {
                        opacity: 0.05,
                        x: 0,
                      },
                    }}
                    transition={{
                      duration: 0.55,
                      ease,
                    }}
                    className='pointer-events-none absolute right-[3%] top-1/2 hidden -translate-y-1/2 select-none font-serif text-[9vw] italic leading-none lg:block'
                  >
                    {item.word}
                  </motion.div>

                  <motion.div
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
                      duration: 0.75,
                      delay: index * 0.05,
                      ease,
                    }}
                    className='relative grid min-h-[165px] grid-cols-12 items-center py-9'
                  >
                    <span className='col-span-2 text-[10px] text-white/25 md:col-span-1'>
                      {item.number}
                    </span>

                    <motion.h3
                      variants={{
                        rest: {
                          x: 0,
                          color: '#edf4f0',
                        },
                        hover: {
                          x: 18,
                          color: '#efaaa5',
                        },
                      }}
                      transition={{
                        duration: 0.45,
                        ease,
                      }}
                      className='col-span-8 pb-[0.08em] text-[clamp(2.8rem,5.5vw,5.7rem)] uppercase leading-[1] tracking-[-0.06em] md:col-span-5'
                    >
                      {item.title}
                    </motion.h3>

                    <motion.p
                      variants={{
                        rest: {
                          opacity: 0.35,
                          x: 0,
                        },
                        hover: {
                          opacity: 0.8,
                          x: 12,
                        },
                      }}
                      className='hidden max-w-md text-sm leading-[1.7] md:col-span-4 md:block'
                    >
                      {item.description}
                    </motion.p>

                    <div className='col-span-2 flex justify-end'>
                      <motion.div
                        variants={{
                          rest: {
                            rotate: 0,
                            scale: 1,
                            borderColor:
                              'rgba(255,255,255,.15)',
                          },
                          hover: {
                            rotate: 12,
                            scale: 1.12,
                            borderColor: '#efaaa5',
                          },
                        }}
                        transition={{
                          duration: 0.45,
                          ease,
                        }}
                        className='flex h-12 w-12 items-center justify-center rounded-full border'
                      >
                        <Icon
                          size={20}
                          strokeWidth={1}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CUSTOMISATION */}
        <section className='bg-[#f1d8d4] px-5 py-24 text-[#171717] sm:px-6 md:px-12 md:py-28 lg:px-[7vw] lg:py-32'>
          <div className='grid gap-14 lg:grid-cols-12 lg:items-center'>
            <motion.div
              {...reveal}
              className='lg:col-span-5'
            >
              <p className='mb-8 text-[9px] uppercase tracking-[0.32em] text-black/35'>
                Product / Customisation
              </p>

              <h2 className='pb-[0.12em] font-serif text-[clamp(3.5rem,6vw,6.7rem)] leading-[0.96] tracking-[-0.055em]'>
                Built to order.

                <span className='block italic text-[#b96f6a]'>
                  Made your way.
                </span>
              </h2>

              <p className='mt-8 max-w-md text-base leading-[1.75] text-black/50'>
                The ordering experience moves beyond simply
                displaying products. Customers can shape a drink
                around their own preferences through size, milk,
                sweetness and add-on selections while the interface
                keeps the process clear and visual.
              </p>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 60,
                rotate: 2,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                rotate: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                ease,
              }}
              className='relative overflow-hidden lg:col-span-7'
            >
              <img
                src='/images/dakota-customize.png'
                alt='Dakota Coffee drink customization interface'
                className='aspect-[16/10] w-full object-cover object-top'
              />
            </motion.div>
          </div>
        </section>

        {/* DESIGN PRINCIPLES */}
        <section className='bg-[#edf4f0] px-5 py-28 text-[#171717] sm:px-6 md:px-12 lg:px-[8vw]'>
          <motion.div
            {...reveal}
            className='mb-10 flex items-center justify-between'
          >
            <p className='text-[9px] uppercase tracking-[0.3em] text-black/35'>
              Design Language
            </p>

            <p className='hidden text-[9px] uppercase tracking-[0.3em] text-black/25 md:block'>
              Three Principles
            </p>
          </motion.div>

          <div className='border-t border-black/20'>
            {principles.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -30 : 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.06,
                  ease,
                }}
                whileHover='hover'
                className='grid grid-cols-12 items-center border-b border-black/20 py-9 md:py-10'
              >
                <span className='col-span-2 text-xs text-black/25 md:col-span-1'>
                  {item.number}
                </span>

                <motion.h3
                  variants={{
                    hover: {
                      x: 14,
                      color: '#d98782',
                    },
                  }}
                  transition={{
                    duration: 0.4,
                    ease,
                  }}
                  className='col-span-8 pb-[0.08em] font-serif text-4xl leading-[1.05] tracking-[-0.045em] md:col-span-4 md:text-6xl'
                >
                  {item.title}
                </motion.h3>

                <motion.p
                  variants={{
                    hover: {
                      x: 10,
                      opacity: 0.75,
                    },
                  }}
                  className='hidden max-w-md text-sm leading-[1.7] text-black/40 md:col-span-5 md:block'
                >
                  {item.description}
                </motion.p>

                <div className='col-span-2 flex justify-end'>
                  <motion.div
                    variants={{
                      hover: {
                        x: 9,
                      },
                    }}
                    transition={{
                      duration: 0.35,
                      ease,
                    }}
                  >
                    <MoveRight
                      size={23}
                      strokeWidth={1}
                      className='text-black/40'
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* MARQUEE */}
        <section className='overflow-hidden bg-[#efaaa5] py-7 text-[#171717]'>
          <motion.div
            animate={
              prefersReducedMotion
                ? {}
                : {
                    x: ['0%', '-50%'],
                  }
            }
            transition={
              prefersReducedMotion
                ? {}
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
                className='flex items-center gap-12 pr-12 pb-[0.08em] font-serif text-5xl italic leading-[1.1] tracking-[-0.05em] md:text-7xl'
              >
                <span>Fresh</span>
                <span className='opacity-30'>✦</span>
                <span>Playful</span>
                <span className='opacity-30'>✦</span>
                <span>Responsive</span>
                <span className='opacity-30'>✦</span>
                <span>Interactive</span>
                <span className='opacity-30'>✦</span>
              </div>
            ))}
          </motion.div>
        </section>

        {/* BEHIND THE BUILD */}
        <section className='relative overflow-hidden bg-[#171717] px-5 py-24 text-[#edf4f0] sm:px-6 md:px-12 md:py-28 lg:px-[8vw] lg:py-32'>
          <div className='pointer-events-none absolute -right-[2vw] top-8 select-none text-[24vw] font-medium leading-none tracking-[-0.08em] text-white/[0.018]'>
            04
          </div>

          <div className='relative z-10'>
            <div className='grid gap-10 lg:grid-cols-12'>
              <motion.div
                {...reveal}
                className='lg:col-span-3'
              >
                <p className='text-[9px] uppercase tracking-[0.32em] text-white/35'>
                  03 / Behind the Build
                </p>
              </motion.div>

              <div className='lg:col-span-9'>
                <motion.h2
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.95,
                    ease,
                  }}
                  className='max-w-6xl pb-[0.12em] text-[clamp(3.8rem,8vw,8.5rem)] uppercase leading-[0.92] tracking-[-0.075em]'
                >
                  Built to

                  <span className='block pb-[0.1em] text-right font-serif normal-case italic text-[#efaaa5]'>
                    feel alive.
                  </span>
                </motion.h2>

                <motion.p
                  {...reveal}
                  className='ml-auto mt-7 max-w-md text-base leading-[1.75] text-white/40'
                >
                  Dakota combines interface design, responsive
                  frontend development and interaction to create a
                  café experience with a stronger digital personality.
                </motion.p>
              </div>
            </div>

            <div className='mt-16 border-t border-white/15 md:mt-20'>
              {buildItems.map((item) => (
                <motion.div
                  key={item.number}
                  initial='rest'
                  whileHover='hover'
                  className='group relative overflow-hidden border-b border-white/15'
                >
                  <motion.div
                    variants={{
                      rest: {
                        x: '-101%',
                      },
                      hover: {
                        x: 0,
                      },
                    }}
                    transition={{
                      duration: 0.55,
                      ease,
                    }}
                    className='pointer-events-none absolute inset-0 bg-[#edf4f0]'
                  />

                  <div className='relative z-10 grid min-h-[165px] grid-cols-12 items-center gap-y-5 py-9'>
                    <motion.span
                      variants={{
                        rest: {
                          color: 'rgba(255,255,255,.25)',
                        },
                        hover: {
                          color: 'rgba(0,0,0,.3)',
                        },
                      }}
                      className='col-span-2 text-[10px] md:col-span-1'
                    >
                      {item.number}
                    </motion.span>

                    <motion.div
                      variants={{
                        rest: {
                          x: 0,
                          color: '#edf4f0',
                        },
                        hover: {
                          x: 14,
                          color: '#171717',
                        },
                      }}
                      transition={{
                        duration: 0.45,
                        ease,
                      }}
                      className='col-span-10 md:col-span-5'
                    >
                      <p className='mb-3 text-[8px] uppercase tracking-[0.3em] opacity-40'>
                        {item.kicker}
                      </p>

                      <h3 className='pb-[0.08em] text-4xl uppercase leading-[1] tracking-[-0.055em] md:text-6xl lg:text-7xl'>
                        {item.title}
                      </h3>
                    </motion.div>

                    <motion.p
                      variants={{
                        rest: {
                          color: 'rgba(255,255,255,.35)',
                        },
                        hover: {
                          color: 'rgba(0,0,0,.55)',
                        },
                      }}
                      className='col-span-10 col-start-3 max-w-lg text-sm leading-[1.7] md:col-span-5 md:col-start-auto'
                    >
                      {item.description}
                    </motion.p>

                    <motion.div
                      variants={{
                        rest: {
                          x: 0,
                          color: 'rgba(255,255,255,.4)',
                        },
                        hover: {
                          x: 7,
                          color: '#d98782',
                        },
                      }}
                      className='col-span-2 hidden justify-end md:col-span-1 md:flex'
                    >
                      <ArrowUpRight
                        size={24}
                        strokeWidth={1}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className='mt-7 flex flex-col gap-6 md:flex-row md:items-end md:justify-between'>
              <p className='max-w-sm text-[9px] uppercase leading-[1.8] tracking-[0.27em] text-white/25'>
                Interface design / frontend development / responsive
                experience
              </p>

              <div className='flex flex-wrap gap-x-6 gap-y-3'>
                {[
                  'Frontend',
                  'Responsive UI',
                  'Interaction',
                  'Web Design',
                ].map((skill) => (
                  <span
                    key={skill}
                    className='text-[9px] uppercase tracking-[0.25em] text-white/40'
                  >
                    {skill} ↗
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING */}
        <section className='relative overflow-hidden bg-[#edf4f0] px-5 py-24 text-[#171717] sm:px-6 md:px-12 md:py-28 lg:px-[8vw] lg:py-32'>
          <div className='pointer-events-none absolute -right-[2vw] top-0 select-none font-serif text-[25vw] italic leading-none text-black/[0.025]'>
            D
          </div>

          <div className='relative z-10 border-t border-black/20 pt-6'>
            <motion.div
              {...reveal}
              className='flex items-center justify-between'
            >
              <p className='text-[9px] uppercase tracking-[0.32em] text-black/35'>
                Dakota Coffee / 2026
              </p>

              <p className='hidden text-[9px] uppercase tracking-[0.32em] text-black/30 md:block'>
                End of Case Study / 07
              </p>
            </motion.div>

            <div className='py-16 md:py-20'>
              <motion.h2
                initial={{
                  opacity: 0,
                  x: -60,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.95,
                  ease,
                }}
                className='pb-[0.08em] text-[clamp(3.8rem,9vw,9.5rem)] uppercase leading-[0.94] tracking-[-0.075em]'
              >
                Fresh by
              </motion.h2>

              <motion.h2
                initial={{
                  opacity: 0,
                  x: 70,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.95,
                  delay: 0.08,
                  ease,
                }}
                className='pb-[0.12em] text-right font-serif text-[clamp(4rem,9.5vw,10rem)] italic leading-[0.96] tracking-[-0.07em] text-[#d98782]'
              >
                design.
              </motion.h2>
            </div>

            <motion.div
              {...reveal}
              className='grid gap-10 border-t border-black/20 pt-7 md:grid-cols-2'
            >
              <p className='max-w-md text-base leading-[1.7] text-black/45'>
                A playful café experience balancing expressive visuals
                with clear, responsive interaction.
              </p>

              <div className='flex flex-wrap items-end gap-x-10 gap-y-5 md:justify-end'>
                <motion.a
                  href='https://github.com/angelinaserpes/dakota-cafe'
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{
                    x: 5,
                  }}
                  className='group flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-black/55 transition-colors hover:text-black'
                >
                  GitHub Repository

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.2}
                    className='transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1'
                  />
                </motion.a>

                <motion.div
                  whileHover={{
                    x: 5,
                  }}
                >
                  <Link
                    href='/experience'
                    className='group flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-black/55 transition-colors hover:text-black'
                  >
                    Beyond the Work

                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.2}
                      className='transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1'
                    />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* EXPERIENCE / ARCHIVE TRANSITION */}
        <Link
          href='/experience'
          className='block'
        >
          <motion.section
            initial='rest'
            whileHover='hover'
            className='group relative min-h-[68vh] cursor-pointer overflow-hidden bg-[#efaaa5] text-[#171717]'
          >
            <motion.div
              variants={{
                rest: {
                  opacity: 0,
                  scale: 1.1,
                  filter: 'blur(18px)',
                },
                hover: {
                  opacity: 0.1,
                  scale: 1,
                  filter: 'blur(0px)',
                },
              }}
              transition={{
                duration: 0.9,
                ease,
              }}
              className='pointer-events-none absolute inset-0 bg-[url("/images/dakota-customize.png")] bg-cover bg-center'
            />

            <div className='absolute inset-0 bg-gradient-to-b from-[#efaaa5]/70 via-[#efaaa5]/90 to-[#efaaa5]' />

            <div className='relative z-10 flex min-h-[68vh] flex-col px-5 py-10 sm:px-6 md:px-10 lg:px-[5vw] lg:py-14'>
              <div className='flex items-center justify-between border-t border-black/20 pt-6'>
                <div>
                  <p className='mb-2 text-[9px] uppercase tracking-[0.32em] text-black/45'>
                    Continue Exploring
                  </p>

                  <p className='text-[8px] uppercase tracking-[0.28em] text-black/30'>
                    Experience / Engineering / Archive
                  </p>
                </div>

                <motion.div
                  variants={{
                    rest: {
                      x: 0,
                    },
                    hover: {
                      x: 10,
                    },
                  }}
                  transition={{
                    duration: 0.45,
                    ease,
                  }}
                >
                  <MoveRight
                    size={30}
                    strokeWidth={1}
                  />
                </motion.div>
              </div>

              <div className='flex flex-1 items-center'>
                <motion.h2
                  variants={{
                    rest: {
                      x: 0,
                    },
                    hover: {
                      x: 10,
                    },
                  }}
                  transition={{
                    duration: 0.75,
                    ease,
                  }}
                  className='max-w-[95%] pb-[0.12em] text-[clamp(4rem,11vw,11rem)] leading-[0.88] tracking-[-0.08em]'
                >
                  Beyond

                  <span className='block font-serif italic'>
                    the Work
                  </span>
                </motion.h2>
              </div>

              <div className='flex items-center justify-between border-t border-black/20 pt-6'>
                <p className='max-w-md text-sm leading-[1.6] text-black/45'>
                  Experience, engineering projects and the work behind
                  the portfolio.
                </p>

                <motion.div
                  variants={{
                    rest: {
                      rotate: 0,
                      scale: 1,
                    },
                    hover: {
                      rotate: 45,
                      scale: 1.08,
                    },
                  }}
                  transition={{
                    duration: 0.45,
                    ease,
                  }}
                  className='flex h-16 w-16 items-center justify-center rounded-full border border-black/25 md:h-20 md:w-20'
                >
                  <ArrowUpRight
                    size={19}
                    strokeWidth={1}
                  />
                </motion.div>
              </div>
            </div>
          </motion.section>
        </Link>
      </main>
    </Transition>
  );
}