import React from 'react';
import Image from 'next/image';
import { StrapiImage } from '../StrapiImage/StrapiImage';
import { getStrapiMedia } from '@/utils/utils';

const ImageHero = (data) => {
  if (data.data.__component === 'components.image-hero') {
    const { url, alternativeText } = data.data.image;

    const imageUrl = url ? getStrapiMedia(url) : null;

    return (
      <div className="block-container relative">
        <div className="sm:hidden md:flex mx-auto flex-row bg-slate-100 items-center justify-center sm:w-fit xl:w-[1280px] bg-muted rounded-2xl h-[300px] lg:h-[600px] overflow-hidden">
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
};

export default ImageHero;
