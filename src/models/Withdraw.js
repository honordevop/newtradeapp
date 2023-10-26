import mongoose from "mongoose";

const { Schema } = mongoose;

const withdrawSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    walletaddress: {
      type: String,
      required: true,
    },
    method: {
      type: String,
    },
    code: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

//If the Post collection does not exist create a new one.
export default mongoose.models.Withdraw ||
  mongoose.model("Withdraw", withdrawSchema);
