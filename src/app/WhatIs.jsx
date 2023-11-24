import React from "react";
import aboutImg from "public/aboutimg3.png";
import Image from "next/image";

const WhatIs = () => {
  // console.log(process.env.NEXTAUTH_CSRF_SIGNING_KEY);
  return (
    <div className="w-full flex flex-col  px-[20px] md:px-[100px] items-center justify-center gap-20 lg:flex-row lg:px-[150px] pt-10">
      <div className="flex flex-1 flex-col gap-10">
        <div>
          <p className="text-[#307ea1] text-2xl font-medium py-4">
            WHAT IS Locoons-Trade
          </p>
          <h1 className="font-bold text-3xl">About Locoons-Trade</h1>
        </div>
        <div>
          <p className="text-[22px] leading-loose text-justify lg:leading-normal">
            Built on integrity and transparency, Locoons-Trade is an online
            investment platform focused on cryptocurrency and forex trading
            (currency pairs). Cryptocurrency and forex trading presents you with
            financial opportunities, more than you can imagine and we've created
            a platform to help you realize that imagination. We provide you with
            top-rated investment opportunity in cryptocurrency and forex trading
            that is made possible by our highly skilled analysts and traders. We
            are confident in our ability to deliver as we have promised. There
            are no risks involved as we properly and meticulously analyze our
            investments and ensure that they yield profit, which for our
            customers, means, there are no risks for you. We keep a secure, safe
            and stable trading environment that is implemented to guard against
            losses and provide a soothing and easy-going evironment for our
            customers.
          </p>
        </div>
        <div className="text-[22px] leading-loose text-justify lg:leading-normal bg-black rounded-lg text-[#a3ccd9] p-5">
          <p>
            At Locoons-Trade, We provide an all-round, easy to use, risk-free
            investment platform that increases your earning potential. Join the
            platform to discover the power of earning in an increasing
            cryptocurrency ecosystem.
          </p>
        </div>

        <div>
          <button className="bground py-5 px-8 rounded-[50px] text-[18px] font-medium">
            ABOUT US
          </button>
        </div>
      </div>

      <div className="flex-1 w-full h-full relative">
        <Image
          src={aboutImg}
          alt="icon"
          className="w-full h-full"
          about="sample image"
        />
      </div>
    </div>
  );
};

export default WhatIs;
