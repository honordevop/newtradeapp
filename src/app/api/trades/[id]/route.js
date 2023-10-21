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

export const PUT = async (request, { params }) => {
  //fetch
  const { id } = params;

  const { plan, email, capital, profit, netbalance } = await request.json();
  try {
    await connect();

    await Trade.findByIdAndUpdate(id, {
      plan,
      email,
      capital,
      profit,
      netbalance,
    });

    return NextResponse.json(
      { message: "Trade updated" },
      {
        status: 200,
      }
    );
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
