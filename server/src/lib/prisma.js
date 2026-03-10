import { PrismaClient } from "@prisma/client"


//connect to neon db key
export const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL
})