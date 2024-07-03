'use client';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
interface Package {
  name: string;
  description: string;
  services: string[];
  timeline: string;
  price: number;
}

interface PrimaryService {
  service: string;
  explainer: string;
}

const packages: Package[] = [
  {
    name: 'Basic Web Development',
    description:
      'Custom web development using Strapi and Next.js tailored for small businesses or personal projects. Includes basic setup and a responsive design.',
    services: [
      'Initial Consultation',
      'Basic Website Design',
      'Responsive Layout',
    ],
    timeline: '3 weeks',
    price: 1500,
  },
  {
    name: 'Advanced E-commerce',
    description:
      'Ideal for medium-sized businesses requiring more advanced features such as user authentication, dynamic content, and API integrations.',
    services: [
      'Initial Consultation',
      'Basic Website Design',
      'Responsive Layout',
    ],
    timeline: '9 weeks',
    price: 2200,
  },
  {
    name: 'One Pager',
    description:
      'Comprehensive e-commerce solution utilizing Next.js for user experience enhancement and Strapi for robust backend management. Includes advanced features like payment integration, inventory management, and customer segmentation.',
    services: [
      'Initial Consultation',
      'Basic Website Design',
      'Responsive Layout',
    ],
    timeline: '2 weeks',
    price: 500,
  },
];

const primaryServices: PrimaryService[] = [
  {
    service: 'Web Design and Development',
    explainer:
      'Crafting responsive and visually stunning websites using cutting-edge technologies like Strapi and Next.js, tailored to meet your unique requirements.',
  },
  {
    service: 'Consultation and Strategy',
    explainer:
      'Delivering expert advice and strategic planning to maximize the impact of your web projects and achieve your business objectives.',
  },
  {
    service: 'E-commerce Solutions',
    explainer:
      'Building robust e-commerce platforms with seamless payment integration, efficient inventory management, and advanced customer segmentation.',
  },
  {
    service: 'Website Audits and Optimization',
    explainer:
      "Performing comprehensive audits and optimizations to boost your website's performance, enhance SEO, and improve user experience.",
  },
];

const formatPrice = (price: number) => {
  if (price >= 1000) {
    return `$${(price / 1000).toFixed(1)}k`;
  }
  return `$${price}`;
};

const Packages: React.FC = (data) => {
  const [togglePackages, setTogglePackages] = React.useState(false);

  const handlePackageToggle = (index: number) => {
    setTogglePackages(!togglePackages);
  };

  if (data.data.__component === 'components.services-and-packages') {
    const { intro, packages, services } = data.data;

    return (
      <div className="block-container">
        <div className="max-w-5xl flex flex-row gap-x-8 w-full mx-auto">
          <div className="w-2/5">
            <h2 className="text-2xl font-medium tracking-tight">
              Our
              <span className="text-periwinkle-dark opacity-70 ml-2">
                packages
              </span>
            </h2>
            <div className="mx-auto bg-slate-100 p-2.5 rounded-3xl mt-8 flex flex-col gap-y-2 shadow-md">
              {packages &&
                packages.data.map((pkg) => (
                  <div key={pkg.id}>
                    <div className="bg-white shadow-md py-4 px-4 rounded-2xl">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-base font-medium text-gray-900 flex flex-row items-center gap-2">
                          {pkg.name}
                        </span>
                        <span className="text-sm font-medium text-muted-foreground border px-2 py-1 rounded-full border-border">
                          Starting at: {formatPrice(pkg.price)}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-1.5 text-sm leading-6">
                        {pkg.description}
                      </p>
                      <div className="flex mb-4"></div>
                      <div
                        className="text-sm text-slateGrey opacity-70 cursor-pointer"
                        onClick={() => handlePackageToggle(pkg.id)}
                      >
                        Learn more
                      </div>
                    </div>
                    {togglePackages && (
                      <div className=" bg-white shadow-md py-4 px-4 rounded-2xl mt-2">
                        <h3 className="text-base font-medium mb-2">
                          What you get
                        </h3>
                        <div className="text-sm flex flex-col gap-2 text-muted-foreground">
                          {pkg.learnMore.map((lm) => {
                            return (
                              <div key={lm.children[0].text}>
                                {lm.children[0].text}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-medium tracking-tight pb-4">
              A full service offering. <br />
              <span className="text-periwinkle opacity-70">
                Close Collaboration. Quick delivery.
              </span>
            </h2>
            <p className="text-muted-foreground pb-6">{intro}</p>
            <div className="mx-auto bg-slate-100 p-2.5 shadow-md rounded-3xl flex flex-col gap-y-3">
              {services &&
                services.data.map((service) => (
                  <div
                    key={service.id}
                    className="bg-white  shadow-md  px-4 pb-1 rounded-2xl"
                  >
                    <div className="flex justify-between items-center my-4">
                      <span className="text-base font-medium flex flex-row items-center gap-2">
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="text-accent w-4 h-4"
                        />
                        {service.title}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4 text-sm leading-6">
                      {service.description}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Packages;
