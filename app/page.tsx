import Blog from '@/components/sections/blog';
import Hero from '@/components/sections/hero';
import Partner from '@/components/sections/partner';
import Programs from '@/components/sections/programs';
import Testimonials from '@/components/sections/testimonials';

export default function Home() {
  return (
    <main className='container mx-auto'>
      <Hero />
      <Programs />
      <Partner />
      <Blog />
      <Testimonials />

      <div className='min-h-screen'></div>
    </main>
  );
}
