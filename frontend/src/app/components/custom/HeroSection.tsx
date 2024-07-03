'use client';
import { useState, useEffect } from 'react';
import LogoSlider, { LogosImage } from '../LogoSlider/LogoSlider';
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';

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
      text: ParagraphText[];
    };
  };
  isFirst: boolean;
}

interface HeroData {
  logos: LogosImage[];
  content: ParagraphText[];
  ctas: CTA[];
  industries: string[];
  title: string;
  bkgImage: string;
}

export function HeroSection({
  title,
  logos,
  ctas,
  industries,
  content,
  bkgImage,
}: HeroData) {
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(
        (prevIndex) => (prevIndex + 1) % industries.length
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const hasBkg = bkgImage ? 'url(${bkgImage})' : '';

  return (
    <div
      className={`${
        bkgImage
          ? 'relative w-full h-screen bg-cover bg-center flex flex-col justify-center items-center '
          : 'block-container'
      }`}
      style={{
        backgroundImage: hasBkg,
      }}
    >
      <div className="max-w-xl mx-auto py-12">
        <h1 className="text-4xl font-medium tracking-tight pb-4 text-charcoal">
          We help
          <span className="text-periwinkle-dark opacity-70 mx-1 scroll-text">
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
      <LogoSlider logos={logos} />
    </div>
  );
}

const Paragraph: React.FC<ParagraphProps> = ({ text, isFirst }) => (
  <>
    {text.children.map((t: ParagraphText) => (
      <p
        key={t.text}
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
          <button className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-100 bg-periwinkle text-charcoal hover:bg-darkPeriwinkle h-10 px-4 py-2 shadow-md rounded-full text-base hover:text-white">
            {cta.text} {cta.isExternal ? <GoArrowUpRight /> : null}
          </button>
        </Link>
      ))}
  </div>
);
