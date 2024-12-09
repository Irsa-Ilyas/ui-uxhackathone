import React from "react";
import { LiaLinkedinIn, LiaFacebookSquare } from "react-icons/lia";
import { CiInstagram } from "react-icons/ci";
import { PiSkypeLogoThin } from "react-icons/pi";
import { FiTwitter } from "react-icons/fi";
import { AiOutlinePinterest } from "react-icons/ai";

const Footer = () => {
  const sections = [
    {
      title: "Menu",
      links: [
        "New arrivals",
        "Best sellers",
        "Recently viewed",
        "Popular this week",
        "All products",
      ],
    },
    {
      title: "Categories",
      links: ["Crockery", "Furniture", "Homeware", "Plant pots", "Chairs"],
    },
    {
      title: "Our Company",
      links: [
        "About us",
        "Vacancies",
        "Contact us",
        "Privacy",
        "Returns policy",
      ],
    },
  ];

  return (
    <footer className="bg-[#2A254B] text-white px-4 py-10">
      <div className="max-w-[1273px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {sections.map((section, index) => (
          <div key={index}>
            <ul className="space-y-3">
              <li className="text-base font-semibold">{section.title}</li>
              {section.links.map((link, i) => (
                <li key={i} className="text-sm hover:underline cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <ul className="space-y-3">
            <li className="text-base font-semibold">Join our mailing list</li>
            <li>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="your@gmail.com"
                  className="px-4 py-3 bg-[#494365] text-white placeholder:text-[#d1d1e9] rounded-l-md focus:outline-none"
                />
                <button className="px-5  bg-white text-[#4e4d93] rounded-r-md hover:bg-[#d1d1e9]">
                  Sign Up
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1273px] mx-auto flex flex-col md:flex-row justify-between items-center mt-10 gap-4 text-sm">
        <p>Copyright 2022 Avion LTD</p>
        <div className="flex gap-4 text-2xl">
          <span aria-label="LinkedIn">
            <LiaLinkedinIn />
          </span>
          <span aria-label="Facebook">
            <LiaFacebookSquare />
          </span>
          <span aria-label="Instagram">
            <CiInstagram />
          </span>
          <span aria-label="Skype">
            <PiSkypeLogoThin />
          </span>
          <span aria-label="Twitter">
            <FiTwitter />
          </span>
          <span aria-label="Pinterest">
            <AiOutlinePinterest />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
