import Link from "next/link";
import React from "react";

const ContactPage = () => {
  return (
    <div className="w-full flex flex-col mt-[10px]  px-[20px] md:px-[100px] items-center justify-center gap-10 lg:px-[400px] lg:pt-[100px]">
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <p className="font-bold  text-[40px] ">Contact</p>
        <h1 className="font-bold text-[18px]">Home / Contact</h1>
      </div>
      <div className="flex flex-col gap-5 items-center justify-center">
        <h1 className="font-bold text-[50px]">Contact Locoons-Trade</h1>
        <p className="text-[22px] leading-normal text-center">
          Domain and all rights belong to: <br />
          Locoons-Trade <br />
          Registration No. TX0089 <br />
          Payment transactions are managed by: <br />
          Locoons-Trade PAYMENT <br />
          Registration No. R3400 <br />
          support@Locoons-Trade.org <br />
          ADDRESS: 23 Osborne Road KILTON TS13 4AE United States
        </p>
      </div>

      <div className="w-full text-[#7a7a7a] text-[20px] mt-10">
        <p className="pb-8 text-[25px] font-bold">CONTACT US NOW</p>
        <p>Contact us by filling out the form below.</p>
        <form action="" className="flex flex-col">
          {/* FistName */}
          <div className="flex flex-col">
            <label htmlFor="firstname" className="py-2">
              Frist Name*
            </label>
            <input
              id="firstname"
              type="text"
              className="bg-transparent border-b-2 border-gray-500 outline-none text-white py-3"
            />
          </div>
          {/* Last Name */}
          <div className="flex flex-col">
            <label htmlFor="lastname" className="py-2">
              Last Name*
            </label>
            <input
              id="lastname"
              type="text"
              className="bg-transparent border-b-2 border-gray-500 outline-none text-white py-3"
            />
          </div>
          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="py-2">
              Email*
            </label>
            <input
              id="email"
              type="text"
              className="bg-transparent border-b-2 border-gray-500 outline-none text-white py-3"
            />
          </div>
          {/* Message */}
          <div className="flex flex-col">
            <label htmlFor="message" className="py-2">
              Message*
            </label>
            <textarea
              name=""
              id="message"
              cols="30"
              rows="5"
              className="bg-transparent border-b-2 border-gray-500 outline-none text-white py-3 resize-none"
            ></textarea>
          </div>
          <div className="my-20 text-white ">
            <Link href="#" className="bground px-10 py-6 rounded-[50px]">
              Send
            </Link>
          </div>
        </form>
      </div>

      <div className="flex flex-col items-start justify-center text-xl my-10 border-l-2 border-white pl-3">
        <p className="text-[#307ea1] font-normal   ">Email</p>
        <h1 className="font-bold ">admin@locoonstrade.org</h1>
      </div>
    </div>
  );
};

export default ContactPage;
