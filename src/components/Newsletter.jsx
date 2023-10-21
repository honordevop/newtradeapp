import Link from "next/link";
import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full flex flex-col py-[100px]  px-[20px] md:px-[100px] items-center justify-center gap-10 lg:px-[400px] lg:pt-[100px] bg-[#080b1f]">
      <div className="flex gap-5 w-full flex-col items-center justify-center relative">
        <h1 className="font-bold text-[30px]">Subscribe Our Newsletter</h1>
        <input
          type="text"
          className="newsletterInput w-full h-[80px] outline-none bg-transparent rounded-[50px] p-5 font-bold text-white text-[20px]"
          placeholder="Enter Email Address"
        />
        <Link
          href="#"
          className="bground px-10 py-6 rounded-[50px] text-white absolute right-1 bottom-1 font-bold"
        >
          SUBSCRIBE
        </Link>
      </div>
      <div className="flex flex-col items-center gap-5">
        <h1 className="font-bold text-[30px]">Quick Links</h1>
        <ul className="flex flex-wrap gap-6 items-center justify-center text-[8E90A2] text-xl">
          <Link href="/" className="hover:text-[#307ea1]">
            Homepage
          </Link>
          <Link href="/" className="hover:text-[#307ea1]">
            About Us
          </Link>
          <Link href="/" className="hover:text-[#307ea1]">
            Faq
          </Link>
          <Link href="/" className="hover:text-[#307ea1]">
            Register
          </Link>
          <Link href="/" className="hover:text-[#307ea1]">
            Contact Us
          </Link>
          <Link href="/" className="hover:text-[#307ea1]">
            Login
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Newsletter;
