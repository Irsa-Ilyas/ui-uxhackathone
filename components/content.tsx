import React from "react";

const Signupcontent = () => {
  return (
    <div className="w-full flex justify-center px-4 pt-[52px] pb-[65px] bg-[#F9F9F9]">
      <div className="w-full max-w-7xl text-[#2A254B] bg-white pt-[52px] pb-[65px] px-4">
        <div className="text-left sm:text-center">
          <h1 className="text-4xl">Join the club and get the benefits</h1>
          <p>
            Sign up for our newsletter and receive exclusive offers on new
          </p>
          <p>oranges, sales, pop-up stores, and more</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center mt-6 sm:space-y-0">
     
          <label htmlFor="email" className="sr-only">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="your@gmail.com"
            className="px-4 py-3 w-full sm:w-96 bg-[#F9F9F9] text-[#2A254B] placeholder:ps-3 border border-gray-300 rounded-l-md focus:outline-none"
            aria-describedby="email-description"
          />
          
          <button
            aria-label="Sign up for newsletter"
            className="px-6 py-3 bg-[#2A254B] text-white text-medium rounded-r-md hover:bg-[#1d1b34]"
          >
            Signup
          </button>
        </div>

     
        <p id="email-description" className="sr-only">
          Please enter your email to sign up for our newsletter.
        </p>
      </div>
    </div>
  );
};

export default Signupcontent;
