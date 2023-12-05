import { connect } from "@/lib/db"
import postModel from "@/models/post.model"
import { NextRequest } from "next/server"

interface IAddPost {
    title: string
    text: string
}

export const POST = async (req: NextRequest) => {
    connect()

    const { title, text } = (await req.json()) as IAddPost

    if (!title) {
        return new Response("title_missing", { status: 400 })
    } else if (!text) {
        return new Response("text_missing", { status: 400 })
    }

    const newPost = await postModel.create({
        title,
        text,
    })

    const savedPost = await newPost.save()

    if (newPost) {
        return new Response(savedPost, { status: 201 })
    } else {
        return new Response("Post could not be created", { status: 500 })
    }
}
