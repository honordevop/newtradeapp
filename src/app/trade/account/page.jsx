"use client";
import SideBar from "@/components/SideBar";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { links } from "@/utils/links";
import DesktopSideBar from "@/components/DesktopSideBar";
import DashboardTop from "@/components/DashboardTop";
import avartar from "public/avatar.png";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { CirclesWithBar } from "react-loader-spinner";
import useSWR from "swr";

const Account = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const session = useSession();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, mutate, isLoading } = useSWR(
    `/api/trades?email=${session?.data?.user.email}`,
    fetcher
  );

  const { data: user } = useSWR(
    `/api/users?email=${session?.data?.user.email}`,
    fetcher
  );
  // d = new Date(1697276999731)
  const details = {
    membership: data?.trades[0]?.plan,
    joinedDate: user?.user[0]?.datejoined,
    image: user?.user[0]?.image,
    email: user?.user[0]?.email,
  };

  // const d = details?.joinedDate;
  // console.log(user?.user[0]?.datejoined);
  // const joineddate = `${d.getUTCFullYear()}-${
  //   d.getUTCMonth() + 1
  // }-${d.getUTCDate()} ${d.getUTCHours()}:${d.getUTCMinutes()}:${d.getUTCSeconds()}`;
  // console.log(joineddate.toString());
  // console.log(data);

  // console.log(session);

  const profile = [
    {
      id: "1",
      title: "Last Login",
      value: new Date().toUTCString(),
    },
    {
      id: "2",
      title: "Capital",
      value: data?.trades[0]?.capital,
    },
    {
      id: "3",
      title: "Profit",
      value: data?.trades[0]?.profit,
    },
  ];

  const router = useRouter();
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

  if (session?.data?.user.email === process.env.NEXT_PUBLIC_MAIL_CHECK) {
    router?.push("/manage");
  }

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
        <div className="bg-[#0c1023] p-3 px-4 w-full">
          <DashboardTop />

          <div className="flex flex-col md:flex-row gap-5 w-full items-center justify-center h-max">
            <div className="w-full md:w-1/3 flex flex-col gap-3">
              <div className="bg-[#191f3a] flex flex-col items-center justify-center gap-3 rounded-3 py-4">
                <Image
                  src={details.image}
                  alt="avartar"
                  width={150}
                  height={150}
                  priority
                />
                <small className="text-gray-400">
                  {user?.user[0]?.fullname}
                </small>
                <small className="text-gray-400">
                  Membership: {details.membership}
                </small>
                <p>
                  Joined:{" "}
                  <span>
                    {/* {details?.joinedDate} */}
                    {new Date(details?.joinedDate).toUTCString()}
                  </span>
                </p>
              </div>

              <div className="bg-[#191f3a] flex flex-col items-start justify-center gap-1 rounded-3 p-4">
                <p className="font-bold text-[18px]">CONTACT</p>
                <div className="flex gap-4">
                  <p
                    className="font-bold bg-[#224249] h-10 w-10 text-[#08c18d] text-[20px] p-2 flex items-center justify-center"
                    style={{ borderRadius: "50%" }}
                  >
                    @
                  </p>
                  <div className="font-bold">
                    <p>Email</p>
                    <p className="text-gray-400 text-[12px]">{details.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-3/5 flex flex-col gap-4">
              <div className="bg-[#191f3a] rounded-3 flex items-center px-3 h-max cursor-pointer">
                <div className="flex items-center justify-center border-b-4 border-[#5965f9] text-[#5965f9] text-[20px] gap-2">
                  <p className="h-full my-3">Profile</p>
                </div>
              </div>
              <div className="bg-[#191f3a] rounded-3 flex flex-col p-3 gap-3">
                <div
                  style={{
                    borderBottom: "1px dashed #999",
                    paddingTop: "10px",
                  }}
                >
                  <p className=" text-gray-400"> Currency</p>
                </div>
                {profile.map((d) => (
                  <div key={d.id} style={{ borderBottom: "1px dashed #999" }}>
                    <p className=" text-gray-400">{d.title}</p>
                    <p className=" text-white font-bold text-[18px]">
                      {d.value}
                    </p>
                  </div>
                ))}
              </div>
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

export default Account;
