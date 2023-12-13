import { IDecalDoc } from "@/interfaces/decal.interface"
import formatDocument from "@/lib/formatDocument"
import mongoose, { Schema } from "mongoose"

// Define the schema for the Decal model
const decalSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            index: true,
            unique: true,
        },
    },
    {
        timestamps: true,
    }
)

decalSchema.plugin(formatDocument)

export default mongoose.models.Decal || mongoose.model<IDecalDoc>("Decal", decalSchema)
