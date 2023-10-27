"use client";
import React, { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { CirclesWithBar, Vortex } from "react-loader-spinner";
import useSWR from "swr";
import UserTable from "@/components/UserTable";
import AdminSideBar from "@/components/AdminSideBar";
import AdminDesktopSideBar from "@/components/AdminDesktopSideBar";
import TransactionRecord from "@/components/TransactionRecord";
import { useRouter } from "next/navigation";
import WithdrawalCodeTable from "@/components/WithrawalCodeTable";
import { toast } from "react-toastify";

function generateRandomString() {
  const characters = process.env.NEXT_PUBLIC_RANDOMVALUE;
  let randomString = "";

  for (let i = 0; i < 9; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
}

const Dashboard = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [newCode, setNewCode] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const session = useSession();
  const router = useRouter();

  const {
    data: codes,
    error,
    mutate,
    isLoading,
  } = useSWR(`/api/manage/code`, fetcher);

  // console.log(users?.users);
  // console.log(codes);

  const generateCodeHandler = () => {
    // Call the function to generate a random string
    const randomString = generateRandomString();
    setNewCode(randomString);
  };

  const saveCodeHandler = async () => {
    try {
      const res = await fetch("/api/manage/code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
          code: newCode,
        }),
      });
      const data = await res.json();
      console.log(data);
      setNewCode("");
      setUserEmail("");

      toast(data.message, {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        window.location.reload();
      }, 3000);
      // res.status === 201 &&
      //   router.push("/trade/login?success=Account has been created");
    } catch (err) {
      // setErr(true);
      console.log(err);
    }
  };

  if (!codes) {
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

  if (session?.data?.user.email !== process.env.NEXT_PUBLIC_MAIL_CHECK) {
    router?.push("/trade");
  }

  // console.log(user.user[0].status);

  const showBar = () => {
    setShowSideBar(!showSideBar);
  };

  const hideBar = () => {
    setShowSideBar(false);
  };

  if (
    session.status === "authenticated" &&
    session?.data?.user.email === process.env.NEXT_PUBLIC_MAIL_CHECK
  ) {
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
            <h4 className="py-4">Generate Wthrawal Code</h4>
            {/* Status Card */}
            <div className="w-full">
              {/* <TradeviewSingleTicker /> */}
              <div className="h-[80vh] overflow-y-scroll">
                <div className="overflow-x-auto">
                  <div className="flex flex-col justify-between items-start pl-2 gap-4">
                    <div className="w-[3/4]">
                      <small>Email</small>
                      <input
                        type="email"
                        onChange={(e) => setUserEmail(e.target.value)}
                        value={userEmail}
                        placeholder="Enter user email"
                        required
                        className="overflow-hidden p-2 text-teal-900 outline-none bg-slate-300 rounded-[5px] w-full"
                      />
                    </div>

                    <div className="w-[3/4]">
                      <small>Code</small>
                      <input
                        type="text"
                        value={newCode}
                        disabled
                        className="overflow-hidden p-2 text-teal-900 outline-none bg-slate-300 rounded-[5px] w-full"
                      />
                    </div>

                    <div className="flex gap-3">
                      <button
                        className="bg-green-600 rounded-[5px] p-2 w-[100px] text-center"
                        onClick={() => generateCodeHandler()}
                      >
                        Generate
                      </button>

                      <button
                        className="bg-green-600 rounded-[5px] p-2 w-[100px] text-center"
                        onClick={() => saveCodeHandler()}
                      >
                        Save
                      </button>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <h4 className="mt-5">List of Generated Codes</h4>
                    <WithdrawalCodeTable codes={codes} />
                  </div>
                </div>
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
