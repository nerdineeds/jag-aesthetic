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
import Contact from '../Contact/Contact';

interface SocialLink {
  id: number;
  href: string;
  Socials:
    | 'facebook'
    | 'instagram'
    | 'linkedin'
    | 'youtube'
    | 'tiktok'
    | 'github';
}

// Define the type for the props accepted by the Footer component
interface FooterProps {
  copyright: string;
  email: string;
  socials: SocialLink[];
  contactSlogan: string;
  contactCTA: string;
}

const getSocialIcon = (socialName: SocialLink['Socials']) => {
  switch (socialName) {
    case 'facebook':
      return (
        <FaFacebookF className="hover:text-black/20 transition-colors ease-in-out duration-100" />
      );
    case 'instagram':
      return (
        <FaInstagram className="hover:text-black/20 transition-colors ease-in-out duration-100" />
      );
    case 'linkedin':
      return (
        <FaLinkedin className="hover:text-black/20 transition-colors ease-in-out duration-100" />
      );
    case 'youtube':
      return (
        <FaYoutube className="hover:text-black/20 transition-colors ease-in-out duration-100" />
      );
    case 'tiktok':
      return (
        <FaTiktok className="hover:text-black/20 transition-colors ease-in-out duration-100" />
      );
    case 'github':
      return (
        <FaGithub className="hover:text-black/20 transition-colors ease-in-out duration-100" />
      );
    default:
      return null;
  }
};

const Footer: React.FC<FooterProps> = ({
  copyright,
  email,
  socials,
  contactSlogan,
  contactCTA,
}) => {
  return (
    <div className="px-6">
      <Contact slogan={contactSlogan} cta={contactCTA} />
      <footer className="w-full flex flex-col gap-y-5 md:flex-row items-center justify-between p-3">
        <p className="text-sm">{copyright}</p>
        <a className="text-center" href={`mailto:${email}`}>
          {email}
        </a>
        <div className="flex gap-x-6 items-center">
          {socials.map((social) => (
            <Link href={social.href} key={social.id}>
              {getSocialIcon(social.Socials)}
            </Link>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
