import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PendingTasks from './components/PendingTasks';
import InProgressTasks from './components/InProgressTasks';
import CompletedTasks from './components/CompletedTasks';
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/tasks');
        setTasks(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTasks();
  }, []);

  const addTask = async (newTask) => {
    try {
      const response = await axios.post('http://localhost:5001/api/tasks', newTask);
      setTasks([...tasks, response.data]);
    } catch (err) {
      console.error(err);
    }
  };

  const updateTaskStatus = async (id, newStatus) => {
    try {
      const response = await axios.put(`http://localhost:5001/api/tasks/${id}`, { status: newStatus });
      setTasks(tasks.map((task) => (task._id === id ? response.data : task)));
    } catch (err) {
      console.error(err);
    }
  };

  const getPendingTasks = () => tasks.filter((task) => task.status === 'pending');
  const getInProgressTasks = () => tasks.filter((task) => task.status === 'inProgress');
  const getCompletedTasks = () => tasks.filter((task) => task.status === 'completed');

  return (
    <div className='main'>
      <h1>Dynamic To-Do List</h1>
      <div className='card-container'>
        <div className='card'>
          <PendingTasks tasks={getPendingTasks()} addTask={addTask} updateTaskStatus={updateTaskStatus} />
        </div>
        <div className='card'>
          <InProgressTasks tasks={getInProgressTasks()} updateTaskStatus={updateTaskStatus} />
        </div>
        <div className='card'>
          <CompletedTasks tasks={getCompletedTasks()} />
        </div>
      </div>
    </div>
  );
};

export default App;