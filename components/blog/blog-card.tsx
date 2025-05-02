import Image from 'next/image';
import Link from 'next/link';

interface Props {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
}

export default function BlogCard({
  title,
  description,
  imageUrl,
  linkUrl,
}: Props) {
  return (
    <div className='flex flex-col shadow-lg rounded-xl overflow-hidden'>
      <div className='relative w-full h-64'>
        <Image
          src={imageUrl}
          alt={title}
          width={800}
          height={400}
          className='w-full h-full object-cover'
        />
      </div>
      <div className='p-8 text-justify'>
        <h3 className='text-black text-2xl font-bold text-start line-clamp-2'>
          {title}
        </h3>
        <p className='text-black text-base font-light mt-4 line-clamp-4'>
          {description}
        </p>
        <Link
          href={linkUrl}
          className='inline-block bg-primary w-full text-white font-medium text-center rounded-xl mt-4 px-4 py-2 cursor-pointer hover:bg-primary/80'
        >
          Lihat Selengkapnya
        </Link>
      </div>
    </div>
  );
}
