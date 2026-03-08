import { betterAuth } from "better-auth";
import { prisma } from "./prisma";

// better auth instance connected to prisma database
export const auth = betterAuth(
  {
    database:prisma,
    emailAndPassword : {enabled:true},

    session:{
      expiresIn : 60 * 60* 24 * 7
    },

    socialProviders:{
      github:
    }
  }
);