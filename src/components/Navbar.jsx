"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import fibologo from "public/fibologo.PNG";
import fibologo1 from "public/fibomining.PNG";

const Navbar = () => {
  const [showNav, SetshowNav] = useState(false);

  return (
    <nav className="w-screen flex items-center text-white justify-center bg-[#1a1c34] relative">
      {/* Desktop Navigation */}
      <div className="w-full h-[80px] md:h-[90px] flex  items-center px-[20px] md:px-[100px] lg:px-[150px] justify-between">
        <Link href="/" className="cursor-pointer font-black text-[25px] ">
          <Image src={fibologo1} alt="logo" />
        </Link>

        <div className=" gap-2 md:gap-5 hidden lg:flex items-center justify-center text-[20px] md:font-bold mb-0">
          <ul className="flex gap-6 items-center justify-center text-[8E90A2]">
            <Link href="/" className="hover:text-[#307ea1]">
              Home
            </Link>
            <Link href="/trade/register" className="hover:text-[#307ea1]">
              Get Started
            </Link>
            <Link href="/#faq" className="hover:text-[#307ea1]">
              Faq
            </Link>
            <Link href="/" className="hover:text-[#307ea1]">
              Buy Bitcoin
            </Link>
            <Link href="/contact" className="hover:text-[#307ea1]">
              Contact
            </Link>
          </ul>
          <div className={`flex gap-5 cursor-pointer font-light`}>
            <Link
              href="/trade/login"
              className={`bground py-2 px-4 rounded-[20px] w-[120px]`}
            >
              LOGIN
            </Link>
            <Link
              href="/trade/register"
              className={`bground py-2 px-4 rounded-[20px]`}
            >
              REGISTER
            </Link>
          </div>
        </div>

        <div
          className={` flex flex-col gap-2 rounded-md bground p-4 cursor-pointer lg:hidden`}
          onClick={() => SetshowNav(!showNav)}
        >
          <div className="w-[25px] h-[5px] bg-white"></div>
          <div className="w-[25px] h-[5px] bg-white"></div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className="absolute top-[80px] left-0 flex w-full bg-[#1a1c34] items-center justify-center overflow-hidden transition-all duration-3000 ease-in-out"
        style={showNav ? { height: "max-content" } : { height: "0px" }}
      >
        <div className="text-[18px] font-bold flex flex-col gap-8 items-center justify-center py-5 cursor-pointer">
          <ul className="flex flex-col gap-6 items-center justify-center text-[8E90A2]">
            <Link
              href="/"
              onClick={() => SetshowNav(false)}
              className="hover:text-[#307ea1]"
            >
              Home
            </Link>
            <Link
              href="/trade/register"
              onClick={() => SetshowNav(false)}
              className="hover:text-[#307ea1]"
            >
              Get Started
            </Link>
            <Link
              href="/"
              onClick={() => SetshowNav(false)}
              className="hover:text-[#307ea1]"
            >
              Faq
            </Link>
            <Link
              href="/"
              onClick={() => SetshowNav(false)}
              className="hover:text-[#307ea1]"
            >
              Buy Bitcoin
            </Link>
            <Link
              href="/"
              onClick={() => SetshowNav(false)}
              className="hover:text-[#307ea1]"
            >
              Contact
            </Link>
          </ul>
          <div className={`flex gap-5 cursor-pointer font-light`}>
            <Link
              href="/trade/login"
              className={`bground py-2 px-4 rounded-[20px] w-[120px]`}
            >
              LOGIN
            </Link>
            <Link
              href="/trade/register"
              className={`bground py-2 px-4 rounded-[20px]`}
            >
              REGISTER
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
