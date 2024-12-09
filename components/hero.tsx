import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="max-w-[1440px] mx-auto flex flex-wrap justify-center mt-10">
      <div className=" flex flex-col justify-around p-4 bg-[#2A254B] w-full lg:w-[55%] ">
        <div>
          <h2 className="text-white text-4xl mt-10">
            The furniture brand for the <br />
            future, with timeless designs
          </h2>
          <button className="bg-[#494365] mt-10 text-white font-medium px-8 py-4 rounded opacity-75">
            View collection
          </button>
        </div>

        <div className="w-full hidden lg:block  ">
          <p className="text-white  text-lg sm:mt-10 mb-10">
            A new era in eco-friendly furniture with Avelon, the French luxury
            retail brand
            <br />
            with nice fonts, tasteful colors, and a beautiful way to display
            things digitally <br />
            using modern web technologies.
          </p>
        </div>
      </div>

      <div className="hidden xl:block w-[585] ">
        <Image
          src="/images/heroimage.png"
          width={520}
          height={585}
          alt="hero image"
        />
      </div>
    </div>
  );
};

export default Hero;
