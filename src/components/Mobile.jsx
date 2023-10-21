import Link from "next/link";
import React, { useState } from "react";

const Mobile = () => {
  const [showNav, SetshowNav] = useState(true);
  return (
    <div
      className="absolute top-[80px] left-0 flex w-full bg-[#1a1c34] items-center justify-center overflow-hidden transition-all duration-3000 ease-in-out"
      style={showNav ? { height: "max-content" } : { height: "0px" }}
    >
      {!showNav && (
        <div
          className={` flex flex-col gap-2 rounded-md bground p-4 cursor-pointer md:hidden`}
          onClick={() => SetshowNav(!showNav)}
        >
          <div className="w-[25px] h-[5px] bg-white"></div>
          <div className="w-[25px] h-[5px] bg-white"></div>
        </div>
      )}
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
            href="/"
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
          <button className={`bground py-2 px-4 rounded-[20px] w-[120px]`}>
            LOGIN
          </button>
          <button className={`bground py-2 px-4 rounded-[20px]`}>
            REGISTER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
