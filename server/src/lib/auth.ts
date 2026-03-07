import { betterAuth } from "better-auth";
<<<<<<< HEAD
import { prismaAdapter } from "better-auth/adapters/prisma";
// If your Prisma file is located elsewhere, you can change the path


export const auth = betterAuth({
  //...
  database: prismaAdapter()
=======

export const auth = betterAuth({
  //...
>>>>>>> 352929ec5fa5ff03440af4f514762ac6d589fedf
});