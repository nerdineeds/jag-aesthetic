import { icon } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link';
import React from 'react';
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa';

const links = {
  socials: [
    {
      url: 'https://www.facebook.com',
      text: 'fb',
      icon: (
        <FaFacebookF className="hover:text-black/20 transition-colors ease-in-out duration-100" />
      ),
    },
    {
      url: 'https://www.instagram.com',
      text: 'ig',
      icon: (
        <FaInstagram className="hover:text-black/20 transition-colors ease-in-out duration-100" />
      ),
    },
    {
      url: 'https://www.linkedin.com',
      text: 'in',
      icon: (
        <FaLinkedin className="hover:text-black/20 transition-colors ease-in-out duration-100" />
      ),
    },
    {
      url: 'https://www.youtube.com',
      text: 'yt',
      icon: (
        <FaYoutube className="hover:text-black/20 transition-colors ease-in-out duration-100" />
      ),
    },
    {
      url: 'https://www.tiktok.com',
      text: 'tt',
      icon: (
        <FaTiktok className="hover:text-black/20 transition-colors ease-in-out duration-100" />
      ),
    },
    {
      url: 'https://www.github.com',
      text: 'git',
      icon: (
        <FaGithub className="hover:text-black/20 transition-colors ease-in-out duration-100" />
      ),
    },
  ],
  contact: { url: 'mailto:hello@jagaesthetic.com', text: '' },
};

function Footer() {
  return (
    <footer className="w-full flex flex-row items-center justify-between py-2 px-3">
      <p className="text-sm">
        &copy; 2024 Your Company Name. All rights reserved.
      </p>
      <p className="text-center">hello@jagaesthetic.com</p>
      <div className="flex gap-x-6 items-center">
        {links.socials.map((social, index) => (
          <Link href={social.url} key={social.text}>
            {social.icon}
          </Link>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
