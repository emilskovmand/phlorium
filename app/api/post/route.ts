import { connect } from "@/lib/db"
import postModel from "@/models/post.model"
import { NextRequest } from "next/server"
import { getSession } from "@/lib/helpers/session"

interface IAddPost {
    title: string
    text: string
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


    if (newPost) {
        return new Response(newPost, { status: 201 })
    } else {
        return new Response("Post could not be created", { status: 500 })
    }
}

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

    return Response.json([...post])
}
