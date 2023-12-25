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
      user: User;
    } & DefaultUser;
  }

  interface User {
    name: string;
    email: string;
    is_admin: boolean;
  }
}
