const express = require('express');
const Task = require('../models/Task');

const router = express.Router();

// This route handles the creation of a new task.
router.post('/', async (req, res) => {
    const { title, description } = req.body;
    const newTask = new Task({ title, description });
    try {
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// This route handles retrieving all tasks from the database.
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// This route handles updating the status of a task.
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
        let updatedTask;
        if (status === 'completed') {
            updatedTask = await Task.findByIdAndUpdate(
                id,
                { status, completedAt: new Date() },
                { new: true }
            );
        } else {
            updatedTask = await Task.findByIdAndUpdate(id, { status }, { new: true });
        }
        res.json(updatedTask);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;