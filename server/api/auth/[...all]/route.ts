import { auth } from "../../../src/lib/auth"; // better auth connected to prisma and neon
import { toNextJsHandler } from "better-auth/next-js";

export const { POST, GET } = toNextJsHandler(auth);