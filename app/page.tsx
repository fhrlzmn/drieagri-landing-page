import Hero from '@/components/sections/hero';
import Programs from '@/components/sections/programs';

export default function Home() {
  return (
    <main className='container mx-auto'>
      <Hero />
      <Programs />

      <div className='min-h-screen'></div>
    </main>
  );
}
