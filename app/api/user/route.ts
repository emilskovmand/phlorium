import { ISettingsForm } from "@/app/settings/page"
import { connect } from "@/lib/db"
import { getSession } from "@/lib/helpers/session"
import userModel from "@/models/user.model"
import { NextRequest } from "next/server"

export async function PATCH(req: NextRequest) {
    await connect()

    const session = await getSession()

    if (!session) {
        return Response.json({})
    }

    const user = await userModel.findOne({ _id: session })

    const { settings } = (await req.json()) as ISettingsForm

    if (user) {
        user.settings ||= {}
        user.settings.displayname = settings?.displayname
        user.settings.about = settings?.about
        user.settings.colormode = settings?.colormode
        await user.save()
    }

    return Response.json({ success: true })

}
