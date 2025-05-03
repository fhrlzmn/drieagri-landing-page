import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='bg-primary mt-32 pt-32 clip-footer-mobile md:clip-footer-desktop'>
      <div className='container mx-auto p-8 md:px-24'>
        <div className='flex items-center gap-4'>
          <Image
            src='/logo.svg'
            width={80}
            height={80}
            alt='DrieAgrie Logo'
            className='h-16 w-16'
          />
          <Link href='#' className='text-white text-3xl font-bold'>
            DrieAgri
          </Link>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-4'>
          <div className='flex flex-col gap-2'>
            <Link href='#' className='text-secondary text-base font-semibold'>
              Perusahaan
            </Link>
            <Link href='#' className='text-white text-base font-semibold'>
              Tentang DrieAgrie
            </Link>
            <Link href='#' className='text-white text-base font-semibold'>
              Blog
            </Link>
            <Link href='#' className='text-white text-base font-semibold'>
              Hubungi Kami
            </Link>
            <Link href='#' className='text-white text-base font-semibold'>
              FAQ
            </Link>
          </div>
          <div className='flex flex-col gap-2'>
            <Link href='#' className='text-secondary text-base font-semibold'>
              Produk
            </Link>
            <Link href='#' className='text-white text-base font-semibold'>
              Solusi untuk Panen
            </Link>
            <Link href='#' className='text-white text-base font-semibold'>
              Solusi Merawat Tanaman
            </Link>
            <Link href='#' className='text-white text-base font-semibold'>
              Solusi untuk Petani
            </Link>
          </div>
          <div className='flex flex-col gap-2'>
            <Link href='#' className='text-secondary text-base font-semibold'>
              Gabung di DrieAgrie
            </Link>
            <Link href='#' className='text-white text-base font-semibold'>
              Karir
            </Link>
          </div>
          <div className='flex flex-col gap-2'>
            <h3 className='text-secondary text-base font-semibold'>
              DrieAgrie Technology
            </h3>
            <p className='text-white text-base font-semibold'>
              PT Pertanian Teknologi Global
            </p>
            <p className='text-white text-base'>Jl. Depok No.1, Yogyakarta</p>
            <p className='text-white text-base font-semibold'>Ikuti Kami:</p>
            <div className='flex gap-2'>
              <Link href='#'>
                <Image
                  src='/socialmedia/instagram.svg'
                  alt='Instagram'
                  width={32}
                  height={32}
                />
              </Link>
              <Link href='#'>
                <Image
                  src='/socialmedia/tiktok.svg'
                  alt='Tiktok'
                  width={32}
                  height={32}
                />
              </Link>
              <Link href='#'>
                <Image
                  src='/socialmedia/linkedin.svg'
                  alt='LinkedIn'
                  width={32}
                  height={32}
                />
              </Link>
            </div>
          </div>
        </div>

        <p className='text-white font-semibold text-center mt-8'>
          2025 © DrieAgri{' '}
        </p>
      </div>
    </footer>
  );
}
