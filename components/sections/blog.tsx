'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import BlogCard from '../blog/blog-card';
import fetchBlogPosts, { BlogPost } from '@/data/fetch-blog-posts';

const POSTS_PER_PAGE = 3;

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const startIdx = (currentPage - 1) * POSTS_PER_PAGE;
  const endIdx = startIdx + POSTS_PER_PAGE;
  const showedPosts = blogPosts.slice(startIdx, endIdx);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBlogPosts();
      setBlogPosts(data);
    };

    fetchData();
  }, []);

  return (
    <section id='blog' className='relative text-center mt-32'>
      <div
        className='absolute -top-60 left-0 -z-1 w-full h-64 bg-primary'
        style={{ clipPath: 'polygon(0 0, 100% 30%, 100% 100%, 0% 100%)' }}
      />

      <div className='bg-primary p-12'>
        <span className='text-secondary text-lg md:text-2xl font-bold'>
          Artikel
        </span>
        <h2 className='text-white text-3xl md:text-5xl font-bold mt-4'>
          Blog Dunia Agrikultur
        </h2>
        <span className='block h-1 w-full max-w-64 md:max-w-192 bg-[#72B453] mt-6 mx-auto' />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 mt-16 px-8 md:px-24'>
        {showedPosts.map((post, index) => (
          <BlogCard
            key={`blogpost-${index}`}
            title={post.title}
            description={post.description}
            imageUrl={post.imageUrl}
            linkUrl={post.linkUrl}
          />
        ))}
      </div>

      <div className='flex justify-center items-center gap-4 mt-8'>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className='flex justify-center items-center p-2 bg-[#C9C7C7] text-white rounded-full h-12 w-12 cursor-pointer hover:bg-primary transition-colors duration-300'
        >
          <ChevronLeft className='h-8 w-8' />
        </button>
        <div className='flex items-center gap-4'>
          {Array.from({ length: totalPages }, (_, index) => (
            <span
              key={`page-${index}`}
              className={`inline-block h-3 w-3 rounded-full ${
                currentPage === index + 1 ? 'bg-primary' : 'bg-[#C9C7C7]'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className='flex justify-center items-center p-2 bg-[#C9C7C7] text-white rounded-full h-12 w-12 cursor-pointer hover:bg-primary transition-colors duration-300'
        >
          <ChevronRight className='h-8 w-8' />
        </button>
      </div>
    </section>
  );
}
