import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

function HomeHero() {
  return (
    <>
      <div className="mx-auto max-w-xl">
        {/* HERO CONTENT */}
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
          We help{' '}
          <span className="text-gray-300">early stage foundefrs</span>{' '}
          accelerrate their design efforts.
        </h2>
        <p className="mt-6 text-base leading-8 text-gray-600">
          Take your next leap with us, we’re a design studio with over
          10 years of experience crafting delightful user experiences
          for start-ups, founders and established brands and
          businesses.
        </p>
        <p className="mt-6 text-base leading-8 text-gray-600">
          Elevate your product market fit and connect with your ideal
          customer base. We’re here to assist you with wireframes to
          full-fidelity designs, every step along the way.
        </p>

        {/* CTA BUTTON GROUP */}
        <div className="buttonGroup flex items-center gap-x-6 my-5">
          <Link
            className="bg-black rounded-full hover:bg-black/75 transition-colors ease-in-out duration-150 py-1.5 px-10 shadow-lg text-white text-center flex items-center justify-center"
            href="/contact"
          >
            Book an intro call
          </Link>
          <Link
            className=" rounded-full py-2 px-3 text-black text-center flex items-center justify-center"
            href="/contact"
          >
            Email
          </Link>
        </div>
      </div>
      <div className="logo-group hidden md:flex flex-row items-center gap-x-10 max-w-[800px] mx-auto my-12 justify-between">
        <div className="w-[160px[] opacity-60 min-h-[100px] relative flex items-center justify-center">
          <Image
            alt={'logo name'}
            src="https://placehold.jp/3d4070/ffffff/160x80.png"
            width={160}
            height={160}
            className="blur-none"
          />
        </div>
        <div className="w-[160px[] opacity-60 min-h-[100px] relative flex items-center justify-center">
          <Image
            alt={'logo name'}
            src="https://placehold.jp/3d4070/ffffff/160x80.png"
            width={160}
            height={160}
            className="blur-none"
          />
        </div>
        <div className="w-[160px[] opacity-60 min-h-[100px] relative flex items-center justify-center">
          <Image
            alt={'logo name'}
            src="https://placehold.jp/3d4070/ffffff/160x80.png"
            width={160}
            height={160}
            className="blur-none"
          />
        </div>
        <div className="w-[160px[] opacity-60 min-h-[100px] relative flex items-center justify-center">
          <Image
            alt={'logo name'}
            src="https://placehold.jp/3d4070/ffffff/160x80.png"
            width={160}
            height={160}
            className="blur-none"
          />
        </div>
      </div>
    </>
  );
}

export default HomeHero;
