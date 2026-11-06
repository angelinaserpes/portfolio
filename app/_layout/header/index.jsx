'use client';

import { motion } from 'framer-motion';
import { Globe2, MoveDownRight } from 'lucide-react';
import Image from 'next/image';

import { ParallaxSlider } from '@/components';

import { slideUp } from './variants';

export function Header() {
  return (
    <motion.header
      className='relative h-screen overflow-hidden bg-[#B9A996] text-[#F8F1E8]'
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      {/* portrait */}
      <motion.div
        className='absolute bottom-0 left-0 z-[1] h-[74svh] w-full md:left-[28%] md:h-[98vh] md:w-[50vw]'
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.2,
          duration: 1,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <Image
          src='/images/angy.png'
          alt='Angelina Serpes'
          fill
          priority
          sizes='(max-width: 767px) 100vw, 50vw'
          className='object-contain object-bottom'
        />
      </motion.div>

      {/* location */}
      <motion.div
        className='absolute left-0 top-[46%] z-10 hidden -translate-y-1/2 md:block'
        initial={{
          x: -50,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <div className='flex items-center rounded-r-full bg-[#74685F] py-3 pl-7 pr-3 text-[#F8F1E8]'>
          <p className='mr-5 text-[12px] leading-[1.2]'>
            Based in
            <br />
            Mumbai, India
          </p>

          <div className='flex h-14 w-14 items-center justify-center rounded-full bg-[#F8F1E8]/15'>
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <Globe2
                size={27}
                strokeWidth={1.2}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* desktop role */}
      <motion.div
        className='absolute right-[7%] top-[43%] z-10 hidden md:block'
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.6,
          duration: 0.8,
        }}
      >
        <div className='mb-4'>
          <MoveDownRight
            size={25}
            strokeWidth={1.25}
          />
        </div>

        <h4 className='text-[clamp(1.15em,1.75vw,2.05em)] leading-[1.08]'>
          <span className='block'>
            Student &amp;
          </span>

          <span className='block'>
            Creative Technologist
          </span>
        </h4>
      </motion.div>

      {/* mobile role */}
      <motion.div
        className='absolute left-6 top-[12%] z-10 md:hidden'
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.6,
          duration: 0.8,
        }}
      >
        <div className='mb-3'>
          <MoveDownRight
            size={20}
            strokeWidth={1.25}
          />
        </div>

        <p className='mb-2 text-[11px] uppercase tracking-[0.25em] opacity-80'>
          Based in Mumbai, India
        </p>

        <h4 className='text-xl leading-tight'>
          <span className='block'>
            Student &amp;
          </span>

          <span className='block'>
            Creative Technologist
          </span>
        </h4>
      </motion.div>

      {/* mobile scrolling name */}
      <div className='absolute bottom-[-1%] left-0 z-20 w-full select-none overflow-visible md:hidden'>
        <h1 className='overflow-visible text-[5.25rem] leading-[1.05]'>
          <ParallaxSlider
            repeat={4}
            baseVelocity={2}
          >
            <span className='inline-block pb-[0.18em] pe-8'>
              Angelina Serpes
              <span className='spacer'>
                —
              </span>
            </span>
          </ParallaxSlider>
        </h1>
      </div>

      {/* desktop scrolling name */}
      <div className='absolute bottom-[-3%] left-0 z-20 hidden w-full select-none overflow-visible md:block'>
        <h1 className='overflow-visible text-[max(9em,15vw)] leading-[1.18]'>
          <ParallaxSlider
            repeat={4}
            baseVelocity={2}
          >
            <span className='inline-block pb-[0.18em] pe-12'>
              Angelina Serpes
              <span className='spacer'>
                —
              </span>
            </span>
          </ParallaxSlider>
        </h1>
      </div>
    </motion.header>
  );
}