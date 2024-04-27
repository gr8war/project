import React, { useState } from 'react';
import axios from 'axios';

function AddTaskToAlgorithm() {
  const [taskData, setTaskData] = useState({
    description: '',
    checker: '',
    tag: ''  // This is the tag of the algorithm to which the task will be added
  });

  const handleChange = (event) => {
    setTaskData({ ...taskData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Check if all fields are filled
    if (!taskData.tag || !taskData.description || !taskData.checker) {
      alert('Please fill in all fields.');
      return;
    }
    try {
      const response = await axios.post(`https://your-api-url/algorithms/${taskData.tag}/tasks`, {
        description: taskData.description,
        checker: taskData.checker
      });
      console.log('Task added:', response.data);
      alert('Task added successfully to the algorithm!');
      setTaskData({ description: '', checker: '', tag: '' });  // Reset form after successful submission
    } catch (error) {
      console.error('Failed to add task:', error);
      alert('Failed to add task. Make sure the algorithm tag is correct.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Algorithm Tag:
        <input type="text" name="tag" value={taskData.tag} onChange={handleChange} />
      </label>
      <label>Task Description:
        <textarea name="description" value={taskData.description} onChange={handleChange} />
      </label>
      <label>Task Checker:
        <textarea name="checker" value={taskData.checker} onChange={handleChange} />
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTaskToAlgorithm;
