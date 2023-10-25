import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Deposits from "@/models/Deposits";

export async function PATCH(request, { params }) {
  const { id } = params;
  // console.log(id);

  const { status, amount } = await request.json();

  //fetch
  try {
    await connect();

    await Deposits.findByIdAndUpdate(id, { status, amount });

    return NextResponse.json({ message: "Deposit Updated" }, { status: 201 });
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

    await Deposits.findByIdAndDelete(id);

    return NextResponse.json({ message: "Record deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Database Error" }, { status: 500 });
  }
};
