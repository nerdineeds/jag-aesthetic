'use client';
import React, { useState } from 'react';

type ContactProps = {
  slogan?: string;
  cta?: string;
};

const Contact: React.FC<ContactProps> = ({ slogan, cta }) => {
  const [email, setEmail] = useState<string>('');

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission
    console.log('Email submitted:', email);
  };

  return (
    <div className="max-w-2xl mx-auto my-12 md:text-left text-center lg:my-24">
      <h2 className="text-2xl font-medium tracking-tight md:pb-4">
        Ready to take the
        <span className="text-muted-foreground opacity-70">
          {' '}
          leap?
        </span>
      </h2>
      <p className="text-muted-foreground pb-6">{slogan}</p>
      <form
        onSubmit={handleSubmit}
        className="flex md:flex-row flex-col gap-y-4 space-x-2 bg-lightgrey/50 py-6 rounded-md md:rounded-full mb-8 px-1.5 md:py-1.5"
      >
        <input
          type="email"
          className="flex w-full border border-input bg-white px-4 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2 file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 placeholder:opacity-80 rounded-full text-base shadow-md border-none h-[48px] md:pl-4"
          placeholder="Enter your email"
          value={email}
          onChange={handleChange}
          required
        />
        <button
          className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-100 bg-black text-white hover:bg-black/90 px-4 py-2 rounded-full text-base font-medium shadow-md h-[48px] min-w-[200px]"
          type="submit"
        >
          <span className="opacity-1 transform-one">{cta}</span>
        </button>
      </form>
    </div>
  );
};

export default Contact;
