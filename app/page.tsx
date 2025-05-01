import Link from 'next/link';

export default function Home() {
  return (
    <main className='container mx-auto'>
      <section
        id='#'
        className='w-full grid md:grid-cols-3 gap-8 bg-[url(/hero.png)] bg-cover py-8 md:py-42 text-center md:text-start'
      >
        <div className='md:col-span-2 text-white px-4 md:px-24'>
          <h2 className='text-2xl md:text-5xl font-bold leading-[1.45]'>
            Tumbuh bersama lebih dari 1.000 Petani dari 200 kota di Indonesia
            melalui teknologi
          </h2>
          <p className='text-base md:text-xl font-bold leading-[1.45] mt-6'>
            Mari kita bersama-sama mengubah cara kita menanam, mengelola, dan
            mendukung pertanian melalui Agriculture Information System (AIS)
          </p>
          <Link
            href='#'
            className='inline-block text-lg md:text-3xl font-bold text-primary bg-white rounded-xl px-6 py-2 mt-8 hover:bg-white/80 transition-colors duration-300'
          >
            Gabung Bersama Kami
          </Link>
        </div>
        <div></div>
      </section>
    </main>
  );
}
