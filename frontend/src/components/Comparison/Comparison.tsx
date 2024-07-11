'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import { getStrapiMedia } from '@/utils/utils';

type ComparisonTestimonialProps = {
  options?: EmblaOptionsType;
  testimonials: Testimonial[];
};

export type Testimonial = {
  children: {
    text: string;
  }[];
};

type TestimonialOptions = {
  id: number;
  author: string;
  company: string;
  testimonial?: {
    children: {
      text: string;
    }[];
  };
  authorAvatar?: {
    url: string;
  };
};
const OPTIONS: EmblaOptionsType = { loop: true };

type ComparisonProps = {
  testimonials: Testimonial[];
};

export function Comparison({
  data,
}: {
  readonly data: ComparisonProps;
}) {
  const [viewportRef, embla] = useEmblaCarousel(OPTIONS, [
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

  const testimonials = data.testimonials.data;

  return (
    <div className="w-full">
      <div
        className="overflow-hidden flex bg-lightgrey/50 rounded-2xl max-w-5xl mx-auto pt-4 pb-4  md:py-8 lg:py-12 shadow-md"
        ref={viewportRef}
      >
        {testimonials &&
          testimonials.map((testimonial) => {
            const avatar = testimonial.authorAvatar;
            const id = testimonial.id;
            const author = testimonial.author;
            const company = testimonial.company;
            const testimonialText = testimonial.testimonial
              ? testimonial.testimonial[0].children[0].text
              : '';

            return (
              <div
                className="embla__slide min-w-full w-full"
                key={id}
              >
                <div className="mx-auto p-6 lg:p-12 bg-white rounded-2xl w-11/12 shadow-md">
                  <div className="flex items-center space-x-4">
                    {avatar && (
                      <Image
                        alt={author}
                        loading="lazy"
                        width="400"
                        height="400"
                        decoding="async"
                        className="w-12 h-12 rounded-full"
                        src={
                          getStrapiMedia(avatar.url) ||
                          'https://placehold.co/600x400'
                        }
                      />
                    )}
                    <div>
                      <div className="text-base font-medium">
                        {author}
                      </div>
                      <div className="text-muted-foreground text-sm italic">
                        {company}
                      </div>
                    </div>
                  </div>
                  <blockquote className="mt-4 text-muted-foreground text-base leading-8">
                    {testimonialText}
                  </blockquote>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Comparison;
