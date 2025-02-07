import React from "react";
import Image from "next/image";

const PopularProduct = () => {
  return (
    <div className="w-full max-w-[1270px] mx-auto px-4">
      <div className="text-4xl text-[#2A254B] mt-20 mb-16">
        <h1>Our Popular Products</h1>
      </div>

      <div className="flex flex-wrap justify-between gap-6 sm:flex-col lg:flex-row">
        {/* Popular Suede Sofa */}
        <div className="hidden lg:block w-full lg:w-1/3">
          <Image
            src="/images/chair4e.png"
            width={630}
            height={375}
            alt="The Popular Suede Sofa"
            layout="responsive" // Make image responsive
            priority
          />
          <div className="py-5 text-[#2A254B]">
            <p className="text-xl">The Popular Suede Sofa</p>
            <p className="text-lg pt-2">£980</p>
          </div>
        </div>

        {/* The Dandy Chair (first) */}
        <div className="w-full lg:w-1/3">
          <Image
            src="/images/chair1.png"
            width={340}
            height={375}
            alt="The Dandy Chair"
          
            priority
          />
          <div className="py-5 text-[#2A254B]">
            <p className="text-xl">The Dandy Chair</p>
            <p className="text-lg pt-2">£250</p>
          </div>
        </div>

        {/* The Dandy Chair (second) */}
        <div className="w-full lg:w-1/3">
          <Image
            src="/images/chair7.png"
            width={340}
            height={375}
            alt="The Dandy Chair"
     
            priority
          />
          <div className="py-5 text-[#2A254B]">
            <p className="text-xl">The Dandy Chair</p>
            <p className="text-lg pt-2">£250</p>
          </div>
        </div>
      </div>

      {/* View Collection Button */}
      <div className="flex justify-center text-[#2A254B] mb-4 mt-10">
        <button className="bg-[#F9F9F9] rounded px-8 py-4 hover:bg-[#CAC6DA]" aria-label="View Collection">
          View Collection
        </button>
      </div>
    </div>
  );
};

export default PopularProduct;


