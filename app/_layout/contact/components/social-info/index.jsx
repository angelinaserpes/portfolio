'use client';

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { MagneticButton } from '@/components';
import { socialMedias } from '@/data';

import { ListTitle } from './index.styled';

export function SocialInfo() {
  const medias = socialMedias.map(
    ({ href, title }) => (
      <li
        key={title}
        className='border-b border-solid border-b-transparent transition-all duration-300 ease-in-expo hover:border-b-border'
      >
        <Link
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          passHref
        >
          <MagneticButton>
            <span className='flex items-center gap-2'>
              {title}

              <ArrowUpRight
                size={12}
                strokeWidth={1.2}
              />
            </span>
          </MagneticButton>
        </Link>
      </li>
    ),
  );

  return (
    <div className='px-6 pb-4 pt-12 sm:px-10 md:px-12'>

      <div className='border-t border-background/20 pt-8'>

        <div className='flex flex-col gap-10 md:flex-row md:items-end md:justify-between'>

          <div className='flex gap-12'>

            <div>
              <ListTitle>
                Version
              </ListTitle>

              <p className='mt-7'>
                2026 © Edition
              </p>
            </div>

            <div>
              <ListTitle>
                Based in
              </ListTitle>

              <p className='mt-7'>
                Mumbai, India
              </p>
            </div>

          </div>

          <div className='flex flex-col'>

            <ListTitle>
              Find me
            </ListTitle>

            <ul className='mt-5 flex flex-wrap gap-x-8 gap-y-3'>
              {medias}
            </ul>

          </div>

        </div>

        <div className='mt-12 flex items-center justify-between border-t border-background/10 pt-5'>

          <p className='text-[9px] uppercase tracking-[0.22em] opacity-30'>
            Designed &amp; developed by Angelina Serpes
          </p>

          <p className='hidden text-[9px] uppercase tracking-[0.22em] opacity-30 sm:block'>
            Thanks for scrolling
          </p>

        </div>

      </div>

    </div>
  );
}