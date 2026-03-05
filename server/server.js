import express from "express"


const app = express()

const port = 3001;

app.get("/", (req, res) => {
    res.send("server Running,..")
})

app.listen(port, () => {
    console.log(`server is running... http://localhost:${port}`)
})