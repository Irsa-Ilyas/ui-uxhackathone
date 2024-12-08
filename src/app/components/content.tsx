import React from "react";

const Signupcontent = () => {
  return (
    <div className="max-w-full overflow-x-hidden flex justify-center mx-auto bg-[#F9f9f9] mt-12">
      <div className="bg-white p-12 text-center mb-16 w-full sm:w-auto">
        <h1 className="text-4xl text-[#2A254B] mb-6">
          Join the club and get the benefits
        </h1>
        <p className="font-medium text-[#2A254B] mb-12">
          Sign up for our newsletter and receive exclusive offers on new <br />
          ranges, sales, pop-up stores, and more.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0">
          <input
            type="text"
            placeholder="your@gmail.com"
            className="px-4 py-3 w-full sm:w-96 bg-[#F9F9F9] text-[#2A254B] placeholder:ps-3 border border-gray-300 rounded-l-md focus:outline-none"
          />
          <button className="px-6 py-3 bg-[#2A254B] text-white text-medium rounded-r-md hover:bg-[#1d1b34]">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signupcontent;
