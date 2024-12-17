"use client";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSubMenuOpen, setIsMobileSubMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileSubMenuOpen) setIsMobileSubMenuOpen(false);
  };

  return (
    <header className="shadow-sm overflow-x-hidden">
      <div className="max-w-[1270px] mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <IoSearch size={24} className="" />

          <h1 className="text-[#2A254B] text-xl font-bold">Avion</h1>

          <div className="hidden lg:block">
            <ul className="flex gap-6 items-center">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/product">Product</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <BsCart2 size={24} className="text-[#726E8D]" />
              </li>
              <li>
                <AiOutlineUser size={24} className="text-[#726E8D]" />
              </li>
            </ul>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            {!isMobileMenuOpen && !isMobileSubMenuOpen ? (
              <IoIosMenu
                size={24}
                className="text-[#726E8D] cursor-pointer"
                onClick={toggleMobileMenu}
              />
            ) : (
              <IoIosClose
                size={24}
                className="text-[#726E8D] cursor-pointer"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsMobileSubMenuOpen(false);
                }}
              />
            )}
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-md">
            <ul className="flex flex-col gap-4 py-4 px-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/product">Product</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
              <Link href="/cart"> <BsCart2 size={24} /></Link> 
              </li>
              <li>
                <AiOutlineUser size={24} />
              </li>
              <li></li>
            </ul>
          </div>
        )}

        {isMobileSubMenuOpen && (
          <div className="lg:hidden bg-white shadow-md">
            <ul className="flex flex-col gap-4 py-4 px-4">
              <li>
                <Link href="#" className="">
                  Plant Pots
                </Link>
              </li>
              <li>
                <Link href="#" className="">
                  Ceramics
                </Link>
              </li>
              <li>
                <Link href="#" className="">
                  Tables
                </Link>
              </li>
              <li>
                <Link href="#" className="">
                  Chairs
                </Link>
              </li>
              <li>
                <Link href="#" className="">
                  Crockery
                </Link>
              </li>
              <li>
                <Link href="#" className="">
                  Tableware
                </Link>
              </li>
              <li>
                <Link href="#" className="">
                  Cutlery
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="hidden lg:block max-w-[1270px] mx-auto px-4">
        <nav className="flex justify-center py-4">
          <ul className="flex flex-wrap gap-6 text-sm text-[#726E8D]">
            <li>
              <Link href="#" className="">
                Plant Pots
              </Link>
            </li>
            <li>
              <Link href="#" className="">
                Ceramics
              </Link>
            </li>
            <li>
              <Link href="#" className="">
                Tables
              </Link>
            </li>
            <li>
              <Link href="#" className="">
                Chairs
              </Link>
            </li>
            <li>
              <Link href="#" className="">
                Crockery
              </Link>
            </li>
            <li>
              <Link href="#" className="">
                Tableware
              </Link>
            </li>
            <li>
              <Link href="#" className="">
                Cutlery
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <hr className="border-b-1 border-black" />
    </header>
  );
};

export default Navbar;
