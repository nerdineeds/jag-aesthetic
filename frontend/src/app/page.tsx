import Link from 'next/link';
import HomeHero from './components/HomeHero/HomeHero';

export default function Home() {
  return (
    <main>
      <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <HomeHero />
      </div>
      <div>Image CTA</div>
      <div>Services & Packages</div>
      <div>Frequently Asked Questios</div>
    </main>
  );
}
