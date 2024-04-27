import React, { useState } from 'react';
import axios from 'axios';

function DeleteTaskForm() {
  const [taskId, setTaskId] = useState('');

  const handleChange = (event) => {
    setTaskId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.delete(`https://your-api-url/tasks/${taskId}`);
      console.log('Task deleted:', response.data);
      alert('Task deleted successfully!');
      setTaskId('');  // Reset the task ID field
    } catch (error) {
      console.error('Failed to delete task:', error);
      alert('Failed to delete task.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Task ID:
        <input type="text" value={taskId} onChange={handleChange} />
      </label>
      <button type="submit">Delete Task</button>
    </form>
  );
}

export default DeleteTaskForm;
