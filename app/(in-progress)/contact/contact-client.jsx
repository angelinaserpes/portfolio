'use client';

import { motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  FileText,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';
import Link from 'next/link';

import { Navbar, Transition } from '@/layout';

const ease = [0.76, 0, 0.24, 1];

function ContactRow({
  number,
  label,
  detail,
  href,
  icon: Icon,
  external = false,
}) {
  return (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className='group relative block overflow-hidden border-t border-[#332C28]/20 last:border-b'
    >
      <div className='absolute inset-0 origin-bottom scale-y-0 bg-[#8F796C] transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] group-hover:scale-y-100' />

      <div className='relative z-10 grid min-h-[145px] grid-cols-[45px_1fr_auto] items-center gap-4 px-1 transition-colors duration-300 group-hover:text-[#F6F0EA] md:min-h-[170px] md:grid-cols-[80px_1fr_260px_auto]'>
        <span className='text-[9px] tracking-[0.2em] opacity-35'>
          {number}
        </span>

        <p className='text-[clamp(2.4rem,5vw,5.8rem)] leading-none tracking-[-0.06em]'>
          {label}
        </p>

        <p className='hidden max-w-[220px] text-[11px] leading-[1.6] opacity-50 md:block'>
          {detail}
        </p>

        <motion.div
          className='flex h-12 w-12 items-center justify-center rounded-full border border-current/25 md:h-14 md:w-14'
          whileHover={{
            rotate: 45,
          }}
          transition={{
            duration: 0.35,
            ease,
          }}
        >
          <Icon
            size={17}
            strokeWidth={1}
          />
        </motion.div>
      </div>
    </Link>
  );
}

export default function ContactClient() {
  return (
    <Transition>
      <Navbar />

      <main className='overflow-hidden bg-[#F3EDE6] text-[#332C28]'>
        {/* HERO */}
        <section className='relative flex min-h-screen flex-col px-6 pb-8 pt-28 sm:px-10 md:px-[5vw] md:pt-32'>
          <div className='flex items-center justify-between border-b border-[#332C28]/20 pb-5'>
            <p className='text-[9px] uppercase tracking-[0.27em] opacity-45'>
              Contact / Angelina Serpes
            </p>

            <div className='flex items-center gap-3'>
              <span className='relative flex h-2 w-2'>
                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7E8B72] opacity-45' />
                <span className='relative inline-flex h-2 w-2 rounded-full bg-[#7E8B72]' />
              </span>

              <p className='text-[9px] uppercase tracking-[0.23em] opacity-45'>
                Open to opportunities
              </p>
            </div>
          </div>

          <div className='flex flex-1 flex-col justify-center py-16 md:py-20'>
            <motion.p
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 0.45,
                y: 0,
              }}
              transition={{
                delay: 0.08,
                duration: 0.7,
                ease,
              }}
              className='mb-8 text-[10px] uppercase tracking-[0.28em]'
            >
              Have an idea, opportunity or just want to say hello?
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 45,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.14,
                duration: 0.9,
                ease,
              }}
              className='max-w-[1200px]'
            >
              <h1 className='text-[clamp(4.8rem,10.5vw,11.5rem)] leading-[0.84] tracking-[-0.08em]'>
                LET&apos;S
              </h1>

              <h1 className='ml-[8vw] font-serif text-[clamp(4.8rem,10.5vw,11.5rem)] italic leading-[0.84] tracking-[-0.075em] text-[#8D786B] md:ml-[12vw]'>
                talk<span className='ml-[0.14em]'>.</span>
              </h1>
            </motion.div>
          </div>

          <div className='flex items-end justify-between border-t border-[#332C28]/20 pt-5'>
            <p className='max-w-[360px] text-[12px] leading-[1.7] opacity-48'>
              Computer Engineering student building across
              software, AI and thoughtful digital experiences.
            </p>

            <motion.div
              animate={{
                y: [0, 6, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#332C28]/20'
            >
              <ArrowDown
                size={15}
                strokeWidth={1}
              />
            </motion.div>
          </div>
        </section>

        {/* EMAIL */}
        <section className='bg-[#D8C8BC] px-6 py-28 sm:px-10 md:px-[5vw] md:py-40'>
          <div className='mb-16 flex items-end justify-between'>
            <div>
              <p className='mb-5 text-[9px] uppercase tracking-[0.28em] opacity-45'>
                01 / The easiest way
              </p>

              <p className='max-w-lg text-[15px] leading-[1.7] opacity-55'>
                No forms. No waiting around.
                <br />
                My inbox is right here.
              </p>
            </div>

            <Mail
              size={35}
              strokeWidth={0.8}
              className='hidden opacity-30 md:block'
            />
          </div>

          <a
            href='mailto:angelinaserpes@gmail.com'
            className='group relative block overflow-hidden border-y border-[#493D37]/20 py-12 md:py-16'
          >
            <div className='absolute inset-0 origin-left scale-x-0 bg-[#A88F81] transition-transform duration-700 ease-[cubic-bezier(.76,0,.24,1)] group-hover:scale-x-100' />

            <div className='relative z-10 transition-colors duration-500 group-hover:text-[#FFF8F2]'>
              <p className='mb-5 text-[9px] uppercase tracking-[0.25em] opacity-50'>
                Email me
              </p>

              <div className='flex items-end justify-between gap-6'>
                <p className='break-all text-[clamp(2rem,6.1vw,7rem)] leading-[0.92] tracking-[-0.065em]'>
                  angelinaserpes
                  <br className='md:hidden' />
                  @gmail.com
                </p>

                <motion.div
                  className='mb-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-current/25 md:h-16 md:w-16'
                  whileHover={{
                    rotate: 45,
                  }}
                  transition={{
                    duration: 0.35,
                    ease,
                  }}
                >
                  <ArrowUpRight
                    size={22}
                    strokeWidth={0.9}
                  />
                </motion.div>
              </div>
            </div>
          </a>

          <div className='mt-5 flex items-center justify-between'>
            <p className='text-[9px] uppercase tracking-[0.2em] opacity-35'>
              Say hello
            </p>

            <p className='text-[9px] uppercase tracking-[0.2em] opacity-35'>
              Click to compose ↗
            </p>
          </div>
        </section>

        {/* PROFESSIONAL LINKS */}
        <section className='px-6 py-28 sm:px-10 md:px-[5vw] md:py-40'>
          <div className='mb-20 grid gap-10 md:grid-cols-2'>
            <div>
              <p className='mb-5 text-[9px] uppercase tracking-[0.28em] opacity-40'>
                02 / Elsewhere
              </p>

              <h2 className='text-[clamp(4rem,8vw,9rem)] leading-[0.87] tracking-[-0.075em]'>
                Find me
                <br />

                <span className='font-serif italic text-[#8D786B]'>
                  out there<span className='ml-[0.14em]'>.</span>
                </span>
              </h2>
            </div>

            <div className='flex items-end md:justify-end'>
              <p className='max-w-xs text-[13px] leading-[1.75] opacity-45'>
                Code, experience and the professional side of what
                I&apos;m building live here.
              </p>
            </div>
          </div>

          <ContactRow
            number='01'
            label='GitHub'
            detail='Projects, experiments and code.'
            href='https://github.com/angelinaserpes'
            icon={Github}
            external
          />

          <ContactRow
            number='02'
            label='LinkedIn'
            detail='Experience, education and professional updates.'
            href='https://linkedin.com/in/angelina-serpes'
            icon={Linkedin}
            external
          />

          <ContactRow
            number='03'
            label='Résumé'
            detail='Experience, projects, education and technical background.'
            href='/angelina-serpes-resume.pdf'
            icon={FileText}
            external
          />
        </section>

        {/* FOOTER */}
        <footer className='bg-[#332C28] px-6 py-10 text-[#F3EDE6] sm:px-10 md:px-[5vw]'>
          <div className='flex min-h-[210px] flex-col justify-between gap-14'>
            <div className='flex items-start justify-between border-b border-white/15 pb-5'>
              <p className='text-[9px] uppercase tracking-[0.24em] opacity-45'>
                Angelina Serpes
              </p>

              <p className='text-[9px] uppercase tracking-[0.24em] opacity-45'>
                Mumbai / India
              </p>
            </div>

            <div className='flex flex-col gap-7 md:flex-row md:items-end md:justify-between'>
              <p className='text-[clamp(2.7rem,5vw,5.5rem)] leading-none tracking-[-0.06em]'>
                See you
                <span className='font-serif italic text-[#BFA99B]'>
                  {' '}around.
                </span>
              </p>

              <div className='flex flex-wrap gap-x-6 gap-y-3'>
                <a
                  href='mailto:angelinaserpes@gmail.com'
                  className='text-[9px] uppercase tracking-[0.2em] opacity-45 transition-opacity hover:opacity-100'
                >
                  Email ↗
                </a>

                <a
                  href='https://github.com/angelinaserpes'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-[9px] uppercase tracking-[0.2em] opacity-45 transition-opacity hover:opacity-100'
                >
                  GitHub ↗
                </a>

                <a
                  href='https://linkedin.com/in/angelina-serpes'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-[9px] uppercase tracking-[0.2em] opacity-45 transition-opacity hover:opacity-100'
                >
                  LinkedIn ↗
                </a>

                <a
                  href='/angelina-serpes-resume.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-[9px] uppercase tracking-[0.2em] opacity-45 transition-opacity hover:opacity-100'
                >
                  Résumé ↗
                </a>
              </div>
            </div>

            <div className='flex items-center justify-between border-t border-white/10 pt-5'>
              <p className='text-[8px] uppercase tracking-[0.2em] opacity-25'>
                Computer Engineering / Mumbai
              </p>

              <p className='text-[8px] uppercase tracking-[0.2em] opacity-25'>
                © 2026
              </p>
            </div>
          </div>
        </footer>
      </main>
    </Transition>
  );
}