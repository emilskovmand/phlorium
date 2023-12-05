import { Document } from "mongoose"

interface IPost extends Document {
    title: string
    text: string
    decals: string[]
    createdAt: Date
    updatedAt: Date
}

export interface IPostDoc extends IPost, Document {}
