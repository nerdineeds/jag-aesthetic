import React from 'react';
import Image from 'next/image';
import { getStrapiMedia } from '@/utils/utils';

export type LogosImage = {
  id: string;
  url: string;
  alternativeText?: string;
};

type LogosProps = {
  logos: LogosImage[];
};

function LogoSlider({ logos }: LogosProps) {
  return (
    <div className="hidden md:flex flex-row max-w-2xl lg:max-w-5xl items-center justify-center gap-x-12 mx-auto overflow-hidden">
      {logos.slice(0, 6).map((logo) => {
        const { id, url, alternativeText } = logo;
        return (
          <Image
            key={id}
            alt={alternativeText || 'Company logo'} // Providing a default alt text
            src={
              getStrapiMedia(url) || 'https://via.placeholder.com/150'
            }
            width={125}
            height={50}
            className="opacity-80 max-w-[115px] relative min-h-28 blur-none aspect-video object-contain grayscale"
            unoptimized={false}
          />
        );
      })}
    </div>
  );
}

export default LogoSlider;
