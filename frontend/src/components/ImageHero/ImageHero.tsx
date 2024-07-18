import React from 'react';
import Image from 'next/image';
import { StrapiImage } from '../StrapiImage/StrapiImage';
import { getStrapiMedia } from '@/utils/utils';

interface ImageHeroProps {
  image: {
    url: string;
    alternativeText: string;
  };
}

export function ImageHero({
  data,
}: {
  readonly data: ImageHeroProps;
}) {
  const { url, alternativeText } = data.image;

  const imageUrl = url ? getStrapiMedia(url) : null;

  return (
    <div className="relative">
      <div
        className="sm:hidden md:flex mx-auto lg:mb-12 flex-row
       sm:w-fit xl:w-[1280px] bg-muted rounded-2xl h-[300px] lg:h-[600px] overflow-hidden justify-start items-baseline"
      >
        <StrapiImage
          alt={alternativeText || 'Hero image'}
          className="mx-auto text-center w-full"
          src={imageUrl || 'https://via.placeholder.com/1920x1080'}
          height={1080}
          width={1920}
        />
      </div>
    </div>
  );
}

export default ImageHero;
