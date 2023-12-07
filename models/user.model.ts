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
      required: false,
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
      required: false,
    },
    password: {
      type: String,
      required: false,
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
    googleCredentials: {
      googleEmail: {
        type: String,
        required: false,
        unique: true,
      },
      refresh_token: {
        type: String,
        required: false,
      },
    },
    settings: {
      displayname: {
        type: String,
        required: false,
      },
      about: {
        type: String,
        required: false,
      },
      colormode: {
        type: String,
        required: false,
      }
    }
  },
  {
    timestamps: true,
  }
);

userSchema.plugin(formatDocument);

export default (mongoose.models.User as mongoose.Model<IUserDoc>) ||
  mongoose.model<IUserDoc>("User", userSchema);
