import { betterAuth } from "better-auth";
import { prisma } from "./prisma.ts";
import { prismaAdapter } from "@better-auth/prisma-adapter";
import "dotenv/config";

export const auth = betterAuth({
  database: 
    prisma,

  emailAndPassword: {
    enabled: true,
  },

  session: {
    expiresIn: 60 * 60 * 24 * 7,
  },

  trustedOrigins: ["http://localhost:3000"],

  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
  },
});