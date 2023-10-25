import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Trade from "@/models/Trade";

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

export async function PATCH(request, { params }) {
  const { id } = params;

  const { plan, profit, capital, netbalance } = await request.json();

  //fetch
  try {
    await connect();

    await Trade.findByIdAndUpdate(id, { plan, profit, capital, netbalance });

    return NextResponse.json({ message: "Trade Updated" }, { status: 201 });
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

    await Trade.findByIdAndDelete(id);

    return NextResponse.json({ message: "Trade deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Database Error" }, { status: 500 });
  }
};
