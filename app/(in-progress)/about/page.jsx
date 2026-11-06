'use client';

import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Palette,
  Sparkles,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Transition } from '@/layout';

const services = [
  {
    number: '01',
    title: 'Web Design',
    short: 'Interfaces with personality.',
    description:
      'Visual direction, responsive layouts and thoughtful interactions designed to make a digital experience feel intentional rather than templated.',
    tags: ['UI / UX', 'Responsive Design', 'Figma'],
  },
  {
    number: '02',
    title: 'Frontend Development',
    short: 'Making the idea actually work.',
    description:
      'Turning designs into responsive, interactive websites with attention to motion, usability and the little details that make an interface feel polished.',
    tags: ['React', 'Next.js', 'JavaScript'],
  },
  {
    number: '03',
    title: 'Creative + AI',
    short: 'Experimenting beyond the obvious.',
    description:
      'Python apps, APIs and creative code, from an AQI desktop app to Fit Check, the fashion mini-game hidden on this site.',
    tags: ['Python', 'AI tools', 'Creative code'],
  },
];

const tools = [
  { name: 'React', rotate: -4 },
  { name: 'Next.js', rotate: 3 },
  { name: 'TypeScript', rotate: -2 },
  { name: 'JavaScript', rotate: 4 },
  { name: 'Tailwind', rotate: -3 },
  { name: 'Framer Motion', rotate: 2 },
  { name: 'Python', rotate: -4 },
  { name: 'SQL / MySQL', rotate: 3 },
  { name: 'Java', rotate: -2 },
  { name: 'HTML / CSS', rotate: 2 },
  { name: 'Figma', rotate: -5 },
  { name: 'Git', rotate: 3 },
];

const thoughts = [
  {
    text: 'creative coding',
    className: 'left-[5%] top-[15%]',
  },
  {
    text: 'tiny details',
    className: 'right-[8%] top-[12%]',
  },
  {
    text: 'AI',
    className: 'left-[42%] top-[30%]',
  },
  {
    text: 'weird web interactions',
    className: 'left-[12%] top-[48%]',
  },
  {
    text: 'typography',
    className: 'right-[13%] top-[52%]',
  },
  {
    text: 'making things move',
    className: 'left-[31%] bottom-[15%]',
  },
  {
    text: 'interfaces that feel alive',
    className: 'right-[5%] bottom-[10%]',
  },
];

const projects = [
  { number: '01', title: 'Aurevo', image: '/images/aurevo.png', href: '/aurevo', type: 'AI / Web' },
  { number: '02', title: 'AirSense', image: '/images/airsense.png', href: '/airsense', type: 'Python / MySQL' },
  { number: '03', title: 'Phantom', image: '/images/phantom.png', href: '/phantom', type: 'Web Design / Frontend' },
  { number: '04', title: 'Evoltic', image: '/images/evoltic.png', href: '/evoltic', type: 'Web App / Hackathon' },
  { number: '05', title: 'InAmigos', image: '/images/inamigos.png', href: '/inamigos', type: 'Non-profit / Web' },
  { number: '06', title: 'Revive', image: '/images/revive.png', href: '/revive', type: 'Web + Android' },
  { number: '07', title: 'Dakota Coffee', image: '/images/dakota.png', href: '/dakota', type: 'Web / E-commerce' },
];

export default function About() {
  const [activeService, setActiveService] = useState(null);
  const [activeProject, setActiveProject] = useState(null);

  return (
    <Transition>
      <main className='overflow-hidden bg-[#F4EFE8] text-[#62574F]'>

        {/* HERO */}
        <section className='relative'>
          <div className='container flex min-h-[88vh] flex-col justify-end pb-16 pt-32'>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className='mb-8 flex items-center justify-between'
            >
              <p className='text-xs uppercase tracking-[0.25em] opacity-45'>
                About Angelina
              </p>

              <p className='hidden text-xs uppercase tracking-[0.25em] opacity-45 md:block'>
                Creative Technologist · Mumbai
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
              }}
              className='text-[clamp(4.5rem,10vw,10rem)] leading-[0.95] tracking-[-0.06em]'
            >
              <div className='w-full'>
                <motion.span
                  whileHover={{ x: 15 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className='block w-fit cursor-default'
                >
                  I design.
                </motion.span>
              </div>

              <div className='w-full'>
                <motion.span
                  whileHover={{ x: 30 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className='block w-fit cursor-default'
                >
                  I develop.
                </motion.span>
              </div>

              <div className='w-full'>
                <motion.span
                  whileHover={{ x: 12 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className='block w-fit cursor-default'
                >
                  I make it feel alive.
                </motion.span>
              </div>
            </motion.h1>

            <div className='mt-14 grid grid-cols-1 gap-8 md:grid-cols-12'>

              <div className='hidden md:col-span-4 md:flex md:items-end'>
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.8,
                    ease: 'easeInOut',
                  }}
                  className='flex items-center gap-3 opacity-45'
                >
                  <ArrowDown size={17} strokeWidth={1.3} />

                  <span className='text-xs uppercase tracking-[0.2em]'>
                    Meet me properly
                  </span>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.45,
                  duration: 0.8,
                }}
                className='md:col-start-8 md:col-span-5'
              >
                <p className='max-w-lg text-lg leading-[1.55] opacity-70'>
                  I&apos;m Angelina, a Computer Engineering student at FCRIT,
                  Navi Mumbai. I design in Figma, build in React and Python,
                  and care a lot about type, motion and clothes (there&apos;s a
                  fit check hidden on this site).
                </p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <section className='border-y border-[#62574F]/20 bg-[#E8DCCB] py-8'>
          <div className='overflow-hidden'>

            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: 'linear',
              }}
              className='flex w-max whitespace-nowrap'
            >
              {[0, 1].map((copy) => (
                <div
                  key={copy}
                  className='flex items-center text-[clamp(2rem,4vw,4.5rem)] uppercase tracking-[-0.03em]'
                >
                  <span className='mx-6'>Design</span>
                  <span className='opacity-30'>✦</span>

                  <span className='mx-6'>Development</span>
                  <span className='opacity-30'>✦</span>

                  <span className='mx-6'>Creative Code</span>
                  <span className='opacity-30'>✦</span>

                  <span className='mx-6'>AI</span>
                  <span className='opacity-30'>✦</span>

                  <span className='mx-6'>Interaction</span>
                  <span className='opacity-30'>✦</span>
                </div>
              ))}
            </motion.div>

          </div>
        </section>

        {/* DESIGN + CODE */}
        <section className='bg-[#F4EFE8]'>
          <div className='container py-24 md:py-36'>

            <div className='mb-16 flex items-center justify-between'>
              <p className='text-xs uppercase tracking-[0.22em] opacity-45'>
                Where I fit
              </p>

              <p className='hidden text-xs uppercase tracking-[0.22em] opacity-45 md:block'>
                Somewhere in the middle
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
              }}
              className='grid grid-cols-1 gap-10 md:grid-cols-2'
            >

              {/* DESIGN */}
              <motion.div
                whileHover={{ x: 12 }}
                transition={{ duration: 0.35 }}
                className='group border-t border-[#62574F]/25 py-8'
              >
                <div className='mb-20 flex items-center justify-between'>
                  <Palette
                    size={25}
                    strokeWidth={1.1}
                    className='opacity-50'
                  />

                  <span className='text-xs uppercase tracking-[0.2em] opacity-40'>
                    Visual
                  </span>
                </div>

                <h2 className='text-[clamp(4rem,8vw,8rem)] leading-none tracking-[-0.055em]'>
                  Design
                </h2>

                <p className='mt-6 max-w-sm text-sm leading-relaxed opacity-60'>
                  Interfaces, layouts, visual systems and the tiny details that
                  make something feel considered.
                </p>
              </motion.div>

              {/* CODE */}
              <motion.div
                whileHover={{ x: -12 }}
                transition={{ duration: 0.35 }}
                className='group border-t border-[#62574F]/25 py-8'
              >
                <div className='mb-20 flex items-center justify-between'>
                  <Code2
                    size={25}
                    strokeWidth={1.1}
                    className='opacity-50'
                  />

                  <span className='text-xs uppercase tracking-[0.2em] opacity-40'>
                    Functional
                  </span>
                </div>

                <h2 className='text-right text-[clamp(4rem,8vw,8rem)] leading-none tracking-[-0.055em]'>
                  Code
                </h2>

                <p className='ml-auto mt-6 max-w-sm text-right text-sm leading-relaxed opacity-60'>
                  Building the logic underneath and turning static ideas into
                  things people can actually interact with.
                </p>
              </motion.div>

            </motion.div>

            {/* MOVING INDICATOR */}
            <div className='relative mt-12 h-[1px] bg-[#62574F]/25'>
              <motion.div
                animate={{
                  left: ['0%', '98%', '0%'],
                }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className='absolute -top-[7px] h-[15px] w-[15px] rounded-full bg-[#62574F]'
              />
            </div>

            <p className='mt-6 text-center text-xs uppercase tracking-[0.22em] opacity-45'>
              That middle bit? That&apos;s usually where you&apos;ll find me.
            </p>

          </div>
        </section>

        {/* STATEMENT */}
        <section className='bg-[#E8DCCB]'>
          <div className='container py-28 md:py-40'>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <p className='mb-8 text-xs uppercase tracking-[0.22em] opacity-45'>
                My approach
              </p>

              <h2 className='max-w-[1200px] text-[clamp(4rem,8vw,8rem)] leading-[0.92] tracking-[-0.055em]'>
                Pretty is nice.
                <br />

                <motion.span
                  whileHover={{ x: 20 }}
                  transition={{ duration: 0.3 }}
                  className='inline-block cursor-default'
                >
                  Pretty + functional
                </motion.span>

                <br />
                is better.
              </h2>

              <div className='mt-16 flex flex-wrap gap-3'>
                <span className='rounded-full border border-[#62574F]/30 px-5 py-3 text-xs uppercase tracking-[0.15em]'>
                  Designer&apos;s eye
                </span>

                <span className='rounded-full border border-[#62574F]/30 px-5 py-3 text-xs uppercase tracking-[0.15em]'>
                  Developer&apos;s brain
                </span>

                <span className='rounded-full border border-[#62574F]/30 px-5 py-3 text-xs uppercase tracking-[0.15em]'>
                  Curious human
                </span>
              </div>

            </motion.div>
          </div>
        </section>

        {/* SERVICES */}
        <section className='bg-[#F4EFE8]'>
          <div className='container py-24 md:py-36'>

            <div className='mb-16 grid grid-cols-12'>
              <div className='col-span-12 md:col-span-9'>

                <p className='mb-8 text-xs uppercase tracking-[0.22em] opacity-45'>
                  So, what can I do for you?
                </p>

                <h2 className='text-[clamp(3.5rem,7vw,7rem)] leading-[0.92] tracking-[-0.05em]'>
                  I make digital things
                  <br />
                  people want to explore.
                </h2>

              </div>
            </div>

            <div className='border-t border-[#62574F]/20'>

              {services.map((service, index) => {
                const open = activeService === index;

                return (
                  <motion.div
                    key={service.number}
                    onMouseEnter={() => setActiveService(index)}
                    onMouseLeave={() => setActiveService(null)}
                    className='cursor-default border-b border-[#62574F]/20'
                  >

                    <div className='grid grid-cols-12 items-center py-9 md:py-12'>

                      <div className='col-span-2'>
                        <span className='text-xs opacity-40'>
                          {service.number}
                        </span>
                      </div>

                      <div className='col-span-8 md:col-span-6'>
                        <motion.h3
                          animate={{
                            x: open ? 14 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className='text-3xl tracking-[-0.04em] md:text-5xl'
                        >
                          {service.title}
                        </motion.h3>
                      </div>

                      <div className='hidden md:col-span-3 md:block'>
                        <p className='text-sm opacity-50'>
                          {service.short}
                        </p>
                      </div>

                      <div className='col-span-2 flex justify-end md:col-span-1'>
                        <motion.div
                          animate={{
                            rotate: open ? 45 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <ArrowUpRight
                            size={22}
                            strokeWidth={1.2}
                          />
                        </motion.div>
                      </div>

                    </div>

                    <AnimatePresence>
                      {open && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: 'auto',
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.35,
                          }}
                          className='overflow-hidden'
                        >
                          <div className='grid grid-cols-12 pb-10'>

                            <div className='col-start-3 col-span-9 md:col-span-6'>
                              <p className='max-w-xl text-base leading-[1.6] opacity-65'>
                                {service.description}
                              </p>

                              <div className='mt-6 flex flex-wrap gap-2'>
                                {service.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className='rounded-full border border-[#62574F]/25 px-4 py-2 text-[10px] uppercase tracking-[0.15em] opacity-65'
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </motion.div>
                );
              })}

            </div>
          </div>
        </section>

        {/* CURRENTLY OCCUPYING MY BRAIN */}
        <section className='bg-[#62574F] text-[#F4EFE8]'>
          <div className='container py-24 md:py-36'>

            <div className='flex items-end justify-between'>
              <div>
                <p className='mb-5 text-xs uppercase tracking-[0.22em] opacity-50'>
                  Currently occupying my brain
                </p>

                <h2 className='text-[clamp(3rem,6vw,6rem)] leading-[0.95] tracking-[-0.05em]'>
                  Things I can&apos;t
                  <br />
                  stop thinking about.
                </h2>
              </div>

              <p className='hidden text-[10px] uppercase tracking-[0.2em] opacity-50 md:block'>
                Drag them around
              </p>
            </div>

            <div className='relative mt-16 h-[520px] overflow-hidden border-y border-[#F4EFE8]/15'>

              {thoughts.map((thought, index) => (
                <motion.div
                  key={thought.text}
                  drag
                  dragConstraints={{
                    left: -80,
                    right: 80,
                    top: -60,
                    bottom: 60,
                  }}
                  dragElastic={0.15}
                  whileHover={{
                    scale: 1.08,
                  }}
                  whileDrag={{
                    scale: 1.12,
                  }}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.06,
                  }}
                  className={`absolute cursor-grab select-none ${thought.className}`}
                >
                  <span className='whitespace-nowrap text-[clamp(1.5rem,3vw,3.5rem)] tracking-[-0.035em]'>
                    {thought.text}
                  </span>
                </motion.div>
              ))}

              <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20'>
                <Sparkles
                  size={70}
                  strokeWidth={0.7}
                />
              </div>

            </div>

            <p className='mt-5 text-right text-[10px] uppercase tracking-[0.2em] opacity-50 md:hidden'>
              Psst... drag them around
            </p>

          </div>
        </section>

        {/* TOOLBOX */}
        <section className='bg-[#E8DCCB]'>
          <div className='container py-24 md:py-36'>

            <div className='grid grid-cols-1 gap-16 md:grid-cols-12'>

              <div className='md:col-span-4'>
                <p className='mb-6 text-xs uppercase tracking-[0.22em] opacity-45'>
                  My toolbox
                </p>

                <h2 className='text-[clamp(3rem,5vw,5rem)] leading-[0.95] tracking-[-0.05em]'>
                  Things I make
                  <br />
                  things with.
                </h2>

                <p className='mt-8 max-w-xs text-base leading-relaxed opacity-60'>
                  A growing collection of tools I use to turn ideas into
                  working digital experiences.
                </p>
              </div>

              <div className='md:col-span-8'>
                <div className='flex min-h-[420px] flex-wrap content-center items-center justify-center gap-4 md:gap-6'>

                  {tools.map((tool, index) => (
                    <motion.div
                      key={tool.name}
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
                        delay: index * 0.05,
                      }}
                      whileHover={{
                        scale: 1.12,
                        rotate: 0,
                        y: -8,
                        zIndex: 10,
                      }}
                      style={{
                        rotate: tool.rotate,
                      }}
                      className='cursor-default rounded-full border border-[#62574F]/30 bg-[#F4EFE8] px-6 py-4 text-xl shadow-sm md:px-8 md:py-5 md:text-3xl'
                    >
                      {tool.name}
                    </motion.div>
                  ))}

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className='relative bg-[#F4EFE8]'>
          <div className='container py-24 md:py-36'>

            <div className='mb-16 flex items-end justify-between'>

              <div>
                <p className='mb-7 text-xs uppercase tracking-[0.22em] opacity-45'>
                  Okay, but can she actually build?
                </p>

                <h2 className='text-[clamp(3.5rem,7vw,7rem)] leading-[0.92] tracking-[-0.05em]'>
                  See for yourself.
                </h2>
              </div>

              <span className='hidden text-xs uppercase tracking-[0.2em] opacity-40 md:block'>
                Hover a project
              </span>

            </div>

            <div className='relative border-t border-[#62574F]/20'>

              {projects.map((project, index) => (
                <Link
                  key={project.title}
                  href={project.href}
                  onMouseEnter={() => setActiveProject(index)}
                  onMouseLeave={() => setActiveProject(null)}
                  className='group grid grid-cols-12 items-center border-b border-[#62574F]/20 py-8 md:py-10'
                >

                  <span className='col-span-2 text-xs opacity-40'>
                    {project.number}
                  </span>

                  <motion.h3
                    animate={{
                      x: activeProject === index ? 12 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className='col-span-7 text-3xl tracking-[-0.04em] md:text-5xl'
                  >
                    {project.title}
                  </motion.h3>

                  <span className='hidden text-xs uppercase tracking-[0.16em] opacity-40 md:col-span-2 md:block'>
                    {project.type}
                  </span>

                  <div className='col-span-3 flex justify-end md:col-span-1'>
                    <ArrowUpRight
                      size={20}
                      strokeWidth={1.2}
                      className='transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1'
                    />
                  </div>

                </Link>
              ))}

              {/* FLOATING PROJECT IMAGE */}
              <AnimatePresence>
                {activeProject !== null && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.92,
                      rotate: -2,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.92,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className='pointer-events-none absolute right-[8%] top-1/2 z-20 hidden h-[240px] w-[380px] -translate-y-1/2 overflow-hidden bg-[#DED3C3] p-3 shadow-2xl lg:block'
                  >
                    <div className='relative h-full w-full'>
                      <Image
                        src={projects[activeProject].image}
                        alt={projects[activeProject].title}
                        fill
                        sizes='380px'
                        className='object-contain'
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

            <div className='mt-10 flex justify-end'>
              <Link
                href='/work'
                className='group flex items-center gap-2 text-xs uppercase tracking-[0.18em]'
              >
                All projects

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.2}
                  className='transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1'
                />
              </Link>
            </div>

          </div>
        </section>

        {/* FREELANCE AVAILABILITY */}
        <section className='border-y border-[#62574F]/20 bg-[#E8DCCB]'>
          <div className='container py-10'>

            <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>

              <div className='flex items-center gap-3'>
                <motion.span
                  animate={{
                    opacity: [1, 0.3, 1],
                    scale: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                  }}
                  className='h-2.5 w-2.5 rounded-full bg-[#62574F]'
                />

                <span className='text-xs uppercase tracking-[0.2em]'>
                  Open to internships and collaborations
                </span>
              </div>

              <p className='text-xs uppercase tracking-[0.18em] opacity-45'>
                Web · Frontend · Python
              </p>

            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className='bg-[#62574F] text-[#F4EFE8]'>
          <div className='container py-28 md:py-40'>

            <p className='mb-10 text-xs uppercase tracking-[0.22em] opacity-50'>
              Got something in mind?
            </p>

            <div className='grid grid-cols-1 gap-14 md:grid-cols-12'>

              <div className='md:col-span-9'>
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
                    duration: 0.8,
                  }}
                  className='text-[clamp(4.5rem,9vw,9rem)] leading-[0.86] tracking-[-0.055em]'
                >
                  Throw it
                  <br />
                  my way.
                </motion.h2>
              </div>

              <div className='flex flex-col justify-end md:col-span-3'>

                <p className='mb-8 max-w-xs text-sm leading-relaxed opacity-60'>
                  A website, a redesign, an idea or something that doesn&apos;t
                  quite have a name yet.
                </p>

                <Link
                  href='/contact'
                  className='group flex items-center justify-between border-b border-[#F4EFE8]/30 pb-4 text-lg'
                >
                  <span>Tell me about it</span>

                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.2}
                    className='transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1'
                  />
                </Link>

                <p className='mt-5 text-[10px] uppercase tracking-[0.18em] opacity-50'>
                  No perfectly written brief required.
                </p>

              </div>

            </div>
          </div>
        </section>

      </main>
    </Transition>
  );
}