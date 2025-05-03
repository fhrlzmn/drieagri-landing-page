import Image from 'next/image';

export default function Partner() {
  return (
    <section
      id='partner'
      className='grid md:grid-cols-2 gap-4 mt-32 md:mt-48 px-16 md:px-24'
    >
      <div className='hidden relative md:flex justify-center px-8'>
        <Image
          src='/assets/circles.svg'
          alt='Circles'
          height={147}
          width={191}
          className='absolute -top-14 -left-4 -z-1'
        />
        <Image
          src='/assets/person.png'
          alt='Petani'
          height={673}
          width={498}
          className='w-full'
        />
      </div>
      <div className='flex flex-col items-center gap-2'>
        <span className='text-black text-lg md:text-2xl font-bold'>
          Partner Kami
        </span>
        <h2 className='text-primary text-3xl md:text-5xl font-bold text-center'>
          Bekerja Sama Dengan
        </h2>
        <span className='block h-1 w-2/3 md:max-w-192 bg-secondary mx-auto mt-2' />

        <div className='grid grid-cols-3 mt-8 md:mt-16 gap-8 justify-center items-center'>
          {Array.from({ length: 9 }, (_, i) => (
            <div key={`partner-${i}`} className='max-w-40 grayscale'>
              <Image
                src={`/assets/partners/${i}.png`}
                alt={`Partner ${i}`}
                width={200}
                height={200}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
