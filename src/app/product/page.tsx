import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-[1140px] mx-auto min-h-screen">
      <header className="p-6">
        <h1 className="text-3xl font-semibold text-center text-[#2A254B]">
          View all products
        </h1>
      </header>
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-wrap justify-between items-center  gap-4">
          <div className="flex gap-4 flex-wrap">
            {["Category", "Product Type", "Price", "Brand"].map((filter) => (
              <select
                key={filter}
                className="px-4 py-2 border rounded hover:bg-[#F9F9F9] mb-8">
                <option>{filter}</option>
              </select>
            ))}
          </div>
          <div>
            <select className="px-4 py-2 border rounded hover:bg-[#F9F9F9]">
              <option>Sorting by: Date added</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
          {[
            "/images/chair1.png",
            "/images/chair2.png",
            "/images/chair3.png",
            "/images/p3.png",
            "/images/p3.png",
            "/images/p8.png",
            "/images/p7.png",
            "/images/p9.png",
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

        <div className="w-full flex justify-center text-[#2A254B] mt-8">
          <button className="bg-[#F9F9F9] rounded px-8 py-4 hover:bg-[#CAC6DA]">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
}
