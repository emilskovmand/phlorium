import { IPostDoc } from "@/interfaces/post.interface"
import formatDocument from "@/lib/formatDocument"
import mongoose, { Schema } from "mongoose"

// Define the schema for the Post model
const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            index: true,
        },
        text: {
            type: String,
            required: true,
            index: true,
        },
        decals: [
            {
                type: String,
                index: true,
            },
        ],
        createdAt: {
            type: Date,
            default: Date.now,
        },
        updatedAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
)

postSchema.plugin(formatDocument)

export default mongoose.models.Post || mongoose.model<IPostDoc>("Post", postSchema)