import { flattenAttributes } from '@/utils/utils';
import { getStrapiData } from '../../data/strapi/getStrapiData';
import { HeroSection } from './components/custom/HeroSection';
import ImageHero from './components/ImageHero/ImageHero';
import Comparison from './components/Comparison/Comparison';
import Contact from './components/Contact/Contact';
import FactsAndQuestions from './components/FactsAndQuestions/FactsAndQuestions';
import Packages from './components/Packages/Packages';

const industries = [
  'businesses',
  'startups',
  'eCommerce brands',
  'healthcare providers',
  'educational institutions',
  'financial services',
  'real estate agencies',
  'non-profits',
  'technology companies',
  'manufacturing firms',
  'entertainment industries',
  'retailers',
  'hospitality sectors',
  'automotive companies',
  'consulting firms',
  'fashion brands',
  'media outlets',
  'government agencies',
  'travel companies',
  'sports organizations',
  'legal practices',
  'food and beverage companies',
  'construction companies',
  'logistics providers',
  'telecommunication companies',
];

export default async function Home() {
  const strapiData = await getStrapiData('home-page');

  const data = flattenAttributes(strapiData);
  const { blocks } = data;

  return (
    <div className="flex flex-col gap-y-12 items-center">
      <HeroSection
        title={blocks[0].title}
        logos={blocks[0].logos}
        content={blocks[0].content}
        ctas={blocks[0].link}
        industries={industries}
        bkgImage={blocks[0].backgroundImage}
      />
      <ImageHero url={blocks[0].backgroundImage} data={blocks[1]} />
      <Packages data={blocks[2]} />
      <Comparison testimonials={blocks[3].testimonials.data} />
      <FactsAndQuestions
        questions={blocks[4].facts_and_questions.data}
      />
      {/* <Contact slogan={data.contact.slogan} cta={data.contact.cta} /> */}
    </div>
  );
}
