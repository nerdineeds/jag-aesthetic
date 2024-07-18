'use client';
import { useState, useEffect } from 'react';
import LogoSlider, { LogosImage } from '../LogoSlider/LogoSlider';
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';
import classNames from 'classnames';

interface CTA {
  text: string;
  url: string;
  isExternal?: boolean;
  style?: 'primary' | 'secondary';
}

interface ParagraphText {
  text: string;
}

interface ParagraphProps {
  text: {
    children: {
      text: string;
    }[];
  };
  isFirst: boolean;
}

interface HeroDataProps {
  logos: LogosImage[];
  content: {
    children: {
      text: string;
    }[];
  }[];
  ctas: CTA[];
  industries: string[];
  bkgImage: string;
}

const industries = [
  'businesses',
  'startups',
  'eCommerce brands',
  'healthcare providers',
  'educational institutions',
  'financial services',
  'real estate agencies',
  'non-profits',
  'technology companies',
  'manufacturing firms',
  'entertainment industries',
  'retailers',
  'hospitality sectors',
  'automotive companies',
  'consulting firms',
  'fashion brands',
  'media outlets',
  'government agencies',
  'travel companies',
  'sports organizations',
  'legal practices',
  'food and beverage companies',
  'construction companies',
  'logistics providers',
  'telecommunication companies',
];

export function HeroSection({
  data,
}: {
  readonly data: HeroDataProps;
}) {
  const logos = data.logos;
  const content = data.content;
  const ctas = data.ctas;
  const bkgImage = data.bkgImage;
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(
        (prevIndex) => (prevIndex + 1) % industries.length
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const hasBkg = bkgImage ? `url(${bkgImage})` : '';

  return (
    <div
      className={`${
        bkgImage
          ? 'relative w-full md:h-[95vh] bg-cover bg-center justify-center items-center flex flex-col'
          : 'lg:h-[65vh] flex flex-col items-center lg:my-20'
      }`}
      style={{
        backgroundImage: hasBkg,
      }}
    >
      <div className="lg:py-12 py-24">
        <div className="max-w-xl mx-auto">
          <h1 className="text-4xl font-medium tracking-tight pb-4 text-charcoal">
            We help
            <span className="text-periwinkle-500 opacity-70 mx-1 scroll-text">
              {industries[currentTextIndex]}
            </span>
            <br />
            accelerate their digital design efforts.
          </h1>
          {content.map((paragraph, index) => (
            <Paragraph
              key={index}
              text={paragraph}
              isFirst={index === 0}
            />
          ))}
          <CTAButtons ctas={ctas} />
        </div>
        <LogoSlider logos={logos.data} />
      </div>
    </div>
  );
}

const Paragraph: React.FC<ParagraphProps> = ({ text, isFirst }) => (
  <>
    {text.children.map((t, index) => (
      <p
        key={index}
        className={`text-slateGrey ${isFirst ? 'pb-6' : 'mb-10'}`}
      >
        {t.text}
      </p>
    ))}
  </>
);

const CTAButtons: React.FC<{ ctas: CTA[] }> = ({ ctas }) => (
  <div className="flex flex-row items-center gap-x-4">
    {ctas &&
      ctas.map((cta) => (
        <Link key={cta.text} href={cta.url}>
          <button
            className={classNames(
              'inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-100 h-10 px-4 py-2 shadow-md rounded-full text-base hover:text-white',
              {
                ' text-white bg-periwinkle-500 hover:bg-periwinkle-800 ':
                  cta.style === 'primary',
                'border border-black  text-periwinkle-900 bg-transparent':
                  cta.style === 'secondary',
              }
            )}
          >
            {cta.text} {cta.isExternal ? <GoArrowUpRight /> : null}
          </button>
        </Link>
      ))}
  </div>
);

export default HeroSection;
