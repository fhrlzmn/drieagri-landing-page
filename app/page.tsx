import Blog from '@/components/blog';
import FAQ from '@/components/faq';
import Hero from '@/components/hero';
import JoinUs from '@/components/join-us';
import Partner from '@/components/partner';
import Programs from '@/components/programs';
import Testimonials from '@/components/testimonials';

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
