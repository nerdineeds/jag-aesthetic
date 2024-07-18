import { flattenAttributes } from '@/utils/utils';
import { getStrapiData } from '../data/strapi/getStrapiData';
import { HeroSection } from '../components/custom/HeroSection';
import ImageHero from '../components/ImageHero/ImageHero';
import Comparison from '../components/Comparison/Comparison';
import Packages from '../components/Packages/Packages';

function blockRenderer(block: any) {
  switch (block.__component) {
    case 'components.home-hero':
      return <HeroSection key={block.id} data={block} />;
    case 'components.image-hero':
      return <ImageHero key={block.id} data={block} />;
    case 'components.services-and-packages':
      return <Packages key={block.id} data={block} />;
    case 'components.testimonial-slider':
      return <Comparison key={block.id} data={block} />;
    default:
      return null;
  }
}

export default async function Home() {
  const strapiData = await getStrapiData('home-page');

  const data = flattenAttributes(strapiData);

  const { blocks } = data;

  return (
    <div className="relative flex flex-col lg:gap-y-12 items-center">
      {blocks ? blocks.map(blockRenderer) : <p>No section found</p>}
      testing
    </div>
  );
}
