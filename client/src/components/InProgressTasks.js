import React from 'react';
import Task from './Task';

const InProgressTasks = ({ tasks, updateTaskStatus }) => {
    return (
        <>
            <h2>IN PROGRESS {tasks.length >= 1 && (tasks.length + (tasks.length > 1 ? " ISSUES" : " ISSUE"))}</h2>
            {tasks.map((task) => (
                <Task key={task._id} task={task} updateTaskStatus={updateTaskStatus} />
            ))}
        </>
    );
};

export default InProgressTasks;