import React from "react";
import Image from "next/image";

const Outline = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-white w-full max-w-[1440px] mx-auto px-4 md:px-8 py-10">
      <div className="flex flex-col justify-around w-full md:w-2/4 px-3">
        <div className="py-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#2A254B] leading-relaxed">
            From a studio in London to a global brand with
            <br /> over 400 outlets
          </h2>
          <p className="text-[#505977] opacity-75 text-lg py-8 leading-relaxed">
            When we started Avion, the idea was simple. Make high-quality
            furniture
            <br /> affordable and available for the mass market.
          </p>
          <p className="pt-8 text-[#505977] opacity-75 text-lg leading-relaxed">
            Handmade, and lovingly crafted furniture and homeware is what we
            live, <br /> breathe and design so our Chelsea boutique became the
            hotbed for the <br /> London interior design community.
          </p>
        </div>
        <div className="flex text-[#2A254B] mb-4">
          <button className="bg-[#F9F9F9] rounded px-8 py-4 hover:bg-[#CAC6DA] w-full sm:w-[40%] md:w-[30%] transition-all duration-300 ease-in-out">
            Get in touch
          </button>
        </div>
      </div>
      <div className="w-full md:w-2/4 mt-8 md:mt-0">
        <Image
          src="/images/outlet.png"
          width={720}
          height={603}
          alt="Outlet showcasing furniture"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Outline;
