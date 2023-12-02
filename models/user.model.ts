import { IUserDoc } from "@/interfaces/user.interface";
import formatDocument from "@/lib/formatDocument";
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema<IUserDoc>(
  {
    name: {
      type: String,
      trim: true,
      index: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    birthdate: {
      type: Date,
      required: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
      select: false,
    },
    profileImages: {
      profilePicture: {
        type: Schema.Types.ObjectId,
        required: false,
      },
    },
  },
  {
    timestamps: true,
  }
);

userSchema.plugin(formatDocument);

export default mongoose.models.User ||
  mongoose.model<IUserDoc>("User", userSchema);
