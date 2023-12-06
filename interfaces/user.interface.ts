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
  googleCredentials?: {
    googleEmail?: string;
    refresh_token?: string;
  }
  settings?: {
    displayname?: string;
    about?: string;
    colormode?: string;
  }

}

export interface IUserDoc extends IUser, Document { }
