import { Document, Types } from "mongoose"
import { IUserDoc } from "./user.interface"

interface IPost extends Document {
    title: string
    text: string
    decals: string[]
    user?: string | IUserDoc | Types.ObjectId
    createdAt?: Date
    updatedAt?: Date
}

export interface IPostDoc extends IPost, Document {}
