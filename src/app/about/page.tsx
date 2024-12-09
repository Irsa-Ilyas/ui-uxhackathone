import Link from "next/link";
import Image from "next/image";
import { TbTruckDelivery } from "react-icons/tb";
import { FaCanadianMapleLeaf, FaRegCheckCircle } from "react-icons/fa";
import { PiDeviceMobile } from "react-icons/pi";

const About = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      {/* Hero Section */}
      <div className="w-full flex justify-center items-center px-4">
        <div className="w-full max-w-[1250px] flex lg:flex-row flex-col lg:gap-0 gap-[40px] items-center justify-between mt-[88px] lg:mb-[89px] mb-[32px]">
          <h1 className="text-[36px] text-pink-600">
            A brand built on the love of craftmanship,
            <br />
            quality and outstanding customer service
          </h1>
          <Link href="/">
            <button className="flex justify-center items-center lg:w-[192px] w-full h-[56px] text-[#2A254B] bg-orange-500">
              View collection
            </button>
          </Link>
        </div>
      </div>














      {/* Sofa Section */}
      <div className="w-full flex justify-center px-4 lg:py-[60px] pb-[32px]">
        <div className="w-full  flex lg:flex-row lg:gap-4 gap-6 flex-col justify-center">
          <div className="bg-[#2a254b] text-pink-300 flex flex-col justify-between w-full lg:basis-[50%] p-[40px_32px_30px_32px] lg:p-[60px_0px_60px_60px]">
            <div>
              <h1 className="md:text-[32px] text-[20px] mb-3">
                It started with a small idea
              </h1>
              <p className="lg:pr-[75px] md:text-[18px] text-[14px]">
                A global brand with local beginnings, our story began in a small
                studio in South London in early 2014.
              </p>
            </div>
            <div className="text-[#2A254B]">
              <Link href="/">
                <button className="flex justify-center items-center md:w-[170px] mt-[32px] h-[56px] w-full">
                  View collection
                </button>
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <Image
              src="/images/abt1.png"
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


      {/* What Makes Us Different */}
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
