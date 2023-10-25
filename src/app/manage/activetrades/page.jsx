"use client";
import SideBar from "@/components/SideBar";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { CirclesWithBar, Vortex } from "react-loader-spinner";
import useSWR from "swr";
import AdminSideBar from "@/components/AdminSideBar";
import AdminDesktopSideBar from "@/components/AdminDesktopSideBar";
import TradesTable from "@/components/Trades";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const session = useSession();
  const router = useRouter();

  const {
    data: trades,
    error,
    mutate,
    isLoading,
  } = useSWR(`/api/manage/trades`, fetcher);

  // console.log(users?.users);
  // console.log(trades[0]);
  // console.log(trades?.allTrades);

  if (!trades) {
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

  // console.log(session);

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
    router?.push("/manage/login");
  }

  // console.log(user.user[0].status);

  const showBar = () => {
    setShowSideBar(!showSideBar);
  };

  const hideBar = () => {
    setShowSideBar(false);
  };

  if (session.status === "authenticated") {
    return (
      <div className="relative w-full bg-[#191f3a]">
        <div className="w-full h-[80px] md:h-[90px] flex  items-center px-[20px] md:px-[100px] lg:px-[150px]">
          <div className="w-0 md:w-[300px] h-full"></div>
          <div className=" w-full flex  items-center justify-between md:justify-end">
            {/* Mobile Sidebar Controller */}
            <div
              className={` flex flex-col gap-2 rounded-md bground p-4 cursor-pointer lg:hidden`}
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
        <div className="flex ">
          <AdminDesktopSideBar />
          <div className="bg-[#0c1023] h-max p-3 w-full">
            {/* <DashboardTop /> */}
            <h4 className="py-4">All Trades</h4>
            {/* Status Card */}
            <div className="w-full">
              {/* <TradeviewSingleTicker /> */}
              <div className="h-[80vh] overflow-y-scroll">
                <TradesTable records={trades?.allTrades || []} />
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Sidebar */}
        {showSideBar && (
          <div>
            <AdminSideBar showSideBar={showSideBar} hideBar={hideBar} />
          </div>
        )}
      </div>
    );
  }
};

export default Dashboard;
