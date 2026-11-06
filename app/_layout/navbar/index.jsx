'use client';

import { NavbarBrand } from './brand';
import { NavbarList } from './list';

/** @param {{ tone?: 'light' | 'dark' }} props */
export function Navbar({ tone = 'light' }) {
  return (
    <nav className='absolute inset-x-0 top-0 z-10'>
      <div className={`flex items-center justify-between px-8 py-4 ${tone === 'dark' ? 'text-[#332C28]' : 'text-background'}`}>
        <NavbarBrand />
        <NavbarList />
      </div>
    </nav>
  );
}
