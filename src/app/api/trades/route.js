import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Trade from "@/models/Trade";

export const GET = async (request) => {
  const url = new URL(request.url);

  const email = url.searchParams.get("email");

  //fetch
  try {
    await connect();

    if (email) {
      const trades = (await Trade.find(email && { email })).reverse();
      return NextResponse.json({ trades }, { status: 200 });
    } else {
      const trades = await Trade.find().reverse();
      return NextResponse.json({ trades }, { status: 200 });
    }
  } catch (error) {
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
