import CarouselSection from './components/CarouselSection';
import SpecialsSection from './components/SpecialsSection';

export default function Home() {
  return (
    <section className='home'>
        <CarouselSection></CarouselSection>
        <SpecialsSection></SpecialsSection>
    </section>
  );
}