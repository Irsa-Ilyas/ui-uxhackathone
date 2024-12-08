import React from "react";
import Image from "next/image";

const Outline = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-white w-full max-w-[1440px] mx-auto">
      <div className="flex flex-col justify-around w-full md:w-2/4 px-3">
        <div className="py-8">
          <h2 className="text-2xl text-[#2A254B] leading-relaxed">
            From a studio in London to a global brand with
            <br /> over 400 outlets
          </h2>
          <p className="text-[#505977] opacity-75 text-lg py-8 leading-relaxed">
            When we started Avion, the idea was simple. Make high-quality
            furniture
            <br /> affordable and available for the mass market.
            <br />
          </p>
          <p className="pt-8">
            Handmade, and lovingly crafted furniture and homeware is what we
            live,
            <br /> breathe and design so our Chelsea boutique became the hotbed
            for the
            <br /> London interior design community.
          </p>
        </div>
        <div className="flex text-[#2A254B] mb-4">
          <button className="bg-[#F9F9F9] rounded px-8 py-4 hover:bg-[#CAC6DA] w-full sm:w-[30%]">
            Get in touch
          </button>
        </div>
      </div>
      <div className="w-full md:w-2/4 mt-8 md:mt-0">
        <Image
          src="/images/outlet.png"
          width={720}
          height={603}
          alt="hero image"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Outline;
