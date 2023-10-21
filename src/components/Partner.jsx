import React from "react";
import clientlogo1 from "public/clientlogo1.png";
import clientlogo2 from "public/clientlogo2.png";
import clientlogo3 from "public/clientlogo3.png";
import clientlogo4 from "public/clientlogo4.png";
import clientlogo5 from "public/clientlogo5.png";
import clientlogo6 from "public/clientlogo6.png";
import Image from "next/image";

const images = [
  {
    id: "1",
    img: clientlogo1,
  },
  {
    id: "2",
    img: clientlogo2,
  },
  {
    id: "3",
    img: clientlogo3,
  },
  {
    id: "4",
    img: clientlogo4,
  },
  {
    id: "5",
    img: clientlogo5,
  },
  {
    id: "6",
    img: clientlogo6,
  },
];

const Partner = () => {
  return (
    <div className="w-full flex flex-col mt-[60px]  px-[20px] md:px-[100px] items-center justify-center gap-10 pt-[60px]  lg:pt-[100px] bg-[#080b1f]">
      <div className="flex flex-col items-center justify-center">
        <p className="text-[#307ea1] font-normal  text-2xl ">PARTNER</p>
        <h1 className="font-bold text-[30px]">Our Clients</h1>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-4 ">
        {images.map((image) => (
          <div key={image.id} className="w-[300px] lg:w-[200px] h-max relative">
            <Image
              src={image.img}
              alt="client image"
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partner;
