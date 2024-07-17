import React from 'react';

import Image from 'next/image';

type ImageCTAProps = {
  url: string;
  alt: string;
};

const ImageCTA = ({ url, alt }: ImageCTAProps) => {
  return (
    <div className="block-container">
      <div className="sm:hidden md:flex mx-auto flex-row bg-lightgrey/50 items-center justify-center sm:w-fit xl:w-[1280px] bg-muted rounded-2xl h-[300px] lg:h-[600px] overflow-hidden">
        <Image
          alt={alt}
          loading="lazy"
          width={1000}
          height={4000}
          decoding="async"
          className="md:pt-80 mx-auto text-center w-full"
          style={{ color: 'transparent' }}
          src={url}
          sizes="(max-width: 1080px) 100vw, (max-width: 2048px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

export default ImageCTA;
