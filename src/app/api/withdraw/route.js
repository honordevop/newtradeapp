import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Withdraw from "@/models/Withdraw";

export const GET = async (request) => {
  const url = new URL(request.url);

  const email = url.searchParams.get("email");

  //fetch
  try {
    await connect();

    if (email) {
      const withdrawals = (await Withdraw.find(email && { email })).reverse();
      return new NextResponse(JSON.stringify(withdrawals), { status: 200 });
    } else {
      const withdrawals = await Withdraw.find().reverse();
      return new NextResponse(JSON.stringify(withdrawals), { status: 200 });
    }
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  // const email = url.searchParams.get("email");

  const { amount, walletaddress, email } = await request.json();

  const withdrawRequest = new Withdraw({
    amount,
    walletaddress,
    email,
  });

  //fetch
  try {
    await connect();

    await withdrawRequest.save();

    return NextResponse.json(
      { message: "Withdrawal request submited" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Database Error" }, { status: 500 });
  }
};
