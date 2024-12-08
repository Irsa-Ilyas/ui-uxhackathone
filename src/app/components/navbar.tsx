"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { PiUserCircleLight } from "react-icons/pi";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white max-w-[1270px] mx-auto px-4">
      <div className="flex justify-between items-center py-5">
        <div>
          <h1 className="text-[#22202E] text-2xl font-bold">Avion</h1>
        </div>
        <div className="flex items-center text-base text-[#726E8D]">
          <nav className="hidden lg:flex">
            <ul className="flex gap-6">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href={"/about"}>About us</Link>
              </li>
              <li>
                <Link href={"/product"}>Product</Link>
              </li>
              <li className="mr-2">
                <Link href="#">Blog</Link>
              </li>
            </ul>
          </nav>
          <span>
            <CiSearch size={24} />
          </span>
          <span>
            <CiShoppingCart size={24} />
          </span>
          <span className="ps-3">
            <PiUserCircleLight size={24} />
          </span>
          <button
            className="lg:hidden ml-4 text-xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>
      <hr />

      <div className="hidden lg:flex lg:justify-center py-5 text-base text-[#726E8D]">
        <nav>
          <ul className="flex gap-11">
            <li>
              <Link href="#">Plant pots</Link>
            </li>
            <li>
              <Link href="#">Ceramics</Link>
            </li>
            <li>
              <Link href="#">Tables</Link>
            </li>
            <li>
              <Link href="#">Chairs</Link>
            </li>
            <li>
              <Link href="#">Crockery</Link>
            </li>
            <li>
              <Link href="#">Tableware</Link>
            </li>
            <li>
              <Link href="#">Cutlery</Link>
            </li>
          </ul>
        </nav>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-50 py-5">
          <nav>
            <ul className="flex flex-col gap-4 text-base text-[#726E8D]">
              <li>
                <Link href="#">Plant pots</Link>
              </li>
              <li>
                <Link href="#">Ceramics</Link>
              </li>
              <li>
                <Link href="#">Tables</Link>
              </li>
              <li>
                <Link href="#">Chairs</Link>
              </li>
              <li>
                <Link href="#">Crockery</Link>
              </li>
              <li>
                <Link href="#">Tableware</Link>
              </li>
              <li>
                <Link href="#">Cutlery</Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
