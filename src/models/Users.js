import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    currency: {
      type: String,
    },
    country: {
      type: String,
    },
    mobilenumber: {
      type: String,
    },
    occupation: {
      type: String,
    },
    status: {
      type: String,
      default: "Awaiting",
    },
    image: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
    },
    datejoined: {
      type: String,
      default: Date.now(),
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// export default mongoose.model("User", userSchema);
export default mongoose.models.User || mongoose.model("User", userSchema);
