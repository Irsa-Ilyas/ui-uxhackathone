import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full max-w-[1270px]  mx-auto flex flex-wrap justify-between mt-10  bg-[#2a2e4b]">
      <div className="flex flex-col justify-around ">
        <div>
          <h2 className="text-[#F9F9F9] text-2xl mt-10">
            The furniture brand for the <br />
            future, with timeless designs
          </h2>
          <button className="bg-[#494365] mt-10 text-white font-medium px-8 py-4 rounded opacity-75">
            View collection
          </button>
        </div>
        <div>
          <p className="text-white opacity-75 text-lg sm:mt-10 mb-10">
            A new era in eco friendly furniture with Avelon, the French luxury
            retail brand
            <br />
            with nice fonts, tasteful colors and a beautiful way to display
            things digitally <br />
            using modern web technologies.
          </p>
        </div>
      </div>
      <div className="hidden xl:block ">
        <Image
          src="/images/heroimage.png"
          width={520}
          height={585}
          alt="heoimage"></Image>
      </div>
    </div>
  );
};
export default Hero;
