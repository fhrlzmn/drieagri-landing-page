import ProgramCard from '@/components/programs/program-card';

export default function Programs() {
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
    <section id='program' className='w-full mt-32 md:mt-48 text-center'>
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
  );
}
