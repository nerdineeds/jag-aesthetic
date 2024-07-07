import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsFaqAccordion extends Schema.Component {
  collectionName: 'components_components_faq_accordions';
  info: {
    displayName: 'FAQ Accordion';
    description: '';
  };
  attributes: {
    facts_and_questions: Attribute.Relation<
      'components.faq-accordion',
      'oneToMany',
      'api::fact-and-question.fact-and-question'
    >;
  };
}

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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.faq-accordion': ComponentsFaqAccordion;
      'components.home-hero': ComponentsHomeHero;
      'components.image-hero': ComponentsImageHero;
      'components.link': ComponentsLink;
      'components.services-and-packages': ComponentsServicesAndPackages;
      'components.social-media-bar': ComponentsSocialMediaBar;
      'components.testimonial-slider': ComponentsTestimonialSlider;
    }
  }
}
