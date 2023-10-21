"use client";
import SideBar from "@/components/SideBar";
import Link from "next/link";
import React, { useState } from "react";
import { links } from "@/utils/links";
import DesktopSideBar from "@/components/DesktopSideBar";
import DashboardTop from "@/components/DashboardTop";
import { FaMoneyBillAlt, FaBitcoin } from "react-icons/fa";
import qr from "public/qr.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { CirclesWithBar } from "react-loader-spinner";
import { toast } from "react-toastify";

const Deposit = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  // console.log(links);

  const router = useRouter();
  const session = useSession();
  if (session.status === "loading") {
    return (
      <div className="absolute h-[100vh] w-[100vw] flex items-center justify-center">
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

  if (session.status === "unauthenticated") {
    router?.push("/trade/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const amount = e.target[0].value;

    try {
      const res = await fetch("/api/deposit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          email: session?.data?.user.email,
        }),
      });
      const data = await res.json();
      // console.log(data);
      toast(data.message);
      e.target.reset();

      // res.status === 201 &&
      //   router.push("/trade/login?success=Account has been created");
    } catch (err) {
      // setErr(true);
      console.log(err);
    }
  };

  const showBar = () => {
    setShowSideBar(!showSideBar);
  };

  const hideBar = () => {
    setShowSideBar(false);
  };
  return (
    <div className="relative w-full bg-[#191f3a]">
      <div className="w-full h-[80px] md:h-[90px] flex  items-center px-[20px] md:px-[100px] lg:px-[150px]">
        <div className="w-0 md:w-[300px] h-full"></div>
        <div className=" w-full flex  items-center justify-between md:justify-end">
          {/* Mobile Sidebar Controller */}
          <div
            className={` flex flex-col gap-2 rounded-md bground p-4 cursor-pointer md:hidden`}
            onClick={() => showBar()}
          >
            <div className="w-[25px] h-[5px] bg-white"></div>
            <div className="w-[25px] h-[5px] bg-white"></div>
          </div>

          <div className="gap-2 md:gap-5 hidden lg:flex text-[20px] md:font-bold">
            <div className={`flex gap-5 cursor-pointer font-light`}>
              <div
                onClick={signOut}
                className={`bground py-2 px-4 rounded-[20px] w-max font-medium`}
              >
                Log Out
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="flex">
        <DesktopSideBar />
        <div className="bg-[#0c1023] h-max p-3 w-full">
          <DashboardTop />
          <div className="flex flex-col gap-4">
            <div className="flex-1 bg-[#ff5959] flex items-center justify-between py-1 px-2 md:p-3 lg:p-5 rounded-[5px] w-max gap-5">
              <div>
                <p className="text-[16px]">NET BALANCE</p>
                <h1 className="font-bold text-[20px]">0.00</h1>
              </div>
              <FaMoneyBillAlt className="text-[30px]" />
            </div>

            <div>
              <p className="bg-[#191f3a] p-2 text-[18px] font-bold">
                MAKE A DEPOSIT
              </p>
              <p className="flex items-center gap-3 text-[20px]">
                <FaBitcoin /> Pay with Bitcoin
              </p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <p className="bg-[#d8efcc] p-3 text-[#1f5c01] w-full">
                <span className="font-bold">STEP 1</span>- Send your deposit to
                the address below
              </p>
              <h1 className="">MAKE A DEPOSIT</h1>
              <p className="font-bold">Fibomining Oficial Wallet</p>
              <p className="p-3 bg-[#21263d]">
                admcauncapzodqjcmow7e6w6e38080c039493q
              </p>
              <p>Or scan the QR Code below</p>
              <Image src={qr} alt="qr code" />
            </div>

            <div>
              <p className="bg-[#d8efcc] p-3 text-[#1f5c01] w-full ">
                STEP 2 - Confirm deposit
              </p>
              <form
                action=""
                className="flex flex-col gap-3 bg-[#191f3a] p-5 rounded-[5px]"
                onSubmit={handleSubmit}
              >
                <p className="text-[20px] font-bold">CONFIRM YOUR DEPOSIT</p>
                <div className="flex flex-col gap-1">
                  <label>Method of Deposit</label>
                  <p className="p-3 bg-[#21263d]">Bitcoin</p>
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="">Amount</label>
                  <input
                    type="text"
                    className="bg-[#21263d] p-3 outline-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <button className="bg-[#5965F9] px-4 py-3 w-max rounded-[5px] cursor-pointer">
                    Confirm My Payment
                  </button>
                  <p>
                    <span>Note:</span>You will get a follow up mail on the
                    status on your deposit
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Sidebar */}
      {showSideBar && (
        <div>
          <SideBar showSideBar={showSideBar} hideBar={hideBar} />
        </div>
      )}
    </div>
  );
};

export default Deposit;
