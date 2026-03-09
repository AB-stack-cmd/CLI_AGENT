import express from "express"
import CORS from "cors"
import { auth } from "./src/lib/auth"
import { toNodeHandler } from "better-auth/node";

const app = express()

app.use(CORS())

const port = 3002;

app.all("/api/auth/*", toNodeHandler(auth)); // connect every routh to auth instance

app.use(express.json())

app.get("/", (req, res) => {
    res.send("server Running,..")
})

app.listen(port, () => {
    console.log(`server is running... http://localhost:${port}`)
})