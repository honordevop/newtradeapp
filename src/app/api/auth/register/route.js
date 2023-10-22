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
    const user = await Users.findOne({
      email: email,
    });
    if (user) {
      return NextResponse.json(
        { message: "Account already exist" },
        { status: 500 }
      );
    }
    await newUser.save();
    await initializeTrade.save();
    return NextResponse.json({ message: "Account Created" }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ err }, { status: 500 });
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
