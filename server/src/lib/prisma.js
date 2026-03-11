import { PrismaClient } from "@prisma/client"
import { PrismaPg } from "@prisma/adapter-pg";

//connect to neon db key
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });