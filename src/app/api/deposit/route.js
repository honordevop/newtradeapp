import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Deposits from "@/models/Deposits";

export const GET = async (request) => {
  const url = new URL(request.url);

  const email = url.searchParams.get("email");

  //fetch
  try {
    await connect();

    if (email) {
      const deposits = (await Deposits.find(email && { email })).reverse();
      return new NextResponse(JSON.stringify(deposits), { status: 200 });
    } else {
      const deposits = await Deposits.find().reverse();
      return new NextResponse(JSON.stringify(deposits), { status: 200 });
    }
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  // const email = url.searchParams.get("email");

  const { amount, email } = await request.json();

  const newDeposit = new Deposits({
    amount,
    email,
  });

  //fetch
  try {
    await connect();

    await newDeposit.save();

    return NextResponse.json({ message: "Deposit submited" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Database Error" }, { status: 500 });
  }
};
