import { connect } from "@/lib/db"
import userModel from "@/models/user.model"
import bcrypt from "bcryptjs"
import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import HandleGoogleProvider from '../../../../lib/provider/google'

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
                        bcrypt.compare(credentials?.password || "", userDoc.password || "", function (err, isSame) {
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

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
        })
    ],
    callbacks: {
        async session({ session, token }: { session: any, token: any }) {
            session.user = token.user as any

            if ((session.user as any)?.provider === "google") {
                const userDoc = await userModel.findOne({ "googleCredentials.googleEmail": session.user!!.email })
                session.user!!._id = userDoc?._id?.toString()
            }

            const userDoc = await userModel.findOne({ _id: session.user._id })
            session.user.settings = userDoc?.settings

            return session
        },
        async jwt({ token, user, account }) {
            if (user) token.user = user
            if (account) (token.user as any).provider = account.provider
            return token
        },
        async signIn({ user, account, profile }) {
            let authUser = false

            if (account?.provider === "credentials") {
                await userModel.findByIdAndUpdate(user.id, {
                    lastLoginDate: new Date(),
                })
                authUser = true
            }

            if (account?.provider === 'google') {
                authUser = await HandleGoogleProvider({
                    access_token: account.access_token,
                    email_verified: (profile as any)?.email_verified,
                    accountId: user.id,
                    fullName: user.name,
                    googleEmail: user.email,
                    imageUrl: user.image,
                    refresh_token: account.refresh_token
                } as any)
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

