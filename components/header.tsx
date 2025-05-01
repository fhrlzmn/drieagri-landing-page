'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import MobileMenuButton from './header/mobile-menu-button';
import MobileMenu from './header/mobile-menu';

const navigationLinks = [
  { name: 'Beranda', href: '' },
  { name: 'Blog', href: '#blog' },
  { name: 'Bantuan', href: '#bantuan' },
];

const activeLinkClass =
  'text-primary underline underline-offset-4 decoration-2 decoration-primary';

export default function Header() {
  const searchParams = useSearchParams();
  const [activeLink, setActiveLink] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setActiveLink(window.location.hash);
  }, [searchParams]);

  return (
    <header className='sticky top-0 z-50 bg-white shadow-md'>
      <div className='container mx-auto flex items-center justify-between py-4 px-4 md:px-24 font-semibold'>
        <div className='flex items-center gap-2'>
          <Image
            src='/logo.svg'
            width={80}
            height={80}
            alt='DrieAgrie Logo'
            className='w-full h-8'
          />
          <Link href='#' className='text-primary text-2xl font-bold'>
            DrieAgri
          </Link>
        </div>
        <nav className='hidden md:flex gap-8'>
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={
                activeLink === link.href
                  ? activeLinkClass
                  : 'hover:text-primary'
              }
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <Link
          href='#'
          className='hidden md:inline-block bg-primary text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-primary/80'
        >
          Login/Register
        </Link>

        {/* Mobile menu */}
        <MobileMenuButton
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          isMobileMenuOpen={isMobileMenuOpen}
        />
        <MobileMenu
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          activeLink={activeLink}
        />
      </div>
    </header>
  );
}
