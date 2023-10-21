"use client";
import { signIn } from "next-auth/react";
import React from "react";

const Btn = () => {
  return (
    <div>
      <button
        onClick={() => {
          signIn();
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Btn;
