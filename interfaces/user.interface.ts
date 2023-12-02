import { Document, Types } from "mongoose";

export interface IUser {
  id?: any;
  name: string;
  username: string;
  email: string;
  password?: string;
  birthdate?: Date;
  updatedAt?: Date;
  createdAt?: Date;
  profileImages?: {
    profilePicture?: Types.ObjectId | string;
  };
}

export interface IUserDoc extends IUser, Document {}
