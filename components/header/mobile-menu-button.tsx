import { Menu } from 'lucide-react';

interface Props {
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  isMobileMenuOpen: boolean;
}

export default function MobileMenuButton({
  setIsMobileMenuOpen,
  isMobileMenuOpen,
}: Props) {
  return (
    <button
      className='md:hidden'
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    >
      <Menu className='text-primary' />
    </button>
  );
}
