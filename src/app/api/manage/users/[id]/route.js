import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Trade from "@/models/Trade";
import Users from "@/models/Users";

export async function PATCH(request, { params }) {
  const { id } = params;

  const { status } = await request.json();

  //fetch
  try {
    await connect();

    await Users.findByIdAndUpdate(id, { status });

    return NextResponse.json(
      { message: "User Status Updated" },
      { status: 201 }
    );
  } catch (error) {
    // console.log(error);
    return NextResponse.json({ message: "Database Error" }, { status: 500 });
  }
}
