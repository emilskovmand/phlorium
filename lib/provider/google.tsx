import { IUser } from "@/interfaces/user.interface";
import userModel from "../../models/user.model";
import { connect } from "../db";

interface IHandleGoogleProvider {
    googleEmail?: string,
    fullName?: string,
    accountId?: string,
    email_verified?: boolean,
    refresh_token?: string,
    access_token?: string,
    imageUrl?: string
}

async function HandleGoogleProvider({ googleEmail, fullName, accountId, email_verified, refresh_token, access_token, imageUrl }: IHandleGoogleProvider) {
    await connect()

    const googleCredentials = {
        accountId: accountId,
        fullName: fullName,
        googleEmail: googleEmail,
        verified: email_verified,
        refresh_token: refresh_token,
        imageUrl: imageUrl
    } as any

    try {
        const lookUpQuery = { 'googleCredentials.googleEmail': googleEmail };

        const userExists = await userModel.findOne(lookUpQuery);

        if (userExists) {
            const updatedUser = await userModel.findOneAndUpdate(lookUpQuery, {
                'googleCredentials.refresh_token': googleCredentials.refresh_token
            })

            return true;
        } else {
            const newUser = new userModel({
                googleCredentials: googleCredentials,
                email: googleEmail
            } as IUser);

            const userCreated = await newUser.save();
            return true;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

export default HandleGoogleProvider