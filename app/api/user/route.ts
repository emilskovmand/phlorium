import { ISettingsForm } from "@/app/settings/page"
import { connect } from "@/lib/db"
import { getSession } from "@/lib/helpers/session"
import userModel from "@/models/user.model"
import _ from "lodash"
import { NextRequest } from "next/server"

export async function PATCH(req: NextRequest) {
  await connect()

  const session = await getSession()

  if (!session) {
    return Response.json({})
  }

  let user = await userModel.findOne({ _id: session })

  const userUpdateForm = (await req.json()) as ISettingsForm

  if (user) {
    user = _.merge(user || {}, _.omit(userUpdateForm, [
      '_id',
      'id',
      'username',
      'email',
      'password',
      'profileImages',
      'googleCredentials',
    ]))
    await user.save()
  }

  return Response.json({ success: true })

}
