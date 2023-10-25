import { links } from "@/utils/adminlinks";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { FaPowerOff } from "react-icons/fa";

const AdminDesktopSideBar = () => {
  return (
    <div
      className=" hidden top-[80px] left-0 lg:flex bg-[#191f3a] h-[90vh] w-[300px] md:w-[400px]  justify-start transition-all duration-3000 ease-in-out"
      //   style={showNav ? { height: "max-content" } : { height: "0px" }}
    >
      <div className="text-[20px] font-bold flex flex-col gap-8  justify-start px-2 py-5 cursor-pointer">
        <ul className="flex flex-col gap-6 items-start justify-start text-[8E90A2]">
          {links.map((link) => (
            <Link
              href={link.url}
              key={link.id}
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

export default AdminDesktopSideBar;
