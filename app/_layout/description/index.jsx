'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import { ParallaxFade, ParallaxReveal } from '@/components';

import { Title, Wrapper } from './index.styled';

const phrase =
  'I’m a Computer Engineering student who designs and builds the whole thing, from the database to the last hover state.';

const ease = [0.76, 0, 0.24, 1];

export function Description() {
  return (
    <article className='relative overflow-hidden'>

      {/* ORIGINAL DESCRIPTION */}
      <div className='container'>
        <Wrapper>

          <div className='basis-full lg:basis-9/12'>
            <Title>
              <ParallaxReveal paragraph={phrase} />
            </Title>
          </div>

          <div className='basis-full sm:basis-7/12 lg:basis-3/12'>
            <ParallaxFade>
              <Balancer
                as='p'
                className='mt-2 text-base lg:text-lg'
              >
                Seven projects so far: an air-quality app in Python and MySQL,
                an EV-charging planner, an eco-store on web and Android, and a
                few websites with more personality than they strictly need.
              </Balancer>
            </ParallaxFade>
          </div>

        </Wrapper>
      </div>

      {/* ABOUT */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
          margin: '-70px',
        }}
        transition={{
          duration: 0.9,
          ease,
        }}
        className='w-full'
      >

        <Link
          href='/about'
          className='block w-full'
        >

          <motion.section
            initial='rest'
            whileHover='hover'
            className='relative min-h-[600px] w-full overflow-hidden bg-[#E8DCCB] text-[#62574F] md:min-h-[690px]'
          >

            {/* HOVER FILL */}
            <motion.div
              variants={{
                rest: {
                  scaleY: 0,
                },
                hover: {
                  scaleY: 1,
                },
              }}
              transition={{
                duration: 0.7,
                ease,
              }}
              className='pointer-events-none absolute inset-0 origin-bottom bg-[#62574F]'
            />

            <div className='relative z-10 flex min-h-[600px] w-full flex-col justify-between px-6 py-10 sm:px-10 md:min-h-[690px] md:px-[7vw] md:py-12'>

              {/* TOP */}
              <div className='flex items-center justify-between border-t border-[#62574F]/25 pt-5'>

                <motion.p
                  variants={{
                    rest: {
                      color: '#62574F',
                    },
                    hover: {
                      color: '#F4EFE8',
                    },
                  }}
                  className='text-[10px] uppercase tracking-[0.3em] opacity-70'
                >
                  More than the portfolio
                </motion.p>

                <motion.p
                  variants={{
                    rest: {
                      color: '#62574F',
                    },
                    hover: {
                      color: '#F4EFE8',
                    },
                  }}
                  className='hidden text-[10px] uppercase tracking-[0.3em] opacity-60 md:block'
                >
                  About Angelina
                </motion.p>

              </div>

              {/* MAIN */}
              <div className='py-8'>

                <motion.h2
                  variants={{
                    rest: {
                      x: 0,
                      color: '#62574F',
                    },
                    hover: {
                      x: 28,
                      color: '#F4EFE8',
                    },
                  }}
                  transition={{
                    duration: 0.55,
                    ease,
                  }}
                  className='pb-[0.08em] text-[clamp(4.7rem,10vw,11rem)] leading-[0.78] tracking-[-0.075em]'
                >
                  WHO&apos;S
                </motion.h2>

                <motion.h2
                  variants={{
                    rest: {
                      x: 0,
                      color: '#62574F',
                    },
                    hover: {
                      x: -35,
                      color: '#F4EFE8',
                    },
                  }}
                  transition={{
                    duration: 0.55,
                    ease,
                  }}
                  className='pb-[0.08em] text-right text-[clamp(4.7rem,10vw,11rem)] leading-[0.78] tracking-[-0.075em]'
                >
                  BEHIND
                </motion.h2>

                <motion.h2
                  variants={{
                    rest: {
                      x: 0,
                      color: '#8A7768',
                    },
                    hover: {
                      x: 24,
                      color: '#E8DCCB',
                    },
                  }}
                  transition={{
                    duration: 0.55,
                    ease,
                  }}
                  className='pb-[0.12em] font-serif text-[clamp(5.2rem,11vw,12rem)] italic leading-[0.8] tracking-[-0.065em]'
                >
                  all this?
                </motion.h2>

              </div>

              {/* BOTTOM */}
              <motion.div
                variants={{
                  rest: {
                    borderColor: 'rgba(98,87,79,.25)',
                  },
                  hover: {
                    borderColor: 'rgba(244,239,232,.25)',
                  },
                }}
                className='flex items-end justify-between border-t pt-6'
              >

                <motion.p
                  variants={{
                    rest: {
                      color: '#62574F',
                    },
                    hover: {
                      color: '#F4EFE8',
                    },
                  }}
                  className='hidden max-w-sm text-sm leading-[1.65] opacity-60 sm:block'
                >
                  The ideas, interests and slightly chaotic curiosity behind
                  everything I make.
                </motion.p>

                <motion.div
                  variants={{
                    rest: {
                      x: 0,
                      color: '#62574F',
                    },
                    hover: {
                      x: 12,
                      color: '#F4EFE8',
                    },
                  }}
                  transition={{
                    duration: 0.4,
                    ease,
                  }}
                  className='ml-auto flex items-center gap-5'
                >

                  <span className='text-[clamp(1.2rem,2vw,2rem)] uppercase tracking-[-0.025em]'>
                    Meet Angelina
                  </span>

                  <motion.div
                    variants={{
                      rest: {
                        rotate: 0,
                        scale: 1,
                        borderColor: 'rgba(98,87,79,.4)',
                      },
                      hover: {
                        rotate: 45,
                        scale: 1.12,
                        borderColor: 'rgba(244,239,232,.5)',
                      },
                    }}
                    transition={{
                      duration: 0.45,
                      ease,
                    }}
                    className='flex h-16 w-16 items-center justify-center rounded-full border md:h-20 md:w-20'
                  >
                    <ArrowUpRight
                      size={22}
                      strokeWidth={1.1}
                    />
                  </motion.div>

                </motion.div>

              </motion.div>

            </div>

            {/* BOTTOM ACCENT */}
            <motion.div
              variants={{
                rest: {
                  width: '0%',
                },
                hover: {
                  width: '100%',
                },
              }}
              transition={{
                duration: 0.8,
                ease,
              }}
              className='absolute bottom-0 left-0 z-20 h-[3px] bg-[#E8DCCB]'
            />

          </motion.section>

        </Link>

      </motion.div>

    </article>
  );
}