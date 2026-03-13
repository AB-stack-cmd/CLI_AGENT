import { createAuthClient } from "better-auth/client";

/* better-auth http route sends data to db
    also connected with server route*/
export const authClient = createAuthClient({
    baseURL: "http://localhost:3002",
})