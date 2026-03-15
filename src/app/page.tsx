import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SectionDivider from '@/components/SectionDivider';
import Pillars from '@/components/Pillars';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

export default function Home() {
  return (
    <>
      <Navbar />
      <FloatingButtons />
      <main>
        <Hero />
        <SectionDivider />
        <Pillars />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <Portfolio />
        <SectionDivider />
      </main>
      <Footer />
    </>
  );
}
