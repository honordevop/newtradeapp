"use client";
import SideBar from "@/components/SideBar";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import { links } from "@/utils/links";
import DesktopSideBar from "@/components/DesktopSideBar";
import DashboardTop from "@/components/DashboardTop";
import { FaMoneyBillAlt, FaBitcoin } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { Circles, CirclesWithBar } from "react-loader-spinner";
import { toast } from "react-toastify";
import useSWR from "swr";

const Withdrawal = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [toastData, setToastData] = useState("");
  const [withdrawalCode, setWithdrawalCode] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const router = useRouter();
  const session = useSession();

  const { data, error, mutate, isLoading } = useSWR(
    `/api/trades?email=${session?.data?.user.email}`,
    fetcher
  );

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

  const verifyWithdrawalCodeForUser = async () => {
    setSubmitting(true);
    // const withdrawalCode = e.target[2].value;
    try {
      const res = await fetch("/api/manage/verifycode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: session?.data?.user.email,
          code: withdrawalCode,
        }),
      });
      const data = await res.json();
      // console.log(data);
      // console.log(res.status);

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
      if (res.status === 404) {
        setSubmitting(false);
      }
      return res.status;
    } catch (err) {
      // setErr(true);
      console.log(err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = e.target[0].value;
    const amount = e.target[1].value;
    // const code = e.target[2].value;
    const walletaddress = e.target[3].value;

    const codeVerify = await verifyWithdrawalCodeForUser();
    // console.log(codeVerify);

    if (codeVerify === 200) {
      try {
        const res = await fetch("/api/withdraw", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            method,
            amount,
            code: withdrawalCode,
            walletaddress,
            email: session?.data?.user.email,
          }),
        });
        const data = await res.json();
        // console.log(data);
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

        e.target.reset();
        setSubmitting(false);
        // res.status === 201 &&
        //   router.push("/trade/login?success=Account has been created");
      } catch (err) {
        setSubmitting(false);
        console.log(err);
      }
    } else {
      toast("Withdrawal request failed", {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
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
            <div className="flex-1 bg-[#ff5959] flex items-center justify-between py-1 px-2 md:p-3 lg:p-5 rounded-[5px] w-max gap-5 mt-4">
              <div>
                <p className="text-[16px]">NET BALANCE</p>
                <h1 className="font-bold text-[20px]">
                  {data?.trades[0]?.netbalance}
                </h1>
              </div>
              <FaMoneyBillAlt className="text-[30px]" />
            </div>

            <div className="flex flex-col items-start justify-center gap-3 mt-3">
              <p className="bg-[#191f3a] p-2 text-[18px] font-bold w-full">
                MAKE A WITHDRAWAL
              </p>
              <p className="flex items-center gap-3 text-[20px]">
                <FaBitcoin /> Receive in Cryptocurrencies
              </p>
            </div>

            <div>
              <form
                action=""
                className="flex flex-col gap-3"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col gap-1">
                  <label htmlFor="">Method</label>
                  <input
                    type="text"
                    placeholder="Enter payment method"
                    required
                    className="bg-[#21263d] p-3 outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="">Amount</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter amount"
                    className="bg-[#21263d] p-3 outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="">Withdrawal Code</label>
                  <input
                    type="text"
                    onChange={(e) => setWithdrawalCode(e.target.value)}
                    required
                    placeholder="Get withrawal code from admin"
                    className="bg-[#21263d] p-3 outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="">Your Wallet Address</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter wallet address"
                    className="bg-[#21263d] p-3 outline-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  {!submitting ? (
                    <button className="bg-[#5965F9] px-4 py-3 w-max rounded-[5px] cursor-pointer mb-1">
                      Submit
                    </button>
                  ) : (
                    <Circles
                      height="60"
                      width="60"
                      color="#5965F9"
                      ariaLabel="circles-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                    />
                  )}
                  <p>
                    <span>Note:</span>You will get a follow up mail on the
                    status on your withdrawal
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

export default Withdrawal;
