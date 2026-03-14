import { betterAuth } from "better-auth";
import { prisma } from "../db.js";
import { prismaAdapter } from "@better-auth/prisma-adapter"
import "dotenv/config"

export const auth = betterAuth({

    database: prismaAdapter(prisma, {}),

    emailAndPassword: {
        enabled: true
    },

    session: {
        expiresIn: 60 * 60 * 24 * 7
    },

    // origin of nextjs
    trustedOrigins: [
        "http://localhost:3000"
    ],

    // connects to github
    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }
    }

})