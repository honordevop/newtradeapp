import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Withdraw from "@/models/Withdraw";
import Code from "@/models/Code";

export const GET = async (request) => {
  // const url = new URL(request.url);

  // const email = url.searchParams.get("email");

  //fetch
  try {
    await connect();

    const codes = await Code.find();
    return new NextResponse(JSON.stringify(codes), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  // const email = url.searchParams.get("email");

  const { email, code } = await request.json();

  const generateCode = new Code({
    email,
    code,
  });

  //fetch
  try {
    await connect();

    await generateCode.save();

    return NextResponse.json(
      { message: "Code Generated Sucessfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Database Error" }, { status: 500 });
  }
};
