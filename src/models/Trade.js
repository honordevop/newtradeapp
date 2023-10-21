import mongoose from "mongoose";

const { Schema } = mongoose;

const tradeSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    plan: {
      type: String,
      default: "Basic",
    },
    capital: {
      type: String,
      default: "0.00",
    },
    profit: {
      type: String,
      default: "0.00",
    },
    netbalance: {
      type: String,
      default: "0.00",
    },
  },
  { timestamps: true }
);

//If the Post collection does not exist create a new one.
export default mongoose.models.Trade || mongoose.model("Trade", tradeSchema);
