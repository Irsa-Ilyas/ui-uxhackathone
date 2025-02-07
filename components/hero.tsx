import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="max-w-[1440px] mx-auto flex flex-wrap justify-center mt-10 px-4">
      <div className="flex flex-col justify-between p-4 bg-[#2A254B] w-full lg:w-[55%]">
        <div>
          <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl mt-10">
            The furniture brand for the <br />
            future, with timeless designs
          </h2>
          <button className="bg-[#494365] mt-10 text-white font-medium px-8 py-4 rounded opacity-75 hover:bg-[#3b3a56] transition-all duration-300">
            View collection
          </button>
        </div>

        <div className="w-full hidden lg:block">
          <p className="text-white text-lg sm:mt-10 mb-10">
            A new era in eco-friendly furniture with Avelon, the French luxury
            retail brand, with nice fonts, tasteful colors, and a beautiful way
            to display things digitally using modern web technologies.
          </p>
        </div>
      </div>

      {/* Visible on XL and larger screens */}
      <div className="hidden xl:block w-[520px]">
        <Image
          src="/images/heroimage.png"
          width={520}
          height={585}
          alt="Hero image showcasing eco-friendly furniture"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Hero;

