import mongoose, { Schema,model } from "mongoose";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: String,
    profilePicId:String,
    covPicId:[],
    coverPic: [],
    address: String,
    age: {
      type: Number,
    },
    gender: {
      type: String,
      default: "male",
      enum: ["male", "female"],
    },
    phone: {
      type: String,
    },
    confirmEmail: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      default: "offline",
      enum: ["online", "offline", "blocked"],
    },
    role: {
      type: String,
      default: "User",
      enum: ["User", "Admin"],
    },
  },
  { timestamps: true }
)

const userModel =mongoose.models.User || model( "User",userSchema)
export default userModel