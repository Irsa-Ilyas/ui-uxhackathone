import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";
import { PiDeviceMobile } from "react-icons/pi";
import { FaCanadianMapleLeaf } from "react-icons/fa6";

const Brand = () => {
  const features = [
    {
      icon: <TbTruckDelivery />,
      title: "Next day as standard",
      description: "Order before 3pm and get your order the next day as standard.",
    },
    {
      icon: <FaRegCheckCircle />,
      title: "Made by true artisans",
      description: "Handmade crafted goods made with real passion and craftsmanship.",
    },
    {
      icon: <PiDeviceMobile />,
      title: "Unbeatable prices",
      description: "For our materials and quality, you won’t find better prices anywhere.",
    },
    {
      icon: <FaCanadianMapleLeaf />,
      title: "Recycled packaging",
      description: "We use 100% recycled packaging to ensure our footprint is manageable.",
    },
  ];

  return (
    <section className="w-full flex justify-center px-4 text-[#2A254B]">
      <div className="w-full max-w-7xl text-darkPurple pt-16 pb-20">
        <h2 className="sm:text-center text-left text-3xl mb-12">
          What Makes Our Brand Different
        </h2>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
          {features.map((feature, index) => (
            <article
              key={index}
              className="flex flex-col items-start bg-[#F9F9F9] lg:p-12 p-6 shadow-sm rounded-lg"
              role="article"
            >
              <span className="text-2xl mb-3" aria-hidden="true">
                {feature.icon}
              </span>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-gray-700">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brand;
