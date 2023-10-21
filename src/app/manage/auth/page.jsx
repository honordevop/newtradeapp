"use client";
import React, { useState } from "react";
import backgroundImage from "public/bitcoinBackground.jpg";
import Image from "next/image";
import clientLogo from "public/clientlogo1.png";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { CirclesWithBar } from "react-loader-spinner";
import fibologo1 from "public/fibomining.PNG";
import AdminLoginForm from "@/components/AdminLoginForm";

const Auth = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  // console.log(showSignUp);
  const session = useSession();
  const router = useRouter();

  const handleShowSignUp = () => {
    setShowSignUp(true);
  };
  const handleHideSignUp = (value) => {
    setShowSignUp(value);
  };
  const backgroundImageUrl = backgroundImage.src;
  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    // You can add more CSS properties here to style your container
    width: "100%",
    height: "", // Adjust the height as needed
  };
  //   console.log(backgroundImageUrl);

  if (session.status === "loading") {
    return (
      <div className="absolute h-full w-full flex items-center justify-center">
        <CirclesWithBar
          height="100"
          width="100"
          color="#5965F9"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          outerCircleColor=""
          innerCircleColor=""
          barColor=""
          ariaLabel="circles-with-bar-loading"
        />
      </div>
    );
  }

  if (session.status === "authenticated") {
    router?.push("/manage");
  }

  return (
    <div
      style={containerStyle}
      className="flex flex-col items-center justify-center "
    >
      <div className="w-10/12 lg:w-max px-3 md:px-10 bg-white flex flex-col lg:flex-row rounded-md my-36 gap-4 md:gap-1">
        <div className=" w-full lg:w-[350px] text-black flex flex-col items-center justify-center gap-3 text-[20px] py-2 px-0 md:py-24">
          <Image src={fibologo1} alt="logo" width={100} height={100} />
          <div className="text-center pb-3">
            <p>The Fibomining Investment Platform.</p>
            <p>
              <span className="font-bold">INVEST</span> and Start
              <span className="font-bold">EARNING</span>
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center w-full">
            <Link
              href="/"
              className="bg-yellow-600 w-full text-white p-2 cursor-pointer text-center rounded-[5px] flex items-center justify-center gap-2"
            >
              <FaHome />
              Back To Homepage
            </Link>
          </div>
        </div>

        <div className="py-24 border-t-4 lg:border-t-0 lg:border-l-4 border-gray-300 ">
          <div className=" p-1 md:p-3 ">
            <AdminLoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
