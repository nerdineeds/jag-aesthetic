import React from 'react';
import Image from 'next/image';

export type LogosImage = {
  url: string;
  alt?: string;
};

type LogosProps = {
  logos: LogosImage[];
};

function LogoSlider({ logos }: LogosProps) {
  return (
    <div className="block-container">
      <div className="sm:hidden md:flex flex-row max-w-[1200px] items-center justify-center gap-x-12 mx-auto">
        {logos.map((logo) => (
          <Image
            key={logo.url} // Using a unique identifier instead of index
            alt={logo.alt || 'Company logo'} // Providing a default alt text
            src={logo.url}
            width={125}
            height={50}
            className="opacity-80 max-w-[115px] relative min-h-28 blur-none aspect-video object-contain grayscale"
            unoptimized={false}
          />
        ))}
      </div>
    </div>
  );
}

export default LogoSlider;
