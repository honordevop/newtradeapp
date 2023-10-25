import React from "react";
import { FaMoneyBillAlt, FaStar } from "react-icons/fa";

const StatusCard = ({ details }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="flex-1 bg-[#17a2b8] flex items-center justify-between py-1 px-2 md:p-3 lg:p-5 rounded-[5px]">
        <div>
          <p className="text-[16px]">CAPITAL</p>
          <h1 className="font-bold text-[20px]">{details.capital}</h1>
        </div>
        <FaMoneyBillAlt className="text-[30px]" />
      </div>
      <div className="flex-1 bg-[#5965f9] flex items-center justify-between py-1 px-2 md:p-3 lg:p-5 rounded-[5px]">
        <div>
          <p className="text-[16px]">PACKAGE</p>
          <h1 className="font-bold text-[25px]">{details.package}</h1>
        </div>
        <FaStar className="text-[30px]" />
      </div>
      <div className="flex-1 bg-[#37193a] flex items-center justify-between py-1 px-2 md:p-3 lg:p-5 rounded-[5px]">
        <div>
          <p className="text-[16px]">Profit</p>
          <h1 className="font-bold text-[25px]">{details.profit}</h1>
        </div>
        <FaMoneyBillAlt className="text-[30px]" />
      </div>
      <div className="flex-1 bg-[#191f3a] flex items-center justify-between py-1 px-2 md:p-3 lg:p-5 rounded-[5px]">
        <div>
          <p className="text-[16px]">NETBALANCE</p>
          <h1 className="font-bold text-[25px]">{details.netbalance}</h1>
        </div>
        <FaMoneyBillAlt className="text-[30px]" />
      </div>

      <div className="flex-1 bg-[#08c18d] flex items-center justify-between py-1 px-2 md:p-3 lg:p-5 rounded-[5px]">
        <div>
          <p className="text-[16px]">ACCOUNT STATUS</p>
          <h1 className="font-bold text-[25px]">{details.status}</h1>
        </div>
        <FaMoneyBillAlt className="text-[30px]" />
      </div>
    </div>
  );
};

export default StatusCard;
