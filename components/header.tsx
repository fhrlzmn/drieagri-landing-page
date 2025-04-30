'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
  const searchParams = useSearchParams();
  const [activeLink, setActiveLink] = useState<string>('');

  useEffect(() => {
    setActiveLink(window.location.hash);
  }, [searchParams]);

  const navigationLinks = [
    { name: 'Beranda', href: '' },
    { name: 'Blog', href: '#blog' },
    { name: 'Bantuan', href: '#bantuan' },
  ];

  const activeLinkClass =
    'text-primary underline underline-offset-4 decoration-2 decoration-primary';

  return (
    <header className='sticky top-0 z-50 bg-white shadow-md'>
      <div className='container mx-auto flex items-center justify-between py-4 font-semibold'>
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
        <nav className='flex gap-8'>
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
          className='bg-primary text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-primary/80'
        >
          Login/Register
        </Link>
      </div>
    </header>
  );
}
