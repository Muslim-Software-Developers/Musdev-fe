import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, { User } from "next-auth";
import type { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import axios from "axios";
import { BASE_URL } from "@/utils/constants";
import { extractAxiosError } from "@/utils/helpers";

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "jsmith",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        // console.log("Credentials", credentials);
        const { email, password } = credentials as any;

        try {
          const { data } = await axios.post(`${BASE_URL}/api/v1/auth/login`, {
            email,
            password,
          });

          if (!data) return null;

          return data.data;
        } catch (error) {
          console.log(error);
          console.log(extractAxiosError(error));
          throw new Error(extractAxiosError(error));
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    // maxAge: 60 * 60, // 1h
  },
  callbacks: {
    async jwt({ token, account, user, profile, session }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      // @ts-ignore
      session.user = token as JWT & User;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);
