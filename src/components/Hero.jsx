import React from "react";
import heroImg from "public/home.jpg";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col lg:mt-[100px] lg:flex-row-reverse items-center justify-center gap-5 p-5 md:px-[100px] md:text-left lg:mx-[50px] ">
      <div className="flex-1">
        <Image src={heroImg} alt="hero image" />
      </div>

      <div className="flex-1 flex flex-col items-center md:items-start md:justify-start justify-center gap-6">
        <h1 className="font-bold text-[50px] leading-normal">
          <span className="text-[#307ea1]">Fibomining</span> <br />
          Build your future with Investments.
        </h1>
        <p className="text-[30px] font-bold leading-tight">
          Discover the power of earning in an increasing cryptocurrency
          ecosystem.
        </p>
        <p className="text-[20px]">
          Check Out The Benefits of Joining and Investing with Us!!
        </p>

        <div className={`flex gap-5 cursor-pointer font-light`}>
          <Link
            className={`bground py-4 px-4 rounded-[40px] w-[120px]`}
            href="/trade/login"
          >
            LOGIN
          </Link>
          <Link
            className={`bground1 py-4 px-4 rounded-[50px] w-[130px]`}
            href="/trade/register"
          >
            REGISTER
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
