import express from "express"
import CORS from "cors"

const app = express()

app.use(CORS())

const port = 3002;

app.get("/", (req, res) => {
    res.send("server Running,..")
})

app.listen(port, () => {
    console.log(`server is running... http://localhost:${port}`)
})