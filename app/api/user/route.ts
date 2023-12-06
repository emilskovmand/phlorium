import { connect } from "@/lib/db";

interface IHandleSettings {
    displayname?: string,
    about?: string,
    colormode?: string,
    profilePicture?: Types.ObjectId | string,
}

async function HandleSettings({ displayname, about, colormode, profilePicture }: IHandleSettings) {
    await connect()

    const settings = {
        displayname: displayname,
        about: about,
        colormode: colormode,
        profilePicture: profilePicture
    } as any

}

export default HandleSettings

