import { connect } from "@/lib/db";
import userModel from "@/models/user.model";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user?.id) token._id = user.id;
      return token;
    },
    async session({ session, token }) {
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Registration
        connect();
        const existingUser = await userModel.findOne({
          email: credentials?.email,
        });

        if (existingUser) {
          return null;
        }

        const hashedPassword = bcrypt.hashSync(credentials?.password || "", 10);

        const newUser = new userModel({
          email: credentials?.email,
          password: hashedPassword,
        });

        await newUser.save();

        return {
          id: newUser.id,
        };
        /* if (req.method === "POST") {
          // Registration
          connect();
          const existingUser = await User.findOne({
            email: credentials?.email,
          });

          if (existingUser) {
            return null;
          }

          const hashedPassword = bcrypt.hashSync(
            credentials?.password || "",
            10
          );

          const newUser = new User({
            email: credentials?.email,
            password: hashedPassword,
          });

          await newUser.save();

          return {
            id: newUser.id,
          };
        } else if (req.method === "GET") {
          connect();
          const user = await User.findOne({ email: credentials?.email });
          if (
            user &&
            bcrypt.compareSync(credentials?.password || "", user.password || "")
          ) {
            console.log(user);
            return {
              id: user.id,
            };
          }
        } */
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
