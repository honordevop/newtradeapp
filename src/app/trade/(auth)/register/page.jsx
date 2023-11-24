"use client";
import React, { useState } from "react";
import backgroundImage from "public/bitcoinBackground.jpg";
import Image from "next/image";
import clientLogo from "public/fibomining.PNG";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { CirclesWithBar } from "react-loader-spinner";
import { toast } from "react-toastify";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [currency, setCurrency] = useState("");
  const [country, setCountry] = useState("");
  const [occupation, setOccupation] = useState("");
  const [password, setPassword] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  const [error, setError] = useState("");

  const session = useSession();
  const router = useRouter();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const fullname = e.target[0].value;
    // const email = e.target[1].value;
    // const mobilenumber = e.target[2].value;
    // const country = e.target[3].value;
    // const currency = e.target[4].value;
    // const occupation = e.target[5].value;
    // const password = e.target[6].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          email,
          mobilenumber,
          country,
          currency,
          occupation,
          password,
        }),
      });
      // setFullname("");
      // setEmail("");
      // setMobilenumber("");
      // setCountry("");
      // setCurrency("");
      // setOccupation("");
      // setPassword("");
      // const data = await res.json();
      const data = await res.json();
      // console.log(data);
      setError(data.message);
      setTimeout(() => {
        setError("");
      }, 5000);
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
      res.status === 201 &&
        router.push("/trade/login?success=Account has been created");
    } catch (err) {
      // setErr(true);
      console.log(err);
    }
  };

  return (
    <div
      style={containerStyle}
      className="flex flex-col items-center justify-center "
    >
      <div className="w-10/12 lg:w-max px-3 md:px-10 bg-white flex flex-col lg:flex-row rounded-md my-36 gap-4 md:gap-1">
        <div className=" w-full lg:w-[350px] text-black flex flex-col items-center justify-center gap-3 text-[20px] py-2 px-0 md:py-24">
          <Image src={clientLogo} alt="logo" width={100} height={100} />
          <div className="text-center pb-3">
            <p>The Locoons-Trade Investment Platform.</p>
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
              href="/trade/login"
              className="bg-yellow-600 w-full p-2 cursor-pointer rounded-[5px] flex items-center font-bold justify-center text-white"
            >
              Login
            </Link>
          </div>
        </div>

        <div className="py-24 border-t-4 lg:border-t-0 lg:border-l-4 border-gray-300 ">
          <div className=" p-1 md:p-3 ">
            <div className="h-[500px] overflow-scroll overflow-x-hidden">
              <div className="flex flex-col items-center justify-center gap-10  ">
                <div className="">
                  <h3 className="text-[#E68600] text-[25px]">
                    Sign up for free!
                  </h3>
                </div>
                <form
                  name="signupForm"
                  className="flex flex-col gap-3 w-full"
                  action=""
                  onSubmit={handleSubmit}
                >
                  <div className="form-group wrap-input">
                    <input
                      type="text"
                      className="form-control"
                      name="fullname"
                      onChange={(e) => setFullname(e.target.value)}
                      value={fullname}
                      required
                      placeholder="Full name"
                    />
                  </div>
                  <div className="form-group wrap-input">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                      placeholder="Email address"
                    />
                  </div>
                  <span style={{ color: "red" }}> </span>
                  <div className="form-group wrap-input">
                    <input
                      type="number"
                      onChange={(e) => setMobilenumber(e.target.value)}
                      value={mobilenumber}
                      className="form-control"
                      name="mobile"
                      required
                      placeholder="Mobile Number"
                    />
                  </div>

                  <div className="form-group wrap-input">
                    <input
                      type="text"
                      className="form-control"
                      name="country"
                      onChange={(e) => setCountry(e.target.value)}
                      value={country}
                      required
                      placeholder="Country"
                    />
                  </div>

                  <div className="form-group wrap-input">
                    <input
                      type="text"
                      className="form-control"
                      name="currency"
                      onChange={(e) => setCurrency(e.target.value)}
                      value={currency}
                      required
                      placeholder="Currency"
                    />
                  </div>

                  <div className="form-group wrap-input">
                    <input
                      type="text"
                      className="form-control"
                      name="occupation"
                      onChange={(e) => setOccupation(e.target.value)}
                      value={occupation}
                      required
                      placeholder="Occupation"
                      // style={{ color: "red" }}
                    />
                  </div>

                  <div className="form-group wrap-input">
                    <div className="pwdMask">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                        placeholder="Password"
                        autoComplete="on"
                      />
                      <span className="focus-input"></span>
                      <span className="fa fa-eye-slash pwd-toggle"></span>
                    </div>
                  </div>
                  {/* <div className="form-group wrap-input">
            <div className="pwdMask">
              <input
                type="password"
                className="form-control"
                name="cpw"
                required=""
                placeholder="Confirm Password"
              />
              <span className="focus-input"></span>
              <span className="fa fa-eye-slash pwd-toggle"></span>
            </div>
            <span style={{ color: "red" }}> </span>
          </div> */}
                  <div className="form-group">
                    <input
                      type="checkbox"
                      style={{ float: "left" }}
                      required=""
                    />
                    <p className="term-policy text-muted small">
                      I agree to the{" "}
                      <a href="#" style={{ color: "#CC7700" }}>
                        privacy policy
                      </a>{" "}
                      and{" "}
                      <a href="#" style={{ color: "#CC7700" }}>
                        terms of service
                      </a>
                      .
                    </p>
                  </div>
                  <p className="text-[12px] md:text-[14px] font-bold text-red-600">
                    {error}
                  </p>
                  <div className="form-group">
                    <button
                      name="register-me"
                      style={{ backgroundColor: "#CC7700", border: "none" }}
                      className="btn btn-lg btn-primary btn-block"
                      type="submit"
                    >
                      Sign Up Now
                    </button>
                  </div>
                </form>
                <Link
                  href="/trade/login"
                  className="lnk-toggler cursor-pointer"
                  data-panel=".panel-login"
                  style={{ color: "#CC7700", fontWeight: "bolder" }}
                >
                  Already have an Account ?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
