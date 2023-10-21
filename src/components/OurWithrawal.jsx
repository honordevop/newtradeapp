import React from "react";
import chart2 from "public/chart2.PNG";
import Image from "next/image";

const data = [
  {
    id: "1",
    name: "Wiiliams Rose",
    amount: "$16500",
    color: "#FF7876",
  },
  {
    id: "2",
    name: "Alicia",
    amount: "$90000",
    color: "#36FFAD",
  },
  {
    id: "3",
    name: "Barnes",
    amount: "$56800",
    color: "#3B8A99",
  },
  {
    id: "4",
    name: "Rachael",
    amount: "$12000",
    color: "#24c33f",
  },
  {
    id: "5",
    name: "Mary Greyson",
    amount: "$82600",
    color: "#CC1667",
  },
  {
    id: "6",
    name: "Richard Melvin",
    amount: "$22000",
    color: "#FF7575",
  },
  {
    id: "7",
    name: "Jake456",
    amount: "$9000",
    color: "#8675FF",
  },
  {
    id: "8",
    name: "James Anderso",
    amount: "$500",
    color: "#FF75A3",
  },
  {
    id: "9",
    name: "Rich Armando",
    amount: "$300",
    color: "#55011D",
  },
  {
    id: "10",
    name: "Paul Jackson",
    amount: "$67000",
    color: "#A6A5DB",
  },
  {
    id: "11",
    name: "Graham342",
    amount: "$12050",
    color: "#13AFCC",
  },
  {
    id: "12",
    name: "Mike Peters",
    amount: "$12800",
    color: "#FF7876",
  },
];

const OurWithrawal = () => {
  return (
    <div className="w-full flex flex-col  px-[20px] md:px-[100px] items-center justify-center gap-10 lg:px-[150px] pt-20">
      <h1 className="text-[35px] font-bold">Our Withdrawal</h1>
      <div className="w-full flex flex-col  lg:flex-row gap-20 items-center justify-between ">
        <div className="w-full flex items-center justify-center">
          <Image src={chart2} alt="chart image" className="object-cover" />
          {/* <DepositChart /> */}
        </div>
        <div className="w-full overflow-hidden h-[400px]">
          <marquee width="100%" direction="up" height="90%" className="">
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

export default OurWithrawal;
