import { Document } from "mongoose"

interface IPost extends Document {
    title: string
    text: string
    tags: string[]
    replies: string[]
    createdAt: Date
    updatedAt: Date
}

export interface IPostDoc extends IPost, Document {}
