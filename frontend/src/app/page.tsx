import HomeHero from './components/HomeHero/HomeHero';
import Packages from './components/Packages/Packages';
import Comparison from './components/Comparison/Comparison';
import FactsAndQuestions from './components/FactsAndQuestions/FactsAndQuestions';
import Contact from './components/Contact/Contact';
import ImageCTA from './components/ImageCTA/ImageCTA';
import data from './data.json';

export default function Home() {
  return (
    <div className="flex flex-col gap-y-12 items-center">
      <HomeHero
        ctas={data.heroData.ctas}
        content={data.heroData.content}
        logos={data.clients}
        industries={data.scrollTexts}
      />
      <ImageCTA url="/mobile.png" alt="Mobile mockup of work" />
      <Packages />
      <Comparison
        comparison={data.comparison}
        testimonials={data.testimonials}
      />
      <FactsAndQuestions questions={data.questions} />
      <Contact slogan={data.contact.slogan} cta={data.contact.cta} />
    </div>
  );
}
