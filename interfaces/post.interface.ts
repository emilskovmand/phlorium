import { Document, Types } from "mongoose"
import { IUser } from "./user.interface"

export interface IPost {
  _id?: any
  id?: any,
  title: string
  text: string
  decals: string[]
  user?: string | IUser | Types.ObjectId
  createdAt?: Date
  updatedAt?: Date
}

export interface IPostDoc extends IPost, Document {}

export interface IPostFilter {
    title?: string
    username?: string
    userId?: string
    decals?: string[]
    page?: number
}
