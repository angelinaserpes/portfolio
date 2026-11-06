'use client';

import { projectOptions } from '@/data';

import { ProjectSlider } from './slider';

export function Project() {
  return (
    <section className='overflow-hidden py-24 md:py-32'>
      <div className='container mb-10 flex items-end justify-between'>
        <div>
          <p className='mb-3 text-[10px] uppercase tracking-[0.28em] opacity-40'>
            Selected project films
          </p>

          <h2 className='text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.95] tracking-[-0.055em]'>
            See them in motion.
          </h2>
        </div>

        <p className='hidden text-[10px] uppercase tracking-[0.22em] opacity-50 md:block'>
          {String(projectOptions.first.length).padStart(2, '0')} project films
        </p>
      </div>

      <div className='grid w-full grid-cols-1 gap-4 px-6 sm:grid-cols-2 md:gap-5 md:px-8 lg:grid-cols-3'>
        {projectOptions.first.map((project) => (
          <ProjectSlider
            key={project.title}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}