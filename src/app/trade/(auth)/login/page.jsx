"use client";
import React, { useState } from "react";
import backgroundImage from "public/bitcoinBackground.jpg";
import Image from "next/image";
import clientLogo from "public/fibomining.PNG";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
// import Login from "@/components/Login";
import Register from "@/components/Register";
import { useRouter } from "next/navigation";
import { Circles, CirclesWithBar } from "react-loader-spinner";
import { signIn, useSession } from "next-auth/react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const Login = () => {
  // const [showSignUp, setShowSignUp] = useState(false);
  // console.log(showSignUp);
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const session = useSession();
  const router = useRouter();

  const handleShowPassword = () => {
    setInputType("text");
    setShowPassword(true);
  };
  const handleHidePassword = () => {
    setInputType("password");
    setShowPassword(false);
  };

  const handleSubmit = async (e) => {
    setSubmitting(true);
    e.preventDefault();
    // const email = e.target[0].value;
    // const password = e.target[1].value;
    // console.log(email);
    // console.log(password);

    const res = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });
    // console.log(res);
    setSubmitting(false);
    setError(res.error);
    toast(res.error, {
      position: "top-right",
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    // console.log(res.error);
    // router?.push("/trade");
  };

  // const handleShowSignUp = () => {
  //   setShowSignUp(true);
  // };
  // const handleHideSignUp = (value) => {
  //   setShowSignUp(value);
  // };
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
    router?.push("/trade");
  }

  if (session?.data?.user.email === process.env.NEXT_PUBLIC_MAIL_CHECK) {
    router?.push("/manage");
  }

  return (
    <div
      style={containerStyle}
      className="flex flex-col items-center justify-center "
    >
      <div className="w-10/12 lg:w-max px-3 md:px-10 bg-white flex flex-col lg:flex-row rounded-md my-36 gap-4 md:gap-1">
        <div className=" w-full lg:w-[350px] text-black flex flex-col items-center justify-center gap-3 text-[20px] py-2 px-0 md:py-24">
          <Image src={clientLogo} alt="logo" width={100} height={100} />
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
            <Link
              className="bg-yellow-600 w-full p-2 cursor-pointer rounded-[5px] flex items-center font-bold justify-center text-white"
              href="/trade/register"
            >
              Register Now
            </Link>
          </div>
        </div>

        <div className="py-24 border-t-4 lg:border-t-0 lg:border-l-4 border-gray-300 ">
          <div className=" p-1 md:p-3 ">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="text-[#12142C] font-bold text-[30px]">
                  Login to your account
                </h1>
                <p className="text-black text-[20px]">
                  Don't have an account? Click Register Now!
                </p>
              </div>
              <div>
                <form
                  action=""
                  className="flex flex-col gap-10"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className=" py-3 outline-none text-[20px] bg-transparent border-b-2 border-gray-300 text-black"
                    placeholder="Email address"
                    required
                  />
                  <div className="relative">
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type={inputType}
                      className=" py-3 outline-none text-[20px] bg-transparent border-b-2 border-gray-300 text-black w-full"
                      placeholder="Password"
                      autoComplete="on"
                      required
                    />
                    {!showPassword ? (
                      <FaEyeSlash
                        className="text-gray-300 text-[20px] absolute top-7 right-5 cursor-pointer"
                        onClick={handleShowPassword}
                      />
                    ) : (
                      <FaEye
                        className="text-gray-300 text-[20px] absolute top-7 right-5 cursor-pointer"
                        onClick={handleHidePassword}
                      />
                    )}
                  </div>
                  <p className="text-[12px] font-bold text-red-600">{error}</p>
                  <div>
                    {!submitting ? (
                      <input
                        type="submit"
                        value="Login"
                        className="bg-[#12142C] w-full text-white p-2 cursor-pointer text-center rounded-[5px] flex items-center justify-center font-bold text-[25px]"
                      />
                    ) : (
                      <div className="w-full cursor-pointer flex items-center justify-center ">
                        <Circles
                          height="50"
                          width="50"
                          color="#12142C"
                          ariaLabel="circles-loading"
                          wrapperStyle={{}}
                          wrapperClass=""
                          visible={true}
                        />
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
