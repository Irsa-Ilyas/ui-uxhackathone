import React from "react";
import Image from "next/image";
import Brand from "../../../components/brand";
import Signupcontent from "../../../components/content";

const Cart = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between text-[#2A254B] min-h-screen">
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/images/chair1.png"
            alt="The Dandy Chair"
            width={720}
            height={750}
            className="h-auto object-cover"
          />
        </div>
        <div className="md:w-1/2 px-6 md:px-20 py-10 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-5">The Dandy Chair</h1>
          <p className="text-2xl font-semibold mb-8">£250</p>
          <p className="text-lg font-medium mb-4">Description</p>
          <p className="text-base leading-relaxed mb-6">
            A timeless design, with premium materials featured as one of our
            most popular and iconic pieces. The Dandy chair is perfect for any
            stylish living space with both vegan and detailed leather
            upholstery.
          </p>
          <ul className="list-disc ml-6 mb-8">
            <li>Premium material</li>
            <li>Handmade upholstery</li>
            <li>Quality timeless interior</li>
          </ul>
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">Dimensions</h2>
            <div className="grid grid-cols-3 gap-4">
              <p className="leading-8">
                <strong>Height:</strong> 110cm
              </p>
              <p className="leading-8">
                <strong>Width:</strong> 75cm
              </p>
              <p className="leading-8">
                <strong>Depth:</strong> 50cm
              </p>
            </div>
          </div>
          <div className="flex items-center flex-wrap gap-4 mt-8 md:mt-16">
            <label htmlFor="quantity" className="text-lg font-semibold">
              Amount:
            </label>
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-16 border rounded px-2 py-1 text-center"
            />
            <div className="flex justify-center">
              <button className=" sm:w-auto px-6 py-3 sm:px-16 bg-[#2A254B] text-white rounded hover:bg-[#1e1b3a]">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-semibold text-center text-[#2A254B] py-5">
        You May Also Like
      </h1>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6  py-6">
        {[
          "/images/chair1.png",
          "/images/chair2.png",
          "/images/chair3.png",
          "/images/p3.png",
        ].map((src, index) => (
          <div key={index}>
            <Image
              src={src}
              alt={`Product ${index + 1}`}
              width={305}
              height={375}
              className="rounded object-cover w-full"
            />
            <div className="py-5 text-[#2A254B]">
              <p className="text-lg font-medium">The Poplar suede sofa</p>
              <p className="text-md pt-2 font-light">£980</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center text-base text-[#2A254B] mt-8">
        <button className="bg-[#F9F9F9] rounded px-8 py-4 hover:bg-[#CAC6DA]">
          View Collection
        </button>
      </div>
      <Brand />
      <Signupcontent />
    </div>
  );
};

export default Cart;
