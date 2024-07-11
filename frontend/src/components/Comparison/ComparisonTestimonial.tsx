import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import test from 'node:test';
import { getStrapiMedia } from '@/utils/utils';

type ComparisonTestimonialProps = {
  options?: EmblaOptionsType;
  testimonials: Testimonial[];
};

export type Testimonial = {
  id: number;
  name: string;
  title: string;
  testimonial: string;
  image?: string;
};

const ComparisonTestimonial: React.FC<ComparisonTestimonialProps> = ({
  options,
  testimonials,
}) => {
  const [viewportRef, embla] = useEmblaCarousel(options, [
    Autoplay(),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    embla.on('select', onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div
      className="overflow-hidden flex bg-lightgrey/50 rounded-2xl max-w-5xl mx-auto pt-4 md:py-8 lg:py-12 shadow-md"
      ref={viewportRef}
    >
      {testimonials &&
        testimonials.map((testimonial, index) => (
          <div
            className="embla__slide min-w-full w-full"
            key={testimonial.id}
          >
            <div className="mx-auto p-6 lg:p-12 bg-white rounded-2xl w-11/12 shadow-md">
              <div className="flex items-center space-x-4">
                {testimonial.authorAvatar && (
                  <Image
                    alt={testimonial.author}
                    loading="lazy"
                    width="400"
                    height="400"
                    decoding="async"
                    className="w-12 h-12 rounded-full"
                    src={
                      getStrapiMedia(testimonial.authorAvatar.url) ||
                      'https://placehold.co/600x400'
                    }
                  />
                )}
                <div>
                  <div className="text-base font-medium">
                    {testimonial.author}
                  </div>
                  <div className="text-muted-foreground text-sm italic">
                    {testimonial.company}
                  </div>
                </div>
              </div>
              <blockquote className="mt-4 text-muted-foreground text-base leading-8">
                {testimonial.testimonial[0].children[0].text}
              </blockquote>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ComparisonTestimonial;
