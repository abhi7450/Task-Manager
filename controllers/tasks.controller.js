const Task = require("../models/Tasks")

exports.getAllTasks = (req, res) => {
    res.send("get all the task")
}

exports.createTask = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
}

exports.getTasks = (req, res) => {
    res.json({ id: req.params.id })
}

exports.updateTask = (req, res) => {
    res.send("update the task")
}

exports.deleteTask = (req, res) => {
    res.send("delete the task")
}
