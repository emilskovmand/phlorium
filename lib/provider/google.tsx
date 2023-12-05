import User from "../../models/user.model";
import { connect } from "../db";

async function HandleGoogleProvider({ googleEmail, fullName, accountId, email_verified, refresh_token, access_token, imageUrl }: any) {
    await connect();

    const googleCredentials = {
        accountId: accountId,
        fullName: fullName,
        googleEmail: googleEmail,
        verified: email_verified,
        refresh_token: refresh_token,
        imageUrl: imageUrl
    }

    try {
        const lookUpQuery = { 'googleCredentials.googleEmail': googleEmail };

        const userExists = await User.findOne(lookUpQuery);

        if (userExists) {
            const updatedUser = await User.findOneAndUpdate(lookUpQuery, {
                access_token: access_token,
                'googleCredentials.refresh_token': googleCredentials.refresh_token
            })

            return true;
        } else {
            const newUser = new User({
                password: access_token,
                access_token: access_token,
                googleCredentials: googleCredentials
            });

            const userCreated = await newUser.save();
            return true;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

export default HandleGoogleProvider