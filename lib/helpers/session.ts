import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"

export const getSession = async () => {
    const session: any = await getServerSession(authOptions)
    let sessionId
    if (session && session.user._id) {
        sessionId = session.user._id
    }
    return sessionId
}

