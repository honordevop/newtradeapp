import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Withdraw from "@/models/Withdraw";
import Code from "@/models/Code";

export const POST = async (request) => {
  //fetch
  const { email, code } = await request.json();

  try {
    await connect();

    // Find a Code document with the given email and secretNumber
    const available = await Code.findOne({ email, code });

    if (available) {
      // User with the provided email and secretNumber exists
      return NextResponse.json({ message: "Code Verified" }, { status: 200 });
    } else {
      // User not found or secretNumber doesn't match
      return NextResponse.json(
        { message: "Invalid Withdrawal Code, Contact Admin" },
        { status: 404 }
      );
    }
  } catch (error) {
    return NextResponse.json({ message: "Database Error" }, { status: 500 });
  }
};
