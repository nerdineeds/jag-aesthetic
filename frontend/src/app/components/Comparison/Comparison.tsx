'use client';
import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';

import ComparisonTestimonial, {
  Testimonial,
} from './ComparisonTestimonial';

const OPTIONS: EmblaOptionsType = { loop: true };

type Comparisons = {
  us: string;
  them: string;
};

type ComparisonProps = {
  comparison: Comparisons[];
  testimonials: Testimonial[];
};

const Comparison: React.FC<ComparisonProps> = ({
  comparison,
  testimonials,
}) => {
  return (
    <div className="w-full">
      <ComparisonTestimonial
        testimonials={testimonials}
        options={OPTIONS}
      />
    </div>
  );
};

export default Comparison;
