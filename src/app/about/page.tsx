
import Image from "next/image";
import { TbTruckDelivery } from "react-icons/tb";
import { FaCanadianMapleLeaf, FaRegCheckCircle } from "react-icons/fa";
import { PiDeviceMobile } from "react-icons/pi";

const About = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
    
    <div className="w-full flex justify-center items-center px-4">
  <div className="max-w-[1250px] w-full mx-auto flex lg:flex-row flex-col lg:gap-0 gap-[40px] items-center justify-between mt-[88px] lg:mb-[89px] mb-[32px]">
    <h1 className="text-4xl lg:text-left py-10 text-center  leading-relaxed">
      A brand built on the love of craftsmanship,<br/> quality, and outstanding customer service
    </h1>
          <button className=" text-[#2A254B] bg-[#F9F9F9] rounded  py-4 hover:bg-[#CAC6DA]  sm:w-[30%]">
       View Our Products
          </button>
  </div>
</div>


      <div className="w-full flex justify-center px-4  lg:py-[60px] pb-[32px]">
        <div className="w-full  flex lg:flex-row lg:gap-4 gap-6 flex-col justify-center">
        <div className=" flex flex-col justify-around text-center p-4 bg-[#2A254B] w-full lg:w-[55%] ">
        <div className="">
          <h2 className="text-white text-4xl mt-10 ">
          It started with a small idea
          </h2>
          <p className="text-white  text-lg sm:mt-10 mb-10">
          A global brand with local beginnings, our story begain in a <br />small studio in South London in early 2014
            
          </p>
          
        </div>

        <div className="w-full hidden lg:block  ">
        <button className="bg-[#494365] mt-10 text-white font-medium px-8 py-4 rounded opacity-75">
            View collection
          </button>
        </div>
      </div>
          <div className="flex-1">
            <Image
              src="/images/about1.png"
              alt="Sofa Image"
              width={630}
              height={478}
              className="w-full lg:h-[478px]"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between bg-white w-full max-w-[1440px] mx-auto">
      <div className="flex flex-col justify-around w-full md:w-2/4 px-3">
        <div className="py-8">
          <h2 className="text-2xl text-[#2A254B] leading-relaxed">
            From a studio in London to a global brand with
            <br /> over 400 outlets
          </h2>
          <p className="text-[#505977] opacity-75 text-lg py-8 leading-relaxed">
            When we started Avion, the idea was simple. Make high-quality
            furniture
            <br /> affordable and available for the mass market.
            <br />
          </p>
          <p className="pt-8">
            Handmade, and lovingly crafted furniture and homeware is what we
            live,
            <br /> breathe and design so our Chelsea boutique became the hotbed
            for the
            <br /> London interior design community.
          </p>
        </div>
        <div className="flex text-[#2A254B] mb-4">
          <button className="bg-[#F9F9F9] rounded px-8 py-4 hover:bg-[#CAC6DA] w-full sm:w-[30%]">
            Get in touch
          </button>
        </div>
      </div>
      <div className="w-full md:w-2/4 mt-8 md:mt-0">
        <Image
          src="/images/about2.png"
          width={720}
          height={603}
          alt="hero image"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
      <div className="w-full flex justify-center px-4 text-[#2A254B]">
        <div className="w-full max-w-7xl text-darkPurple pt-[60px] pb-[80px]">
          <h1 className="sm:text-center text-left text-3xl mb-[51px]">
            What makes our brand different
          </h1>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-[22px] gap-[26px]">
            <div className="flex items-center justify-between bg-[#F9F9F9] lg:p-12 p-6">
              <div>
                <span className="text-2xl">
                  <TbTruckDelivery />
                </span>
                <h3 className="mb-2 text-xl">Next day as standard</h3>
                <h3>
                  Order before 3pm and get your order the next day as standard.
                </h3>
              </div>
            </div>
            <div className="flex items-center justify-between bg-[#F9F9F9] lg:p-12 p-6">
              <div>
                <span className="text-2xl">
                  <FaRegCheckCircle />
                </span>
                <h3 className="mb-2 text-xl">Made by true artisans</h3>
                <h3>
                  Handmade crafted goods made with real passion and
                  craftmanship.
                </h3>
              </div>
            </div>
            <div className="flex items-center justify-between bg-[#F9F9F9] lg:p-12 p-6">
              <div>
                <span className="text-2xl">
                  <PiDeviceMobile />
                </span>
                <h3 className="mb-2 text-xl">Unbeatable prices</h3>
                <h3>
                  For our materials and quality, you won&apos;t find better
                  prices anywhere.
                </h3>
              </div>
            </div>
            <div className="flex items-center justify-between bg-[#F9F9F9] lg:p-12 p-6">
              <div>
                <span className="text-2xl">
                  <FaCanadianMapleLeaf />
                </span>
                <h3 className="mb-2 text-xl">Recycled packaging</h3>
                <h3>
                  We use 100% recycled packaging to ensure our footprint is
                  manageable.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>


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
    </div>
  );
};

export default About;
