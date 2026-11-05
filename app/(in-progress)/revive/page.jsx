'use client';

import {
  useRef,
} from 'react';

import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  Leaf,
  MoveRight,
  Search,
  ShoppingBag,
} from 'lucide-react';
import Link from 'next/link';

import {
  Transition,
} from '@/layout';

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
    duration: 0.8,
    ease,
  },
};

const principles = [
  {
    number: '01',
    title: 'Conscious',
    description:
      'Making the sustainable choice feel like the easy, obvious one.',
  },
  {
    number: '02',
    title: 'Simplicity',
    description:
      'A clean shopping flow that keeps attention on the products, not the interface.',
  },
  {
    number: '03',
    title: 'Impact',
    description:
      'Small eco-friendly purchases that add up to a real difference.',
  },
];

const features = [
  {
    number: '01',
    title: 'Discover',
    description:
      'Browse eco-friendly and recycled products, organised by category.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Choose',
    description:
      'Compare products and add sustainable alternatives to your cart.',
    icon: ShoppingBag,
  },
  {
    number: '03',
    title: 'Revive',
    description:
      'Check out on the web or the Android app and shop greener every time.',
    icon: Leaf,
  },
];

const stack = [
  'React',
  'TypeScript',
  'Vite',
  'Tailwind CSS',
  'Median (Android)',
  'Figma Make',
  'Frontend',
];

export default function Revive() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const designerRef = useRef(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroTitleY = useTransform(
    heroProgress,
    [0, 1],
    ['0%', '18%']
  );

  const heroOpacity = useTransform(
    heroProgress,
    [0, 0.85],
    [1, 0]
  );

  const { scrollYProgress: videoProgress } = useScroll({
    target: videoRef,
    offset: ['start end', 'center center'],
  });

  const videoScale = useTransform(
    videoProgress,
    [0, 1],
    [0.86, 1]
  );

  const videoRadius = useTransform(
    videoProgress,
    [0, 1],
    [28, 0]
  );

  const { scrollYProgress: designerProgress } = useScroll({
    target: designerRef,
    offset: ['start end', 'end start'],
  });

  const designerCopyY = useTransform(
    designerProgress,
    [0, 1],
    [60, -60]
  );

  return (
    <Transition>
      <main className='overflow-hidden bg-[#f3eee6] text-[#1b1b1b]'>
        {/* HERO */}
        <section
          ref={heroRef}
          className='relative flex min-h-screen flex-col justify-between px-6 pb-10 pt-32 md:px-12 lg:px-[11vw]'
        >
          <motion.div
            style={{ opacity: heroOpacity }}
            className='flex items-center justify-between border-t border-[#1b1b1b]/20 pt-5'
          >
            <p className='text-[10px] uppercase tracking-[0.28em] text-[#1b1b1b]/50'>
              Selected project / 06
            </p>

            <p className='text-[10px] uppercase tracking-[0.28em] text-[#1b1b1b]/50'>
              Sustainability / E-commerce
            </p>
          </motion.div>

          <div className='my-auto py-20'>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.8,
              }}
              className='mb-5 text-xs uppercase tracking-[0.3em] text-[#1b1b1b]/45'
            >
              Sustainable shopping, simplified
            </motion.p>

            <div className='overflow-hidden pb-6'>
              <motion.h1
                initial={{
                  y: '110%',
                }}
                animate={{
                  y: '0%',
                }}
                transition={{
                  duration: 1.15,
                  ease,
                }}
                style={{
                  y: heroTitleY,
                }}
                className='text-[22vw] font-medium leading-[0.75] tracking-[-0.08em] md:text-[17vw]'
              >
                Revive
              </motion.h1>
            </div>

            <div className='mt-12 grid gap-10 md:grid-cols-2'>
              <motion.p
                {...fadeUp}
                className='max-w-xl text-2xl leading-tight md:text-4xl'
              >
                An eco-friendly shopping app for sustainable and recycled products, on the web and Android.
              </motion.p>

              <motion.div
                {...fadeUp}
                className='flex items-end md:justify-end'
              >
                <p className='max-w-sm text-sm leading-relaxed text-[#1b1b1b]/60 md:text-base'>
                  Revive brings eco-friendly and recycled products together in
                  one place, with a clean shopping experience on the web and
                  as an Android app.
                </p>
              </motion.div>
            </div>
          </div>

          <motion.div
            style={{ opacity: heroOpacity }}
            className='flex items-end justify-between'
          >
            <span className='text-[10px] uppercase tracking-[0.2em] text-[#1b1b1b]/45'>
              Scroll to explore
            </span>

            <motion.div
              animate={{
                y: [0, 6, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className='flex h-14 w-14 items-center justify-center rounded-full border border-[#1b1b1b]/20'
            >
              <ArrowDown
                size={18}
                strokeWidth={1.3}
              />
            </motion.div>
          </motion.div>
        </section>

        {/* HERO IMAGE */}
        <section className='px-4 md:px-8 lg:px-[5vw]'>
          <motion.div
            initial={{
              scale: 0.94,
              opacity: 0,
              filter: 'blur(22px)',
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
              filter: 'blur(0px)',
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 1.35,
              ease,
            }}
            className='group relative overflow-hidden bg-[#111]'
          >
            <motion.img
              src='/images/revive.png'
              alt='Revive app'
              whileHover={{
                scale: 1.025,
              }}
              transition={{
                duration: 1,
                ease,
              }}
              className='block h-auto w-full object-contain'
            />

            <div className='pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/[0.04]' />

            <div className='absolute bottom-6 left-6 hidden md:block'>
              <span className='text-[9px] uppercase tracking-[0.25em] text-white/50'>
                Revive / Eco Shopping App
              </span>
            </div>
          </motion.div>
        </section>

        {/* PROJECT INFORMATION */}
        <section className='px-6 py-28 md:px-12 lg:px-[11vw] lg:py-40'>
          <motion.div
            {...fadeUp}
            className='grid gap-12 border-t border-[#1b1b1b]/20 pt-8 md:grid-cols-4'
          >
            <div>
              <p className='mb-4 text-[10px] uppercase tracking-[0.25em] text-[#1b1b1b]/40'>
                Role
              </p>
              <p className='text-sm'>
                Design & Development
              </p>
            </div>

            <div>
              <p className='mb-4 text-[10px] uppercase tracking-[0.25em] text-[#1b1b1b]/40'>
                Focus
              </p>
              <p className='text-sm'>
                Sustainability / UX / React
              </p>
            </div>

            <div>
              <p className='mb-4 text-[10px] uppercase tracking-[0.25em] text-[#1b1b1b]/40'>
                Type
              </p>
              <p className='text-sm'>
                Web + Android App
              </p>
            </div>

            <div>
              <p className='mb-4 text-[10px] uppercase tracking-[0.25em] text-[#1b1b1b]/40'>
                Year
              </p>
              <p className='text-sm'>
                2026
              </p>
            </div>
          </motion.div>
        </section>

        {/* IDEA */}
        <section className='bg-[#1b1b1b] px-6 py-28 text-[#f3eee6] md:px-12 lg:px-[11vw] lg:py-44'>
          <motion.div
            {...fadeUp}
            className='grid gap-16 lg:grid-cols-[0.65fr_1.35fr]'
          >
            <div>
              <p className='text-[10px] uppercase tracking-[0.3em] text-[#f3eee6]/40'>
                01 / The idea
              </p>
            </div>

            <div>
              <h2 className='max-w-5xl text-5xl leading-[0.94] tracking-[-0.055em] md:text-7xl lg:text-[7vw]'>
                What if shopping sustainably was the easy choice?
              </h2>

              <div className='mt-14 grid gap-8 md:grid-cols-2'>
                <p className='max-w-md text-base leading-relaxed text-[#f3eee6]/55 md:text-lg'>
                  Revive makes eco-friendly shopping simple: one place to find
                  sustainable and recycled products without hunting across sites.
                </p>

                <p className='max-w-md text-base leading-relaxed text-[#f3eee6]/40'>
                  Designed for the Product Design (HSSM301) course at FCRIT, it was
                  built in Figma Make as a React + TypeScript web app, deployed on
                  Vercel and packaged as an Android app with Median.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* BIG STATEMENT */}
        <section className='px-6 py-28 md:px-12 lg:px-[7vw] lg:py-44'>
          <motion.div
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              ease,
            }}
          >
            <p className='mb-10 text-[10px] uppercase tracking-[0.3em] text-[#1b1b1b]/40'>
              Shop greener
            </p>

            <h2 className='text-[clamp(4rem,10vw,10rem)] leading-[0.82] tracking-[-0.07em]'>
              <span className='block'>
                Small choices.
              </span>

              <motion.span
                whileHover={{
                  x: 20,
                }}
                transition={{
                  duration: 0.4,
                  ease,
                }}
                className='block w-fit cursor-default'
              >
                Real progress.
              </motion.span>

              <span className='block text-right'>
                Every order.
              </span>
            </h2>
          </motion.div>
        </section>

        {/* FEATURES */}
        <section
          ref={designerRef}
          className='bg-[#ded5c7] px-6 py-28 md:px-12 lg:px-[8vw] lg:py-44'
        >
          <div className='grid gap-20 lg:grid-cols-12'>
            <motion.div
              style={{
                y: designerCopyY,
              }}
              className='lg:col-span-4'
            >
              <p className='mb-7 text-[10px] uppercase tracking-[0.3em] text-[#1b1b1b]/40'>
                02 / How it works
              </p>

              <h2 className='text-5xl leading-[0.92] tracking-[-0.055em] md:text-7xl'>
                Built for everyday use.
              </h2>

              <p className='mt-9 max-w-sm text-base leading-relaxed text-[#1b1b1b]/55'>
                Three simple steps that make the experience feel effortless from
                the moment you open it to the moment you close it.
              </p>
            </motion.div>

            <div className='lg:col-span-8'>
              {features.map((feature, index) => (
                <motion.div
                  key={feature.number}
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
                    delay: index * 0.1,
                    ease,
                  }}
                  className='border-b border-[#1b1b1b]/20 py-10 last:border-b-0'
                >
                  <div className='flex items-start gap-6'>
                    <feature.icon
                      size={20}
                      strokeWidth={1.3}
                      className='mt-1 shrink-0 text-[#1b1b1b]/40'
                    />

                    <div>
                      <div className='mb-3 flex items-center gap-4'>
                        <span className='text-xs text-[#1b1b1b]/35'>
                          {feature.number}
                        </span>

                        <h3 className='text-2xl tracking-[-0.03em]'>
                          {feature.title}
                        </h3>
                      </div>

                      <p className='max-w-sm text-sm leading-relaxed text-[#1b1b1b]/50'>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className='px-6 py-28 md:px-12 lg:px-[11vw] lg:py-44'>
          <motion.div
            {...fadeUp}
            className='mb-16 grid gap-6 lg:grid-cols-[0.65fr_1.35fr]'
          >
            <div>
              <p className='text-[10px] uppercase tracking-[0.3em] text-[#1b1b1b]/40'>
                03 / Design principles
              </p>
            </div>

            <h2 className='text-4xl leading-none tracking-[-0.05em] md:text-5xl'>
              What guided
              <br />
              every decision.
            </h2>
          </motion.div>

          <div>
            {principles.map((principle, index) => (
              <motion.div
                key={principle.number}
                initial={{
                  opacity: 0,
                  y: 20,
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
                  delay: index * 0.06,
                  ease,
                }}
                whileHover='hover'
                className='group relative grid cursor-default grid-cols-[50px_1fr] gap-4 overflow-hidden border-b border-[#1b1b1b]/20 py-9 md:grid-cols-[100px_1fr_1fr]'
              >
                <motion.div
                  variants={{
                    hover: {
                      x: '0%',
                    },
                  }}
                  initial={{
                    x: '-101%',
                  }}
                  transition={{
                    duration: 0.45,
                    ease,
                  }}
                  className='pointer-events-none absolute inset-0 bg-[#1b1b1b]'
                />

                <motion.span
                  variants={{
                    hover: {
                      color: '#f3eee6',
                    },
                  }}
                  className='relative z-10 text-xs text-[#1b1b1b]/35'
                >
                  {principle.number}
                </motion.span>

                <motion.h3
                  variants={{
                    hover: {
                      x: 14,
                      color: '#f3eee6',
                    },
                  }}
                  transition={{
                    duration: 0.4,
                    ease,
                  }}
                  className='relative z-10 text-3xl tracking-[-0.04em] md:text-5xl'
                >
                  {principle.title}
                </motion.h3>

                <motion.p
                  variants={{
                    hover: {
                      color: 'rgba(243,238,230,0.6)',
                    },
                  }}
                  className='relative z-10 hidden max-w-sm text-sm leading-relaxed text-[#1b1b1b]/50 md:block'
                >
                  {principle.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TECH */}
        <section className='bg-[#ded5c7] px-6 py-28 md:px-12 lg:px-[11vw] lg:py-44'>
          <motion.div
            {...fadeUp}
            className='grid gap-16 lg:grid-cols-2'
          >
            <div>
              <p className='mb-6 text-[10px] uppercase tracking-[0.3em] text-[#1b1b1b]/40'>
                04 / Behind the build
              </p>

              <h2 className='text-5xl leading-none tracking-[-0.05em] md:text-7xl'>
                Design meets
                <br />
                development.
              </h2>
            </div>

            <div className='flex flex-col justify-end'>
              <p className='mb-10 max-w-lg text-base leading-relaxed text-[#1b1b1b]/55'>
                Revive was designed in Figma Make and exported as a React +
                TypeScript web app, deployed on Vercel, then packaged into an
                Android app (APK) with Median, so one codebase runs on both.
              </p>

              <div className='flex flex-wrap gap-2'>
                {stack.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{
                      y: -5,
                      backgroundColor: '#1b1b1b',
                      color: '#f3eee6',
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className='cursor-default rounded-full border border-[#1b1b1b]/25 px-5 py-3 text-xs'
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* LIVE PROJECT CTA */}
        <section className='px-6 py-28 md:px-12 lg:px-[11vw] lg:py-44'>
          <motion.div
            {...fadeUp}
            className='flex flex-col gap-12 border-t border-[#1b1b1b]/20 pt-10 md:flex-row md:items-end md:justify-between'
          >
            <div>
              <p className='mb-5 text-[10px] uppercase tracking-[0.3em] text-[#1b1b1b]/40'>
                Explore the project
              </p>

              <h2 className='text-5xl leading-[0.95] tracking-[-0.05em] md:text-7xl'>
                Don&apos;t just
                <br />
                take my word for it.
              </h2>
            </div>

            <div className='flex flex-wrap gap-3'>
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                <Link
                  href='https://revive-mu-khaki.vercel.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group flex items-center gap-7 rounded-full bg-[#1b1b1b] px-8 py-6 text-sm text-[#f3eee6]'
                >
                  Live Site

                  <ArrowUpRight
                    size={17}
                    className='transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1'
                  />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                <Link
                  href='https://median.co/share/krlnakm'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group flex items-center gap-7 rounded-full border border-[#1b1b1b]/25 px-8 py-6 text-sm transition-colors duration-300 hover:bg-[#1b1b1b] hover:text-[#f3eee6]'
                >
                  Android App

                  <ArrowUpRight
                    size={17}
                    className='transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1'
                  />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                <Link
                  href='https://github.com/angelinaserpes/Revive'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group flex items-center gap-7 rounded-full border border-[#1b1b1b]/25 px-8 py-6 text-sm transition-colors duration-300 hover:bg-[#1b1b1b] hover:text-[#f3eee6]'
                >
                  GitHub Repository

                  <ArrowUpRight
                    size={17}
                    className='transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1'
                  />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* NEXT PROJECT */}
        <Link href='/dakota'>
          <motion.section
            whileHover='hover'
            className='group relative cursor-pointer overflow-hidden bg-[#1b1b1b] px-6 py-24 text-[#f3eee6] md:px-12 lg:px-[11vw] lg:py-36'
          >
            <motion.div
              variants={{
                hover: {
                  scale: 1.08,
                  opacity: 0.18,
                  filter: 'blur(0px)',
                },
              }}
              initial={{
                scale: 1.12,
                opacity: 0,
                filter: 'blur(18px)',
              }}
              transition={{
                duration: 0.7,
                ease,
              }}
              className='pointer-events-none absolute inset-0 bg-[url("/images/dakota.png")] bg-cover bg-center blur-xl'
            />

            <div className='relative z-10'>
              <div className='mb-16 flex items-center justify-between'>
                <p className='text-[10px] uppercase tracking-[0.3em] text-[#f3eee6]/40'>
                  Next project / 07
                </p>

                <motion.div
                  variants={{
                    hover: {
                      x: 12,
                    },
                  }}
                  transition={{
                    duration: 0.4,
                    ease,
                  }}
                >
                  <MoveRight
                    size={32}
                    strokeWidth={1}
                  />
                </motion.div>
              </div>

              <div className='overflow-hidden'>
                <motion.h2
                  variants={{
                    hover: {
                      x: 20,
                    },
                  }}
                  transition={{
                    duration: 0.55,
                    ease,
                  }}
                  className='text-[16vw] leading-[0.8] tracking-[-0.07em]'
                >
                  Dakota
                </motion.h2>
              </div>

              <motion.div
                variants={{
                  hover: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                className='mt-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#f3eee6]/50'
              >
                View next project

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.2}
                />
              </motion.div>
            </div>
          </motion.section>
        </Link>
      </main>
    </Transition>
  );
}
