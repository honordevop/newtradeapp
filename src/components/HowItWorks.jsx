import React from "react";
import icona from "public/icona.png";
import iconb from "public/iconb.png";
import iconc from "public/iconc.png";
import Image from "next/image";

const data = [
  {
    id: "1",
    title: "Create Account",
    desc: "Creating an account is a free and painless process. Complete the registration form and get one step closer to earning.",
    img: icona,
  },
  {
    id: "2",
    title: "Create New Deposit",
    desc: "Continue to make deposits on a range of plans available on your account - as provided by the platform.",
    img: iconb,
  },
  {
    id: "3",
    title: "Start Earning",
    desc: "Start earning with a return on investment by the percentage of the plans you made investments on. You also earn referral bonuses and commissions",
    img: icona,
  },
];

const HowItWorks = () => {
  return (
    <div className="w-full flex flex-col md:flex-row  items-center px-[20px] md:px-[100px]  lg:px-[150px] justify-center pt-10">
      <div className=" w-full flex flex-1 items-center justify-center md:items-start flex-col gap-5">
        <h1 className="font-bold text-[35px]">How It Works</h1>
        <p className="text-[25px]">Three Easy Steps to Start Earning!!</p>
      </div>

      <div className="flex flex-1 items-center justify-center flex-wrap gap-10 pt-10">
        {data.map((d) => (
          <div
            key={d.id}
            className="w-[300px] bg-[#1a1c34] p-5 flex flex-col gap-5"
          >
            <Image src={d.img} alt="icon" />
            <h1 className="font-bold text-[30px]">{d.title}</h1>
            <p className="text-[20px] leading-loose">{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
