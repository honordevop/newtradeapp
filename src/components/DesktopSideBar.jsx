import { links } from "@/utils/links";
import Link from "next/link";
import React from "react";

const DesktopSideBar = () => {
  return (
    <div
      className=" hidden top-[80px] left-0 md:flex bg-[#191f3a] h-[90vh] w-[300px] md:w-[400px]  justify-start overflow-hidden transition-all duration-3000 ease-in-out"
      //   style={showNav ? { height: "max-content" } : { height: "0px" }}
    >
      <div className="text-[20px] font-bold flex flex-col gap-8  justify-start p-5 cursor-pointer">
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
        </ul>
      </div>
    </div>
  );
};

export default DesktopSideBar;
