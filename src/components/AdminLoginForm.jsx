"use client";
import React, { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";

const AdminLoginForm = () => {
  const session = useSession();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState("password");

  const handleShowPassword = () => {
    setInputType("text");
    setShowPassword(true);
  };
  const handleHidePassword = () => {
    setInputType("password");
    setShowPassword(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password });
    router?.push("/manage");
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-[#12142C] font-bold text-[30px]">
          Login to your account
        </h1>
        <p className="text-black text-[20px]">
          Don't have an account? Sign Up Free!
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
            className=" py-3 outline-none text-[20px] bg-transparent border-b-2 border-gray-300 text-black"
            placeholder="Email address"
            required
          />
          <div className="relative">
            <input
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
          <button className="bg-[#12142C] w-full text-white p-2 cursor-pointer text-center rounded-[5px] flex items-center justify-center font-bold text-[25px]">
            Login
          </button>
          <button onClick={() => signIn("google")}>Login with Google</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginForm;
