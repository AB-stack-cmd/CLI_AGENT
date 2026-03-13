import { betterAuth } from "better-auth"
import { prismaAdapter } from "@better-auth/prisma-adapter"
import { prisma } from "../../db.js"

export const auth = betterAuth({

  database: prismaAdapter(prisma),

  emailAndPassword: {
    enabled: true
  },

  session: {
    expiresIn: 60 * 60 * 24 * 7
  },

  trustedOrigins: [
    "http://localhost:3000"
  ],

  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }
  }

})