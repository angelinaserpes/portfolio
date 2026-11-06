'use client';

import { useRef, useState } from 'react';

import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Database,
  Github,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Terminal,
} from 'lucide-react';
import Link from 'next/link';

import { Transition } from '@/layout';

const ease = [0.76, 0, 0.24, 1];

const experiences = [
  {
    number: '01',
    year: '2026',
    period: 'JUL 2026',
    company: 'InAmigos',
    fullCompany: 'InAmigos Foundation',
    role: 'Web Development Intern',
    intro:
      'Responsive websites, interface thinking and AI-assisted development for web applications and NGO platforms.',
    details: [
      'Developed responsive websites using AI-assisted web development tools and modern design practices.',
      'Designed UI/UX wireframes and prototypes in Figma.',
      'Implemented website layouts, feature proposals and user interface improvements.',
      'Used prompt engineering and AI development tools to streamline website creation and content generation.',
    ],
    disciplines: ['WEB DEVELOPMENT', 'FIGMA', 'AI-ASSISTED'],
  },
  {
    number: '02',
    year: '2025',
    period: 'AUG — OCT 2025',
    company: 'VH Consulting',
    fullCompany: 'VH Consulting',
    role: 'AI Intern',
    intro:
      'AI-driven workflows, rapid web prototyping and experimentation with tools that turn ideas into working interfaces.',
    details: [
      'Worked on AI-driven workflows involving design automation, content generation and rapid web prototyping.',
      'Built and refined an AI-powered online store using AI tools, Figma and prompt-based iteration.',
      'Used prompt engineering with ChatGPT and Gemini to improve AI-generated content.',
      'Improved UI structure, navigation flow and visual consistency for better usability and branding.',
    ],
    disciplines: ['AI WORKFLOWS', 'PROTOTYPING', 'PROMPTING'],
    project: {
      title: 'Aurevo',
      href: '/aurevo',
    },
  },
];

const skillGroups = [
  {
    label: 'BUILD',
    caption: 'Languages & development',
    skills: [
      'Python',
      'Java',
      'JavaScript',
      'TypeScript',
      'SQL',
      'C',
      'HTML / CSS',
      'PHP',
    ],
  },
  {
    label: 'THINK',
    caption: 'Concepts & systems',
    skills: [
      'OOP',
      'DBMS',
      'Networking',
      'Cybersecurity',
      'RBAC',
    ],
  },
  {
    label: 'TOOLS',
    caption: 'Platforms & workflow',
    skills: [
      'MySQL',
      'GitHub',
      'Figma',
      'AutoCAD',
      'ChatGPT',
      'Gemini',
      'NotebookLM',
      'Loveable',
    ],
  },
];

const certifications = [
  {
    issuer: 'Google',
    title: 'AI Essentials',
    number: '01',
    type: 'Professional learning',
    description:
      'A practical introduction to using AI effectively in everyday workflows, from generating ideas to working more efficiently with AI tools.',
  },
  {
    issuer: 'Google',
    title: 'Prompting Essentials',
    number: '02',
    type: 'Professional learning',
    description:
      'Focused on writing clearer, more effective prompts and developing a more intentional approach to interacting with generative AI.',
  },
  {
    issuer: 'IBM',
    title: 'Data Science Professional Certificate',
    number: '03',
    type: 'Professional certificate',
    description:
      'Professional learning from IBM covering the foundations and workflow of data science and analytical problem solving.',
  },
];

const securityLogs = [
  {
    time: '14:02:18',
    status: 'LOGIN',
    text: 'Credentials checked against MySQL',
  },
  {
    time: '14:02:19',
    status: 'RBAC',
    text: 'Role verified / Employee permissions applied',
  },
  {
    time: '14:02:41',
    status: 'DENY',
    text: 'System logs blocked for this role',
  },
  {
    time: '14:03:07',
    status: 'FAIL',
    text: 'Invalid password / 2 attempts left',
  },
  {
    time: '14:03:42',
    status: 'LOCK',
    text: 'Account locked after 3 failed attempts',
  },
];

function ExperiencePanel({
  experience,
  index,
  active,
  setActive,
}) {
  const isActive = active === index;

  return (
    <article
      onMouseEnter={() => setActive(index)}
      onClick={() => setActive(index)}
      className={`relative min-w-0 cursor-pointer overflow-hidden border-[#1D1D1B]/20 transition-opacity duration-500 ${
        isActive ? 'opacity-100' : 'opacity-60'
      } ${
        index === 0
          ? 'border-b lg:border-b-0 lg:border-r'
          : ''
      }`}
    >
      <div className='flex min-h-[650px] flex-col p-6 md:p-9 lg:min-h-[700px]'>
        <div className='flex items-start justify-between'>
          <div>
            <p className='text-[9px] uppercase tracking-[0.25em] opacity-40'>
              Experience / {experience.number}
            </p>

            <p className='mt-3 text-[10px] uppercase tracking-[0.2em] opacity-45'>
              {experience.period}
            </p>
          </div>

          <motion.div
            animate={{
              rotate: isActive ? 45 : 0,
              scale: isActive ? 1 : 0.92,
            }}
            transition={{
              duration: 0.5,
              ease,
            }}
            className='flex h-11 w-11 items-center justify-center rounded-full border border-[#1D1D1B]/25'
          >
            <ArrowUpRight
              size={15}
              strokeWidth={1.1}
            />
          </motion.div>
        </div>

        <div className='my-auto py-14'>
          <p className='mb-4 text-[9px] uppercase tracking-[0.24em] opacity-40'>
            {experience.role}
          </p>

          <motion.h3
            animate={{
              x: isActive ? 0 : -3,
            }}
            transition={{
              duration: 0.5,
              ease,
            }}
            className='max-w-[900px] text-[clamp(3.4rem,6.5vw,7.6rem)] leading-[0.9] tracking-[-0.07em]'
          >
            {experience.company}
          </motion.h3>

          <motion.div
            animate={{
              scaleX: isActive ? 1 : 0.38,
            }}
            transition={{
              duration: 0.65,
              ease,
            }}
            className='mt-8 h-[1px] origin-left bg-[#1D1D1B]/25'
          />

          <div className='relative mt-8 min-h-[310px]'>
            <AnimatePresence
              mode='wait'
              initial={false}
            >
              {isActive ? (
                <motion.div
                  key={`${experience.company}-active`}
                  initial={{
                    opacity: 0,
                    y: 14,
                    clipPath: 'inset(0 0 18% 0)',
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    clipPath: 'inset(0 0 0% 0)',
                  }}
                  exit={{
                    opacity: 0,
                    y: -6,
                    clipPath: 'inset(0 0 12% 0)',
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.18,
                    ease,
                  }}
                  className='max-w-xl'
                >
                  <p className='text-base leading-[1.75] opacity-60'>
                    {experience.intro}
                  </p>

                  <div className='mt-7 border-t border-[#1D1D1B]/15'>
                    {experience.details.map(
                      (detail, detailIndex) => (
                        <motion.div
                          key={detail}
                          initial={{
                            opacity: 0,
                            x: 10,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            delay:
                              0.27 +
                              detailIndex * 0.045,
                            duration: 0.35,
                            ease,
                          }}
                          className='grid grid-cols-[35px_1fr] gap-3 border-b border-[#1D1D1B]/15 py-4'
                        >
                          <span className='pt-[2px] text-[8px] opacity-25'>
                            0{detailIndex + 1}
                          </span>

                          <p className='text-xs leading-[1.65] opacity-55'>
                            {detail}
                          </p>
                        </motion.div>
                      ),
                    )}
                  </div>

                  {experience.project && (
                    <Link
                      href={experience.project.href}
                      className='group mt-6 flex items-center justify-between border-b border-[#1D1D1B]/20 pb-4'
                    >
                      <div>
                        <p className='text-[8px] uppercase tracking-[0.2em] opacity-30'>
                          Related project
                        </p>

                        <p className='mt-1 text-lg'>
                          {experience.project.title}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={16}
                        strokeWidth={1}
                        className='transition-transform duration-300 group-hover:rotate-45'
                      />
                    </Link>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key={`${experience.company}-inactive`}
                  initial={{
                    opacity: 0,
                    y: 6,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -4,
                  }}
                  transition={{
                    duration: 0.28,
                    ease,
                  }}
                  className='max-w-[280px]'
                >
                  <p className='text-sm leading-[1.7] opacity-35'>
                    Move here to explore this experience.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className='flex items-end justify-between border-t border-[#1D1D1B]/15 pt-5'>
          <div className='flex flex-wrap gap-x-5 gap-y-2'>
            {experience.disciplines.map(
              (discipline) => (
                <span
                  key={discipline}
                  className='text-[8px] uppercase tracking-[0.18em] opacity-35'
                >
                  {discipline}
                </span>
              ),
            )}
          </div>

          <span className='text-[clamp(2.5rem,4vw,4.5rem)] leading-none tracking-[-0.06em] opacity-[0.08]'>
            {experience.year}
          </span>
        </div>
      </div>
    </article>
  );
}

function TechnicalIndex() {
  const [activeGroup, setActiveGroup] = useState(0);

  const group = skillGroups[activeGroup];

  return (
    <section className='bg-[#D8C9BD] px-6 py-28 text-[#302A26] sm:px-10 md:px-[5vw] md:py-40'>
      <div className='mb-20 grid gap-8 lg:grid-cols-2'>
        <div>
          <p className='mb-5 text-[9px] uppercase tracking-[0.28em] opacity-45'>
            03 / Technical Index
          </p>

          <h2 className='text-[clamp(3.8rem,7vw,8rem)] leading-[0.9] tracking-[-0.07em]'>
            How I
            <br />

            <span className='font-serif italic text-[#806F65]'>
              work<span className='ml-[0.14em]'>.</span>
            </span>
          </h2>
        </div>

        <div className='flex items-end lg:justify-end'>
          <p className='max-w-xs text-sm leading-[1.75] opacity-55'>
            Languages, systems and tools from my current technical
            toolkit.
          </p>
        </div>
      </div>

      <div className='border-y border-[#574B44]/20'>
        <div className='grid lg:grid-cols-[0.8fr_1.2fr]'>
          <div className='border-b border-[#574B44]/20 lg:border-b-0 lg:border-r'>
            {skillGroups.map((item, index) => {
              const selected = activeGroup === index;

              return (
                <button
                  key={item.label}
                  type='button'
                  onMouseEnter={() => setActiveGroup(index)}
                  onClick={() => setActiveGroup(index)}
                  className='flex w-full items-center justify-between border-b border-[#574B44]/15 py-7 text-left last:border-b-0 md:py-9 lg:px-6'
                >
                  <div className='flex items-center gap-5'>
                    <span className='text-[8px] opacity-30'>
                      0{index + 1}
                    </span>

                    <div>
                      <motion.p
                        animate={{
                          x: selected ? 12 : 0,
                          opacity: selected ? 1 : 0.42,
                        }}
                        transition={{
                          duration: 0.4,
                          ease,
                        }}
                        className='text-[clamp(2.5rem,5vw,5.5rem)] leading-none tracking-[-0.06em]'
                      >
                        {item.label}
                      </motion.p>

                      <motion.p
                        animate={{
                          x: selected ? 12 : 0,
                          opacity: selected ? 0.55 : 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className='mt-2 text-[8px] uppercase tracking-[0.2em]'
                      >
                        {item.caption}
                      </motion.p>
                    </div>
                  </div>

                  <motion.div
                    animate={{
                      x: selected ? 0 : -10,
                      opacity: selected ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <ArrowRight
                      size={17}
                      strokeWidth={1}
                    />
                  </motion.div>
                </button>
              );
            })}
          </div>

          <div className='relative min-h-[520px] overflow-hidden p-6 md:p-10 lg:p-14'>
            <div className='absolute right-6 top-6 text-[clamp(6rem,13vw,14rem)] leading-none tracking-[-0.08em] text-[#806F65] opacity-[0.08]'>
              0{activeGroup + 1}
            </div>

            <AnimatePresence mode='wait'>
              <motion.div
                key={group.label}
                initial={{
                  opacity: 0,
                  y: 28,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -18,
                }}
                transition={{
                  duration: 0.45,
                  ease,
                }}
                className='relative z-10'
              >
                <div className='mb-10 flex items-center justify-between'>
                  <p className='text-[9px] uppercase tracking-[0.24em] opacity-45'>
                    {group.caption}
                  </p>

                  <p className='font-mono text-[8px] opacity-35'>
                    {String(group.skills.length).padStart(2, '0')} ITEMS
                  </p>
                </div>

                {group.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.04,
                      duration: 0.35,
                    }}
                    className='group flex items-center justify-between border-t border-[#574B44]/15 py-4 md:py-5'
                  >
                    <div className='flex items-baseline gap-5'>
                      <span className='font-mono text-[8px] opacity-25'>
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <motion.p
                        whileHover={{
                          x: 8,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                        className='text-[clamp(1.4rem,2.4vw,2.6rem)] tracking-[-0.04em]'
                      >
                        {skill}
                      </motion.p>
                    </div>

                    <span className='h-[5px] w-[5px] rounded-full bg-[#574B44] opacity-20 transition-opacity duration-300 group-hover:opacity-65' />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function CertificationArchive() {
  const [
    activeCertificate,
    setActiveCertificate,
  ] = useState(0);

  const certificate =
    certifications[activeCertificate];

  return (
    <section className='border-t border-[#1D1D1B]/20 px-6 py-28 sm:px-10 md:px-[5vw] md:py-40'>
      <div className='mb-20 flex items-end justify-between'>
        <div>
          <p className='mb-5 text-[9px] uppercase tracking-[0.28em] opacity-40'>
            05 / Certifications
          </p>

          <h2 className='text-[clamp(3.8rem,7vw,8rem)] leading-[0.9] tracking-[-0.07em]'>
            Picked up
            <br />

            <span className='font-serif italic text-[#827267]'>
              along the way<span className='ml-[0.14em]'>.</span>
            </span>
          </h2>
        </div>

        <p className='hidden font-mono text-[10px] opacity-35 md:block'>
          0{activeCertificate + 1} / 03
        </p>
      </div>

      <div className='grid border-y border-[#1D1D1B]/20 lg:grid-cols-[0.65fr_1.35fr]'>
        <div className='border-b border-[#1D1D1B]/20 lg:border-b-0 lg:border-r'>
          {certifications.map(
            (item, index) => {
              const active =
                index === activeCertificate;

              return (
                <button
                  type='button'
                  key={item.title}
                  onMouseEnter={() =>
                    setActiveCertificate(index)
                  }
                  onClick={() =>
                    setActiveCertificate(index)
                  }
                  className='flex w-full items-center justify-between border-b border-[#1D1D1B]/15 py-8 text-left last:border-b-0 lg:px-7'
                >
                  <div className='flex items-center gap-5'>
                    <span className='font-mono text-[9px] opacity-30'>
                      {item.number}
                    </span>

                    <div>
                      <p className='text-[9px] uppercase tracking-[0.2em] opacity-40'>
                        {item.issuer}
                      </p>

                      <motion.p
                        animate={{
                          x: active ? 8 : 0,
                          opacity: active
                            ? 1
                            : 0.45,
                        }}
                        transition={{
                          duration: 0.4,
                          ease,
                        }}
                        className='mt-2 max-w-[280px] text-xl tracking-[-0.025em]'
                      >
                        {item.title}
                      </motion.p>
                    </div>
                  </div>

                  <motion.div
                    animate={{
                      opacity: active ? 1 : 0,
                      x: active ? 0 : -8,
                    }}
                  >
                    <ChevronRight
                      size={16}
                      strokeWidth={1}
                    />
                  </motion.div>
                </button>
              );
            },
          )}
        </div>

        <div className='relative flex min-h-[590px] items-center overflow-hidden p-7 md:p-12 lg:p-16'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={certificate.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -25,
              }}
              transition={{
                duration: 0.5,
                ease,
              }}
              className='w-full'
            >
              <div className='flex items-center justify-between border-b border-[#1D1D1B]/20 pb-5'>
                <p className='text-[9px] uppercase tracking-[0.25em] opacity-40'>
                  Certification /{' '}
                  {certificate.number}
                </p>

                <p className='text-[9px] uppercase tracking-[0.25em] opacity-40'>
                  {certificate.type}
                </p>
              </div>

              <div className='grid gap-14 py-14 md:grid-cols-[1fr_0.55fr] md:items-end'>
                <div>
                  <p className='mb-6 text-[clamp(2.5rem,4vw,4.8rem)] leading-none tracking-[-0.055em] text-[#827267]'>
                    {certificate.issuer}
                  </p>

                  <h3 className='max-w-3xl text-[clamp(3.8rem,6.8vw,8rem)] leading-[0.88] tracking-[-0.07em]'>
                    {certificate.title}
                  </h3>
                </div>

                <motion.div
                  initial={{
                    opacity: 0,
                    x: 15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.15,
                    duration: 0.4,
                  }}
                  className='border-l border-[#1D1D1B]/20 pl-7'
                >
                  <p className='mb-6 text-[9px] uppercase tracking-[0.22em] opacity-35'>
                    About
                  </p>

                  <p className='text-[16px] leading-[1.75] opacity-60'>
                    {certificate.description}
                  </p>

                  <div className='mt-9 border-t border-[#1D1D1B]/15 pt-5'>
                    <p className='text-[9px] uppercase tracking-[0.2em] opacity-35'>
                      Issued by
                    </p>

                    <p className='mt-2 text-[clamp(1.5rem,2vw,2.2rem)] tracking-[-0.03em]'>
                      {certificate.issuer}
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className='flex items-center justify-between border-t border-[#1D1D1B]/20 pt-5'>
                <p className='text-[9px] uppercase tracking-[0.22em] opacity-40'>
                  Professional development
                </p>

                <span className='font-mono text-[9px] opacity-30'>
                  ANG / CERT /{' '}
                  {certificate.number}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default function ExperiencePage() {
  const fieldRef = useRef(null);
  const crosshairRef = useRef(null);

  const [
    activeExperience,
    setActiveExperience,
  ] = useState(0);

  const [activeLog, setActiveLog] =
    useState(0);

  const [heroFocus, setHeroFocus] =
    useState('ENGINEERING');

  const handleFieldMove = (event) => {
    if (
      !fieldRef.current ||
      !crosshairRef.current
    ) {
      return;
    }

    const rect =
      fieldRef.current.getBoundingClientRect();

    const x = Math.max(
      0,
      Math.min(
        rect.width,
        event.clientX - rect.left,
      ),
    );

    const y = Math.max(
      0,
      Math.min(
        rect.height,
        event.clientY - rect.top,
      ),
    );

    crosshairRef.current.style.transform =
      `translate3d(${x}px, ${y}px, 0)`;

    const xPercent =
      (x / rect.width) * 100;

    const yPercent =
      (y / rect.height) * 100;

    let nextFocus;

    if (xPercent < 50 && yPercent < 50) {
        nextFocus = 'ENGINEERING';
    } else if (xPercent >= 50 && yPercent < 50) {
        nextFocus = 'DESIGN';
    } else if (xPercent < 50 && yPercent >= 50) {
        nextFocus = 'AI';
    } else {
        nextFocus = 'WEB';
    }

    setHeroFocus((current) =>
      current === nextFocus
        ? current
        : nextFocus,
    );
  };

  const handleFieldEnter = (event) => {
    handleFieldMove(event);

    if (crosshairRef.current) {
      crosshairRef.current.style.opacity =
        '1';
    }
  };

  const handleFieldLeave = () => {
    if (crosshairRef.current) {
      crosshairRef.current.style.opacity =
        '0';
    }
  };

  return (
    <Transition>

      <main className='overflow-hidden bg-[#F1EEE7] text-[#1D1D1B]'>

        {/* HERO */}
        <section className='relative min-h-screen overflow-hidden px-6 pb-8 pt-28 sm:px-10 md:px-[5vw]'>
          <div className='relative z-20 flex items-center justify-between border-b border-[#1D1D1B]/20 pb-5'>
            <p className='text-[8px] uppercase tracking-[0.28em] opacity-40'>
              Experience / Technical Archive
            </p>

            <p className='text-[8px] uppercase tracking-[0.28em] opacity-40'>
              Mumbai / 2025 — Now
            </p>
          </div>

          <div className='relative min-h-[calc(100vh-170px)] pt-10'>
            <div className='grid gap-10 md:grid-cols-[180px_1fr]'>

              {/* LEFT LABEL AREA */}
              <div className='hidden pt-8 md:block'>
                <p className='text-[8px] uppercase tracking-[0.24em] opacity-30'>
                  Move through
                  <br />
                  the field
                </p>

                <div className='mt-8 h-[1px] w-12 bg-[#1D1D1B]/20' />

                <AnimatePresence mode='wait'>
                  <motion.p
                    key={heroFocus}
                    initial={{
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      opacity: 0.55,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -5,
                    }}
                    transition={{
                      duration: 0.16,
                    }}
                    className='mt-5 text-[10px] uppercase tracking-[0.2em]'
                  >
                    {heroFocus}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* TRACKING FIELD */}
              <div
                ref={fieldRef}
                onPointerMove={handleFieldMove}
                onPointerEnter={
                  handleFieldEnter
                }
                onPointerLeave={
                  handleFieldLeave
                }
                className='relative hidden h-[390px] cursor-none overflow-hidden border border-[#1D1D1B]/10 md:block'
              >
                {/* GRID */}
                <div className='absolute left-1/2 top-0 h-full w-[1px] bg-[#1D1D1B]/10' />

                <div className='absolute left-0 top-1/2 h-[1px] w-full bg-[#1D1D1B]/10' />

                {/* CORNER LABELS */}
                <p className='absolute left-5 top-5 z-10 bg-[#F1EEE7] px-2 text-[8px] uppercase tracking-[0.22em] opacity-40'>
                  Engineering
                </p>

                <p className='absolute right-5 top-5 z-10 bg-[#F1EEE7] px-2 text-[8px] uppercase tracking-[0.22em] opacity-40'>
                  Design
                </p>

                <p className='absolute bottom-5 left-5 z-10 bg-[#F1EEE7] px-2 text-[8px] uppercase tracking-[0.22em] opacity-40'>
                  AI
                </p>

                <p className='absolute bottom-5 right-5 z-10 bg-[#F1EEE7] px-2 text-[8px] uppercase tracking-[0.22em] opacity-40'>
                  Web
                </p>

                {/* DIRECT 1:1 CROSSHAIR */}
                <div
                  ref={crosshairRef}
                  className='pointer-events-none absolute left-0 top-0 z-20 h-0 w-0 opacity-0 will-change-transform'
                  style={{
                    transition:
                      'opacity 120ms ease',
                  }}
                >
                  <div className='absolute left-1/2 top-1/2 h-[1px] w-16 -translate-x-1/2 -translate-y-1/2 bg-[#1D1D1B]/50' />

                  <div className='absolute left-1/2 top-1/2 h-16 w-[1px] -translate-x-1/2 -translate-y-1/2 bg-[#1D1D1B]/50' />

                  <div className='absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#1D1D1B] bg-[#F1EEE7]' />

                  <div className='absolute left-4 top-4 whitespace-nowrap bg-[#F1EEE7] px-2 py-1 text-[9px] uppercase tracking-[0.2em] opacity-60'>
                    {heroFocus}
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
                duration: 0.85,
                ease,
              }}
              className='absolute bottom-5 left-0 right-0'
            >
              <p className='mb-5 text-[9px] uppercase tracking-[0.28em] opacity-35'>
                Different disciplines / same curiosity
              </p>

              <div className='flex items-end justify-between gap-8'>
                <h1 className='max-w-[1100px] text-[clamp(4.4rem,9.5vw,10.5rem)] leading-[0.88] tracking-[-0.075em]'>
                  THE SPACE
                  <br />

                  <span className='font-serif italic text-[#827267]'>
                    between things<span className='ml-[0.14em]'>.</span>
                  </span>
                </h1>

                <motion.div
                  animate={{
                    y: [0, 7, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className='mb-3 hidden h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#1D1D1B]/20 md:flex'
                >
                  <ArrowDown
                    size={16}
                    strokeWidth={1}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className='px-6 py-28 sm:px-10 md:px-[5vw] md:py-40'>
          <div className='mb-16 flex items-end justify-between'>
            <div>
              <p className='mb-5 text-[9px] uppercase tracking-[0.28em] opacity-40'>
                01 / Experience
              </p>

              <h2 className='text-[clamp(3.8rem,7vw,8rem)] leading-[0.9] tracking-[-0.07em]'>
                Where I&apos;ve
                <br />

                <span className='font-serif italic text-[#827267]'>
                  worked<span className='ml-[0.14em]'>.</span>
                </span>
              </h2>
            </div>

            <p className='hidden max-w-xs text-sm leading-[1.7] opacity-45 md:block'>
              Move between the two experiences
              to shift the perspective.
            </p>
          </div>

          <div
            className='flex flex-col border-y border-[#1D1D1B]/20 lg:grid'
            style={{
              gridTemplateColumns:
                activeExperience === 0
                  ? 'minmax(0, 1.58fr) minmax(0, 1fr)'
                  : 'minmax(0, 1fr) minmax(0, 1.58fr)',
              transition:
                'grid-template-columns 700ms cubic-bezier(0.76, 0, 0.24, 1)',
            }}
          >
            {experiences.map(
              (experience, index) => (
                <ExperiencePanel
                  key={experience.company}
                  experience={experience}
                  index={index}
                  active={activeExperience}
                  setActive={
                    setActiveExperience
                  }
                />
              ),
            )}
          </div>
        </section>

        {/* SECURITY — PRESERVED */}
        <section className='bg-[#191A18] px-6 py-28 text-[#EAE7DF] sm:px-10 md:px-[5vw] md:py-40'>
          <div className='mb-16 flex items-start justify-between'>
            <div>
              <p className='mb-5 text-[9px] uppercase tracking-[0.28em] opacity-40'>
                02 / Engineering Archive
              </p>

              <h2 className='max-w-5xl text-[clamp(3.6rem,7vw,8rem)] leading-[0.92] tracking-[-0.065em]'>
                Secure Access &
                <br />

                <span className='font-serif italic text-[#AAA297]'>
                  Role-Based Control<span className='ml-[0.14em]'>.</span>
                </span>
              </h2>
            </div>

            <ShieldCheck
              className='hidden opacity-25 md:block'
              size={52}
              strokeWidth={0.8}
            />
          </div>

          <div className='grid border border-white/15 lg:grid-cols-[0.85fr_1.15fr]'>
            <div className='flex flex-col justify-between border-b border-white/15 p-7 lg:min-h-[580px] lg:border-b-0 lg:border-r'>
              <div>
                <div className='mb-12 flex items-center justify-between'>
                  <span className='text-[8px] uppercase tracking-[0.24em] opacity-35'>
                    System / 001
                  </span>

                  <div className='flex items-center gap-2'>
                    <span className='h-1.5 w-1.5 animate-pulse rounded-full bg-[#EAE7DF]' />

                    <span className='text-[8px] uppercase tracking-[0.2em] opacity-45'>
                      System active
                    </span>
                  </div>
                </div>

                <p className='max-w-md text-lg leading-[1.65] opacity-70'>
                  A Java Swing and MySQL access
                  system with database login,
                  role-based permissions for Admin,
                  Employee and Visitor, and account
                  lockout after three failed attempts.
                </p>

                <div className='mt-10 grid grid-cols-2 gap-[1px] bg-white/10'>
                  {[
                    ['LANGUAGE', 'Java'],
                    ['INTERFACE', 'Swing'],
                    ['DATABASE', 'MySQL'],
                    ['ACCESS', 'RBAC'],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className='bg-[#191A18] p-5'
                    >
                      <p className='text-[9px] tracking-[0.2em] opacity-30'>
                        {label}
                      </p>

                      <p className='mt-3 text-sm'>
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className='mt-12 flex gap-3'>
                <LockKeyhole
                  size={16}
                  strokeWidth={1}
                />

                <Database
                  size={16}
                  strokeWidth={1}
                />

                <Terminal
                  size={16}
                  strokeWidth={1}
                />
              </div>
            </div>

            <div className='p-5 md:p-7'>
              <div className='mb-6 flex items-center justify-between border-b border-white/10 pb-5'>
                <div className='flex items-center gap-2'>
                  <span className='h-2 w-2 rounded-full border border-white/40' />
                  <span className='h-2 w-2 rounded-full border border-white/40' />
                  <span className='h-2 w-2 rounded-full border border-white/40' />
                </div>

                <p className='font-mono text-[8px] tracking-[0.18em] opacity-30'>
                  SECURITY_ACTIVITY.LOG
                </p>
              </div>

              <div className='font-mono'>
                <p className='mb-8 text-[10px] opacity-35'>
                  {'>'} replaying a login
                  session...
                </p>

                {securityLogs.map(
                  (log, index) => (
                    <button
                      key={log.time}
                      type='button'
                      onMouseEnter={() =>
                        setActiveLog(index)
                      }
                      onClick={() =>
                        setActiveLog(index)
                      }
                      className={`grid w-full grid-cols-[65px_60px_1fr] gap-3 border-t border-white/10 py-5 text-left transition-all duration-300 ${
                        activeLog === index
                          ? 'translate-x-2 opacity-100'
                          : 'opacity-35 hover:opacity-70'
                      }`}
                    >
                      <span className='text-[9px]'>
                        {log.time}
                      </span>

                      <span className='text-[8px] tracking-[0.12em]'>
                        [{log.status}]
                      </span>

                      <span className='text-[9px]'>
                        {log.text}
                      </span>
                    </button>
                  ),
                )}
              </div>

              <AnimatePresence mode='wait'>
                <motion.div
                  key={activeLog}
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  className='mt-10 border border-white/15 p-5'
                >
                  <div className='flex items-center gap-3'>
                    <Check
                      size={13}
                      strokeWidth={1.2}
                    />

                    <p className='font-mono text-[9px] uppercase tracking-[0.15em]'>
                      Session complete / access rules
                      enforced
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* TECHNICAL INDEX */}
        <TechnicalIndex />

        {/* CURRENTLY */}
        <section className='bg-[#E5DDD2] px-6 sm:px-10 md:px-[5vw]'>
          <div className='grid min-h-[290px] items-center gap-10 py-14 md:grid-cols-[170px_1fr_180px] md:py-20'>
            <div>
              <p className='text-[11px] uppercase tracking-[0.23em] opacity-45'>
                04 / Currently
              </p>
            </div>

            <div className='md:px-[4vw]'>
              <p className='text-[clamp(2.5rem,4.7vw,5.3rem)] leading-[0.95] tracking-[-0.055em]'>
                Computer Engineering

                <span className='font-serif italic text-[#827267]'>
                  {' '}
                  at FCRIT<span className='ml-[0.14em]'>.</span>
                </span>
              </p>

              <div className='mt-7 flex flex-wrap gap-x-9 gap-y-3'>
                <p className='text-[14px] tracking-[-0.01em] opacity-60'>
                  B.Tech in Computer Engineering
                </p>

                <p className='text-[14px] tracking-[-0.01em] opacity-60'>
                  Navi Mumbai
                </p>
              </div>
            </div>

            <div className='md:text-right'>
              <p className='text-[14px] uppercase tracking-[0.16em] opacity-55'>
                2025 — 2029
              </p>

              <p className='mt-3 text-[11px] uppercase tracking-[0.18em] opacity-35'>
                Undergraduate
              </p>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <CertificationArchive />

        {/* FINAL CTA */}
        <section className='relative overflow-hidden bg-[#B9A996] px-6 py-24 text-[#F8F1E8] sm:px-10 md:px-[5vw] md:py-36'>
          <div className='absolute right-[5vw] top-0 h-full w-[1px] bg-[#F8F1E8]/10' />

          <div className='mb-16 flex items-center justify-between border-b border-[#F8F1E8]/20 pb-5'>
            <p className='text-[10px] uppercase tracking-[0.28em] opacity-55'>
              End of archive
            </p>

            <p className='hidden text-[10px] uppercase tracking-[0.22em] opacity-40 md:block'>
              There&apos;s more beyond the page
            </p>
          </div>

          <div className='grid min-h-[540px] items-end gap-16 lg:grid-cols-[1fr_420px]'>
            <div>
              <p className='mb-8 max-w-lg text-[16px] leading-[1.75] opacity-65'>
                Projects tell part of the story.
                The rest is curiosity,
                experimentation and whatever I
                decide to build next.
              </p>

              <h2 className='text-[clamp(5.5rem,11vw,12rem)] leading-[0.79] tracking-[-0.08em]'>
                STILL
                <br />

                <span className='font-serif italic'>
                  curious?
                </span>
              </h2>
            </div>

            <div className='border-t border-[#F8F1E8]/25 lg:border-l lg:border-t-0 lg:pl-11'>
              <p className='mb-8 pt-8 text-[10px] uppercase tracking-[0.24em] opacity-45 lg:pt-0'>
                Continue somewhere else
              </p>

              <Link
                href='https://github.com/angelinaserpes'
                target='_blank'
                rel='noopener noreferrer'
                className='group flex min-h-[120px] items-center justify-between border-y border-[#F8F1E8]/25 py-7'
              >
                <div>
                  <p className='text-[10px] uppercase tracking-[0.2em] opacity-45'>
                    Code / repositories
                  </p>

                  <p className='mt-3 text-[clamp(2rem,2.8vw,3rem)] tracking-[-0.04em]'>
                    GitHub
                  </p>
                </div>

                <div className='flex h-16 w-16 items-center justify-center rounded-full border border-[#F8F1E8]/30 transition-all duration-300 group-hover:bg-[#F8F1E8] group-hover:text-[#62574F]'>
                  <Github
                    size={20}
                    strokeWidth={1}
                  />
                </div>
              </Link>

              <Link
                href='/contact'
                className='group flex min-h-[120px] items-center justify-between border-b border-[#F8F1E8]/25 py-7'
              >
                <div>
                  <p className='text-[10px] uppercase tracking-[0.2em] opacity-45'>
                    Say hello
                  </p>

                  <p className='mt-3 text-[clamp(2rem,2.8vw,3rem)] tracking-[-0.04em]'>
                    Let&apos;s connect
                  </p>
                </div>

                <div className='flex h-16 w-16 items-center justify-center rounded-full bg-[#62574F] transition-transform duration-300 group-hover:-translate-y-1'>
                  <Mail
                    size={20}
                    strokeWidth={1}
                  />
                </div>
              </Link>

              <div className='mt-10 flex items-center justify-between'>
                <div>
                  <span className='text-[10px] uppercase tracking-[0.2em] opacity-40'>
                    Angelina Serpes
                  </span>

                  <p className='mt-2 text-[11px] opacity-35'>
                    Computer Engineering / Mumbai
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  strokeWidth={1}
                  className='opacity-40'
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Transition>
  );
}