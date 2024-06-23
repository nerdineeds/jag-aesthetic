import React from 'react';
import Image from 'next/image';

const Testimonial = () => {
  return (
    <div className="max-w-lg">
      <div className="max-w-lg mx-auto p-6 bg-muted rounded-2xl mt-4">
        <div className="flex items-center space-x-4">
          <Image
            alt="John Grange"
            loading="lazy"
            width="400"
            height="400"
            decoding="async"
            data-nimg="1"
            className="w-12 h-12 rounded-full"
            style={{ color: 'transparent' }}
            src="/_next/image?url=%2Fjohn.jpeg&amp;w=828&amp;q=75"
          />
          <div>
            <div className="text-base font-medium">John Grange</div>
            <div className="text-muted-foreground text-sm">
              Software Engineer at Apple
            </div>
          </div>
        </div>
        <blockquote className="mt-4 text-muted-foreground">
          “I have had the pleasure of working with Kyler for the last
          year and a half and he is one of the most talented designers
          I have ever worked with.”
        </blockquote>
      </div>
    </div>
  );
};

export default Testimonial;
