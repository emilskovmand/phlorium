import { connect } from "@/lib/db"
import postModel from "@/models/post.model"
import { getServerSession } from "next-auth"
import { NextRequest } from "next/server"
import { authOptions } from "../auth/[...nextauth]/route"

interface IAddPost {
    title: string
    text: string
}

const getSession = async () => {
    const session: any = await getServerSession(authOptions)
    let sessionId
    if (session && session.user._id) {
        sessionId = session.user._id
    }
    return sessionId
}

export const POST = async (req: NextRequest) => {
    connect()

    const session = await getSession()

    const { title, text } = (await req.json()) as IAddPost

    if (!title) {
        return new Response("title_missing", { status: 400 })
    } else if (!text) {
        return new Response("text_missing", { status: 400 })
    }

    const newPost = await postModel.create({
        title,
        text,
        user: session,
    })

    const savedPost = await newPost.save()

    if (newPost) {
        return new Response(savedPost, { status: 201 })
    } else {
        return new Response("Post could not be created", { status: 500 })
    }
}
