"use client";
// import { useRouter } from "next/navigation";
// import React, { useState } from "react";
import { toast } from "react-toastify";

const Register = ({ showValue }) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [currency, setCurrency] = useState("");
  const [country, setCountry] = useState("");
  const [occupation, setOccupation] = useState("");
  const [password, setPassword] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  const router = useRouter();

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
      setFullname("");
      setEmail("");
      setMobilenumber("");
      setCountry("");
      setCurrency("");
      setOccupation("");
      setPassword("");
      // const data = await res.json();
      const data = await res.json();
      // console.log(data);
      toast(data.message);
      res.status === 201 &&
        router.push("/trade/login?success=Account has been created");
    } catch (err) {
      // setErr(true);
      console.log(err);
    }
  };

  const hideSignUp = () => {
    showValue(false);
  };
  //   console.log(showValue());
  return (
    <div className="h-[500px] overflow-scroll overflow-x-hidden">
      <div className="flex flex-col items-center justify-center gap-10  ">
        <div className="">
          <h3 className="text-[#E68600] text-[25px]">Sign up for free!</h3>
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
              required=""
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
              required=""
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
              required=""
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
              required=""
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
              required=""
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
              required=""
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
                required=""
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
            <input type="checkbox" style={{ float: "left" }} required="" />
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
        <div
          className="lnk-toggler cursor-pointer"
          data-panel=".panel-login"
          style={{ color: "#CC7700", fontWeight: "bolder" }}
          onClick={hideSignUp}
        >
          Already have an Account ?
        </div>
      </div>
    </div>
  );
};

export default Register;
