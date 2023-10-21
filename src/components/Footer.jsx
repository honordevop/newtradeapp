import React from "react";

const Footer = () => {
  return (
    <div className="w-full py-10 flex flex-col gap-2 items-center justify-center text-[20px]">
      <p>Copyright © 2022 All Rights Reserved.</p>
      <div className="flex gap-3">
        <p className="hover:text-[#307ea1]">Privacy Policy</p>
        <p className="hover:text-[#307ea1]"> Terms & Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
