'use client';
import { useState, useEffect } from 'react';
import { flattenAttributes } from '@/utils/utils';
import { getStrapiData } from '../../data/strapi/getStrapiData';
import { HeroSection } from '../components/custom/HeroSection';
import ImageHero from '../components/ImageHero/ImageHero';
import Packages from '../components/Packages/Packages';

function blockRenderer(block: any) {
  switch (block.__component) {
    case 'components.home-hero':
      return <HeroSection key={block.id} data={block} />;
    case 'components.image-hero':
      return <ImageHero key={block.id} data={block} />;
    case 'components.services-and-packages':
      return <Packages key={block.id} data={block} />;
    default:
      return null;
  }
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [blocks, setBlocks] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const strapiData = await getStrapiData('home-page');
        const data = flattenAttributes(strapiData);
        setBlocks(data.blocks || []);
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!blocks.length) return <p>No sections found</p>;

  return (
    <div className="relative flex flex-col lg:gap-y-12 items-center">
      {blocks.map(blockRenderer)}
    </div>
  );
}
