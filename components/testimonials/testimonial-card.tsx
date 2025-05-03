import Image from 'next/image';

interface Props {
  name: string;
  role: string;
  imageUrl: string;
  testimonial: string;
}

export default function TestimonialCard({
  name,
  role,
  imageUrl,
  testimonial,
}: Props) {
  return (
    <div className='grid md:grid-cols-4 justify-center items-center bg-white rounded-xl shadow-xl px-8 py-12 gap-4 hover:shadow-2xl'>
      <div className='md:col-span-1 flex justify-center items-center'>
        <Image
          src={imageUrl}
          alt={name}
          width={200}
          height={200}
          className='aspect-square object-cover rounded-full max-w-36 max-h-36 overflow-hidden'
        />
      </div>
      <div className='md:col-span-3 flex flex-col p-4'>
        <p className='text-lg md:text-xl text-justify text-[#686868] leading-[1.45]'>
          &quot;{testimonial}&quot;
        </p>
        <div className='flex flex-col gap-1 items-start mt-4'>
          <h4 className='text-lg md:text-xl text-primary font-bold'>{name}</h4>
          <span className='text-base text-[#8F8F8F]'>{role}</span>
        </div>
      </div>
    </div>
  );
}
