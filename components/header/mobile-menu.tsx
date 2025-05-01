import Link from 'next/link';
import { X } from 'lucide-react';

interface Props {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  activeLink: string;
}

export default function MobileMenu({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  activeLink,
}: Props) {
  const navigationLinks = [
    { name: 'Beranda', href: '' },
    { name: 'Blog', href: '#blog' },
    { name: 'Bantuan', href: '#bantuan' },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-primary text-white z-50 transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className='flex items-center justify-between p-4'>
        <h2 className='text-xl font-bold'>Menu</h2>
        <button onClick={() => setIsMobileMenuOpen(false)}>
          <X className='text-white' />
        </button>
      </div>
      <nav className='flex flex-col items-center gap-4 mt-8 text-lg'>
        {navigationLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={
              activeLink === link.href ? 'text-white' : 'text-gray-200'
            }
          >
            {link.name}
          </Link>
        ))}
        <Link
          href='#'
          className='inline-block bg-white text-primary px-4 py-2 rounded-lg cursor-pointer hover:bg-primary/80 mt-8'
        >
          Login/Register
        </Link>
      </nav>
    </div>
  );
}
