"use client";
import { links } from "@/utils/adminlinks";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { FaPowerOff } from "react-icons/fa";

const AdminSideBar = ({ showSideBar, hideBar }) => {
  //   const [showSideBar, hideBar()State(false);

  //   const showBar = () => {
  //     hideBar()
  //   };

  return (
    <div
      className="absolute top-[80px] left-0 flex bg-[#191f3a] h-[90vh] w-[300px] md:w-[400px]  justify-start overflow-hidden transition-all duration-3000 ease-in-out"
      //   style={showNav ? { height: "max-content" } : { height: "0px" }}
    >
      <div className="text-[18px] md:text-[20px] font-bold flex flex-col gap-8  justify-start py-5 px-4 cursor-pointer">
        <ul className="flex flex-col gap-6 items-start justify-start text-[8E90A2] p-0">
          {links.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              onClick={() => hideBar()}
              className="hover:text-[#307ea1] flex  justify-center gap-3"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
          <div
            onClick={signOut}
            className="hover:text-[#307ea1] flex  justify-center gap-3"
          >
            <FaPowerOff />
            Sign Out
          </div>
        </ul>
      </div>
    </div>
  );
};

export default AdminSideBar;
