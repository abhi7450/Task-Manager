const express = require("express")
const router = express.Router()
const {
    getAllTasks,
    getTasks,
    createTask,
    deleteTask,
    updateTask,
} = require("../controllers/tasks.controller")

router.route("/").get(getAllTasks).post(createTask)
router.route("/:id").get(getTasks).patch(updateTask).delete(deleteTask)

module.exports = router
