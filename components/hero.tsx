import Link from 'next/link';

export default function Hero() {
  return (
    <section className='w-full bg-[url(/assets/hero.png)] bg-cover py-42 text-center md:text-start'>
      <div className='md:w-2/3 text-white px-12 md:px-24'>
        <h2 className='text-4xl md:text-5xl font-bold leading-[1.45]'>
          Tumbuh bersama lebih dari 1.000 Petani dari 200 kota di Indonesia
          melalui teknologi
        </h2>
        <p className='text-lg md:text-xl font-semibold leading-[1.45] mt-12 md:mt-6'>
          Mari kita bersama-sama mengubah cara kita menanam, mengelola, dan
          mendukung pertanian melalui Agriculture Information System (AIS)
        </p>
        <Link
          href='#'
          className='inline-block text-lg md:text-3xl font-bold text-primary bg-white rounded-xl px-6 py-2 mt-16 md:mt-8 hover:bg-white/80 transition-colors duration-300'
        >
          Gabung Bersama Kami
        </Link>
      </div>
    </section>
  );
}
