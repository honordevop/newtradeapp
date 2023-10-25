import { NextResponse } from "next/server";
import Post from "@/models/Trade";
import connect from "@/utils/db";
import Withdraw from "@/models/Withdraw";

export async function PATCH(request, { params }) {
  const { id } = params;

  const { status, amount } = await request.json();

  //fetch
  try {
    await connect();

    await Withdraw.findByIdAndUpdate(id, { status, amount });

    return NextResponse.json({ message: "Request Updated" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Database Error" }, { status: 500 });
  }
}

export const DELETE = async (request, { params }) => {
  //fetch
  const { id } = params;
  try {
    await connect();

    await Withdraw.findByIdAndDelete(id);

    return NextResponse.json({ message: "Data deleted" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Database Error" }, { status: 500 });
  }
};
