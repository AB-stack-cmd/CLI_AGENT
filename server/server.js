import express from "express"
import CORS from "cors"
import { auth } from "./src/lib/auth.js"
import { toNodeHandler } from "better-auth/node";
import "dotenv/config"

const app = express()

app.use(CORS())

const port = process.env.PORT;

app.all("api/auth/*all", toNodeHandler(auth)); // connect every routh to auth instance

app.use(express.json())

app.get("/", (req, res) => {
    res.send("server Running,..")
})

app.listen(port, () => {
    console.log(`server is running... http://localhost:${port}`)
})