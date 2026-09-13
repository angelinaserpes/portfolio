'use client';

import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

import { projectOptions } from '@/data';

import { ProjectSlider } from './slider';

export function Project() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ['5%', '-5%'],
  );

  return (
    <section
      ref={container}
      className='overflow-hidden py-24 md:py-32'
    >
      <div className='container mb-10 flex items-end justify-between'>
        <div>
          <p className='mb-3 text-[9px] uppercase tracking-[0.28em] opacity-40'>
            Selected project films
          </p>

          <h2 className='text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.95] tracking-[-0.055em]'>
            See them in motion.
          </h2>
        </div>

        <p className='hidden text-[9px] uppercase tracking-[0.22em] opacity-35 md:block'>
          04 projects / 04 previews
        </p>
      </div>

      <motion.div
        style={{ x }}
        className='flex w-full gap-4 px-6 md:gap-5'
      >
        {projectOptions.first.map((project) => (
          <ProjectSlider
            key={project.title}
            {...project}
          />
        ))}
      </motion.div>
    </section>
  );
}