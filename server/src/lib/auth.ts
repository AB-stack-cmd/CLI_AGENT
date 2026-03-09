import { betterAuth } from "better-auth";
import { prisma } from "./prisma";
import "dotenv/config"

// better auth instance connected to prisma database
export const auth = betterAuth(
  {
    database:prisma,
    emailAndPassword : {enabled:true},

    session:{
      expiresIn : 60 * 60* 24 * 7
    },

   socialProviders: { 
    github: { 
      clientId: process.env.GITHUB_CLIENT_ID as string, 
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string, 
     }, 
    }
  }
);