import { IDecal } from "@/interfaces/decal.interface"
import { connect } from "@/lib/db"
import decalModel from "@/models/decal.model"
import postModel from "@/models/post.model"
import userModel from "@/models/user.model"
import { HydratedDocument } from "mongoose"
import { getServerSession } from "next-auth"
import { NextRequest } from "next/server"
import { authOptions } from "../auth/[...nextauth]/route"

interface IAddPost {
    title: string
    text: string
    decals: string[]
}

// Get the session from the server of the authenticated user
const getSession = async () => {
    const session: any = await getServerSession(authOptions)
    let sessionId
    if (session && session.user._id) {
        sessionId = session.user._id
    }
    return sessionId
}

// Create and add new post to database
export const POST = async (req: NextRequest) => {
    connect()

    try {
        const session = await getSession()

        const { title, text, decals } = (await req.json()) as IAddPost

        if (!title) {
            return new Response("title_missing", { status: 400 })
        } else if (!text) {
            return new Response("text_missing", { status: 400 })
        } else if (!decals) {
            return new Response("decals_missing", { status: 400 })
        }

        for (const decal of decals) {
            const existingDecal = await decalModel.findOne({ title: decal })
            if (existingDecal) {
                return new Response("decal_exists", { status: 400 })
            }
        }

        // Create decals if they don't exist
        const decalDocs: HydratedDocument<IDecal>[] = [] as any
        for (const decal of decals) {
            const decalDoc = await decalModel.findOneAndUpdate({ title: decal }, { title: decal }, { upsert: true, new: true })
            decalDocs.push(decalDoc)
        }

        const newPost = await postModel.create({
            title,
            text,
            decals: decalDocs,
            user: session,
        })

        return new Response(newPost, { status: 201 })
    } catch (error) {
        return new Response(error as any, { status: 500 })
    }
}

// Get all the latest (10) posts from the database
export const GET = async (req: NextRequest) => {
    await connect()

    const username = req.nextUrl.searchParams.get("username")
    const title = req.nextUrl.searchParams.get("title")
    const userId = req.nextUrl.searchParams.get("userId")
    const decals = req.nextUrl.searchParams.get("decals")
    const page = req.nextUrl.searchParams.get("page") || "1"

    const post = await postModel
        .find()
        .skip((parseInt(page) - 1) * 10)
        .limit(10)
        .populate({ path: "user", model: userModel })
        .populate({ path: "decals", model: decalModel })

    return Response.json([...post])
}
