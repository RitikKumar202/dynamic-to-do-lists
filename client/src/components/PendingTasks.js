import React, { useState } from 'react';
import Task from './Task';

const PendingTasks = ({ tasks, addTask, updateTaskStatus }) => {
    const [newTask, setNewTask] = useState({ title: '', description: '' });

    const handleInputChange = (e) => {
        setNewTask({ ...newTask, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(newTask);
        setNewTask({ title: '', description: '' });
    };

    return (
        <div className='pending-task-container'>
            <h2>TO DO {tasks.length >= 1 && (tasks.length + (tasks.length > 1 ? " ISSUES" : " ISSUE"))} </h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={newTask.title}
                    onChange={handleInputChange}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Description (optional)"
                    value={newTask.description}
                    onChange={handleInputChange}
                />
                <button type="submit">Create issue</button>
            </form>
            {tasks.map((task) => (
                <Task key={task._id} task={task} updateTaskStatus={updateTaskStatus} />
            ))}
        </div>
    );
};

export default PendingTasks;