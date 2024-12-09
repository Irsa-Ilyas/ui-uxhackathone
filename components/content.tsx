import React from "react";

const Signupcontent = () => {
  return (
    <div className="w-full flex justify-center px-4  pt-[52px] pb-[65px] bg-[#F9F9F9]">
    <div className="w-full max-w-7xl text-[#2A254B] bg-white pt-[52px] pb-[65px] px-4  ">
      <div className="text-left sm:text-center">
        <h1 className="text-4xl">Join the club and get the benefits</h1>
        <p>
          Sign up for our newsletter and receive exclusive offers on new
        </p>
        <p>oranges, sales, pop up stores and more</p>
      </div>

      <div className="flex justify-center mt-[72px] ">
        <div className="flex  w-full max-w-[472px] h-[58px]">
          <input
            type="text"
            id="input-field"
            placeholder="your@email.com"
            className="px-4 py-2 border-none outline-none w-full text-lg text-[#2A254B] bg-[#F9F9F9]"
          />
          <button className="text-white w-[118px]  bg-[#2A254B] h-[58px] flex justify-center items-center">
            Sign up
          </button>
        </div>
      </div>

      <div />
    </div>
  </div>
  );
};

export default Signupcontent;
