import Blog from '@/components/sections/blog';
import FAQ from '@/components/sections/faq';
import Hero from '@/components/sections/hero';
import JoinUs from '@/components/sections/join-us';
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
      <FAQ />
      <JoinUs />
    </main>
  );
}
