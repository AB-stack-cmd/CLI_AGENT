import { PrismaClient } from "@prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import "dotenv/config"
const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL
})
// prisma instance
export const prisma = new PrismaClient({ adapter })