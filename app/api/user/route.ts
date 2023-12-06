import { connect } from "@/lib/db";
import userModel from "@/models/user.model";
import { Types } from "mongoose";

interface IHandleSettings {
    id: string;
    displayname?: string;
    about?: string;
    colormode?: string;
    profilePicture?: Types.ObjectId | string;
}

async function HandleSettings({ id, displayname, about, colormode, profilePicture }: IHandleSettings) {
    const db = await connect();

    try {
        const user = await userModel.findOneAndUpdate(
            { _id: id },
            {
                $set: {
                    displayname,
                    about,
                    colormode,
                    profilePicture,
                },
            },
            { new: true }
        );

    } catch (error) {
        console.log('error');
        return false;
    }
}

export default HandleSettings;
