import Blog from '@/components/sections/blog';
import Hero from '@/components/sections/hero';
import Partner from '@/components/sections/partner';
import Programs from '@/components/sections/programs';

export default function Home() {
  return (
    <main className='container mx-auto'>
      <Hero />
      <Programs />
      <Partner />
      <Blog />

      <div className='min-h-screen'></div>
    </main>
  );
}
