import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CeramicItem {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
}

interface CeramicProps {
  urlData: CeramicItem[];
}

const Ceramic: React.FC<CeramicProps> = ({ urlData = [] }) => {
  return (
    <div className="w-full max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-8">

      <div className="text-2xl sm:text-3xl lg:text-4xl text-[#2A254B] mt-20 mb-10">
        <h1>New Ceramics</h1>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {urlData?.slice(0, 4).map((item) => (
          <div key={item._id} className="flex flex-col rounded overflow-hidden">
            <Link href={`/${item._id}`}>
              <Image
                src={item.imageUrl}
                width={305}
                height={375}
                alt={item.name}
                className="rounded"
                priority
              />
            </Link>
            <div className="py-5 text-[#2A254B] text-left">
              <p className="text-xl">{item.name}</p>
              <p className="text-base sm:text-lg pt-2">£{item.price}</p>
=======
      <header className="text-2xl sm:text-3xl lg:text-4xl text-[#2A254B] mt-20 mb-10">
        <h1>New ceramics</h1>
      </header>

      <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {[ 
          { src: "/images/chair1.png", name: "The Dandy chair", price: "£250" },
          { src: "/images/chair2.png", name: "Rustic Vase Set", price: "£155" },
          { src: "/images/chair3.png", name: "The Silky Vase", price: "£125" },
          { src: "/images/chair4.png", name: "The Lucy Lamp", price: "£399" }
        ].map((item, index) => (
          <article key={index} className="flex flex-col rounded overflow-hidden">
            <Image
              src={item.src}
              width={305}
              height={375}
              alt={item.name}  
              className="rounded"
            />
            <div className="py-5 text-[#2A254B] text-left">
              <p className="text-xl">{item.name}</p>
              <p className="text-base sm:text-lg pt-2">{item.price}</p>

            </div>
          </article>
        ))}

      </div>

      <div className="flex justify-center text-[#2A254B] mt-10 mb-20">
        <Link
          href="/product"
          className="bg-[#F9F9F9] rounded px-6 py-3 sm:px-8 sm:py-4 hover:bg-[#CAC6DA] transition-colors"
        >
          View Collection
        </Link>

      </section>

      <div className="flex justify-center text-[#2A254B] mt-10 mb-20">
        <button
          aria-label="View collection of ceramics"  
          className="bg-[#F9F9F9] rounded px-6 py-3 sm:px-8 sm:py-4 hover:bg-[#CAC6DA] transition-colors"
        >
          View collection
        </button>

      </div>
    </div>
  );
};

export default Ceramic;
