import React from "react";
import Image from "next/image";
import Link from "next/link";


const Ceramic = ({ urlData }: any) => {

  return (
    <div className="w-full max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-2xl sm:text-3xl lg:text-4xl text-[#2A254B] mt-20 mb-10">
        <h1>New ceramics</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {urlData.slice(0, 4).map((item: any,) => (
          <div key={item._id} className="flex flex-col rounded overflow-hidden">
            <Link href={`/${item._id}`}>
              <Image
                src={item.imageUrl}
                width={305}
                height={375}
                alt={item.name}
                className="rounded"
              />
            </Link>
            <div className="py-5 text-[#2A254B] text-left">
              <p className="text-xl ">{item.name}</p>
              <p className="text-base sm:text-lg pt-2">£{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center text-[#2A254B] mt-10 mb-20">
        <Link href="/product" className="bg-[#F9F9F9] rounded px-6 py-3 sm:px-8 sm:py-4 hover:bg-[#CAC6DA] transition-colors">
          View collection
        </Link>
      </div>
    </div>
  );
};

export default Ceramic;
