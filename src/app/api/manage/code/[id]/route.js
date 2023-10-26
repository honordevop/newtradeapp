import Code from "@/models/Code";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
  //fetch
  const { id } = params;
  try {
    await connect();

    await Code.findByIdAndDelete(id);

    return NextResponse.json({ message: "Code deleted" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Database Error" }, { status: 500 });
  }
};
