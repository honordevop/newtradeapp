import NextAuth, { NextAuthOptions } from "next-auth";
// import CredentialProvider from "next-auth/providers/credentials";
import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/utils/db";
import Users from "@/models/Users";
import bcrypt from "bcryptjs";

const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        await connect();

        const { email, password } = credentials;
        try {
          const user = await Users.findOne({
            email: email,
          });

          if (user) {
            //check password
            const isPasswordCorrect = await bcrypt.compare(
              password,
              user.password
            );

            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error("Wrong Credentials");
            }
          } else {
            throw new Error("User not found!");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
  pages: {
    signIn: "/trade/login",
    error: "/trade/login",
  },
  site: process.env.NEXTAUTH_URL,
  signIn: {
    csrf: false,
  },
};

const handler = NextAuth(authOptions);
// export default NextAuth(authOptions);

export { handler as GET, handler as POST };
