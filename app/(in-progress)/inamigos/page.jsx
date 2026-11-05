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
  Globe2,
  Heart,
  MoveRight,
  Sparkles,
  Users,
} from 'lucide-react';
import Link from 'next/link';

import { Transition } from '@/layout';

const ease = [0.22, 1, 0.36, 1];

const VIDEO_START = 9;
const VIDEO_END = 43;

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

const focusAreas = [
  {
    number: '01',
    title: 'Education',
    icon: Sparkles,
    description:
      'Creating opportunities through learning, access and community-led support.',
    word: 'learn',
  },
  {
    number: '02',
    title: 'Relief',
    icon: Heart,
    description:
      'Supporting communities through humanitarian initiatives and direct action.',
    word: 'care',
  },
  {
    number: '03',
    title: 'Empowerment',
    icon: Users,
    description:
      'Building stronger communities through initiatives centred around people.',
    word: 'grow',
  },
  {
    number: '04',
    title: 'Sustainability',
    icon: Globe2,
    description:
      'Extending impact through environmental and community-focused programmes.',
    word: 'sustain',
  },
];

const principles = [
  {
    number: '01',
    title: 'Human',
    description:
      'People and real-world impact remain the visual focus of the experience.',
  },
  {
    number: '02',
    title: 'Clear',
    description:
      'A restrained hierarchy helps visitors understand the foundation and its work quickly.',
  },
  {
    number: '03',
    title: 'Warm',
    description:
      'Editorial typography and an earthy palette create a more approachable digital presence.',
  },
];

const buildItems = [
  {
    number: '01',
    title: 'Structure',
    kicker: 'Hierarchy / UX',
    description:
      'Content is organised around purpose and impact, helping visitors move through the foundation without unnecessary complexity.',
  },
  {
    number: '02',
    title: 'Visual System',
    kicker: 'Type / Colour / Image',
    description:
      'Warm colour, editorial typography and human imagery create a visual system distinct from a conventional corporate website.',
  },
  {
    number: '03',
    title: 'Interaction',
    kicker: 'Motion / Responsive',
    description:
      'Subtle movement and responsive behaviour add energy without competing with the organisation’s message.',
  },
];

export default function InAmigos() {
  const prefersReducedMotion = useReducedMotion();

  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const filmRef = useRef(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroTitleY = useTransform(
    heroProgress,
    [0, 1],
    ['0%', '13%']
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

  const { scrollYProgress: filmProgress } = useScroll({
    target: filmRef,
    offset: ['start end', 'center center'],
  });

  const filmScale = useTransform(
    filmProgress,
    [0, 1],
    [0.94, 1]
  );

  const startVideoAtCrop = (event) => {
    const video = event.currentTarget;
    video.currentTime = VIDEO_START;
  };

  const loopCroppedVideo = (event) => {
    const video = event.currentTarget;

    if (video.currentTime >= VIDEO_END) {
      video.currentTime = VIDEO_START;
      video.play().catch(() => {});
    }
  };

  return (
    <Transition>
      <main className='overflow-x-clip bg-[#eee9df] text-[#173d32]'>
        {/* HERO */}
        <section
          ref={heroRef}
          className='relative min-h-[100svh] overflow-hidden bg-[#eee9df]'
        >
          <div className='pointer-events-none absolute -right-[3vw] bottom-[-5vw] select-none text-[27vw] font-medium leading-none tracking-[-0.08em] text-[#173d32]/[0.025]'>
            03
          </div>

          <div className='relative z-10 flex min-h-[100svh] flex-col px-5 pb-7 pt-24 sm:px-6 sm:pt-28 md:px-12 md:pb-9 md:pt-32 lg:px-[7vw]'>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.15, ease }}
              className='origin-left border-t border-[#173d32]/20'
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className='mt-5 flex items-center justify-between'
            >
              <p className='text-[9px] uppercase tracking-[0.32em] text-[#173d32]/45'>
                Selected Project / 05
              </p>

              <p className='text-right text-[9px] uppercase tracking-[0.32em] text-[#173d32]/45'>
                Non-Profit / Digital Experience
              </p>
            </motion.div>

            <div className='flex flex-1 flex-col justify-center py-10 md:py-12'>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.35,
                  ease,
                }}
                className='mb-5 flex items-center gap-3'
              >
                <span className='h-[1px] w-8 bg-[#b97868]' />

                <span className='text-[9px] uppercase tracking-[0.35em] text-[#173d32]/45'>
                  InAmigos Foundation
                </span>
              </motion.div>

              <div className='pb-[1.5vw]'>
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
                  style={{
                    y: prefersReducedMotion ? 0 : heroTitleY,
                    opacity: prefersReducedMotion ? 1 : heroOpacity,
                  }}
                  className='whitespace-nowrap pb-[0.1em] text-[16.2vw] font-medium leading-[0.9] tracking-[-0.085em] text-[#173d32]'
                >
                  InAmigos
                </motion.h1>
              </div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 24,
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
                className='mt-4 grid gap-8 md:grid-cols-2 md:items-end'
              >
                <h2 className='max-w-2xl pb-[0.08em] font-serif text-[clamp(2.5rem,4.6vw,5rem)] leading-[1] tracking-[-0.05em]'>
                  Small acts of kindness,
                  <span className='block pb-[0.08em] italic text-[#b97868]'>
                    shaping bigger lives.
                  </span>
                </h2>

                <div className='md:flex md:justify-end'>
                  <p className='max-w-sm text-sm leading-[1.7] text-[#173d32]/50'>
                    A digital experience for a non-profit working across
                    communities and causes in India.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 1,
              }}
              className='flex items-end justify-between border-t border-[#173d32]/20 pt-5'
            >
              <div>
                <p className='mb-2 text-[8px] uppercase tracking-[0.32em] text-[#173d32]/30'>
                  Designed & Developed
                </p>

                <p className='text-[10px] uppercase tracking-[0.25em] text-[#173d32]/55'>
                  Angelina Serpes
                </p>
              </div>

              <motion.a
                href='#project-info'
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.96 }}
                className='flex h-20 w-20 items-center justify-center rounded-full border border-[#173d32]/25 md:h-24 md:w-24'
              >
                <div className='flex flex-col items-center gap-2'>
                  <span className='text-[9px] uppercase tracking-[0.25em] text-[#173d32]/45'>
                    Explore
                  </span>

                  <motion.div
                    animate={
                      prefersReducedMotion
                        ? {}
                        : { y: [0, 5, 0] }
                    }
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <ArrowDown size={16} strokeWidth={1} />
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
            className='grid gap-10 border-t border-[#173d32]/20 pt-7 sm:grid-cols-2 lg:grid-cols-4'
          >
            {[
              ['Role', 'Design & Development'],
              ['Focus', 'Community / Impact / UX'],
              ['Type', 'Non-Profit Web Experience'],
              ['Project', 'InAmigos Foundation'],
            ].map(([label, value]) => (
              <div key={label}>
                <p className='mb-3 text-[9px] uppercase tracking-[0.28em] text-[#173d32]/40'>
                  {label}
                </p>

                <p className='text-sm text-[#173d32]/80'>
                  {value}
                </p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* MISSION */}
        <section className='px-5 pb-24 pt-10 sm:px-6 md:px-12 md:pb-28 lg:px-[8vw] lg:pb-32'>
          <div className='grid gap-12 lg:grid-cols-[0.4fr_1.6fr]'>
            <motion.div {...reveal}>
              <p className='text-[9px] uppercase tracking-[0.32em] text-[#173d32]/40'>
                01 / The Mission
              </p>
            </motion.div>

            <div>
              <motion.h2
                initial={{ opacity: 0, x: -45 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease }}
                className='max-w-6xl pb-[0.08em] font-serif text-[clamp(3.6rem,7vw,7.5rem)] leading-[0.96] tracking-[-0.06em]'
              >
                Impact begins
                <br />
                with people.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: 45 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.12,
                  ease,
                }}
                className='mt-1 pb-[0.1em] text-right font-serif text-[clamp(3.2rem,6.7vw,7.2rem)] italic leading-[1] tracking-[-0.055em] text-[#b97868]'
              >
                So should the experience.
              </motion.p>

              <motion.div
                {...reveal}
                className='mt-12 grid gap-8 md:grid-cols-2'
              >
                <p className='max-w-md text-base leading-[1.75] text-[#173d32]/60'>
                  The experience puts the organisation&apos;s purpose at the
                  centre — giving its work, communities and initiatives room
                  to speak before the interface does.
                </p>

                <p className='max-w-md text-base leading-[1.75] text-[#173d32]/40'>
                  Rather than treating the foundation like a corporate site,
                  the visual direction is warmer and more editorial, using
                  storytelling to create a stronger human connection.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* HUMAN-FIRST IMAGE */}
        <section
          ref={imageRef}
          className='pb-24 md:pb-28'
        >
          <div className='px-5 pb-7 sm:px-6 md:px-12 lg:px-[7vw]'>
            <motion.div
              {...reveal}
              className='flex items-center justify-between border-t border-[#173d32]/20 pt-5'
            >
              <p className='text-[9px] uppercase tracking-[0.3em] text-[#173d32]/40'>
                InAmigos / Human First
              </p>

              <p className='hidden text-[9px] uppercase tracking-[0.3em] text-[#173d32]/30 md:block'>
                Foundation / India
              </p>
            </motion.div>
          </div>

          <motion.div
            style={{
              scale: prefersReducedMotion ? 1 : imageScale,
            }}
            className='relative mx-auto aspect-[16/9] w-[92%] max-w-[1800px] overflow-hidden bg-[#173d32]'
          >
            <motion.img
              initial={{
                scale: 1.08,
                filter: 'blur(18px)',
              }}
              whileInView={{
                scale: 1,
                filter: 'blur(0px)',
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 1.25,
                ease,
              }}
              src='/images/inamigos.png'
              alt='InAmigos Foundation website'
              className='absolute inset-0 h-full w-full object-cover'
            />
          </motion.div>
        </section>

        {/* IMPACT INTRO */}
        <section className='overflow-hidden bg-[#173d32] px-5 pb-20 pt-24 text-[#eee9df] sm:px-6 md:px-12 md:pb-24 md:pt-28 lg:px-[6vw] lg:pt-32'>
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
          >
            <p className='mb-10 text-[9px] uppercase tracking-[0.32em] text-[#eee9df]/40'>
              One Foundation / Many Causes
            </p>

            <h2 className='pb-[0.12em] text-[clamp(3.8rem,9.8vw,10.5rem)] uppercase leading-[0.9] tracking-[-0.075em]'>
              <span className='block'>
                Different causes.
              </span>

              <motion.span
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.15,
                  ease,
                }}
                className='block pb-[0.1em] text-right font-serif normal-case italic text-[#b97868]'
              >
                One purpose.
              </motion.span>
            </h2>
          </motion.div>
        </section>

        {/* IMPACT AREAS */}
        <section className='bg-[#173d32] px-5 pb-28 text-[#eee9df] sm:px-6 md:px-12 lg:px-[8vw]'>
          <div className='border-t border-[#eee9df]/15'>
            {focusAreas.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial='rest'
                  whileHover='hover'
                  className='group relative border-b border-[#eee9df]/15'
                >
                  <motion.div
                    variants={{
                      rest: {
                        opacity: 0,
                        x: 70,
                      },
                      hover: {
                        opacity: 0.045,
                        x: 0,
                      },
                    }}
                    transition={{
                      duration: 0.55,
                      ease,
                    }}
                    className='pointer-events-none absolute right-[3%] top-1/2 hidden -translate-y-1/2 select-none font-serif text-[9vw] italic leading-none text-[#eee9df] lg:block'
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
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.75,
                      delay: index * 0.05,
                      ease,
                    }}
                    className='relative grid min-h-[150px] grid-cols-12 items-center py-8 md:min-h-[175px] md:py-10'
                  >
                    <motion.div
                      variants={{
                        rest: {
                          opacity: 0.25,
                          x: 0,
                        },
                        hover: {
                          opacity: 0.8,
                          x: 6,
                        },
                      }}
                      transition={{
                        duration: 0.4,
                        ease,
                      }}
                      className='col-span-2 md:col-span-1'
                    >
                      <span className='text-[10px]'>
                        {item.number}
                      </span>
                    </motion.div>

                    <div className='col-span-8 overflow-visible md:col-span-5'>
                      <motion.h3
                        variants={{
                          rest: {
                            x: 0,
                            color: '#eee9df',
                          },
                          hover: {
                            x: 18,
                            color: '#b97868',
                          },
                        }}
                        transition={{
                          duration: 0.45,
                          ease,
                        }}
                        className='pb-[0.08em] text-[clamp(2.5rem,5vw,5.2rem)] uppercase leading-[1] tracking-[-0.06em]'
                      >
                        {item.title}
                      </motion.h3>
                    </div>

                    <motion.div
                      variants={{
                        rest: {
                          opacity: 0.38,
                          x: 0,
                        },
                        hover: {
                          opacity: 0.95,
                          x: 14,
                        },
                      }}
                      transition={{
                        duration: 0.45,
                        ease,
                      }}
                      className='relative hidden md:col-span-4 md:block'
                    >
                      <p className='max-w-md text-sm leading-[1.7]'>
                        {item.description}
                      </p>

                      <motion.div
                        variants={{
                          rest: {
                            width: 0,
                          },
                          hover: {
                            width: 72,
                          },
                        }}
                        transition={{
                          duration: 0.5,
                          ease,
                        }}
                        className='mt-5 h-[1px] bg-[#b97868]'
                      />
                    </motion.div>

                    <div className='col-span-2 flex justify-end'>
                      <motion.div
                        variants={{
                          rest: {
                            scale: 1,
                            rotate: 0,
                            borderColor: 'rgba(238,233,223,0.12)',
                          },
                          hover: {
                            scale: 1.12,
                            rotate: 12,
                            borderColor: 'rgba(185,120,104,0.9)',
                          },
                        }}
                        transition={{
                          duration: 0.45,
                          ease,
                        }}
                        className='flex h-12 w-12 items-center justify-center rounded-full border'
                      >
                        <motion.div
                          variants={{
                            rest: {
                              color: 'rgba(238,233,223,0.4)',
                            },
                            hover: {
                              color: '#b97868',
                            },
                          }}
                        >
                          <Icon size={20} strokeWidth={1} />
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          <div className='mt-5 hidden items-center justify-between md:flex'>
            <p className='text-[8px] uppercase tracking-[0.3em] text-[#eee9df]/25'>
              Hover to explore
            </p>

            <p className='text-[8px] uppercase tracking-[0.3em] text-[#eee9df]/25'>
              InAmigos / Impact
            </p>
          </div>
        </section>

        {/* THE EXPERIENCE */}
        <section className='bg-[#eee9df] px-5 pb-14 pt-24 text-[#173d32] sm:px-6 md:px-12 md:pb-16 md:pt-28 lg:px-[7vw] lg:pt-32'>
          <div className='flex items-center justify-between border-t border-[#173d32]/20 pt-5'>
            <p className='text-[9px] uppercase tracking-[0.32em] text-[#173d32]/40'>
              02 / The Experience
            </p>

            <p className='hidden text-[9px] uppercase tracking-[0.3em] text-[#173d32]/30 md:block'>
              Website / Interaction
            </p>
          </div>

          <div className='mt-14 grid gap-10 md:grid-cols-2 md:items-end'>
            <motion.h2
              initial={{
                opacity: 0,
                x: -45,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease,
              }}
              className='pb-[0.1em] font-serif text-[clamp(3.5rem,6.5vw,7rem)] leading-[0.98] tracking-[-0.055em]'
            >
              Making impact

              <span className='block pb-[0.08em] italic text-[#b97868]'>
                easier to feel.
              </span>
            </motion.h2>

            <motion.div
              {...reveal}
              className='md:flex md:justify-end'
            >
              <p className='max-w-md text-base leading-[1.75] text-[#173d32]/50'>
                The interface uses scale, imagery and restrained motion to
                guide attention through the organisation&apos;s story without
                overwhelming the content.
              </p>
            </motion.div>
          </div>
        </section>

        {/* PROJECT FILM */}
        <section
          ref={filmRef}
          className='overflow-hidden bg-[#eee9df] pb-28 md:pb-32'
        >
          <div className='px-5 pb-6 sm:px-6 md:px-12 lg:px-[4vw]'>
            <motion.div
              {...reveal}
              className='flex items-center justify-between'
            >
              <p className='text-[8px] uppercase tracking-[0.3em] text-[#173d32]/30'>
                Project Film / InAmigos
              </p>

              <p className='text-[8px] uppercase tracking-[0.3em] text-[#173d32]/30'>
                00:09 — 00:43
              </p>
            </motion.div>
          </div>

          <motion.div
            style={{
              scale: prefersReducedMotion ? 1 : filmScale,
            }}
            className='relative mx-auto w-[96%] overflow-hidden bg-[#173d32] md:w-[94%]'
          >
            <div className='relative aspect-[3416/1938] w-full'>
              <video
                src='/inamigos-demo.mov'
                autoPlay
                muted
                playsInline
                preload='metadata'
                onLoadedMetadata={startVideoAtCrop}
                onTimeUpdate={loopCroppedVideo}
                className='h-full w-full object-cover'
              />
            </div>
          </motion.div>

          <div className='mx-auto mt-6 flex w-[96%] items-center justify-between md:w-[94%]'>
            <p className='text-[8px] uppercase tracking-[0.28em] text-[#173d32]/30'>
              Human / Editorial / Responsive
            </p>

            <p className='hidden text-[8px] uppercase tracking-[0.28em] text-[#173d32]/30 md:block'>
              Digital Experience
            </p>
          </div>
        </section>

        {/* DESIGN PRINCIPLES */}
        <section className='bg-[#eee9df] px-5 pb-28 text-[#173d32] sm:px-6 md:px-12 lg:px-[8vw]'>
          <motion.div
            {...reveal}
            className='mb-9 flex items-center justify-between'
          >
            <p className='text-[9px] uppercase tracking-[0.3em] text-[#173d32]/35'>
              Design Language
            </p>

            <p className='hidden text-[9px] uppercase tracking-[0.3em] text-[#173d32]/25 md:block'>
              Three Principles
            </p>
          </motion.div>

          <div className='border-t border-[#173d32]/20'>
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
                viewport={{ once: true }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.06,
                  ease,
                }}
                whileHover='hover'
                className='group grid grid-cols-12 items-center border-b border-[#173d32]/20 py-9 md:py-10'
              >
                <span className='col-span-2 text-xs text-[#173d32]/30 md:col-span-1'>
                  {item.number}
                </span>

                <motion.h3
                  variants={{
                    hover: {
                      x: 14,
                      color: '#b97868',
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
                  className='hidden max-w-md text-sm leading-[1.7] text-[#173d32]/45 md:col-span-5 md:block'
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
                      className='text-[#173d32]/40'
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* MARQUEE */}
        <section className='overflow-hidden bg-[#b97868] py-7 text-[#eee9df]'>
          <motion.div
            animate={
              prefersReducedMotion
                ? {}
                : { x: ['0%', '-50%'] }
            }
            transition={
              prefersReducedMotion
                ? {}
                : {
                    duration: 24,
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
                <span>People</span>
                <span className='opacity-35'>✦</span>

                <span>Purpose</span>
                <span className='opacity-35'>✦</span>

                <span>Community</span>
                <span className='opacity-35'>✦</span>

                <span>Impact</span>
                <span className='opacity-35'>✦</span>
              </div>
            ))}
          </motion.div>
        </section>

        {/* BEHIND THE BUILD */}
        <section className='relative overflow-hidden bg-[#173d32] px-5 py-24 text-[#eee9df] sm:px-6 md:px-12 md:py-28 lg:px-[8vw] lg:py-32'>
          <div className='pointer-events-none absolute -right-[2vw] top-10 select-none text-[24vw] font-medium leading-none tracking-[-0.08em] text-[#eee9df]/[0.018]'>
            03
          </div>

          <div className='relative z-10'>
            <div className='grid gap-10 lg:grid-cols-12'>
              <motion.div
                {...reveal}
                className='lg:col-span-3'
              >
                <p className='text-[9px] uppercase tracking-[0.32em] text-[#eee9df]/35'>
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
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.95,
                    ease,
                  }}
                  className='max-w-6xl pb-[0.12em] text-[clamp(3.8rem,8vw,8.5rem)] uppercase leading-[0.92] tracking-[-0.075em]'
                >
                  Purpose,

                  <span className='block pb-[0.1em] text-right font-serif normal-case italic text-[#b97868]'>
                    translated digitally.
                  </span>
                </motion.h2>

                <motion.p
                  {...reveal}
                  className='ml-auto mt-7 max-w-md text-base leading-[1.75] text-[#eee9df]/45'
                >
                  The project combines interface design, responsive frontend
                  development and content hierarchy to turn the foundation&apos;s
                  mission into a focused digital experience.
                </motion.p>
              </div>
            </div>

            <div className='mt-16 border-t border-[#eee9df]/15 md:mt-20'>
              {buildItems.map((item) => (
                <motion.div
                  key={item.number}
                  initial='rest'
                  whileHover='hover'
                  className='group relative overflow-hidden border-b border-[#eee9df]/15'
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
                    className='pointer-events-none absolute inset-0 bg-[#eee9df]'
                  />

                  <div className='relative z-10 grid min-h-[155px] grid-cols-12 items-center gap-y-5 py-8 md:min-h-[175px] md:py-10'>
                    <motion.span
                      variants={{
                        rest: {
                          color: 'rgba(238,233,223,0.28)',
                        },
                        hover: {
                          color: 'rgba(23,61,50,0.35)',
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
                          color: '#eee9df',
                        },
                        hover: {
                          x: 14,
                          color: '#173d32',
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
                          color: 'rgba(238,233,223,0.36)',
                        },
                        hover: {
                          color: 'rgba(23,61,50,0.58)',
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
                          color: 'rgba(238,233,223,0.45)',
                        },
                        hover: {
                          x: 7,
                          color: '#b97868',
                        },
                      }}
                      transition={{
                        duration: 0.4,
                        ease,
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

            <div className='mt-7 flex flex-col gap-6 pb-2 md:flex-row md:items-end md:justify-between'>
              <p className='max-w-sm text-[9px] uppercase leading-[1.8] tracking-[0.27em] text-[#eee9df]/30'>
                Interface design / frontend development / responsive experience
              </p>

              <div className='flex flex-wrap gap-x-6 gap-y-3'>
                {[
                  'JavaScript',
                  'Responsive UI',
                  'Interaction',
                  'Web Design',
                ].map((skill) => (
                  <span
                    key={skill}
                    className='text-[9px] uppercase tracking-[0.25em] text-[#eee9df]/45'
                  >
                    {skill} ↗
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING */}
        <section className='relative overflow-hidden bg-[#eee9df] px-5 py-24 text-[#173d32] sm:px-6 md:px-12 md:py-28 lg:px-[8vw] lg:py-32'>
          <div className='pointer-events-none absolute -right-[3vw] top-3 select-none font-serif text-[25vw] italic leading-none tracking-[-0.08em] text-[#173d32]/[0.025]'>
            I
          </div>

          <div className='relative z-10 border-t border-[#173d32]/20 pt-6'>
            <motion.div
              {...reveal}
              className='flex items-center justify-between'
            >
              <p className='text-[9px] uppercase tracking-[0.32em] text-[#173d32]/40'>
                InAmigos / 2026
              </p>

              <p className='hidden text-[9px] uppercase tracking-[0.32em] text-[#173d32]/30 md:block'>
                End of Case Study / 05
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
                viewport={{ once: true }}
                transition={{
                  duration: 0.95,
                  ease,
                }}
                className='pb-[0.08em] text-[clamp(3.8rem,9vw,9.5rem)] uppercase leading-[0.94] tracking-[-0.075em]'
              >
                Designed for
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
                viewport={{ once: true }}
                transition={{
                  duration: 0.95,
                  delay: 0.08,
                  ease,
                }}
                className='pb-[0.12em] text-right font-serif text-[clamp(4rem,9.5vw,10rem)] italic leading-[0.96] tracking-[-0.07em] text-[#b97868]'
              >
                real impact.
              </motion.h2>
            </div>

            <motion.div
              {...reveal}
              className='grid gap-10 border-t border-[#173d32]/20 pt-7 md:grid-cols-2'
            >
              <p className='max-w-md text-base leading-[1.7] text-[#173d32]/50'>
                A human-centred digital experience shaped around purpose,
                community and the stories behind the foundation&apos;s work.
              </p>

              <div className='flex flex-wrap items-end gap-x-10 gap-y-5 md:justify-end'>
                <motion.a
                  href='https://github.com/angelinaserpes/NGO-Awareness-Website'
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ x: 5 }}
                  className='group flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-[#173d32]/60 transition-colors hover:text-[#173d32]'
                >
                  GitHub Repository

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.2}
                    className='transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1'
                  />
                </motion.a>

                <motion.div whileHover={{ x: 5 }}>
                  <Link
                    href='/work'
                    className='group flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-[#173d32]/60 transition-colors hover:text-[#173d32]'
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
            </motion.div>
          </div>
        </section>

        {/* NEXT PROJECT — DAKOTA COFFEE */}
        <Link href='/revive' className='block'>
          <motion.section
            initial='rest'
            whileHover='hover'
            className='group relative min-h-[72vh] cursor-pointer overflow-hidden bg-[#eeeae2] text-[#111]'
          >
            {/* DAKOTA PREVIEW */}
            <motion.div
              variants={{
                rest: {
                  opacity: 0,
                  scale: 1.1,
                  filter: 'blur(18px)',
                },
                hover: {
                  opacity: 0.18,
                  scale: 1,
                  filter: 'blur(0px)',
                },
              }}
              transition={{
                duration: 0.9,
                ease,
              }}
              className='pointer-events-none absolute inset-0 bg-[url("/images/revive.png")] bg-cover bg-center'
            />

            {/* BOTTOM FADE */}
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
              className='pointer-events-none absolute inset-0 bg-gradient-to-b from-[#eeeae2]/20 via-[#eeeae2]/70 to-[#eeeae2]'
            />

            <div className='relative z-10 flex min-h-[72vh] flex-col px-5 py-10 sm:px-6 md:px-10 lg:px-[5vw] lg:py-14'>
              <div className='flex items-center justify-between border-t border-black/20 pt-6'>
                <p className='text-[9px] uppercase tracking-[0.32em] text-black/45'>
                  Next Project / 06
                </p>

                <div className='flex items-center gap-3'>
                  <span className='hidden text-[9px] uppercase tracking-[0.28em] text-black/35 md:block'>
                    View Project
                  </span>

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
              </div>

              <div className='flex flex-1 items-center'>
                <div className='w-full'>
                  <div className='w-full pb-5'>
                    <motion.h2
                      variants={{
                        rest: {
                          x: 0,
                        },
                        hover: {
                          x: 6,
                        },
                      }}
                      transition={{
                        duration: 0.75,
                        ease,
                      }}
                      className='w-full whitespace-nowrap text-[clamp(4.25rem,13.2vw,12.5rem)] leading-[0.8] tracking-[-0.075em] sm:text-[clamp(5rem,13vw,12.5rem)]'
                    >
                      Revive
                    </motion.h2>
                  </div>

                  <motion.div
                    variants={{
                      rest: {
                        opacity: 0.45,
                        y: 8,
                      },
                      hover: {
                        opacity: 1,
                        y: 0,
                      },
                    }}
                    transition={{
                      duration: 0.5,
                      ease,
                    }}
                    className='mt-8 flex items-center justify-between border-t border-black/20 pt-6'
                  >
                    <p className='max-w-sm text-sm leading-relaxed text-black/50'>
                      Continue into the next selected project.
                    </p>

                    <div className='flex h-16 w-16 items-center justify-center rounded-full border border-black/25 md:h-20 md:w-20'>
                      <ArrowUpRight
                        size={19}
                        strokeWidth={1}
                      />
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