import { NextResponse } from "next/server";
import Post from "@/models/Trade";
import connect from "@/utils/db";
import Withdraw from "@/models/Withdraw";

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

// export const PUT = async (request, { params }) => {
//   //fetch
//   const { id } = params;

//   const { email, amount, walletaddress, status } = await request.json();
//   try {
//     await connect();

//     await Withdraw.findByIdAndUpdate(id, {
//       email,
//       amount,
//       walletaddress,
//       status,
//     });

//     return new NextResponse.json({ message: "Trade updated" }, { status: 200 });
//   } catch (error) {
//     return new NextResponse("Database Error", { status: 500 });
//   }
// };
