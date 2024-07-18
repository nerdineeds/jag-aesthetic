'use client';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
interface Service {
  id: number;
  title: string;
  description: string;
}

interface Package {
  id: number;
  name: string;
  description: string;
  services: string[];
  timeline: string;
  price: number;
  learnMore: { children: { text: string }[] }[];
}

interface ComponentData {
  __component: string;
  intro: string;
  services: { data: Service[] };
  packages: { data: Package[] };
}

interface Props {
  data: ComponentData;
}

const formatPrice = (price: number) => {
  if (price >= 1000) {
    return `$${(price / 1000).toFixed(1)}k`;
  }
  return `$${price}`;
};

const Packages: React.FC<Props> = ({ data }) => {
  const [togglePackages, setTogglePackages] = React.useState<
    Record<number, boolean>
  >({});

  const handlePackageToggle = (index: number) => {
    setTogglePackages((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const intro = data.intro;
  const services = data.services.data;
  const packages = data.packages.data;

  return (
    <div className="max-w-5xl flex flex-col lg:flex-row gap-y-8 gap-x-8 w-full mx-auto lg:p-0 my-12 lg:mt-0">
      <div className="lg:w-2/5 hidden md:block">
        <h2 className="text-2xl font-medium tracking-tight">
          Our
          <span className="text-periwinkle-500 opacity-70 ml-2">
            packages
          </span>
        </h2>
        <div className="mx-auto bg-lightgrey/50 p-2.5 rounded-3xl mt-4 flex flex-col gap-y-2 shadow-md border">
          {packages &&
            packages.map((pkg, index) => (
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
                  <p className="text-muted-foreground mb-1.5 text-sm leading-5">
                    {pkg.description}
                  </p>
                  <button
                    className="text-sm text-charcoal  cursor-pointer  px-4 py-1 rounded-full mt-2 bg-periwinkle-300 shadow-md"
                    onClick={() => handlePackageToggle(index)}
                  >
                    Learn more
                  </button>
                </div>
                {togglePackages[index] && (
                  <div className=" bg-white shadow-md py-4 px-4 rounded-2xl mt-2 mb-4">
                    <h3 className="text-base font-medium mb-2">
                      What you get
                    </h3>
                    <div className="text-sm flex flex-col gap-2 text-muted-foreground">
                      {pkg.learnMore.map((lm) => (
                        <div key={lm.children[0].text}>
                          {lm.children[0].text}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>

      <div className="flex-1 p-4 lg:p-0">
        <h2 className="text-2xl font-medium tracking-tight pb-4">
          A full service offering. <br />
          <span className="text-periwinkle-500 opacity-70">
            Close Collaboration. Quick delivery.
          </span>
        </h2>
        <p className="text-muted-foreground pb-6">{intro}</p>
        <div className="mx-auto bg-lightgrey/50 p-2.5 shadow-md rounded-3xl flex flex-col gap-y-3">
          {services &&
            services.map((service) => (
              <div
                key={service.id}
                className="bg-white  shadow-md  px-4 pb-1 rounded-2xl"
              >
                <div className="flex justify-between items-center my-4">
                  <span className="text-base font-medium flex flex-row items-center gap-2">
                    <FaCheckCircle className="text-periwinkle-200 w-4 h-4" />
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
  );
};

export default Packages;
