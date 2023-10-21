import React from "react";
import chart1 from "public/chart1.PNG";
import Image from "next/image";

const data = [
  {
    id: "1",
    name: "Anne Grant",
    amount: "$1500",
    color: "#FF7876",
  },
  {
    id: "2",
    name: "Benedict",
    amount: "$100",
    color: "#36FFAD",
  },
  {
    id: "3",
    name: "Brie Smith",
    amount: "$800",
    color: "#3B8A99",
  },
  {
    id: "4",
    name: "Nikkei",
    amount: "$12000",
    color: "#24c33f",
  },
  {
    id: "5",
    name: "Rodii",
    amount: "$2600",
    color: "#CC1667",
  },
];

const LatestDeposit = () => {
  return (
    <div className="w-full flex flex-col  px-[20px] md:px-[100px] items-center justify-center gap-10 lg:px-[150px] pt-20">
      {/* <div>
        <marquee width="60%" direction="up" height="100px">
          This is a sample scrolling text that has scrolls in the upper
          direction.
        </marquee>
      </div> */}
      <h1 className="text-[35px] font-bold">Latest Deposits</h1>
      <div className="w-full flex flex-col  lg:flex-row gap-20 items-center justify-between ">
        <div className="w-full h-full flex-1 flex items-center justify-center">
          <Image src={chart1} alt="chart image" className="object-cover" />
          {/* <DepositChart /> */}
        </div>
        <div className="flex-1 w-full">
          <marquee width="100%" direction="up" height="30%">
            <div className="w-full">
              <ul className="flex flex-col gap-5 ">
                {data.map((d) => (
                  <li
                    key={d.id}
                    className={`bg-[#1a1c34] flex items-center justify-between p-2 w-full border-l-4 border-[${d.color}] font-bold text-[20px]`}
                  >
                    <p>{d.name}</p>
                    <p> {d.amount} </p>
                  </li>
                ))}
              </ul>
            </div>
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default LatestDeposit;
