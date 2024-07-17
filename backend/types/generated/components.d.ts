import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsHomeHero extends Schema.Component {
  collectionName: 'components_components_home_heroes';
  info: {
    displayName: 'home hero';
    description: '';
  };
  attributes: {
    content: Attribute.Blocks;
    logos: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    title: Attribute.String;
    link: Attribute.Component<'components.link', true>;
    backgroundImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ComponentsImageHero extends Schema.Component {
  collectionName: 'components_components_image_heroes';
  info: {
    displayName: 'Image Hero';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    text: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    style: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface ComponentsMiniContactForm extends Schema.Component {
  collectionName: 'components_components_mini_contact_forms';
  info: {
    displayName: 'MiniContactForm';
  };
  attributes: {
    slogan: Attribute.String;
    cta_link_text: Attribute.String;
    heading: Attribute.String;
  };
}

export interface ComponentsServicesAndPackages extends Schema.Component {
  collectionName: 'components_components_services_and_packages';
  info: {
    displayName: 'Services and Packages';
  };
  attributes: {
    packages: Attribute.Relation<
      'components.services-and-packages',
      'oneToMany',
      'api::package.package'
    >;
    services: Attribute.Relation<
      'components.services-and-packages',
      'oneToMany',
      'api::service.service'
    >;
    intro: Attribute.Text;
  };
}

export interface ComponentsSocialMediaBar extends Schema.Component {
  collectionName: 'components_components_social_media_bars';
  info: {
    displayName: 'Social Media Bar';
  };
  attributes: {
    href: Attribute.String;
    Socials: Attribute.Enumeration<
      ['facebook', 'instagram', 'linkedin', 'youtube', 'tiktok', 'github']
    >;
  };
}

export interface ComponentsTestimonialSlider extends Schema.Component {
  collectionName: 'components_components_testimonial_sliders';
  info: {
    displayName: 'Testimonial Slider';
  };
  attributes: {
    loop: Attribute.Boolean;
    testimonials: Attribute.Relation<
      'components.testimonial-slider',
      'oneToMany',
      'api::testimonial.testimonial'
    >;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    Copyright: Attribute.String;
    email: Attribute.Email;
    socials: Attribute.Component<'components.social-media-bar', true>;
  };
}

export interface LayoutHeader extends Schema.Component {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    logoLink: Attribute.Component<'components.link'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.home-hero': ComponentsHomeHero;
      'components.image-hero': ComponentsImageHero;
      'components.link': ComponentsLink;
      'components.mini-contact-form': ComponentsMiniContactForm;
      'components.services-and-packages': ComponentsServicesAndPackages;
      'components.social-media-bar': ComponentsSocialMediaBar;
      'components.testimonial-slider': ComponentsTestimonialSlider;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
    }
  }
}
