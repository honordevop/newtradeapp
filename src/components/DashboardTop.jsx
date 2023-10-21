import Link from "next/link";
import React from "react";
import {
  FaHome,
  FaArrowAltCircleDown,
  FaPowerOff,
  FaIdCard,
} from "react-icons/fa";
import TradeviewTickerWidget from "./TradeviewTickerWidget";
import { signOut } from "next-auth/react";

const DashboardTop = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 lg:flex-row lg:justify-between">
        <div className="flex gap-2 items-center">
          <FaHome /> <span>/ Dashboard /</span>
          <span className="text-[#ffc107]"> My Account</span>
        </div>
        <div className="flex gap-2">
          <Link
            href="/trade/deposit"
            className="bg-[#08c18d] flex items-center  justify-center gap-3 text-white text-[16px] w-max p-2 cursor-pointer rounded-[5px]"
          >
            <FaArrowAltCircleDown />
            DEPOSIT
          </Link>

          <Link
            href="/trade/account"
            className="bg-[#ffc107] flex items-center  justify-center gap-3 text-[#191f3a] text-[20px] w-max py-2 px-3 cursor-pointer rounded-[5px]"
          >
            <FaIdCard />
          </Link>

          <div
            onClick={signOut}
            className="bg-[#08c18d] flex items-center  justify-center gap-3 text-white text-[20px] w-max py-2 px-3 cursor-pointer rounded-[5px]"
          >
            <FaPowerOff />
          </div>
        </div>
      </div>
      <TradeviewTickerWidget />
    </div>
  );
};

export default DashboardTop;
