import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Users from "@/models/Users";
import bcrypt from "bcryptjs";

export const GET = async (request) => {
  const url = new URL(request.url);

  const email = url.searchParams.get("email");

  //fetch
  try {
    await connect();

    const user = (await Users.find(email && { email })).reverse();
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Database Error" }, { status: 500 });
  }
};

export const PATCH = async (request) => {
  const { email, password } = await request.json();

  const hashedPassword = await bcrypt.hash(password, 5);

  const user = await Users.findOne({ email });

  // console.log(user.password);
  //fetch
  if (user) {
    try {
      await connect();

      const hashedPassword = await bcrypt.hash(password, 5);
      await Users.findOneAndUpdate(
        { email: email },
        { password: hashedPassword }
      );

      return NextResponse.json(
        { message: "Password Changes succesfully" },
        { status: 201 }
      );
    } catch (error) {
      return NextResponse.json({ message: "Database Error" }, { status: 500 });
    }
  } else {
    return new NextResponse("User not found", { status: 404 });
  }
};
