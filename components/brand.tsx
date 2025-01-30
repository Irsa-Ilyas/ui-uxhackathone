import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";
import { PiDeviceMobile } from "react-icons/pi";
import { FaCanadianMapleLeaf } from "react-icons/fa6"

const brand = () => {
  return (
    <div>
          <div className="w-full flex justify-center px-4 text-[#2A254B] ">
        <div className="w-full  max-w-7xl text-darkPurple pt-[60px] pb-[80px]">
          <h1 className="sm:text-center text-left text-3xl mb-[51px]">
            What makes our brand different
          </h1>

          <div className="grid lg:grid-cols-4 sm:grid-cols-2  grid-cols-1 lg:gap-[22px] gap-[26px]">
            <div className="flex items-center justify-between bg-[#F9F9F9] lg:p-12 p-6 ">
              <div>
                <span className="text-2xl">
                  {" "}
                  <TbTruckDelivery />
                </span>

                <h3 className="mb-2 text-xl">Next day as standard</h3>
                <h3>
                  Order before 3pm and get your order the next day as standard
                </h3>
              </div>
            </div>

            <div className="flex items-center justify-between bg-[#F9F9F9] lg:p-12 p-6 ">
              <div>
                <span className="text-2xl">
                  <FaRegCheckCircle />
                </span>

                <h3 className="mb-2 text-xl">Made by true artisans</h3>
                <h3>
                  Handmade crafted goods made with real passion and craftmanship
                </h3>
              </div>
            </div>

            <div className="flex items-center justify-between bg-[#F9F9F9] lg:p-12 p-6 ">
              <div>
                <span className="text-2xl">
                  <PiDeviceMobile />
                </span>

                <h3 className="mb-2 text-xl">Unbeatable prices</h3>
                <h3>
                  For our materials and quality you won&apos;t find better
                  prices anywhere
                </h3>
              </div>
            </div>

            <div className="flex items-center justify-between bg-[#F9F9F9] lg:p-12 p-6 ">
              <div>
                <span className="text-2xl">
                  <FaCanadianMapleLeaf />
                </span>

                <h3 className="mb-2 text-xl">Recycled packaging</h3>
                <h3 className="">
                  We use 100% recycled packaging to ensure our footprint is
                  manageable
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default brand