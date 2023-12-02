import { RegisterError } from "@/components/modals/Signup"
import { connect } from "@/lib/db"
import userModel from "@/models/user.model"
import bcrypt from "bcryptjs"
import * as EmailValidator from "email-validator"
import { NextRequest } from "next/server"

interface IRegisterBody {
    username: string
    email: string
    password: string
    birthdate: string
}

export const POST = async (req: NextRequest) => {
    await connect()

    // Sætter data felterne i body
    const { username, email, password, birthdate } = (await req.json()) as IRegisterBody

    // Tjekker på om det er en valid email der er blevet skrevet
    if (EmailValidator.validate(email) === false) {
        return new Response("email_invalid" as RegisterError, { status: 400 })
    }

    // Tjekker hvis user findes
    const userExist = await userModel.findOne({ $or: [{ email }, { username }] })

    // Hvis user findes, returner en 400
    if (userExist) {
        const usernameOccupied = userExist.username === username
        const emailOccupied = userExist.email === email

        if (usernameOccupied) {
            return new Response("username_occupied" as RegisterError, { status: 400 })
        }

        if (emailOccupied) {
            return new Response("email_occupied" as RegisterError, { status: 400 })
        }
    }

    // Opretter user
    const newUser = await userModel.create({
        username,
        email,
        password: await bcrypt.hash(password, 10),
        birthdate,
    })

    // Hvis user er oprettet, returner en 201
    if (newUser) {
        return new Response(null, { status: 201 })
    } else {
        return new Response(null, { status: 500 })
    }
}
