import NextAuth, { DefaultUser } from "next-auth";

declare module "next-auth/jwt" {
  interface JWT {
    token: string;
    iat: number;
    exp: number;
    jti: string;
  }
}

declare module "next-auth" {
  interface Session {
    user: {
      token: string;
    } & DefaultUser;
  }

  interface User {
    token: string;
  }
}
