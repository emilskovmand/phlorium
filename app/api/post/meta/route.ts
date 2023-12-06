import { IPostFilter } from "@/interfaces/post.interface"
import { connect } from "@/lib/db"
import postModel from "@/models/post.model"
import userModel from "@/models/user.model"
import { Types } from "mongoose"
import { NextApiRequest } from "next"

export const GET = async (req: NextApiRequest) => {
    await connect()

    const { title, username, userId, decals } = req.query as IPostFilter

    const user = await userModel.findOne({ $or: [{username}, {_id: new Types.ObjectId(userId)}] })

    const posts = await postModel.countDocuments({ $and: [
            (title ? { title: { $regex: title, $options: "i" }} : {}),
            (user ? { user: user?._id } : {}),
            // { decals }
        ] 
    })

    return Response.json({posts})

}
