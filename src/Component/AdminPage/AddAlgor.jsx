import React, { useState } from 'react';
import axios from 'axios';

function AddTaskForm() {
  const [taskData, setTaskData] = useState({
    taskDescription: '',
    taskChecker: '',
    algorithmTag: ''
  });

  const handleChange = (event) => {
    setTaskData({ ...taskData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`https://your-api-url/algorithms/${taskData.algorithmTag}/tasks`, {
        description: taskData.taskDescription,
        checker: taskData.taskChecker
      });
      console.log('Task added:', response.data);
      setTaskData({ taskDescription: '', taskChecker: '', algorithmTag: '' });  // Reset form
    } catch (error) {
      console.error('Failed to add task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Task Description:
        <textarea name="taskDescription" value={taskData.taskDescription} onChange={handleChange} />
      </label>
      <label>Task Checker:
        <textarea name="taskChecker" value={taskData.taskChecker} onChange={handleChange} />
      </label>
      <label>Algorithm Tag:
        <input type="text" name="algorithmTag" value={taskData.algorithmTag} onChange={handleChange} />
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTaskForm;
