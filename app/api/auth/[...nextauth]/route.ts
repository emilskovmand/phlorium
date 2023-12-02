import { connect } from "@/lib/db"
import userModel from "@/models/user.model"
import bcrypt from "bcryptjs"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                username: { label: "Username", type: "text" },
                birthdate: { label: "Date of Birth", type: "date" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (credentials?.email.length === 0 || credentials?.email.length === 0) return null
                await connect()
                const response = await userModel.findOne({ email: credentials?.email })
                const user = response
                if (response) {
                    const auth: any = new Promise((resolve, reject) => {
                        bcrypt.compare(credentials?.password || "", response.password, function (err, isSame) {
                            if (isSame) {
                                // Info stored in session
                                resolve({
                                    _id: user._id,
                                    id: user._id.toString(),
                                    email: user.email,
                                    username: user.username,
                                    birthdate: user.birthdate,
                                    CreatedTimestamp: user.CreatedTimestamp,
                                })
                            } else {
                                resolve(null)
                            }
                        })
                    })
                    return await auth
                } else {
                    return null
                }
            },
        }),
    ],
    callbacks: {
        async session({ session, token }) {
            session.user = token.user as any
            return session
        },
        async jwt({ token, user, account }) {
            if (user) token.user = user
            if (account) (token.user as any).provider = account.provider
            return token
        },
        async signIn({ user, account, profile, email, credentials }) {
            let authUser = false

            if (account?.provider === "credentials") {
                await userModel.findByIdAndUpdate(user.id, {
                    lastLoginDate: new Date(),
                })
                authUser = true
            }

            if (authUser) return true
            else return false
        },
    },
    secret: process.env.JWT_SECRET,
    jwt: {
        secret: process.env.JWT_SECRET,
    },
    pages: {
        signIn: "/login",
        newUser: "/register",
    },
})

export { handler as GET, handler as POST }
