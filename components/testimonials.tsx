'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import TestimonialCard from './testimonials/testimonial-card';
import fetchTestimonials, { Testimonial } from '@/data/fetch-testimonials';

const TESTI_PER_PAGE = 1;

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(testimonials.length / TESTI_PER_PAGE);
  const startIdx = (currentPage - 1) * TESTI_PER_PAGE;
  const endIdx = startIdx + TESTI_PER_PAGE;
  const showedTestimonial = testimonials.slice(startIdx, endIdx);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTestimonials();
      setTestimonials(data);
    };

    fetchData();
  }, []);

  return (
    <section id='testimonial' className='relative text-center mt-32'>
      <div
        className='bg-secondary p-12 pb-48'
        style={{
          clipPath: 'polygon(0 75%, 0 0, 100% 0, 100% 75%, 50% 100%)',
        }}
      >
        <span className='text-black text-lg md:text-2xl font-bold'>
          Testimoni
        </span>
        <h2 className='text-primary text-3xl md:text-5xl font-bold mt-4'>
          Apa Kata Mereka
        </h2>
        <span className='block h-1 w-full max-w-64 md:max-w-192 bg-white mt-6 mx-auto' />
      </div>

      <div className='relative grid grid-cols-1 md:grid-cols-7 justify-center items-center gap-12 md:gap-4 -mt-36 px-8 md:px-24 z-10'>
        <div className='relative md:order-2 md:col-span-5'>
          <svg
            width='92'
            height='92'
            viewBox='0 0 92 92'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='absolute -bottom-16 left-0 md:-left-16 -z-1'
          >
            <circle cx='46' cy='46' r='35' stroke='#27700D' strokeWidth='22' />
          </svg>

          <TestimonialCard
            name={showedTestimonial[0]?.name || 'Name'}
            role={showedTestimonial[0]?.role || 'Role'}
            imageUrl={
              showedTestimonial[0]?.imageUrl || '/assets/testimonials/alex.webp'
            }
            testimonial={showedTestimonial[0]?.testimonial || 'Testimonial'}
          />

          <svg
            width='92'
            height='92'
            viewBox='0 0 92 92'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='absolute -top-16 right-0 md:-right-16 -z-1'
          >
            <circle cx='46' cy='46' r='35' stroke='#27700D' strokeWidth='22' />
          </svg>
        </div>
        <div className='hidden md:order-1 md:col-span-1 md:flex justify-end'>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className='flex justify-center items-center p-2 bg-primary text-white rounded-full h-12 w-12 cursor-pointer hover:bg-primary/80 transition-colors duration-300'
          >
            <ChevronLeft className='h-8 w-8' />
          </button>
        </div>
        <div className='hidden md:order-3 md:col-span-1 md:flex justify-start'>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className='flex justify-center items-center p-2 bg-primary text-white rounded-full h-12 w-12 cursor-pointer hover:bg-primary/80 transition-colors duration-300'
          >
            <ChevronRight className='h-8 w-8' />
          </button>
        </div>

        {/* mobile */}
        <div className='flex md:hidden justify-center items-center gap-8'>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className='flex justify-center items-center p-2 bg-primary text-white rounded-full h-12 w-12 cursor-pointer hover:bg-primary/80 transition-colors duration-300'
          >
            <ChevronLeft className='h-8 w-8' />
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className='flex justify-center items-center p-2 bg-primary text-white rounded-full h-12 w-12 cursor-pointer hover:bg-primary/80 transition-colors duration-300'
          >
            <ChevronRight className='h-8 w-8' />
          </button>
        </div>
      </div>
      <div className='flex justify-center items-center gap-4 mt-8'>
        {Array.from({ length: totalPages }, (_, index) => (
          <span
            key={`page-${index}`}
            className={`inline-block h-3 rounded-full bg-[#C9C7C7] transition-normal duration-300 ${
              currentPage === index + 1 ? 'w-12' : 'w-3'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
