import Link from 'next/link';

export default function JoinUs() {
  return (
    <section id='join-us' className='w-full mt-32 md:mt-48 text-center'>
      {/* wave */}
      <svg
        width='1440'
        height='253'
        viewBox='0 0 1440 253'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='w-full'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M-240 172.935L-187.2 180.14C-132.8 187.346 -27.2 201.757 80 194.551C187.2 187.346 292.8 158.523 400 172.935C507.2 187.346 612.8 244.991 720 252.196C827.2 259.402 932.8 216.168 1040 201.757C1147.2 187.346 1252.8 201.757 1360 180.14C1467.2 158.523 1572.8 100.879 1627.2 72.0561L1680 43.2337V0H1627.2C1572.8 0 1467.2 0 1360 0C1252.8 0 1147.2 0 1040 0C932.8 0 827.2 0 720 0C612.8 0 507.2 0 400 0C292.8 0 187.2 0 80 0C-27.2 0 -132.8 0 -187.2 0H-240V172.935Z'
          fill='#27700D'
        />
      </svg>

      <div className='container mx-auto px-8 md:px-24 md:mt-16'>
        <div className='relative bg-secondary p-8 md:p-24 rounded-lg'>
          <svg
            width='92'
            height='92'
            viewBox='0 0 92 92'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='absolute -bottom-10 left-0 md:-left-10 -z-1 hidden md:block'
          >
            <circle cx='46' cy='46' r='35' stroke='#27700D' strokeWidth='22' />
          </svg>
          <p className='text-2xl md:text-5xl text-primary font-bold leading-[1.45]'>
            Ayo Bergabung Bersama Kami untuk Meningkatkan Perawatan Tanaman Kamu
          </p>

          <Link
            href='#'
            className='inline-block bg-primary text-md md:text-xl text-white font-semibold px-4 py-2 rounded-lg hover:bg-primary/80 mt-8 md:mt-16'
          >
            Gabung Sekarang
          </Link>
          <svg
            width='120'
            height='120'
            viewBox='0 0 92 92'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='absolute -top-14 right-0 md:-right-12 -z-1 hidden md:block'
          >
            <circle cx='46' cy='46' r='35' stroke='#27700D' strokeWidth='22' />
          </svg>
        </div>
      </div>

      <div className='w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] bg-[url("/assets/join-us-image.png")] bg-cover h-64 md:h-256 -mb-48 md:-mb-128 mt-12' />
    </section>
  );
}
