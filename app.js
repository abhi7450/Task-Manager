const express = require("express")
const app = express()
const tasks = require("./routes/tasks.route")
const { connectDB } = require("./db/connect")
require("dotenv").config()
//middleware

app.use(express.json())

app.get("/hello", (req, res) => {
    res.status(200).send({
        message: "Task Manager App",
    })
})

app.use("/api/v1/tasks", tasks)

/**
 * app.get("/api/v1/tasks")         -> gets all the task
 * app.post("/api/v1/tasks")        -> create a new task
 * app.get("/api/v1/tasks/:id")     -> gets single task
 * app.patch("/api/v1/tasks/:id")   -> updates task
 * app.delete("/api/v1/tasks/:id")  -> deletes task
 */
const PORT = 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => console.log(`Listening at port at ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()
