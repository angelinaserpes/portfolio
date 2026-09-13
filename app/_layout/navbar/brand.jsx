'use client';

import { Copyright } from 'lucide-react';
import Link from 'next/link';

export function NavbarBrand() {
  return (
    <Link href='/' className='group flex cursor-pointer items-center pb-5'>
      <div className='transition-transform duration-500 ease-in-expo group-hover:rotate-[360deg]'>
        <Copyright size={21} strokeWidth={1.5} />
      </div>

      <div className='ms-2 flex items-center whitespace-nowrap'>
        <h5>Angelina</h5>

        <div className='flex max-w-0 items-center overflow-hidden opacity-0 transition-all duration-500 ease-in-expo group-hover:max-w-40 group-hover:opacity-100'>
          <h5 className='ps-1'>Serpes</h5>

          <span className='ms-2 inline-block shrink-0 text-xs'>
            ↗
          </span>
        </div>
      </div>
    </Link>
  );
}