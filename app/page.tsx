import ProgramCard from '@/components/programs/program-card';
import Link from 'next/link';

export default function Home() {
  const programList = [
    {
      image: 'money',
      description: 'Bantuan modal usaha kepada pelaku usaha pertanian',
    },
    {
      image: 'plant',
      description: 'Program Penumbuhan Wirausahawan Muda Pertanian',
    },
    {
      image: 'workshop',
      description: 'Workshop bisnis dan pengelolaan start up pertanian',
    },
    {
      image: 'farmer',
      description: 'Program peningkatan kapasitas SDM pertanian',
    },
  ];

  return (
    <main className='container mx-auto'>
      {/* hero */}
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

      {/* programs */}
      <section id='program' className='w-full mt-8 md:mt-24 text-center'>
        <span className='text-black text-lg md:text-2xl font-bold'>
          Program Spesial
        </span>
        <h2 className='text-primary text-3xl md:text-5xl font-bold mt-4'>
          Solusi Kami untuk Dunia Agrikultur
        </h2>
        <span className='block h-1 w-full max-w-64 md:max-w-192 bg-secondary mt-6 mx-auto' />
        <div className='flex flex-col md:flex-row w-full gap-4 mt-16 px-12 md:px-24'>
          {programList.map((program) => (
            <ProgramCard
              key={program.image}
              image={program.image}
              description={program.description}
            />
          ))}
        </div>
      </section>

      <div className='min-h-screen'></div>
    </main>
  );
}
