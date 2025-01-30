import React from "react";
import Image from "next/image";

const PopularProduct = () => {
  return (
    <div className="w-full max-w-[1270px] mx-auto">
      <div className="text-4xl text-[#2A254B] mt-20 mb-16">
        <h1>Our popular products</h1>
      </div>

      <div className="flex justify-between gap-6 sm:flex-col lg:flex-row">
        <div className="hidden lg:block">
          <Image
            src="/images/chair4e.png"
            width={630}
            height={375}
            alt="chair5"></Image>
          <div className="py-5 text-[#2A254B]">
            <p className="text-xl ">The Poplar suede sofa</p>
            <p className="text-lg pt-2">£980</p>
          </div>
        </div>
        <div className="">
          <Image
            src="/images/chair1.png"
            width={340}
            height={375}
            alt="chair1"></Image>
          <div className="py-5 text-[#2A254B]">
            <p className="text-xl ">The Dandy chair</p>
            <p className="text-lg pt-2">£250</p>
          </div>
        </div>
        <div className="">
          <Image
            src="/images/chair7.png"
            width={340}
            height={375}
            alt="chair1"></Image>
          <div className="py-5 text-[#2A254B]">
            <p className="text-xl ">The Dandy chair</p>
            <p className="text-lg pt-2">£250</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-[#2A254B] mb-4 mt-10">
        <button className="bg-[#F9F9F9] rounded px-8 py-4 hover:bg-[#CAC6DA]">
          View collection
        </button>
      </div>
    </div>
  );
};

export default PopularProduct;
