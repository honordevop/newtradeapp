"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const LoginCheck = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "authenticated") {
    router?.push("/trade");
  }
  return <div></div>;
};

export default LoginCheck;
