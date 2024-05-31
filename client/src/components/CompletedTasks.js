import React from 'react';
import moment from "moment";

const CompletedTasks = ({ tasks }) => {

    const formatDateTime = (isoString) => {
        return moment(isoString).format("DD/MM/YYYY, hh:mm A");
    };

    return (
        <>
            <h2>DONE✅ {tasks.length >= 1 && (tasks.length + (tasks.length > 1 ? " ISSUES" : " ISSUE"))}</h2>
            {tasks.map((task) => (
                <div className='completed-task-details' key={task._id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <p>Timestamp: {formatDateTime(task.completedAt)}</p>
                </div>
            ))}
        </>
    );
};

export default CompletedTasks;