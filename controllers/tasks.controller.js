const Task = require("../models/Tasks.model")

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(201).json({ tasks })
    } catch (error) {
        res.status(500).json({
            message: error,
        })
    }
}

exports.createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({
            message: error,
        })
    }
}

exports.getTasks = async (req, res) => {
    try {
        const { id: taskId } = req.params
        const task = await Task.findOne({ _id: taskId })
        if (!task) {
            return res
                .status(404)
                .json({ message: `No task with id ${taskId}` })
        }
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({
            message: error,
        })
    }
}

exports.updateTask = (req, res) => {
    res.send("update the task")
}

exports.deleteTask = (req, res) => {
    res.send("delete the task")
}
