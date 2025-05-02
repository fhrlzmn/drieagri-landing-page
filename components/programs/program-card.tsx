import Image from 'next/image';

interface Props {
  image: string;
  description: string;
}

export default function ProgramCard({ image, description }: Props) {
  return (
    <div className='flex flex-col items-center gap-12 bg-linear-to-t from-primary to-primary/10 w-full rounded-xl shadow-lg px-12 md:px-8 py-12'>
      <Image
        src={`/programs/${image}.png`}
        alt={image}
        width={200}
        height={200}
        className='w-36'
      />
      <p className='text-white text-base font-semibold'>{description}</p>
    </div>
  );
}
