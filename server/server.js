import express from "express"
import cors from "cors"
import { auth } from "./src/lib/auth.js"
import { toNodeHandler } from "better-auth/node";
import "dotenv/config"

const app = express()

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,                 // allow cookies
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))

const port = process.env.PORT;
app.use(express.json())
// important: respond to preflight before auth routes


app.all("/api/auth/*all", toNodeHandler(auth)); // connect every routh to auth instance



app.get("/", (req, res) => {
    res.send("server Running,..")
})

app.listen(port, () => {
    console.log(`server is running... http://localhost:${port}`)
})