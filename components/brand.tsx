import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";
import { PiDeviceMobile } from "react-icons/pi";
import { FaCanadianMapleLeaf } from "react-icons/fa6";

const Brand = () => {
  return (
    <div className="w-full max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8">
      <h3 className="text-center mt-20 mb-12 text-[#2A254B] text-2xl sm:text-3xl lg:text-4xl">
        What makes our brand different
      </h3>
      <div className="flex flex-wrap justify-between gap-10 sm:gap-12 md:gap-14 mt-14 mb-14">
        <div className="space-y-5 text-[#2A254B] w-full sm:w-1/2 md:w-1/3 lg:flex-1">
          <span className="text-3xl">
            <TbTruckDelivery />
          </span>
          <h4 className="text-lg sm:text-xl">Next day as standard</h4>
          <p className="text-sm sm:text-base font-medium">
            Order before 3pm and get your order the next day as standard
          </p>
        </div>
        <div className="space-y-5 text-[#2A254B] w-full sm:w-1/2 md:w-1/3 lg:flex-1">
          <span className="text-3xl">
            <FaRegCheckCircle />
          </span>
          <h4 className="text-lg sm:text-xl">Made by true artisans</h4>
          <p className="text-sm sm:text-base font-medium">
            Handmade crafted goods made with real passion and craftsmanship
          </p>
        </div>
        <div className="space-y-5 text-[#2A254B] w-full sm:w-1/2 md:w-1/3 lg:flex-1">
          <span className="text-3xl">
            <PiDeviceMobile />
          </span>
          <h4 className="text-lg sm:text-xl">Unbeatable prices</h4>
          <p className="text-sm sm:text-base font-medium">
            For our materials and quality you won&apos;t find better prices
            anywhere
          </p>
        </div>
        <div className="space-y-5 text-[#2A254B] w-full sm:w-1/2 md:w-1/3 lg:flex-1">
          <span className="text-3xl">
            <FaCanadianMapleLeaf />
          </span>
          <h4 className="text-lg sm:text-xl">Recycled packaging</h4>
          <p className="text-sm sm:text-base font-medium">
            We use 100% recycled packaging to ensure our footprint is manageable
          </p>
        </div>
      </div>
    </div>
  );
};

export default Brand;
