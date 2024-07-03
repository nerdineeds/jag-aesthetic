import React from 'react';
import Image from 'next/image';
import { getStrapiMedia } from '@/utils/utils';
import { url } from 'inspector';

export type LogosImage = {
  id: string;
  url: string;
  alternativeText?: string;
};

type LogosProps = {
  logos: LogosImage[];
};

function LogoSlider({ logos }: LogosProps) {
  const logosData = logos ? logos.data : null;
  return (
    <div className="block-container">
      <div className="sm:hidden md:flex flex-row max-w-[1200px] items-center justify-center gap-x-12 mx-auto overflow-hidden">
        {logosData &&
          logosData.slice(0, 6).map((logo) => {
            const { id, url, alternativeText } = logo;
            return (
              <Image
                key={id}
                alt={alternativeText || 'Company logo'} // Providing a default alt text
                src={
                  getStrapiMedia(url) ||
                  'https://via.placeholder.com/150'
                }
                width={125}
                height={50}
                className="opacity-80 max-w-[115px] relative min-h-28 blur-none aspect-video object-contain grayscale"
                unoptimized={false}
              />
            );
          })}
      </div>
    </div>
  );
}

export default LogoSlider;
