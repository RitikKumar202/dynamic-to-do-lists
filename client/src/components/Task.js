import React from 'react';

const Task = ({ task, updateTaskStatus }) => {
    const handleStatusChange = (newStatus) => {
        updateTaskStatus(task._id, newStatus);
    };

    return (
        <div className='task-details'>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            {task.status === 'pending' && (
                <button className='btn pending-btn' onClick={() => handleStatusChange('inProgress')}>Start</button>
            )}
            {task.status === 'inProgress' && (
                <button className='btn inProgress-btn' onClick={() => handleStatusChange('completed')}>Complete</button>
            )}
            {task.status === 'completed' && <p>Completed at: {task.completedAt}</p>}
        </div>
    );
};

export default Task;