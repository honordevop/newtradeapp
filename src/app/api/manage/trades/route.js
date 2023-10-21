import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Trade from "@/models/Trade";

export const GET = async (request) => {
  const url = new URL(request.url);

  // const email = url.searchParams.get("email");

  //fetch
  try {
    await connect();

    const allTrades = await Trade.find();
    return NextResponse.json({ allTrades }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Database Error" }, { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  const newTrade = new Trade(body);

  //fetch
  try {
    await connect();

    await newTrade.save();

    return new NextResponse("Trade has been created", { status: 201 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
