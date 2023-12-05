import { connect } from "@/lib/db"
import userModel from "@/models/user.model"
import bcrypt from "bcryptjs"
import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (credentials?.email.length === 0 || credentials?.password.length === 0) return null
                await connect()
                const userDoc = await userModel.findOne({ email: credentials?.email }).select("+password")
                if (userDoc) {
                    const auth: any = new Promise((resolve, reject) => {
                        bcrypt.compare(credentials?.password || "", userDoc.password, function (err, isSame) {
                            if (isSame) {
                                // Info stored in session
                                resolve({
                                    _id: userDoc._id,
                                    id: userDoc._id.toString(),
                                    email: userDoc.email,
                                    username: userDoc.username,
                                    createdAt: userDoc.createdAt,
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
        async signIn({ user, account }) {
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
        redirect({ url, baseUrl }) {
            return baseUrl
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
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
