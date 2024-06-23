import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';

type ComparisonTestimonialProps = {
  options?: EmblaOptionsType;
  testimonials: Testimonial[];
};

export type Testimonial = {
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
      className="overflow-hidden flex bg-slate-100 rounded-2xl max-w-5xl mx-auto py-12 shadow-md"
      ref={viewportRef}
    >
      {testimonials &&
        testimonials.map((testimonial, index) => (
          <div className="embla__slide min-w-full w-full" key={index}>
            <div className="mx-auto px-12 py-16 bg-white rounded-2xl w-11/12 shadow-md">
              <div className="flex items-center space-x-4">
                {testimonial.image && (
                  <Image
                    alt={testimonial.name}
                    loading="lazy"
                    width="400"
                    height="400"
                    decoding="async"
                    className="w-12 h-12 rounded-full"
                    src={
                      testimonial.image ||
                      'https://placehold.co/600x400'
                    }
                  />
                )}
                <div>
                  <div className="text-base font-medium">
                    {testimonial.name}
                  </div>
                  <div className="text-muted-foreground text-sm italic">
                    {testimonial.title}
                  </div>
                </div>
              </div>
              <blockquote className="mt-4 text-muted-foreground text-base leading-8">
                {testimonial.testimonial}
              </blockquote>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ComparisonTestimonial;
