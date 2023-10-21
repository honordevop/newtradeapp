import Users from "@/models/Users";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import Trade from "@/models/Trade";

export const POST = async (request) => {
  const {
    fullname,
    email,
    password,
    country,
    currency,
    occupation,
    mobilenumber,
  } = await request.json();

  await connect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new Users({
    fullname,
    email,
    currency,
    country,
    occupation,
    mobilenumber,
    password: hashedPassword,
  });

  const initializeTrade = new Trade({
    email,
  });

  try {
    await initializeTrade.save();
    await newUser.save();
    return NextResponse.json({ message: "Account created" }, { status: 201 });
  } catch (err) {
    return new NextResponse(err.message, { status: 500 });
  }
};

export const GET = async (request) => {
  const url = new URL(request.url);

  //fetch
  try {
    await connect();

    const users = await Users.find();

    // (username && { username }))
    // .reverse()
    // .slice(0, 4);

    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
