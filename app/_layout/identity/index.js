'use client';

import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import {
  Braces,
  Code2,
  Cpu,
  Sparkles,
} from 'lucide-react';

const ease = [0.76, 0, 0.24, 1];

const identities = [
  {
    number: '01',
    title: 'Engineer',
    word: 'logic',
    icon: Cpu,
    description:
      'I like understanding how things work, breaking problems apart and building systems that make sense.',
  },
  {
    number: '02',
    title: 'Developer',
    word: 'build',
    icon: Code2,
    description:
      'Ideas are better when they actually work. I turn concepts into responsive, interactive digital products.',
  },
  {
    number: '03',
    title: 'Creative',
    word: 'play',
    icon: Sparkles,
    description:
      'I care about the tiny details — typography, motion, composition and the things that make an interface memorable.',
  },
  {
    number: '04',
    title: 'Curious',
    word: 'why?',
    icon: Braces,
    description:
      'Most of my favourite projects start with wanting to know what happens if I try something a little differently.',
  },
];

export function Identity() {
  const [active, setActive] = useState(null);

  return (
    <section className='relative overflow-hidden bg-[#171717] text-[#F8F1E8]'>

      <div className='px-6 py-24 sm:px-10 md:px-[7vw] md:py-32'>

        {/* INTRO */}
        <div className='mb-16 flex items-end justify-between border-t border-white/15 pt-6 md:mb-20'>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-[9px] uppercase tracking-[0.3em] text-white/40'
          >
            Somewhere in the middle
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className='hidden text-[9px] uppercase tracking-[0.3em] text-white/25 md:block'
          >
            Engineering / Development / Creativity
          </motion.p>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{
            duration: 0.9,
            ease,
          }}
          className='mb-20'
        >
          <p className='mb-5 text-[10px] uppercase tracking-[0.28em] text-white/35'>
            I don&apos;t really fit in one box.
          </p>

          <h2 className='max-w-[1200px] pb-[0.1em] text-[clamp(3.8rem,8vw,8.5rem)] leading-[0.88] tracking-[-0.07em]'>
            I like making
            <span className='block text-right font-serif italic text-[#B9A996]'>
              things happen.
            </span>
          </h2>
        </motion.div>

        {/* ROWS */}
        <div className='relative border-t border-white/15'>

          {identities.map((item, index) => {
            const Icon = item.icon;
            const isActive = active === index;

            return (
              <motion.div
                key={item.title}
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                initial='rest'
                whileHover='hover'
                className='group relative overflow-hidden border-b border-white/15'
              >

                {/* HOVER FILL */}
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
                    duration: 0.6,
                    ease,
                  }}
                  className='pointer-events-none absolute inset-0 bg-[#F4EFE8]'
                />

                {/* BACKGROUND WORD */}
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      initial={{
                        opacity: 0,
                        x: 80,
                      }}
                      animate={{
                        opacity: 0.055,
                        x: 0,
                      }}
                      exit={{
                        opacity: 0,
                        x: 50,
                      }}
                      transition={{
                        duration: 0.45,
                        ease,
                      }}
                      className='pointer-events-none absolute right-[4%] top-1/2 hidden -translate-y-1/2 select-none font-serif text-[10vw] italic leading-none text-black lg:block'
                    >
                      {item.word}
                    </motion.span>
                  )}
                </AnimatePresence>

                <div className='relative z-10 grid min-h-[160px] grid-cols-12 items-center gap-y-4 py-8 md:min-h-[190px]'>

                  <motion.span
                    variants={{
                      rest: {
                        color: 'rgba(248,241,232,.28)',
                      },
                      hover: {
                        color: 'rgba(23,23,23,.35)',
                      },
                    }}
                    className='col-span-2 text-[10px] md:col-span-1'
                  >
                    {item.number}
                  </motion.span>

                  <motion.h3
                    variants={{
                      rest: {
                        x: 0,
                        color: '#F8F1E8',
                      },
                      hover: {
                        x: 20,
                        color: '#171717',
                      },
                    }}
                    transition={{
                      duration: 0.45,
                      ease,
                    }}
                    className='col-span-8 pb-[0.08em] text-[clamp(2.8rem,6vw,6.5rem)] uppercase leading-[0.9] tracking-[-0.065em] md:col-span-5'
                  >
                    {item.title}
                  </motion.h3>

                  <motion.p
                    variants={{
                      rest: {
                        color: 'rgba(248,241,232,.35)',
                      },
                      hover: {
                        color: 'rgba(23,23,23,.6)',
                      },
                    }}
                    className='col-span-10 col-start-3 max-w-md text-sm leading-[1.7] md:col-span-4 md:col-start-auto'
                  >
                    {item.description}
                  </motion.p>

                  <div className='col-span-2 hidden justify-end md:flex'>
                    <motion.div
                      variants={{
                        rest: {
                          rotate: 0,
                          scale: 1,
                          color: '#F8F1E8',
                          borderColor: 'rgba(248,241,232,.2)',
                        },
                        hover: {
                          rotate: 12,
                          scale: 1.1,
                          color: '#171717',
                          borderColor: 'rgba(23,23,23,.25)',
                        },
                      }}
                      transition={{
                        duration: 0.4,
                        ease,
                      }}
                      className='flex h-14 w-14 items-center justify-center rounded-full border'
                    >
                      <Icon size={21} strokeWidth={1} />
                    </motion.div>
                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className='ml-auto mt-10 max-w-lg text-right text-sm leading-[1.7] text-white/35'
        >
          Mostly, I like figuring out how things work — then figuring out how
          to make them better.
        </motion.p>

      </div>
    </section>
  );
}