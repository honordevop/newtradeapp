import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Deposits from "@/models/Deposits";
// export const GET = async (request, { params }) => {
//   //fetch
//   const { id } = params;
//   try {
//     await connect();

//     const post = await Post.findById(id);

//     return new NextResponse(JSON.stringify(post), { status: 200 });
//   } catch (error) {
//     return new NextResponse("Database Error", { status: 500 });
//   }
// };

// export const PATCH = async (request, { params }) => {
//   // const email = url.searchParams.get("email");
//   const { id } = params;

//   const { status } = await request.json();

//   //fetch
//   try {
//     await connect();

//     await Deposits.findByIdAndUpdate(id, { status });

//     return NextResponse.json({ message: "Status Updated" }, { status: 201 });
//   } catch (error) {
//     return NextResponse.json({ message: "Database Error" }, { status: 500 });
//   }
// };
export async function PATCH(request, { params }) {
  const { id } = params;
  // console.log(id);

  const { status, amount } = await request.json();

  //fetch
  try {
    await connect();

    await Deposits.findByIdAndUpdate(id, { status, amount });

    return NextResponse.json({ message: "Status Updated" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Database Error" }, { status: 500 });
  }
}
