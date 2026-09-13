'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Transition } from '@/layout';

const projects = [
  {
    title: 'Aurevo',
    category: 'AI / Web Development',
    image: '/images/aurevo.png',
    href: '/aurevo',
    number: '01',
    description:
      'An intelligent retail design platform exploring AI-powered spatial and product experiences.',
    stack: ['React', 'AI', 'Web Development'],
  },
  {
    title: 'Phantom',
    category: 'Web Design / Frontend',
    image: '/images/phantom.png',
    href: '/phantom',
    number: '02',
    description:
      'A cinematic luxury automotive experience built around motion, atmosphere and interaction.',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'InAmigos',
    category: 'Web Design / Development',
    image: '/images/inamigos.png',
    href: '/inamigos',
    number: '03',
    description:
      'A digital experience created to communicate the work, purpose and impact of a non-profit organisation.',
    stack: ['Web Design', 'Frontend', 'UI'],
  },
  {
    title: 'Dakota Coffee',
    category: 'Web Development / E-commerce',
    image: '/images/dakota.png',
    href: '/dakota',
    number: '04',
    description:
      'A playful coffee storefront combining product discovery with a bright, contemporary interface.',
    stack: ['Frontend', 'E-commerce', 'UI'],
  },
];

export default function Work() {
  const [cursor, setCursor] = useState({
    visible: false,
    x: 0,
    y: 0,
  });

  const handleMouseMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();

    setCursor({
      visible: true,
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    });
  };

  return (
    <Transition>
      <main className='min-h-screen bg-[#E8DCCB] text-[#62574F]'>

        {/* HERO */}
        <section className='bg-[#F4EFE8]'>
          <div className='container flex min-h-[82vh] flex-col justify-end pb-16 pt-32'>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className='mb-10 flex items-center justify-between'
            >
              <p className='text-xs uppercase tracking-[0.25em] opacity-50'>
                Selected Work
              </p>

              <p className='text-xs uppercase tracking-[0.25em] opacity-50'>
                04 Projects
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0.76, 0, 0.24, 1],
              }}
              className='max-w-[1200px] text-[clamp(4.5rem,10vw,10rem)] font-normal leading-[0.84] tracking-[-0.055em]'
            >
              Ideas, made
              <br />
              tangible.
            </motion.h1>

            <div className='mt-16 grid grid-cols-1 gap-10 md:grid-cols-12'>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className='hidden md:col-span-4 md:flex md:items-end'
              >
                <div className='flex items-center gap-3'>
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{
                      duration: 1.7,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <ArrowDown size={17} strokeWidth={1.3} />
                  </motion.div>

                  <span className='text-xs uppercase tracking-[0.2em]'>
                    Scroll to explore
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.55,
                  duration: 0.8,
                }}
                className='md:col-start-8 md:col-span-5'
              >
                <p className='max-w-md text-lg leading-[1.5] opacity-65'>
                  Design, development, AI and the experiments in between.
                </p>

                <div className='mt-8 flex gap-8 text-[11px] uppercase tracking-[0.18em] opacity-45'>
                  <span>2025—2026</span>
                  <span>Mumbai, India</span>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className='bg-[#E8DCCB]'>
          <div className='container'>

            {projects.map((project) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.08,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className='border-t border-[#62574F]/20 py-16 md:py-24'
              >
                <Link href={project.href} className='group block'>

                  {/* PROJECT HEADER */}
                  <div className='mb-10 grid grid-cols-12 items-end gap-5'>

                    <div className='col-span-2'>
                      <span className='text-sm opacity-45'>
                        {project.number}
                      </span>
                    </div>

                    {/* PROJECT TITLE */}
                    <div className='col-span-10 overflow-visible md:col-span-6'>
                      <h2
                        className={`whitespace-nowrap text-[clamp(3.5rem,7vw,7rem)] leading-[0.95] transition-transform duration-500 ease-out group-hover:translate-x-2 ${
                          project.title === 'InAmigos'
                            ? 'tracking-normal'
                            : 'tracking-[-0.045em]'
                        }`}
                      >
                        {project.title}
                      </h2>
                    </div>

                    <div className='col-start-3 col-span-9 mt-6 md:col-start-9 md:col-span-3 md:mt-0'>
                      <p className='mb-3 text-[11px] uppercase tracking-[0.18em] opacity-45'>
                        {project.category}
                      </p>

                      <p className='max-w-sm text-sm leading-relaxed opacity-65'>
                        {project.description}
                      </p>
                    </div>

                  </div>

                  {/* PROJECT IMAGE */}
                  <motion.div
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() =>
                      setCursor((previous) => ({
                        ...previous,
                        visible: true,
                      }))
                    }
                    onMouseLeave={() =>
                      setCursor((previous) => ({
                        ...previous,
                        visible: false,
                      }))
                    }
                    whileHover={{ y: -4 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.25, 1, 0.5, 1],
                    }}
                    className='relative cursor-none overflow-hidden bg-[#DED3C3] p-5 md:p-8'
                  >

                    {/* SCREENSHOT */}
                    <div className='relative h-[330px] w-full overflow-hidden md:h-[650px]'>
                      <Image
                        src={project.image}
                        alt={`${project.title} project`}
                        fill
                        sizes='100vw'
                        className='object-contain'
                        style={{
                          objectPosition: 'center center',
                          clipPath:
                            project.title === 'InAmigos' ||
                            project.title === 'Dakota Coffee'
                              ? 'inset(6px 0 0 0)'
                              : 'none',
                        }}
                      />

                      {/* REMOVE BLACK TOP EDGE */}
                      {(project.title === 'InAmigos' ||
                        project.title === 'Dakota Coffee') && (
                        <div className='pointer-events-none absolute left-0 right-0 top-0 z-10 h-[8px] bg-[#DED3C3]' />
                      )}
                    </div>

                    {/* FOLLOW CURSOR */}
                    <motion.div
                      animate={{
                        x: cursor.x - 48,
                        y: cursor.y - 48,
                        scale: cursor.visible ? 1 : 0,
                        opacity: cursor.visible ? 1 : 0,
                      }}
                      transition={{
                        x: { duration: 0.1 },
                        y: { duration: 0.1 },
                        scale: { duration: 0.2 },
                        opacity: { duration: 0.2 },
                      }}
                      className='pointer-events-none absolute left-0 top-0 z-20 hidden h-24 w-24 items-center justify-center rounded-full bg-[#62574F] text-[#F8F1E8] md:flex'
                    >
                      <div className='flex items-center gap-1 text-[11px] uppercase tracking-[0.12em]'>
                        View

                        <ArrowUpRight
                          size={13}
                          strokeWidth={1.3}
                        />
                      </div>
                    </motion.div>

                  </motion.div>

                  {/* PROJECT FOOTER */}
                  <div className='mt-6 flex flex-col gap-5 md:flex-row md:items-center md:justify-between'>

                    <div className='flex flex-wrap items-center text-[11px] uppercase tracking-[0.16em] opacity-50'>
                      {project.stack.map((item, index) => (
                        <span key={item}>
                          {item}

                          {index !== project.stack.length - 1 && (
                            <span className='mx-2'>·</span>
                          )}
                        </span>
                      ))}
                    </div>

                    <div className='flex items-center gap-2 text-xs uppercase tracking-[0.18em] opacity-50 transition-opacity duration-300 group-hover:opacity-100'>
                      Explore project

                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.2}
                        className='transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1'
                      />
                    </div>

                  </div>

                </Link>
              </motion.article>
            ))}

          </div>
        </section>

        {/* ABOUT TRANSITION */}
        <section className='bg-[#F4EFE8]'>
          <div className='container py-28 md:py-40'>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.9,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              <p className='mb-8 text-xs uppercase tracking-[0.25em] opacity-45'>
                Beyond the projects
              </p>

              <div className='flex flex-col gap-12 md:flex-row md:items-end md:justify-between'>

                <h2 className='max-w-5xl text-[clamp(3.5rem,7vw,7rem)] leading-[0.92] tracking-[-0.05em]'>
                  There&apos;s more to me
                  <br />
                  than the work.
                </h2>

                <Link
                  href='/about'
                  className='group flex h-32 w-32 shrink-0 items-center justify-center rounded-full border border-[#62574F]/40 transition-all duration-500 hover:scale-105 hover:bg-[#62574F] hover:text-[#F8F1E8]'
                >
                  <div className='flex items-center gap-2 text-xs uppercase tracking-[0.12em]'>
                    About me

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.2}
                      className='transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1'
                    />
                  </div>
                </Link>

              </div>
            </motion.div>

          </div>
        </section>

      </main>
    </Transition>
  );
}